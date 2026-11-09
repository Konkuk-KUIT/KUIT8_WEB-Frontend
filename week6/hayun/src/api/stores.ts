import type { Store } from "../types/stores";
import apiClient from "./client";

type StoreListResponse = Store[];
type StoreMenuResponse = Store;
type OrderMenuRequest = {
    storeId: number,
    items: {
        menuId: number,
        quantity: number
    }[];
};
type OrderMenuResponse = {
    orderId: number,
    storeId: number,
    items: {
        menuId: number,
        name: string,
        price: number,
        quantity: number,
        subtotal: number
    }[],
    menuTotal: number,
    deliveryFee: number,
    totalPrice: number,
    status: "RECEIVED"
};

export const getStores = async (): Promise<StoreListResponse> => {
    const response = await apiClient.get<StoreListResponse>("/api/stores");

    return response.data;
}

export const getStore = async (storeId: number): Promise<StoreMenuResponse> => {
    const response = await apiClient.get<StoreMenuResponse>(`/api/stores/${storeId}`);

    return response.data;
}

export const postCart = async (order: OrderMenuRequest): Promise<OrderMenuResponse> => {
    const response = await apiClient.post<OrderMenuResponse>("/api/orders", order);

    return response.data;
};