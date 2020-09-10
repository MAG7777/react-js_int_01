import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Product from "./Product";

const productInfo = {
  name: "Tesla X",
  price: "80000$",
  description: "Electric car",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Product info={productInfo} />
      </header>
    </div>
  );
}

export default App;
