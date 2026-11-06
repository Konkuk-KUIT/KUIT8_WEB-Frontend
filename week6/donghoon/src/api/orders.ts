import apiClient from "./client";

// 서버로 보내는 요청 DTO
export interface OrderMenuRequest {
  storeId: number;
  items: {
    menuId: number;
    quantity: number;
  }[];
}

// 서버에서 받는 응답 DTO
export interface OrderMenuResponse {
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
  status: string;
}

// 주문 API 요청
export const createOrder = async (
  order: OrderMenuRequest
): Promise<OrderMenuResponse> => {
  const response = await apiClient.post<OrderMenuResponse>(
    "/api/orders",
    order
  );

  return response.data;
};
