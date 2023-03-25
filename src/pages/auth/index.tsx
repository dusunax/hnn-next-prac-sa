import Link from "next/link";

import useAuth from "@/hooks/use-auth";
import {
  googleLoginService,
  naverLoginService,
  signInService,
  signUpService,
} from "@/services/auth";

export default function AuthPage() {
  const dummy = { email: "test5@example.com", password: "111111" };
  const { signUpFn } = useAuth();

  return (
    <>
      ~ Auth API 확인 ~
      <button onClick={() => signUpFn(dummy)}>가입 & 토큰 저장</button>
      <button onClick={() => signUpService(dummy)}>가입</button>
      <button onClick={() => signInService(dummy)}>로그인</button>
      <button onClick={() => googleLoginService()}>구글</button>
      <button onClick={() => naverLoginService()}>네이버</button>
      <Link href="/auth/callback">콜백 페이지</Link>
    </>
  );
}
