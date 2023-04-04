import { useState } from "react";

import YoutubePlayer from "@/components/youtube/youtube-player";
// import src from "@public/banner/1.png";

interface Props {
  children?: React.ReactNode;
  borderRadiusStyle?: string;
}

export default function AlbumCover({ children, borderRadiusStyle }: Props) {
  const [showImage, setShowImage] = useState(false);
  return (
    <div
      className={`h-full flex-1 w-1/5 md:w-2/3 bg-slate-400 drop-shadow-xl scroll-p-2 overflow-y-scroll scrollbar-hide overflow-x-hidden relative ${borderRadiusStyle}`}
    >
      <div
        className="absolute w-full h-full bg-gradient-to-b from-[#3a6570] to-transparent
  block"
      />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        id="album-cover"
        src=""
        alt={"이미지"}
        onLoad={() => setShowImage(true)}
        className={`w-11/12 object-cover absolute-center rounded-xl transition-opacity ${
          showImage ? "opacity-100" : "opacity-0"
        }`}
      />

      <YoutubePlayer />

      <div className="absolute w-full h-full">{children}</div>
    </div>
  );
}
