import {createContext, useContext} from "react"
import { api } from "../services/api"

const AuthContext = createContext({})

function AuthProvider({children}){
  async function signIn({email, passowrd}){
    
  }
    return(
        <AuthContext.Provider value={{victor: "victor"}}>
        {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
  const context = useContext(AuthContext)
  return context
}
 
export {AuthProvider, useAuth}