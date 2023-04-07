import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import Product from "./Product";
import OrderSummary from "./OrderSummary";
import { addToDb } from "./utilities/fakedb";

const Shop = () => {
  const products = useLoaderData();

  const handleOrder = (id) => {
    addToDb(id);
  };

  return (
    <div className="flex justify-between">
      <div className="grid w-9/12 grid-cols-1 gap-8 p-[5%] md:grid-cols-3 lg:grid-cols-3">
        {products.map((product) => (
          <Product
            key={product.id}
            handleOrder={handleOrder}
            product={product}
          />
        ))}
      </div>
      <div className="max-h-screen w-3/12 bg-orange-200">
        <OrderSummary />
        <div className="px-4">
          <NavLink
            to="/order-review"
            className="flex w-full justify-center gap-2 rounded-md bg-orange-400 py-2 text-center text-white hover:bg-orange-600"
          >
            Review Order
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Shop;
