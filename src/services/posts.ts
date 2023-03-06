import { CLIENT } from ".";
import { AxiosError } from "axios";
import { PostData } from "@/models/post";
import { ErrorType } from "@/models/api";

// request & response 타입 아직 x
// (api 연결 후 타입 수정 필요)
export interface writeRequestType {
  title: PostData["title"];
  description: PostData["description"];
  album: PostData["album"];
}
interface PostResponseType {}

/** [api] 전체 posts fetch */
export const fetchAllPostsService = async (): Promise<
  PostData[] | ErrorType
> => {
  try {
    const res = await CLIENT.get("/posts");

    return res.data;
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
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
