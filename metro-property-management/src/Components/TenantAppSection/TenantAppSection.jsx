import styles from "./TenantAppSection.module.css";
import processImg from "../../images/tenant-application-process.png";
import teamArrow from "../../images/team-arrow.png";

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
          <div className={styles.secondaryButton}>Search Rentals</div>
          <div className={styles.button}>Apply Now</div>
        </div>
      </div>
    </div>
  );
};
export default TenantAppSection;
