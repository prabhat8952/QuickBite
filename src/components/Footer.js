import { useContext } from "react"
import UserContext from "../../src/utils/UserContext"

export const Footer=() =>{
   const {user}=useContext(UserContext);
    return(
       <div className=" flex justify-center mt-6 p-4 text-2xl font-bold bg-slate-900 text-white">Developed by {user.name} - {user.email}</div>
    )
  }