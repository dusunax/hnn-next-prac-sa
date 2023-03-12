import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { saveToken } from "@/utils/auth";
import { signInService, signUpService } from "@/services/auth";

import { AuthData } from "@/models/user";
import { RetrunType } from "@/models/api";

interface UseAuthReturnType extends RetrunType {
  signUp: (data: AuthData) => void;
  signIn: (data: AuthData) => void;
}

export default function useAuth(): UseAuthReturnType {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    error && console.log(error);
  }, [error, isLoading]);

  /** 회원가입 요청을 보냅니다.
   * 요청이 성공하면 토큰을 저장하고, 메인으로 이동합니다.
   * send request to api, redirect to main */
  const signUp = async (data: AuthData) => {
    try {
      setIsLoading(true);
      const response = await signUpService(data);

      if ("appToken" in response) {
        saveToken(response.appToken);
        router.push("/");
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
        saveToken(response.appToken);
        router.push("/");
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, signUp, signIn };
}
