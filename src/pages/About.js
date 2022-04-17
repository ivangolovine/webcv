import Header from "../components/Header";
import Footer from "../components/Footer"
import Nav from "../components/Nav";
import NavUP from "../components/NavUp";
import PageNav from "../components/PageNav";
import ContactEmail from "../components/ContactEmail"

function About(){
    return(
        <div className="Main">
        <Nav/>
        <Header text = "About"/>
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


export default About;