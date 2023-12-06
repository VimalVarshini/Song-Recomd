import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom"
import LoginSong from './Components/Login/LoginSong';
import Signup from './Components/Signup/Signup';
import HomeSong from './Components/Home/HomeSong';
import AdminHome from './Components/Admin/AdminHome';
import Aboutus from './Components/Home/Aboutus';
import Privacy from './Components/Home/Privacy';
import Terms from './Components/Home/Terms';
import FAQ from './Components/Home/FAQ';
import Playlist from './Components/Playlist';
import Song from './Components/Admin/Song';
import Update from './Components/Admin/Update';
import SettingsPage from './Components/Home/Settings';

function App() {
  return (
    <div className="App">
   
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<LoginSong/>}></Route>
   <Route path='/Signup' element={<Signup/>}></Route>
   <Route path="/HomeSong" element={<HomeSong/>}></Route>
   <Route path="/HomeAdmin" element={<AdminHome/>}></Route>
   <Route path='/about' element={<Aboutus/>}></Route>
   <Route path='/privacy' element={<Privacy/>}></Route>
   <Route path='/terms' element={<Terms/>}></Route>
   <Route path='/faq' element={<FAQ/>}></Route>
   <Route path='/playlist' element={<Playlist/>}></Route>
   <Route path='/likespage' element={<likespage/>}></Route>
   <Route path='/song' element={<Song/>}></Route>
   <Route path='/update/:id' element={<Update/>}></Route>
   <Route path='/Settings' element={<SettingsPage/>}></Route>
   </Routes>
   </BrowserRouter> 
    
    </div>
    );
  }
  
  
  export default App;