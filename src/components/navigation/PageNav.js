import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'

function PageNav() {
  const [navBarColour, setNavBarColour] = useState("Main-nav-bar");
  useEffect(() => {
      window.addEventListener("scroll",() => {
          if (window.scrollY > 50){
            setNavBarColour("Main-nav-bar2")
          }
          else {
            setNavBarColour("Main-nav-bar");
          }

      })
  },[])
  return(
    <div className={navBarColour}>
    <a className="Main-nav-img" href="https://www.cs.ryerson.ca/~cps530/" target="_blank"><img src="https://i.imgur.com/FZh2skv.png"/></a>
     <nav className="nav-test-bar">
      <ul>
          <Link to="/"><li><span id="ntb-bar-links">Home</span></li></Link>
          <Link to="/About"><li><span id="ntb-bar-links">About Us</span></li></Link>
          <Link to="/Examples"><li><span id="ntb-bar-links">Examples</span></li></Link>
          <Link to="/Hire"><li><span id="ntb-bar-links">Hire Us</span></li></Link>
          <li><div className="nav-test-download-glow"><a href="files-dwnl/CV_2022_vi.png" download="CV-test" title="Open Resume as PDF"><img id="download-b" src="images/Download-Resume.png"/></a></div></li>
      </ul>
    </nav>
    </div>
  );
}

export default PageNav;