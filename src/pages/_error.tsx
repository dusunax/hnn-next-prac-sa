import { NextPageContext } from "next";
import Image from "next/image";

import CardLayout from "@/layouts/card-layout";
import LinkButton from "@/components/elements/button/link-button";

import imgSrc from "@public/images/warning.png";
import Button from "@/components/elements/button/button";

interface Props {
  statusCode: number;
  message: string;
}

const ErrorPage = ({ statusCode, message }: Props) => {
  return (
    <CardLayout>
      <div className="pt-40 flex flex-col gap-4 items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image src={imgSrc} alt={"에러 아이콘"} width={60} />
        {statusCode === 404 ? (
          <>
            <h1>404 Not Found</h1>
            <p>페이지를 찾을 수 없습니다.</p>
          </>
        ) : (
          <>
            <h1>에러가 발생했습니다.</h1>
            <p>
              {statusCode ? `${statusCode} Error` : "알 수 없는 에러입니다."}
            </p>
            <p>
              <Button>
                <a href="https://github.com/dusunax/hnn-next-prac-sa">
                  Github으로 이동
                </a>
              </Button>
            </p>
          </>
        )}
        <LinkButton href="/">돌아가기</LinkButton>
      </div>
    </CardLayout>
  );
};

ErrorPage.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode || err?.statusCode || 500;
  const message = err?.message || "서버 에러가 발생했습니다.";
  return { statusCode, message };
};

export default ErrorPage;
