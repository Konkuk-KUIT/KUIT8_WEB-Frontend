const sizeStyles = {
	sm: "h-[32px] w-[52px] rounded-[8px] p-0 text-[13px] font-medium",
	lg: "rounded-[8px] px-[16px] py-[10px] text-[15px] font-medium",
	xl: "rounded-[8px] p-[18px_112px_19px_113px] text-[16px] font-medium",
	checkout:
		"h-[56px] w-[350px] rounded-[16px] p-0 text-[16px] font-semibold",
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
			className={`inline-flex cursor-pointer items-center justify-center border-0 bg-[#3182f6] text-white disabled:cursor-not-allowed disabled:bg-[#d0dffb] ${sizeClassName} ${className}`}
			{...buttonProps}
		>
			{children}
		</button>
	);
};

export default Button;
