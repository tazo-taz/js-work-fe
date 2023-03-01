import React, { useEffect, useState } from 'react'
import { deleteInvetoryAxios } from '../../axios/inventory';
import { counterOptionsInterface, useCounter, useFetch } from '../../tJS/customHooks'
import { Text } from '../../tJS/styledComponents';
import HomeComponent, { inventoryInterface } from './HomeComponent'

interface pages {
  count: number
}

export default function Home() {
  const [address, setAddress] = useState("ყველა")
  const [sort, setSort] = useState("ASC")
  const [counterOptions, setCounterOptions] = useState<counterOptionsInterface>({min: 1})
  // const useCounterObjects: counterOptionsInterface = {
  //   min: 1
  // }
  const {state: page, increment: nextPage, decrement: prevPage, setCounter: setPage} = useCounter(1, counterOptions)
  const [{data: pagesObj, error: pagesError}, fetchCount] = useFetch<pages>(`/inventories/count?page=${page}&address=${address}&sort=${sort}`)
  // if(pagesObj)useCounterObjects.max = Math.ceil(pagesObj.count / 20)
  const [{data: inventories, error: inventoriesError}, fetchInventories] = useFetch<inventoryInterface[]>(`/inventories?page=${page}&address=${address}&sort=${sort}`)  
  
  useEffect(() => {
    pagesObj?.count && setCounterOptions(a => ({...a, max: Math.ceil(pagesObj.count / 20) }))
  },[pagesObj?.count])

  const deleteInventory = async (id: number) => {
    const { data } = await deleteInvetoryAxios(id)
    if(data){
      fetchInventories(false)
      fetchCount(false)
    }
  }

  useEffect(() => {
    if(counterOptions.max){      
      if(counterOptions.max < page)prevPage()      
    }
    
  },[page, counterOptions.max, prevPage])

  useEffect(() => {
    setPage(1)
  },[address, sort, setPage])

  console.log(page);
  
  console.log(inventoriesError || pagesError);
  
  // if(inventoriesError || pagesError)return <Text color='red'>Something went wrong</Text>
  
  const {count: pages} = pagesObj || {}
  return (
    <HomeComponent sort={sort} setSort={setSort} address={address} setAddress={setAddress} inventories={inventories || []} invetoriesCount={pages || 1} page={page} nextPage={nextPage} prevPage={prevPage} deleteInventory={deleteInventory} />
  )
}
