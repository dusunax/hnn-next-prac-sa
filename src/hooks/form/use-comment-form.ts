import { useState, Dispatch, SetStateAction } from "react";

import useCRUD, { UseCRUDReturnType } from "../crud/use-crud-post-and-comment";

// 이거 타입 참고
export const prevCommentDummy = {
  id: 3,
  text: "댓글3",
  username: "유저1",
  avatar: "/",
};

interface Register {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

interface UseCommentFormReturnType extends Partial<UseCRUDReturnType> {
  register: Register;
  isLoading: boolean;
  handleSubmitCreate: (event: React.FormEvent<HTMLFormElement>) => void;
  handleSubmitEdit: (event: React.FormEvent<HTMLFormElement>) => void;
}

// form 기능
export default function useCommentForm(): UseCommentFormReturnType {
  const { isLoading, createComment, updateComment, deleteComment, comments } =
    useCRUD();

  const [text, setText] = useState("");

  /** submit 시, 댓글 작성 */
  const handleSubmitCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.type !== "submit") return;

    createComment({ text });

    // redirect to 해당 게시물
  };

  /** submit 시, 댓글 수정 */
  const handleSubmitEdit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.type !== "submit") return;

    const id = 0;
    // id를 가져와야 함
    // 요청 x2
    updateComment(id, { text });

    // redirect to 해당 게시물
  };

  const register: Register = { text, setText };

  return {
    register,
    isLoading,
    handleSubmitCreate,
    handleSubmitEdit,
    comments,
  };
}
