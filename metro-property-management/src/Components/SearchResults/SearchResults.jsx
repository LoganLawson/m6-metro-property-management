import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './SearchResults.module.css'

import PropertyCard from '../PropertyCard/PropertyCard'
import quickSortArray from './quickSortArray.js'
import Navbar from '../Header/Navbar';
import SearchTags from './Searchtags/SearchTags';
import Footer from '../Footer/Footer'

const imsrc = 'https://stonewood.co.nz/wp-content/uploads/elementor/thumbs/Queenstown-Franchise-pp2wouxopkdjjz7op90pgmrjgqxcdm8jaa56lsuu8s.jpg'

function SearchResults() {
  const [searchTags, setSearchTags] = React.useState([])
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
      <div className={styles.card}>
        <PropertyCard key={property._id} propertyData={property} imageSource={imsrc}/>
      </div>
  );

  const sort = (e) => {
    e.preventDefault();
    console.log('unsorted')
    console.log(properties)
    console.log('sorted');
    setProperties(quickSortArray(properties, 'title'))
  }

  return (
    <>
    <Navbar />
    <SearchTags className={styles['dark-tags']} tags={['sick', 'dope', 'really nice', 'house']}/>
    <div className={styles.container}>
        <h2>Quick Sort Logan</h2>
        <Link to='/Home'> <h6>home</h6> </Link>
        <button onClick={sort}>sort</button>
        <div className={styles['cards-section']}>
          {propertyCards}
        </div>
    </div>
    <Footer />
    </>
  )
};

export default SearchResults