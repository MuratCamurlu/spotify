import React from "react";
import { Route, Routes } from "react-router-dom";
import Collection from "../pages/Collection";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Navbar from "./Navbar";

const Content = () => {
  return (
    <main className="w-100  ms-4 overflow-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </main>
  );
};

export default Content;
