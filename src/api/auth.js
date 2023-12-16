//pedidos al servidor
import axios from "axios";

const API = "http://localhost:4000";

//registro
export const registerReq = (user)=>axios.post(`${API}/Register`, user)

//login
export const loginReq = (user)=>axios.post(`${API}/login`, user)