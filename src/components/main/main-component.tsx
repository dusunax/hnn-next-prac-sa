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
    <div className="flex flex-col md:flex-row h-full">
      <div
        className="px-8 py-10 w-0 rounded-lg flex flex-col drop-shadow-xl scroll-p-2 overflow-y-scroll scrollbar-hide overflow-x-hidden bg-light-gray transition-all"
        style={{
          transition: "width 0.5s ease-in-out",
          width: `${width}%`,
        }}
      >
        <div
          className="opacity-0"
          style={{
            transition: "opacity 0.3s ease-in-out",
            opacity: opacity,
          }}
        >
          <div className="mb-2">
            <h1 className="text-2xl font-bold">제목</h1>
            <h3 className="text-lg font-bold">내용</h3>
          </div>

          <PostList />

          <div className="mt-10 flex items-center justify-between">
            <Pagination />

            <LinkButton href={"/write"}>글 쓰기</LinkButton>
          </div>
        </div>
      </div>

      <AlbumCover borderRadiusStyle={"rounded-lg"} />
    </div>
  );
}
