import React from "react";
import Auth from "./navbar/Auth";
import Navigation from "./navbar/Navigation";

const Navbar = () => {
  return (
    <nav className="d-flex align-items-center justify-content-around w-100 mt-4">
      <Navigation />
      <Auth />
    </nav>
  );
};

export default Navbar;
