import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "lg" | "xl";
};

const sizeStyles = {
	sm: "p-[8px_14px_8px_15px] text-[13px]",
	lg: "px-[16px] py-[10px] text-[15px]",
	xl: "w-full px-[20px] pt-[18px] pb-[19px] text-[14px] whitespace-nowrap",
};

const Button = ({
	children,
	size = "sm",
	disabled = false,
	type = "button",
	...buttonProps
}: ButtonProps) => {
	const sizeClassName = sizeStyles[size] ?? sizeStyles.sm;

	return (
		<button
			type={type}
			disabled={disabled}
			className={`cursor-pointer rounded-[8px] border-0 bg-[#3182f6] font-medium text-white disabled:cursor-not-allowed disabled:bg-[#d0dffb] ${sizeClassName}`}
			{...buttonProps}
		>
			{children}
		</button>
	);
};

export default Button;
