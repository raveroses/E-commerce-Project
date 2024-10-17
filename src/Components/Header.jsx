import { HiOutlineSearch } from "react-icons/hi";
import { IoDiamondOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { CiLogout } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";

// import Home from "../Pages/Home";
// import Login from "../Pages/Login";

function Header() {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal((t) => !t);
  };
  return (
    <div>
      <div className="tiny-Header">
        <p>
          Summer Sale For All Swim Suits and Free Express Delivery -- OFF 50%!
          <a href="/"> Shop Now</a>
        </p>

        <div className="lan">
          English <img src="./images/uk.jpg" alt="language-image" />
        </div>
      </div>

      <div className="second-line">
        <div className="logo">
          <IoDiamondOutline className="diamond" />
          <h2>Diamond</h2>
        </div>
        <ul>
          <li>
            <a href="/home"> Home</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="/">Sign Up</a>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="What are you looking for" />
          <div>
            <HiOutlineSearch className="HiOutlineSearch" />
          </div>
        </div>
        <div className="icons-papi">
          <CiHeart className="ikon" />
          <IoCartOutline className="ikon" />
          <IoIosContact onClick={handleModal} className="ikon" />
          <div
            className="contact-modal"
            style={{ display: modal ? "block" : "none" }}
          >
            <a href="">
              {" "}
              <GoPerson className="ikon" />
              Manage My Account
            </a>
            <a href="">
              <IoBagHandleOutline className="ikon" />
              My Order
            </a>
            <a href="">
              <MdOutlineCancel className="ikon" />
              My Cancellations
            </a>
            <a href="">
              <CiStar className="ikon" />
              My Reviews
            </a>

            <a href="">
              <CiLogout className="ikon" />
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
