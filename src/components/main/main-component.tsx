import { useEffect, useState } from "react";
import AlbumCover from "@/components/elements/album-cover/album-cover";

import LinkButton from "@/components/elements/button/link-button";
import Pagination from "@/components/pagination/pagination";
import PostList from "@/components/post-list/post-list";

export default function MainComponent() {
  const [width, setWidth] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setWidth(40);
    setTimeout(() => {
      setOpacity(1);
    }, 300);
  }, []);

  return (
    <div className="flex flex-row h-full">
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
            <h1 className="text-2xl font-bold">사이트</h1>
            <h3 className="text-lg font-bold">사이트에 대한 소개소개</h3>
          </div>

          <PostList />

          <footer className="pt-4 h-24">
            <div className="flex items-center justify-between">
              <Pagination />
              <LinkButton href={"/write"}>글 쓰기</LinkButton>
            </div>
          </footer>
        </div>
      </div>

      <AlbumCover borderRadiusStyle={"rounded-lg"} />
    </div>
  );
}
