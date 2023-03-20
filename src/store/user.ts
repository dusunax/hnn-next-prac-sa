import { UserStateType } from "@/models/user";
import { getToken } from "@/utils/storageToken";
import { atom } from "recoil";

export const userState = atom<UserStateType>({
  key: "userState",
  default: {
    id: null,
    MBTI: "",
    token: "",
    nickname: "",
    gender: "",
    profilePicture: "",
    isLogin: false,
  },
});
