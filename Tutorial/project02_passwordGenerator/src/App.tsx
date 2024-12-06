import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numallow, setNumallow] = useState(false);
  const [charallow, setCharallow] = useState(false);
  const [password, setPassword] = useState("");

  const password_ref = useRef<HTMLInputElement>(null);

  
  const passwordGenerator = useCallback(()=>{
    // console.log("numallow-->",numallow,"charallow-->",charallow);
    // console.log('length--->',length);
    
    
    let pass ="";
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
    if(numallow) str += '1234567890'
    if(charallow) str += '~!@#$%^&*()_+/*-'

    for(let i=0 ; i< length; i++){
      let index = Math.ceil(Math.random() * str.length )
      pass += str.charAt(index);
    }
    setPassword(pass)
    console.log(password,password.length);
    
  }, [length,numallow,charallow,setPassword])

  
const btnclick= () => {
  password_ref.current?.select();
  // password_ref.current?.setSelectionRange(0,6)
  window.navigator.clipboard.writeText(password)
}
  useEffect(()=>{
    passwordGenerator()
  }, [length,numallow,charallow, passwordGenerator])
  return (
    <>
    {/* Password Generater */}
     <h1 className='text-center text-4xl text-white w-screen  bg-black-100 pt-28'></h1>
      <div className="w-full text-white bg-red mt-8 h-auto flex justify-center"> 
        <input type="text" 
        value={password} 
        className='w-80 h-10 text-black rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none pl-4'
        placeholder='password'
        readOnly
        ref={password_ref}
        />
        <button 
        className='w-20 h-auto rounded-tr-lg rounded-br-lg rounded-tl-none rounded-bl-none bg-green-500 font-bold text-black text-lg'
        onClick={btnclick}
        >copy</button>
      </div>
      <div className="flex justify-center">
        <input 
        type="range" 
        className='cursor-pointer'
        min={6}
        max={15}
        value={length}
        onChange={(e)=>{setLength(parseInt(e.target.value))}}
        />
        <label className='text-white'>Length : {length}</label>
        <input 
        type="checkbox" 
        className='cursor-pointer ml-5 mt-1 w-4 mr-1'
        id='num'
        onChange={()=>setNumallow((pre)=> !pre)}
        />
         <label 
         className='text-white cursor-pointer'
         htmlFor='num'
         
         >number </label> 
        <input 
        type="checkbox"
        className='cursor-pointer ml-5 mt-1 w-4 mr-1'
        id='char'
        onChange={()=>setCharallow((pre)=> !pre)}
        />
        <label 
        className='text-white  cursor-pointer'
         htmlFor='char'
        >specal_charcter</label>
      </div>
    </>
  )
}

export default App
