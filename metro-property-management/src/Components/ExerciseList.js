import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import '../Styles/ExerciseList.css'
function Exercises() {
  const [exercise, setExercise] = useState(null);
  useEffect(()=>{
    const fetchExercise = async()=>{
      const response = await fetch('http://localhost:5000/exercises')
      const json = await response.json()

      if(response.ok){
        setExercise(json);
        console.log(json);
      }
    }
    fetchExercise()
  },[])
  return (
    <div className='exercise-list'>
      <Navbar/>
      <h1>Edit Exercise</h1>
      <table>
        <thead>
        <tr>
          <th className="border-top">Name</th>
          <th>Type</th>
          <th>Duration</th>
        </tr>
        </thead>
        <tbody>
        {exercise && exercise.map((exercise) => (
        <tr className="border-top">
          <td>
            <p key = {exercise._id}> {exercise.username} </p>
          </td>
          <td>
            <p key = {exercise._id}>  {exercise.description} </p>
          </td>
          <td>
            <p key = {exercise._id.toString()}>  {exercise.duration} </p>
          </td>
        </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default Exercises