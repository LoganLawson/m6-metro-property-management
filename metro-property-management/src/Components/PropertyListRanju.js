import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import '../Styles/PropertyList.css'
function PropertyListRanju() {
  const [propertySortedList, setPropertySortedList] = useState(null);
  const [properties, setProperty] = useState(propertySortedList);

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

  function ApplySort(category)
  {
    let listSorted = [];
    switch(category){
      case "rates":
      listSorted = quickSortRates(properties);
      setPropertySortedList(listSorted);
      break;
    case "bedrooms":
      listSorted = quickSortBedrooms(properties);
      setPropertySortedList(listSorted);
      break;
    case "bathrooms":
      listSorted = quickSortBathrooms(properties);
      setPropertySortedList(listSorted);
      break;
    case "pets":
      listSorted = quickSortPets(properties);
      setPropertySortedList(listSorted);
      break;
    default:
      break;
    }
  }

  function quickSortRates(listToSort){
    if(listToSort.length < 2){
      return listToSort;
    }
    const pivot = listToSort[listToSort.length - 1];
    let left = [];
    let right = [];
    let index = 0;
    while(index < listToSort.length-1){
      if( listToSort[index].rate < pivot.rate){
        left.push(listToSort[index])
      }
      else{
        right.push(listToSort[index])
      }
      index++;
    }
    const sortedlist = [...quickSortRates(left), pivot, ...quickSortRates(right)];
    return (sortedlist);
  }

  function quickSortBedrooms(listToSort){
    if(listToSort.length < 2){
      return listToSort;
    }
    const pivot = listToSort[listToSort.length - 1];
    let left = [];
    let right = [];
    let index = 0;
    while(index < listToSort.length-1){
      if( listToSort[index].bedrooms > pivot.bedrooms){
        left.push(listToSort[index])
      }
      else{
        right.push(listToSort[index])
      }
      index++;
    }
    const sortedlist = [...quickSortBedrooms(left), pivot, ...quickSortBedrooms(right)];
    return (sortedlist);
  }

  function quickSortBathrooms(listToSort){
    if(listToSort.length < 2){
      return listToSort;
    }
    const pivot = listToSort[listToSort.length - 1];
    let left = [];
    let right = [];
    let index = 0;
    while(index < listToSort.length-1){
      if( listToSort[index].bathrooms > pivot.bathrooms){
        left.push(listToSort[index])
      }
      else{
        right.push(listToSort[index])
      }
      index++;
    }
    const sortedlist = [...quickSortBedrooms(left), pivot, ...quickSortBedrooms(right)];
    return (sortedlist);
  }

  function quickSortPets(listToSort){
    if(listToSort.length < 2){
      return listToSort;
    }
    const pivot = listToSort[listToSort.length - 1];
    let left = [];
    let right = [];
    let index = 0;
    while(index < listToSort.length-1){
      if( listToSort[index].pets > pivot.pets){
        left.push(listToSort[index])
      }
      else{
        right.push(listToSort[index])
      }
      index++;
    }
    const sortedlist = [...quickSortBedrooms(left), pivot, ...quickSortBedrooms(right)];
    return (sortedlist);
  }

  return (
    <div className='property-list'>
      <Navbar/>
      <h1>Property List</h1>
      <button onClick={() => ApplySort('rates')}>Load Properties</button>
      <table>
        <thead>
        <tr>
          <th className="border-top">Address</th>
          <th><button onClick={() => ApplySort('rates')}>Rates</button></th>
          <th><button onClick={() => ApplySort('bedrooms')}>Bedrooms</button></th>
          <th><button onClick={() => ApplySort('bathrooms')}>Bathrooms</button></th>
          <th><button onClick={() => ApplySort('city')}>City</button></th>
          <th><button onClick={() => ApplySort('pets')}>Pets</button></th>
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