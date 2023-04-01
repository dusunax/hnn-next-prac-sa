import { UserStateType } from "@/models/user";
import { atom } from "recoil";

export const userState = atom<UserStateType>({
  key: "userState",
  default: {
    userId: null,
    userMBTI: "",
    token: "",
    userNickname: "",
    userGender: "",
    userProfileImage: "",
    isLogin: false,
  },
});
