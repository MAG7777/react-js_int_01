import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person';
import PersonAdditionalInfo from './PersonInfo'
import Product from "./Product";

const userInfo = {
  address:"Armenia, Eerevan, str Abovyan 77",
  email: "armadon@gmail.com",
  phone:"+37499-999-999",
  age:"30"
}

const productInfo = {
  name:"Tesla X",
  price: "80.000 $",
  description:"Electric car",
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Person name={"Armadon"} surname={"Magedonsky"}/>*/}
        {/*<PersonAdditionalInfo userInfo={userInfo} />*/}
        <Product info={productInfo}/>
      </header>
    </div>
  );
}

export default App;
