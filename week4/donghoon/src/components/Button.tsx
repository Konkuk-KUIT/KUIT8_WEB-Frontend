import type { ButtonHTMLAttributes } from "react"; 
// 위는 4주차 추가 내용

const sizeStyles = {
  sm: "p-[8px_14px_8px_15px] text-[13px] rounded-[8px]",
  lg: "px-[16px] py-[10px] text-[15px] rounded-[8px]",
  xl: "p-[18px_112px_19px_113px] text-[16px] rounded-[16px]",
};
// week3 과제 중 - 버튼 별로 모서리 둥글기도 다르게 수정했다.


//-----아래는 4주차 추가사항----
type ButtonSize = keyof typeof sizeStyles;

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
}
//----------------------

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
      className={`cursor-pointer border-0 bg-[#3182f6] 
		font-medium text-white disabled:cursor-not-allowed disabled:bg-[#d0dffb] ${sizeClassName}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
