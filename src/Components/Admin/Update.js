import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {

  const nav = useNavigate();
  const [songname, setSongname] = useState("");
  const [singername, setSingername] = useState("");
  const [music, setMusic] = useState("");
  const [audio, setAudio] = useState("");
  const[response,setResponse]=useState("");
  const { id } = useParams();

  useEffect(()=>{
    const fetchById=async()=>{
      try{
        const response=await fetch(`http://localhost:9000/admin/gettingbyId/${id}`);
        if(!response.ok)
        {
          throw new Error('Error:'+response.status);
        }
        const data=await response.json(); 
        setSongname(data.songname);
        setSingername(data.singername);
        setMusic(data.music);
        setAudio(data.audio);
      }catch(error){
        console.log('Error:',error);
      }
    };
    fetchById();
  },[id]);

  const updateSong=async(e)=>{
    e.preventDefault();
    try{
      const response=await fetch(`http://localhost:9000/admin/update/${id}`,
      {
        method:"PUT",
        headers:{'Content-Type':'application/json',},
        body:JSON.stringify({songname,singername,music,audio}),
      }
      );
      const data=await response.json();
      setResponse(data);
      nav("/HomeAdmin")
    }catch(error)
    {
      console.log('Error:',error);
  }
  };

  return (
    <div>
    <div className="song-box">
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
       <a onClick={updateSong} className='song-submitp-song'>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         Update
       </a>
       </form>
     </div></div>
  )
}
export default Update;