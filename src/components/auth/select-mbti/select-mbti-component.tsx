import { useState } from "react";

import { randomNicknameService } from "@/services/user";
import { useAsync } from "react-use";
import Button from "../../elements/button/button";
import MBTISelect from "./select-mbti";

export default function SelectMBTI() {
  const [MBTILoad, setMBTILoad] = useState(false);
  const [mbti, setMBTI] = useState(["", "", "", ""]);

  const username = useAsync(async () => {
    if (mbti.length !== 4) return;

    const newUsername = await randomNicknameService(mbti.join(""));
    if ("nickname" in newUsername && "success" in newUsername) {
      const { nickname, success } = newUsername;

      return success ? nickname : "";
    }
  }, [MBTILoad]);

  return (
    <>
      <MBTISelect mbti={mbti} setMbti={setMBTI} />

      <div className="h-4 text-xs">
        {username.loading && "불러오는 중"}
        {username.error && "불러오기 실패"}
      </div>
      <h1>{username.value}</h1>
      <Button className="cursor-pointer" onClick={() => setMBTILoad(!MBTILoad)}>
        다른 이름
      </Button>
    </>
  );
}
