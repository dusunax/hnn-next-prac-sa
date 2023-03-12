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
import PaginationComponent from "@/components/pagination/pagination-component";

export default function CommentList({
  comments,
  opacity,
}: {
  comments: CommentData[];
  opacity: number;
}) {
  const { handleSubmitCreate, handleSubmitEdit, register } = useCommentForm();
  const { text, setText } = register;

  // 페이지네이션
  const [page, setPage] = useState(1);
  const totalPages = 13;
  const limit = 3;

  // 댓글
  const [isEdit, setIsEdit] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState(0);
  const [selectedCommentText, setSelectedCommentText] = useState(
    comments[selectedCommentId].text
  );
  const [printComments, setPrintComments] = useState(comments);

  if (!comments) return <></>;

  const editButtonClickHandler = (id: number) => {
    setIsEdit(!isEdit);
    setSelectedCommentId(id);
    setSelectedCommentText(printComments[id].text);
  };

  const saveButtonClickHandler = (id: number, text: string) => {
    setIsEdit(!isEdit);

    setPrintComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id === id) {
          return { ...comment, text: text };
          // 여기서 api에 요청보내서 실제 db 댓글도 수정
        }
        return comment;
      })
    );
  };

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
            {printComments.map((comment) => {
              const isEditAndSelectedComment =
                isEdit && comment.id === selectedCommentId;

              return (
                <li
                  className="w-full h-28 py-4 flex gap-6 border-b-2"
                  key={comment.id + comment.username}
                  data-comment_id={comment.id}
                >
                  <Profile key={comment.id} comment={comment} />

                  <div className="flex-1 h-full flex justify-between">
                    {isEditAndSelectedComment ? (
                      <TextArea
                        name="comment"
                        title="댓글"
                        value={selectedCommentText}
                        setState={setSelectedCommentText}
                        showTitle={false}
                      />
                    ) : (
                      <div className="text-xs w-full py-2 px-3 ">
                        {comment.text}
                      </div>
                    )}
                    <div className="flex-shrink-0 w-12 text-right">
                      {!isEdit && (
                        <Button
                          size="xs"
                          border={0}
                          onClick={() => editButtonClickHandler(comment.id)}
                        >
                          수정
                        </Button>
                      )}
                      {isEditAndSelectedComment && (
                        <Button
                          size="xs"
                          border={0}
                          onClick={() =>
                            saveButtonClickHandler(
                              comment.id,
                              selectedCommentText
                            )
                          }
                        >
                          저장
                        </Button>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </form>
      </Scrollable>

      <PaginationComponent
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        limit={limit}
      />

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
