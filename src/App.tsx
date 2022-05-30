import './App.css';
import { CounterComponent } from './component/counter/counter';
import  HomeComponent  from './component/home/home';

function App() {
  let title : string = 'MOCK PROJECT REACTJS'
  return (
    <div className="App">
      <div className='d-flex p-3 justify-content-evenly'> 
        <h1>{title}</h1>
      </div>
      <HomeComponent></HomeComponent>
    </div>
  );
}

export default App;
