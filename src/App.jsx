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
import NotFound from "./Pages/NotFound";
import WishList from "./Pages/WishList";
function App() {
  const [wishlist, setWishList] = useState(new Set());
  const [count, setCount] = useState(0);

  const handleWish = (product) => {
    setWishList((prevWishlist) => {
      if (!prevWishlist.has(product)) {
        setCount((c) => c + 1);
        return new Set([...prevWishlist, product]);
      }
      return prevWishlist;
    });
  };
  const handleDelete = (id) => {
    setWishList((prevWishlist) => {
      const newWishlist = new Set(prevWishlist);

      newWishlist.forEach((product) => {
        if (product.id === id) {
          newWishlist.delete(product);
        }
      });
      return newWishlist;
    });
  };

  const wishlistArray = [...wishlist];

  return (
    <>
      <BrowserRouter>
        <Header love={<FcLike />} cart={<IoCartOutline />} count={count} />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/home"
            element={<Home handleWish={handleWish} count={count} />}
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route
            path="/wish"
            element={
              <WishList
                wishlistArray={wishlistArray}
                handleDelete={handleDelete}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
