import { useState } from "react";
import Link from "next/link";

import { FaSignInAlt } from "react-icons/fa";
import { SiNaver, SiGoogle } from "react-icons/si";
import { MdEmail } from "react-icons/md";

import { googleLoginService, naverLoginService } from "@/services/auth";
import Button from "../button/button";

export default function SocialButtonBox() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="loggin-start absolute z-10 top-10 right-0">
      {!isHover && (
        <Link
          href="/auth/sign-in"
          className="block p-2 bg-[#333c3b] rounded-full"
          onMouseEnter={() => setIsHover(true)}
        >
          <FaSignInAlt size="16" color="#01fdeb" />
        </Link>
      )}

      {isHover && (
        <div
          className="button-box p-2 absolute flex gap-2 -top-2 -right-2 slide-in-right"
          onMouseLeave={() => setIsHover(false)}
        >
          <button
            className="w-8 h-8 flex-center bg-[#03c75a] rounded-full hover:-translate-y-2 transition-transform"
            onClick={naverLoginService}
          >
            <SiNaver size="16" color="#ffffff" />
          </button>
          <button
            className="w-8 h-8 flex-center relative overflow-hidden rounded-full hover:-translate-y-2 transition-transform"
            onClick={googleLoginService}
          >
            <div className="bg-blue-500 w-1/2 h-1/2 absolute -z-10 top-0 left-0"></div>
            <div className="bg-red-500 w-1/2 h-1/2 absolute -z-10 top-0 right-0"></div>
            <div className="bg-yellow-500 w-1/2 h-1/2 absolute -z-10 bottom-0 left-0"></div>
            <div className="bg-green-500 w-1/2 h-1/2 absolute -z-10 bottom-0 right-0"></div>
            <SiGoogle size="16" color="#ffffff" />
          </button>
          <Link
            href="/auth/sign-in"
            className="w-8 h-8 flex-center bg-[#4f5554] rounded-full hover:-translate-y-2 transition-transform"
          >
            <MdEmail size="16" color="#ffffff" />
          </Link>
        </div>
      )}
    </div>
  );
}
