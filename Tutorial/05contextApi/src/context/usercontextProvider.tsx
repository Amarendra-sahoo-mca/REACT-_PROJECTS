import { ReactNode, useState } from "react"
import UserContext from "./usercontext"


const UserContextProvider = ({children}:{ children: ReactNode })=>{
    const [user, setUser] = useState(null);
    return (
    <UserContext.Provider value={{user, setUser}}>
    {children}
    </UserContext.Provider>
    )
}
export default UserContextProvider;



