import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
export default function WishList({ wishlistArray, handleDelete }) {
  const [cartHover, setCartHover] = useState(null);

  const handleHover = (id) => {
    setCartHover(id);
  };

  const handleMouseLeave = () => {
    setCartHover(null);
  };

  return (
    <>
      <div className="items-flex">
        {wishlistArray?.map((product) => (
          <div
            className="items-container"
            key={product.id}
            onMouseOver={() => handleHover(product.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="product-image">
              <img
                src={product.thumbnail || "/placeholder.jpg"} // Add fallback image
                alt={product.title}
              />
              <div className="icon">
                <div className="percent">-{product.discountPercentage}%</div>
                <div
                  className="like"
                  onClick={() => {
                    handleDelete(product.id);
                  }}
                >
                  <FaRegTrashAlt />
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
        ))}
      </div>
    </>
  );
}
