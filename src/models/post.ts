export interface Comment {
  id: number;
  text: string;
  username: string;
  avatar: string;
}

export interface Post {
  id: number;
  src: string;
  mbti: string;
  username: string;
  avatar: string;
  album: string;
  title: string;
  created_at: string;
  likes_num: number;
  comments: Comment[];
}
