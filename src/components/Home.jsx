import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="my-container flex h-[87vh] flex-col items-center justify-between gap-4 lg:flex-row">
      <div className="space-y-4 lg:space-y-12">
        <div>
          <h2 className="text-[#FF9900]">Sale up to 70% off</h2>
        </div>
        <div>
          <h1 className="mb-2 text-6xl font-semibold">
            New Collection For Fall
          </h1>
          <p className="text-lg">
            Discover all the new arrivals of ready-to-wear collection.
          </p>
        </div>
        <div>
          <Link to="/shop" className="button font-medium">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full"
          src="/public/assets/home-img.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
