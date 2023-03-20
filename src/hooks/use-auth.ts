import { useState } from "react";
import { useAsync, useAsyncFn, useSearchParam } from "react-use";

import { getToken, saveToken, removeToken } from "@/utils/storageToken";
import { signInService, signUpService } from "@/services/auth";
import { getLoggedInUserData } from "@/services/user";

import { RetrunType } from "@/models/api";

import { useRecoilState } from "recoil";
import { userState } from "@/store/user";
import { UserStateType } from "@/models/user";

// 유저 : 회원가입에 사용할 request 타입
export interface RegisterRequestType {
  email: string;
  password: string;
}
interface UseAuthReturnType extends RetrunType {
  signUpFn: (data: RegisterRequestType) => void;
  signInFn: (data: RegisterRequestType) => void;
  signOutFn: () => void;
  user: UserStateType;
}

const initialUser: UserStateType = {
  id: null,
  MBTI: "",
  token: "",
  nickname: "",
  gender: "",
  profilePicture: "",
  isLogin: false,
};

export default function useAuth(): UseAuthReturnType {
  const [user, setUser] = useRecoilState(userState);
  const paramsToken = useSearchParam("accessToken");

  // 토큰을 가져옵니다.
  const localToken = getToken();

  // localToken에서 유저 정보를 가져옵니다.
  const newUserState = useAsync(async () => {
    const currentToken = paramsToken || localToken || "";
    saveToken(paramsToken || localToken || "");

    if (user.id !== null) return;
    const userData = await getLoggedInUserData();

    if ("id" in userData) {
      return setUser({
        ...initialUser,
        MBTI: userData.MBTI,
        nickname: userData.nickname,
        token: currentToken,
        gender: userData.gender,
        profilePicture: userData.profilePicture,
        isLogin: true,
      });
    }
  }, [paramsToken]);

  /** 새 토큰  */
  const newTokenHandler = (appToken: string) => {
    console.log("토큰을 저장합니다.");

    saveToken(appToken);
  };

  /** 토큰 삭제 */
  const signOutFn = () => {
    removeToken();
    setUser(initialUser);
  };

  /** 회원가입 요청을 보냅니다.
   * 요청이 성공하면 토큰을 저장합니다.
   * send request to api, redirect to main */
  const [signUpState, signUpFn] = useAsyncFn(
    async (data: RegisterRequestType) => {
      try {
        const response = await signUpService(data);

        if ("appToken" in response) {
          const appToken = response.appToken;
          newTokenHandler(appToken);
        }
      } catch (error) {
        console.log(error);
      } finally {
        signOutFn();
      }
    }
  );

  /** 로그인 요청을 보냅니다.
   * 요청이 성공하면 토큰을 저장하고, 메인으로 이동합니다.
   * send request to api, redirect to main */
  const [signInState, signInFn] = useAsyncFn(
    async (data: RegisterRequestType) => {
      try {
        const response = await signInService(data);
        console.log(response);

        if ("appToken" in response) {
          const appToken = response.appToken;
          newTokenHandler(appToken);
        }
      } catch (error) {
        console.log(error);
      } finally {
        signOutFn();
      }
    }
  );

  return {
    isLoading:
      newUserState.loading || signUpState.loading || signInState.loading,
    error: newUserState.error || signUpState.error || signInState.error,
    signUpFn,
    signInFn,
    signOutFn,
    user,
  };
}
