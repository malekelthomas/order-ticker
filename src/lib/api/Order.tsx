import { Order } from "../models/Order";
import { apiWrapper, HTTPMethod } from "./API";



export const getOrders = async(token:string): Promise<Order[]> => {
    let header = new Headers();
    header.append('Authorization', `Bearer:${token}`)
    header.append('Content-Type', 'application/json')
    return apiWrapper(`https://connect.squareupsandbox.com/v2/orders/batch-retrieve`,{
        method: HTTPMethod.POST,
        headers: header
    })
}