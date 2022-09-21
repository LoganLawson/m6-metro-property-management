/* eslint-disable no-undef */
import React, { useMemo } from 'react';
import SearchAmenities from './SearchAmenities';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from "./ListingMap.module.css";

function ListingMap() {
  const center = useMemo(() => (
    {
    lat: -36.848437,
    lng: 174.762261
  }), []);
    return (
      // <div>
      //   Maps
      // </div>
      <div className={styles.googleMapContainer}>
        <LoadScript
          googleMapsApiKey="AIzaSyD4hBbwulv5gx7S83sLQ1MzMkIpP-AVrv0"
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