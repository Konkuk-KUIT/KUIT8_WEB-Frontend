
import type { ButtonHTMLAttributes } from "react";

type ButtonSize = "sm" | "lg" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
}

const sizeStyles = {
  sm: "p-[8px_14px_8px_15px] text-[13px]",
  lg: "px-[16px] py-[10px] text-[15px]",
  xl: "px-[16px] py-[10px] text-[16px]",
};

const Button = ({
  children,
  size = "sm",
  disabled = false,
  type = "button",
  className = "",
  ...buttonProps
}: ButtonProps) => {
  const sizeClassName = sizeStyles[size];

  return (
    <button
      {...buttonProps}
      type={type}
      disabled={disabled}
      className={`cursor-pointer rounded-[8px] border-0 bg-[#3182f6] font-medium text-white disabled:cursor-not-allowed disabled:bg-[#d0dffb] ${sizeClassName} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
