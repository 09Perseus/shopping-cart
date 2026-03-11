import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.jsx";
import Shop from "./pages/shop.jsx";
import Cart from "./pages/cart.jsx";
import Navbar from "./components/navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/shop",
    element: (
      <>
        <Navbar />
        <Shop />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Navbar />
        <Cart />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </>,
);
