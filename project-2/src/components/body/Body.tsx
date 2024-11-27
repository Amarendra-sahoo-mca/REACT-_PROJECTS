import { IoCallOutline } from "react-icons/io5";
import Button from "../buttons/Button";
import "./body.css";
import { MdOutlineMessage } from "react-icons/md";
import Input from "../input/input";
const submit = (event: any)=>{
  event.preventDefault()
  let formData : {name:string, email:string} = {name :event.target[0].value, email: event.target[1].value} ;

  console.log(formData);
}
export default function Body() {
  return (
    <div className="body">
      <div className="form">
        <div className="pbtn">
          <Button icon={<MdOutlineMessage />} text= 'VIA SUPPORT CHAT' class = {1}  />
          <Button icon={<IoCallOutline />} text="VIA CALL" class = {1} />
        </div>
        <div className="pbtn">
          <Button icon={<MdOutlineMessage />} text="VIA EMAIL FORM" class = {2}/>
        </div>
        <div className="form2">
          <form  onSubmit={submit}>
                <Input type='text' lable='name' name='name' id='name' className= 'abc'/>
                <Input type='email' lable='email' name='email' id='email' className= 'abc'/>
                <Button icon={null} text="submit" class = {3} type='submit'/>
          </form>
        </div>
      </div>
      <div className="image">
        <img src="public\service 24_7-pana 1.svg" alt="abc" />
      </div>
    </div>
  );
}
