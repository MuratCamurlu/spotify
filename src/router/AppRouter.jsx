import React from "react";
import { BrowserRouter } from "react-router-dom";
import Content from "../component/Content";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className=" vw-100 vh-100 position-relative ">
        <div className="d-flex vh-100">
          <Sidebar />
          <Content />
        </div>
        <div className="footer text-center position-absolute bottom-0 start-0 border border-top-grey  vw-100 p-5">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
