import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increase= ()=>{
    if(count < 20) setCount(count+1)  ;
    console.log('increased');
    
  }
  const decrease= ()=>{
   if(count > 0) setCount(count-1);
    console.log('decreased');
    
  }
  return (
    <>
      <h1>This is your count <br /> Value :  {count}</h1>
      <button onClick={increase}>Increase</button>&nbsp;&nbsp;&nbsp;<button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
