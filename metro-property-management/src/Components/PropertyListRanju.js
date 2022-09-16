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
        //setPropertySortedList(properties);
      }
    }
    fetchProperty()
  },[])
  
  function quickSort(){
    setPropertySortedList(properties);
    console.log("sort called");
    console.log(propertySortedList);
    return;
  }

  //Quick sort function
  // function quickSort(numArray,length = numArray.length,start=1){
  //   if(numArray.length < 2){
  //       return numArray; // base case
  //   }
  //   //const pivot = numArray[numArray.length-1];
  //   const pivot = numArray[0];
  //   const left  = [];
  //   const right = [];
  //   while (start < length) {
  //     if (numArray[start] < pivot){
  //       left.push(numArray[start])
  //     }
  //     else {
  //       right.push(numArray[start])
  //     }
  //   start++ //  incrementing start value
  //   }
  //   return [...quickSort(left), pivot, ...quickSort(right)]
  // }
  // console.log(quickSort([9,8,7,6,1,4,3,2,5]));
  //console.log(properties);

  return (
    <div className='property-list'>
      <Navbar/>
      <h1>Property List</h1>
      <button onClick={quickSort}>Click Sort</button>
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