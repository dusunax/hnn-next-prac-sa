import Link from "next/link";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function CardLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="card-wrapper">
      <Link
        href="/"
        className="absolute z-20 top-4 left-4 w-16 h-16 bg-orange-300"
      >
        홈
      </Link>
      {children}
    </div>
  );
}
