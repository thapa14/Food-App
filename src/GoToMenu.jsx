import React from "react";
import "./scss/style/main/main.css";
import { Link } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

function GoToMenu() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <main className="home d-flex align-items-start justify-content-center">
        <div className="home-content d-flex flex-column justify-content-center ">
          <h1 className="text-capitalize text-center">
            welcome to food's kitchen
          </h1>
          {isAuthenticated ? (
            <button className="btn text-capitalize btn-lg m-auto">
              <Link to="/menu">go to menu</Link>
            </button>
          ) : null}
        </div>
      </main>
    </>
  );
}

export default GoToMenu;
