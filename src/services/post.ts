import { CLIENT } from ".";
import { AxiosError } from "axios";
import { PostData } from "@/models/post-and-comment";
import { ErrorType } from "@/models/api";
import { convertResponseObjectToArray } from "@/utils/convertToObjectArray";

// request & response 타입 아직 x
// (api 연결 후 타입 수정 필요)
export interface writeRequestType {
  postTitle: PostData["postPostTitle"];
  postDescription: string;
  uri: string;
}
interface PostResponseType {}

interface FetchPostQueryType {
  order: "recent" | "";
  sort?: "DESC" | "ASC";
  MBTI: "string";
  page: number;
  limit: number;
}

/** [api] 전체 posts fetch */
export const fetchAllPostsService = async (): Promise<
  PostData[] | ErrorType
> => {
  const res = await CLIENT.get("/posts");
  return convertResponseObjectToArray(res.data);
  return [];
};

/** [api] 필터 postList fetch */
export const fetchPostListService = async (
  payload: FetchPostQueryType
): Promise<PostData[] | ErrorType> => {
  const { order, MBTI, page, limit } = payload;

  const res = await CLIENT.get(
    `/posts?order=${order}&MBTI=${MBTI}&page=${page}&limit=${limit}`
  );
  return convertResponseObjectToArray(res.data);
};

/** [api] 단일 post, id로 fetch */
export const fetchPostService = async (
  postId: number
): Promise<PostData | ErrorType> => {
  try {
    const res = await CLIENT.get(`/posts/${postId}`);

    return res.data;
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
};

/** [api] post 작성 */
export const createPostService = async (
  postData: writeRequestType
): Promise<PostData | ErrorType> => {
  try {
    const res = await CLIENT.post("/posts", postData);

    return res.data;
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
};

/** [api] post 수정 */
export const updatePostService = async (
  postId: number,
  post: PostData
): Promise<PostData | ErrorType> => {
  try {
    const res = await CLIENT.put(`/posts/${postId}`, post);

    return res.data;
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
};

/** [api] post 삭제 */
export const deletePostService = async (
  postId: number
): Promise<ErrorType | void> => {
  try {
    await CLIENT.delete(`/posts/${postId}`);
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
};

export const likePostService = async (
  postId: number
): Promise<ErrorType | void> => {
  try {
    await CLIENT.post(`/likes/${postId}`);
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
};
