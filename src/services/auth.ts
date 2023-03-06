import { CLIENT } from ".";

// api 요청 결과 & 에러 메시지를 반환
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
export default async function googleLoginService(): Promise<
  ResponseType | ErrorType | void
> {
  try {
    const res = await CLIENT.get("/auth/login/google");
    return res.data;
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
}

/** [api] 네이버 로그인
 * @redirect redirect "http://localhost:3690/auth/callback?accessToken=token"
 */
export async function naverLoginService(): Promise<
  ResponseType | ErrorType | void
> {
  try {
    const res = await CLIENT.get("/auth/login/naver");
    return res.data;
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
}
