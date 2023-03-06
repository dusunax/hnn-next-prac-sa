import { useEffect, useState } from "react";
import { PostData } from "@/models/post";
import { RetrunType } from "@/models/api";

import {
  createPostService,
  deletePostService,
  fetchAllPostsService,
  fetchPostService,
  updatePostService,
} from "@/services/posts";

interface UsePostsReturnType extends RetrunType {
  posts: PostData[];
  fetchPost: (postId: number) => Promise<void>;
  fetchAllPosts: () => Promise<void>;
  createPost: (postData: PostData) => Promise<void>;
  updatePost: (postId: number, postData: PostData) => Promise<void>;
  deletePost: (postId: number) => Promise<void>;
}

export default function usePosts(): UsePostsReturnType {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [posts, setPosts] = useState<PostData[]>([]);

  // 에러 throw
  useEffect(() => {
    if (error) throw new Error(error);
    setError("");
  }, [error]);

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
  const fetchPost = async (postId: number) => {
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

  const createPost = async (postData: PostData) => {
    setIsLoading(true);

    console.log("게시글 작성(api 연결 후 handler 수정)");

    const response = await createPostService(postData);

    // if ("message" in response) {
    //   setError(response.message);
    // } else {
    //   setPosts((prevPosts) => [...prevPosts, response]);
    // }

    setIsLoading(false);
  };

  const updatePost = async (postId: number, postData: PostData) => {
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

  const deletePost = async (postId: number) => {
    setIsLoading(true);

    console.log("게시글 삭제(api 연결 후 handler 수정)");

    // const response = await deletePostService(postId);

    // if ("message" in response) {
    //   setError(response.message);
    // } else {
    //   setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
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
  };
}
