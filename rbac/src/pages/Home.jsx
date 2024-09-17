import Logout from "../Components/Logout";
import Table from "../Components/Table"
import { useState ,useEffect } from "react";
import { useAuth } from "../context/Context";
export default function Home() {
  const [newrole,setNewrole]=useState("");
 const {user}=useAuth();
 const {changerole}=useAuth();


    useEffect(() => {
        if (user && user.role) {
          setNewrole(user.role);
        }
      }, [user]);
    
      const handleChangeRole = (e) => {
        e.preventDefault();
        if (newrole) {
          changerole(newrole); 
        } else {
          alert("Please enter a role.");
        }
      };
    return (
      <>

       <h1>Welcome to Home Page </h1>
       <Table/>

<div className="home-btn">
<select className="new" value={newrole} onChange={(e) => setNewrole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="Developer">Developer</option>
        <option value="HR">HR</option>
      </select>

        <button onClick={handleChangeRole}>Change Role</button>

<Logout/>
</div>
     
      </>
    )
  }
  
  
  