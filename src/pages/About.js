import Header from "../components/Header";
import Footer from "../components/Footer"
import Nav from "../components/navigation/Nav";
import NavUP from "../components/navigation/NavUp";
import PageNav from "../components/navigation/PageNav";
import ContactEmail from "../components/emailform/ContactEmail"
import CarouselV1 from "../components/Carousel-Impl"
import data from "../data/about.json"

function About(){
    const techstack = ["Java","C++","C","Python","Ruby","SQL","CSS3","HTML5","Perl","PHP",
    "JavaScript","Bash","Prolog","Json", "XML", "Classic ASP", "Haskell", "Rust", "Elixir"]
    const frameworksstack = ["Flask", "React.js","Semantic UI","Bootstrap","jQuary","Node.js","Django",".NET Core"]
    const devopsstack = ["AWS","Nginx","Gunicorn","Git","Github", "Codecov", "Travis Ci", "SSH", "Zenhub","Docker","VMware"]
    const database = ["Oracle SQL", "MySQL", "MSSQL"]
    const osstack = ["Windows", "Mac OS", "Linux/Unix", "Ubuntu"]

    const list_os_show = osstack.map(osstack_tech =>  <li className="list-techno-inner"> {osstack_tech}</li>)
    const list_tech_show = techstack.map(tech => <li className="list-techno-inner"> {tech}</li>)
    const list_framew_show = frameworksstack.map(frameworksstack => <li className="list-techno-inner"> {frameworksstack}</li>)
    const list_devo_show = devopsstack.map(devopsstack => <li className="list-techno-inner"> {devopsstack}</li>)
    const list_datab_show = database.map(database => <li className="list-techno-inner"> {database}</li>)

    
return (
    <div className="Main">
    <Nav/>
    <Header text = "About"/>
    <PageNav />
    <NavUP />
    <main>
        <section id="About-Container">
        <div className="Download-CV">
                <div className="first-column">
                    <div className="profile-img-box">
                        <figure className="profile-img">
                            <img src="images/Ivan.png" alt="Profile Ivan"/>
                        </figure>
                    </div>
                    <ul className="profile-links">
                        <a href="https://github.com/ivangolovine" target="_blank"><img id = "gitImg" src="images/githubimage.png"/></a>
                        <a href="https://www.linkedin.com/in/ivan-golovine-76215a9b/" target="_blank"><img id = "linkImg"  src="images/linkedIn.png"/></a>        
                    </ul>
               
                 </div> 
            <div className="second-column">
                <h2> About Me</h2>
                <h1> Ivan Golovine </h1>
                <article>
                <p>I’m a <b>software developer</b> who’s looking to expand upon the foundation built while completing <i>B.Sc (Honours) Computer Science degree at Ryerson University</i>. Throughout my studies I’ve had the pleasure of working and becoming fluent in a multitude of languages, gained an understanding of data structures, algorithms, networks, security and operating systems. I’ve also finished courses which covered computational complexity, artificial intelligence, reinforcement learning, data mining, web systems development, computer graphics, software verification and validation, software engineering, and software project management.<br></br><br></br>In 2019, I had a brief part-time opportunity at <i>Fuzzex</i> where I learned the importance of devops and testing. This was the first opportunity I had to actually apply the skills I learned in computer graphics and how an actual development cycle worked when working with a team. It also highlighted the importance of methodologies, frameworks and libraries while working under a tight time constraint. It also showed me how to properly document and write neat and comprehensible code.<br></br><br></br>Currently I’m interested in expanding on my experience with certain <i>front-end languages</i>, however I don’t currently have a specific field of computer science under which I could categorize myself. I find every aspect interesting in its own way and I’m currently working on upgrading my understanding of Reinforcement Learning and theory of computation.</p>
                </article>
            </div>
        </div>
        </section> 
        <div className="color-back-tech">
            <section>
                <div className="my-technologies-container">
                    <h2 className="experience-title">Experience</h2>
                    <CarouselV1 />    
                </div>
                <div className="my-technologies-container">
                    <h2>Stack</h2>
                        <h3>Languages</h3>
                            <ul className="my-technologies-outer">{list_tech_show}</ul>
                        <h3>Frameworks</h3>
                            <ul className="my-technologies-outer">{list_framew_show}</ul>
                        <h3>DevOps</h3>
                            <ul className="my-technologies-outer">{list_devo_show}</ul>
                        <h3>Database</h3>
                            <ul className="my-technologies-outer">{list_datab_show}</ul>
                        <h3>OS</h3>
                        <ul className="my-technologies-outer">
                            {list_os_show}
                        </ul>
                    </div>
            </section>
        </div>
    </main>
    <ContactEmail/>
    <Footer />
    </div>
);
}

export default About;