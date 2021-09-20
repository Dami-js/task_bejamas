import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useProductContext from "contexts/ProductContext";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Pagination = styled(({ className = "" }) => {
  const { queries, setQueries, totalCount, data, isLoading } =
    useProductContext();
  const [totalPagesCount, setTotalPagesCount] = useState(0);
  const [totalPages, setTotalPages] = useState<number[]>([]);
  const { _page, _limit } = queries;
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);

  const generatePagesArray = (size: number) => {
    const arr: number[] = [];
    for (let i = 0; i < size; i++) {
      arr.push(i + 1);
    }
    return arr;
  };

  const resetRange = () => {
    setStart(0);
    setEnd(4);
  };

  const handlePagination = (page: number) => {
    setQueries({ ...queries, _page: page });
  };

  const handleNextPage = (page: number) => {
    handlePagination(page);
    setStart(end <= totalPagesCount ? start : start + 1);
    setEnd(end <= totalPagesCount ? end : end + 1);
  };

  const handlePrevPage = (page: number) => {
    handlePagination(page);
    setStart(end <= totalPagesCount ? start : start - 1);
    setEnd(end <= totalPagesCount ? end : end - 1);
  };

  useEffect(() => {
    resetRange();
  }, [totalCount]);

  useEffect(() => {
    const totalPg = Math.ceil(totalCount / _limit);
    setTotalPagesCount(totalPg);
    setTotalPages(generatePagesArray(totalPg));
  }, [_limit, totalCount]);

  return (
    <div className={`flex items-center ${className}`}>
      {!isLoading && data && data?.data.length > 0 && (
        <button
          disabled={_page === 1}
          className="disabled:text-gray-400"
          onClick={() => handlePrevPage(_page - 1)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}

      {totalPages.length > 0 &&
        totalPages.slice(start, end).map((item, index) => (
          <button
            className={` ${_page === item ? "text-gray-900" : "text-gray-400"}`}
            onClick={() => handlePagination(item)}
            key={index}
          >
            {item}
          </button>
        ))}

      {!isLoading && data && data?.data.length > 0 && (
        <button
          disabled={_page === totalPagesCount}
          className="disabled:text-gray-400"
          onClick={() => handleNextPage(_page + 1)}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
    </div>
  );
})`
  button {
    padding: 0.4rem;
    &:active {
      opacity: 0.6;
    }
  }
`;

export default Pagination;
