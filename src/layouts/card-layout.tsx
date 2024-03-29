import Link from "next/link";
import Image from "next/image";

import logoSrc from "@public/logo.png";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function CardLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="card-wrapper">
      <Link
        href="/"
        className="w-10 h-10 absolute z-20 top-4 left-4 hover:animate-ping"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image src={logoSrc} width={40} height={40} alt={"로고"} />
      </Link>
      {children}
    </div>
  );
}
