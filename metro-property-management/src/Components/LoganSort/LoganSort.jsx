import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './LoganSort.module.css'

import PropertyCard from './PropertyCard'

const imsrc = 'https://stonewood.co.nz/wp-content/uploads/elementor/thumbs/Queenstown-Franchise-pp2wouxopkdjjz7op90pgmrjgqxcdm8jaa56lsuu8s.jpg'

function LoganSort() {
  const [properties, setProperties] = React.useState([
    {
      _id: "63214eb65b3bfca33192297e",
      bathrooms: 1,
      bedrooms: 1,
      city: "Auckland",
      formatted: "406/147 Victoria Street West, Auckland Central, Auckland",
      id: "property-2799106",
      lat: -36.847513,
      locality: "Auckland Central",
      lon: 174.759537,
      lookup: "406/147-149 Victoria Street West, Auckland",
      meshblock: 4012591,
      pets: "no",
      postcode: 1010,
      rate: 540,
      region: "Auckland",
      street: "Victoria Street West",
      street_number: "406/147",
      title: "406/147-149 Victoria Street West City Centre (Auckland City), Auckland"
    }]);
  const [error, setError] = React.useState(null);
  // const []

  React.useEffect(() => {
    axios.get('http://localhost:3005/properties/').then((response) => {
      setProperties(response.data)
      // console.log(response.data)
    }).catch(error => {
        setError(error);
      });
  }, []);
  if (error) return `Error: ${error.message}`;

  const propertyCards = properties.map(property =>
    <>
      <PropertyCard propertyData={property} imageSource={imsrc}/>
    </>
  );

  // order properties

  return (
    <div className={styles.container}>
        <h2>Quick Sort Logan</h2>
        <Link to='/Home'> <h6>home</h6> </Link>
        <div className={styles['cards-section']}>
          {propertyCards}
        </div>
        
        <span>hello</span>
    </div>
  )
};

export default LoganSort