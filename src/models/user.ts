export interface UserData {
  id: number;
  username: string;
  posts: {
    id: number;
    title: string;
  }[];
}

export interface AuthData {
  email: string;
  password: string;
}
