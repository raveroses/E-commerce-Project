import { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
export default function Explore({ handleWish }) {
  return (
    <>
      <Product />
      <RealProduct handleWish={handleWish} />
    </>
  );
}

function Product() {
  return (
    <div>
      <div className="month">
        <div></div>
        <p>Our products</p>
      </div>

      <div className="sells">
        <h3>Explore Our Products</h3>
        <div className="view">
          <a href="">View All</a>
        </div>
      </div>
    </div>
  );
}

function RealProduct({ handleWish }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartHover, setCartHover] = useState(null);

  const handleHover = (id) => {
    setCartHover(id);
  };

  const handleMouseLeave = () => {
    setCartHover(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://dummyjson.com/carts?limit=2&skip=7"
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
    <div>
      <div className="item-grid">
        {data.map((cart) => {
          return cart.products.map((product) => (
            <div
              className="items-container"
              key={product.id}
              onMouseOver={() => handleHover(product.id)}
              onMouseLeave={handleMouseLeave}
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
              >
                Add to Cart
              </div>
              <div className="product-name">
                <h5>{product.title}</h5>
                <p>
                  ${product.price.toFixed(2)}{" "}
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
    </div>
  );
}
