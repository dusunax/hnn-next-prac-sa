import { CLIENT } from ".";
import { AxiosError } from "axios";
import { PostData } from "@/models/post-and-comment";
import { ErrorType } from "@/models/api";
import { convertResponseObjectToArray } from "@/utils/convertToObjectArray";

export interface writeRequestType {
  postTitle: PostData["postPostTitle"];
  postDescription: string;
  uri: string;
}
interface FetchPostQueryType {
  order: "recent" | "";
  sort?: "DESC" | "ASC";
  MBTI: "string";
  page: number;
  limit: number;
}

/** [api] (구) 전체 posts fetch */
export const fetchAllPostsService = async (): Promise<
  PostData[] | ErrorType
> => {
  const res = await CLIENT.get("/posts");
  return convertResponseObjectToArray(res.data);
};

/** [api] 필터 postList fetch */
export const fetchPostListService = async (
  search: string
): Promise<PostData[] | ErrorType> => {
  const res = await CLIENT.get(`/posts${search}`);
  return convertResponseObjectToArray(res.data);
};

/** [api] 단일 post, id로 fetch */
export const fetchPostService = async (
  postId: number
): Promise<PostData | ErrorType> => {
  try {
    const res = await CLIENT.get(`/posts/${postId}/detail`);

    return res.data[0];
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

/** postId에 해당하는 게시글에 [좋아요/좋아요 취소]를 요청합니다. */
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

/** maxPageNumber: number를 리턴합니다. */
export const reqMaxPageNumberService = async (
  queryString: string
): Promise<ErrorType | number> => {
  try {
    const res = await CLIENT.get("/posts/page" + queryString);

    return res.data[0].maxPageNumber;
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
};
