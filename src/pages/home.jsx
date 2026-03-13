import { useState } from "react";
import "../assets/home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  return (
    <>
      <div>
        <h1>Welcome to the Online Shopping Center!</h1>
      </div>
      <div className="HomeText">Your one-stop website for all your needs</div>
      <div className="ShopButtonDiv">
        <button className="ShopButton" onClick={() => navigate("/shop")}>
          Go Shopping!
        </button>
      </div>
    </>
  );
}

export default Home;
