//This file will contain the code for the navbar component that will be displayed on home, shop and cart pages
import { NavLink } from "react-router-dom";
import "../assets/navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
