import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }
  return (
    <>
      <div>Home</div>
      <p>
        <Link to="products">상품페이지</Link>로 이동
      </p>
      <p>
        <button onClick={navigateHandler}>nav</button>
      </p>
    </>
  );
};

export default Home;
