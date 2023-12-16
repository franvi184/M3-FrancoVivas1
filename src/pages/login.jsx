import {useForm} from "react-hook-form"
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";
import NavbarPublic from "../components/NavbarPublic"


export const Login = () => {

    const {register, handleSubmit, formState:{errors}}=useForm();

    const{sigin, isAuth, errors:loginErrors} = useAuth();

    const navigate = useNavigate();
    useEffect(() => {
        if(isAuth)navigate("/")
    }, [isAuth])

    const onSubmit = handleSubmit(async(values)=>{
        sigin(values)
    });

    return(
        <>
        <NavbarPublic/>
        <div className="flex h-screen items-center justify-center">
            <div className="bg-zinc-700 max-w-md p-8 rounded-md">
            <form action="">
                <h1 className="text-3x1 text-center font-sembibold mb-5">Login</h1>
                {loginErrors.map((err, i)=>(
                    <div key={i}>{err}</div>
                ))}
                <input className="w-full bg-zinc-600 text-white px4 py-2 rounded-md my-2" type="emial" placeholder="Email" {...register("email", {required: true})} />
                {errors.email && (<p>El email es requerido</p>)}
                <input className="w-full bg-zinc-600 text-white px4 py-2 rounded-md my-2" type="password" placeholder="Password" {...register("password", {required: true})} />
                {errors.password && (<p>El password es requerido</p>)}
                <button onClick={onSubmit} className="h-10 px-6 font-sembibold rounded-md bg-blue-500 text-white my-3">Aceptar</button>
            </form>  
            <p className="flex justify-between mt-4">No tengo una cuenta <Link to="/register" className="px-4 font-semibold rounded-md bg-blue-500 text-white">Registrarse</Link></p>
            </div>
        </div>
        </>
    )
}
