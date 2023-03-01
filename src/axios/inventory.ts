import axios from "axios";
import { inventoryInterface } from "../pages/home/HomeComponent";

const predix = "/inventories"

export const getInventoriesAxios = () => axios.get(predix)

export const createInventoryAxios = (item: inventoryInterface) => axios.post(predix, item)

export const deleteInvetoryAxios = (id: number) => axios.delete(`${predix}/${id}`)