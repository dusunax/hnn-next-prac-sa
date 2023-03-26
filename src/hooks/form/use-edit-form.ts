import { useState, Dispatch, SetStateAction } from "react";

import useCRUDPost from "@/hooks/crud/use-crud-post";
import { FormReturnType } from "@/models/form";
import useDraft from "../crud/use-draft";

// 이거 타입 참고
export const prevPostDummy = {
  id: 999,
  src: "주소",
  mbti: "MBTI",
  nickname: "유저명",
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
  postTitle: string;
  setPostTitle: Dispatch<SetStateAction<string>>;
  postDescription: string;
  setPostDescription: Dispatch<SetStateAction<string>>;
  uri: string;
  setUri: Dispatch<SetStateAction<string>>;
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
  const { loading, updatePostFn } = useCRUDPost();
  const { getDraftData } = useDraft();

  const [draft, setDraft] = useState(getDraftData());

  const [id, setId] = useState(-1);
  const [postTitle, setPostTitle] = useState(draft?.postTitle || "");
  const [postDescription, setPostDescription] = useState(
    draft?.postDescription || ""
  );
  const [uri, setUri] = useState(draft?.uri || "");
  const [file, setFile] = useState<File | null>(null);

  /** submit 시, updatePost + file전송 */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.type !== "submit") return;

    // 요청 x2
    updatePostFn(id, {});
    console.log(file);

    // redirect to 해당 게시물
  };

  const clearPost = () => {
    setPostTitle("");
    setPostDescription("");
    setUri("");
    setFile(null);
  };

  const draftProps: DraftProps = {
    clearPost,
    postTitle: postTitle,
    setPostTitle: setPostTitle,
    postDescription: postDescription,
    setPostDescription: setPostDescription,
    uri: uri,
    setUri: setUri,
  };

  const register: Register = {
    file,
    setFile,
    postTitle,
    setPostTitle,
    postDescription,
    setPostDescription,
    uri,
    setUri,
  };

  return { loading, register, handleSubmit, draftProps };
}
