import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import "./HomeSong.css";

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

export default function MusicPlayerSlider() {
  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [position2, setPosition2] = React.useState(32);
  const [position3, setPosition3] = React.useState(32);
  const [position4, setPosition4] = React.useState(32);
  const [position5, setPosition5] = React.useState(32);
  const [position6, setPosition6] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  const [paused2, setPaused2] = React.useState(false);
  const [paused3, setPaused3] = React.useState(false);
  const [paused4, setPaused4] = React.useState(false);
  const [paused5, setPaused5] = React.useState(false);
  const [paused6, setPaused6] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
  
  
  return (
    <div className='Musicplayer'>

      <div className='mp1'>
      <Box sx={{ width: '100%',  overflow: 'hidden' }}>
        <Widget>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CoverImage>
              <img
                alt="can't win - Chilling Sunday"
                src="https://c.saavncdn.com/033/Hayyoda-From-Jawan-Tamil-2023-20230814014351-150x150.jpg"
              />
            </CoverImage>
            <Box sx={{ ml: 1.5, minWidth: 0 }}>
              <Typography variant="caption" color="text.secondary" fontWeight={500}>
            Jawan
              </Typography>
              <Typography noWrap>
                <b>Hayooda</b>
              </Typography>
              <Typography noWrap letterSpacing={-0.25}>
                Anirudh Ravichandran
              </Typography>
            </Box>
          </Box>
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition(value)}
            sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              height: 4,
              '& .MuiSlider-thumb': {
                width: 8,
                height: 8,
                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                '&:before': {
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === 'dark'
                      ? 'rgb(255 255 255 / 16%)'
                      : 'rgb(0 0 0 / 16%)'
                  }`,
                },
                '&.Mui-active': {
                  width: 20,
                  height: 20,
                },
              },
              '& .MuiSlider-rail': {
                opacity: 0.28,
              },
            }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: -2,
            }}
          >
            <TinyText>{formatDuration(position)}</TinyText>
            <TinyText>-{formatDuration(duration - position)}</TinyText>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: -1,
            }}
          >
            <IconButton aria-label="previous song">
              <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
            <IconButton
              aria-label={paused ? 'play' : 'pause'}
              onClick={() => setPaused(!paused)}
            >
              {paused ? (
                <PlayArrowRounded
                  sx={{ fontSize: '3rem' }}
                  htmlColor={mainIconColor}
                />
              ) : (
                <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
              )}
            </IconButton>
            <IconButton aria-label="next song">
              <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
          </Box>
          <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
            <VolumeDownRounded htmlColor={lightIconColor} />
            <Slider
              aria-label="Volume"
              defaultValue={30}
              sx={{
                color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                '& .MuiSlider-track': {
                  border: 'none',
                },
                '& .MuiSlider-thumb': {
                  width: 24,
                  height: 24,
                  backgroundColor: '#fff',
                  '&:before': {
                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                  },
                  '&:hover, &.Mui-focusVisible, &.Mui-active': {
                    boxShadow: 'none',
                  },
                },
              }}
            />
            <VolumeUpRounded htmlColor={lightIconColor} />
          </Stack>
        </Widget>
      </Box>
      </div>

      <div className='mp2'>
      <Box sx={{ width: '100%',  overflow: 'hidden' }}>
        <Widget>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CoverImage>
              <img
                alt="can't win - Chilling Sunday"
                src="https://c.saavncdn.com/033/Hayyoda-From-Jawan-Tamil-2023-20230814014351-150x150.jpg"
              />
            </CoverImage>
            <Box sx={{ ml: 1.5, minWidth: 0 }}>
              <Typography variant="caption" color="text.secondary" fontWeight={500}>
            Jawan
              </Typography>
              <Typography noWrap>
                <b>Hayooda</b>
              </Typography>
              <Typography noWrap letterSpacing={-0.25}>
                Anirudh Ravichandran
              </Typography>
            </Box>
          </Box>
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position2}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition2(value)}
            sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              height: 4,
              '& .MuiSlider-thumb': {
                width: 8,
                height: 8,
                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                '&:before': {
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === 'dark'
                      ? 'rgb(255 255 255 / 16%)'
                      : 'rgb(0 0 0 / 16%)'
                  }`,
                },
                '&.Mui-active': {
                  width: 20,
                  height: 20,
                },
              },
              '& .MuiSlider-rail': {
                opacity: 0.28,
              },
            }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: -2,
            }}
          >
            <TinyText>{formatDuration(position2)}</TinyText>
            <TinyText>-{formatDuration(duration - position2)}</TinyText>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: -1,
            }}
          >
            <IconButton aria-label="previous song">
              <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
            <IconButton
              aria-label={paused2 ? 'play' : 'pause'}
              onClick={() => setPaused2(!paused2)}
            >
              {paused2 ? (
                <PlayArrowRounded
                  sx={{ fontSize: '3rem' }}
                  htmlColor={mainIconColor}
                />
              ) : (
                <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
              )}
            </IconButton>
            <IconButton aria-label="next song">
              <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
          </Box>
          <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
            <VolumeDownRounded htmlColor={lightIconColor} />
            <Slider
              aria-label="Volume"
              defaultValue={30}
              sx={{
                color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                '& .MuiSlider-track': {
                  border: 'none',
                },
                '& .MuiSlider-thumb': {
                  width: 24,
                  height: 24,
                  backgroundColor: '#fff',
                  '&:before': {
                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                  },
                  '&:hover, &.Mui-focusVisible, &.Mui-active': {
                    boxShadow: 'none',
                  },
                },
              }}
            />
            <VolumeUpRounded htmlColor={lightIconColor} />
          </Stack>
        </Widget>
      </Box>
      </div>

      <div className='mp3'>
      <Box sx={{ width: '100%',  overflow: 'hidden' }}>
        <Widget>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CoverImage>
              <img
                alt="can't win - Chilling Sunday"
                src="https://c.saavncdn.com/033/Hayyoda-From-Jawan-Tamil-2023-20230814014351-150x150.jpg"
              />
            </CoverImage>
            <Box sx={{ ml: 1.5, minWidth: 0 }}>
              <Typography variant="caption" color="text.secondary" fontWeight={500}>
            Jawan
              </Typography>
              <Typography noWrap>
                <b>Hayooda</b>
              </Typography>
              <Typography noWrap letterSpacing={-0.25}>
                Anirudh Ravichandran
              </Typography>
            </Box>
          </Box>
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position3}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition3(value)}
            sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              height: 4,
              '& .MuiSlider-thumb': {
                width: 8,
                height: 8,
                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                '&:before': {
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === 'dark'
                      ? 'rgb(255 255 255 / 16%)'
                      : 'rgb(0 0 0 / 16%)'
                  }`,
                },
                '&.Mui-active': {
                  width: 20,
                  height: 20,
                },
              },
              '& .MuiSlider-rail': {
                opacity: 0.28,
              },
            }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: -2,
            }}
          >
            <TinyText>{formatDuration(position3)}</TinyText>
            <TinyText>-{formatDuration(duration - position3)}</TinyText>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: -1,
            }}
          >
            <IconButton aria-label="previous song">
              <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
            <IconButton
              aria-label={paused3 ? 'play' : 'pause'}
              onClick={() => setPaused3(!paused3)}
            >
              {paused3 ? (
                <PlayArrowRounded
                  sx={{ fontSize: '3rem' }}
                  htmlColor={mainIconColor}
                />
              ) : (
                <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
              )}
            </IconButton>
            <IconButton aria-label="next song">
              <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
          </Box>
          <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
            <VolumeDownRounded htmlColor={lightIconColor} />
            <Slider
              aria-label="Volume"
              defaultValue={30}
              sx={{
                color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                '& .MuiSlider-track': {
                  border: 'none',
                },
                '& .MuiSlider-thumb': {
                  width: 24,
                  height: 24,
                  backgroundColor: '#fff',
                  '&:before': {
                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                  },
                  '&:hover, &.Mui-focusVisible, &.Mui-active': {
                    boxShadow: 'none',
                  },
                },
              }}
            />
            <VolumeUpRounded htmlColor={lightIconColor} />
          </Stack>
        </Widget>
      </Box>
      </div>

      <div className='mp4'>
      <Box sx={{ width: '100%',  overflow: 'hidden' }}>
        <Widget>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CoverImage>
              <img
                alt="can't win - Chilling Sunday"
                src="https://c.saavncdn.com/033/Hayyoda-From-Jawan-Tamil-2023-20230814014351-150x150.jpg"
              />
            </CoverImage>
            <Box sx={{ ml: 1.5, minWidth: 0 }}>
              <Typography variant="caption" color="text.secondary" fontWeight={500}>
            Jawan
              </Typography>
              <Typography noWrap>
                <b>Hayooda</b>
              </Typography>
              <Typography noWrap letterSpacing={-0.25}>
                Anirudh Ravichandran
              </Typography>
            </Box>
          </Box>
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position4}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition4(value)}
            sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              height: 4,
              '& .MuiSlider-thumb': {
                width: 8,
                height: 8,
                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                '&:before': {
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === 'dark'
                      ? 'rgb(255 255 255 / 16%)'
                      : 'rgb(0 0 0 / 16%)'
                  }`,
                },
                '&.Mui-active': {
                  width: 20,
                  height: 20,
                },
              },
              '& .MuiSlider-rail': {
                opacity: 0.28,
              },
            }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: -2,
            }}
          >
            <TinyText>{formatDuration(position4)}</TinyText>
            <TinyText>-{formatDuration(duration - position4)}</TinyText>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: -1,
            }}
          >
            <IconButton aria-label="previous song">
              <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
            <IconButton
              aria-label={paused4 ? 'play' : 'pause'}
              onClick={() => setPaused4(!paused4)}
            >
              {paused4 ? (
                <PlayArrowRounded
                  sx={{ fontSize: '3rem' }}
                  htmlColor={mainIconColor}
                />
              ) : (
                <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
              )}
            </IconButton>
            <IconButton aria-label="next song">
              <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
          </Box>
          <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
            <VolumeDownRounded htmlColor={lightIconColor} />
            <Slider
              aria-label="Volume"
              defaultValue={30}
              sx={{
                color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                '& .MuiSlider-track': {
                  border: 'none',
                },
                '& .MuiSlider-thumb': {
                  width: 24,
                  height: 24,
                  backgroundColor: '#fff',
                  '&:before': {
                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                  },
                  '&:hover, &.Mui-focusVisible, &.Mui-active': {
                    boxShadow: 'none',
                  },
                },
              }}
            />
            <VolumeUpRounded htmlColor={lightIconColor} />
          </Stack>
        </Widget>
      </Box>
      </div>

      <div className='mp5'>
      <Box sx={{ width: '100%',  overflow: 'hidden' }}>
        <Widget>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CoverImage>
              <img
                alt="can't win - Chilling Sunday"
                src="https://c.saavncdn.com/033/Hayyoda-From-Jawan-Tamil-2023-20230814014351-150x150.jpg"
              />
            </CoverImage>
            <Box sx={{ ml: 1.5, minWidth: 0 }}>
              <Typography variant="caption" color="text.secondary" fontWeight={500}>
            Jawan
              </Typography>
              <Typography noWrap>
                <b>Hayooda</b>
              </Typography>
              <Typography noWrap letterSpacing={-0.25}>
                Anirudh Ravichandran
              </Typography>
            </Box>
          </Box>
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position5}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition5(value)}
            sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              height: 4,
              '& .MuiSlider-thumb': {
                width: 8,
                height: 8,
                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                '&:before': {
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === 'dark'
                      ? 'rgb(255 255 255 / 16%)'
                      : 'rgb(0 0 0 / 16%)'
                  }`,
                },
                '&.Mui-active': {
                  width: 20,
                  height: 20,
                },
              },
              '& .MuiSlider-rail': {
                opacity: 0.28,
              },
            }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: -2,
            }}
          >
            <TinyText>{formatDuration(position5)}</TinyText>
            <TinyText>-{formatDuration(duration - position5)}</TinyText>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: -1,
            }}
          >
            <IconButton aria-label="previous song">
              <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
            <IconButton
              aria-label={paused5 ? 'play' : 'pause'}
              onClick={() => setPaused5(!paused5)}
            >
              {paused5 ? (
                <PlayArrowRounded
                  sx={{ fontSize: '3rem' }}
                  htmlColor={mainIconColor}
                />
              ) : (
                <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
              )}
            </IconButton>
            <IconButton aria-label="next song">
              <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
          </Box>
          <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
            <VolumeDownRounded htmlColor={lightIconColor} />
            <Slider
              aria-label="Volume"
              defaultValue={30}
              sx={{
                color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                '& .MuiSlider-track': {
                  border: 'none',
                },
                '& .MuiSlider-thumb': {
                  width: 24,
                  height: 24,
                  backgroundColor: '#fff',
                  '&:before': {
                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                  },
                  '&:hover, &.Mui-focusVisible, &.Mui-active': {
                    boxShadow: 'none',
                  },
                },
              }}
            />
            <VolumeUpRounded htmlColor={lightIconColor} />
          </Stack>
        </Widget>
      </Box>
      </div>

      <div className='mp6'>
      <Box sx={{ width: '100%',  overflow: 'hidden' }}>
        <Widget>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CoverImage>
              <img
                alt="can't win - Chilling Sunday"
                src="https://c.saavncdn.com/033/Hayyoda-From-Jawan-Tamil-2023-20230814014351-150x150.jpg"
              />
            </CoverImage>
            <Box sx={{ ml: 1.5, minWidth: 0 }}>
              <Typography variant="caption" color="text.secondary" fontWeight={500}>
            Jawan
              </Typography>
              <Typography noWrap>
                <b>Hayooda</b>
              </Typography>
              <Typography noWrap letterSpacing={-0.25}>
                Anirudh Ravichandran
              </Typography>
            </Box>
          </Box>
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position6}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition6(value)}
            sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              height: 4,
              '& .MuiSlider-thumb': {
                width: 8,
                height: 8,
                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                '&:before': {
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === 'dark'
                      ? 'rgb(255 255 255 / 16%)'
                      : 'rgb(0 0 0 / 16%)'
                  }`,
                },
                '&.Mui-active': {
                  width: 20,
                  height: 20,
                },
              },
              '& .MuiSlider-rail': {
                opacity: 0.28,
              },
            }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: -2,
            }}
          >
            <TinyText>{formatDuration(position6)}</TinyText>
            <TinyText>-{formatDuration(duration - position6)}</TinyText>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: -1,
            }}
          >
            <IconButton aria-label="previous song">
              <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
            <IconButton
              aria-label={paused6 ? 'play' : 'pause'}
              onClick={() => setPaused6(!paused6)}
            >
              {paused6 ? (
                <PlayArrowRounded
                  sx={{ fontSize: '3rem' }}
                  htmlColor={mainIconColor}
                />
              ) : (
                <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
              )}
            </IconButton>
            <IconButton aria-label="next song">
              <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
          </Box>
          <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
            <VolumeDownRounded htmlColor={lightIconColor} />
            <Slider
              aria-label="Volume"
              defaultValue={30}
              sx={{
                color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                '& .MuiSlider-track': {
                  border: 'none',
                },
                '& .MuiSlider-thumb': {
                  width: 24,
                  height: 24,
                  backgroundColor: '#fff',
                  '&:before': {
                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                  },
                  '&:hover, &.Mui-focusVisible, &.Mui-active': {
                    boxShadow: 'none',
                  },
                },
              }}
            />
            <VolumeUpRounded htmlColor={lightIconColor} />
          </Stack>
        </Widget>
      </Box>
      </div>

    </div>
  );
}