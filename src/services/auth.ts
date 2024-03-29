import { CLIENT } from ".";
import { API_URL } from "@/constants/server";

// 기본 return타입
import { ErrorType, ResponseType } from "@/models/api";
import { AxiosError } from "axios";

interface UserAuthRequestType {
  email: string;
  password: string;
}
interface AuthResponseType {
  appToken: string;
}

/** [api] 가입 */
export async function signUpService(
  payload: UserAuthRequestType
): Promise<AuthResponseType | ErrorType> {
  try {
    const res = await CLIENT.post("/auth/signup", payload);
    return res.data;
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
}

/** [api] 로그인 */
export async function signInService(
  payload: UserAuthRequestType
): Promise<AuthResponseType | ErrorType> {
  try {
    const res = await CLIENT.post("/auth", payload);
    console.log(res);

    return res.data;
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
}

/** [api] 구글 로그인
 *  @redirect redirect "http://localhost:3690/auth/callback?accessToken=token"
 */
export async function googleLoginService(): Promise<
  ResponseType | ErrorType | void
> {
  location.replace(API_URL + "/auth/login/google");
}

/** [api] 네이버 로그인
 * @redirect redirect "http://localhost:3690/auth/callback?accessToken=token"
 */
export async function naverLoginService(): Promise<
  ResponseType | ErrorType | void
> {
  try {
    location.replace(API_URL + "/auth/login/naver");
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
}
