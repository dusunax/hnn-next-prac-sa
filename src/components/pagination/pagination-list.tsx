import { Pagination } from "./pagination-component";

const RenderPages = ({ limit, page, setPage, totalPages }: Pagination) => {
  const block = Math.floor((page - 1) / limit) * limit; // 각 limit의 단위

  return (
    <>
      {Array(limit)
        .fill("")
        .map((x, idx) => {
          const index = block + idx + 1;

          if (index > totalPages) return null;

          const handleClick = () => setPage(index);

          return (
            <li
              key={index}
              role="button"
              className={
                "select-none text-xs " +
                (page === index ? "active text-blue-500" : " text-blue-200")
              }
              onClick={handleClick}
            >
              ●
            </li>
          );
        })}
    </>
  );
};

export default function PaginationList({
  limit,
  page,
  setPage,
  totalPages,
}: Pagination) {
  return (
    <RenderPages
      limit={limit}
      page={page}
      setPage={setPage}
      totalPages={totalPages}
    />
  );
}
