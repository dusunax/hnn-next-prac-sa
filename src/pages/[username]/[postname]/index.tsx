/** pathname의 '@postname' 값으로 포스트를 찾습니다.  */
export default function PostPage() {
  const post = { title: "hi" };

  return (
    <>
      <div>포스트 : {post.title}</div>
    </>
  );
}
