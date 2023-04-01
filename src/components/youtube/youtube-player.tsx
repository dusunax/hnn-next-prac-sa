import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import TwitchPlayer from "react-player/twitch";

export default function YoutubePlayer() {
  const videoIds = ["SvFi5TKSj0w", "iRBQGFN-PEY"];
  const videoUrls = videoIds.map(
    (id) => "https://www.youtube.com/watch?v=" + id
  );

  return <></>;

  return (
    <div className="flex absolute t-0 w-full">
      <div className="w-1/2">
        {/* 유튜브 플레이어입니다. */}
        <ReactPlayer
          url={videoUrls}
          muted={true}
          playing={true}
          loop={true}
          pip={true}
          width="100%"
          height="216px"
          config={{ file: { attributes: { disablepictureinpicture: "true" } } }}
        />
        {/* Twitch 플레이어입니다. */}
        <TwitchPlayer
          url="https://www.twitch.tv/bobross"
          width="100%"
          height="216px"
          playing={true}
        />
        {/* Ted 영상도 유튜브입니다. */}
        <ReactPlayer
          url="https://www.youtube.com/watch?v=kfKDBlK3EwQ"
          width="100%"
          height="216px"
        />
        {/* 영상 요약 */}
        <ReactPlayer
          url="https://www.youtube.com/watch?v=iRBQGFN-PEY"
          controls={true}
          width="100%"
          height="216px"
        />
        <ReactPlayer url="" controls={true} />
        <audio src="https://www.youtube.com/watch?v=kfKDBlK3EwQ" controls />
        <video src="https://www.youtube.com/watch?v=kfKDBlK3EwQ"></video>
      </div>
      {/* 2단 */}
      <div className="w-96">
        {/* 유튜브 플레이어입니다. */}
        <ReactPlayer
          url={videoUrls}
          muted={true}
          loop={true}
          pip={true}
          width="100%"
          height="216px"
          config={{ file: { attributes: { disablepictureinpicture: "true" } } }}
        />
        {/* Ted 영상도 유튜브입니다. */}
        <TwitchPlayer
          url="https://www.twitch.tv/bobross"
          controls={true}
          width="100%"
          height="216px"
        />
        <div className="w-full h-50 bg-white">
          <audio src="https://www.youtube.com/watch?v=kfKDBlK3EwQ" controls />
          <video src="https://www.youtube.com/watch?v=kfKDBlK3EwQ"></video>
        </div>
      </div>
    </div>
  );
}
