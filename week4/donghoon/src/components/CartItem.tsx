import type { CartMenu } from "../types/stores";

//이벤트 함수 2개 추가
//CartItem은 실제 수량 상태를 관리하지 않는다.
//대신 부모에게서 전달받은 onIncrease, onDecrease 함수를 실행하기만 함.
interface CartItemProps {
  item: CartMenu;
  onIncrease: () => void;
  onDecrease: () => void;
}

//4주차 추가사항 - CartItem에 타입을 추가
const CartItem = ({
  item,
  onIncrease,
  onDecrease,
}: CartItemProps) => {
  const { name, price, options, quantity } = item;

  return (
    <article className="flex min-h-[120px] w-[390px] gap-[16px] px-[24px] py-[16px]">
      {/* 메뉴 이미지 */}
      <div className="h-[54px] w-[54px] shrink-0 self-center rounded-[8px] bg-[#ececec]" />

      {/* 메뉴 정보 */}
      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="text-[17px] font-semibold text-[#333d4b]">
          {name}
        </h3>

        <p className="mt-[5px] break-keep text-[13px] font-medium leading-[16px] text-[#6b7684]">
          {options}
        </p>

        {/* 가격 및 수량 조절 */}
        <div className="mt-[10px] flex items-center justify-between gap-[8px]">
          <span className="text-[13px] font-medium text-[#6b7684]">
            {price.toLocaleString()}원
          </span>

          <div className="flex shrink-0 items-center gap-[7px]">
            <button
              type="button"
              onClick={onDecrease}
              disabled={quantity <= 1}
              aria-label={`${name} 수량 감소`}
              className="flex h-[26px] w-[26px] cursor-pointer items-center justify-center rounded-[6px] border border-[#d1d6db] text-[#3182f6] disabled:cursor-not-allowed disabled:text-[#b0b8c1]"
            >
              −
            </button>

            <span className="min-w-[26px] text-center text-[14px] font-medium text-[#4e5968]">
              {quantity}개
            </span>

            <button
              type="button"
              onClick={onIncrease}
              aria-label={`${name} 수량 증가`}
              className="flex h-[26px] w-[26px] cursor-pointer items-center justify-center rounded-[6px] border border-[#d1d6db] text-[#3182f6]"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
