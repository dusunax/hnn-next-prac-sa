import Link from "next/link";
import Image from "next/image";

import logoSrc from "@public/logo.png";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function CardLayoutCenter({ children }: DefaultLayoutProps) {
  return (
    <div className="card-wrapper flex flex-col">
      <Link
        href="/"
        className="w-10 h-10 absolute z-20 top-4 left-4 hover:animate-ping"
      >
        <Image src={logoSrc} width={40} height={40} alt={"로고"} />
      </Link>
      <div className="h-full flex-1 flex-col flex-center pt-16">{children}</div>
    </div>
  );
}
