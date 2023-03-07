import { useEffect, useState } from "react";
import { PostData } from "@/models/post";
import { RetrunType } from "@/models/api";

import Cookies from "js-cookie";

import {
  createPostService,
  deletePostService,
  fetchAllPostsService,
  fetchPostService,
  updatePostService,
  writeRequestType,
} from "@/services/posts";

// api 요청 service + return type + error throw
interface UsePostsReturnType extends RetrunType {
  posts: PostData[];
  // CRUD
  fetchPost: (postId: number) => Promise<void>;
  fetchAllPosts: () => Promise<void>;
  createPost: (postData: writeRequestType) => Promise<void>;
  updatePost: (postId: number, postData: Partial<PostData>) => Promise<void>;
  deletePost: (postId: number) => Promise<void>;
  // 임시저장
  getDraftData: () => writeRequestType | null;
  setDraftData: (data: writeRequestType) => void;
  clearDraftData: () => void;
}

export default function useCRUD(): UsePostsReturnType {
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
  const fetchPost: UsePostsReturnType["fetchPost"] = async (postId) => {
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

  const createPost: UsePostsReturnType["createPost"] = async (postData) => {
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

  const updatePost: UsePostsReturnType["updatePost"] = async (
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

  const deletePost: UsePostsReturnType["deletePost"] = async (postId) => {
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

  // 임시 저장된 게시글 데이터 가져오기
  const getDraftData: UsePostsReturnType["getDraftData"] = () => {
    const tempData = Cookies.get("draft");
    return tempData ? JSON.parse(tempData) : null;
  };

  // 임시 저장된 게시글 데이터 저장하기
  const setDraftData: UsePostsReturnType["setDraftData"] = (data) => {
    Cookies.set("draft", JSON.stringify(data));
  };

  // 임시 저장된 게시글 데이터 삭제하기
  const clearDraftData: UsePostsReturnType["clearDraftData"] = () => {
    Cookies.remove("draft");
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
    getDraftData,
    setDraftData,
    clearDraftData,
  };
}
