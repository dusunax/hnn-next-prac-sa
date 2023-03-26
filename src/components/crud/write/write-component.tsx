import useWriteForm from "@/hooks/form/use-write-form";

import Spiner from "@/components/elements/spiner/spiner";

import Input from "@/components/elements/form/input";
import DraftSave from "@/components/crud/write/draft-save";

import { FaYoutube } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import Button from "@/components/elements/button/button";

// 컴포넌트 출력
export default function WriteComponent() {
  const { loading, register, handleSubmit, draftProps } = useWriteForm();
  const {
    postTitle,
    setPostTitle,
    postDescription,
    setPostDescription,
    uri,
    setUri,
  } = register;

  return (
    <>
      <div className="mb-6 text-center">
        <h1 className="mb-4 font-bold">글 쓰기</h1>
        <p className="text-sm">
          올릴 영상의 <strong className="font-lato text-2lg">Youtube</strong>{" "}
          링크를 입력해주세요.
          <br />
          https://www.youtube.com/watch?v=비디오ID
        </p>
        <a
          href="https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ"
          target="_blank"
        >
          <FaYoutube
            className="h-8 w-8 mx-auto my-2"
            width={20}
            height={20}
            color={"red"}
          />
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm px-4 flex flex-col gap-3 pb-20 relative"
      >
        <div className="flex justify-between items-center">
          <div>
            <DraftSave {...draftProps} />
          </div>
          <Button
            size="xs"
            isActive={true}
            className="flex items-center gap-1 text-xxs font-lato"
            onClick={draftProps.clearPost}
          >
            지우기
            <RiDeleteBinFill
              className="h-4 w-4 ml-auto cursor-pointer"
              width={20}
              height={20}
              color={"#fff"}
            />
          </Button>
        </div>
        <Input name="album" title="유튜브 주소" value={uri} setState={setUri} />
        <Input
          name="title"
          title="내가 붙이는 제목"
          value={postTitle}
          setState={setPostTitle}
        />
        <Input
          name="description"
          title="한 줄 감상평"
          value={postDescription}
          setState={setPostDescription}
        />
        <Button
          className="mt-16"
          isDisabled={!Boolean(postTitle && postDescription && uri)}
          isActive={true}
          size={"wide"}
        >
          작성하기
        </Button>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          {loading && <Spiner />}
        </div>
      </form>
    </>
  );
}
