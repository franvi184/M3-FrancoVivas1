import {createContext, useContext, useEffect, useState} from "react"
import {registerReq, loginReq} from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error("Error en el contexto del usuario")
    return context
}

export const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);

    const [isAuth, setIsAuth] = useState(false);

    const [errors, setErrors] = useState([])

    //registro
    const signup = async (user) =>{
        try {
            const res = await registerReq(user);
            console.log(res);
            setUser(res.data);
            setIsAuth(true);
        } catch (error) {
            console.log(error);
            setErrors(error.response.data)
        }
    };
    //login
    const sigin = async(user)=>{
        try {
            const res = await loginReq(user)
            setUser(res.data)
            setIsAuth(true);
        } catch (error) {
            console.log(error)
            setErrors(error.response.data)
        }
    };

    
    return(
        <AuthContext.Provider value={{
            signup,
            sigin,
            isAuth,
            user,
            errors,
        }}>
            {children}
        </AuthContext.Provider>
    )
}