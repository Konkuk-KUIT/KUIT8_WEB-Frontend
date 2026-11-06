import type { Menu, Order } from "../types/stores";
import apiClient from "./client";

export const postOrders = async (
  storeId: number,
  items: Menu[],
): Promise<Order> => {
  const response = await apiClient.post<Order>("/api/orders", {
    storeId,
    items,
  });

  return response.data;
};
