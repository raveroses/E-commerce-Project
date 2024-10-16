import { HiOutlineSearch } from "react-icons/hi";
import { IoDiamondOutline } from "react-icons/io5";
import Home from "../Pages/Home";
// import Home from "../Pages/Home";
// import Login from "../Pages/Login";

function Header({ love, cart }) {
  <Home love={love} cart={cart} />;
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
            <a href=""> Home</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Sign Up</a>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="What are you looking for" />
          <div>
            <HiOutlineSearch className="HiOutlineSearch" />
          </div>
        </div>
      </div>
      {/* {} */}
    </div>
  );
}

export default Header;
