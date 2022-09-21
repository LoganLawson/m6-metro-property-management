import React from 'react';
import styles from './SearchBar.module.css'

import SearchTags from '../Searchtags/SearchTags';
import cross from '../../../images/cross.svg'
import lookingGlass from '../../../images/looking-glass.svg'
import bell from '../../../images/bell.svg'

function SearchBar(props) {
    const [searchInput, setSearchInput] = React.useState('Type district or suburb')

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }
    const handleSubmit = (e) => {

    }
    return (
        <div className={styles.container}>
            <div className={styles['search-box']}>
                <img id={styles['looking-glass']} src={lookingGlass} alt='search glyph' />
                <SearchTags classname={styles['location-tags']} tags={props.locationTags} />
                <textarea value={searchInput} onSubmit={handleChange} />
            </div>
            <div className={styles['save-search']}>
                <span>Save Search</span>
                <img src={bell} alt='bell glyph' />
            </div>
        </div>
    )
};

export default SearchBar