import Header from "../components/Header";
import Footer from "../components/Footer"
import Nav from "../components/navigation/Nav";
import NavUP from "../components/navigation/NavUp";
import PageNav from "../components/navigation/PageNav";
import ContactEmail from "../components/emailform/ContactEmail"
import About_Slider from "../components/About-Carousel"
import Work_Info_Data from "../data/work_carousel.json";

function About(){

    //map/dictionary for content,color and icons
    const techstack = [
        {id: 1, icon: 'stack-icons/java.svg', content: 'Java', colorsclr: "javaclr"},
        {id: 2, icon: 'stack-icons/javascript.svg', content: 'JavaScript', colorsclr:"javascriptsclr"},
        {id: 3, icon: 'stack-icons/cplusplus.svg', content: 'C++', colorsclr: "cppclr"},
        {id: 4, icon: 'stack-icons/c.svg', content: 'C', colorsclr:"cclr"},
        {id: 5, icon: 'stack-icons/python.svg', content: 'Python', colorsclr: "pythonclr"},
        {id: 6, icon: 'stack-icons/ruby.svg', content: 'Ruby', colorsclr:"Rubysclr"},
        {id: 7, icon: 'stack-icons/css3.svg', content: 'CSS3', colorsclr:"CSS3clr"},
        {id: 8, icon: 'stack-icons/html5.svg', content: 'HTML5', colorsclr: "HTML5clr"},
        {id: 9, icon: 'stack-icons/perl.svg', content: 'Perl', colorsclr:"Perlclr"},
        {id: 10, icon: 'stack-icons/php.svg', content: 'PHP', colorsclr: "PHPclr"},
        {id: 11, icon: 'stack-icons/gnubash.svg', content: 'Bash', colorsclr:"Bashclr"},
        {id: 12, icon: 'stack-icons/json.svg', content: 'Json', colorsclr:"Jsonclr"},
        {id: 13, icon: 'stack-icons/xml-file.svg', content: 'XML', colorsclr: "XMLclr"},
        {id: 14, icon: 'stack-icons/Asp_logo.svg', content: 'Classic ASP', colorsclr:"Caspclr"},
        {id: 15, icon: 'stack-icons/haskell.svg', content: 'Haskell', colorsclr: "Haskellclr"},
        {id: 16, icon: 'stack-icons/rust.svg', content: 'Rust', colorsclr:"Rustclr"},
        {id: 17, icon: 'stack-icons/elixir.svg', content: 'Elixir', colorsclr:"Elixirclr"}
    ];
    
    const frameworksstack = [
        {id: 1, icon: 'stack-icons/flask.svg', content: 'Flask', colorsclr: "flaskclr"},
        {id: 2, icon: 'stack-icons/react.svg', content: 'ReactJS', colorsclr: "reactjsclr"},
        {id: 3, icon: 'stack-icons/semanticuireact.svg', content: 'Semantic UI', colorsclr: "suclr"},
        {id: 4, icon: 'stack-icons/bootstrap.svg', content: 'Bootstrap', colorsclr:"Bootstrapclr"},
        {id: 5, icon: 'stack-icons/jquery.svg', content: 'jQuary', colorsclr: "jQuaryclr"},
        {id: 6, icon: 'stack-icons/nodedotjs.svg', content: 'NodeJS', colorsclr:"NodeJSclr"},
        {id: 7, icon: 'stack-icons/django.svg', content: 'Django', colorsclr:"Djangoclr"},
        {id: 8, icon: 'stack-icons/dotnet.svg', content: '.NET Core', colorsclr: "NETclr"}
    ]

    const devopsstack = [
        {id: 1, icon: 'stack-icons/amazonaws.svg', content: 'AWS', colorsclr: "AWSclr"},
        {id: 2, icon: 'stack-icons/nginx.svg', content: 'Nginx', colorsclr: "Nginxclr"},
        {id: 3, icon: 'stack-icons/gunicorn.svg', content: 'Gunicorn', colorsclr: "Gunicornclr"},
        {id: 4, icon: 'stack-icons/git.svg', content: 'Git', colorsclr:"Gitclr"},
        {id: 5, icon: 'stack-icons/github.svg', content: 'Github', colorsclr: "Githubclr"},
        {id: 6, icon: 'stack-icons/codecov.svg', content: 'Codecov', colorsclr:"Codecovclr"},
        {id: 7, icon: 'stack-icons/travisci.svg', content: 'Travis Ci', colorsclr:"traviciclr"},
        {id: 8, icon: 'stack-icons/ssh.svg', content: 'SSH', colorsclr: "SSHclr"},
        {id: 9, icon: 'stack-icons/zenhub.svg', content: 'Zenhub', colorsclr:"Zenhubclr"},
        {id: 10, icon: 'stack-icons/docker.svg', content: 'Docker', colorsclr: "Dockerclr"},
        {id: 11, icon: 'stack-icons/vmware.svg', content: 'VMware', colorsclr:"VMwareclr"}
    ]

    const database = [
        {id: 1, icon: 'stack-icons/oracle.svg', content: 'Oracle SQL', colorsclr: "oracleclr"},
        {id: 2, icon: 'stack-icons/mysql.svg', content: 'MySQL', colorsclr: "mysqlclr"},
        {id: 3, icon: 'stack-icons/microsoftsqlserver.svg', content: 'MSSQL', colorsclr: "msclr"}
    ]

    const osstack = [
        {id: 1, icon: 'stack-icons/windows.svg', content: 'Windows', colorsclr: "windowsclr"},
        {id: 2, icon: 'stack-icons/macos.svg', content: 'Mac OS', colorsclr: "macclr"},
        {id: 3, icon: 'stack-icons/linux.svg', content: 'Linux/Unix', colorsclr: "linuxclr"},
        {id: 4, icon: 'stack-icons/ubuntu.svg', content: 'Ubuntu', colorsclr: "ubuntuclr"}
    ]

 
//technologies mapping the map
    const content = techstack.map((post) =>
    <li key={post.id} className="list-techno-inner" id={post.colorsclr}> 
    <img id = "techImgSize" src = {post.icon}></img><span id = "techImgTxt">{post.content}</span>
    </li>
  );

    const fwscontent = frameworksstack.map((post) =>
    <li key={post.id} className="list-techno-inner" id={post.colorsclr}> 
    <img id = "techImgSize" src = {post.icon}></img><span id = "techImgTxt">{post.content}</span>
    </li>
  );

    const dscontent = devopsstack.map((post) =>
    <li key={post.id} className="list-techno-inner" id={post.colorsclr}> 
    <img id = "techImgSize" src = {post.icon}></img><span id = "techImgTxt">{post.content}</span>
    </li>
  );
    
  const dbcontent = database.map((post) =>
    <li key={post.id} className="list-techno-inner" id={post.colorsclr}> 
    <img id = "techImgSize" src = {post.icon}></img><span id = "techImgTxt">{post.content}</span>
    </li>
  );

  const oscontent = osstack.map((post) =>
    <li key={post.id} className="list-techno-inner" id={post.colorsclr}> 
    <img id = "techImgSize" src = {post.icon}></img><span id = "techImgTxt">{post.content}</span>
    </li>
  );

  document.title = "About MIG"
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
                    <div>
                        <img className="profile-img" src="images/profile.jpg" alt="Profile Ivan"/>
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
                    <p>I’m a <b>software developer</b> who’s looking to expand upon the foundation built while completing <i>B.Sc (Honours) Computer Science degree at Ryerson University</i>. Throughout my studies I’ve had the pleasure of working and becoming fluent in a multitude of languages, gained an understanding of data structures, algorithms, networks, security and operating systems. I’ve also finished courses which covered computational complexity, artificial intelligence, reinforcement learning, data mining, web systems development, computer graphics, software verification and validation, software engineering, and software project management.
                    <br></br><br></br>Working at <i>Givex</i> allowed me to experience working as part of a team following the XP methodology. I got to develop new features for large clients and experience what it’s like working with a large system. Within the system, I dealt with complex issues with time-sensitive deadlines. Throughout my time there I got to handle design, database maintenance, back-end and front-end implementation, unit testing, and monitoring for errors. It taught me the importance of having proper documentation, and communication between co-workers when tackling new parts of the system. It also showed me that being constantly vigilant in testing is necessary and that sometimes innocuous changes might have unintended effects on legacy parts of the system.
                    <br></br><br></br>In 2019, I had a brief part-time opportunity at <i>Fuzzex</i> where I learned the importance of devops and testing. This was the first opportunity I had to actually apply the skills I learned in computer graphics and how an actual development cycle worked when working with a team. It also highlighted the importance of methodologies, frameworks and libraries while working under a tight time constraint. It also showed me how to properly document and write neat and comprehensible code.
                    <br></br><br></br>Currently I’m interested in expanding on my experience with certain <i>front-end languages</i>, however I don’t currently have a specific field of computer science under which I could categorize myself. I find every aspect interesting in its own way and I’m currently working on upgrading my understanding of Reinforcement Learning and theory of computation.</p>
                    </article>
                </div>
            </div>
        </section> 
        <div className="color-back-tech">
            <section>
                <About_Slider slides={Work_Info_Data.Experiences}/>    
                <div className="my-technologies-container">
                    <h2>Stack</h2>
                        <h3>Languages</h3>
                            <ul className="my-technologies-outer">{content}</ul>
                        <h3>Frameworks</h3>
                            <ul className="my-technologies-outer">{fwscontent}</ul>
                        <h3>DevOps</h3>
                            <ul className="my-technologies-outer">{dscontent}</ul>
                        <h3>Database</h3>
                            <ul className="my-technologies-outer">{dbcontent}</ul>
                        <h3>OS</h3>
                        <ul className="my-technologies-outer">{oscontent}</ul>
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