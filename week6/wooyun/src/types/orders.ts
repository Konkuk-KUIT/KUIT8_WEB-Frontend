export interface OrderItemRequest {
	menuId: number;
	quantity: number;
}

export interface OrderMenuRequest {
	storeId: number;
	items: OrderItemRequest[];
}

export interface OrderMenuResponse {
	accepted: boolean;
	totalPrice: number;
}
