import React, { useState } from 'react';
import NavbarAdmin from "./NavbarAdmin"
import MenuDraweradmin from "./MenuDraweradmin"
import AdminControl from "./AdminControl"
import "./AdminHome.css";

const MusicPlayer = () => {
  return (
    <div>
    <NavbarAdmin/>
    <MenuDraweradmin/>
    <AdminControl/>
    </div>
  );
};

export default MusicPlayer;
