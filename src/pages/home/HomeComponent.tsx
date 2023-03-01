import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Flex, Text } from '../../tJS/styledComponents';
import { Link } from 'react-router-dom';
import { addresses } from '../../config';
import Form from 'react-bootstrap/Form';
import { inputUpdate } from '../../tJS/functions';

export interface inventoryInterface {
  id: number,
  name: string,
  address: string,
  price: number | ""
}

export default function HomeComponent({address, setAddress, sort, setSort, inventories, page, nextPage, prevPage, invetoriesCount, deleteInventory}: 
  {
    inventories: inventoryInterface[], 
    page: number, 
    nextPage: any, 
    prevPage: any, 
    invetoriesCount: number, 
    deleteInventory: Function,
    address: string,
    setAddress: Function,
    sort: string,
    setSort: Function,
  }) {
  return (
    <div>
      <Flex mb={10}>
        <Link to="/add">
      <Button variant="success">
          <Text color='white'>დამატება</Text>
        </Button>
          </Link>
      </Flex>
      <Text fontSize={30} mb={10}>{"Page: " + page}</Text>
      <Flex mb={20} gap={10}>
        <div>
          <Form.Select {...inputUpdate(setAddress, address)}>
          <option>ყველა</option>
            {addresses.map((address, inx) => <option key={inx}>{address}</option>)}
          </Form.Select>
        </div>
        <div>
          <Form.Select {...inputUpdate(setSort, sort)}>
            <option value="ASC">თარიღი ზრდადობით</option>
            <option value="DESC">თარიღი კლებადობით</option>
          </Form.Select>
        </div>
      </Flex>
      <Table striped bordered hover size="sm" className='mytable'>
      <thead>
        <tr>
          <th>#</th>
          <th>ნივთის სახელი</th>
          <th>ნივთის ადგილმდებარეობა</th>
          <th>ფასი</th>
          <th>ოპერაციები</th>
        </tr>
      </thead>
      <tbody>
        {inventories.map((item, inx) => 
        <tr key={item.id}>
          <td>{(page -1) * 20 + inx + 1}</td>
          <td>{item.name}</td>
          <td>{item.address}</td>
          <td>{item.price}</td>
          <td><Button variant="danger" onClick={() => deleteInventory(item.id)}>წაშლა</Button></td>
        </tr>
          )}
      </tbody>
    </Table>
    <Flex gap={2} alignitems="center">
    <Button variant="primary" onClick={prevPage}>წინა გვერდი</Button>
    <Button variant="primary" onClick={nextPage}>შემდეგი გვერდი</Button>
    <Text color='#a1a1a1'>({invetoriesCount} ნივთი საწყობში)</Text>
    </Flex>
    </div>
  )
}
