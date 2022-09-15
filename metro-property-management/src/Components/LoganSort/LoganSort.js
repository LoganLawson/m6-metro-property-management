import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './LoganSort.module.css'

import PropertyCard from './PropertyCard'

function LoganSort() {
  const [properties, setProperties] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios.get('http://localhost:3005/properties/').then((response) => {
      setProperties(response.data)
      console.log(response.data)
    }).catch(error => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  console.log(properties[0])
  // const propertyCards = properties.map(({property}) => {
  //   <span key={property._id}> {property.title} </span>
  // });

  return (
    <div>
        <h2>Quick Sort Logan</h2>
        <Link to='/Home'> <h6>home</h6> </Link>
        <PropertyCard propertyData={properties[0]} imageSource={'https://stonewood.co.nz/wp-content/uploads/elementor/thumbs/Queenstown-Franchise-pp2wouxopkdjjz7op90pgmrjgqxcdm8jaa56lsuu8s.jpg'}/>
        <span>hello</span>

        {/* 
        - pass props down from property data from db
        - dynamically create compoonent based on property data from db
        - 
         */}
    </div>
  )
};

export default LoganSort