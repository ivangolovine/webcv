import Header from "../components/Header";
import Footer from "../components/Footer"
import Nav from "../components/navigation/Nav";
import NavUP from "../components/navigation/NavUp";
import PageNav from "../components/navigation/PageNav";
import ContactEmail from "../components/emailform/ContactEmail"

function Examples(){
  return(
    <div className="Main">
    <Nav/>
    <Header text = "Examples"/>
    <PageNav />
    <NavUP />
    <main>
        <div>
            <div>
                <h2>Past Projects</h2>

            </div>
            <div>
                <h2>Useful Resources</h2>
            </div>
        </div>
    </main>
    <ContactEmail/>
    <Footer />
    </div>
  );
  }

  export default Examples;