import React, { useMemo } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from "./ListingMap.module.css";
import SearchAmenities from './SearchAmenities';

function ListingMap() {
  const center = useMemo(() => (
    {
    lat: -36.848437,
    lng: 174.762261
  }), []);
    return (
      <div className={styles.googleMapContainer}>
        <LoadScript
          googleMapsApiKey="AIzaSyA2G90mZWnYQquEiOoGHR0RzqQBf62bYw8"
        >
          <GoogleMap
            mapContainerClassName={styles.mapContainer}
            center={center}
            zoom={10}
          >
          {/* Marker not working atm */}
          <Marker position={center}> 
          </Marker>
          </GoogleMap>
        </LoadScript>
          <div className={styles.searchAmenities}>
            <SearchAmenities/>
          </div>
      </div>
    )
  }
export default ListingMap

