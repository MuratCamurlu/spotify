import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex gap-2 ">
      <button onClick={() => navigate(-1)} className="bg-dark border-0">
        <i className="fa-solid fa-circle-left text-white fs-3"></i>
      </button>
      <button onClick={() => navigate(+1)} className="bg-dark border-0 ">
        <i className="fa-solid fa-circle-right text-white fs-3 "></i>
      </button>
    </div>
  );
};

export default Navigation;
