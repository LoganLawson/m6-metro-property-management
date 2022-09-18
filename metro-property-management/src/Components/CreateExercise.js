import React, {useState} from 'react'
import Navbar from './Navbar'

function CreateExercise() {
    const [exercise, setExercise] = useState([]);
  return (
    <div>
        <Navbar/>
        <h1>Create Exercise</h1>
    </div>
  )
}

export default CreateExercise