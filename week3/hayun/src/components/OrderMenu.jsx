const OrderMenu = ({ menus }) => {

	return (
        <div>
            {menus.map(
                    ({
                        id,
                        name,
                        price,
                        ingredients,
                        quantity,
                    }) => (
                        <div key={id} className="flex w-[390px] h-[110px] gap-[16px]">
                            <div className="h-[54px] w-[54px] rounded-[8px] bg-[#ECECEC] m-[19px_0_37px_24px]" />

                            <div className="flex flex-col gap-[5px]">
                                <span className="text-[17px] text-[#333D4B] font-bold pt-[16px]">{name}</span>
                                <span className="w-[200px] text-[13px] text-[#6B7684] font-medium">{ingredients}</span>
                                <span className="text-[13px] text-[#6B7684] font-medium">{price.toLocaleString()}원</span>
                            </div>

                            <div className="flex gap-[14px]">
                                <span className="pt-[46px]">{quantity}개</span>
                                <img src="/rightarrow.svg" alt="rightarrow" className="h-[16px] w-[16px] mt-[48px]"/>
                            </div>                            
		                </div>      
                    ),
                )}
        </div>
	);
};


export default OrderMenu;
