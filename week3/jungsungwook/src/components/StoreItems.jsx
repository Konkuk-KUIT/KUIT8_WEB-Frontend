    import Button from "./Button";

    const StoreItems = ({ menus }) => {
        return (
            <div>
                {menus.map((menu) => (
                    <div key={menu.id} className="flex px-[24px] py-[28px] relative">
                        {/* 이미지 자리 */}
                        <div className="h-[54px] w-[54px] rounded-full bg-[#ECECEC]" />

                        {/* 메뉴 정보 */}

                        <div className="flex flex-col gap-[5px] ml-[16px]">
                            <div className="flex items-center">
                                <span className="
        text-gray-700
        text-base
        font-semibold">
                                    {menu.name}
                                </span>

                                {menu.isBest && (
                                    <span className="ml-[6px] 
        text-blue-500
        text-base
        font-semibold">
                                        BEST
                                    </span>
                                )}
                            </div>

                            <div className="text-[16px] text-[#4E5968]">
                                {menu.price.toLocaleString()}원
                            </div>

                            <div className="text-[14px] text-[#6B7684]">
                                {menu.ingredients}
                            </div>
                        </div>
                        <div className="absolute right-[24px] top-[40px]">
                            <Button>담기</Button>
                        </div>

                    </div>
                ))}
            </div>
        );
    };

    export default StoreItems;