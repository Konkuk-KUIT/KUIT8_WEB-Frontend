import axios from 'axios';
import { skipToken, useQuery } from '@tanstack/react-query';
import type { Store } from '../types/stores';

const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

interface ApiError {
  code: string;
  message: string;
}

interface OrderRequest {
  storeId: number;
  items: { menuId: number; quantity: number }[];
}

interface OrderResponse {
  totalPrice: number;
}

export const isStoreNotFound = (error: unknown) =>
  axios.isAxiosError<ApiError>(error) &&
  error.response?.status === 404 &&
  error.response.data?.code === 'STORE_NOT_FOUND';

export async function getStores(signal: AbortSignal) {
  const response = await api.get<Store[]>('/api/stores', { signal });
  return response.data;
}

export function useStore(storeId: number | null) {
  return useQuery({
    queryKey: ['stores', storeId],
    queryFn: storeId === null ? skipToken : async ({ signal }) => {
      const response = await api.get<Store>(`/api/stores/${storeId}`, { signal });
      return response.data;
    },
    staleTime: 60_000,
    retry: false,
  });
}

export async function createOrder(order: OrderRequest) {
  return (await api.post<OrderResponse>('/api/orders', order)).data;
}

export function getOrderErrorMessage(error: unknown) {
  if (axios.isAxiosError<ApiError>(error) &&
      error.response?.status === 400 &&
      error.response.data?.code === 'MINIMUM_ORDER_NOT_MET') {
    return error.response.data.message;
  }
  return '주문 요청에 실패했습니다. 다시 시도해주세요.';
}
