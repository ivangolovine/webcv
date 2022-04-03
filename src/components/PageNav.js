import { Link } from "react-router-dom";

function PageNav() {
  return(
    <nav className="TopRighNav">
      <a href="https://www.cs.ryerson.ca/~cps530/" target="_blank"><img src="https://i.imgur.com/FZh2skv.png"/></a>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/experience"><li>Experience</li></Link>
        <Link to="/credits"><li>Credits</li></Link>
      </ul>
    </nav>
  );
}

export default PageNav;