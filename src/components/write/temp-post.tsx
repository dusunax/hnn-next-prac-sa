import useCRUD from "@/hooks/useCRUD";
import { Dispatch, SetStateAction } from "react";

export default function TempPost({
  title,
  setTitle,
  description,
  setDescription,
  album,
  setAlbum,
  clearPost,
}: {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  album: string;
  setAlbum: Dispatch<SetStateAction<string>>;
  clearPost: () => void;
}) {
  const { getTempPostData, setTempPostData, clearTempPostData } = useCRUD();

  const saveTempPostHandler = () => {
    console.log("임시저장: " + title, description, album);
    setTempPostData({ title, description, album });
  };

  const getTempPostHandler = () => {
    const tempPost = getTempPostData();
    if (!tempPost) return;

    setTitle(tempPost.title);
    setDescription(tempPost.description);
    setAlbum(tempPost.album);
  };

  const clearTempPostHandler = () => {
    clearTempPostData();
    clearPost();
  };
  return (
    <>
      <button onClick={saveTempPostHandler}>임시저장</button>
      <button onClick={getTempPostHandler}>임시저장 불러오기</button>
      <button onClick={clearTempPostHandler}>임시저장 삭제</button>
    </>
  );
}
