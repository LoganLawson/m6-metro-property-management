import React, {useState} from 'react'
import Select from 'react-select'
import styles from './PropertySearchPopup.module.css'

function PropertySearchPopup() {
    const [showSearchWindow, setShowSearchWindow] = useState(true);
    const closeSearchWindow = () =>{
        setShowSearchWindow(false);
    }
    const districts = [
        { value: "Auckland central", label: "Auckland central"},
        { value: "North Shore" , label: "North Shore"},
        { value: "South Auckland", label: "South Auckland"},
        { value: "Papakura", label: "Papakura"},
        { value: "Pukekohe", label: "Pukekohe"},
    ];
    const suburbs = [
        { value: 'Grey Lynn', label: 'Grey Lynn'},
        { value: 'Herne Bay' , label: 'Herne Bay'},
        { value: 'Hillsborough', label: 'Hillsborough'},
        { value: 'Kingsland', label: 'Kingsland'},
        { value: 'Kohimarama', label: 'Kohimarama'},
    ];
    const bedrooms = [
        { value: '1', label: '1'},
        { value: '2' , label: '2'},
        { value: '3', label: '3'},
        { value: '4', label: '4'},
        { value: '5', label: '5'},
        { value: '6+', label: '6+'},
    ];
    const bathrooms = [
        { value: '1', label: '1'},
        { value: '2' , label: '2'},
        { value: '3', label: '3'},
        { value: '4+', label: '4+'},
    ];
    const carparks = [
        { value: '1', label: '1'},
        { value: '2' , label: '2'},
        { value: '3', label: '3'},
        { value: '4+', label: '4+'},
    ];
    const type = [
        { value: 'house', label: 'house'},
        { value: 'unit' , label: 'unit'},
        { value: 'townhouse', label: 'townhouse'},
        { value: 'appartment', label: 'appartment'},
    ];

    const [district, setDistrict] = useState("");
    const [suburb, setSuburn] = useState("");
    const [rent, setRent] = useState("");
    const [bedroom, setBedrooms] = useState("");
    const [bathroom, setBathrooms] = useState("");
    const [parking, setParking] = useState("");
    const [propertyType, setPropertyType] = useState("");
    
    const handleDist = (selectedOption) => {
        setDistrict(selectedOption.value);
    }
    const handleSuburb = (selectedOption) => {
        setSuburn(selectedOption.value);
    }
    const handleRent = (selectedOption) => {
        setRent(selectedOption.value);
        console.log(rent);
    }
    const handleBedrooms = (selectedOption) => {
        setBedrooms(selectedOption.value);
    }
    const handleBathrooms = (selectedOption) => {
        setBathrooms(selectedOption.value);
    }
    const handleParking = (selectedOption) => {
        setParking(selectedOption.value);
    }
    const handleType = (selectedOption) => {
        setPropertyType(selectedOption.value);
    }

    return (
        <div>
            <div className={showSearchWindow? styles.searchBoxActive : styles.searchBoxClose}>
                <div className={styles.closeButton}><button className={styles.xButton} onClick={closeSearchWindow}>X</button></div>
                <div className={styles.heading}> <p>Start your property search</p> </div>
                <div className={styles.categoryName}> <p>Location</p> </div>
                <div className={styles.dropButtonsHorizontal}> 
                    <Select className={styles.selectButton} options={districts} onChange={handleDist}/>
                    <Select className={styles.selectButton} options={suburbs} onChange={handleSuburb}/>
                </div>
                <div className={styles.categoryHorizontal}> 
                    <div className={styles.categoryName}> <p>Rent per Week</p> </div>
                    <input type="range" min="1" max="1500" value="50" onChange={handleRent} className={styles.slider}></input>
                </div>
                <div className={styles.dropButtonsHorizontal}> 
                    <div className={styles.propertyDetails}>
                        <p className={styles.categoryName}>Bedrooms</p>
                        <Select className={styles.selectButton} options={bedrooms} onChange={handleBedrooms}/>
                    </div>
                    <div className={styles.propertyDetails}>
                        <p className={styles.categoryName}>Bathrooms</p>
                        <Select className={styles.selectButton} options={bathrooms} onChange={handleBathrooms}/>
                    </div>
                    <div className={styles.propertyDetails}>
                        <p className={styles.categoryName}>Parking</p>                   
                        <Select className={styles.selectButton} options={carparks} onChange={handleParking}/>
                    </div>
                    <div className={styles.propertyDetails}>
                        <p className={styles.categoryName}>Property Type</p>                    
                        <Select className={styles.selectButton} options={type} onChange={handleType}/>
                    </div>
                </div>
                <div className={styles.categoryHorizontal}>
                    <div className={styles.categoryName}> <p>Advanced Search</p> </div>
                    <div className={styles.advancedSearchRadio}>
                        <div className={styles.radioButtons}> <input type="radio" id="advSearch" name="an" value="an" ></input><label>Available Now</label></div>
                        <div className={styles.radioButtons}> <input type="radio" id="advSearch" name="pa" value="an" ></input><label>Pets Allowed</label></div>
                        <div className={styles.radioButtons}> <input type="radio" id="advSearch" name="sa" value="an" ></input><label>Smokers Allowed</label></div>
                        <div className={styles.radioButtons}> <input type="radio" id="advSearch" name="f" value="an" ></input><label>Furnished</label></div>
                    </div>
                </div>
                <div className={styles.categoryHorizontal}>
                    <div className={styles.categoryName}> <p>Keywords</p> </div>
                    <input className={styles.keywordInput} placeholder="E.g. Pool, Garden"></input>
                    <div className={styles.navButtons}>
                        <a href="/">Reset filters</a>
                        <div className={styles.searchButton}>Search</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertySearchPopup