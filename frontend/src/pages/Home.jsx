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
        <div className="p-2 md:p-4 bg-black">
          <div className="md:flex gap-4 py-2">
            <div className="md:w-1/2">
              <div className="flex gap-3 text-white bg-black border-2 border-white w-28 px-2 items-center rounded-full">
                <p className="text-sm font-medium text-white">Livraison</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
              <h2 className="text-4xl text-white md:text-7xl font-bold py-3">
                The Fasted Delivery in{" "}
                <span className="text-green-500 text-">Your Home</span>
              </h2>
              <p className="py-3 text-white text-base ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
              <button className="font-bold bg-green-500 text-white px-4 py-2 rounded-md">
                Order Now
              </button>
            </div>

            <div className="md:w-1/2 flex flex-wrap gap-5 p-4  justify-center">
              {homeProductCartList[0]
                ? homeProductCartList.map((el) => {
                    return (
                      <HomeCard
                        key={el._id}
                        id={el._id}
                        image={el.image}
                        name={el.name}
                        price={el.price}
                        category={el.category}
                      />
                    );
                  })
                : loadingArray.map((el, index) => {
                    return (
                      <HomeCard
                        key={index + "loading"}
                        loading={"Loading..."}
                      />
                    );
                  })}
            </div>
          </div>

          <AllProduct heading={"Your Product"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
