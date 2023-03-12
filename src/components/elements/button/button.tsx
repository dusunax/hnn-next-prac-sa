interface DefaultLayoutProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  size?: string;
  border?: number;
}

export default function Button({
  isDisabled = false,
  isActive = false,
  children,
  onClick = () => {},
  size = "base",
  border = 2,
}: DefaultLayoutProps) {
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
      className={`${buttonSize} ${buttonStatus} ${buttonBorder} rounded-md transition-all`}
    >
      {children}
    </button>
  );
}
