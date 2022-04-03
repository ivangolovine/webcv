import Home from './pages/Home';
import Credits from './pages/Credits'
import Experience from './pages/Experience';
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
        <Route path="/Credits" element={<Credits />} />
        <Route path="/Experience" element={<Experience/>}/>
      </Routes>
    </div>
  );
}

export default App;