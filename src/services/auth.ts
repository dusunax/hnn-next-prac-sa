import { CLIENT } from ".";
import { ResponseType } from "@/models/api";

interface UserAuth {
  email: string;
  password: string;
}

/** 가입 */
export async function signUpService(payload: UserAuth): Promise<ResponseType> {
  try {
    const res = await CLIENT.post("/auth/signup", payload);
    const data = res.data;

    console.log(res);

    return {
      success: true,
      message: "성공",
      data: { appToken: data.token },
    };
  } catch (e) {
    // res의 메시지 확인
    return { success: false, message: "회원 가입에 실패", data: "" };
  }
}

/** 로그인 */
export async function signInService(payload: UserAuth): Promise<ResponseType> {
  try {
    const res = await CLIENT.post("/", payload);
    const data = res.data;

    console.log(res);

    return {
      success: true,
      message: "성공",
      data: { appToken: data.token },
    };
  } catch (e) {
    // res의 메시지 확인
    return { success: false, message: "실패", data: "" };
  }
}

/** 구글 로그인
 *  @returns redirect "http://localhost:3690/auth/callback?accessToken=token"
 */
export default async function googleLoginService(): Promise<ResponseType> {
  try {
    const res = await CLIENT.get("/auth/login/google");

    console.log(res);

    return {
      success: true,
      message: "성공",
      data: "",
    };
  } catch (e) {
    // res의 메시지 확인
    return { success: false, message: "실패", data: "" };
  }
}

/** 네이버 로그인
 * @returns redirect "http://localhost:3690/auth/callback?accessToken=token"
 */
export async function naverLoginService(): Promise<ResponseType> {
  try {
    const res = await CLIENT.get("/auth/login/naver");
    const data = res.data;

    console.log(res);

    return {
      success: true,
      message: "성공",
      data: { appToken: data.token },
    };
  } catch (e) {
    // res의 메시지 확인
    return { success: false, message: "실패", data: "" };
  }
}
