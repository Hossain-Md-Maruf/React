import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Count></Count>
      <LoadComments></LoadComments>
      <Comments></Comments>
    </div>
  );
}

function LoadComments()
{
  const [comments, setComments] = useState([]);
  useEffect(()=>
  {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=> res.json())
    .then(data=> setComments(data));
  },[])
  return(
    <div>
      <h2>Load Comments:</h2>
      {
        comments.map(comment=> <Comments name={comment.name} email={comment.email} body={comment.body}></Comments>)
      }
    </div>
  )
}
function Comments(props)
{
  return(<div className="comments">
    <h2>{props.name}</h2>
    <h2>{props.email}</h2>
    <h3>{props.body}</h3>
  </div>)
}
function Count()
{
  const [count, setCount] = useState(0);
  const handleIncrease = ()=> {
    const newCount = count + 1;
    setCount(newCount);
  }
  const handleDecrease = ()=>
  {
    const newCount = count - 1;
    setCount(newCount);
  }
  return( 
    <div>
      <h2 className="count" >Count: {count}</h2>
      <button className="increase" onClick={handleIncrease}>Increase</button>
      <button className="decrease" onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default App;
