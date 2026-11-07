import type {
	OrderMenuRequest,
	OrderMenuResponse,
} from "../types/orders";

const API_BASE_URL = (
	import.meta.env.VITE_API_BASE_URL ??
	"https://kuit-8th-mission-server.vercel.app"
).replace(/\/$/, "");

interface ApiErrorResponse {
	code?: string;
	message?: string;
}

export class OrderApiError extends Error {
	status: number;
	code?: string;

	constructor(status: number, response: ApiErrorResponse) {
		super(response.message ?? "주문 요청에 실패했습니다.");
		this.name = "OrderApiError";
		this.status = status;
		this.code = response.code;
	}
}

export const createOrder = async (
	order: OrderMenuRequest,
): Promise<OrderMenuResponse> => {
	const response = await fetch(`${API_BASE_URL}/api/orders`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(order),
	});

	if (!response.ok) {
		const errorResponse: ApiErrorResponse = await response
			.json()
			.catch(() => ({}));

		throw new OrderApiError(response.status, errorResponse);
	}

	return response.json() as Promise<OrderMenuResponse>;
};
