import Link from "next/link";

import Post from "./post";
import Scrollable from "@/layouts/scrollable";

import { PostData as PostType } from "@/models/post-and-comment";

import dummyData from "@/dummy.json";

export default function PostList() {
  const posts: PostType | PostType[] = dummyData.posts;

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
