import Header from "../components/Header";
import Footer from "../components/Footer"
import Nav from "../components/navigation/Nav";
import NavUP from "../components/navigation/NavUp";
import PageNav from "../components/navigation/PageNav";
import ContactEmail from "../components/emailform/ContactEmail";
import datajson from "../data/about.json";

//maps the json and accesses the array that stores the info
const content = datajson && datajson.map((post) =>{
    return (
    <div key={post.id} className="example-proj-inner"> 
        <img className="exampleICONS" src={post.icon} alt="bob"></img>
        <h5>{post.name}</h5>
        <div className="example-proj-inner-desc">
            { post.textdc.map(data => {
                return(<ul key={post.id} className="jsonlist-info">
                        <li>{data.description}</li>
                    </ul>
                    )})
            }
        </div>
        <div className="example-proj-inner-footer"><a href={post.http} target="_blank"><img id = "gitImg" src="images/githubimage.png"/></a></div>
    </div>)
    }
  );
  
function Examples(){
  return(
    <div className="Main">
    <Nav/>
    <Header text = "Examples"/>
    <PageNav />
    <NavUP />
    <main>
        <div>
            <div className="past-project-back">
                <div className="past-project-inner">
                <h2>Past Projects</h2>
                    <div className="projects-carousel">
                        {content}
                    </div>
                </div>
            </div>
            <div className="past-project-back">
            <div className="past-project-inner">
                <h2>Resources</h2>
                    <div className="projects-carousel">
                        
                    </div>
                </div>
            </div>
        </div>
    </main>
    <ContactEmail/>
    <Footer />
    </div>
  );
  }

  export default Examples;