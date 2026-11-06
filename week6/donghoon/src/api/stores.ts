import type { Store } from "../types/stores";
import apiClient from "./client";

// 1. 가게 목록 조회 (파트장님 영상 속 실습)
// 여러 가게를 받아오니까 Store[] 를 반환!
export const getStores = async (): Promise<Store[]> => {
  const response = await apiClient.get<Store[]>("/api/stores");

  return response.data;
};
// apiClient.get()은 서버에 GET 요청을 보낸다.
// <Store[]>는 서버 응답 데이터를 가게 객체 배열로 취급하겠다는 TypeScript 타입
// response.data는 Axios가 받은 HTTP 응답 중 실제 JSON 데이터 부분
// Promise<Store[]>는 비동기 함수가 최종적으로 Store[] 데이터를 제공한다는 의미


// 2. 가게 상세 및 메뉴 조회 (이번 미션)
// 특정 한 가게를 받아오므로 Store을 반환!
export const getStore = async (storeId: number): Promise<Store> => {
  const response = await apiClient.get<Store>(
    `/api/stores/${storeId}`
  );

  return response.data;
};