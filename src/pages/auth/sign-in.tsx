import Link from "next/link";

import SignInForm from "@/components/auth/sign-in-form/sign-in-form";
import LinkButton from "@/components/elements/button/link-button";

import { HiUserPlus } from "react-icons/hi2";

export default function SignInPage() {
  return (
    <>
      <h1>로그인</h1>

      <LinkButton
        href="/auth/sign-in"
        className="block p-2 bg-[#4f5554] rounded-full"
      >
        가입하기
        <HiUserPlus size="16" color="#ffffff" />
      </LinkButton>

      <SignInForm />
    </>
  );
}
