export interface Menu {
  id: number;
  name: string;
  isBest: boolean;
  price: number;
  ingredients: string;
}

export interface Store {
  id: number;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  minDeliveryPrice: number;
  deliveryFee: number;
  menus?: Menu[];
}

export interface OrderMenu {
  menuId: number;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
}

export interface Order {
  orderId: number;
  storeId: number;
  items: OrderMenu[];
  menuTotal: number;
  deliveryFee: number;
  totalPrice: number;
  status: string;
}

export const CART_STORAGE_KEY = "contain-store-ids";
