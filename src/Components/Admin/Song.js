import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Song.css"

export default function Song() {

  const nav = useNavigate();
  const [songname, setSongname] = useState("");
  const [singername, setSingername] = useState("");
  const [music, setMusic] = useState("");
  const [audio, setAudio] = useState("");

  const formHandler=(e)=>{
    e.preventDefault()
    const details={songname,singername,music,audio}
    if(songname.length===0||singername.length===0||music.length===0||audio.length===0 ){
      alert("Enter All fields")
    }
    else{
    axios.post("http://localhost:9000/admin/posting",details
    ).then((response)=>{
      alert("song added")
      nav("/HomeAdmin")
}).catch((error)=>{
  console.log(error)
})
}
}

  return (
    <div>
    <div  className="song-box">
     <form  >
       <div className="song-user-box">
         <input type="text" name="songname" required value={songname}
         onChange={(e) => setSongname(e.target.value)} />
         <label>Songname</label>
       </div>
       <div className="song-user-box">
         <input type="text" name="singername" required value={singername}
         onChange={(e) => setSingername(e.target.value)} />
         <label>Singername</label>
       </div>
       <div className="song-user-box">
         <input type="text" name="music" required value={music}
         onChange={(e) => setMusic(e.target.value)} />
         <label>Music</label>
       </div>
       <div className="song-user-box">
         <input type="tel" name="audio" required value={audio}
         onChange={(e) => setAudio(e.target.value)} />
         <label>Audio</label>
       </div>
       <a onClick={formHandler} className='song-submitp-song'>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         Add
       </a>
       </form>
     </div>
     </div>
  )
}
