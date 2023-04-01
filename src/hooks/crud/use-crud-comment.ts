import { useEffect } from "react";

import { CommentData } from "@/models/post-and-comment";
import { ErrorType, RetrunType } from "@/models/api";

import {
  fetchCommentsService,
  createCommentService,
  updateCommentService,
  deleteCommentService,
  commentCreateRequestType,
} from "@/services/comment";
import { useAsyncFn } from "react-use";

interface UseCRUDReturnType extends RetrunType {
  comments: CommentData[] | ErrorType | undefined;

  // 댓글 CRUD
  fetchCommentsFn: (postId: number) => Promise<ErrorType | CommentData[]>;
  createCommentFn: (
    commentData: commentCreateRequestType
  ) => Promise<CommentData | ErrorType>;
  updateCommentFn: (
    commentId: any,
    commentData: any
  ) => Promise<CommentData | ErrorType>;
  deleteCommentFn: (commentId: number) => Promise<void | ErrorType>;
}

// --------------------
// 댓글 CRUD
// --------------------
// 커스텀 훅 내용:
// 1. api 요청 service를 import, 사용
// 2. isLoading boolean 반환
// 3. error throw

export default function useCRUDComment(): UseCRUDReturnType {
  /** 모든 Comments를 fetch합니다. */
  const [fetchCommentsState, fetchCommentsFn] = useAsyncFn(
    async (postId: number) => {
      return await fetchCommentsService(postId);
    },
    []
  );

  /** Comment를 작성합니다. */
  const [createCommentState, createCommentFn] = useAsyncFn(
    async (commentData) => {
      return await createCommentService(commentData);
    },
    []
  );

  /** Comment를 수정합니다. */
  const [updateCommentState, updateCommentFn] = useAsyncFn(
    async (commentId, commentData) => {
      return await updateCommentService(commentId, commentData);
    },
    []
  );

  /** Comment를 삭제합니다. */
  const [deleteCommentState, deleteCommentFn] = useAsyncFn(
    async (commentId: number) => {
      return await deleteCommentService(commentId);
    },
    []
  );

  // 에러 throw
  useEffect(() => {
    const newError =
      fetchCommentsState.error ||
      createCommentState.error ||
      updateCommentState.error ||
      deleteCommentState.error;

    if (newError) throw newError;
  }, [
    createCommentState.error,
    deleteCommentState.error,
    fetchCommentsState.error,
    updateCommentState.error,
  ]);

  return {
    comments: fetchCommentsState.value,
    loading:
      fetchCommentsState.loading ||
      createCommentState.loading ||
      updateCommentState.loading ||
      deleteCommentState.loading,
    error:
      fetchCommentsState.error ||
      createCommentState.error ||
      updateCommentState.error ||
      deleteCommentState.error,
    fetchCommentsFn,
    createCommentFn,
    updateCommentFn,
    deleteCommentFn,
  };
}
