export interface CommentData {
  id: number;
  text: string;
  username: string;
  avatar: string;
}

export interface PostData {
  id: number;
  src: string;
  mbti: string;
  username: string;
  avatar: string;
  album: string;
  title: string;
  created_at: string;
  likes_num: number;
  comments: CommentData[];
}
