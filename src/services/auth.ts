import { CLIENT } from ".";
import { AuthResponseType, ErrorType, ResponseType } from "@/models/api";
import { AxiosError } from "axios";

interface UserAuth {
  email: string;
  password: string;
}

/** 가입 */
export async function signUpService(
  payload: UserAuth
): Promise<AuthResponseType | ErrorType> {
  try {
    const res = await CLIENT.post("/auth/signup", payload);
    return res.data;
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ErrorType;
    return errorResponse;
  }
}

/** 로그인 */
export async function signInService(
  payload: UserAuth
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

/** 구글 로그인
 *  @returns redirect "http://localhost:3690/auth/callback?accessToken=token"
 */
export default async function googleLoginService(): Promise<ResponseType> {
  try {
    const res = await CLIENT.get("/auth/login/google");
    return res.data;
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ResponseType;
    return errorResponse;
  }
}

/** 네이버 로그인
 * @returns redirect "http://localhost:3690/auth/callback?accessToken=token"
 */
export async function naverLoginService(): Promise<ResponseType> {
  try {
    const res = await CLIENT.get("/auth/login/naver");
    return res.data;
  } catch (e: AxiosError | any) {
    const errorResponse = e.response.data.message as ResponseType;
    return errorResponse;
  }
}
