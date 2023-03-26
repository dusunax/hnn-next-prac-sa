import { MouseEvent } from "react";
import Link from "next/link";

import Post from "./post";
import Scrollable from "@/layouts/scrollable";

import { PostData } from "@/models/post-and-comment";

export default function PostList({ posts }: { posts: PostData[] }) {
  const albumCoverChange = (
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
  ) => {
    const target = e.target as HTMLElement;
    const postElement = target.closest("li");

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
    <Scrollable>
      <ul className="h-full flex-1 overflow-y-scroll scrollbar-hide overflow-x-hidden">
        {posts.map((post, idx) => {
          const nickname = post.userNickname;
          const postname = post.postPostTitle;

          return (
            <Link
              href={`/@${nickname}/${postname}`}
              key={idx}
              onMouseEnter={(e) => albumCoverChange(e)}
            >
              <Post post={post} />
            </Link>
          );
        })}
      </ul>
    </Scrollable>
  );
}
