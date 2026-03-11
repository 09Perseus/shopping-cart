import { useState, useEffect } from "react";
import "../assets/shop.css";
import { Link } from "react-router-dom";

export default function Shop() {
  //Defining useState variable to store array of products
  const [products, setProducts] = useState([]);

  //Defining useState variable to store the quantity of items that must be added to cart
  const [quantity, setQuantity] = useState(0);

  //Fetching product details and storing it in the products useState variable
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      {/* Title */}
      <div className="ProductPageHeading">
        <h1>Products</h1>
      </div>

      {/* Products Display */}
      <div className="Gallery">
        {products.map((product) => (
          <div key={product.id} className="Products">
            {/* Add to Cart system */}
            <div className="AddtoCart">
              <input
                type="number"
                min="0"
                style={{ width: "25px" }}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
              <button className="AddButton">Add to Cart</button>
            </div>
            {/* Product Image */}
            <img src={product.image} className="ProductImages" /> <br />
            {/* Product details */}
            <div className="ProductDetails">
              <b>{product.title} </b> <br />
              <div className="Price">
                <i>${product.price}</i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Back to Top button */}
      <div style={{ textAlign: "center" }}>
        <br />
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ fontSize: "15px" }}
        >
          Back to Top
        </button>
      </div>
    </>
  );
}
