import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { PostData } from "@/models/post-and-comment";

import AlbumCover from "../elements/album-cover/album-cover";
import LinkButton from "../elements/button/link-button";
import CommentList from "./comments/commentList";

export default function PostDetail({ post }: { post: PostData }) {
  const {
    postId: id,
    postYoutubeUri: src,
    userMBTI: mbti,
    userNickname: nickname,
    postYoutubeVideoThumbnail: album,
    postPostTitle: title,
    postPublishedAt: created_at,
    countLike: likes_num,
    postYoutubeDescription: description,
  } = post;

  const [width, setWidth] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const { query } = useRouter();
  const pathname = `/${query.nickname}/${query.postname}`;

  useEffect(() => {
    setWidth(40);
    setTimeout(() => {
      setOpacity(1);
    }, 300);
  }, []);

  return (
    <div className="h-full flex">
      {/* 게시글 정보 */}
      {/* <AlbumCover>
        <div className="py-40 px-16">
          <h1 className="text-4xl font-bold mb-6">{title}</h1>
          <h2 className="w-52 mb-4">{album}</h2>
          <h3 className="w-48">{description}</h3>
        </div>

        <Link href={`${pathname}/edit`}>수정</Link>
      </AlbumCover> */}

      <aside
        className="px-8 flex flex-col justify-between"
        style={{ transition: "width 0.5s ease-in-out", width: `${width}%` }}
      >
        {/* 게시글 제목 */}
        <div className="pt-10 pb-6 sticky top-0 bg-light-gray ">
          <h3 className="text-lg font-bold">{title}</h3>
        </div>

        {/* 댓글 리스트 */}
        {/* <CommentList opacity={opacity} comments={comments} /> */}
      </aside>
    </div>
  );
}
