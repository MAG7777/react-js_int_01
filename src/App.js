import React from "react";
import logo from "./logo.svg";
import Product from "./Product";

const productInfo = {
  name: "Tesla X",
  price: "80000$",
  description: "Electric car",
};

function App() {
  return (
    <>
      <Product info={productInfo} />
    </>
  );
}

export default App;
