import Link from "next/link";
import { useState } from "react";

// 컴포넌트
import Scrollable from "@/layouts/scrollable";
import Profile from "./profile";

import Input from "@/components/elements/form/input";
import Button from "@/components/elements/button/button";
import TextArea from "@/components/elements/form/text-area";

// 훅 & 타입
import { CommentData } from "@/models/post-and-comment";
import useCommentForm from "@/hooks/form/use-comment-form";

export default function CommentList({
  comments,
  opacity,
}: {
  comments: CommentData[];
  opacity: number;
}) {
  const { handleSubmitCreate, handleSubmitEdit, register } = useCommentForm();
  const { text, setText } = register;

  const [isEdit, setIsEdit] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState(0);

  if (!comments) return <></>;

  return (
    <>
      <Scrollable>
        {/* 리스트 */}
        <form onSubmit={handleSubmitEdit}>
          <ul
            className="opacity-0"
            style={{
              transition: "opacity 0.3s ease-in-out",
              opacity: opacity,
            }}
          >
            {comments.map((comment) => {
              return (
                <li
                  className="w-full py-4 flex gap-6 border-b-2"
                  key={comment.id + comment.username}
                  data-comment_id={comment.id}
                >
                  <Profile key={comment.id} comment={comment} />

                  <div className="flex-1 h-full flex justify-between">
                    {isEdit ? (
                      <TextArea
                        name="comment"
                        title="댓글"
                        value={text}
                        setState={setText}
                        showTitle={false}
                      />
                    ) : (
                      <div className="text-xs w-full">{comment.text}</div>
                    )}
                    <div className="min-w-12 w-12 text-right">
                      <Button
                        size="xs"
                        border={0}
                        onClick={() => setIsEdit(!isEdit)}
                      >
                        수정
                      </Button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </form>
      </Scrollable>

      <form onSubmit={handleSubmitCreate}>
        <div className="mt-4 h-40">
          <div className="flex flex-col gap-1">
            <TextArea
              name="comment"
              title="댓글"
              value={text}
              setState={setText}
              showTitle={false}
            />
            <div className="flex items-center justify-between">
              <Link href={"/"}>이전</Link>

              <Button>댓글 쓰기</Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
