import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";

import { getToken, saveToken, removeToken } from "@/utils/storageToken";
import { signInService, signUpService } from "@/services/auth";
import { randomNicknameService, getLoggedInUserData } from "@/services/user";

import { RetrunType } from "@/models/api";

import { useRecoilState } from "recoil";
import { userState } from "@/store/user";

// 유저 : 회원가입에 사용할 request 타입
export interface RegisterRequestType {
  email: string;
  password: string;
}
interface UseAuthReturnType extends RetrunType {
  signUp: (data: RegisterRequestType) => void;
  signIn: (data: RegisterRequestType) => void;
  token: string | undefined;
  isLogin: boolean;
}

const CALLBACK_PATH = "/auth/callback";
const initialUser = {
  id: null,
  iat: null,
  mbti: "",
  token: "",
  nickname: "",
  MBTI: "",
  gender: "",
  profilePicture: "",
};

export default function useAuth(): UseAuthReturnType {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();

  // cookie에서 토큰을 가져옵니다.
  const localToken = getToken() || "";

  const [token, setToken] = useState(localToken);
  const [isLogin, setIsLogin] = useState(checkIsTokenVaild(localToken));

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  /**
   * 액세스 토큰을 확인합니다.
   * */
  useEffect(() => {
    const newAccessToken = router?.query?.accessToken;
    if (!(location.pathname === CALLBACK_PATH)) return;
    if (typeof newAccessToken !== "string") return;

    (async function (appToken: string) {
      newTokenHandler(appToken);
      setIsLogin(true);

      const userData = await getLoggedInUserData();

      if ("MBTI" in userData) {
        console.log(userData);

        const userToSave = {
          ...initialUser,
          mbti: userData.MBTI,
          username: userData.nickname,
          token: appToken,
          gender: userData.gender,
          profilePicture: userData.profilePicture,
        };

        setUser(userToSave);
        // router.push("/");
      }
    })(newAccessToken);

    error && console.log(error);
  }, [error, router?.query?.accessToken, setUser]);

  /** 새 토큰  */
  const newTokenHandler = (appToken: string) => {
    saveToken(appToken);
    setToken(appToken);
    setIsLogin(true);
  };

  /** 토큰 삭제 */
  const deleteTokenHandler = () => {
    removeToken();
    setToken("");
  };

  // (호이스팅) 토큰 해독 함수
  function jwt_decode(token: string): any | null {
    try {
      const decoded = jwt.decode(token);
      return decoded;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  /**
   * (호이스팅) 토큰 valid여부를 확인하고 boolean 리턴
   * 그런데 지금 토큰 invalid인 경우가 없음
   * */
  function checkIsTokenVaild(appToken: string): boolean {
    const tokenExp = jwt_decode(token)?.exp;
    if (!tokenExp) return false;
    const isTokenValid = appToken !== undefined && tokenExp < Date.now() / 1000;

    if (isTokenValid) {
      return true;
    } else {
      return false;
    }
  }

  /** 회원가입 요청을 보냅니다.
   * 요청이 성공하면 토큰을 저장하고, 메인으로 이동합니다.
   * send request to api, redirect to main */
  const signUp = async (data: RegisterRequestType) => {
    try {
      setIsLoading(true);
      const response = await signUpService(data);

      if ("appToken" in response) {
        const appToken = response.appToken;
        newTokenHandler(appToken);

        router.push("/");
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      deleteTokenHandler();
    }
  };

  /** 로그인 요청을 보냅니다.
   * 요청이 성공하면 토큰을 저장하고, 메인으로 이동합니다.
   * send request to api, redirect to main */
  const signIn = async (data: RegisterRequestType) => {
    try {
      setIsLoading(true);
      const response = await signInService(data);
      console.log(response);

      if ("appToken" in response) {
        const appToken = response.appToken;
        newTokenHandler(appToken);

        const userData = await getLoggedInUserData();

        if ("MBTI" in userData) {
          console.log(userData);

          const userToSave = {
            ...initialUser,
            mbti: userData.MBTI,
            username: userData.nickname,
            token: appToken,
            gender: userData.gender,
            profilePicture: userData.profilePicture,
          };

          setUser(userToSave);
          // router.push("/");
        }
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      deleteTokenHandler();
    }
  };

  return {
    isLoading,
    isLogin,
    error,
    signUp,
    signIn,
    token,
  };
}
