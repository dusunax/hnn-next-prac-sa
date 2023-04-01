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
  fetchPostListService,
  reqMaxPageNumberService,
} from "@/services/post";

import { useAsyncFn, useLocation } from "react-use";

interface UseCRUDReturnType extends RetrunType {
  posts: ErrorType | PostData[] | undefined;
  post: ErrorType | PostData | undefined;
  maxPageNumber: ErrorType | number | undefined;

  // 게시글 CRUD
  fetchPostFn: (postId: number) => Promise<PostData | ErrorType>;
  fetchAllPostsFn: () => Promise<PostData[] | ErrorType>;
  fetchAllPostsByQueryStringFn: (
    queryString: string
  ) => Promise<PostData[] | ErrorType>;
  createPostFn: (postData: writeRequestType) => Promise<PostData | ErrorType>;
  updatePostFn: (
    postId: number,
    postData: Partial<PostData>
  ) => Promise<PostData | ErrorType>;
  deletePostFn: (postId: number) => Promise<void | ErrorType>;
  maxPageFetchFn: () => Promise<number | ErrorType>;
}

// --------------------
// 게시글 CRUD
// --------------------
// 커스텀 훅 내용:
// 1. api 요청 service를 import, 사용
// 2. isLoading boolean 반환
// 3. error throw

export default function useCRUDPost(): UseCRUDReturnType {
  const location = useLocation();

  /** 모든 posts를 fetch합니다. */
  const [fetchAllPostsState, fetchAllPostsFn] = useAsyncFn(async () => {
    const search = location.search;
    const posts = await fetchPostListService(
      search || "?limit=5&page=1&sort=DESC"
    );
    return posts;
  }, []);

  /** 모든 posts를 fetch합니다. */
  const [fetchAllPostsByQueryStringState, fetchAllPostsByQueryStringFn] =
    useAsyncFn(async (query: string) => {
      const posts = await fetchPostListService(query || "");
      return posts;
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

  /** 최대 페이지 갯수를 가져옵니다. */
  const [maxPageFetchState, maxPageFetchFn] = useAsyncFn(async () => {
    const search = location.search;
    const maxPageNumber = await reqMaxPageNumberService(
      search || "?limit=5&page=1&sort=DESC"
    );

    return maxPageNumber;
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
    posts: fetchAllPostsByQueryStringState.value || fetchAllPostsState.value,
    post: fetchPostState.value,
    loading:
      fetchAllPostsState.loading ||
      fetchPostState.loading ||
      fetchAllPostsByQueryStringState.loading ||
      createPostState.loading ||
      updatePostState.loading ||
      deletePostState.loading ||
      maxPageFetchState.loading,
    error:
      fetchAllPostsState.error ||
      fetchPostState.error ||
      fetchAllPostsByQueryStringState.error ||
      createPostState.error ||
      updatePostState.error ||
      deletePostState.error ||
      maxPageFetchState.error,
    maxPageNumber: maxPageFetchState.value,
    fetchAllPostsFn,
    fetchAllPostsByQueryStringFn,
    fetchPostFn,
    createPostFn,
    updatePostFn,
    deletePostFn,
    maxPageFetchFn,
  };
}
