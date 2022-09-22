import "./App.css";
import "@fontsource/montserrat";
import Home from "./Components/Pages/Home";
import SearchResultsPage from "./Components/SearchResults/SearchResultsPage";
import BrandonSort from "./Components/BrandonSort";
import PropertyListRanju from "./Components/RanjuSort/PropertyListRanju";
import ApplicationForm from "./Components/ApplicationForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExerciseList from "./Components/ExerciseList";
import EditExercise from "./Components/EditExercise";
import CreateExercise from "./Components/CreateExercise";
import CreateUser from "./Components/CreateUser";
import PropertyListing from "./Components/Pages/PropertyListing";
import RanjuSort from "./Components/RanjuSort";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/SearchResults" element={<SearchResultsPage />} />
          <Route path="/Ranju" element={<RanjuSort />} />
          <Route path="/ApplicationForm" element={<ApplicationForm />} />
          <Route path="/Brandon" element={<BrandonSort />} />
          <Route path="/exercisehome" element={<ExerciseList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
          <Route path="/properties" element={<PropertyListRanju />} />
          <Route
            path="/property-listing/:propertyId"
            element={<PropertyListing />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
