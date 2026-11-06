export interface OrderedMenuReq {
    menuId: number;
    quantity: number;
}

export interface OrderMenuRequest {
    storeId: number;
    items: OrderedMenuReq[];
}

export interface OrderedMenuRes {
    menuId: number;
    name: string;
    price: number;
    quantity: number;
    subtotal: number;
}

export interface OrderMenuResponse {
    orderId: string;
    storeId: number;
    items: OrderedMenuRes[];
    menuTotal: number;
    deliveryFee: number;
    totalPrice: number;
    status: string;
}