import React from 'react';
import styles from './PropertyCard.module.css'
import bedGlyph from '../../images/bed.svg'
import bathGlyph from '../../images/bath.svg'
import carGlyph from '../../images/car.svg'
import missingImage from '../../images/missing-image.webp'
import { useNavigate } from 'react-router-dom';

// const imsrc = 'https://s.oneroof.co.nz/image/55/0b/550bd7407b8c6e767e84b27c3645a4f8.jpg'
function PropertyCard(props) {
  const navigate = useNavigate();
  const imsrc = props.propertyData.imglinks && JSON.parse(props.propertyData.imglinks)[0] ? JSON.parse(props.propertyData.imglinks)[0] : missingImage

  const handleClick = () => {
    console.log('click')
    navigate(`/Tenants/Rentals/Listing/${props.propertyData._id}`)
  }

  return (
    <div onClick={handleClick} className={styles.container}>
      <div className={styles['image-section']}>
        <img src={imsrc} alt={`image of ${props.propertyData.title}`} />
      </div>
      <div className={styles['info-section']}>
        <span className={styles.title}>{props.propertyData.title}</span>
        <span className={styles.rate}>${props.propertyData.rate} per week</span>
        <div className={styles['info-banner']}>
          <img src={bedGlyph} alt="bed glyph" />{props.propertyData.bedrooms}
          <img src={bathGlyph} alt="bath glyph" />{props.propertyData.bathrooms}
          <img src={carGlyph} alt="car glyph" />{props.propertyData.Parking}
        </div>
      </div>

    </div>
  )
};

export default PropertyCard