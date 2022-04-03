import Header from "../components/Header";
import Footer from "../components/Footer"
import Nav from "../components/Nav";

function Experience(){
    return (
        <div className="Experience">
        <Nav />
        <Header text="Experience"/>
        <main>
        <div>
          <div className="cont-col">
            <p>Ivan Golovine</p>
            <p>500813431</p>
            <p>Backend, Hosting, Deployement, Components, Routing (Page 4)</p>
          </div>
        </div>
        </main>
        <Footer/>
      </div>
    );
  }

  export default Experience;