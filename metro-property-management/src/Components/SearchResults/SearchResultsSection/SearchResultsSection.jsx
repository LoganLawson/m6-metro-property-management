import React, { useState, useEffect, useMemo } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './SearchResultsSection.module.css'

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

  console.log('current items', currentItems)
  console.log('all items', items)

  return (
    <>
      <div className={styles['results-1']}>
        <span id={styles['section-heading']}> We found {items.length} results for you</span>
        <div className={styles['result-options']}>
          <div>Sort by:</div><div>Show map</div>
        </div>
        <div className={styles['property-cards']}>{propertyCards}</div>
      </div>
    </>
  )
};

export default SearchResultsSection