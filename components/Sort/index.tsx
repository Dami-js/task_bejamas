import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useProductContext from "contexts/ProductContext";
import styled from "styled-components";

interface SortProps {
  className?: string;
}

const Sort = styled(({ className }: SortProps) => {
  const { setQueries, queries } = useProductContext();
  return (
    <div className={`flex ${className}`}>
      <p className="flex items-center">
        <img src="/img/arrow.svg" className="mr-1" alt="" />
        <span className="text-gray-600">Sort By</span>
      </p>
      <div className="ml-3">
        <select
          onChange={(e) => setQueries({ ...queries, _sort: e.target.value })}
        >
          <option value="price">Price</option>
          <option value="name">A-Z</option>
        </select>
      </div>
    </div>
  );
})``;

export default Sort;
