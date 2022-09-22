import React, { useState } from "react";
import styles from './PropertySearchPopup.module.css';
import DropDown from "./DropDown";

function PropertySearchPopup(){
    const [showDropDown, setShowDropDown] = useState(false);
    const [selectDistrict, setSelectDistrict] = useState("");
    const [selectSuburb, setSelectSuburb] = useState("");
    const districts = () => {
        return ["Auckland central", "North Shore", "South Auckland", "Papakura", "Pukekohe", "West Auckland", "Rodney"];
    };
    const suburbs = () =>{
        return["Grey Lynn","Herne Bay","Hillsborough","Kingsland","Kohimarama","Lynfield","Meadowbank","Mission Bay","Morningside","Mount Albert","Mount Eden","Mount Roskill"]
    }
    const districtSelection = (district) => {
        setSelectDistrict(district);
    };
    const suburbSelection = (suburb) => {
        setSelectSuburb(suburb);
    };
    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    };
    const dismissHandler = (event) => {
        if (event.currentTarget === event.target) {
            setShowDropDown(false);
        }
    };
    return (
        <div className={styles.searchBox}>
            <button className={styles.closeButton}>X</button>
            <h1>Start your property search</h1>
            <h3>Location</h3>
            <button
                className={showDropDown ? "active" : undefined}
                onClick={() => toggleDropDown()}
                onBlur={(e) =>
                dismissHandler(e)
                }
            >
                <div>{selectDistrict ? "Select: " + selectDistrict : "Select ..."} </div>
                {showDropDown && (
                <DropDown
                    cities={districts()}
                    showDropDown={false}
                    toggleDropDown={() => toggleDropDown()}
                    citySelection={districtSelection}
                />
                )}
            </button>
            <button
                className={showDropDown ? "active" : undefined}
                onClick={() => toggleDropDown()}
                onBlur={(e) =>
                dismissHandler(e)
                }
            >
                <div>{selectSuburb ? "Select: " + selectSuburb : "Select ..."} </div>
                {showDropDown && (
                <DropDown
                    cities={districts()}
                    showDropDown={false}
                    toggleDropDown={() => toggleDropDown()}
                    citySelection={suburbSelection}
                />
                )}
            </button>
        </div>
    )
}

export default PropertySearchPopup