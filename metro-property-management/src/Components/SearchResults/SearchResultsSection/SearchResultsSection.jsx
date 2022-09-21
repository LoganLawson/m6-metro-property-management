import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './SearchResultsSection.module.css'

import Dropdown from 'react-dropdown';
import downCaret from '../../../images/down-caret-dark.svg'

import PropertyCard from '../../PropertyCard/PropertyCard'
import quickSortArray from '../quickSortArray.js'

function SearchResultsSection(props) {
  const [currentItems, setCurrentItems] = useState(null);
  const items = props.properties;
  const itemsPerPage  = props.itemsPerPage ;
  const itemOffset = props.itemOffset;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    props.onPageCountChange(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const propertyCards = currentItems && currentItems.map(property =>
    <div className={styles.card}>
      <PropertyCard key={property._id} propertyData={property} />
    </div>
  );

  const sortOptions = [
    'Featured', 'Rate', 'Bedrooms', 'Bathrooms', 'Carparks'
  ];

  function handleChange(e) {
    // set sort state here
    console.log(e.value)
  }


  console.log('current items', currentItems)
  console.log('all items', items)

  return (
    <>
      <div className={styles['results-1']}>
        <span id={styles['section-heading']}> We found {items.length} results for you</span>
        <div className={styles['result-options']}>
          <div className={styles['filter-dropdown']}> 
            <label>Sort by:</label>
            <Dropdown menuClassName={styles.dropdown} options={sortOptions} onChange={handleChange} value={sortOptions[0]} />
            <img src={downCaret} alt="" />
          </div>
          <div>Show map</div>
        </div>
        <div className={styles['property-cards']}>{propertyCards}</div>
      </div>
    </>
  )
};

export default SearchResultsSection