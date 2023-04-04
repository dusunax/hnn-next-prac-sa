import { useState } from "react";
import Image from "next/image";

import YoutubePlayer from "@/components/youtube/youtube-player";
import iconAudioWave from "@public/images/audio-wave.gif";
import iconMusicNote from "@public/images/music-note.gif";

import { PostData } from "@/models/post-and-comment";
interface Props {
  borderRadiusStyle?: string;
  currentPost: PostData | undefined;
}

export default function AlbumCover({ borderRadiusStyle, currentPost }: Props) {
  const [showImage, setShowImage] = useState(false);
  return (
    <div
      className={`h-full flex-1 w-1/5 md:w-2/3 bg-slate-400 drop-shadow-xl scroll-p-2 overflow-y-scroll scrollbar-hide overflow-x-hidden relative ${borderRadiusStyle}`}
    >
      <div
        className="absolute w-full h-full bg-gradient-to-b from-[#3a6570] to-transparent
  block"
      />

      {/* 유튜브 플레이어 */}
      <YoutubePlayer />

      {showImage && (
        <>
          <div className="w-10 h-10 p-1 overflow-hidden rounded-full  absolute-center bg-white z-10">
            <Image src={iconMusicNote} alt="재생 중" />
          </div>
          <div className="w-10 h-10 p-1 overflow-hidden rounded-full absolute-center animate-pulse bg-white shadow-xl z-10">
            <Image src={iconAudioWave} alt="재생 중" />
          </div>
        </>
      )}

      <div className="post-detail w-full px-4 absolute-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          id="album-cover"
          src={currentPost?.postYoutubeVideoThumbnail}
          alt={"이미지"}
          onLoad={() => setShowImage(true)}
          className={`w-11/12 object-cover absolute-center rounded-xl transition-opacity ${
            showImage ? "opacity-100" : "opacity-0"
          }`}
        />

        {currentPost && (
          <div className="w-full h-full mt-32 md:mt-36 lg:mt-40 contents-area absolute left-0">
            <h2 className="font-bold px-4">{currentPost.postYoutubeTitle}</h2>
            <p className="px-5 text-right">
              {currentPost.postPublishedAt.slice(0, 10)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
