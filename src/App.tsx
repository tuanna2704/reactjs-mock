import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterComponent } from './component/counter/counter';
import  HomeComponent  from './component/home/home';
import ListRepoComponent from './component/list-repo/list-repo';

function App() {
  let title : string = 'MOCK PROJECT REACTJS'
  return (
    <div className="App">
      <div className='d-flex p-3 justify-content-evenly'> 
        <h1>{title}</h1>
        <CounterComponent></CounterComponent>
      </div>
      <HomeComponent></HomeComponent>
      <ListRepoComponent></ListRepoComponent>
    </div>
  );
}

export default App;
