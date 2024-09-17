import React, { useState } from 'react';
import { useAuth } from '../context/Context';
import {useNavigate} from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role,setRole]=useState('');

  const handleLogin = () => {

  login({ username, password,role});
  navigate("/Home")
  };

  return (
    <div >
        <main className="login-card">
     
            <div className="login-img">
                <img src="https://img.lovepik.com/photo/45010/2349.jpg_wh300.jpg" alt="image"/>
            </div>

           
            <div className='login-content'>
            <div className='title' >

            <h2>Login</h2>
       <label>Enter your username</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>Enter your password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
     
      <label>Choose your role</label>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="Developer">Developer</option>
        <option value="HR">HR</option>
      </select>
      <button onClick={handleLogin}>Login</button>
            </div>
            </div>
           
        </main>
        </div>
      
  );
};

export default Login;