import './App.css';
import Home from './Components/Home'
import LoganSort from './Components/LoganSort'
import BrandonSort from './Components/BrandonSort'
import RanjuSort from './Components/RanjuSort'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ExerciseList from './Components/exercise-list.component';
// import EditExercise from './Components/edit-exercise.component';
// import CreateExercise from './Components/create-exercise.component';
// import CreateUser from './Components/create-user.component';

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
					{/* <Route path="/exercisehome" exact component={ExerciseList} />
					<Route path="/edit/:id" component={EditExercise} />
					<Route path="/create" component={CreateExercise} />
					<Route path="/user" component={CreateUser} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
