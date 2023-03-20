import { useState } from "react";
import { useAsync } from "react-use";
import { useRouter } from "next/router";

import {
  randomNicknameService,
  updateUserProfileService,
} from "@/services/user";

import SelectMBTI from "./select-mbti";
import SelectGender from "./select-gender";
import Button from "@/components/elements/button/button";
import LinkButton from "@/components/elements/button/link-button";

export default function SelectOptionalUserData() {
  const router = useRouter();

  const [mbti, setMBTI] = useState(["", "", "", ""]);
  const [gender, setGender] = useState("");
  // 랜덤 닉네임
  const [nameFetch, setNameFetch] = useState(false);

  const nickname = useAsync(async () => {
    if (mbti.join("").length !== 4) return;

    const newnickname = await randomNicknameService(mbti.join(""));
    if ("nickname" in newnickname && "success" in newnickname) {
      const { nickname, success } = newnickname;

      return success ? nickname : "";
    }
  }, [nameFetch]);

  const updateHandler = async () => {
    if (nickname.value && mbti.join("").length === 4) {
      const updatedProfile = {
        nickname: nickname.value,
        MBTI: mbti.join(""),
        gender,
      };

      const result = await updateUserProfileService(updatedProfile);
      console.log(result);
      if ("success" in result) {
        router.push("/");
      }
    }
  };

  return (
    <>
      <section className="mbti">
        <SelectMBTI mbti={mbti} setMbti={setMBTI} />

        <div className="random-name">
          <div className="h-4 text-xs">
            {nickname.loading && "불러오는 중"}
            {nickname.error && "불러오기 실패"}
          </div>
          <h1>{nickname.value}</h1>
          <Button
            isDisabled={mbti.join("").length !== 4}
            className="cursor-pointer"
            onClick={() => setNameFetch(!nameFetch)}
          >
            다른 이름
          </Button>
        </div>
      </section>

      <section className="gender">
        <SelectGender gender={gender} setGender={setGender} />
      </section>

      <Button
        isDisabled={nickname.value === undefined}
        className="cursor-pointer"
        onClick={updateHandler}
      >
        저장하기
      </Button>
      <LinkButton href="/">메인으로 돌아가기</LinkButton>
    </>
  );
}
