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
  const [fetch3, setFetch3] = useState([]);
  // const [cart1, setCart1] = useState([]);
  const flat = fetch3.flatMap((item) => item);
  const flat2 = data.flatMap((item) => item);
  const flat3 = fetchData2.flatMap((item) => item);
  const allData = [...flat2, ...flat3, ...flat];
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

        setData(result?.carts[0].products);
      } catch (err) {
        console.log(err.message);
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

        setFetchData2([result?.carts[0].products, result?.carts[1].products]);
      } catch (err) {
        console.log(err.message);
      }
    };

    const fetchData3 = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/carts?limit=2&skip=7"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        setFetch3([result?.carts[0].products, result?.carts[1].products]);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData3();

    fetchData2();

    fetchData();
  }, []);

  const numericId = Number(id);

  const filtered = allData.find((item) => item.id === numericId);

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
