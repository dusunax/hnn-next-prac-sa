import { CommentData as CommentType } from "@/models/post-and-comment";
import Image from "next/image";

export default function Profile({ comment }: { comment: CommentType }) {
  const { username, avatar } = comment;
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Image
        className="w-8 h-10 rounded-full bg-gray-400"
        width={32}
        height={40}
        src={avatar}
        alt={username}
      />
      <span className="text-xs">{username}</span>
    </div>
  );
}
