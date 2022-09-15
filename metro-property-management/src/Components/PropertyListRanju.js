import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import '../Styles/PropertyList.css'
function PropertyListRanju() {
  const [properties, setProperty] = useState(null);
  useEffect(()=>{
    const fetchExercise = async()=>{
      const response = await fetch('http://localhost:5000/property')
      const json = await response.json()

      if(response.ok){
        setProperty(json);
        //console.log(json);
      }
    }
    fetchExercise()
  },[])
  return (
    <div className='property-list'>
      <Navbar/>
      <h1>Property List</h1>
      <table>
        <thead>
        <tr>
          <th className="border-top">Address</th>
          <th>Rate</th>
          <th>Bedrooms</th>
          <th>Bathrooms</th>
          <th>City</th>
          <th>Pets</th>
        </tr>
        </thead>
        <tbody>
        {properties && properties.map((property) => (
        <tr className="border-top">
          <td> <p key = {property._id}> {property.title} </p> </td>
          <td> <p key = {property._id}>  {property.rate} </p> </td>
          <td> <p key = {property._id}>  {property.bedrooms} </p> </td>
          <td> <p key = {property._id}>  {property.bathrooms} </p> </td>
          <td> <p key = {property._id}>  {property.city} </p> </td>
          <td> <p key = {property._id}>  {property.pets} </p> </td>
        </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default PropertyListRanju