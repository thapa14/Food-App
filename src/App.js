import React from "react";
import GoToMenu from "./GoToMenu";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./scss/resets/resets.css";
import FoodMenuPage from "./FoodMenuPage";
import Checkout from "./Checkout";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<GoToMenu />} />
          <Route exact path="/menu" element={<FoodMenuPage />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
