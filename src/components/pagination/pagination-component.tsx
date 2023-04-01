import { Dispatch } from "react";

import {
  MdKeyboardArrowRight as IconNext,
  MdKeyboardArrowLeft as IconPrev,
  MdKeyboardDoubleArrowRight as IconNextBlock,
  MdKeyboardDoubleArrowLeft as IconPrevBlock,
} from "react-icons/md";

import PaginationList from "./pagination-list";
import { PostData } from "@/models/post-and-comment";
import { ErrorType } from "@/models/api";

export interface PaginationComponentProps {
  fetchAllPostsByQueryStringFn: (
    queryString: string
  ) => Promise<ErrorType | PostData[]>;
  LIMIT: number;
  MAX_PAGE_NUMBER: number;
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
}

export default function PaginationComponent({
  page,
  setPage,
  MAX_PAGE_NUMBER,
  LIMIT,
  fetchAllPostsByQueryStringFn,
}: PaginationComponentProps) {
  const block = Math.floor((page - 1) / MAX_PAGE_NUMBER) * MAX_PAGE_NUMBER; // 각 10의 단위

  const isFirstPage = page === 1;
  const isFirstBlock = block === 0;
  const isLastPage = page === MAX_PAGE_NUMBER;
  const isLastBlock =
    Math.floor(MAX_PAGE_NUMBER / MAX_PAGE_NUMBER) * MAX_PAGE_NUMBER === block;

  const handlePrevBlock = () => {
    if (!isFirstBlock) {
      const newPage = block - MAX_PAGE_NUMBER + 1;

      setPage(block - MAX_PAGE_NUMBER + 1);
      fetchAllPostsByQueryStringFn(`?limit=${LIMIT}&page=${newPage}&sort=DESC`);
    }
  };

  const handlePrevPage = () => {
    if (!isFirstPage) {
      const newPage = page - 1;

      setPage(newPage);
      fetchAllPostsByQueryStringFn(`?limit=${LIMIT}&page=${newPage}&sort=DESC`);
    }
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      const newPage = page + 1;

      setPage(newPage);
      fetchAllPostsByQueryStringFn(`?limit=${LIMIT}&page=${newPage}&sort=DESC`);
    }
  };

  const handleNextBlock = () => {
    if (!isLastBlock) {
      const newPage = block + MAX_PAGE_NUMBER + 1;

      setPage(block + MAX_PAGE_NUMBER + 1);
      fetchAllPostsByQueryStringFn(`?limit=${LIMIT}&page=${newPage}&sort=DESC`);
    }
  };

  const handlePageClick = (page: number) => {
    setPage(page);
    fetchAllPostsByQueryStringFn(`?limit=${LIMIT}&page=${page}&sort=DESC`);
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
        MAX_PAGE_NUMBER={MAX_PAGE_NUMBER}
        page={page}
        setPage={setPage}
        handlePageClick={handlePageClick}
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
