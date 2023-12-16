import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Register } from "./pages/Register"
import { Login } from "./pages/login"
import { AuthProvider } from "./context/AuthContext"
import { PrivateRoutes } from "./routes/PrivateRoutes"


export const App = () =>{ 
  return (
    <AuthProvider>
  <Router>
    <Routes>
      <Route path="/" element= {<homePage/>}/>
      <Route path="/Login" element= {<Login/>}/>
      <Route path="/Register" element= {<Register/>}/>
     
    <Route element={<PrivateRoutes/>}>
      <Route path="/Profile" element= {<profilePage/>}/>
      <Route path="/Task" element= {<taskPage/>}/> 
    </Route>  
    </Routes>
  </Router>
  </AuthProvider>
)}
