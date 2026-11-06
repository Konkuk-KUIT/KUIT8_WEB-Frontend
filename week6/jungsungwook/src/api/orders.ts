import appClient from "./client";

export interface OrderRequest {
  storeId: number;
  items: {
    menuId: number;
    quantity: number;
  }[];
}

export interface OrderResponse {
  orderId: string;
  storeId: number;
  items: {
    menuId: number;
    name: string;
    price: number;
    quantity: number;
    subtotal: number;
  }[];
  menuTotal: number;
  deliveryFee: number;
  totalPrice: number;
  status: "RECEIVED";
}

export interface OrderErrorResponse {
  code: string;
  message: string;
}

export const createOrder = async (body: OrderRequest): Promise<OrderResponse> => {
  const response = await appClient.post<OrderResponse>("/api/orders", body);

  return response.data;
};
