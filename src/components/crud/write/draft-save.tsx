import { Dispatch, SetStateAction } from "react";
import useDraft from "@/hooks/crud/use-draft";

import { HiDocumentArrowDown, HiDocumentArrowUp } from "react-icons/hi2";
import { TiDocumentDelete } from "react-icons/ti";
import { DraftProps } from "@/hooks/form/use-write-form";

export default function Draft({
  postTitle,
  setPostTitle,
  postDescription,
  setPostDescription,
  uri,
  setUri,
  clearPost,
}: DraftProps) {
  const { getDraftData, setDraftData, clearDraftData } = useDraft();

  const saveDraftHandler = () => {
    setDraftData({ postTitle, postDescription, uri });
  };

  const getDraftHandler = () => {
    const draft = getDraftData();
    if (!draft) return <></>;

    setPostTitle(draft.postTitle);
    setPostDescription(draft.postDescription);
    setUri(draft.uri);
  };

  const clearDraftHandler = () => {
    clearDraftData();
    clearPost();
  };

  return (
    <>
      <div className="inline-block" onClick={saveDraftHandler}>
        <HiDocumentArrowDown
          className="h-6 w-6 cursor-pointer"
          width={20}
          height={20}
          color={"gray"}
        />
      </div>
      <div className="inline-block" onClick={getDraftHandler}>
        <HiDocumentArrowUp
          className="h-6 w-6 cursor-pointer"
          width={20}
          height={20}
          color={"gray"}
        />
      </div>
      <div className="inline-block" onClick={clearDraftHandler}>
        <TiDocumentDelete
          className="h-6 w-6 cursor-pointer"
          width={20}
          height={20}
          color={"gray"}
        />
      </div>
      {/* )} */}
    </>
  );
}
