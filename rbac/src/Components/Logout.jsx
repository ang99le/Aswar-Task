import React from 'react';
import { useAuth } from '../context/Context';
import {useNavigate} from 'react-router-dom';

export default function Logout (){
  const { logout } = useAuth();
const Navigate=useNavigate();
  const handleLogout = () => {
    logout();
   Navigate("/Login")
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

 