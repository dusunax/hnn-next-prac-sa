import { CLIENT } from ".";

// 기본 return타입
import { ErrorType, ResponseType } from "@/models/api";
import { AxiosError } from "axios";

interface UserDataResponseType {
  nickname: string;
  MBTI: string;
  gender: "man" | "woman";
  profilePicture: string;
}

/** [api] 랜덤 닉네임 */
export async function randomNicknameService(
  mbti: string
): Promise<{ nickname: string } | ErrorType> {
  try {
    const res = await CLIENT.get(`/users/nickname?MBTI=${mbti}`);
    console.log(res.data);

    return res.data;
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
}

/** [api] 로그인한 사용자 데이터 가져오기 */
export async function getLoggedInUserData(): Promise<
  UserDataResponseType | ErrorType
> {
  try {
    const res = await CLIENT.get(`/users`);
    console.log(res);

    return res.data;
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
}
