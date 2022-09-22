import React from 'react';
import styles from './PropertyCard.module.css'
import bedGlyph from '../../images/bed.svg'
import bathGlyph from '../../images/bath.svg'
import carGlyph from '../../images/car.svg'

function PropertyCard(props) {

  return (
    <div className={styles.container}>
      <div className={styles['image-section']}>
        <img src={props.imageSource} alt='image of property'/>
      </div>
      <div className={styles['info-section']}>
        <span className={styles.title}>{props.propertyData.title}</span>
        <span className={styles.rate}>${props.propertyData.rate} per week</span>
        <div className={styles['info-banner']}>
          <img src={bedGlyph} alt="bed glyph" />{props.propertyData.bedrooms}
          <img src={bathGlyph} alt="bath glyph" />{props.propertyData.bathrooms}
          <img src={carGlyph} alt="car glyph" />1
        </div>
      </div>
        
    </div>
  )
};

export default PropertyCard