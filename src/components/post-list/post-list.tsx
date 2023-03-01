import Link from "next/link";
import Post from "./post";
import dummy from "@/dummy.json";
import { Post as PostType } from "@/models/post";

export default function PostList() {
  const posts: PostType | PostType[] = dummy.posts;

  return (
    <ul className="w-full">
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
  );
}
