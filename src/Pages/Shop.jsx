import SideContent from "../Components/SideContent";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import Search from "../Components/Search";
import { Link, useNavigate } from "react-router-dom";

export default function Shop({
  handleWish,
  handleProductDisplay,
  handleAddToCart,
}) {
  const [categories, setCategory] = useState("beauty");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!categories) return;

      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products/category/${categories}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        setData(result.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categories]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleOnClick = (name) => {
    setCategory(name);
  };

  return (
    <>
      <hr style={{ marginTop: "20px" }} />
      <div className="categ-product-flex">
        <div>
          <SideContent onClick={handleOnClick} categories={categories} />
        </div>

        <div>
          <Category
            data={data}
            categories={categories}
            handleWish={handleWish}
            handleProductDisplay={handleProductDisplay}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </>
  );
}

function Category({
  data,
  categories,
  handleWish,
  handleProductDisplay,
  handleAddToCart,
}) {
  const [cartHover, setCartHover] = useState(null);
  const [show, setShow] = useState(false);
  const [idman, setIdman] = useState([]);
  const [checkId, setCheckId] = useState(null);
  const handleEnter = (product, productId) => {
    setIdman([product]);
    setCheckId(productId);
    setShow((s) => !s);
  };
  const handleHover = (id) => {
    setCartHover(id);
  };

  const handleMouseLeave = () => {
    setCartHover(null);
  };
  const handleModal = () => {
    setShow(false);
  };

  const number = Number(checkId);
  const checkers = idman.find((item) => item.id === number);
  console.log(checkers);

  return (
    <>
      {checkers ? (
        <div
          className="product-display"
          style={{
            position: "relative",
            width: "400px",
            marginLeft: "300px",
            display: show ? "block" : "none",
          }}
        >
          <div className="closeModal" onClick={handleModal}>
            <FaTimes
              style={{
                fontSize: "20px",
                position: "absolute",
                top: "0",
                right: "0px",
              }}
            />
          </div>
          <div className="image-container">
            <img src={checkers.thumbnail} alt="phone-image" />
            <h5>{checkers.title}</h5>
            <p>{checkers.description}</p>
          </div>
          <div className="small-imagess" style={{ display: "flex" }}>
            {" "}
            <img src={checkers.thumbnail} alt="phone-image" />
            <img src={checkers.thumbnail} alt="phone-image" />
            <img src={checkers.thumbnail} alt="phone-image" />
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className="item-grids"
        style={{ visibility: !show ? "visible" : "hidden" }}
      >
        {data.map((product) => (
          <div
            className="items-container"
            key={product.id}
            onMouseOver={() => handleHover(product.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="product-image"
              onClick={() => handleEnter(product, product.id)}
            >
              <img
                src={product.thumbnail || "/placeholder.jpg"}
                alt={product.title}
              />
              <div className="icon">
                <div className="percent">-{product.discountPercentage}%</div>
                <div
                  className="like"
                  onClick={(e) => {
                    e.stopPropagation();
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
              <Link to={`/Shop/${product.category}`}>{product.title}</Link>
              <p>
                ${product.price.toFixed(2)}{" "}
                <span className="discount">
                  ({product.discountPercentage}% off)
                </span>
              </p>
              <p>
                <img src="./images/star.jpg" alt="Rating" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
