import { Dispatch, useState } from "react";

import {
  MdKeyboardArrowRight as IconNext,
  MdKeyboardArrowLeft as IconPrev,
  MdKeyboardDoubleArrowRight as IconNextBlock,
  MdKeyboardDoubleArrowLeft as IconPrevBlock,
} from "react-icons/md";

import PaginationList from "./pagination-list";

export interface Pagination {
  limit: number;
  totalPages: number;
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
}

export default function PaginationComponent() {
  const [page, setPage] = useState(1);
  const limit = 3;
  const block = Math.floor((page - 1) / limit) * limit; // 각 10의 단위
  const totalPages = 13;

  const isFirstPage = page === 1;
  const isFirstBlock = block === 0;
  const isLastPage = page === totalPages;
  const isLastBlock = Math.floor(totalPages / limit) * limit === block;

  const handlePrevBlock = () => {
    if (!isFirstBlock) {
      setPage(block - limit + 1);
    }
  };

  const handlePrevPage = () => {
    if (!isFirstPage) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleNextBlock = () => {
    if (!isLastBlock) {
      setPage(block + limit + 1);
    }
  };

  return (
    <ul className="w-full h-12 flex items-center justify-between">
      <li
        className={`button-navigate block ${
          isFirstBlock ? "disable text-gray-300" : ""
        }`}
        onClick={handlePrevBlock}
      >
        <IconPrevBlock />
      </li>
      <li
        className={`button-navigate ${
          isFirstPage ? "disable text-gray-300" : ""
        }`}
        onClick={handlePrevPage}
      >
        <IconPrev />
      </li>

      <PaginationList
        limit={limit}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />

      <li
        className={`button-navigate ${
          isLastPage ? "disable text-gray-300" : ""
        }`}
        onClick={handleNextPage}
      >
        <IconNext />
      </li>
      <li
        className={`button-navigate block ${
          isLastBlock ? "disable text-gray-300" : ""
        }`}
        onClick={handleNextBlock}
      >
        <IconNextBlock />
      </li>
    </ul>
  );
}
