import React from "react";
import { BrowserRouter } from "react-router-dom";
import Content from "../component/Content";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className=" vw-100 vh-100  ">
        <div className="d-flex vh-100">
          <Sidebar />
          <Content />
        </div>
        <div className="footer text-center p-4 w-100  ">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
