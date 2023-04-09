import { FaMusic } from "react-icons/fa";
import { PaginationComponentProps } from "./pagination-component";

interface PaginationListPropsWithoutFetchAndLimit
  extends Omit<
    PaginationComponentProps,
    "fetchAllPostsByQueryStringFn" | "LIMIT"
  > {
  // 추가적인 프로퍼티를 정의할 수 있습니다.
  handlePageClick: (page: number) => void;
}

const RenderPages = ({
  MAX_PAGE_NUMBER,
  page,
  setPage,
  handlePageClick,
}: PaginationListPropsWithoutFetchAndLimit) => {
  const PaginationCount = new Array(MAX_PAGE_NUMBER).fill("");

  return (
    <>
      {PaginationCount.map((x, idx) => {
        const index = idx + 1;

        if (idx > MAX_PAGE_NUMBER) return null;

        return (
          <li
            key={index}
            role="button"
            className={
              "select-none text-xs " +
              (page === index ? "active text-blue-700" : " text-gray-500")
            }
            onClick={() => handlePageClick(index)}
          >
            <FaMusic />
          </li>
        );
      })}
    </>
  );
};

export default function PaginationList({
  MAX_PAGE_NUMBER,
  page,
  setPage,
  handlePageClick,
}: PaginationListPropsWithoutFetchAndLimit) {
  return (
    <RenderPages
      MAX_PAGE_NUMBER={MAX_PAGE_NUMBER}
      page={page}
      setPage={setPage}
      handlePageClick={handlePageClick}
    />
  );
}
