import Image from "next/image";

import { PostData as PostType } from "@/models/post-and-comment";

export default function Post({ post }: { post: PostType }) {
  const { mbti, username, album, title, created_at, likes_num, avatar } = post;

  return (
    <li className="w-full h-24 max-h-24 flex gap-4 items-center justify-between border-b-2">
      <div className="flex flex-col items-center">
        <Image
          className="w-10 h-12 rounded-full bg-gray-400"
          width={40}
          height={40}
          src={avatar}
          alt={username}
        />
        <span className="text-xs">{username}</span>
      </div>

      <div className="flex-1 flex flex-col">
        <span className="font-bold">{title}</span>
        <span className="text-sm">{album}</span>
      </div>

      <div className="text-xs flex flex-col items-end">
        <span>{created_at}</span>
        <button>좋아요 {likes_num}</button>
        <div className="mbti">{mbti}</div>
      </div>
    </li>
  );
}
