import { IoMdSend } from "react-icons/io";

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
        <div className="account">
          <h2>Account</h2>
          <p>My Account</p>
          <p>Register/Login</p>
          <p>Cart</p>
          <p>Shop</p>
        </div>
        <div className="quick">
          <h2>Quick Link</h2>
          <p>Terms Of Use</p>
          <p>FAQs</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
        </div>
        <div className="download">
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
export default Footer;
