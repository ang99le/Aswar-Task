
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Table from './Components/Table';
import { AuthProvider } from './context/Context';

function App() {
  
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Table' element={<Table/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </AuthProvider>
      
      
    </>
  )
}

export default App

//refrences;-
//https://medium.com/@siva.veeravarapu/role-based-authorization-and-authentication-in-react-with-auth-handlers-specific-role-based-and-466c4483a2fb
//https://github.com/gitdagray/mern_stack_course
//https://blog.openreplay.com/role-based-access-in-react/ 
//Knowing that the crud system refrence is from my previous project so Iam not sure about which article I uesed as a reference