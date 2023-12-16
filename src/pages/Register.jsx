import {useForm} from "react-hook-form"
import {useAuth} from "../context/AuthContext"
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";
import NavbarPublic from "../components/NavbarPublic";

export const Register = () => {

    const {register, handleSubmit, formState:{errors}}=useForm();

    const {signup, isAuth, errors:registerErrors} = useAuth();

    const navigate = useNavigate();
    useEffect(() => {
        if(isAuth)navigate("/")
    }, [isAuth])

    const onSubmit = handleSubmit(async (values) => {
        await signup(values);
    });

    return(
        <>
        <NavbarPublic/>
        <div className="flex h-screen items-center justify-center">
            <div className="bg-zinc-700 max-w-md p-8 rounded-md">
            <form action="">
                <h1 className="text-3x1 text-center font-sembibold mb-5">Register</h1>
                {registerErrors.map((err, i)=>(
                    <div key={i}>{err}</div>
                ))}
                <input className="w-full bg-zinc-600 text-white px4 py-2 rounded-md my-2" type="text" placeholder="Username" {...register("username",{required:true})} />
                {errors.username && (<p>Username es requerido</p>)}
                <input className="w-full bg-zinc-600 text-white px4 py-2 rounded-md my-2" type="emial" placeholder="Email" {...register("email", {required: true})} />
                {errors.email && (<p>El email es requerido</p>)}
                <input className="w-full bg-zinc-600 text-white px4 py-2 rounded-md my-2" type="password" placeholder="Password" {...register("password", {required: true})} />
                {errors.password && (<p>El password es requerido</p>)}
                <button onClick={onSubmit} className="h-10 px-6 font-sembibold rounded-md bg-blue-500 text-white my-3">Registrarse</button>
            </form>  
            <p className="flex justify-between mt-4">Ya estoy registrado <Link to="/login" className="px-4 font-semibold rounded-md bg-blue-500 text-white">Loguearse</Link></p>
            </div>
        </div>
        </>
    )
}