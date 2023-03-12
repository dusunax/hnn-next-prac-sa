import { useState, Dispatch, SetStateAction } from "react";

import useCRUD from "@/hooks/crud/use-crud-post-and-comment";
import { FormReturnType } from "@/models/form";
import useDraft from "../crud/use-draft";

// 이거 타입 참고
export const prevPostDummy = {
  id: 999,
  src: "주소",
  mbti: "MBTI",
  username: "유저명",
  avatar: "/image.png",
  album: "노래내용",
  title: "게시글 제목",
  description: "게시글 설명",
  created_at: "0000-00-00",
  likes_num: 999,
  comments: [],
};

interface Register {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  album: string;
  setAlbum: Dispatch<SetStateAction<string>>;
}

type DraftProps = Omit<Register, "file" | "setFile"> & {
  clearPost: () => void;
};

interface UseEditFormReturnType extends FormReturnType {
  register: Register;
  draftProps: DraftProps;
}

// form 기능
export default function useEditForm(): UseEditFormReturnType {
  const { isLoading, updatePost } = useCRUD();
  const { getDraftData } = useDraft();

  const [draft, setDraft] = useState(getDraftData());

  const [id, setId] = useState(-1);
  const [title, setTitle] = useState(draft?.title || "");
  const [description, setDescription] = useState(draft?.description || "");
  const [album, setAlbum] = useState(draft?.album || "");
  const [file, setFile] = useState<File | null>(null);

  /** submit 시, updatePost + file전송 */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.type !== "submit") return;

    // 요청 x2
    updatePost(id, { title, description, album });
    console.log(file);

    // redirect to 해당 게시물
  };

  const clearPost = () => {
    setTitle("");
    setDescription("");
    setAlbum("");
    setFile(null);
  };

  const draftProps: DraftProps = {
    clearPost,
    title,
    setTitle,
    description,
    setDescription,
    album,
    setAlbum,
  };

  const register: Register = {
    file,
    setFile,
    title,
    setTitle,
    description,
    setDescription,
    album,
    setAlbum,
  };

  return {
    register,
    isLoading,
    handleSubmit,
    draftProps,
  };
}
