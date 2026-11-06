import type { OrderMenuRequest, OrderMenuResponse } from "../types/orders";
import apiClient from "./client";

export const postOrders = async(body: OrderMenuRequest): Promise<OrderMenuResponse> =>{
    const response = await apiClient.post<OrderMenuResponse>("/api/orders",body);

    return response.data;
}