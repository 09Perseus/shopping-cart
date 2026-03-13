import { useState, useEffect } from "react";
import { UseCart } from "../cartcontext";
import "../assets/shop.css";

export default function Shop() {
  //Defining useState variable to store array of products
  const [products, setProducts] = useState([]);

  //Defining useState variable to store the quantity of items that must be added to cart
  const [quantity, setQuantity] = useState({});

  //Defining functions to get the quantity to display in the input tag and update when the value is changed
  const getQuantity = (id) => quantity[id] ?? 1;
  const updateQuantity = (id, value) =>
    setQuantity({ ...quantity, [id]: value });

  //Defining the AddToCart function
  const { cart, setCart } = UseCart();
  function AddToCart(id) {
    if (id in cart) {
      setCart({ ...cart, [id]: cart[id] + getQuantity(id) });
    } else {
      setCart({ ...cart, [id]: getQuantity(id) });
    }

    return null;
  }

  //Fetching product details and storing it in the products useState variable
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      {/* Title */}
      <div className="PageHeading">
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
                value={getQuantity(product.id)}
                onChange={(e) =>
                  updateQuantity(product.id, parseInt(e.target.value))
                }
                onBlur={(e) =>
                  updateQuantity(product.id, parseInt(e.target.value) || 1)
                }
              />
              <button
                className="AddButton"
                onClick={() => AddToCart(product.id)}
              >
                Add to Cart
              </button>
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
