import React from "react";
import "./scss/style/LoginSignup/loginSignup.css";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import { useState } from "react";

function Home() {
  const [isVisible, toggleVisibility] = useState(true);
  return (
    <>
      <div className="login-wrapper d-flex ">
        <div className="login-left d-flex justify-content-center align-items-center">
          <img src="./images/restaurant_48px.svg" alt="img" />
        </div>
        <div className="login-right ">
          {isVisible ? (
            <LogIn toggleVisibility={toggleVisibility} />
          ) : (
            <SignUp toggleVisibility={toggleVisibility} />
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
