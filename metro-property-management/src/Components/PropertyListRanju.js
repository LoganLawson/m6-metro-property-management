import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import '../Styles/PropertyList.css'
function PropertyListRanju() {
  const [properties, setProperty] = useState(null);
  const [propertySortedList, setPropertySortedList] = useState([]);

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

  function updateList(){
    console.log(properties);
  }
  function tocall(){
    console.log("the sorted List");
    setPropertySortedList(quickSort(properties));
    console.log(quickSort(properties));
  }
  function quickSort(listToSort){
    let sortedlist = [];
    const length = listToSort.length;
    let start = 1;
    const pivot = 0;
    if(listToSort.length<2){
      setPropertySortedList(listToSort);
      return;
    }
    const left = [];
    const right = [];
    while(start <= length-1){
      if( listToSort[start].rate < listToSort[pivot].rate){
        left.push(listToSort[start])
      }
      else{
        right.push(listToSort[start])
      }
      start++;
    }
    let templeft = [...quickSort(left)];
    let tempright = [...quickSort(right)];
    sortedlist = [templeft, pivot, tempright];
    return (sortedlist);
  }

  //Quicksort function
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
  //     start++ //  incrementing start value
  //   }
  //   let sorted = [...quickSort(left), pivot, ...quickSort(right)];
  //   return sorted;
  // }
  // console.log(quickSort([9,3,7,6,1,4,8,2,5]));

  return (
    <div className='property-list'>
      <Navbar/>
      <h1>Property List</h1>
      <button onClick={updateList}>Click Update</button>
      <button onClick={tocall}>Click Sort</button>
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
        <tr className="border-top" key = {property._id}>
          <td> <p> {property.title} </p> </td>
          <td> <p> {property.rate} </p> </td>
          <td> <p> {property.bedrooms} </p> </td>
          <td> <p> {property.bathrooms} </p> </td>
          <td> <p> {property.city} </p> </td>
          <td> <p> {property.pets} </p> </td>
        </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default PropertyListRanju