
import { useState } from "react";
import type { Menu } from "../../types/stores";

import BackBar from "../../components/BackBar";
import MenuSection from "../../components/MenuSection";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreInfo from "../../components/StoreInfo";
import stores from "../../models/stores";

// 기존 Menu 타입에 수량 추가
type CartMenu = Menu & {
  quantity: number;
};

const Store = () => {
  // 3주차와 동일하게 첫 번째 가게 데이터 사용
  const store = stores[0];

  // 장바구니 상태
  const [cart, setCart] = useState<CartMenu[]>([]);

  // 담기 버튼을 눌렀을 때 실행. 함수형 상태 업데이트를 쓰자
  const handleAddMenu = (menu: Menu) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === menu.id
      );

      // 이미 담은 메뉴라면 수량만 증가
      if (existing) {
        return prev.map((item) =>
          item.id === menu.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // 처음 담는 메뉴라면 새 항목 추가
      return [...prev, { ...menu, quantity: 1 }];
    });
  };

  // 장바구니에 있는 메뉴들의 총 주문금액
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="mt-[41px] mb-[77px] w-[390px]">
      <BackBar orderCancel={false} />

      <StoreInfo store={store} />

      <MenuSection
        menus={store.menus ?? []}
        onAddMenu={handleAddMenu}
      />

      {/*Store.tsx - 실제 장바구니 금액 전달 */}
      <OrderBar totalPrice={totalPrice} />
    </main>
  );
};

export default Store;
