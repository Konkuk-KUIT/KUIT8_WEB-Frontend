
import apiClient from "./client";

// 서버에 전송할 주문 데이터
export interface OrderRequest {
  storeId: number;
  items: {
    menuId: number;
    quantity: number;
  }[];
}

// 서버가 반환하는 주문 결과
interface OrderResult {
  success?: boolean;
  message?: string;
  totalPrice?: number;
  totalAmount?: number;
  paymentAmount?: number;
}

export interface OrderResponse extends OrderResult {
  data?: OrderResult;
  order?: OrderResult;
}

// 주문 POST 요청
export const createOrder = async (
  order: OrderRequest
): Promise<OrderResponse> => {
  const response = await apiClient.post<OrderResponse>(
    "/api/orders",
    order
  );

  return response.data;
};
