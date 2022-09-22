import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logoImage from "../../images/logo-image.png";
import logoText from "../../images/logo-text.png";
import downArrow from "../../images/down-arrow.svg";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link to="/Home" className={styles["logo-container"]}>
        <img src={logoImage} alt="metro property logo" />
        <img src={logoText} alt="metro property logo text" />
      </Link>
      <div className={styles.navigation}>
        <div className={styles["nav-dropdown"]}>
          Property owners
          <img src={downArrow} alt="nav down arrow" />
        </div>
        <div className={styles["nav-dropdown"]}>
          Tenants
          <img src={downArrow} alt="nav down arrow" />
        </div>
        <div className={styles["nav-dropdown"]}>
          About
          <img src={downArrow} alt="nav down arrow" />
        </div>
      </div>
      <div className={styles.button}>Contact us</div>
    </div>
  );
};

export default Navbar;
