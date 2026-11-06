import type { OrderRequest, OrderResponse, Store } from "../type/stores";

import apiClient from "./client";

export const getStores = async () : Promise<Store[]> => {
    const response = await apiClient.get<Store[]>("/api/stores");
    
    return response.data;
}

export const getStoreById = async (id: number) : Promise<Store> => {
    const response = await apiClient.get<Store>(`/api/stores/${id}`);
    
    return response.data;
}

export const postOrder = async (body : OrderRequest) : Promise<OrderResponse> =>{
    const response = await apiClient.post<OrderResponse>("/api/orders", body);

    return response.data;
}