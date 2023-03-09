import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setCurrent } from "../features/Player";

const SongItem = ({ item }) => {
  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector((state) => state.player);
  const updateCurrent = () => {
    if (current.id == item.id) {
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else {
      dispatch(setCurrent(item));
    }
  };
  console.log(current);
  return (
    <div
      key={item.id}
      className="col-sm-4 col-md-3 col-lg-2 bg-danger p-1 m-3 rounded-1"
    >
      <NavLink to="/">
        <div className="hoverButton position-relative ">
          <img src={item.image} className="w-100" />
          <button
            onClick={updateCurrent}
            className="playButton position-absolute top-50 end-0 "
          >
            {current?.id == item?.id && playing && (
              <i class="fa-solid fa-pause"></i>
            )}
            {current?.id != item?.id && <i class="fa-solid fa-play"></i>}
          </button>
          <div className="d-flex flex-column align-items-center">
            <h5>
              {item.title}- <span>{item.description}</span>
            </h5>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default SongItem;
