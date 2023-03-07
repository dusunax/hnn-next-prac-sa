import useAuth from "@/hooks/useAuth";
import googleLoginService, {
  naverLoginService,
  signInService,
  signUpService,
} from "@/services/auth";

export default function AuthPage() {
  const dummy = { email: "test5@example.com", password: "111111" };
  const { signUp } = useAuth();

  return (
    <>
      ~ Auth API 확인 ~
      <button onClick={() => signUp(dummy)}>가입 & 토큰 저장</button>
      <button onClick={() => signUpService(dummy)}>가입</button>
      <button onClick={() => signInService(dummy)}>로그인</button>
      <button onClick={() => googleLoginService()}>구글</button>
      <button onClick={() => naverLoginService()}>네이버</button>
    </>
  );
}
