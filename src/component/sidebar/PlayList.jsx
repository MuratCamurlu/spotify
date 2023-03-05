import React from "react";
import { NavLink } from "react-router-dom";

const PlayList = () => {
  return (
    <nav className="border-top overflow-auto ">
      <ul className="d-flex flex-column align-items-start">
        {new Array(30).fill(
          <li>
            <NavLink to="/">22.Çalma Listem</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default PlayList;
