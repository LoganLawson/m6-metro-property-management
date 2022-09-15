import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import '../Styles/PropertyList.css'
function PropertyListRanju() {
  const [properties, setProperty] = useState(null);
  const [propertySortedList, setPropertySortedList] = useState(null);

  useEffect(()=>{
    const fetchProperty = async()=>{
      const response = await fetch('http://localhost:5000/property')
      const json = await response.json()

      if(response.ok){
        setProperty(json);
      }
    }
    fetchProperty()
  },[])
  
  //Quick sort function
  function quickSort(proper,length = proper.length-1,start=0){
    if(proper.length < 2){
        return proper; // base case
    }
    const pivot = proper[proper.length-1];
    const left  = [];
    const right = [];
    while (start < length) {
      if (proper[start] < pivot){
        left.push(proper[start])
      }
      else {
        right.push(proper[start])
      }
    start++ //  incrementing start value
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
  }
  //console.log(quickSort([5,8,7,9,6,4,3,2,1]));
  //console.log(properties);

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