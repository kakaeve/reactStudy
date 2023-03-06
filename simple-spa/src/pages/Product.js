import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "상품 1" },
  { id: "p2", title: "상품 2" },
  { id: "p3", title: "상품 3" },
];

const Product = () => {
  return (
    <>
      <h1>상품 페이지</h1>
      <ul>
        {PRODUCTS.map(prod => (
          <li key={prod.id}>
            <Link to={prod.id} relative="">
              {prod.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Product;
