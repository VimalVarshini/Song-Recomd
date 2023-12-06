import React, { useEffect, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import "./Music.css"

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
      
      const TinyText = styled(Typography)({
        fontSize: '0.75rem',
        opacity: 0.38,
        fontWeight: 500,
        letterSpacing: 0.2,
      });

  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);

  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
  


    const[details,allDetails]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:9000/admin/geting")
    .then((response)=>{
      allDetails(response.data);
    })
  },[]);


  return (
    <div className='music' style={{ marginBottom: '20px' }}>
    <div className='mp1' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
    {details.map((item) => (
      <Box key={item.id} sx={{ width: 'calc(33.33% - 10px)', marginBottom: '20px', marginRight: '0px' ,marginTop: '80px'}}>
        <Widget>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CoverImage>
              <img
                alt="Song Image"
                src={item.music}
              />
            </CoverImage>
            <Box sx={{ ml: 1.5, minWidth: 0, mb: 2 }}>


            { /* <Typography variant="caption" color="text.secondary" fontWeight={500}>
            Jawan
    </Typography>*/}


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
