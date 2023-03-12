import Link from "next/link";

interface DefaultLayoutProps {
  children: React.ReactNode;
  href: string;
  isDisabled?: boolean;
  isActive?: boolean;
}

export default function LinkButton({
  href,
  isDisabled = false,
  isActive = false,
  children,
}: DefaultLayoutProps) {
  return (
    <Link
      href={href}
      className={`py-2 px-4 rounded-md border-2 text-xs hover:shadow transition-all
      ${
        isDisabled
          ? "button-disabled"
          : isActive
          ? "button-active"
          : "button-normal"
      }
      `}
    >
      {children}
    </Link>
  );
}
