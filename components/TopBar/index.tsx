/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Container from "components/Container";
import Cart from "components/Cart";

const TopBar = styled(({ className = "" }) => {
  return (
    <div className={`border-b md:border-b-0 ${className}`}>
      <Container>
        <div className={`flex items-center pt-4 pb-2 md:border-b ${className}`}>
          <div className="">
            <Link href="#!">
              <a>
                <img src="/img/logo.svg" className="w-28" alt="" />
              </a>
            </Link>
          </div>
          <div className="ml-auto">
            <Cart />
          </div>
        </div>
      </Container>
    </div>
  );
})``;

export default TopBar;
