import { useEffect } from "react";
import { useRouter } from "next/router";

import { useRecoilValue } from "recoil";
import { userState } from "@/store/user";

import SelectOptionalUserData from "./select-optional-user-data/select-optional-user-data";
import useAuth from "@/hooks/use-auth";

export default function AuthCallback() {
  const user = useRecoilValue(userState);
  const router = useRouter();
  const {} = useAuth();

  // 이미 MBTI가 선택되었다면 메인으로 이동합니다.
  useEffect(() => {
    // hasUserMBTI : recoil 기본값 = "", api "/user" 리턴값 = "미정"
    const hasUserMBTI = user.MBTI !== "" && user.MBTI !== "미정";
    if (hasUserMBTI) router.push("/");
  }, [user, router]);

  return (
    <>
      <h2>정보를 입력하세요.</h2>
      <SelectOptionalUserData />
    </>
  );
}
