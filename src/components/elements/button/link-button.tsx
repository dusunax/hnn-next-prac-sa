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
  const buttonStyle = {
    disabled: "hover:shadow-none text-slate-400 bg-slate-200",
    active: "hover:shadow bg-slate-500 text-slate-100 border-slate-500",
    normal: "hover:shadow text-slate-500 border-slate-400",
  };

  return (
    <Link
      href={href}
      className={`py-2 px-4 rounded-md border-2 text-xs hover:shadow transition-all
      ${
        isDisabled
          ? buttonStyle.disabled
          : isActive
          ? buttonStyle.active
          : buttonStyle.normal
      }
      `}
    >
      {children}
    </Link>
  );
}
