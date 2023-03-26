import { CLIENT } from ".";
import { AxiosError } from "axios";
import { CommentData } from "@/models/post-and-comment";
import { ErrorType } from "@/models/api";

// request & response 타입 아직 x
// (api 연결 후 타입 수정 필요)

// 아마 단일 comment 패칭은 없음
// 1. 전체 리스트
// 2. 작성
// 3. 단일 수정
// 4. 단일 삭제

export interface commentCreateRequestType {
  text: CommentData["text"];
}
interface CommentResponseType {}

/** [api] 해당 id의 Comments fetch */
export const fetchCommentsService = async (
  postId: number
): Promise<CommentData[] | ErrorType> => {
  try {
    const res = await CLIENT.get("/comment");

    return res.data;
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
};

/** [api] comment 작성 */
export const createCommentService = async (
  CommentData: commentCreateRequestType
): Promise<CommentData | ErrorType> => {
  try {
    const res = await CLIENT.post("/comments", CommentData);

    return res.data;
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
};

/** [api] comment 수정 */
export const updateCommentService = async (
  commentId: number,
  comment: CommentData
): Promise<CommentData | ErrorType> => {
  try {
    const res = await CLIENT.put(`/comments/${commentId}`, comment);

    return res.data;
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
};

/** [api] comment 삭제 */
export const deleteCommentService = async (
  commentId: number
): Promise<ErrorType | void> => {
  try {
    await CLIENT.delete(`/comments/${commentId}`);
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
};
