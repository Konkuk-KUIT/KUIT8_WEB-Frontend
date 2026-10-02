const CartCard= ({menu})=>{
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

            <div className="flex items-center gap-[14px]">
                <div className="text-gray-500 text-base font-medium font-['Pretendard']">
                    1개
                </div>

                <button className="cursor-pointer">
                    <img src="/right.svg" alt="right button" />
                </button>
            </div>
        </div>
    );
};

export default CartCard;