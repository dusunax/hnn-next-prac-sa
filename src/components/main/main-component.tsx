import { useEffect, useState } from "react";
import AlbumCover from "@/components/elements/album-cover/album-cover";

import { FaGoogle, FaSignInAlt } from "react-icons/fa";
import { SiNaver, SiGoogle } from "react-icons/si";

import LinkButton from "@/components/elements/button/link-button";
import PostList from "@/components/post-list/post-list";
import Link from "next/link";
import PaginationComponent from "@/components/pagination/pagination-component";

export default function MainComponent() {
  const [width, setWidth] = useState(0);
  const [opacity, setOpacity] = useState(0);

  // 페이지네이션
  const [page, setPage] = useState(1);
  const totalPages = 13;
  const limit = 3;

  // 트랜지션
  useEffect(() => {
    setWidth(40);
    setTimeout(() => {
      setOpacity(1);
    }, 300);
  }, []);

  return (
    <div className="flex flex-row h-full relative">
      <div className="absolute z-10 top-2 right-0">
        <Link href="/auth/sign-in" className="block p-2">
          <FaSignInAlt size="18" color="#eee" />
          Sign in
        </Link>
        <Link href="/auth" className="block p-2">
          Test Page
        </Link>
      </div>

      <div
        className="px-8 w-full md:w-0 rounded-lg flexdrop-shadow-xl scrollbar-hide overflow-x-hidden bg-light-gray transition-all"
        style={{
          transition: "width 0.5s ease-in-out",
          width: `${width}%`,
        }}
      >
        <div
          className="opacity-0 h-full flex flex-col justify-between"
          style={{
            transition: "opacity 0.3s ease-in-out",
            opacity: opacity,
          }}
        >
          <div className="pt-10 pb-6 sticky top-0 bg-light-gray ">
            <h1 className="font-bold">사이트</h1>
            <h3 className="font-bold">사이트에 대한 소개소개</h3>
          </div>

          <PostList />

          <footer className="h-24">
            <div className="text-right">
              <PaginationComponent
                page={page}
                setPage={setPage}
                totalPages={totalPages}
                limit={limit}
              />

              <LinkButton href={"/write"}>글 쓰기</LinkButton>
            </div>
          </footer>
        </div>
      </div>

      <AlbumCover borderRadiusStyle={"rounded-lg"} />
    </div>
  );
}
