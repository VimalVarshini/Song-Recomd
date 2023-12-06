import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Playlist.css'


function Playlist() {
  const[details,allDetails]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8012/song/geting")
    .then((response)=>{
      allDetails(response.data);
    })
  },[]);
  
  return (
    <div id="showingbook">
    <div className='py-4'>
    <h1 className='py-5'>Song Adder</h1>
    </div>
      <div xs={1} md={3} id='card-showing'>
       {details.map((item) => (
          <span key={item.id}>
          <div className='card'>
          <div className='contentofbook'>
          {item.songname}<br/>
          {item.singername}<br/>
          <img className="bookimage" src={item.music} height={100}/>
          <audio controls> <source src={item.audio} type="audio/ogg"/></audio>
          </div>
          </div>
          </span>
          ))}
          </div>
          </div>
          )
        }
        
        export default Playlist;