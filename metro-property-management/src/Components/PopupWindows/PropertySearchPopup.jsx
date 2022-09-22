import React, {useState} from 'react'
import Select from 'react-select'
import styles from './PropertySearchPopup.module.css'

function PropertySearchPopup() {
    const [showSearchWindow, setShowSearchWindow] = useState(true);
    const closeSearchWindow = () =>{
        setShowSearchWindow(false);
    }
    
    const sortOptions = [
        { value: 'title', label: 'Featured'},
        { value: 'bedrooms' , label: 'Bedrooms'},
        { value: 'bathrooms', label: 'Bathrooms'},
        { value: 'carparks', label: 'Carparks'},
        { value: 'rate', label: 'Rate'},
    ];

    const handleChange = (selectedOption) => {
        console.log(selectedOption);
    }
    return (
        <div className={showSearchWindow? styles.searchBoxActive : styles.searchBoxClose}>
            <div className={styles.closeButton}><button className={styles.xButton} onClick={closeSearchWindow}>X</button></div>
            <Select options={sortOptions} onChange={handleChange}/>;
        </div>
    )
}

export default PropertySearchPopup