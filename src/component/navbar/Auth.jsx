import React from "react";

const Auth = () => {
  const user = { name: "Murat Çamurlu" };
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {user?.name}
      </button>
      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item" type="button">
            Account
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            Profile
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Auth;
