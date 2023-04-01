export interface CommentData {
  id: number;
  text: string;
  nickname: string;
  avatar: string;
}

export interface PostData {
  postId: number;
  postYoutubeUri: string;
  postYoutubeTitle: string;
  postYoutubeDescription: string;
  postPublishedAt: string;
  postYoutubeVideoThumbnail: string;
  postYoutubeVideoId: string;
  countPostView: number;
  postPostTitle: string;
  userId: number;
  userProfileImage: string;
  userNickname: string;
  userMBTI: string;
  userGender: string;
  countComment: string;
  countLike: string;
  isPostLike: string;
}
