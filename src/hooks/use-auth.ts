import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";

import { getToken, saveToken, removeToken } from "@/utils/storageToken";
import { signInService, signUpService } from "@/services/auth";

import { AuthData } from "@/models/user";
import { RetrunType } from "@/models/api";

interface UseAuthReturnType extends RetrunType {
  signUp: (data: AuthData) => void;
  signIn: (data: AuthData) => void;
  token: string | undefined;
  isLogin: boolean;
}

export default function useAuth(): UseAuthReturnType {
  //cookie에서 토큰을 가져옵니다.
  const localToken = getToken() || "";

  // query에서 accessToken 값을 가져옵니다.
  const router = useRouter();
  const { accessToken: queryToken } = router.query;

  const [token, setToken] = useState(localToken);
  const [isLogin, setIsLogin] = useState(checkIsTokenVaild(localToken));

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (queryToken !== undefined && typeof queryToken !== "object") {
      // newTokenHandler, checkIsTokenVaild와 같은 기능
      (function (appToken: string) {
        const tokenExp = jwt_decode(appToken)?.exp;
        const isTokenValid =
          appToken !== undefined && tokenExp < Date.now() / 1000;
        if (!isTokenValid) return;

        saveToken(appToken);
        setToken(appToken);
        setIsLogin(true);
      })(queryToken);
    }

    error && console.log(error);
  }, [queryToken, error]);

  /** 새 토큰  */
  const newTokenHandler = (appToken: string) => {
    const isTokenValid = checkIsTokenVaild(appToken);
    if (!isTokenValid) return;

    saveToken(appToken);
    setToken(appToken);
    setIsLogin(true);
  };

  /** 토큰 삭제 */
  const deleteTokenHandler = () => {
    removeToken();
    setToken("");
  };

  // 토큰 해독 함수
  const jwt_decode = (token: string): any | null => {
    try {
      const decoded = jwt.decode(token);
      return decoded;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  /** (호이스팅) 토큰 vaild여부를 확인하고 boolean 리턴 */
  function checkIsTokenVaild(appToken: string): boolean {
    const tokenExp = jwt_decode(token)?.exp;
    if (!tokenExp) return false;
    console.log(tokenExp);

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
  const signUp = async (data: AuthData) => {
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
  const signIn = async (data: AuthData) => {
    try {
      setIsLoading(true);
      const response = await signInService(data);
      console.log(response);

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

  return { isLoading, isLogin, error, signUp, signIn, token };
}
