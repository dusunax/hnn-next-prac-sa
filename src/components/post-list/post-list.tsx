import Link from "next/link";

import Post from "./post";
import Scrollable from "@/layouts/scrollable";

import { Post as PostType } from "@/models/post";

import dummy from "@/dummy.json";

export default function PostList() {
  const posts: PostType | PostType[] = dummy.posts;

  return (
    <Scrollable>
      <ul className="h-full flex-1 overflow-y-scroll scrollbar-hide overflow-x-hidden">
        {posts.map((post, idx) => {
          const username = post.username;
          const postname = post.title;

          return (
            <Link href={`/@${username}/${postname}`} key={idx}>
              <Post post={post} />
            </Link>
          );
        })}
      </ul>
    </Scrollable>
  );
}
