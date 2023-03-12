// --------------------
// 2. 게시글 임시저장
// --------------------

import Cookies from "js-cookie";

import { writeRequestType } from "@/services/post";

interface UseDraftReturnType {
  // 임시저장
  getDraftData: () => writeRequestType | null;
  setDraftData: (data: writeRequestType) => void;
  clearDraftData: () => void;
}

export default function useDraft() {
  // 임시 저장된 게시글 데이터 가져오기
  const getDraftData: UseDraftReturnType["getDraftData"] = () => {
    const tempData = Cookies.get("draft");
    return tempData ? JSON.parse(tempData) : null;
  };

  // 임시 저장된 게시글 데이터 저장하기
  const setDraftData: UseDraftReturnType["setDraftData"] = (data) => {
    Cookies.set("draft", JSON.stringify(data));
  };

  // 임시 저장된 게시글 데이터 삭제하기
  const clearDraftData: UseDraftReturnType["clearDraftData"] = () => {
    Cookies.remove("draft");
  };

  return {
    getDraftData,
    setDraftData,
    clearDraftData,
  };
}
