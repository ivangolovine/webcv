import Header from "../components/Header";
import Footer from "../components/Footer"
import Nav from "../components/navigation/Nav";
import NavUP from "../components/navigation/NavUp";
import PageNav from "../components/navigation/PageNav";
import ContactEmail from "../components/emailform/ContactEmail"

//

function HireUs(){
  return(
    <div className="Main">
    <Nav/>
    <Header text = "Hire Us"/>
    <PageNav />
    <NavUP />
    <main>
        <div className="hire-option-back">
        <div className="hire-option-inner-background">
          <h2 id="hire-options-mttl">Options</h2>
          <hr id="hr-optionsline"></hr>
            <div className="hire-option-inner-box">
            <div className="hire-option-inner-options">
              <h2>1</h2>
              <h4>Example topics I'll be happy to help you with:</h4>
                <ul>
                  <li>Software architecture and API design advice</li>
                  <li>Advice on cloud configurations, deployment or scalability concerns</li>
                  <li>Software architecture and API design advice</li>
                  <li>Advice on cloud configurations, deployment or scalability concerns</li>
                  <li>Assistance with Python, JavaScript, Socket.IO, Flask or any of my open source projects</li>
                  <li>Security review of your code</li>
                  <li>Troubleshooting code that does not work as intended</li>
                  <li>Tutor on any of the languages or frameworks I had listed on my about page</li>
                </ul>
            </div>
            <div className="hire-option-inner-options">
              <h2>2</h2>
              <h4>Web-Development</h4>
                <p>
                  I can also create a custom website for you if you require one. I have experience working with front-end, back-end, databases, manual host-setup, and working with a multitude of different tools. Having a unique, well optimized website is important and I'd be happy to set one up for you. 
                </p>
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


export default HireUs;