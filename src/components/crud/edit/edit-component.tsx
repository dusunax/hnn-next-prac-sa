import Spiner from "@/components/elements/spiner/spiner";

import useEditForm from "@/hooks/form/use-edit-form";
import Input from "@/components/elements/form/input";
import FileInputWithPreview from "@/components/elements/form/file-input/file-input-component";
interface EditComponentProps {
  isLoading?: boolean;
}
export default function EditComponent(props: EditComponentProps) {
  const { register, isLoading, handleSubmit, draftProps } = useEditForm();
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
        <div>
          {isLoading && (
            <div
              className="spinner"
              aria-label="로딩 중입니다"
              role="progress-bar"
            >
              <Spiner />
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
