import type { Menu } from "../types/stores";

interface CartCardProps {
  menu: Menu;
  quantity:number;
  onCartMenu: (menuId: number) => void;
  onRemoveMenu: (menuId: number) => void;
}

const CartCard= ({menu, quantity, onCartMenu, onRemoveMenu}: CartCardProps)=>{
    return (
        <div className="flex pr-[20px] pl-[24px]">
            <img className="mt-[19px] mr-[16px] self-start" 
                src="/salad.svg" alt="sample img" />

            <div className="flex flex-col mt-[16px] mr-[16px] self-start w-52 gap-[5px]">
                <div className="text-gray-700 text-base font-bold font-['Pretendard']">
                    {menu.name}
                </div>
                <div className="w-[200px] text-gray-500 text-xs font-medium font-['Pretendard']">
                    추천소스, 채소볼, 베이컨추가, 시저드레싱 추가
                </div>
                <div className="mb-[16px] text-gray-500 text-xs font-medium font-['Pretendard']">
                    {menu.price.toLocaleString()}원
                </div>
            </div>

            <div className="flex shrink-0 items-center gap-[14px]">
                <div className="whitespace-nowrap text-gray-500 text-base font-medium font-['Pretendard']">
                    {quantity}개
                </div>

                <div className="flex flex-col gap-[10px]">
                    <button 
                        className="cursor-pointer" 
                        onClick={() => onCartMenu(menu.id)}
                    >
                        <img src="/top.svg" alt="top button" />
                    </button>

                    <button 
                        className="cursor-pointer"
                        onClick={() => onRemoveMenu(menu.id)}
                    >
                        <img src="/bottom.svg" alt="bottom button" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;