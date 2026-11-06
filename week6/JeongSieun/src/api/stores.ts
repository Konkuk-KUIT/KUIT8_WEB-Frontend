
import type { Store } from "../types/stores";
import apiClient from "./client";

type StoresResponse = Store[] | {
  data?: Store[];
  stores?: Store[];
};

export const getStores = async (): Promise<Store[]> => {
  const response = await apiClient.get<StoresResponse>("/api/stores");

  console.log("서버 응답:", response.data);

  const result = response.data;

  if (Array.isArray(result)) {
    return result;
  }

  if (Array.isArray(result.data)) {
    return result.data;
  }

  if (Array.isArray(result.stores)) {
    return result.stores;
  }

  throw new Error("서버 응답에서 가게 목록 배열을 찾지 못했습니다.");
};


export const getStoreById = async (
  storeId: number
): Promise<Store> => {
  const response = await apiClient.get<Store>(
    `/api/stores/${storeId}`
  );

  return response.data;
};
