import { useState, useEffect } from "react";
import SideContent from "../Components/SideContent";
import Timer from "../Components/Timer";
import { useNavigate } from "react-router-dom";
export default function Home({
  handleWish,
  // handleProductDisplay,
  handleAddToCart,
}) {
  const navigate = useNavigate();
  return (
    <div className="mother">
      <hr style={{ marginTop: "20px" }} />
      <div className="flexboard">
        <SideContent onClick={() => navigate("/shop")} />

        <Carousel />
      </div>
      <Timer
        handleWish={handleWish}
        // handleProductDisplay={handleProductDisplay}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
}

function Carousel() {
  const [increment, setIncrement] = useState(0);
  const image = [
    {
      image: "./images/main-image.jpg",
      id: 1,
    },
    {
      image: "./images/banner.png",
      id: 2,
    },
    {
      image: "./images/banner2.png",
      id: 3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIncrement((prevIndex) => Math.floor(Math.random() * image.length));
    }, 2000);

    return () => clearInterval(interval);
  }, [image.length]);

  return (
    <div className="carousel">
      <img
        src={image[increment].image}
        alt={`carousel-image-${increment}`}
        key={image[increment].id}
        height={image[increment].id === 3 ? "300px" : ""}
      />
    </div>
  );
}
