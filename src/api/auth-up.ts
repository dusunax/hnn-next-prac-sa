// next api (nodeJS와 비슷함)
// 서버사이드의 타입 및 코드 예시입니다.
// 서버사이드에서 작동해야할 요청에 사용

import { NextApiRequest, NextApiResponse } from "next";
import { CLIENT } from "../services";

export default async function signUpAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const response = await CLIENT.post("/auth/signup", { email, password });
    const data = response.data;

    res.status(200).json({ success: true, message: "가입 완료", data: data });
  } else {
    res.status(405).json({ success: false, message: "가입 실패", data: "" });
  }
}
