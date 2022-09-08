import React, { useState } from "react";
import { signUpFunc } from "../Redux/menuSlice";
import { useDispatch } from "react-redux";

function SignUp({ toggleVisibility }) {
  // states
  const [signupData, changeSignupData] = useState({
    userName: "",
    userEmail: "",
    userDob: "",
    userPassword: "",
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    changeSignupData(() => {
      return {
        ...signupData,
        [name]: value,
      };
    });
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    dispatch(
      signUpFunc({
        userData: { ...signupData },
      })
    );
    changeSignupData(() => {
      return { userName: "", userEmail: "", userDob: "", userPassword: "" };
    });
  };

  return (
    <>
      <div className="login-ad d-flex justify-content-end align-items-center">
        <h5>Already have an account</h5>
        <button
          className="btn btn-success"
          onClick={() => toggleVisibility(true)}
        >
          Log In
        </button>
      </div>
      <div className="login-main signup-main">
        <h1 className="display-6 fw-normal">Welcome to Food's Restaurant</h1>
        <h2>Please Sign up here</h2>

        <form onSubmit={handleSubmitClick}>
          <div className="login-field signup-field ">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="userName"
              type="text"
              placeholder="enter your name"
              value={signupData.userName}
              onChange={handleInputChange}
            />
          </div>
          <div className="login-field signup-field ">
            <label htmlFor="DOB">DOB</label>
            <input
              type="date"
              name="userDob"
              placeholder="enter your DOB"
              onChange={handleInputChange}
              value={signupData.userDob}
            />
          </div>
          <div className="login-field signup-field ">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="userEmail"
              placeholder="enter your email"
              onChange={handleInputChange}
              value={signupData.userEmail}
            />
          </div>
          <div className="login-field signup-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="userPassword"
              placeholder="Password123"
              onChange={handleInputChange}
              value={signupData.userPassword}
            />
          </div>

          <input type="submit" value="Sign Up" className="btn btn-primary" />
        </form>
      </div>
    </>
  );
}

export default SignUp;
