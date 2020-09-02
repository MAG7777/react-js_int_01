import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person';
import PersonAdditionalInfo from './PersonInfo'

const userInfo = {
  address:"Armenia, Eerevan, str Abovyan 77",
  email: "armadon@gmail.com",
  phone:"+37499-999-999",
  age:"30"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Person name={"Armadon"} surname={"Magedonsky"}/>
        <PersonAdditionalInfo userInfo={userInfo} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
