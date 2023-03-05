import React from "react";
import { Route, Routes } from "react-router-dom";
import Collection from "../pages/Collection";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Navbar from "./Navbar";

const Content = () => {
  return (
    <main className="w-75  border border-danger">
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
