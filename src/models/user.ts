export interface UserData {
  id: number;
  username: string;
  posts: {
    id: number;
    title: string;
  }[];
}

// 유저 : 전역으로 사용할 recoil state
export interface UserState {
  id: number | null;
  iat: number | null;
  mbti: string;
  nickname: string;
  token: string;
  MBTI: string;
  gender: string;
  profilePicture: string;
}
