import Post from "./post";
import Scrollable from "@/layouts/scrollable";

import { PostData } from "@/models/post-and-comment";

export default function PostList({ posts }: { posts: PostData[] }) {
  return (
    <Scrollable>
      <ul className="h-full flex-1 overflow-y-scroll scrollbar-hide overflow-x-hidden">
        {posts.map((post, idx) => {
          return <Post post={post} key={post?.postPostTitle + idx} />;
        })}
      </ul>
    </Scrollable>
  );
}
