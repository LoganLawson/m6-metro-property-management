import React from 'react';
import styles from './SearchTags.module.css'
import cross from '../../../images/cross.svg'

function SearchTags(props) {
    const tags = props.tags;
    return (
        <ul className={styles.taglist}>
            {tags.map (tag =>
                <li key={tag}>
                    {tag}<img src={cross}></img>
                </li>
            )}
        </ul>
    )
};

export default SearchTags