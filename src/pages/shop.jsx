import { useState, useEffect } from "react";
import "../assets/index.css";
import { Link } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div>
        <h2>Products</h2>
        <p>
          {products.map((product) => (
            <p key={product.id}>
              {product.title} <br />
              <img src={product.image} /> <br />
              {product.price} <br />
              {product.description}
            </p>
          ))}
          <br />
          <Link to="/">Back to Homepage</Link>
        </p>
      </div>
    </>
  );
}
