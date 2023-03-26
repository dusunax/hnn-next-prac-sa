import { useEffect } from "react";

import { PostData } from "@/models/post-and-comment";
import { ErrorType, RetrunType } from "@/models/api";

import {
  fetchAllPostsService,
  fetchPostService,
  createPostService,
  updatePostService,
  deletePostService,
  writeRequestType,
} from "@/services/post";

import { useAsyncFn } from "react-use";

interface UseCRUDReturnType extends RetrunType {
  posts: ErrorType | PostData[] | undefined;
  post: ErrorType | PostData | undefined;

  // 게시글 CRUD
  fetchPostFn: (postId: number) => Promise<PostData | ErrorType>;
  fetchAllPostsFn: () => Promise<PostData[] | ErrorType>;
  createPostFn: (postData: writeRequestType) => Promise<PostData | ErrorType>;
  updatePostFn: (
    postId: number,
    postData: Partial<PostData>
  ) => Promise<PostData | ErrorType>;
  deletePostFn: (postId: number) => Promise<void | ErrorType>;
}

// --------------------
// 게시글 CRUD
// --------------------
// 커스텀 훅 내용:
// 1. api 요청 service를 import, 사용
// 2. isLoading boolean 반환
// 3. error throw

export default function useCRUDPost(): UseCRUDReturnType {
  /** 모든 posts를 fetch합니다. */
  const [fetchAllPostsState, fetchAllPostsFn] = useAsyncFn(async () => {
    return await fetchAllPostsService();
  }, []);

  /** post를 fetch합니다. */
  const [fetchPostState, fetchPostFn] = useAsyncFn(async (postId: number) => {
    return await fetchPostService(postId);
  }, []);

  /** post를 작성합니다. */
  const [createPostState, createPostFn] = useAsyncFn(async (postData) => {
    return await createPostService(postData);
  }, []);

  /** post를 수정합니다. */
  const [updatePostState, updatePostFn] = useAsyncFn(
    async (postId, postData) => {
      return await updatePostService(postId, postData);
    },
    []
  );

  /** post를 삭제합니다. */
  const [deletePostState, deletePostFn] = useAsyncFn(async (postId: number) => {
    return await deletePostService(postId);
  }, []);

  // 에러 throw
  useEffect(() => {
    const newError =
      fetchAllPostsState.error ||
      fetchPostState.error ||
      createPostState.error ||
      updatePostState.error ||
      deletePostState.error;

    if (newError) throw newError;
  }, [
    createPostState.error,
    deletePostState.error,
    fetchAllPostsState.error,
    fetchPostState.error,
    updatePostState.error,
  ]);

  return {
    posts: fetchAllPostsState.value,
    post: fetchPostState.value,
    loading:
      fetchAllPostsState.loading ||
      fetchPostState.loading ||
      createPostState.loading ||
      updatePostState.loading ||
      deletePostState.loading,
    error:
      fetchAllPostsState.error ||
      fetchPostState.error ||
      createPostState.error ||
      updatePostState.error ||
      deletePostState.error,
    fetchAllPostsFn,
    fetchPostFn,
    createPostFn,
    updatePostFn,
    deletePostFn,
  };
}
