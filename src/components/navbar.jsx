//This file will contain the code for the navbar component that will be displayed on home, shop and cart pages
import { useNavigate } from "react-router-dom";
import "../assets/navbar.css";
import { UseCart } from "../cartcontext";

export default function Navbar() {
  //Defining the cart variable that is shared across shop and cart components
  const { cart, setCart } = UseCart();
  let inCart = Object.entries(cart);
  let cnum = 0;

  for (let i = 0; i < inCart.length; i++) {
    cnum += inCart[i][1];
  }

  return (
    <div className="Navbar">
      <h1 style={{ fontSize: "60px" }}>Online Shopping Center</h1>
      <nav>
        <ul>
          <li>
            <button onClick={() => Navigate("/")}>Home</button>
          </li>
          <li>
            <button onClick={() => Navigate("/")}>Shop</button>
          </li>
          <li>
            <button onClick={() => Navigate("/")}>
              Cart <span className="CartNumber"> {cnum}</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
