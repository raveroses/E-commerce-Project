import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

export default function About() {
  return (
    <>
      <First />
    </>
  );
}

function First() {
  return (
    <div className="iya">
      <div className="homes">
        {" "}
        <p>
          <span>Home </span> / About
        </p>
      </div>
      <div className="flexings">
        <div className="first-flex">
          {" "}
          <h5>Our Story </h5>
          <p>
            Launced in 2015, Exclusive is South Asia's premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions,
          </p>
          <p style={{ marginTop: "40px" }}>
            Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
            customers across the region. Exclusive has more than 1 Million
            products to offer, growing at a very fast. Exclusive offers a
            diverse assotment in categories ranging from consumer.
          </p>
        </div>

        <div className="first-flex-image">
          <img src="/images/our.svg" alt="our-image" />
        </div>
      </div>

      <div className="small">
        <div className="first-small">
          <img src="/images/seller.svg" alt="seller-images" />
          <h5> 10.5k</h5>
          <p> Sellers Active On our Site</p>
        </div>
        <div className="first-small">
          <img src="/images/monthly.svg" alt="monthly-images" />
          <h5>33k</h5>
          <p> Monthly Product Sales</p>
        </div>
        <div className="first-small">
          <img src="/images/giift.svg" alt="customer-image" />
          <h5> 45.5k</h5>
          <p> Customers Active On our Site</p>
        </div>
        <div className="first-small">
          <img src="/images/annual.svg" alt="annual-image" />
          <h5>25k</h5>

          <p>Annual Gross Sale on our Site</p>
        </div>
      </div>
      <div className="ceo">
        <div className="ceo-img">
          <img src="/images/tom.svg" alt="tom-image" />
          <h5>Tom Cruise</h5>
          <p>Founder&Chairman</p>
          <div className="social-media">
            <CiTwitter />
            <CiInstagram />
            <CiLinkedin />
          </div>
        </div>

        <div className="ceo-img">
          <img src="/images/emma.svg" alt="tom-image" />
          <h5>Emma Watson</h5>
          <p> Managing Director</p>
          <div className="social-media">
            <CiTwitter />
            <CiInstagram />
            <CiLinkedin />
          </div>
        </div>

        <div className="ceo-img">
          <img src="/images/will.svg" alt="tom-image" />
          <h5>Will Smith</h5>
          <p> Product Designer</p>
          <div className="social-media">
            <CiTwitter />
            <CiInstagram />
            <CiLinkedin />
          </div>
        </div>
      </div>

      <div
        className="delivery-flex"
        style={{ marginTop: "30px", marginBottom: "0px" }}
      >
        <div className="dlivery">
          <img src="./images/delivery.png" alt="delivery.png" />
          <h5>FREE AND FAST DELIVERY</h5>
          <p>Free Delivery for all orders over $140</p>
        </div>

        <div className="dlivery">
          <img src="./images/customer.png" alt="delivery.png" />
          <h5>24/7 CUSTOMER SERVICE</h5>
          <p> Friendly 24/7 customer supports</p>
        </div>
        <div className="dlivery">
          <img src="./images/guarantee.png" alt="delivery.png" />
          <h5>24/7 MONEY BACK GUARANTEE</h5>
          <p> We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
}
