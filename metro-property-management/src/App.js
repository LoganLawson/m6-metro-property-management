import './App.css';
import "@fontsource/montserrat";
import Home from './Components/Home'
import SearchResults from './Components/SearchResults/SearchResults'
import BrandonSort from './Components/BrandonSort'
import PropertyListRanju from './Components/RanjuSort/PropertyListRanju';
import ApplicationForm from './Components/ApplicationForm';
import ListingTemp from './Components/ListingTemp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
				<Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/ApplicationForm" element={<ApplicationForm/>} />
					<Route path="/SearchResults" element={<SearchResults/>} />
					<Route path="/Brandon" element={<BrandonSort/>} />
					<Route path="/properties" element={<PropertyListRanju/>} />
					<Route path="/listingtemp" element={<ListingTemp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
