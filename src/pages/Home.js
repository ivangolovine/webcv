import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/navigation/Nav";
import NavUP from "../components/navigation/NavUp";
import PageNav from "../components/navigation/PageNav";
import ContactEmail from "../components/emailform/ContactEmail"
import Typewriter from "typewriter-effect";
import { useEffect } from "react";



function Home(){
    const textPr = "#include &lt stdio.h &gt <br>   struct person { <br>    char name[50]; <br>    int age;</br>};\
    <br> int main(){<br>    struct person p;<br>    p.age=24;<br>    p.name=Ivan Golovine<br>    printf(\"%i\", \"%s\",p.age,p.name);\
    <br> return 0;<br>}"
    document.title = "Home MIG"
    
    return(
        <div className="Main">
        <Nav/>
        <Header text = "Home"/>
        <PageNav />
        <NavUP />
        <main id = "home-background">
            <div className="home-page-back">
                <div className="inner-container-home">
                    <div className="first-column">
                        <div>
                            <img className="profile-img" src="images/Ivan.png" alt="Profile Ivan"/>
                        </div>
                    <ul className="home-profile-links">
                        <a href="https://github.com/ivangolovine" target="_blank"><img src="images/icon_github.png"/></a>
                        <a href="https://www.linkedin.com/in/ivan-golovine-76215a9b/" target="_blank"><img src="images/icon_linkedin.png"/></a>        
                    </ul>
                 </div> 
                    <div id = "nice-font">
                        <h2>Hello, I'm Ivan Golovine</h2>
                        <p>A software developer, web designer, and programmer</p>
                    </div>
                </div>
                <div className="type-writer-container">
                <pre id="typewriter" className="type-writer-text">
						<Typewriter
							options={{
								autoStart: true,
								loop: false,
								delay: 25,
							}}
							onInit={(typewriter) => {
								typewriter
									.pauseFor(1500)
									.typeString(
										textPr
									)
									.start();
							}}
						/>
					</pre>
                    </div>
            </div>
        </main>
        <ContactEmail/>
        <Footer />
        </div>
    );
}


export default Home;