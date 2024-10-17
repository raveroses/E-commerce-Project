import { useState } from "react";

export default function Search({ setDataa, products }) {
  const filteredData = (Array.isArray(products) ? products : []).filter(
    (product) => {
      const categoryMatch = product.category
        .toLowerCase()
        .includes(input.toLowerCase());
      const titleMatch = product.title
        .toLowerCase()
        .includes(input.toLowerCase());

      return categoryMatch || titleMatch;
    }
  );

  return (
    <div>
      {filteredData.length > 0 ? (
        filteredData.map((product, index) => (
          <div key={index}>
            <p>{product.title}</p>
            <p>{product.category}</p>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}
