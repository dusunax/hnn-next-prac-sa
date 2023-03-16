import Link from "next/link";

import SignUpForm from "@/components/auth/sign-up-form/sign-up-form";
import LinkButton from "@/components/elements/button/link-button";

import { GrLogin } from "react-icons/gr";

export default function SignUpPage() {
  return (
    <>
      <h1>회원가입</h1>

      <LinkButton
        href="/auth/sign-in"
        className="block p-2 bg-[#4f5554] rounded-full"
      >
        로그인
        <GrLogin size="16" color="#ffffff" />
      </LinkButton>

      <SignUpForm />
    </>
  );
}
