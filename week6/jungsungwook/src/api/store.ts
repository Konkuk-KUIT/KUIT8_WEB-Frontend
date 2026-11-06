import type { StoreDetail } from "../types/stores" ;
import appClient from "./client";

export const getStore = async (id :number):Promise<StoreDetail> =>{
    const response = await appClient.get<StoreDetail>(`/api/stores/${id}`);

    return response.data;
}
