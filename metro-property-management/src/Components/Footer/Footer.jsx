import React from 'react'

import styles from "./Footer.module.css";
import logo from '../../images/logo.pdf';
import socials from '../../images/socials.svg'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navigation}>
                <div className={styles['logo-container']}>
                    <img src={logo} alt='metro property logo' />
                </div>
                    <ul>
                        <li className={styles['navigation-block-header']}>Property Owners</li>
                        <li>Property Management</li>
                        <li>Body Corportate Administration</li>
                        <li>Investments</li>
                        <li>Healthy Home Standards</li>
                    </ul>
                    <ul>
                        <li className={styles['navigation-block-header']}>Tenants</li>
                        <li>Search Properties</li>
                        <li>Application Process</li>
                        <li>Book a Viewing</li>
                    </ul>
                    <ul>
                        <li className={styles['navigation-block-header']}>About us</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>FAQs</li>
                    </ul>
                    <ul>
                        <li className={styles['navigation-block-header']}>Contact</li>
                        <li><img src="" alt="" />+64 9 391 4642</li>
                        <li><img src="" alt="" /> info@metronz.co.nz</li>
                    </ul>
            </div>
            <div className={styles.line}></div>
            <div className={styles['socials-container']}>
                <img src={socials} alt='socials' />
            </div>
        </div>
    )
}

export default Footer