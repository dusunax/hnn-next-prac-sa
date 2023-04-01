import { useState } from "react";

import SelectOptionalUserData from "../auth/select-optional-user-data/select-optional-user-data";
import FileInputWithPreview from "../elements/form/file-image/file-image-component";

import { useRecoilState } from "recoil";
import { userState } from "@/store/user";

import useUser from "@/hooks/use-user";

export default function ProfileEdit() {
  const [file, setFile] = useState<File | null>(null);
  const [user, setUser] = useRecoilState(userState);

  const { userAvatarUpdate } = useUser();

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
        defaultImage={user.userProfileImage}
        imageOnChange={userAvatarUpdate}
      />
      <SelectOptionalUserData />
    </>
  );
}
