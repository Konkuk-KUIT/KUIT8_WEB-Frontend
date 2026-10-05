const sizeStyles = {
	sm: "p-[8px_14px_8px_15px] text-[13px]",
	lg: "px-[16px] py-[10px] text-[15px]",
	xl: "p-[18px_112px_19px_113px] text-[16px]",
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
			className={`cursor-pointer rounded-[8px] border-0 bg-[#3182f6] font-medium text-white disabled:cursor-not-allowed disabled:bg-[#d0dffb] ${sizeClassName} ${className}`}
			{...buttonProps}
		>
			{children}
		</button>
	);
};

export default Button;
