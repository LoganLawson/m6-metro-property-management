import './App.css';
import "@fontsource/montserrat";
import Home from './Components/Home'
import LoganSort from './Components/LoganSort/LoganSort'
import BrandonSort from './Components/BrandonSort'
import RanjuSort from './Components/RanjuSort'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExerciseList from './Components/ExerciseList';
import EditExercise from './Components/EditExercise';
import CreateExercise from './Components/CreateExercise';
import CreateUser from './Components/CreateUser';
import PropertyListRanju from './Components/PropertyListRanju';

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
					<Route path="/exercisehome" element={<ExerciseList/>} />
					<Route path="/edit/:id" element={<EditExercise/>} />
					<Route path="/create" element={<CreateExercise/>} />
					<Route path="/user" element={<CreateUser/>} />
					<Route path="/properties" element={<PropertyListRanju/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
