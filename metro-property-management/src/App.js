import "./App.css";
import "@fontsource/montserrat";
import GoogleMapTemp from "./Components/GoogleMapTemp";
import Home from "./Components/Home";
import SearchResultsPage from "./Components/SearchResults/SearchResultsPage";
import BrandonSort from "./Components/BrandonSort";
import PropertyListRanju from "./Components/RanjuSort/PropertyListRanju";
import ApplicationForm from "./Components/ApplicationForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropertyListing from "./Components/Pages/PropertyListing";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/googlemaptemp" element={<GoogleMapTemp />} />
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Tenants/Rentals" element={<SearchResultsPage />} />
          <Route path="/ApplicationForm" element={<ApplicationForm />} />
          <Route path="/Brandon" element={<BrandonSort />} />
          <Route path="/properties" element={<PropertyListRanju />} />
          <Route
            path="/Tenants/Rentals/property-listing/:propertyId"
            element={<PropertyListing />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
