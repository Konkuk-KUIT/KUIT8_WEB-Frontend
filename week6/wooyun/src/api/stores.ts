import type { StoreMenuResponse } from "../types/stores";

const API_BASE_URL = (
	import.meta.env.VITE_API_BASE_URL ??
	"https://kuit-8th-mission-server.vercel.app"
).replace(/\/$/, "");

interface ApiErrorResponse {
	code?: string;
	message?: string;
}

export class StoreApiError extends Error {
	status: number;
	code?: string;

	constructor(status: number, response: ApiErrorResponse) {
		super(response.message ?? "가게 정보를 불러오지 못했습니다.");
		this.name = "StoreApiError";
		this.status = status;
		this.code = response.code;
	}
}

export const getStore = async (
	storeId: string,
	signal?: AbortSignal,
): Promise<StoreMenuResponse> => {
	const response = await fetch(
		`${API_BASE_URL}/api/stores/${encodeURIComponent(storeId)}`,
		{ signal },
	);

	if (!response.ok) {
		const errorResponse: ApiErrorResponse = await response
			.json()
			.catch(() => ({}));

		throw new StoreApiError(response.status, errorResponse);
	}

	return response.json() as Promise<StoreMenuResponse>;
};
