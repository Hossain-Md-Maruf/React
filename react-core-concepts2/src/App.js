import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}



function ExternalUsers()
{
  const [users, setUsers] = useState([]);
  useEffect(()=>
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setUsers(data));
  },[])
  return (
    <div className="products">
      <h3>External Users</h3>
      {
        users.map(user=> <User name={user.name} email={user.email}></User>)
      }
    </div>
  );
}

function User(props)
{
  return(<div className="product">
    <h2>Name: {props.name}</h2>
    <h3>Email: {props.email}</h3>
  </div>)
}
function Counter()
{
  const [count, setCount] = useState(5);
  const handleIncrease = ()=> setCount(count + 1);
  
  const handleDecrease = ()=> setCount(count -1);
  
  return(
    <div>
      <h2 style={{backgroundColor:'lightsalmon', color: 'white', padding: '10px', border: '3px solid skyblue', borderRadius: '10px'}}>Count: {count}</h2>
      <button style={{backgroundColor:'green', color: 'white', padding: '10px', border: '3px solid skyblue', borderRadius: '10px'}} onClick={handleIncrease}>Increase</button>
      <button style={{backgroundColor:'red', color: 'white', padding: '10px', border: '3px solid skyblue', borderRadius: '10px'}} onClick={handleDecrease}>Decrease</button>
    </div>
  );
}





export default App;




/*   {
        products.map(product=> <Product name={product.name} price={product.price}></Product>)
      } */


/*
 const products = [
    {name: 'Iphone',
    price: 100000},
    {name: 'macbookAir',
    price: 1500000},
    {name: 'Watch',
    price: 15000},
    {name:'Shirt',
    price: 2000},
    {
      name: 'Rolex Watch',
      price: 500000
    }
  ];
*/

/*function Product(props)
{
  return(<div className="product">
<h2>Name: {props.name}</h2>
<h3>Price: {props.price}</h3>
  </div>)
} */


/*
function Counter()
{
  const [count, setCount] = useState(6);
  const handleIncrease = ()=>
  {
    const newCount = count+1;
    setCount(newCount);
  }
  const handleDecrease = ()=>
  {
    const newCount = count - 1;
    setCount(newCount);
  }
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick= {handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>

    </div>
  )
} */