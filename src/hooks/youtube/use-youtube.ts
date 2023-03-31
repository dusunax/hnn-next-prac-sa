// import { useEffect, useRef, useState } from "react";
// import React from "react";
// import ReactPlayer from "react-player";

// /** youtube iframe api에 관련된 커스텀 훅입니다. */
// export default function useYoutube() {
//   const videoId = "000";
//   const playerRef = useRef<YT.Player | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   /**
//    * 헤더의 맨 위에 script를 삽입합니다.
//    */
//   useEffect(() => {
//     const tag = document.createElement("script");
//     if (tag === null) return;
//     tag.src = "https://www.youtube.com/iframe_api";

//     const firstScriptTag = document.getElementsByTagName("script")[0];
//     firstScriptTag!.parentNode!.insertBefore(tag, firstScriptTag);

//     return () => {
//       firstScriptTag.parentNode!.removeChild(tag);

//       if (playerRef.current) {
//         playerRef.current.destroy();
//       }
//     };
//   }, []);

//   /**
//    * 유튜브 API player를 만듭니다.
//    * */
//   useEffect(() => {
//     setIsLoading(true);
//     const currentRef: any = playerRef.current;
//     const currentVideoId = currentRef?.playerInfo?.videoData?.video_id;
//     if (currentVideoId === videoId) return;

//     const createPlayer = () => {
//       playerRef.current = new YT.Player("player", {
//         height: "390",
//         width: "640",
//         videoId: videoId,
//         events: {
//           // 자동 재생이 필요한 경우 onReady 실행
//           // onReady: () =>
//           //   !libraryPopup &&
//           //   playerRef.current &&
//           //   playerRef.current.playVideo(),
//         },
//       });
//     };

//     /** YT가 있으면, isLoading을 true로 변경합니다. */
//     if (window.YT) {
//       createPlayer();
//       setIsLoading(true);
//     } else {
//       (window as any).onYouTubeIframeAPIReady = createPlayer;
//     }
//   }, [videoId]);

//   /**
//    * 레이어 팝업이 열렸을 때, 유튜브 동영상을 일시정지합니다.
//    */
//   useEffect(() => {
//     if (!playerRef || !playerRef.current || !playerRef.current.pauseVideo)
//       return;

//     if (libraryPopup) {
//       playerRef.current?.pauseVideo();
//     } else {
//       playerRef.current?.playVideo();
//     }
//   }, [libraryPopup]);

//   return {
//     playerRef,
//     videoId,
//     isLoading,
//   };
// }

export const a = "";
