import googleLoginService, {
  naverLoginService,
  signInService as signInService,
  signUpService,
} from "@/services/auth";

export default function AuthPage() {
  const dummy = { email: "test@example.com", password: "111111" };

  return (
    <>
      ~ Auth API 확인 ~
      <button onClick={() => signUpService(dummy)}>가입</button>
      <button onClick={() => signInService(dummy)}>로그인</button>
      <button onClick={() => googleLoginService()}>구글</button>
      <button onClick={() => naverLoginService()}>네이버</button>
    </>
  );
}
