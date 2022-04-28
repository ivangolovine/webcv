import Header from "../components/Header";
import Footer from "../components/Footer"
import Nav from "../components/navigation/Nav";
import NavUP from "../components/navigation/NavUp";
import PageNav from "../components/navigation/PageNav";
import ContactEmail from "../components/emailform/ContactEmail"

function HireUs(){
  return(
    <div className="Main">
    <Nav/>
    <Header text = "Hire Us"/>
    <PageNav />
    <NavUP />
    <main>
        <div>
            <div>
                <h2>University Projects</h2>

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


export default HireUs;