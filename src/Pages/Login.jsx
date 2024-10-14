import { HiOutlineSearch } from "react-icons/hi";
import { IoDiamondOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
const Login = () => {
  return (
    <div>
      <Header />
      <hr style={{ marginTop: "20px" }} />
      <Main />
      <Footer />
    </div>
  );
};

function Header() {
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
    </div>
  );
}

function Main() {
  return (
    <div className="flexing">
      <div className="cartimage">
        {" "}
        <img src="./images/cart-phone.jpg" alt="cart-phone" />
      </div>

      <div className="form">
        <h3>Create an account</h3>
        <p>Enter your details below</p>
        <form action="">
          <input type="text" placeholder="Username" />
          <input type="Email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </form>
        <div className="login">
          <div className="log">Login</div>
          <div className="forget">Forget Password</div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <>
      <div className="footer-flex">
        <div className="diamonds">
          <h2> Diamond</h2>
          <p>Subscribe</p>
          <p> Get 10% off your first order</p>
          <div className="input">
            <input type="text" placeholder="Enter your Email" />
            <IoMdSend />
          </div>
        </div>
        <div className="support">
          <h2> Support</h2>
          <address>Block H8 Ajumose, Ogunpa, Oyo state, Ibadan</address>
          <address>Diamond @gmail.com</address>
          <p>+2349024986450</p>
        </div>
        <div>
          <h2>Account</h2>
          <p>My Account</p>
          <p>Register/Login</p>
          <p>Cart</p>
          <p>Shop</p>
        </div>
        <div>
          <h2>Quick Link</h2>
          <p>Terms Of Use</p>
          <p>FAQs</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <h2>Download </h2>
          <p>Save $3 with app New user only</p>
          <div className="image">
            <img src="./images/barcodes.jpg" alt="barcode" />
            <img src="./images/goog2.jpg" alt="barcode" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
