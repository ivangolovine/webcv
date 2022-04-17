import Home from './pages/Home';
import Examples from './pages/Examples';
import HireUs from './pages/HireUs';
import About from './pages/About'

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
        <Route path="/Examples" element={<Examples/>} />
        <Route path="/Hire" element={<HireUs />} />
        <Route path="/About" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;