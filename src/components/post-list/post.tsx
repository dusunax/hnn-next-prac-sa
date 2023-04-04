import { MouseEvent } from "react";

import { PostData as PostType } from "@/models/post-and-comment";

import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { likePostService } from "@/services/post";
import { useState } from "react";
import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "@/store/user";
import { youTubeVideoIdArrayState } from "@/store/youtubeVideo";

export default function Post({ post }: { post: PostType }) {
  const {
    postId,
    userNickname,
    postYoutubeTitle,
    postPostTitle,
    postPublishedAt,
    countLike,
    userProfileImage,
    postYoutubeVideoThumbnail,
    isPostLike,
    postYoutubeVideoId,
  } = post;
  const [liked, setLiked] = useState(isPostLike === "1");
  const [viewlikeCount, setViewLikeCount] = useState(+countLike);
  const [youTubeVideoIdArray, setYouTubeVideoIdArray] = useRecoilState(
    youTubeVideoIdArrayState
  );

  const user = useRecoilValue(userState);

  const albumCoverChange = (
    e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>
  ) => {
    const target = e.target as HTMLElement;
    const postElement = target.closest("li");

    setYouTubeVideoIdArray([postYoutubeVideoId]);

    if (!postElement) return;
    const thumbnail = postElement.dataset.thumbnail;
    const imageElement = document.querySelector(
      "#album-cover"
    ) as HTMLImageElement;

    if (thumbnail && imageElement) {
      imageElement.src = thumbnail;
    }
  };

  return (
    <li
      className="w-full h-24 max-h-24 flex gap-4 items-center justify-between border-b-2"
      data-thumbnail={postYoutubeVideoThumbnail}
      onMouseEnter={(e) => {
        albumCoverChange(e);
      }}
    >
      <Link
        className="flex-1 flex gap-4"
        href={`/@${userNickname}/${postPostTitle}`}
      >
        <div className="w-12 shrink-0 flex flex-col items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="shrink-0 w-8 h-8 mb-1 object-cover rounded-full bg-gray-400"
            src={userProfileImage}
            alt={userNickname}
          />
          <span className="text-xxs break-keep text-center text-gray-700 font-lato">
            {userNickname}
          </span>
        </div>

        <div className="w-10 flex flex-1 flex-col">
          <span className="font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">
            {postPostTitle}
          </span>
          <span className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
            {postYoutubeTitle}
          </span>
        </div>
      </Link>

      <div className="text-xs flex flex-col items-end font-lato">
        <span>{postPublishedAt.slice(0, 10).replaceAll("-", ". ")}</span>
        <div
          className="flex gap-1 items-center"
          onClick={(e) => {
            e.stopPropagation();

            likePostService(postId);

            setLiked(!liked);
            setViewLikeCount((prev) => (liked ? prev - 1 : prev + 1));
          }}
        >
          {!user.isLogin || liked ? (
            <FaHeart
              color="#ff5555"
              className={user.isLogin ? "cursor-pointer" : ""}
            />
          ) : (
            <FiHeart
              color="#ff5555"
              className={user.isLogin ? "cursor-pointer" : ""}
            />
          )}
          {viewlikeCount}
        </div>
      </div>
    </li>
  );
}
