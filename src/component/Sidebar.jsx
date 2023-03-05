import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./sidebar/Menu";
import PlayList from "./sidebar/PlayList";

const Sidebar = () => {
  return (
    <aside className="w-25 border border-primary text-center d-flex flex-column ">
      <i className="fa-brands fa-spotify fs-4 mt-2 "> Spotify</i>
      <Menu />
      <nav className="mt-3  ">
        <ul className="d-flex flex-column align-items-start">
          <li>
            <NavLink to="/">
              <i class="fa-solid fa-folder-plus me-2"></i>Çalma Listesi Oluştur
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <i class="fa-solid fa-heart me-2"></i>Beğenilen Şarkılar
            </NavLink>
          </li>
        </ul>
      </nav>
      <PlayList />
    </aside>
  );
};

export default Sidebar;
