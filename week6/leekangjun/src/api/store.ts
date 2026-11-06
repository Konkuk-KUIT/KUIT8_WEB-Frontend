import type { Store } from "../types/stores";
import apiClient from "./client";

export const getStore = async(storeId: number): Promise<Store> =>{
    const response = await apiClient.get<Store>(`/api/stores/${storeId}`);

    return response.data;
}
