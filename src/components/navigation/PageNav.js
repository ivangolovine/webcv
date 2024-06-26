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
    <div className="Main-nav-img"><Link to="/"><img src="images/MIGdevelopment.png"/></Link></div>
     <nav className="nav-test-bar">
      <ul>
          <Link to="/"><li><span id="ntb-bar-links">Home</span></li></Link>
          <Link to="/About"><li><span id="ntb-bar-links">About</span></li></Link>
          <Link to="/Portfolio"><li><span id="ntb-bar-links">Portfolio</span></li></Link>
          <Link to="/Hire"><li><span id="ntb-bar-links">Hire Us</span></li></Link>
          <Link to="/Resources"><li><span id="ntb-bar-links">Resource</span></li></Link>
          <li><a href="files-dwnl/Golovine_Ivan_Resume.pdf" download="Resume_Ivan_Golovine" title="Open Resume PDF"><img id="download-b" className="nav-test-download-glow" src="images/cloud-arrow-down-solid.svg"/></a></li>
      </ul>
    </nav>
    </div>
  );
}

export default PageNav;