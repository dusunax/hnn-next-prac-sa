import useAuth from "@/hooks/use-auth";
import { useRouter } from "next/router";
import LinkButton from "../elements/button/link-button";

export default function AuthCallback() {
  const { isLogin } = useAuth();
  const router = useRouter();

  // isLogin && router.push("/");

  return (
    <>
      {!isLogin && "로그인에 실패하였습니다."}
      <LinkButton href="/">메인으로 돌아가기</LinkButton>
    </>
  );
}
