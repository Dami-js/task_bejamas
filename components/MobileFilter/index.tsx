import Button from "components/Button";
import Category from "components/Category";
import PriceRange from "components/PriceRange";
import useProductContext from "contexts/ProductContext";
import styled from "styled-components";

const MobileFilter = styled(({ className = "" }) => {
  const { openMobileFilter, setOpenMobileFilter, setQueries, initialQuery } =
    useProductContext();

  const handleClearFilter = () => {
    setQueries({ ...initialQuery });
    setOpenMobileFilter(false);
  };

  return (
    <div className={`${className}`}>
      <div className="bg-white wrapper">
        <div className="content py-3 px-6">
          <p className="font-bold text-2xl mb-5">Filter</p>
          <div className="">
            <Category />
          </div>
          <div className="mt-8">
            <PriceRange />
          </div>
        </div>

        <div className="actions border-t grid grid-cols-2 gap-2 items-center py-4 px-2">
          <Button variant="outline" onClick={handleClearFilter}>
            CLEAR
          </Button>
          <Button onClick={() => setOpenMobileFilter(false)}>SAVE</Button>
        </div>
      </div>
    </div>
  );
})`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #00000094;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .wrapper {
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .content {
    height: 85%;
    overflow-y: auto;
  }
  .actions {
    height: 15%;
  }
`;

export default MobileFilter;
