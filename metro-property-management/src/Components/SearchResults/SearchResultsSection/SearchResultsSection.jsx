import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './SearchResultsSection.module.css';
import dropdownStyles from './Dropdown.module.js'

import downCaret from '../../../images/down-caret-dark.svg';
import Select from 'react-select'
import ToggleButton from 'react-toggle-button'
import PropertyMap from '../../GoogleMap/PropertyMap';

import PropertyCard from '../../PropertyCard/PropertyCard';

function SearchResultsSection(props) {
  const [currentItems, setCurrentItems] = useState(null);
  const [isMapOpen, setIsMapOpen] = useState(false);
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

  // toggle map
  const handleMapToggle = (e) => {
    setIsMapOpen(!isMapOpen)
    if (!isMapOpen) {
      window.scrollTo({top: 500, left: 0, behavior: 'smooth'})
    } else {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    };
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
              onChange={props.onSortOptionChange}
              isSearchable={0}
            />
          </div>
          <div id={styles['show-map']}>
            <span>Sow Amenity Map</span>
            <ToggleButton
              value={isMapOpen}
              onToggle={handleMapToggle}
            />
          </div>
        </div>
          {isMapOpen && <div className={styles['map-container']}><PropertyMap /></div>}
        <div className={styles['property-cards']}>{propertyCards}</div>
      </div>
    </>
  )
};

export default SearchResultsSection