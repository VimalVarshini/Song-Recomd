import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import "./AdminHome.css";

const SidebarAdmin = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
        <Link to="/HomeAdmin">
        <DashboardIcon />
        Dashboard
        </Link>
        </li>
        <li>
        <Link to="/playlist">
        <PlaylistAddIcon />
        Playlist Created
        </Link>
        </li>
        <li>
        <Link to="/song">
          <QueueMusicIcon />
          Song</Link>
        </li>
        <li>
        <Link to="/setting">
        <SettingsIcon />
        Settings
        </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;
