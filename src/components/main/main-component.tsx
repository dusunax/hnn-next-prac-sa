import { useEffect, useState } from "react";

import PaginationComponent from "@/components/pagination/pagination-component";
import PostList from "@/components/post-list/post-list";
import AlbumCover from "@/components/elements/album-cover/album-cover";
import LinkButton from "@/components/elements/button/link-button";
import SocialButtonBox from "@/components/elements/button-box/social-button-box";
import ProfileButtonBox from "@/components/elements/button-box/profile-button-box";

import { useRecoilValue } from "recoil";
import { userState } from "@/store/user";

export default function MainComponent() {
  const user = useRecoilValue(userState);
  const { isLogin } = user;

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
            <h1 className="font-bold">흐느넴</h1>
            <h3 className="font-bold">지금 뭐 듣고 있어?</h3>

            {isLogin && <ProfileButtonBox />}
            {!isLogin && <SocialButtonBox />}
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

              <LinkButton isDisabled={!isLogin} href={"/write"}>
                글 쓰기
              </LinkButton>
            </div>
          </footer>
        </div>
      </div>

      <AlbumCover borderRadiusStyle={"rounded-lg"} />
    </div>
  );
}
