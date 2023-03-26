import Image from "next/image";

import { PostData as PostType } from "@/models/post-and-comment";

import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

export default function Post({ post }: { post: PostType }) {
  const {
    userNickname,
    postYoutubeTitle,
    postPostTitle,
    postPublishedAt,
    countLike,
    userProfileImage,
    postYoutubeVideoThumbnail,
  } = post;

  return (
    <li
      className="w-full h-24 max-h-24 flex gap-4 items-center justify-between border-b-2"
      data-thumbnail={postYoutubeVideoThumbnail}
    >
      <div className="flex flex-col items-center">
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

      <div className="text-xs flex flex-col items-end font-lato">
        <span>{postPublishedAt.slice(0, 10).replaceAll("-", ". ")}</span>
        <button className="flex gap-1">
          <FaHeart color="#ff5555" />
          {/* <FiHeart /> */}
          {countLike}
        </button>
      </div>
    </li>
  );
}
