import  './input.css'

export default function Input(props: {name:string, type: string , lable:string ;id:string
  className:string; 
}) {
  return (
    <div className="input">
      <label htmlFor={props.id}>{props.lable}</label>
      <input   className={props.className} type={props.type} id={props.id}>
      
      </input>
    </div>
  )
}
