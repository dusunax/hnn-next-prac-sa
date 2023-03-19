import Image from "next/image";
// import src from "@public/banner/1.png";

interface Props {
  children?: React.ReactNode;
  borderRadiusStyle?: string;
}

export default function AlbumCover({ children, borderRadiusStyle }: Props) {
  return (
    <div
      className={`h-full flex-1 w-1/5 md:w-2/3 bg-slate-400 drop-shadow-xl scroll-p-2 overflow-y-scroll scrollbar-hide overflow-x-hidden relative ${borderRadiusStyle}`}
    >
      <div
        className="absolute w-full h-full bg-gradient-to-b from-[#3a6570] to-transparent
  block"
      />
      {/* <Image src={src} alt={"이미지"} fill className=" object-cover" /> */}
      <div className="absolute w-full h-full">{children}</div>
    </div>
  );
}
