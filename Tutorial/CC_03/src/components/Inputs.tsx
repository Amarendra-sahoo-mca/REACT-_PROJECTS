import { useId } from "react"
import { inputComp } from "../interfaces"


function Inputs( props:inputComp) {
  const inputId = useId()

  
  const {
    amount,
    inputLable,
    ddlable,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,
    className = ''
  }=props
  const lavle_class = 'text-black opacity-70 px-5 mt-5 font-bold'
  return (
    <div className = {` bg-slate-300 h-20 w-80 m-4 rounded-lg flex ${className} ` }>
      <div className="left w-1/2 text-left">
    <label 
    htmlFor="from"
    className = {lavle_class}
    >{inputLable}</label> <br />


    <input 
    className="mx-5 mt-2 w-2/3 bg-white text-black"
    type="number" 
    id="from"
    disabled= {amountDisable}
    value={amount}
    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value)) }
    />
    </div>
    <div className="w-1/2 text-right">
    <label 
    htmlFor="dd"
    className={lavle_class}
    >{ddlable}</label> <br />

    <select 
    id="dd"
    name="options" 
    className="mx-5 mt-2 w-2/4 bg-slate-100 text-black cursor-pointer"
    disabled= {currencyDisable}
    value={selectCurrency}
    onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}

    >
      {currencyOptions.map((item:any)=>
        (
          <option key={item} value={item}>{item}</option>
        )
      )}
    
  </select>
    </div>
    </div>
  )
}

export default Inputs

