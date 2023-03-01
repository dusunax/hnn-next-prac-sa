import Link from "next/link";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function CardLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="w-full h-full bg-light-gray drop-shadow-xl rounded-lg overflow-hidden relative">
      <Link href="/" className="absolute top-4 left-4 w-8 h-8 bg-orange-300">
        홈
      </Link>
      {children}
    </div>
  );
}
