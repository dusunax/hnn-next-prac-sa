import { useState } from "react";
import { useAsync } from "react-use";
import { useRouter } from "next/router";

import { GiSwordman, GiSwordwoman } from "react-icons/gi";

import {
  randomNicknameService,
  updateUserProfileService,
} from "@/services/user";

import SelectMBTI from "./select-mbti";
import SelectGender from "./select-gender";
import Button from "@/components/elements/button/button";

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
      <section className="mbti text-center mb-2">
        <SelectMBTI mbti={mbti} setMbti={setMBTI} />

        <div className="random-name">
          <div className="h-4 text-xs">
            {nickname.loading && "요청 중..."}
            {nickname.error && "불러오기 실패"}
          </div>

          <Button
            isDisabled={mbti.join("").length !== 4}
            className="cursor-pointer"
            onClick={() => setNameFetch(!nameFetch)}
          >
            당신의 닉네임은?
          </Button>

          <h1
            className={`${
              nickname.value ? "" : "shadow-center"
            } h-20 flex items-center justify-center text-4xl`}
          >
            {nickname.value}{" "}
          </h1>
        </div>
      </section>

      <section className="gender w-full flex flex-col gap-3 items-center mb-10">
        <SelectGender gender={gender} setGender={setGender} />
        <h1 className="h-20 flex items-center justify-center text-5xl">
          {gender === "" && <GiSwordman fill="#ccc" />}
          {gender === "man" && <GiSwordman />}
          {gender === "women" && <GiSwordwoman />}
        </h1>
      </section>

      <div className="w-2/3">
        <Button
          isDisabled={nickname.value === undefined}
          className="cursor-pointer"
          onClick={updateHandler}
          size="wide"
        >
          저장하기
        </Button>
      </div>
    </>
  );
}
