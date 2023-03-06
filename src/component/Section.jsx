import React from "react";
import { NavLink } from "react-router-dom";

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
          const { id, title, description, image } = item;
          return (
            <div
              key={id}
              className="col-sm-4 col-md-3 col-lg-2 bg-danger p-1 m-3 rounded-1"
            >
              <NavLink to="/">
                <div className="position-relative ">
                  <img src={image} className="w-100" />
                  <button className="playButton position-absolute top-50 end-0 ">
                    <i class="fa-solid fa-play"></i>
                  </button>
                  <div className="d-flex flex-column align-items-center">
                    <h5>
                      {title}- <span>{description}</span>
                    </h5>
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
