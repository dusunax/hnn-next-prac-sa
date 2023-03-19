import React from "react";
import LinkButton from "@/components/elements/button/link-button";
import CardLayoutCenter from "@/layouts/card-layout-center";

const Custom404 = () => {
  return (
    <CardLayoutCenter>
      <h1>404 - Page Not Found</h1>
      <h3 className="mb-4">페이지를 찾을 수 없습니다.</h3>
      <LinkButton href="/">메인으로 이동하기</LinkButton>
    </CardLayoutCenter>
  );
};

export default Custom404;
