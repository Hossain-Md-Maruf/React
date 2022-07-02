import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
       <LoadData></LoadData>
      <MyComponent brand="Apple" price="50000"></MyComponent>
      <MyComponent brand="Microsoft" price="10000"></MyComponent>
      <MyComponent brand="Googole" price="0"></MyComponent>
      
     

      
    </div>
  );
}

function LoadData()
{
  const [users, setUsers] = useState([]);
  useEffect(()=>
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setUsers(data));
  },[])
  return(<div className="loaded">
    <h1>Loaded Data:</h1>
    {
      users.map(user=><User name={user.name} email={user.email}></User>)
    }
  </div>)
}

function User(props)
{
  return(
    <div className="component">
      <h2>User: {props.name}</h2>
      <h3>Address:{props.email}</h3>
    </div>
  )
}


function MyComponent(props)
{

  const [points, setPoints] = useState(1);

  const handlePoint = ()=>
  {
    const newPoints = points*2;
    setPoints(newPoints);
  }
  return(
    <div style={{backgroundColor:'aquamarine'}}>
      <div style={{backgroundColor:'lightgreen'}} className="component" >
      <h2>Component name: {props.brand}</h2>
      <h4>Price: {props.price}</h4>
      <h5>Yours points: {points}</h5>
      <button className="button" onClick ={handlePoint}>ADD Points</button>
    </div>
    </div>
    
  );
}

export default App;
