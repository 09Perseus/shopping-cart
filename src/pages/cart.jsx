import { useState, useEffect } from "react";
import { UseCart } from "../cartcontext";

export default function Cart() {
  //Defining the cart variable that is shared across shop and cart components
  const { cart, setCart } = UseCart();

  //Defining useState variable to store array of products
  const [products, setProducts] = useState([]);

  //Function that removes items from cart
  function removeFromCart(id) {
    const { [id]: removed, ...rest } = cart;
    setCart(rest);
  }

  //Fetching product details and storing it in the products useState variable
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  let inCart = Object.entries(cart);

  return (
    <>
      <div className="PageHeading">
        <h1>My Cart</h1>
      </div>
      <div className="Gallery">
        {inCart.map(([id, quantity]) => (
          <div key={id} className="Products">
            <div>
              <button
                className="RemoveButton"
                onClick={(e) => removeFromCart(id)}
              >
                Remove from Cart
              </button>
              <br />
              <br />
            </div>
            <img
              src={products.find((p) => p.id == parseInt(id))?.image}
              className="ProductImages"
            />{" "}
            <br />
            <div className="ProductDetails">
              <b>{products.find((p) => p.id == parseInt(id))?.title} </b> <br />
              <div className="Price">
                <i>${products.find((p) => p.id == parseInt(id))?.price}</i>
              </div>
            </div>
            <div className="ShowQuantity">
              Quantity:
              <input
                type="number"
                min="1"
                style={{ width: "25px" }}
                value={cart[id]}
                onChange={(e) =>
                  setCart({ ...cart, [id]: parseInt(e.target.value) })
                }
                onBlur={(e) =>
                  setCart({ ...cart, [id]: parseInt(e.target.value) || 1 })
                }
              />
              <br />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
