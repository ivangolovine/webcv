import Header from "../components/Header";
import Footer from "../components/Footer"
import Nav from "../components/navigation/Nav";
import NavUP from "../components/navigation/NavUp";
import PageNav from "../components/navigation/PageNav";
import ContactEmail from "../components/emailform/ContactEmail";
import dataWebs from "../data/usefullinfo.json"

const links_Lists = dataWebs && dataWebs.map((post) => {
    return (
    <div key={post.id}>
        <div className="example-proj-inner-desc">
            { post.html_lng.map(data => {
                return(<ul key={post.id} className="jsonlist-info">
                        <li>{data.linksp}</li>
                    </ul>
                    )})
            }
        </div> 
    </div>)
    }
);


function ResourceLinks(){
  return(
  <div>
    <Nav/>
    <Header text = "Resources"/>
    <PageNav />
    <NavUP />
    <main>
        <div className="under-construction-back">
        <div className="under-construction">
        <h1>Under Construction</h1>
            <img src="images/garfield.gif"></img>
        </div>
        </div>
    </main>
    <ContactEmail/>
    <Footer />
    </div>
  );
  }

export default ResourceLinks;