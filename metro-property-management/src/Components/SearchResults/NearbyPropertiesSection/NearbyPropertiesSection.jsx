import React, { useState, useEffect, useMemo } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './NearbyPropertiesSection.module.css'

import PropertyCard from '../../PropertyCard/PropertyCard'

import leftCaret from '../../../images/left-caret.svg'
import rightCaret from '../../../images/right-caret.svg'

function NearbyPropertiesSection(props) {
  const items = props.properties;

  const propertyCards = items && items.slice(33, 35).map(property =>
    <div className={styles.card}>
      <PropertyCard key={property._id} propertyData={property} />
    </div>
  );

  return (
    <>
      <div className={styles['container']}>
        <span id={styles['section-heading']}> Check out cheaper rentals in nearby suburbs</span>
        <div className={styles['property-cards']}>{propertyCards}</div>
      </div>
    </>
  )
};

export default NearbyPropertiesSection