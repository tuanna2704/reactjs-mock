import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './component/counter/counter';

function App() {
  let title : string = 'MOCK PROJECT REACTJS'
  return (
    <div className="App">
      <div className='d-flex p-3 justify-content-evenly'> 
        <h1>{title}</h1>
        <Counter></Counter>
      </div>
    </div>
  );
}

export default App;
