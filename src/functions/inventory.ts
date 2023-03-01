import { inventoryInterface } from "../pages/home/HomeComponent";

export const validateInventoryData = (item: inventoryInterface) => item.address && item.name && item.price > 0 && true