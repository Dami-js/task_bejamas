import styled from "styled-components";

const Container = styled(({ children, className = "" }) => {
  return <div className={` px-5 w-full mx-auto ${className}`}>{children}</div>;
})`
  @media (min-width: 1024px) {
    width: 95%;
  }

  @media (min-width: 1280px) {
    width: 1024px;
  }

  @media (min-width: 1440px) {
    width: 1280px;
  }
`;

export default Container;
