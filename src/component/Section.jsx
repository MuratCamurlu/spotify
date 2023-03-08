import React from "react";
import { NavLink } from "react-router-dom";
import SongItem from "./SongItem";

const Section = ({ items, title, more = false }) => {
  return (
    <section>
      <header className="d-flex justify-content-between align-items-center pe-4">
        <NavLink to={more ?? "#"}>
          <h3>{title}</h3>
        </NavLink>

        {more && <NavLink to={more}>SEE ALL</NavLink>}
      </header>
      <div className="row">
        {items.map((item) => {
          return <SongItem item={item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default Section;
