import { useState } from "react";
import useCRUD from "@/hooks/useCRUD";

import Spiner from "@/components/elements/spiner/spiner";

import Input from "../elements/form/input";
import FileInputWithPreview from "../elements/form/file-input/file-input-component";
import TempPost from "./temp-post";

export default function WriteComponent() {
  const { isLoading, createPost, getTempPostData } = useCRUD();
  const [tempPost, setTempPost] = useState(getTempPostData());

  const [title, setTitle] = useState(tempPost?.title || "");
  const [description, setDescription] = useState(tempPost?.description || "");
  const [album, setAlbum] = useState(tempPost?.album || "");
  const [file, setFile] = useState<File | null>(null);

  /** submit 시, createPost + file전송 */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.type !== "submit") return;

    createPost({ title, description, album });
    console.log(file);
  };

  const clearPost = () => {
    setTitle("");
    setDescription("");
    setAlbum("");
    setFile(null);
  };

  const tempPostProps = {
    title,
    description,
    album,
    clearPost,
    setTitle,
    setDescription,
    setAlbum,
  };

  return (
    <div className="w-3/4 h-3/4 absolute-center">
      <form>
        <FileInputWithPreview file={file} setFile={setFile} />
      </form>
      <form onSubmit={handleSubmit}>
        <h1>글 쓰기</h1>
        <div onClick={clearPost}>지우기</div>
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
        <TempPost {...tempPostProps} />
      </form>
    </div>
  );
}
