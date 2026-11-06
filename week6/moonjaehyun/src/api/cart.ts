import type { Order, OrderMenu } from "../types/stores";
import apiClient from "./client";

interface OrderRequest {
  storeId: number;
  items: Pick<OrderMenu, "menuId" | "quantity">[];
}

export const postOrders = async (order: OrderRequest): Promise<Order> => {
  const response = await apiClient.post<Order>("/api/orders", order);

  return response.data;
};
