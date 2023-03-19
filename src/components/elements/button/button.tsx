interface ButtonProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  size?: string;
  border?: number;
  className?: string;
}

export default function Button({
  isDisabled = false,
  isActive = false,
  children,
  onClick = () => {},
  className,
  size = "base",
  border = 2,
}: ButtonProps) {
  const buttonSize = `button-size-${size}`;
  const buttonStatus = isDisabled
    ? "button-disabled"
    : isActive
    ? "button-active"
    : "button-normal";
  const buttonBorder =
    border === 0
      ? "border-none hover:shadow-none"
      : `border-${border} hover:shadow`;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`${className} ${buttonSize} ${buttonStatus} ${buttonBorder} rounded-md transition-all`}
    >
      {children}
    </button>
  );
}
