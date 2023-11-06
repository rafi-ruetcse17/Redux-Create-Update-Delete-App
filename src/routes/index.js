import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Navbar from "../layouts/Navbar";
import GoodsView from "../features/goods/GoodsView";
import AddGoods from "../features/goods/AddGoods";
import Footer from "../layouts/Footer";
import EditGoods from "../features/goods/EditGoods";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-goods" element={<GoodsView />} />
          <Route path="/add-goods" element={<AddGoods />} />
          <Route path="/edit-goods" element={<EditGoods />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Index;
