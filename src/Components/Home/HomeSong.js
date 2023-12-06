import Navbar from "../Home/Navbar"
import * as React from 'react';
import './HomeSong.css';
import Footer from "../Home/Footer";
import MenuDrawer from "../Home/MenuDrawer"
import { useNavigate } from "react-router-dom";
import Music from "./Music";


export default function HomeSample() {
  const token=localStorage.getItem("token")
  const nav = useNavigate();
  React.useEffect(()=>{
    if(token==null){
      nav("/");
    }
  })
  return (
    <div>
    <Navbar/> AQ
    <div>
    <MenuDrawer  className="homedrawer"/>
    </div>
    <Footer/>
    <Music/>
</div>
)
}
