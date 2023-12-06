import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageDisplay() {




    const[details,allDetails]=useState([]);
    useEffect(()=>{
      axios.get("http://localhost:9000/fileName")
      .then((response)=>{
        allDetails(response.data);
      })
    },[]);

  return (
    <div>
    {details.map((item) => (
        <span key={item.id}>
        <img src={item.fileName}/>
        
        <h1>{item.id}</h1>
       
        </span>
        ))}
    </div>
  );
}

export default ImageDisplay;
