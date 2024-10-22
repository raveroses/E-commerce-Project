import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GrPowerCycle } from "react-icons/gr";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
const CategoryDisplay = () => {
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${category}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
      } catch (err) {
        console.log(err.message);
      } finally {
        console.log("");
      }
    };

    fetchData();
  }, []);

  //   const numericId = Number(id);
  //   // console.log(numericId);
  //   const filtered = allData.find((item) => item.id === numericId);

  return <div></div>;
};

export default CategoryDisplay;
