import './App.css';
import "@fontsource/montserrat";
import Home from './Components/Home'
import LoganSort from './Components/LoganSort/LoganSort'
import BrandonSort from './Components/BrandonSort'
import RanjuSort from './Components/RanjuSort'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
				<Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
					<Route path="/Logan" element={<LoganSort/>} />
					<Route path="/Ranju" element={<RanjuSort/>} />
					<Route path="/Brandon" element={<BrandonSort/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
