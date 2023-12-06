import React, { Component } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import "./SidebarSong.css"
import { Link, useNavigate } from 'react-router-dom';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'dashboard',
    };
  }

  render() {
    const { activeItem } = this.state;
    
    return (
      <div className="sidebar">
        <ul>
          <li
            className={activeItem === 'dashboard' ? 'active' : ''}
            
          >
          <Link to={"/HomeSong"}>
          <DashboardIcon className='Dash-icon'/>
          <a>Dashboard</a>
          </Link>
          </li>
          <li
            className={activeItem === 'playlist' ? 'active' : ''}
          >
          <Link to={"/playlistUser"}>
          <PlaylistAddIcon className='playlist-icon'/>
          <a>Playlist</a>
          </Link>
          </li>
          <li
            className={activeItem === 'likes' ? 'active' : ''}
          >
          <Link to={"/likepage"}>
          <FavoriteIcon className='like-icon'/>
            <a>Likes</a></Link>
          </li> 
          
        </ul>
      </div>
    );
  }
}

export default Sidebar;