import SideContent from "../Components/SideContent";
import { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import Search from "../Components/Search";

export default function Shop() {
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
        <SideContent onClick={handleOnClick} categories={categories} />
        <Category data={data} categories={categories} />
        <Search setDataa={data} />
      </div>
    </>
  );
}

function Category({ data, categories }) {
  const [cartHover, setCartHover] = useState(null);

  const handleHover = (id) => {
    setCartHover(id);
  };

  const handleMouseLeave = () => {
    setCartHover(null);
  };

  return (
    <div>
      {data.length > 0 ? (
        <div className="item-grids">
          {data.map((product) => (
            <div
              className="items-container"
              key={product.id}
              onMouseOver={() => handleHover(product.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="product-image">
                <img
                  src={product.thumbnail || "/placeholder.jpg"}
                  alt={product.title}
                />
                <div className="icon">
                  <div className="percent">-{product.discountPercentage}%</div>
                  <div className="like">
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
                  <img src="./images/star.jpg" alt="Rating" />
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products available for this category.</p>
      )}
    </div>
  );
}
