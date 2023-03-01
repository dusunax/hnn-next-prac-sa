import { Post } from "@/models/post";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import AlbumCover from "../elements/album-cover/album-cover";
import LinkButton from "../elements/button/link-button";
import Comment from "./comments/comment";

export default function PostDetail({ post }: { post: Post }) {
  const {
    id,
    src,
    mbti,
    username,
    album,
    title,
    created_at,
    likes_num,
    comments,
  } = post;

  const [width, setWidth] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setWidth(40);
    setTimeout(() => {
      setOpacity(1);
    }, 300);
  }, []);

  return (
    <div className="h-full flex">
      {/* 게시글 정보 */}
      {/* <div className="flex-1 py-20 px-8 bg-slate-400"></div> */}

      <AlbumCover>
        <div className="py-40 px-16">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p>{album}</p>
        </div>
      </AlbumCover>

      {/* 댓글 리스트 */}
      <div
        className="py-10 px-8"
        style={{ transition: "width 0.5s ease-in-out", width: `${width}%` }}
      >
        <ul
          className="opacity-0"
          style={{
            transition: "opacity 0.3s ease-in-out",
            opacity: opacity,
          }}
        >
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </ul>

        <div className="mt-10 flex items-center justify-between">
          <LinkButton href={"/write"}>댓글 쓰기</LinkButton>
        </div>
      </div>
    </div>
  );
}
