export interface UserData {
  userId: number;
  userNickname: string;
  posts: {
    id: number;
    title: string;
  }[];
}

// 유저 : 전역으로 사용할 recoil state
export interface UserStateType {
  userId: number | null;
  userMBTI: string;
  userNickname: string;
  userGender: string;
  userProfileImage: string;
  isLogin: boolean;
  token: string;
}
