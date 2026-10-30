// 크기마다 모서리와 굵기도 다르다. 결제하기 같은 큰 버튼(xl)은 16px 모서리에 semibold.
const sizeStyles = {
	sm: "rounded-[8px] p-[8px_14px_8px_15px] text-[13px] font-medium",
	lg: "rounded-[8px] px-[16px] py-[10px] text-[15px] font-medium",
	xl: "w-[350px] rounded-[16px] pt-[18px] pb-[19px] text-[16px] font-semibold",
};

const Button = ({
	children,
	size = "sm",
	disabled = false,
	type = "button",
	className = "",
	...buttonProps
}) => {
	const sizeClassName = sizeStyles[size] ?? sizeStyles.sm;

	return (
		<button
			type={type}
			disabled={disabled}
			className={`cursor-pointer border-0 bg-[#3182f6] text-white disabled:cursor-not-allowed disabled:bg-[#d0dffb] ${sizeClassName} ${className}`}
			{...buttonProps}
		>
			{children}
		</button>
	);
};

export default Button;
