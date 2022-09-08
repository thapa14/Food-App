import React, { useState } from "react";
import "../scss/style/header/header.css";
import SummaryModal from "./SummaryModal";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [cartSummary, toggleCartSummary] = useState(false);
  let cartItems = useSelector((state) => state.cart.productList);
  cartItems = cartItems.filter((value) => value.quantity !== 0);
  const cartLength = cartItems.length;

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });
  return (
    <>
      <div className="h-wrapper d-flex justify-content-between align-items-center">
        <div className="h-left d-flex justify-content-start align-items-center gap-2 h-100 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fff"
              d="M22 18h-4V4h-4v14h-4V4H6v14c0 4.25 3.32 7.69 7.5 7.95V44h5V25.95c4.18-.26 7.5-3.7 7.5-7.95V4h-4v14zm10-6v16h5v16h5V4c-5.52 0-10 4.48-10 8z"
            />
          </svg>
          <h1 className="m-0 text-white">Food's Restaurent</h1>
        </div>
        <div className="h-right d-flex gap-5">
          {/* <img src="./images/" alt="" /> */}

          {cartLength ? (
            <div className="shoppingCartIcon">
              <ShoppingCartIcon
                style={{ fontSize: 28 }}
                onClick={() => toggleCartSummary(!cartSummary)}
              />

              <div
                className="cart-badge d-flex justify-content-center align-items-center"
                onClick={() => toggleCartSummary(!cartSummary)}
              >
                <p className="m-0 fw-bold" style={{ fontSize: 12 }}>
                  {cartLength}
                </p>
              </div>
            </div>
          ) : null}

          {cartSummary ? (
            <SummaryModal
              toggleCartSummary={toggleCartSummary}
              cartSummary={cartSummary}
            />
          ) : null}

          {isAuthenticated ? (
            <button className="btn logIn" onClick={() => logoutWithRedirect()}>
              Logout
            </button>
          ) : (
            <button className="btn logIn" onClick={() => loginWithRedirect({})}>
              Log In
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
