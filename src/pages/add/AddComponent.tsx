import React, { FormEventHandler } from 'react'
import { Button } from 'react-bootstrap'
import { Flex } from '../../tJS/styledComponents'
import { Container } from './style'
import Form from 'react-bootstrap/Form';
import { inventoryInterface } from '../home/HomeComponent';
import tJS from '../../tJS';
import { Link } from 'react-router-dom';

interface main {
    data: inventoryInterface,
    setData: React.Dispatch<React.SetStateAction<inventoryInterface>>,
    submit: FormEventHandler<HTMLFormElement>
}

export default function AddComponent({data, setData, submit}: main) {
  return (
    <Container>
        <form className='box' onSubmit={submit}>
            <Flex flexDirection='column' gap={20} p={20} bg="#f3f3f3" borderRadius={20}>
                <Form.Select {...tJS.functions.inputObjUpdate(setData, data, "address")}>
                    <option>მთავარი ოფისი</option>
                    <option>კავეა გალერია</option>
                    <option>კავეა თბილისი მოლი</option>
                    <option>კავეა ისთ ფოინთი</option>
                    <option>კავეა სითი მოლი</option>
                </Form.Select>
                <Form.Control placeholder='სახელი' {...tJS.functions.inputObjUpdate(setData, data, "name")} />
                <Form.Control type='number' placeholder='ფასი' {...tJS.functions.inputObjUpdate(setData, data, "price")} />    
                <Flex gap={10}>
                <Button type='submit' variant="success" className='fullwidth'>დამატება</Button>
                <Link to="/" className='fullwidth'>
                    <Button type='submit' variant="primary">მთავარი გვერდი</Button>
                </Link>
                </Flex>
            </Flex>
        </form>
    </Container>
  )
}
