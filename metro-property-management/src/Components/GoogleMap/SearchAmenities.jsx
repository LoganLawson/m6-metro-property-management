import React from 'react'
import styles from "./SearchAmenities.module.css"
import transportlogo from "./map-images/transportlogo.png";
import dinelogo from "./map-images/dinelogo.png";
import gymlogo from "./map-images/gymlogo.png";
import parkslogo from "./map-images/parkslogo.png";
import supermarketlogo from "./map-images/supermarketlogo.png";
import airportlogo from "./map-images/airportlogo.png";
import hospitallogo from "./map-images/hospitallogo.png";
import churchlogo from "./map-images/churchlogo.png";

function SearchAmenities() {
  return (
    <div className={styles.amenitiesBox}>
        <div className={styles.heading}>SearchAmenities</div>
        <div className={styles.amenities}> <input type="radio" id="publicTransport" name="tp" value="pt" ></input><label>Public Transport</label><img src={transportlogo} alt="dine" /> </div>
        <div className={styles.amenities}> <input type="radio" id="publicTransport" name="tp" value="pt" ></input><label>Schools</label> </div>
        <div className={styles.amenities}> <input type="radio" id="publicTransport" name="tp" value="pt" ></input><label>Eateries</label> <img src={dinelogo} alt="dine" /></div>
        <div className={styles.amenities}> <input type="radio" id="publicTransport" name="tp" value="pt" ></input><label>Gyms</label><img src={gymlogo} alt="dine" /> </div>
        <div className={styles.amenities}> <input type="radio" id="publicTransport" name="tp" value="pt" ></input><label>Parks</label><img src={parkslogo} alt="dine" /> </div>
        <div className={styles.amenities}> <input type="radio" id="publicTransport" name="tp" value="pt" ></input><label>Super Markets</label><img src={supermarketlogo} alt="dine" /> </div>
        <div className={styles.amenities}> <input type="radio" id="publicTransport" name="tp" value="pt" ></input><label>Airports</label><img src={airportlogo} alt="dine" /> </div>
        <div className={styles.amenities}> <input type="radio" id="publicTransport" name="tp" value="pt" ></input><label>Hospitals</label><img src={hospitallogo} alt="dine" /> </div>
        <div className={styles.amenities}> <input type="radio" id="publicTransport" name="tp" value="pt" ></input><label>Churches</label><img src={churchlogo} alt="dine" /> </div>
    </div>
  )
}

export default SearchAmenities