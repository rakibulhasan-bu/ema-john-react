import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-[#1C2B35]">
      <div className="my-container flex h-20 w-full  items-center justify-between">
        <img src="/public/assets/Logo.svg" alt="" />
        <div className="hidden flex-col gap-8 text-lg text-white  lg:flex lg:flex-row">
          <NavLink to={`/`}>Home</NavLink>
          <NavLink to={`/shop`}>Order</NavLink>
          <NavLink to={`/order-review`}>Order Review</NavLink>
          <NavLink to={`/manage-inventory`}>Manage Inventory</NavLink>
          <NavLink to={`/login`}>Login</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
