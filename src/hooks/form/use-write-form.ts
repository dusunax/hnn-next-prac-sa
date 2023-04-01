import { useState, Dispatch, SetStateAction } from "react";

import useCRUDPost from "@/hooks/crud/use-crud-post";
import { FormReturnType } from "@/models/form";
import useDraft from "@/hooks/crud/use-draft";

interface Register {
  postTitle: string;
  setPostTitle: Dispatch<SetStateAction<string>>;
  postDescription: string;
  setPostDescription: Dispatch<SetStateAction<string>>;
  uri: string;
  setUri: Dispatch<SetStateAction<string>>;
}

export type DraftProps = Omit<Register, "file" | "setFile"> & {
  clearPost: () => void;
};

interface UseWriteFormReturnType extends FormReturnType {
  register: Register;
  draftProps: DraftProps;
}

// form 기능
export default function useWriteForm(): UseWriteFormReturnType {
  const { loading, createPostFn } = useCRUDPost();
  const { getDraftData } = useDraft();

  const [draft, setDraft] = useState(getDraftData());

  const [postTitle, setPostTitle] = useState(draft?.postTitle || "");
  const [postDescription, setPostDescription] = useState(
    draft?.postDescription || ""
  );
  const [uri, setUri] = useState(draft?.uri || "");
  const [file, setFile] = useState<File | null>(null);

  /** submit 시, createPostFn + file전송 */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.type !== "submit") return;

    // 요청 x2
    createPostFn({
      postTitle,
      postDescription,
      uri,
    });
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
    postTitle,
    setPostTitle,
    postDescription,
    setPostDescription,
    uri,
    setUri,
  };

  const register: Register = {
    postTitle,
    setPostTitle,
    postDescription,
    setPostDescription,
    uri,
    setUri,
  };

  return {
    register,
    handleSubmit,
    draftProps,
    loading,
  };
}
