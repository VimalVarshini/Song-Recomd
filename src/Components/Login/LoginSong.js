import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios"
import './LoginSong.css'; 

const YourComponent = () => {
localStorage.clear();
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fetchData = (e) => {
  e.preventDefault();
    const userDetails={
      email:email,
      password:password
    }
    console.log(userDetails)
      axios.post("http://localhost:9000/api/v1/entry/auth_user",userDetails)
    .then((response) =>   {
      console.log(response)
      localStorage.setItem("token",response.data.token)
      nav("/HomeSong") 
    }
    ).catch((error)=>{
      console.log(error)
      alert("Kindly register!!")
      nav("/Signup")
})
}

const NavAdmin=()=>
  {
    nav('/HomeAdmin')
  }
const NavSign=()=>
  {
    nav('/Signup')
  }

  return (
    <div> 
    <img className='login-bg' src="https://cdn.create.vista.com/api/media/small/446559348/stock-photo-music-background-concept-notes-rendering" alt='Background'></img>
    <div className="login-box">
      <h2>Login</h2>
      <form  >
        <div className="user-box">
          <input type="text" name="username" required value={email}
          onChange={(e) => setEmail(e.target.value)} />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" required value={password}
          onChange={(e) => setPassword(e.target.value)} />
          <label>Password</label>
        </div>
        <a onClick={fetchData} className='submitp-song'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
        <a onClick={NavSign} className='Signupp-song'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          SignUp!!
        </a>
        <a className='Admin-Loginbt' onClick={NavAdmin}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Admin
        </a>
        </form>
    </div>
    </div>
  );
};

export default YourComponent;
