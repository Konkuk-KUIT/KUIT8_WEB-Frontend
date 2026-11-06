import type { Store } from "../types/stores" ;
import appClient from "./client";

export const getStores = async ():Promise<Store[]> =>{
    const response = await appClient.get<Store[]>("/api/stores");

    return response.data;
}
