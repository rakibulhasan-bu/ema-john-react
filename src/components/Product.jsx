import React from "react";

const Product = ({ product, handleOrder }) => {
  const { id, img, name, price, seller, ratings } = product;
  return (
    <div className="relative rounded-lg border border-slate-300 p-2">
      <img className="rounded-lg pb-2" src={img} alt={name} />
      <div>
        <h3 className="pb-1 text-lg font-medium">{name}</h3>
        <h3 className="pb-2 font-medium">Price: ${price}</h3>
        <p className="text-sm">Manufacturer: {seller}</p>
        <p className="mb-7 text-sm">Rating: {ratings}star</p>
        <button
          onClick={() => handleOrder(id)}
          className="absolute bottom-0 left-0 flex w-full items-center justify-center gap-2 rounded-b-lg bg-orange-200 py-1 text-center hover:bg-orange-300"
        >
          Add to cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Product;
