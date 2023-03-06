import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  return (
    <>
      <div>ProductDetail</div>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          뒤로
        </Link>
      </p>
    </>
  );
};

export default ProductDetail;
