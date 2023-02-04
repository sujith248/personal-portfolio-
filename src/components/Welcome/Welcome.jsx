import "./welcome.scss";
import { useRef } from "react";

export default function Welcome() {
  const textRef = useRef();

//   useEffect(() => {
//     init(textRef.current, {
//       showCursor: true,
//       backDelay: 1500,
//       backSpeed:60,
//       strings: ['"Developer"', "Learner"],
//     });
//   }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Sujith Dachepally</h1>
          <h3>
            <span ref={textRef}>Developer</span>
          </h3>
        </div>
        <a href="#background">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}