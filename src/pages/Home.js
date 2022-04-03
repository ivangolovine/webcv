import Header from "../components/Header";
import Footer from "../components/Footer"
import Nav from "../components/Nav";
import NavUP from "../components/NavUp";
import PageNav from "../components/PageNav";
import Nice from "../components/ContactEmail"
import SideBar from "../components/SideBar";

function home(){
return (
    <div className="Main">
    <Nav/>
    <Header text = "Main"/>
    <PageNav />
    <NavUP />
    <main>
        <section id="About-Container">
        <div className="Download-CV">
            <div className="first-column">
                <figure className="profile-img">
                <img src="images/ivan.jpg"
                    alt="Profile Ivan"/>
                </figure>        
                <div>

            </div>
        </div> 

            <div className="second-column">
                <h1> About Me </h1>
                <h2> Ivan Golovine </h2>
                <p> 24 Years Old </p>
                <article>
                    <p>I already have experience working with a variety of different languages, databases, libraries, and tools.  I’ve had to perform both manual and automated tests while properly following procedures and writing down reports. During my studies, I learned proper software development procedures and how to plan out projects. Utilizing that knowledge when collaborating on major projects ranging from machine learning to computer graphics. I also have experience working through the full deployment life cycle and understand the importance of staying on top of things. I’m also able to obtain and maintain Government of Canada level secret clearance.
I'm most familiar with Java, C++, Python, and C, however, I'm prepared to learn and adapt to the work environment. I've also used Oracle SQL, building a working Art-Gallery with the help of Java. I utilized bash, and Linux as part of my course when I was learning C and received a 4.33 GPA in the course. I’ve also studied Machine learning as part of my AI and reinforcement learning courses and made use of some of the concepts while working at fuzzex. During my time in software tools for startups, I made use of git, ZenHub, Ethereum, Django, Node.js, MongoDB, Angular, and Ionic. I'm also trilingual, being fluent in English, French, and Russian which allows me to communicate with a variety of clients and co-workers.</p>
                </article>
            </div>
        </div>
        </section> 
    </main>
    <Nice/>
    <Footer />
    </div>
);
}

export default home;