import { Link } from 'react-router-dom'

function Footer(){
  return(
    <footer>
      <div className="col">
        <p>Explore</p>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Credits'>Credits</Link></li>
        <li><Link to='/Experience'>Experience</Link></li>
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