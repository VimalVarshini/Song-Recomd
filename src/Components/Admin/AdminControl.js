import React, { useEffect, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import "./AdminControl.css"
import { Link, useNavigate } from 'react-router-dom';

export default function Music() {

    const Widget = styled('div')(({ theme }) => ({
        padding: 16,
        borderRadius: 16,
        width: 343,
        maxWidth: '100%',
        margin: 'auto',
        position: 'relative',
        zIndex: 1,
        backgroundColor:
          theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
        backdropFilter: 'blur(40px)',
      }));
      
      const CoverImage = styled('div')({
        width: 100,
        height: 100,
        objectFit: 'cover',
        overflow: 'hidden',
        flexShrink: 0,
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0.08)',
        '& > img': {
          width: '100%',
        },
      });

      const nav=useNavigate();


      const[details,allDetails]=useState([]);
        useEffect(()=>{
            axios.get("http://localhost:9000/admin/geting")
            .then((response)=>{
            allDetails(response.data);
            })
        },[]);
        const deleteSong = (id) => {
            axios
            .delete(`http://localhost:9000/admin/delete/${id}`)
            .then(() => {
                alert("Deleted!!");
                nav("/HomeAdmin");
            })
            .catch((error) => {
                if (error.response) {
                console.error("Error:", error.response.data);
                } else {
                console.error("Network error:", error.message);

                }
        });
        };

    return (
    <div className='music' style={{ marginBottom: '20px' }}>
    <div className='mp1'  style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
    {details.map((item) => (
      <Box sx={{ width: 'calc(33.33% - 10px)', marginBottom: '20px', marginRight: '0px' ,marginTop: '80px'}}>
        <Widget>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CoverImage>
              <img
                alt="Song Image"
                src={item.music}
              />
            </CoverImage>
            <Box sx={{ ml: 1.5, minWidth: 0 }}>


            { /* <Typography variant="caption" color="text.secondary" fontWeight={500}>
            Jawan
    </Typography>*/}

                <Link to={"/HomeAdmin"}><DeleteIcon className='deletesong' onClick={() => deleteSong(item.adminid)} /></Link>
                <Link to={`/update/${item.adminid}`}><UpdateIcon className='updatesong' /></Link>
              <Typography noWrap>
                <b>{item.songname}</b>
              </Typography>
              <Typography noWrap letterSpacing={-0.25}>
              {item.singername}
              </Typography>
            </Box>
          </Box>
          <audio controls> <source src={item.audio} type="audio/ogg"/></audio>
        </Widget>
      </Box>))}
      </div>
    </div>
  )
}
