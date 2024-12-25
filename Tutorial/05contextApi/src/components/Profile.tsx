import { useContext } from "react"
import UserContext from "../context/usercontext"

function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <><h1>please Login</h1></>
  return (
    <div>
      <h2>username: {user.username}</h2>
      <h2>password: {user.password}</h2>
    </div>
  )
}   

export default Profile
