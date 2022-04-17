import Header from "../components/Header";
import Footer from "../components/Footer"
import Nav from "../components/Nav";
import NavUP from "../components/NavUp";
import PageNav from "../components/PageNav";
import ContactEmail from "../components/ContactEmail"

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
                <h2>

                </h2>
            </div>
        </div>
    </main>
    <ContactEmail/>
    <Footer />
    </div>
  );
  }

  export default Examples;