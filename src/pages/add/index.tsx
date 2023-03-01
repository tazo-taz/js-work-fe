import React, { useState } from 'react'
import { createInventoryAxios } from '../../axios/inventory'
import { validateInventoryData } from '../../functions/inventory'
import { inventoryInterface } from '../home/HomeComponent'
import AddComponent from './AddComponent'
import { useNavigate } from "react-router-dom";
export default function Add() {
  const [data, setData] = useState<inventoryInterface>({
    id: 0,
    name: "",
    price: "",
    address: "მთავარი ოფისი"
  })

  const navigate = useNavigate()

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(validateInventoryData(data)){
      const {data: response} = await createInventoryAxios(data)
      if(response)navigate("/")
    }else alert("შეავსეთ ყველა ველი")
    return 0
  }

  const props = {
    data, setData, submit
  }

  return (
    <AddComponent {...props} />
  )
}
