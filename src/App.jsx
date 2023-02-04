import { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Background from "./components/background/Background"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu";
import Welcome from "./components/Welcome/Welcome";
import CoverLetter from "./components/cover-letter/CoverLetter";
import ReflectionOne from "./components/reflections/ReflectionOne";
import ReflectionTwo from "./components/reflections/ReflectionTwo";
import "./app.scss"

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Welcome/>
       <Background />
       <ReflectionOne />
       <ReflectionTwo />
       <CoverLetter />
       <Contact/>
     </div>
    </div>
  );
}

export default App;