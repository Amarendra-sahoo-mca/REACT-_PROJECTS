import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colour, setColour] = useState('#FF00FF');

  function btnclick(clr:string){
    
    
  }

  return (
    <>
      <div className="w-full bg-red-500 h-screen flex items-end justify-center" style={{backgroundColor : colour}}>
       
        <div className="bp flex bg-green-600 w-3/4 h-16 justify-evenly items-center">
          <button onClick={()=> setColour('yellow')}>yellow</button>
          <button onClick={()=> setColour('black')}>black</button>
          <button onClick={()=> setColour('red')}>red</button>
          <button onClick={()=> setColour('blue')}>blue</button>
          <button onClick={()=> setColour('green')}>green</button>
          <button onClick={()=> setColour('white')}>white</button>
        </div>
      </div>
    </>
  )
}

export default App
