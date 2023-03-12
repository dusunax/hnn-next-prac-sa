import dummyData from "@/dummy.json";

// --------------------
// 1. 게시글 CRUD
// --------------------

import { useEffect, useState } from "react";
import { PostData, CommentData } from "@/models/post-and-comment";
import { RetrunType } from "@/models/api";

import {
  createPostService,
  deletePostService,
  fetchAllPostsService,
  fetchPostService,
  updatePostService,
  writeRequestType,
} from "@/services/post";

export interface UseCRUDReturnType extends RetrunType {
  posts: PostData[];
  comments: CommentData[];
  isLoading: boolean;
  error: string;
  // 게시글 CRUD
  fetchPost: (postId: number) => Promise<void>;
  fetchAllPosts: () => Promise<void>;
  createPost: (postData: writeRequestType) => Promise<void>;
  updatePost: (postId: number, postData: Partial<PostData>) => Promise<void>;
  deletePost: (postId: number) => Promise<void>;
  // 댓글 CRUD
  fetchComments: (commentId: number) => Promise<void>;
  createComment: (commentData: Partial<CommentData>) => Promise<void>;
  updateComment: (
    commentId: number,
    commentData: Partial<CommentData>
  ) => Promise<void>;
  deleteComment: (commentId: number) => Promise<void>;
}

// 게시글(A)과 댓글(B) CRUD에 대한 커스텀 훅:
// 1. api 요청 service를 import, 사용
// 2. isLoading boolean 반환
// 3. error throw
export default function useCRUD(): UseCRUDReturnType {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [posts, setPosts] = useState<PostData[]>([]);
  const [comments, setComments] = useState<CommentData[]>([]);

  // 에러 throw
  useEffect(() => {
    if (error) throw new Error(error);
    setError("");
  }, [error]);

  // --------------------
  // A. 게시글 CRUD
  // --------------------

  /** 모든 posts를 fetch합니다. */
  const fetchAllPosts = async () => {
    setIsLoading(true);

    console.log("게시글 목록 패칭(api 연결 후 handler 수정)");

    // const response = await fetchAllPostsService();

    // if ("message" in response) {
    //   setError(response.message);
    // } else {
    //   setPosts(response);
    // }

    setIsLoading(false);
  };

  /** post를 작성합니다. */
  const fetchPost: UseCRUDReturnType["fetchPost"] = async (postId) => {
    setIsLoading(true);

    console.log("게시글 패칭(api 연결 후 handler 수정)");

    // const response = await fetchPostService(postId);

    // if ("message" in response) {
    //   setError(response.message);
    // } else {
    //   setPosts(response);
    // }

    setIsLoading(false);
  };

  const createPost: UseCRUDReturnType["createPost"] = async (postData) => {
    setIsLoading(true);

    console.log("게시글 작성(api 연결 후 handler 수정)");
    console.log(postData);

    // const response = await createPostService(postData);

    // if ("message" in response) {
    //   setError(response.message);
    // } else {
    //   setPosts((prevPosts) => [...prevPosts, response]);
    // }

    setIsLoading(false);
  };

  const updatePost: UseCRUDReturnType["updatePost"] = async (
    postId,
    postData
  ) => {
    setIsLoading(true);

    console.log("게시글 수정(api 연결 후 handler 수정)");

    // const response = await updatePostService(postId, postData);

    // if ("message" in response) {
    //   setError(response.message);
    // } else {
    //   setPosts((prevPosts) =>
    //     prevPosts.map((post) => (post.id === response.id ? response : post))
    //   );
    // }

    setIsLoading(false);
  };

  const deletePost: UseCRUDReturnType["deletePost"] = async (postId) => {
    setIsLoading(true);

    console.log("게시글 삭제(api 연결 후 handler 수정)");

    // const response: UsePostsReturnType["response"] = await deletePostService(postId);

    // if ("message" in response) {
    //   setError(response.message);
    // } else {
    //   setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    // }

    setIsLoading(false);
  };

  // --------------------
  // B. 댓글 CRUD
  // --------------------

  /** 해당 게시글의 Comment를 가져옵니다. */
  const fetchComments: UseCRUDReturnType["fetchComments"] = async (postId) => {
    setIsLoading(true);

    console.log("게시글 패칭(api 연결 후 handler 수정)");

    // const response = await fetchpostsService(postId);

    // if ("message" in response) {
    //   setError(response.message);
    // } else {
    //   setposts(response);
    // }
    const comments = dummyData.posts.find((e) => e.id === postId)?.comments;
    if (!comments || comments.length === 0) return setComments([]);

    setComments(comments);
    setIsLoading(false);
  };

  const createComment: UseCRUDReturnType["createComment"] = async (
    commentData
  ) => {
    setIsLoading(true);

    console.log("게시글 작성(api 연결 후 handler 수정)");
    console.log(commentData);

    // const response = await createCommentService(commentData);

    // if ("message" in response) {
    //   setError(response.message);
    // } else {
    //   setComments((prevComments) => [...prevComments, response]);
    // }

    setIsLoading(false);
  };

  const updateComment: UseCRUDReturnType["updateComment"] = async (
    commentId,
    commentText
  ) => {
    setIsLoading(true);

    console.log("게시글 수정(api 연결 후 handler 수정)");

    // const response = await updateCommentService(commentId, commentData);

    // if ("message" in response) {
    //   setError(response.message);
    // } else {
    //   setComments((prevComments) =>
    //     prevComments.map((comment) => (comment.id === response.id ? response : comment))
    //   );
    // }

    setIsLoading(false);
  };

  const deleteComment: UseCRUDReturnType["deleteComment"] = async (
    commentId
  ) => {
    setIsLoading(true);

    console.log("게시글 삭제(api 연결 후 handler 수정)");

    // const response: UseCommentsReturnType["response"] = await deleteCommentService(commentId);

    // if ("message" in response) {
    //   setError(response.message);
    // } else {
    //   setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
    // }

    setIsLoading(false);
  };

  return {
    posts,
    isLoading,
    error,
    fetchPost,
    fetchAllPosts,
    createPost,
    updatePost,
    deletePost,
    comments,
    fetchComments,
    createComment,
    updateComment,
    deleteComment,
  };
}
