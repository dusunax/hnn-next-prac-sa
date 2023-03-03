import Scrollable from "@/layouts/scrollable";
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
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <h2>{album}</h2>
        </div>
      </AlbumCover>

      <div
        className="px-8 flex flex-col justify-between"
        style={{ transition: "width 0.5s ease-in-out", width: `${width}%` }}
      >
        <div className="pt-10 pb-6 sticky top-0 bg-light-gray ">
          <h3 className="text-lg font-bold">{title}</h3>
        </div>

        {/* 댓글 리스트 */}
        <Scrollable>
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
        </Scrollable>

        <div className="pt-4 h-24">
          <div className="flex items-center justify-between">
            <button>이전</button>
            <LinkButton href={"/write"}>댓글 쓰기</LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
