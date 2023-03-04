import { useState } from "react";
import { useRouter } from "next/router";

import { saveToken } from "@/utils/auth";
import { signInService, signUpService } from "@/services/auth";

import { AuthResponseType } from "@/models/api";
import { AuthData } from "@/models/user";

export function useAuth() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  /** 회원가입 요청을 보냅니다.
   * 요청이 성공하면 토큰을 저장하고, 메인으로 이동합니다.
   * send request to api, redirect to main */
  async function signUp(data: AuthData) {
    try {
      setIsLoading(true);
      const response: AuthResponseType = await signUpService(data);

      if (response.success) {
        saveToken(response.data.appToken);
        router.push("/");
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError("회원가입 실패");
    } finally {
      setIsLoading(false);
    }
  }

  /** 로그인 요청을 보냅니다.
   * 요청이 성공하면 토큰을 저장하고, 메인으로 이동합니다.
   * send request to api, redirect to main */
  async function login(data: AuthData) {
    try {
      setIsLoading(true);
      const response: AuthResponseType = await signInService(data);

      if (response.success) {
        saveToken(response.data.appToken);
        router.push("/");
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError("로그인 실패");
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, signUp, login };
}
