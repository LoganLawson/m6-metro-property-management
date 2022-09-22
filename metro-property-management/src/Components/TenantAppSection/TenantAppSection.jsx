import styles from "./TenantAppSection.module.css";
import processImg from "../../images/tenant-application-process.png";
import teamArrow from "../../images/team-arrow.png";
import { Link } from "react-router-dom";

const TenantAppSection = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Easy Tenant Application Process</h1>
      <img
        src={processImg}
        alt="process-diagram"
        className={styles.processImg}
      />
      <div className={styles.buttonContainer}>
        <img src={teamArrow} alt="arrow" />
        <div className={styles.buttonGroup}>
          <Link
            to="/tenants/rentals"
            className={styles.secondaryButton}
            style={{ color: "white" }}
          >
            Search Rentals
          </Link>
          <Link to="/ApplicationForm" className={styles.button}>
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TenantAppSection;
