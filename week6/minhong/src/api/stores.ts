import type { Store } from "../type/stores";
import apiClient from "./client";

export const getStores = async () : Promise<Store[]> => {
    const response = await apiClient.get<Store[]>("/api/stores");
    
    return response.data;
}

export const getStoreById = async (id: number) : Promise<Store> => {
    const response = await apiClient.get<Store>(`/api/stores/${id}`);
    
    return response.data;
}