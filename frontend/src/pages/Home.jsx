import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";

import CardFeature from "../components/CardFeature";
import FilterProduct from "../components/FilterProduct";
import AllProduct from "../components/AllProduct";
import HomeCard from "../components/Homecard";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "parfumes",
    []
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };
  return (
    <div>
      <Header />
      <div className="pt-16  min-h-[calc(100vh)]">
        <div className=" bg-white">
          <div class="px-6 bg-black py-12 md:px-12  text-white text-center lg:text-left">
            <div class="container mx-auto xl:px-32">
              <div class="grid lg:grid-cols-2 gap-12 flex items-center">
                <div class="mt-12 lg:mt-0">
                  <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                    Biens et services <br />
                    <span class="text-green-600">de haute qualité</span>
                  </h1>
                  <a
                    class="inline-block px-7 py-3 mr-2 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    href="#!"
                    role="button"
                  >
                    Get started
                  </a>
                  <a
                    class="inline-block px-7 py-3 bg-transparent text-white font-medium text-sm leading-snug uppercase rounded  focus:outline-none focus:ring-0  transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    href="#!"
                    role="button"
                  >
                    Learn more
                  </a>
                </div>
                <div class="mb-12 lg:mb-0">
                  <img
                    src="https://i.ibb.co/4dhGdzH/salon.png"
                    class="w-full rounded-lg shadow-lg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <AllProduct heading={"Your Product"} />
        </div>
      </div>

      <h1>Rest</h1>
    </div>
  );
};

export default Home;
