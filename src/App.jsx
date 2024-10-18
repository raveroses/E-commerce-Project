import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import "./App.css";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header love={<FcLike />} cart={<IoCartOutline />} />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
