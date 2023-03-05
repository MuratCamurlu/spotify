import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul className="d-flex flex-column gap-2 align-items-start mt-5 ">
        <li>
          <NavLink to="/">
            <i className="fa-solid fa-house me-1"></i>Ana sayfa
          </NavLink>
        </li>
        <li>
          <NavLink to="/search">
            <i className="fa-solid fa-magnifying-glass me-1"></i>Ara
          </NavLink>
        </li>
        <li>
          <NavLink to="/collection">
            <i className="fa-solid fa-book me-1"></i>Kitaplığım
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
