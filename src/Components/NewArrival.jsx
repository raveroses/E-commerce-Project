export default function NewArrival() {
  return (
    <div>
      <Arrival />
    </div>
  );
}

function Arrival() {
  return (
    <>
      <div className="month">
        <div></div>
        <p>Featured</p>
      </div>
      <div className="sell">
        <h3>New Arrival</h3>
      </div>

      <div className="image-display">
        <div className="first-image">
          <img src="./images/play.png" alt="play-station" />
        </div>

        <div className="second-image">
          <img src="./images/collect.png" alt="collection" />
          <div className="second-sub">
            <img src="./images/gucci.png" alt="gucci" />
          </div>
        </div>
      </div>

      <div className="delivery-flex">
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
    </>
  );
}
