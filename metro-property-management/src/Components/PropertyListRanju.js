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
      else{
        console.log("reading error");
      }
    }
    fetchProperty()
  },[])

  function ApplySort(){
    const listSorted = quickSort(properties);
    setPropertySortedList(listSorted);
  }

  function quickSort(listToSort){
    if(listToSort.length < 2){
      return listToSort;
    }
    const pivot = listToSort[listToSort.length - 1];
    let left = [];
    let right = [];
    let index = 0;
    while(index < listToSort.length-1){
      if( listToSort[index].rate > pivot.rate){
        left.push(listToSort[index])
      }
      else{
        right.push(listToSort[index])
      }
      index++;
    }
    const sortedlist = [...quickSort(left), pivot, ...quickSort(right)];
    return (sortedlist);
  }

  return (
    <div className='property-list'>
      <Navbar/>
      <h1>Property List</h1>
      <button onClick={ApplySort}>Click Sort</button>
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
        {propertySortedList && propertySortedList.map((propertySortedList) => (
        <tr className="border-top" key = {propertySortedList._id}>
          <td> <p> {propertySortedList.title} </p> </td>
          <td> <p> {propertySortedList.rate} </p> </td>
          <td> <p> {propertySortedList.bedrooms} </p> </td>
          <td> <p> {propertySortedList.bathrooms} </p> </td>
          <td> <p> {propertySortedList.city} </p> </td>
          <td> <p> {propertySortedList.pets} </p> </td>
        </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default PropertyListRanju