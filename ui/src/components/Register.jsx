import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/auth';

const Register = () => {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async() => {
        try {
            const data = await registerUser(name,email,password);
            navigate("/");
        }
        catch(error) {
            console.log(error);
            alert(error.response?.data?.message ||"Register failed");   
        }
    }

  return (
    <div className='login-page'>
      <div className='login-container'>
        <label>Name</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        <label>Email</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label>Password</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type='button' onClick={handleRegister}>Register</button>
      </div>
    </div>
  )
}

export default Register