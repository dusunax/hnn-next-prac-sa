import useWriteForm from "@/hooks/form/use-write-form";

import Spiner from "@/components/elements/spiner/spiner";

import Input from "@/components/elements/form/input";
import DraftSave from "@/components/crud/write/draft-save";
import FileInputWithPreview from "@/components/elements/form/file-input/file-input-component";

// 컴포넌트 출력
export default function WriteComponent() {
  const { register, isLoading, handleSubmit, draftProps } = useWriteForm();
  const {
    file,
    setFile,
    title,
    setTitle,
    description,
    setDescription,
    album,
    setAlbum,
  } = register;

  return (
    <div className="w-3/4 h-3/4 absolute-center">
      <FileInputWithPreview file={file} setFile={setFile} />
      <form onSubmit={handleSubmit}>
        <h1>글 쓰기</h1>
        <div onClick={draftProps.clearPost}>지우기</div>
        <Input name="album" title="노래" value={album} setState={setAlbum} />
        <Input
          name="title"
          title="게시글 제목"
          value={title}
          setState={setTitle}
        />
        <Input
          name="description"
          title="감상평"
          value={description}
          setState={setDescription}
        />
        <button>submit 클릭!</button>
        <div>{isLoading && <Spiner />}</div>
        <DraftSave {...draftProps} />
      </form>
    </div>
  );
}
