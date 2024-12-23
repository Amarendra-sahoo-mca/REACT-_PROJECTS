import { useState } from 'react'

import './App.css'
import Inputs from './components/Inputs'
import useCurrencyInfo from './hooks/usecurrenceinfo';


function App() {
  const [amt, setAmount] = useState(1);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [result, setResult] = useState(0);
  const amChange = (num:number)=>( setAmount(num));
  const cChange = (str:string)=>(setFrom(str));
  const resultCurrencyChange = (str:string)=>(setTo(str));

  // const CR:any = useCurrencyInfo(from);
  // const options:any = Object.keys(CR);
  const options = ['amar','akabar','anthony']
  const swap = ()=>{
    setAmount(result);
    setResult(amt);
    setFrom(to)
    setTo(from);
  }
  const submit = ()=>{
    console.log('checked');
    
    // setResult(amt * CR[to])
    setResult(amt * 10)
  }
  return (
    <>
      <div className="bg-white w-96 h-80 px-4 py-14 rounded-3xl">
       
      <Inputs 
      amount={amt} 
      inputLable = 'from' 
      ddlable = 'Currency Type' 
      onAmountChange = {amChange} 
      onCurrencyChange = {cChange}
      currencyOptions = {options}
      selectCurrency = {from}
      />
      <button onClick={swap}>swap</button>
      <Inputs 
      inputLable = 'to' 
      ddlable = 'Currency Type'
      amount={result}
      onAmountChange = {amChange} 
      onCurrencyChange = {resultCurrencyChange}
      currencyOptions = {options}
      selectCurrency = {to}
      amountDisable = {true}
      />
      <button
      className='w-64 left-96 ml-64 bg-blue-500 top-96 mt-14'
      onClick={submit}
      >check {from} to {to}
      </button>
      
      </div>
    </>
  )
}

export default App
