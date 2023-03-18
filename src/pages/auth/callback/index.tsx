import AuthCallback from "@/components/auth/auth-callback";
import SelectMBTI from "@/components/auth/select-mbti/select-mbti-component";

// 구글 callback, 네이버 callback 리디렉션의 endpoint 입니다.
export default function AuthCallbackPage() {
  return (
    <>
      <SelectMBTI />
      <AuthCallback />
    </>
  );
}
