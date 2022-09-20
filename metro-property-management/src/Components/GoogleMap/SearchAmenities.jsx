import React from 'react'
import styles from "./SearchAmenities.module.css"

function SearchAmenities() {
  return (
    <div className={styles.amenitiesBox}>
        <div className={styles.heading}>SearchAmenities</div>
        <div className={styles.amenities}> <input type="radio" id="publicTransport" name="tp" value="pt" checked></input><label>Public Transport</label> </div>
        <div className={styles.amenities}> <input type="radio" id="publicTransport" name="tp" value="pt" checked></input><label>Schools</label> </div>
        <div className={styles.amenities}> <input type="radio" id="publicTransport" name="tp" value="pt" checked></input><label>Eateries</label> </div>
        <div className={styles.amenities}> <input type="radio" id="publicTransport" name="tp" value="pt" checked></input><label>Gyms</label> </div>
        <div className={styles.amenities}> <input type="radio" id="publicTransport" name="tp" value="pt" checked></input><label>Parks</label> </div>
        <div className={styles.amenities}> <input type="radio" id="publicTransport" name="tp" value="pt" checked></input><label>Super Markets</label> </div>
        <div className={styles.amenities}> <input type="radio" id="publicTransport" name="tp" value="pt" checked></input><label>Airports</label> </div>
        <div className={styles.amenities}> <input type="radio" id="publicTransport" name="tp" value="pt" checked></input><label>Hospitals</label> </div>
        <div className={styles.amenities}> <input type="radio" id="publicTransport" name="tp" value="pt" checked></input><label>Churches</label> </div>
    </div>
  )
}

export default SearchAmenities