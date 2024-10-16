import { useState, useEffect } from "react";
import Timer from "../Components/Product1";
import Month from "../Components/Month";
import Explore from "../Components/Explore";
export default function Home() {
  return (
    <div className="mother">
      <hr style={{ marginTop: "20px" }} />
      <div className="flexboard">
        <SideContent />

        <Carousel />
      </div>
      <Timer />
      <hr style={{ marginTop: "60px" }} />
      <Month />
      <Explore />
    </div>
  );
}

function SideContent() {
  const Plist = [
    {
      name: "Woman’s Fashion",
      id: 1,
    },
    {
      name: "Men’s Fashion",
      id: 2,
    },
    {
      name: "Electronics",
      id: 3,
    },
    {
      name: "Home & Lifestyle",
      id: 4,
    },
    {
      name: "Medicine",
      id: 5,
    },
    {
      name: "Sports & Outdoor",
      id: 6,
    },
    {
      name: "Baby’s & Toys",
      id: 7,
    },
    {
      name: "Groceries & Pets",
      id: 8,
    },
    {
      name: "Health & Beauty",
      id: 9,
    },
  ];

  return (
    <>
      <div className="a-list">
        <ul>
          {Plist.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
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
