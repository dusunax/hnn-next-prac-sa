import { UserState } from "@/models/user";
import { atom } from "recoil";

export const userState = atom<UserState>({
  key: "userState",
  default: {
    id: null,
    iat: null,
    mbti: "",
    token: "",
    nickname: "",
    MBTI: "",
    gender: "",
    profilePicture: "",
  },
});
