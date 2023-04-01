import { useRouter } from "next/router";

import CardLayout from "@/layouts/card-layout";

/** pathname의 '@nickname' 값으로 유저를 찾습니다.  */
export default function ProfilePage() {
  const router = useRouter();
  const { nickname } = router.query;
  if (nickname?.indexOf("@") !== 0) return <>유저를 찾을 수 없습니다.</>;

  return <CardLayout>유저명 : {nickname}</CardLayout>;
}
