import { CommentData as CommentType } from "@/models/post-and-comment";

export default function Profile({ comment }: { comment: CommentType }) {
  const { nickname, avatar } = comment;
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="rounded-full bg-gray-400"
        width={30}
        height={30}
        src={avatar}
        alt={nickname}
      />
      <span className="text-xs">{nickname}</span>
    </div>
  );
}
