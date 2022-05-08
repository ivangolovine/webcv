import About from './pages/About';
import Portfolio from './pages/Portfolio';
import HireUs from './pages/HireUs';
import Home from './pages/Home'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/Hire" element={<HireUs />} />
        <Route path="/About" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;