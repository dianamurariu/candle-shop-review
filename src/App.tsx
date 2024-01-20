import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Homepage from "./pages/homepage";
import Cart from "./pages/cart";
import ProductPage from "./pages/product-page";
import Authentication from "./pages/checkout/authentication";
import Shipping from "./pages/checkout/shipping";
import Payment from "./pages/checkout/payment";
import Confirmation from "./pages/checkout/confirmation";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Outlet />}>
            <Route index element={<Authentication />} />
            <Route path="details" element={<Authentication />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="payment" element={<Payment />} />
            <Route path="confirmation" element={<Confirmation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
