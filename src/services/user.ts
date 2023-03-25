import { CLIENT } from ".";

// 기본 return타입
import { ErrorType, ResponseType } from "@/models/api";
import { UserStateType } from "@/models/user";
import { AxiosError } from "axios";

type LoggedInUserResponse = UserStateType;
interface UpdateUserProfileRequest {
  nickname: string;
  MBTI: string;
  gender: string;
}

/** [api] 랜덤 닉네임 */
export async function randomNicknameService(
  mbti: string
): Promise<{ nickname: string } | ErrorType> {
  try {
    const res = await CLIENT.get(`/users/nickname?MBTI=${mbti}`);
    // console.log(res.data);

    return res.data;
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
}

/** [api] 로그인한 사용자 데이터 가져오기 */
export async function getLoggedInUserData(): Promise<
  LoggedInUserResponse | ErrorType
> {
  try {
    const res = await CLIENT.get(`/users`);
    // console.log(res.data);

    return res.data;
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
}

/** [api] 사용자 프로필 업데이트 */
export async function updateUserProfileService(
  data: UpdateUserProfileRequest
): Promise<Partial<ResponseType> | ErrorType> {
  try {
    const res = await CLIENT.put(`/users`, data);
    // console.log(res.data);

    if (res.status === 200) {
      return res.data;
    } else {
      console.error("프로필 업데이트에 실패하였습니다.");
      return { message: "실패", statusCode: res.status };
    }
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
}

/** [api] 사용자 프로필 업데이트 */
export async function updateUserAvatarService(
  avatar: FormData
): Promise<Partial<ResponseType> | ErrorType> {
  try {
    const res: ErrorType | { success: boolean } = await CLIENT.patch(
      `/users/picture`,
      avatar
    );

    if ("success" in res) {
      return res;
    } else {
      return {
        message: "프로필 이미지 업데이트 실패",
        statusCode: res.statusCode,
      };
    }
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
}
