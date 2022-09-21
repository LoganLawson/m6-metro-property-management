import React, {useState} from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import DineMarker from './map-images/dine.png';
import ParkMarker from './map-images/parks.png';
import SupermarketMarker from './map-images/supermarket.png';
import FuelMarker from './map-images/fuel.png';
import styles from './Map.module.css';
import { mapOptions } from "./MapConfiguration";
import SearchAmenities from './SearchAmenities';


const Map = (props) => {
    const {isLoaded} = props;
    const [selectedMarker, setSelectedMarker] = useState("");
    
    const containerStyle = {
        width:"1600px",
        height:"800px",
    };
    const center = {
        lat: -36.84647521951465, 
        lng: 174.7712560128732,
    };
    const mrhq = {
        lat: -36.845989335310804, 
        lng: 174.76562731526622
    };
    const markers = [
        {
            name:"location-1",
            status:"park",
            location:{
                lat:-36.846203951976854, 
                lng: 174.76270906013056
            }
        },
        {
            name:"location-2",
            status: "fuel",
            location:{
                lat:-36.843714101132186,
                lng: 174.76424332394768
            }
        },
        {
            name:"location-3",
            status:"supermarket",
            location:{
                lat:-36.846470132427555, 
                lng: 174.76642125759273
            }
        },
    ]
    const waterStyle = [
        {
            featureType:"water",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#dbe2d2",
                },
            ],
        },
    ];
    return (isLoaded && (
        <div className={styles.googleMapContainer}>
            <GoogleMap 
            // mapContainerStyle={containerStyle}
            mapContainerClassName={styles.mapContainer} 
            center={center} 
            zoom={20}
            options={
                {
                    // mapTypeControl: false,
                    //mapTypeId: 'satellite',
                    mapTypeId: 'terrain',
                    // mapTypeId: 'hybrid',
                    // fullscreenControl: false,
                    // streetViewControl: false,
                    zoomControl: false,
                    disableDefaultUI: true,
                    draggable: true,
                    navigationControl: false,
                    styles: mapOptions.mapTheme,
                }
            }
            >
                {/* <Marker position={center}/>
                <Marker position={mrhq}/> */}
                {markers.map((marker) => {
                    return (
                        <div key = {marker.name}>
                            <Marker position={marker.location} options = {{
                                icon: 
                                marker.status==="park" 
                                ? ParkMarker
                                :marker.status === "fuel" 
                                ? FuelMarker
                                :marker.status === "supermarket" 
                                ? SupermarketMarker:"" ,
                            }}
                            onClick={()=>{
                                setSelectedMarker(marker);
                            }}
                            />
                        </div>
                    );
                })}
                {selectedMarker && (
                <InfoWindow position={selectedMarker.location} options = {{
                    pixelOffset:new window.google.maps.Size(0, -40),
                }}>
                    <div>
                    <h1>location -{selectedMarker.name}</h1>
                    <h1>status -{selectedMarker.status}</h1>
                    <button onClick={()=>{setSelectedMarker("")}}>Close</button>
                    </div>
                </InfoWindow>
                )}
            </GoogleMap>
            <div className={styles.searchAmenities}>
                <SearchAmenities/>
            </div>
        </div>
    )
    );
};
export default Map;