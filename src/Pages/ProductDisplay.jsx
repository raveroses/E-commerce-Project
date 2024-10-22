import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GrPowerCycle } from "react-icons/gr";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
const Dynamic2 = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [fetchData2, setFetchData2] = useState([]);
  const [cart1, setCart1] = useState([]);
  const allData = [data, ...fetchData2, ...cart1];

  console.log(allData);
  // console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/carts?limit=1&skip=12"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        // i am getting the only array here and you know there is only one array which is
        // carts then it has products inside it , so the code below means that
        // i went into the cart array then pick out the products array
        setData(result?.carts[0].products);
      } catch (err) {
        console.log(err.message);
      } finally {
        console.log("");
      }
    };

    const fetchData2 = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/carts?limit=2&skip=10"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        setFetchData2(result?.carts[0].products);
        setCart1(result?.carts[1].products);
        console.log(result?.carts);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData2();

    fetchData();
  }, []);

  const numericId = Number(id);
  // console.log(numericId);
  const filtered = allData.find((item) => item.id === numericId);
  // console.log("result", " ==>>>", filtered);
  // 5682387228
  return (
    <>
      {" "}
      {filtered ? (
        <div className="homes" style={{ padding: "80px" }}>
          <p>
            <span>Home </span> / Products
          </p>

          <div className="three-stones">
            <div className="small-images">
              <img src={filtered.thumbnail} alt="phone-image" />
              <img src={filtered.thumbnail} alt="phone-image" />
              <img src={filtered.thumbnail} alt="phone-image" />
              <img src={filtered.thumbnail} alt="phone-image" />
            </div>
            <div className="big-images">
              <img src={filtered.thumbnail} alt="phone-image" />
            </div>

            <div className="contents-images">
              <h5>{filtered.title}</h5>
              <div className="review">
                <div className="star"></div>
                <div className="review-cont">
                  ({filtered.discountPercentage})
                </div>
                <div className="stock">| In stock</div>
              </div>
              <p>${filtered.price}</p>
              <div className="productivity">
                From the smallest trinket to the grandest creation, each item
                holds a unique power. It can spark joy, inspire creativity, or
                simply make life a little easier
              </div>

              <hr style={{ width: "298px" }} />

              <div className="quantity">
                <div className="minus">
                  <FaMinus />
                </div>
                <div className="text">2</div>
                <div className="minus">
                  <FaPlus />
                </div>
                <div className="buy">Buy Now</div>
              </div>
              <div className="bus">
                <FaTruckFast className="buss" />
                <div className="deliverys">
                  <h5>Free Delivery</h5>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className="bus">
                <GrPowerCycle className="buss" />
                <div className="deliverys">
                  <h5>Return Delivery</h5>
                  <p>Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading or item not found...</p>
      )}
    </>
  );
};

export default Dynamic2;
