import Image from "next/image";
import logoSrc from "@public/logo.png";

export default function Header() {
  return (
    <header className="h-10 flex items-center justify-between bg-[#aaa] text-[#fff]">
      <div className="flex items-center relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image src={logoSrc} width={30} height={30} alt={"로고"} />
      </div>
      <span className="absolute left-1/2 -translate-x-1/2">제목</span>
      <div></div>
    </header>
  );
}
