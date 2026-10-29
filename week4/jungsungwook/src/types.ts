// src/types.ts
export type Menu = {
  id: number;
  name: string;
  isBest: boolean;
  price: number;
  ingredients: string;
};

export type store = {
  id: number;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  minDeliveryPrice: number;
  deliveryFee: number;
  menus: Menu[];
};

export type SelectedMenu = {
  menu : Menu;
  quantity : number;
}