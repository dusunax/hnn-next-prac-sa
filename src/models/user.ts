export interface UserData {
  id: number;
  nickname: string;
  posts: {
    id: number;
    title: string;
  }[];
}

// 유저 : 전역으로 사용할 recoil state
export interface UserStateType {
  id: number | null;
  MBTI: string;
  nickname: string;
  token: string;
  gender: string;
  profilePicture: string;
  isLogin: boolean;
}
