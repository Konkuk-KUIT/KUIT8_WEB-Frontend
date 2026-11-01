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

// 4주차 - 장바구니에 들어가는 메뉴
// 기존꺼 사용해서 확장해보자 (상속느낌)
export interface CartMenu extends Menu {
  options: string;
  quantity: number;
}
