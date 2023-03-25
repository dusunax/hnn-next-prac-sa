import { useState } from "react";
import Link from "next/link";

import { FaSignOutAlt } from "react-icons/fa";
import { FaUserAstronaut, FaCog } from "react-icons/fa";

import useAuth from "@/hooks/use-auth";

import { useRecoilValue } from "recoil";
import { userState } from "@/store/user";

export default function ProfileButtonBox() {
  const user = useRecoilValue(userState);
  const [isHover, setIsHover] = useState(false);
  const { signOutFn } = useAuth();

  return (
    <div className="loggin-start absolute z-10 top-12 right-0">
      {/* 로그인 상태가 아닐 때 */}
      {!isHover && (
        <div className="flex gap-2 items-center text-sm font-bold text-gray-400">
          {user.nickname}
          <button
            onMouseEnter={() => setIsHover(true)}
            className="block p-2 bg-[#333c3b] rounded-full hover:rotate-12 transition-transform"
          >
            <FaUserAstronaut size="14" color="#01fdeb" />
          </button>
        </div>
      )}

      {isHover && (
        <div
          className="button-box p-2 absolute flex gap-2 -top-2 -right-2 slide-in-right"
          onMouseLeave={() => setIsHover(false)}
        >
          {/* 개인 페이지 */}
          <Link
            href={`/user/edit`}
            className="w-8 h-8 flex-center bg-[#4e5a58] rounded-full hover:-translate-y-2 transition-transform"
          >
            <FaCog size="14" color="#b2fffa" />
          </Link>

          {/* 로그아웃 */}
          <button
            onClick={signOutFn}
            className="w-8 h-8 flex-center bg-[#4e5a58] rounded-full hover:-translate-y-2 transition-transform"
          >
            <FaSignOutAlt size="14" color="#b2fffa" />
          </button>
        </div>
      )}
    </div>
  );
}
