const shapeStyles = {
	rounded: "rounded-[8px]",
	circle: "rounded-full",
};

// 가게·메뉴·장바구니 줄 왼쪽의 54px 이미지 자리. 데이터에 이미지가 없어 회색으로 채운다.
const Thumbnail = ({ shape = "rounded" }) => {
	const shapeClassName = shapeStyles[shape] ?? shapeStyles.rounded;

	return (
		<div
			className={`h-[54px] w-[54px] shrink-0 bg-[#ececec] ${shapeClassName}`}
		/>
	);
};

export default Thumbnail;
