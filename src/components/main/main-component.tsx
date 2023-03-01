import LinkButton from "../elements/button/link-button";
import Pagination from "../pagination/pagination";
import PostList from "../post-list/post-list";

export default function MainComponent() {
  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="px-8 py-10 flex-1 rounded-lg flex flex-col drop-shadow-xl scroll-p-2 overflow-y-scroll scrollbar-hide overflow-x-hidden bg-light-gray">
        <div className="mb-2">
          <h1 className="text-2xl font-bold">제목</h1>
          <h3 className="text-lg font-bold">내용</h3>
        </div>

        <PostList />

        <div className="mt-10 flex items-center justify-between">
          <Pagination />

          <LinkButton href={"/write"}>글 쓰기</LinkButton>
          <LinkButton href={"/api-test"}>api 테스트</LinkButton>
        </div>
      </div>
    </div>
  );
}
