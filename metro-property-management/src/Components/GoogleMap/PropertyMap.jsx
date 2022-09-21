import React from 'react'
import { mapOptions } from './MapConfiguration';
import { useJsApiLoader } from '@react-google-maps/api';
import Map from './Map';

function PropertyMap() {
    const {isLoaded} = useJsApiLoader({
        id:mapOptions.googleMapApiKey,
        // googleMapsApiKey: mapOptions.googleMapApiKey,
        googleMapsApiKey:"AIzaSyD4hBbwulv5gx7S83sLQ1MzMkIpP-AVrv0"
    })
    return (
        <div>
            <Map isLoaded = {isLoaded} />
        </div>
    )
}

export default PropertyMap