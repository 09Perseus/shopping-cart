import { useState } from "react";
import "../assets/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Online Shopping Center!</h1>

      <p>
        Your one-stop website for all your needs
        <br />
        <Link to="/shop">
          <button>Go Shopping!</button>
        </Link>
      </p>
    </div>
  );
}

export default Home;
