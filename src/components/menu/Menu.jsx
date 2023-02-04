import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#background">About Me</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#reflectionOne">Reflection One</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#reflectionTwo">Reflection Two</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#coverLetter">Cover Letter</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}