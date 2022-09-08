import React, { useEffect, useState } from "react";
import { logInFunc } from "../Redux/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function LogIn({ toggleVisibility }) {
  // states
  const Navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [userLoginData, changeUserLoginData] = useState({
    userEmail: "",
    userPassword: "",
  });
  //   const isAuth = useSelector((state) => state.cart.isAuthorize);

  // useEffect(() => {
  //     isAuthorize ? (window.location.href = '../GoToMenu.jsx') : null
  // }, [isAuthorize])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    changeUserLoginData(() => {
      return {
        ...userLoginData,
        [name]: value,
      };
    });
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    dispatch(
      logInFunc({
        userData: userLoginData,
      })
    );

    // if (location.state?.from) {
    //   console.log(location.state.from);
    //   Navigate(location.state.from);
    // }
    changeUserLoginData(() => {
      return {
        userEmail: "",
        userPassword: "",
      };
    });
  };

  return (
    <>
      <div className="login-ad d-flex justify-content-end align-items-center">
        <h5>Don't have an account</h5>
        <button
          className="btn btn-success"
          onClick={() => {
            toggleVisibility(false);
          }}
        >
          Sign Up
        </button>
      </div>
      <div className="login-main">
        <h1 className="display-6 fw-normal">Welcome to Food's Restaurant</h1>
        <h2>Log In to Continue</h2>

        <form onSubmit={handleSubmitClick}>
          <div className="login-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="userEmail"
              type="email"
              placeholder="Enter your email"
              value={userLoginData.userEmail}
              onChange={handleInputChange}
            />
          </div>
          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="userPassword"
              type="password"
              placeholder="Password123"
              value={userLoginData.userPassword}
              onChange={handleInputChange}
            />
          </div>

          <input type="submit" value="Log In" className="btn btn-primary" />
        </form>
      </div>
    </>
  );
}

export default LogIn;
