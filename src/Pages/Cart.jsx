import { FaTruckFast } from "react-icons/fa6";
import { GrPowerCycle } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
export default function Cart() {
  return (
    <>
      <div className="homes" style={{ padding: "80px" }}>
        <p>
          <span>Home </span> / Products
        </p>

        <div className="three-stones">
          <div className="small-images">
            <img src="./images/phone.png" alt="phone-image" />
            <img src="./images/phone.png" alt="phone-image" />
            <img src="./images/phone.png" alt="phone-image" />
            <img src="./images/phone.png" alt="phone-image" />
          </div>
          <div className="big-images">
            <img src="./images/phone.png" alt="phone-image" />
          </div>

          <div className="contents-images">
            <h5>Havic HV G-92 Gamepad</h5>
            <div className="review">
              <div className="star"></div>
              <div className="review-cont">(150 Reviews) </div>
              <div className="stock">| In stock</div>
            </div>
            <p>$192.00</p>
            <div className="productivity">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </div>
            <hr style={{ width: "298px" }} />

            <div className="quantity">
              <div className="minus">
                <FaMinus />
              </div>
              <div className="text">2</div>
              <div className="minus">
                <FaPlus />
              </div>
              <div className="buy">Buy Now</div>
            </div>
            <div className="bus">
              <FaTruckFast className="buss" />
              <div className="deliverys">
                <h5>Free Delivery</h5>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="bus">
              <GrPowerCycle className="buss" />
              <div className="deliverys">
                <h5>Return Delivery</h5>
                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
