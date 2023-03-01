export interface User {
  id: number;
  username: string;
  posts: {
    id: number;
    title: string;
  }[];
}
