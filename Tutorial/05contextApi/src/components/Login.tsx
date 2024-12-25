import { useContext, useState } from "react"
import UserContext from "../context/usercontext";


function Login() {
    const [username ,setUsername] = useState('');
    const [password ,setPassword] = useState('');

    const {setUser} = useContext(UserContext)
    
    const handleSubmit = (e:any)=>{
        e.preventDefault()
         setUser({username, password})
    }
  return (
    <div>
      <h2>LoGIN</h2>
      <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="username"/> <br />
      <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="password"/> <br />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login
