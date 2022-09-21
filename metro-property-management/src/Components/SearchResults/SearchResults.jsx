import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './SearchResults.module.css'

import PropertyCard from '../PropertyCard/PropertyCard'
import quickSortArray from './quickSortArray.js'
import Navbar from '../Header/Navbar';
import SearchTags from './Searchtags/SearchTags';
import SearchBar from './SearchBar/SearchBar';
import Footer from '../Footer/Footer'

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
      title: "406/147-149 Victoria Street West City Centre (Auckland City), Auckland",
      imglinks: ['https://stonewood.co.nz/wp-content/uploads/elementor/thumbs/Queenstown-Franchise-pp2wouxopkdjjz7op90pgmrjgqxcdm8jaa56lsuu8s.jpg']
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
        <PropertyCard key={property._id} propertyData={property}/>
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
    <div className={styles['header']}>
    <Navbar />
    </div>
    <div className={styles['search']}>
      <SearchBar locationTags={['Auckland']}/>
      <SearchTags className={styles['dark-tags']} tags={['sick', 'dope', 'really nice', 'house']}/>
    </div>
    <div className={styles['results-1']}>
      <span> We found {propertyCards.length} results for you</span>
      <div className={styles['result-options']}>
        <div>Sort by:</div>
        <div>Show map</div>
      </div>
      <div className={styles['property-cards']}>{propertyCards}</div>
    </div>
    <div className={styles['nearby']}>section</div>
    <div className={styles['results-2']}>section</div>
    <div className={styles['footer']}>
      <Footer />
    </div>
    </>
  )
};

export default SearchResults