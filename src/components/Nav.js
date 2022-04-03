import { Link } from "react-router-dom";

function myFunction() {
  document.getElementById("myDropmenu").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropmenu')) {
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
    <div>
      <button onClick={myFunction} class = "dropmenu">Details</button>
      <nav id="myDropmenu" class = "drop-down-cont">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/credits"><li>Credits</li></Link>
          <a href="files-dwnl/CV_2022_vi.png" download="CV-test">
                    <button id = "download-b" type="button">Download my CV</button>
                    </a>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;