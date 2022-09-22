import React, { useState, useEffect } from 'react';
import styles from './Dropdown.module.css';


const Dropdown = ({ label, value, options, onChange }) => {
    return (
            <div className={styles.container}>
            <span>{label}</span><span>{value}</span>
            <select value={value} onChange={onChange}>
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
            </select>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full stroke-2"><path d="M5 8l7 10 7-10" stroke="currentColor" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
    );
};

export default Dropdown