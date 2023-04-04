import { atom } from "recoil";

export const youTubeVideoIdArrayState = atom<string[]>({
  key: "youTubeVideoIdArrayState",
  default: [],
});
