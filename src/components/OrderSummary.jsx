import React from "react";

const OrderSummary = () => {
  return (
    <div className="mt-8 min-h-screen p-4">
      <h2 className="py-4 text-center text-2xl font-medium">Order Summary</h2>
      <div className="space-y-3 p-2">
        <p>Selected Items: 6</p>
        <p>Total Price: $1140</p>
        <p>Total Shipping Charge: $5</p>
        <p>Tax: $114</p>
        <p>Grand Total: $1559</p>
      </div>
      <div className="space-y-4 pt-8">
        <button className="flex w-full justify-center gap-2 rounded-md bg-red-500 py-2 text-center text-white hover:bg-red-700">
          Clear cart
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
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
        <button className="flex w-full justify-center gap-2 rounded-md bg-orange-400 py-2 text-center text-white hover:bg-orange-600">
          Review Order{" "}
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
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
