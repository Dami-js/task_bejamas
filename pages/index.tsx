import Category from "components/Category";
import Container from "components/Container";
import FeaturedProduct from "components/FeaturedProduct";
import MobileFilter from "components/MobileFilter";
import Pagination from "components/Pagination";
import PriceRange from "components/PriceRange";
import ProductCard from "components/ProductCard";
import ProductList from "components/ProductList";
import Sort from "components/Sort";
import TopBar from "components/TopBar";
import useProductContext from "contexts/ProductContext";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Home = styled(({ className = "" }) => {
  const { openMobileFilter, setOpenMobileFilter } = useProductContext();

  useEffect(() => {
    if (openMobileFilter) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [openMobileFilter]);
  return (
    <>
      <div className={className}>
        <TopBar />
        <Container>
          <div className="my-10">
            <FeaturedProduct />
          </div>
          <div className="border-t py-10">
            <div className="flex justify-between items-center">
              <div className="flex items-start ">
                <p className="font-bold">Photography</p>
                <span className="mx-1">/</span>
                <p className="text-gray-600">Premium Photos</p>
              </div>
              <div className="md:hidden">
                <button onClick={() => setOpenMobileFilter(true)}>
                  <img src="/img/settings.png" className="w-6" alt="" />
                </button>
              </div>
              <div className="hidden md:inline-block">
                <Sort />
              </div>
            </div>
            <div className="mt-10">
              <div className="grid md:grid-cols-6">
                <div className="hidden md:block md:col-span-2">
                  <Category />
                  <div className="mt-8">
                    <PriceRange />
                  </div>
                </div>
                <div className="md:col-span-4">
                  <div className="">
                    <ProductList />
                  </div>

                  <div className="my-14 flex justify-center">
                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {openMobileFilter && <MobileFilter />}
    </>
  );
})``;

export default Home;
