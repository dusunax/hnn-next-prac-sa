import { CommentData as CommentType } from "@/models/post-and-comment";
import Image from "next/image";

export default function Comment({ comment }: { comment: CommentType }) {
  const { text, nickname, avatar } = comment;
  return (
    <li className="w-full py-4 flex gap-6 border-b-2">
      <div className="flex flex-col items-center justify-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-8 h-10 rounded-full bg-gray-400"
          width={32}
          height={40}
          src={avatar}
          alt={nickname}
        />
        <span className="text-xs">{nickname}</span>
      </div>
      <div className="flex-1 h-full">
        <span className="text-xs">{text}</span>
      </div>
    </li>
  );
}
