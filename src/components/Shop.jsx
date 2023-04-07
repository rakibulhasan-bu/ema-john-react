import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import OrderSummary from "./OrderSummary";

const Shop = () => {
  const products = useLoaderData();

  return (
    <div className="flex justify-between">
      <div className="grid w-9/12 grid-cols-1 gap-8 p-[5%] md:grid-cols-3 lg:grid-cols-3">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="h-fit w-3/12 bg-orange-200">
        <OrderSummary />
      </div>
    </div>
  );
};

export default Shop;
