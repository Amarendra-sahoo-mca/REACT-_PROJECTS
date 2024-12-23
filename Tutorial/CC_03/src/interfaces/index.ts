export interface inputComp{
    inputLable: string , 
    ddlable:string,
    amount: number,
    onAmountChange:any,
    onCurrencyChange:any,
    currencyOptions?: Array<any> ,
    selectCurrency: string,
    amountDisable?: boolean ,
    currencyDisable?: boolean ,
    className?:string
}