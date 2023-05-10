import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';

function myFunction() {
  document.getElementById("myDropmenu").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropmenu-button')) {
    var dropdowns = document.getElementsByClassName("drop-down-cont");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function Nav() {
  return(
    <>
    <div className="dropmenu">
      <button onClick={myFunction} className = "dropmenu-button">Menu</button>
      <nav>
        <ul id="myDropmenu" className = "drop-down-cont">
          <Link to="/"><li>Home</li></Link>
          <Link to="/About"><li>About Us</li></Link>
          <Link to="/Portfolio"><li>Portfolio</li></Link>
          <Link to="/Hire"><li>Hire Us</li></Link>
          <Link to="/ResourceLinks"><li>Resources</li></Link>
          <a href="files-dwnl/CV_2023_IG_V.png" download="CV_IVAN" title="Open Resume as PDF">
           <li><img id="download-b" src="images/Download-Resume.png"/></li></a>
        </ul>
      </nav>
    </div>
    </>
  );
}
export default Nav;

/*
function Nav() {
  const [showSmallNav, setSmallNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll",() => {
        if (window.scrollY > 100) {
          setSmallNav(true)
        }
        else {
          setSmallNav(false)
        }
    })
},[])


  return(
    <>
    { showSmallNav && (
    <div>
      <button onClick={myFunction} className = "dropmenu">Menu</button>
      <nav>
        <ul id="myDropmenu" className = "drop-down-cont">
          <Link to="/"><li>Home</li></Link>
          <Link to="/About"><li>About Us</li></Link>
          <Link to="/Examples"><li>Examples</li></Link>
          <Link to="/Hire"><li>Hire Us</li></Link>
          <a href="files-dwnl/CV_2022_vi.png" download="CV-test" title="Open Resume as PDF">
           <li><img id="download-b" src="images/Download-Resume.png"/></li></a>
        </ul>
      </nav>
    </div>
    )
    }
    </>
  );
}


*/