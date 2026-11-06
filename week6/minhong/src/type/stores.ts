export interface Menu{
    id : number;
    name : string;
    isBest : boolean;
    price : number;
    ingredients : string;
    options? : string
}

export interface Store{
    id : number;
    name : string;
    rate : number;
    reviewCnt: number;
    minDeliveryTime : number;
    maxDeliveryTime :number;
    minDeliveryPrice : number;
    deliveryFee : number;
    menus?: Menu[];
}

export interface CartItem extends Menu{
    cnt : number;
    storeId : number;
}

export interface ApiErrorResponse{
    code : string;
    message : string;
}

export interface OrderRequest {
  storeId: number;
  items: { menuId: number; quantity: number }[];
}

export interface OrderItem {
  menuId: number;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
}

export interface OrderResponse {
  orderId: number;
  storeId: number;
  items: OrderItem[];
  menuTotal: number;
  deliveryFee: number;
  totalPrice: number;
  status: string;
}