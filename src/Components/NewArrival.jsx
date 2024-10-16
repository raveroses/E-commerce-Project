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
    </>
  );
}
