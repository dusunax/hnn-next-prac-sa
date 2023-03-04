import { useRouter } from "next/router";

import { UserData } from "@/models/user";

import CardLayout from "@/layouts/card-layout";

import * as dummyUsers from "@/dummy.json";

const getUsers = async () => {
  const users: UserData[] = dummyUsers.users;
  return await users;
};

/**
 * 각 "user"를 컴포넌트에 props로 전달
 *
 * 유저 페이지의 static props,
 * 함수에서 데이터 패칭하므로 useSWR와 같은 훅은 사용할 수 없음
 */
export async function getStaticProps({
  params,
}: {
  params: { username: string };
}) {
  const users = await getUsers();
  const user = users.find((user) => "@" + user.username === params.username);

  if (!user || user === undefined) return { notFound: true }; // user가 없다면 404 페이지로 이동

  return {
    props: {
      user,
    },
  };
}

/** 유저 페이지 static paths */
export async function getStaticPaths() {
  const users = await getUsers();

  const paths = users.map((user) => ({
    params: {
      username: user.username,
    },
  }));

  // 유저가 없다면 blocking 후, 새 페이지를 만듭니다.
  return { paths, fallback: "blocking" };
}

/** pathname의 '@username' 값으로 유저를 찾습니다.  */
export default function ProfilePage({ user }: { user: UserData }) {
  const router = useRouter();
  const { username } = router.query;
  if (username?.indexOf("@") !== 0) return <>유저를 찾을 수 없습니다.</>;

  if (!user) return <>props 잘못됨</>;

  return <CardLayout>유저명 : {user.username}</CardLayout>;
}
