import { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import Month from "./Month";
import Explore from "./Explore";
import NewArrival from "./NewArrival";
import { Link, useNavigate } from "react-router-dom";
import WishList from "../Pages/WishList";

export default function Timer({
  handleWish,
  count,
  // handleProductDisplay,
  handleAddToCart,
}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://dummyjson.com/carts?limit=2&skip=10"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        setData(result.carts);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Time />
      <ViewProduct
        data={data}
        handleWish={handleWish}
        count={count}
        // handleProductDisplay={handleProductDisplay}
        handleAddToCart={handleAddToCart}
      />
      <Month
        handleWish={handleWish}
        count={count}
        // handleProductDisplay={handleProductDisplay}
        handleAddToCart={handleAddToCart}
      />
      <Explore
        handleWish={handleWish}
        count={count}
        handleAddToCart={handleAddToCart}
      />
      <NewArrival />
    </>
  );
}

function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const count = setInterval(() => {
      setCurrentTime(() => new Date());
    }, 1000);
    return () => clearInterval(count);
  }, []);

  return (
    <div>
      <div className="today">
        <div></div>
        <p>Today's</p>
      </div>

      <div className="flash">
        <h2>Flash Sales</h2>
        <div className="count-down">
          <div className="day">
            <p>Day</p>
            <h2>{currentTime.getDate()}:</h2> {/* Fixed to get actual date */}
          </div>

          <div className="day">
            <p>Hour</p>
            <h2>{currentTime.getHours()}:</h2>
          </div>

          <div className="day">
            <p>Minute</p>
            <h2>{currentTime.getMinutes()}:</h2>
          </div>
          <div className="day">
            <p>Second</p>
            <h2>{currentTime.getSeconds()}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

function ViewProduct({
  data,
  handleWish,
  count,
  handleProductDisplay,
  handleAddToCart,
}) {
  const [cartHover, setCartHover] = useState(null);

  const handleHover = (id) => {
    setCartHover(id);
  };

  const handleMouseLeave = () => {
    setCartHover(null);
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="item-grid">
        {data.map((cart) => {
          return cart.products.map((product) => (
            <div
              className="items-container"
              key={product.id}
              onMouseOver={() => handleHover(product.id)}
              onMouseLeave={handleMouseLeave}
              // onClick={() => {
              //   handleProductDisplay(product);
              //   navigate("/productDisplay");
              // }}
            >
              <div className="product-image">
                <img
                  src={product.thumbnail || "/placeholder.jpg"} // Add fallback imagea
                  alt={product.title}
                />
                <div className="icon">
                  <div className="percent">-{product.discountPercentage}%</div>
                  <div
                    className="like"
                    onClick={() => {
                      handleWish(product);
                    }}
                  >
                    <FcLike />
                  </div>
                </div>
              </div>
              <div
                className="add"
                style={{
                  visibility: cartHover === product.id ? "visible" : "hidden",
                }}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </div>
              <div className="product-name">
                <Link to={`/Month/${product.id}`}>{product.title}</Link>
                <p>
                  ${product.price.toFixed(2)}
                  <span className="discount">
                    ({product.discountPercentage}% off)
                  </span>
                </p>
                <p>
                  <img src="./images/star.jpg" alt="Rating" />{" "}
                  {/* Placeholder for rating */}
                </p>
              </div>
            </div>
          ));
        })}
      </div>
      <div className="product-view">
        <Link to="/shop">View All Products</Link>
      </div>
    </div>
  );
}
