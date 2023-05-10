import { Link } from 'react-router-dom'

function Footer(){
  return(
    <footer>
      <div className="col">
        <p>Explore</p>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/About"><li>About Us</li></Link>
          <Link to="/Portfolio"><li>Portfolio</li></Link>
          <Link to="/Hire"><li>Hire Us</li></Link>
          <Link to="/Resources"><li>Resource</li></Link>
          <a href="files-dwnl/CV_2023_IG_V.png" className="nav-test-download-glow" download="CV-test" title="Open Resume as PDF"><img src="images/cloud-arrow-down-solid.svg"/></a>
      </ul>
      </div>
      <div className="col">
        <p>Contributers</p>
        <ul>
          <li>Ivan</li> 
          <a href="https://github.com/ivangolovine" target="_blank"><img src="images/icon_github.png"/></a>
          <a href="https://www.linkedin.com/in/ivan-golovine-76215a9b/" target="_blank"><img src="images/icon_linkedin.png"/></a>
          <br/>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;