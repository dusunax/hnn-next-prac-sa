import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import useAuth from "@/hooks/use-auth";

import { useRecoilValue } from "recoil";
import { userState } from "@/store/user";

import CardLayoutCenter from "@/layouts/card-layout-center";
import SelectOptionalUserData from "./select-optional-user-data/select-optional-user-data";
import FileInputWithPreview from "../elements/form/file-image/file-image-component";

export default function AuthCallback() {
  const user = useRecoilValue(userState);
  const router = useRouter();
  const {} = useAuth();

  const [file, setFile] = useState<File | null>(null);

  // 이미 MBTI가 선택되었다면 메인으로 이동합니다.
  useEffect(() => {
    // hasUserMBTI : recoil 기본값 = "", api "/user" 리턴값 = "미정"
    const hasUserMBTI = user.MBTI !== "" && user.MBTI !== "미정";
    if (hasUserMBTI) router.push("/");
  }, [user, router]);

  return (
    <CardLayoutCenter>
      <div className="mb-6 text-center">
        <h1 className="mb-4 font-bold">
          <strong className="font-lato text-2lg">MBTI</strong> 입력하기
        </h1>
        <p className="text-sm">
          서비스를 사용하기 위해
          <br />
          당신의 <strong className="font-lato text-2lg"> MBTI</strong> 를
          입력해주세요.
        </p>
      </div>

      <FileInputWithPreview
        file={file}
        setFile={setFile}
        width="w-20"
        height="h-20"
        rounded="rounded-full"
        hasButton={true}
        imageOnChange={() => {}}
      />
      <SelectOptionalUserData />
    </CardLayoutCenter>
  );
}
