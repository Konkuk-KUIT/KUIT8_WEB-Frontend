import type { ButtonHTMLAttributes } from "react";
import { getButtonClassName, type ButtonSize } from "./buttonStyles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: ButtonSize;
}

const Button = ({
	children,
	size = "sm",
	disabled = false,
	type = "button",
	...buttonProps
}: ButtonProps) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={getButtonClassName(size)}
			{...buttonProps}
		>
			{children}
		</button>
	);
};

export default Button;
