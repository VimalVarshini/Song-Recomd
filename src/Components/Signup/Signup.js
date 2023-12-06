import React, { useState} from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
  
export default function Signup() {

  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const formHandler=(e)=>{
    e.preventDefault()
    const details={email,username,name,phonenum,password}
    if(email.length===0||username.length===0||password.length===0||phonenum.length===0 || name===0){
      alert("Enter All fields")
    }
    else{
    axios.post("http://localhost:9000/api/v1/entry/post",details
    ).then((response)=>{
      alert("user added")
      nav("/")
}).catch((error)=>{
  console.log(error)
})
}
}
    return (
      <div>
      <img className='sign-bg' src="https://cdn.create.vista.com/api/media/small/446559348/stock-photo-music-background-concept-notes-rendering" alt='Background'></img>
    <div className="sign-box">
      <h2>Sign Up</h2>
      <form  >
        <div className="sign-user-box">
          <input type="text" name="email" required value={email}
          onChange={(e) => setEmail(e.target.value)} />
          <label>Email</label>
        </div>
        <div className="sign-user-box">
          <input type="text" name="username" required value={username}
          onChange={(e) => setUsername(e.target.value)} />
          <label>Username</label>
        </div>
        <div className="sign-user-box">
          <input type="text" name="name" required value={name}
          onChange={(e) => setName(e.target.value)} />
          <label>Name</label>
        </div>
        <div className="sign-user-box">
          <input type="tel" name="phonenum" required value={phonenum}
          onChange={(e) => setPhonenum(e.target.value)} />
          <label>Phone Number</label>
        </div>
        <div className="sign-user-box">
          <input type="password" name="password" required value={password}
          onChange={(e) => setPassword(e.target.value)} />
          <label>Password</label>
        </div>
        <a onClick={formHandler} className='sign-submitp-song'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sign Up!
        </a>
        </form>
      </div>
      </div>
      )
    }




    //   <img className='upbg' src='https://cdn.create.vista.com/api/media/small/446559348/stock-photo-music-background-concept-notes-rendering' alt='bg' ></img>
    //   <img className='upbg1' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHYApwMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAAAgMBBAf/xAAbEAEBAQEBAQEBAAAAAAAAAAAAAQIRMSFREv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD07MUzC5iuIBsxSRmZ+KSAJDwSHkASN42GkAvG8PwcAn8jh+DgJ2Dh6WwE7C2Kl1ARsT1F7E9QENRPUX1E9QHPqMU1AB8xXMTxFswDZimYzMPIBpDSCQ0gNkbIIeQGSN40cBg43g4BbC2KFsBOwtUsLYCVhNRXhLAR1ErF9RPUBz6gNqAD5imCYVyB8qZJFIBpDwuTwG5MyGgANAADgBjKYtAthFLCUE6WxSk0CWolr4trxLX0EdBup9AGyplPKuAUkPCZUA+TQuTQDxrIaAGsaAAAMY1lBhKYuvQJolPolBOp6U14noEqBoA3KmUsK4BXJ4nlSUFMmhIeAeNLPDQGtYAaGAAwMoAlNaQC6JT0mgT0nqxTSWvAToLqgBlXKOFc0FsqZqWaeUFJTypynlA8p0+mlA4hWgZjAAoYy0GapbW2ktBlJqmvidoF0no+ktUCaBdgC5quahmqZoOjNUlQzVJQWzTxGHzQVlN1OVsoKdHSdb0D9HS9Z0DWs6W1loNtL1lpbQFqeqa1PVBmqlqt1U9UC6v0E1QBc1XF+AApm/FM0AFJTygA2U8oANHQAHaOgAOs6wAWsoAJ6pNUAE9VLVABLVAAP//Z' alt='grey'></img>
    //   <div id='SignAllign1'>
    // <h1 className='signHead'>SIGN UP</h1>
    // <div>
    // <label  className='SignfullName1' for="myInput"><h3>Name  :</h3></label>
    // <input className='SignfullName11' required placeholder='  Name' type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    // </div>
    // <div>
    // <label  className='SignEmail1' for="myInput"><h3>Email  :</h3></label>
    // <input className='SignEmail11' required type="text" placeholder='  Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
    // </div>
    // <div>
    // <label  className='SignUsername1' for="myInput"><h3>Username :</h3></label>
    // <input className='Signusername11' required type="text" placeholder='  Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
    // </div>
    // <div>
    // <label  className='Signpwd1' for="myInput"><h3>Phonenum :</h3></label>
    // <input className='Signpwd11' required type="number" placeholder='Phone Number' value={phonenum} onChange={(e)=>setPhonenum(e.target.value)}/>
    // </div>
    // <div>
    // <label  className='Signcp1' for="myInput"><h3>Password:</h3></label>
    // <input className='Signcp11'required placeholder='  Confirm Password' type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    // </div>
    // <label  className='Signcb11' for="myInput"><h3>I agree to the Terms and Conditions</h3></label>
    // <input  className='Signcb1' required type="checkbox" />  
    // <button onClick={formHandler} className='Signbt' type="submit">Sign Up</button>
    // </div>
