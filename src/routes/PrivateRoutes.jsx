import {useAuth} from "../context/AuthContext"
import {Navigate, Outlet} from "react-router-dom"

export const PrivateRoutes = () => {
    const {isAuth} = useAuth()

    if(!isAuth) return <Navigate to="/login"/>;
    return <Outlet/>;
}