import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './SearchResultsSection.module.css';
import dropdownStyles from './Dropdown.module.js'

import downCaret from '../../../images/down-caret-dark.svg';
import Select from 'react-select'

import PropertyCard from '../../PropertyCard/PropertyCard';

function SearchResultsSection(props) {
  const [currentItems, setCurrentItems] = useState(null);
  const items = props.properties;
  const itemsPerPage = props.itemsPerPage;
  const itemOffset = props.itemOffset;


  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    props.onPageCountChange(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items, props]);

  const propertyCards = currentItems && currentItems.map(property =>
    <div className={styles.card}>
      <PropertyCard key={property._id} propertyData={property} />
    </div>
  );

  const sortOptions = [
    { label: 'Featured', value: 'title' },
    { label: 'Bedrooms', value: 'bedrooms' },
    { label: 'Bathrooms', value: 'bathrooms' },
    { label: 'Carparks', value: 'carparks' },
    { label: 'Rate', value: 'rate' },
  ];

  function handleChange(e) {
    console.log(e)
    props.onSortOptionChange(e)
  }

  return (
    <>
      <div className={styles['results-1']}>
        <span id={styles['section-heading']}> We found {items.length} results for you</span>
        <div className={styles['result-options']}>
          <div className={styles['dropdown']}>
            <span>Sort by:</span>
            <Select 
              styles={dropdownStyles} 
              name={props.sortOption} 
              options={sortOptions} 
              onChange={handleChange}
              isSearchable={0}
              />
          </div>
          <div>Show map</div>
        </div>
        <div className={styles['property-cards']}>{propertyCards}</div>
      </div>
    </>
  )
};

export default SearchResultsSection