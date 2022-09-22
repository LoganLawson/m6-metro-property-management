import React, { useState } from "react";
import './PropertySearchPopup.css';
import DropDown from "./DropDown";

function PropertySearchPopup(){
    const [showSearchWindow, setShowSearchWindow] = useState(true);
    const closeSearchWindow = () =>{
        setShowSearchWindow(false);
    }

    const [showDistDropDown, setShowDistDropDown] = useState(false);
    const [showSubDropDown, setShowSubDropDown] = useState(false);
    const [showBedDropDown, setShowBedDropDown] = useState(false);
    const [showBathDropDown, setShowBathDropDown] = useState(false);
    const [showCarparkDropDown, setShowCarparkDropDown] = useState(false);
    const [showPropertyTypeDropDown, setShowPropertyTypeDropDown] = useState(false);

    const [selectDistrict, setSelectDistrict] = useState("");
    const [selectSuburb, setSelectSuburb] = useState("");
    const [selectBedroom, setSelectBedroom] = useState("");
    const [selectBathroom, setSelectBathroom] = useState("");
    const [selectCarpark, setSelectCarpark] = useState("");
    const [selectPropertyType, setSelectPropertyType] = useState("");

    const districtSelection = (district) => { setSelectDistrict(district); };
    const suburbSelection = (suburb) => { setSelectSuburb(suburb); };
    const bedroomSelection = (bedrooms) => { setSelectBedroom(bedrooms); };
    const bathroomSelection = (bathrooms) => { setSelectBathroom(bathrooms); };
    const carparkSelection = (carpark) => { setSelectCarpark(carpark); };
    const propertyTypeSelection = (propertytype) => { setSelectPropertyType(propertytype); };
    
    const toggleDistDropDown = () => { setShowDistDropDown(!showDistDropDown); };
    const toggleSubDropDown = () => { setShowSubDropDown(!showSubDropDown); };
    const toggleBedDropDown = () => { setShowBedDropDown(!showBedDropDown); };
    const toggleBathDropDown = () => { setShowBathDropDown(!showBathDropDown); };
    const toggleCarparkDropDown = () => { setShowCarparkDropDown(!showCarparkDropDown); };
    const togglePropertyTypeDropDown = () => { setShowPropertyTypeDropDown(!showPropertyTypeDropDown); };

    const districts = () => {
        return ["Auckland central", "North Shore", "South Auckland", "Papakura", "Pukekohe", "West Auckland", "Rodney"];
    };
    const suburbs = () =>{
        return["Grey Lynn","Herne Bay","Hillsborough","Kingsland","Kohimarama","Lynfield","Meadowbank","Mission Bay","Morningside","Mount Albert","Mount Eden","Mount Roskill"]
    }
    const bedrooms = () =>{
        return["1","2","3","4","5","6+"]
    }
    const bathrooms = () =>{
        return["1","2","3","4+"]
    }
    const carparks = () =>{
        return["1","2","3+"]
    }
    const propertytype = () =>{
        return["House","Unit","Townhouse","Apartment"]
    }

    const dismissHandler = (event) => {
        if (event.currentTarget === event.target) {
            setShowDistDropDown(false);
            setShowSubDropDown(false);
            setShowBedDropDown(false);
            setShowBathDropDown(false);
            setShowCarparkDropDown(false);
            setShowPropertyTypeDropDown(false);
        }
    };
    const closeWindow = (event) => {
        if (event.currentTarget === event.target) {
            setShowSearchWindow(false);
        }
    };

    return (
        <div className={showSearchWindow ? "searchBoxActive" : "searchBoxClose"}>
            <div className="closeButton"><button className="xButton" onClick={closeSearchWindow}>X</button></div>
            <div className="heading"> <p>Start your property search</p> </div>
            <div className="category"> <p>Location</p> </div>
            <div className="dropButtons">
                <button
                    className={showDistDropDown ? "active" : undefined }
                    onClick={() => toggleDistDropDown()}
                    onBlur={(e) =>
                        dismissHandler(e)
                    }
                    >
                    <div className="buttonText">{selectDistrict ? selectDistrict : "District"} 
                    <div className="chevronDown"> </div>
                    </div>
                    {showDistDropDown && (
                        <DropDown
                        items={districts()}
                        showDropDown={false}
                        toggleDropDown={() => toggleDistDropDown()}
                        itemSelection={districtSelection}
                        />
                        )}
                </button>
                <button
                    className={showDistDropDown ? "dropdownButton" : "dropdownButton"}
                    onClick={() => toggleSubDropDown()}
                    onBlur={(e) =>
                        dismissHandler(e)
                    }
                >
                    <div className="buttonText">{selectSuburb ? selectSuburb : "Suburb"} 
                    <div className="chevronDown"> </div>
                    </div>
                    {showSubDropDown && (
                    <DropDown
                        items={suburbs()}
                        showDropDown={false}
                        toggleDropDown={() => toggleSubDropDown()}
                        itemSelection={suburbSelection}
                        />
                        )}
                </button>
            </div>
            <div className="rentPerWeek">
                <div className="category"> <p>Rent per Week</p> </div>
                <input type="range" min="1" max="100" value="1500+" class="slider"></input>
            </div>
            <div className="propertyDetailsList">
                <div className="propertyDetails">
                    <p className="category">Bedrooms</p>
                    <button
                        className={showBedDropDown ? "dropdownButton" : "dropdownButton"}
                        onClick={() => toggleBedDropDown()}
                        onBlur={(e) =>
                        dismissHandler(e)
                        }
                    >
                        <div className="buttonText">{selectBedroom ? selectBedroom : "Bedrooms"} 
                        <div className="chevronDown"> </div>
                        </div>
                        {showBedDropDown && (
                        <DropDown
                            items={bedrooms()}
                            showDropDown={false}
                            toggleDropDown={() => toggleBedDropDown()}
                            itemSelection={bedroomSelection}
                        />
                        )}
                    </button>
                </div>
                <div className="propertyDetails">
                    <p className="category">Bathrooms</p>
                    <button
                        className={showBathDropDown ? "dropdownButton" : "dropdownButton"}
                        onClick={() => toggleBathDropDown()}
                        onBlur={(e) =>
                        dismissHandler(e)
                        }
                    >
                        <div className="buttonText">{selectBathroom ? selectBathroom : "Bathroom"} 
                        <div className="chevronDown"> </div>
                        </div>
                        {showBathDropDown && (
                        <DropDown
                            items={bathrooms()}
                            showDropDown={false}
                            toggleDropDown={() => toggleBathDropDown()}
                            itemSelection={bathroomSelection}
                        />
                        )}
                    </button>
                </div>
                <div className="propertyDetails">
                    <p className="category">Carparks</p>
                    <button
                        className={showCarparkDropDown ? "dropdownButton" : "dropdownButton"}
                        onClick={() => toggleCarparkDropDown()}
                        onBlur={(e) =>
                        dismissHandler(e)
                        }
                    >
                        <div className="buttonText">{selectCarpark ? selectCarpark : "Carparks"} 
                        <div className="chevronDown"> </div>
                        </div>
                        {showCarparkDropDown && (
                        <DropDown
                            items={carparks()}
                            showDropDown={false}
                            toggleDropDown={() => toggleCarparkDropDown()}
                            itemSelection={carparkSelection}
                        />
                        )}
                    </button>
                </div>
                <div className="propertyDetails">
                    <p className="category">Property Type</p>
                    <button
                        className={showBathDropDown ? "dropdownButton" : "dropdownButton"}
                        onClick={() => togglePropertyTypeDropDown()}
                        onBlur={(e) =>
                        dismissHandler(e)
                        }
                    >
                        <div className="buttonText">{selectPropertyType ? selectPropertyType : "Property Type"} 
                        <div className="chevronDown"> </div>
                        </div>
                        {showPropertyTypeDropDown && (
                        <DropDown
                            items={propertytype()}
                            showDropDown={false}
                            toggleDropDown={() => togglePropertyTypeDropDown()}
                            itemSelection={propertyTypeSelection}
                        />
                        )}
                    </button>
                </div>
            </div>
            <div className="category"> <p>Advanced Search</p> </div>
            <div className="advancedSearchRadio">
                <div className="radioButtons"> <input type="radio" id="advSearch" name="an" value="an" ></input><label>Available Now</label></div>
                <div className="radioButtons"> <input type="radio" id="advSearch" name="pa" value="an" ></input><label>Pets Allowed</label></div>
                <div className="radioButtons"> <input type="radio" id="advSearch" name="sa" value="an" ></input><label>Smokers Allowed</label></div>
                <div className="radioButtons"> <input type="radio" id="advSearch" name="f" value="an" ></input><label>Furnished</label></div>
            </div>
            <div className="category"> <p>Keywords</p> </div>
            <input className="keywordInput" placeholder="E.g. Pool, Garden"></input>
            <div className="navButtons">
                <a href="/">Reset filters</a>
                <div className="searchButton">Search</div>
            </div>
        </div>
    )
}
export default PropertySearchPopup