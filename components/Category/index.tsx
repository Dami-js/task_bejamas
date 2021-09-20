import Checkbox from "components/Checkbox";
import useProductContext from "contexts/ProductContext";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const categories = [
  "people",
  "premium",
  "pets",
  "food",
  "landmarks",
  "cities",
  "nature",
];

const Category = styled(({ className = "" }) => {
  const { queries, setQueries } = useProductContext();
  const { category } = queries;

  const isSelected = (val: string) => {
    const index = category?.findIndex((item) => item === val);
    if (index > -1) {
      return true;
    }
    return false;
  };

  const handleSelectCategory = (val: string) => {
    const categories = [...category];
    const findCat = categories?.find((item: string) => item === val);
    let newCategories = categories && [...categories];
    if (findCat) {
      newCategories = categories?.filter((item: string) => item !== val);
      setQueries({ ...queries, category: [...newCategories] });
      return;
    }
    newCategories.push(val);
    setQueries({ ...queries, _page: 1, category: [...newCategories] });
  };

  return (
    <div className={`${className}`}>
      <p className="text-lg font-bold mb-4">Category</p>
      <div className="grid gap-4">
        {categories.map((item, index) => (
          <Checkbox
            label={item}
            key={index}
            checked={isSelected(item)}
            value={item}
            onChange={(e) => handleSelectCategory(item)}
          />
        ))}
      </div>
    </div>
  );
})``;

export default Category;
