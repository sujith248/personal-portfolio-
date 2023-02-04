import Topbar from "./components/topbar/Topbar";
import Background from "./components/background/Background"
// import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Welcome/>
       <Background />
       {/* <Works/> */}
       <Contact/>
     </div>
    </div>
  );
}

export default App;