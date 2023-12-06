import * as React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import "./AdminHome.css";

export default function MenuDrawer() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
    setState({ ...state, left: false }); // Close the drawer after navigation
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}
    >
      <List>
        {['Dashboard', 'Playlist Created', 'Add Song'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => {
              if (text === 'Add Song') {
                handleNavigation('/song'); // Navigate to /song path when Add Song is clicked
              }
            }}>
              <ListItemIcon>
                {index % 2 === 0 ? <QueueMusicIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='sidemenuadmin'>
      <React.Fragment key={'left'}>
        <Button onClick={toggleDrawer('left', true)}>
          <MenuIcon style={{ backgroundColor: 'black', color: 'white' }} />
        </Button>
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
