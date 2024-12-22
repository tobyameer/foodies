import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userLogin" element={<UserLogin />} />
      <Route path="/userSignup" element={<UserSignup />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
