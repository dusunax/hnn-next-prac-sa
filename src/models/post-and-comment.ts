export interface CommentData {
  id: number;
  text: string;
  nickname: string;
  avatar: string;
}

export interface PostData {
  id: number;
  src: string;
  mbti: string;
  nickname: string;
  avatar: string;
  album: string;
  title: string;
  description: string;
  created_at: string;
  likes_num: number;
  comments: CommentData[];
}
