import { useState } from "react";

import SelectOptionalUserData from "../auth/select-optional-user-data/select-optional-user-data";
import FileInputWithPreview from "../elements/form/file-image/file-image-component";

import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "@/store/user";
import { updateUserAvatarService } from "@/services/user";

export default function ProfileEdit() {
  const [file, setFile] = useState<File | null>(null);
  const [user, setUser] = useRecoilState(userState);

  const userAvatarUpdate = (newFile: File) => {
    try {
      if (newFile) {
        const formData = new FormData();
        formData.append("avatar", newFile);

        updateUserAvatarService(formData);
      }
    } catch (err) {
      console.log(err);
      alert("이미지를 업로드할 수 없습니다.");
    }
  };

  return (
    <>
      <div className="mb-6 text-center">
        <h1 className="mb-4 font-bold">프로필 수정</h1>
        <p className="text-sm">MBTI가 바뀌셨나요?</p>
      </div>

      <FileInputWithPreview
        file={file}
        setFile={setFile}
        width="w-20"
        height="h-20"
        rounded="rounded-full"
        hasButton={false}
        defaultImage={user.profilePicture}
        imageOnChange={userAvatarUpdate}
      />
      <SelectOptionalUserData />
    </>
  );
}
