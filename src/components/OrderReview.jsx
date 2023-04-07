import React from "react";
import OrderSummary from "./OrderSummary";
import { NavLink } from "react-router-dom";

const OrderReview = () => {
  return (
    <div className="my-container flex justify-between gap-20 py-20">
      <div className="w-4/6"></div>
      <div className="w-2/6 bg-orange-200 pb-8">
        <OrderSummary />
        <div className="px-4">
          <NavLink
            to="/shop"
            className="flex w-full justify-center gap-2 rounded-md bg-orange-400 py-2 text-center text-white hover:bg-orange-600"
          >
            Proceed checkout
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

export default OrderReview;
