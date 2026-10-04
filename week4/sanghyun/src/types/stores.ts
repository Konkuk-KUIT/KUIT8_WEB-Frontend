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
