import "./topbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser, faEnvelope, faDownload} from '@fortawesome/free-solid-svg-icons'

export default function Topbar({ menuOpen, setMenuOpen }) {

  const DownloadPDF = () => {
    fetch('resume.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'resume.pdf';
          alink.click();
      })
  })
  }

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Dach.
          </a>
          <div className="itemContainer">
          <FontAwesomeIcon icon={faUser} className="icon"/>
            <span>0403967319</span>
          </div>
          <div className="itemContainer">
          <FontAwesomeIcon icon={faEnvelope} className="icon"/>  
            <span>sujithdachepally24@gmail.com</span>
          </div>
          <div className="itemContainer" onClick={() => DownloadPDF()} style={{cursor: 'pointer'}}>
          <FontAwesomeIcon icon={faDownload} className="icon"/>
            <span>Download Resume</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
