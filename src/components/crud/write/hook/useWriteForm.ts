import { useState, Dispatch, SetStateAction } from "react";

import useCRUD from "@/hooks/useCRUD";
import { FormReturnType } from "@/models/form";

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

interface UseWriteFormReturnType extends FormReturnType {
  register: Register;
  draftProps: DraftProps;
}

// form 기능
export default function useWriteForm(): UseWriteFormReturnType {
  const { isLoading, createPost, getDraftData } = useCRUD();
  const [draft, setDraft] = useState(getDraftData());

  const [title, setTitle] = useState(draft?.title || "");
  const [description, setDescription] = useState(draft?.description || "");
  const [album, setAlbum] = useState(draft?.album || "");
  const [file, setFile] = useState<File | null>(null);

  /** submit 시, createPost + file전송 */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.type !== "submit") return;

    // 요청 x2
    createPost({ title, description, album });
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
