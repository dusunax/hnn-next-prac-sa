import PostDetail from "@/components/post-detail/post-detail";
import useCRUDPost from "@/hooks/crud/use-crud-post";
import CardLayout from "@/layouts/card-layout";

import { PostData } from "@/models/post-and-comment";
import { useEffectOnce } from "react-use";
// import { fetchAllPostsService } from "@/services/post";

/**
 * 각 "post"를 컴포넌트에 props로 전달
 *
 * 유저 페이지의 static props,
 * 함수에서 데이터 패칭하므로 useSWR와 같은 훅은 사용할 수 없음
 */
// export async function getStaticProps({
//   params,
// }: {
//   params: { postname: string };
// }) {
//   const posts = await fetchAllPostsService();
//   if (!Array.isArray(posts)) return;

//   const post = posts.find((post) => post.postPostTitle === params.postname);
//   if (!post || post === undefined) return { notFound: true }; // post가 없다면 404 페이지로 이동

//   return {
//     props: {
//       post,
//     },
//   };
// }

/** 유저 페이지 static paths */
// export async function getStaticPaths() {
//   const posts = await fetchAllPostsService();
//   if (!Array.isArray(posts)) return;

//   const paths = posts.map((post) => ({
//     params: {
//       nickname: post.userNickname,
//       postname: post.postPostTitle, // 프리 랜더링할 페이지(uri)
//     },
//   }));

//   // 유저가 없다면 blocking 후, 새 페이지를 만듭니다.
//   return { paths, fallback: "blocking" };
// }

/** pathname의 '@postname' 값으로 포스트를 찾습니다.  */
export default function PostPage() {
  const { post, fetchPostFn } = useCRUDPost();

  useEffectOnce(() => {
    fetchPostFn(10);
  });

  return (
    <CardLayout>
      {post && "postId" in post && <PostDetail post={post} />}
    </CardLayout>
  );
}
