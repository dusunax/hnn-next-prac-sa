import useCRUD from "@/hooks/useCRUD";
import { Dispatch, SetStateAction } from "react";

interface Draft {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  album: string;
  setAlbum: Dispatch<SetStateAction<string>>;
  clearPost: () => void;
}

export default function Draft({
  title,
  setTitle,
  description,
  setDescription,
  album,
  setAlbum,
  clearPost,
}: Draft) {
  const { getDraftData, setDraftData, clearDraftData } = useCRUD();

  const saveDraftHandler = () => {
    console.log("임시저장: " + title, description, album);
    setDraftData({ title, description, album });
  };

  const getDraftHandler = () => {
    const draft = getDraftData();
    if (!draft) return <></>;

    setTitle(draft.title);
    setDescription(draft.description);
    setAlbum(draft.album);
  };

  const clearDraftHandler = () => {
    clearDraftData();
    clearPost();
  };
  return (
    <>
      <button onClick={saveDraftHandler}>임시저장</button>
      <button onClick={getDraftHandler}>임시저장 불러오기</button>
      <button onClick={clearDraftHandler}>임시저장 삭제</button>
    </>
  );
}
