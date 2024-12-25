import { createContext } from "react";

type UserContextType = {
    user: any; 
    setUser: React.Dispatch<React.SetStateAction<any>>; 
  };

const UserContext = createContext<any | undefined>(undefined)

export default UserContext;