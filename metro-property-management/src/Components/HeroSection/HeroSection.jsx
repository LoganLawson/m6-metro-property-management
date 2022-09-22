import HeroCard from "./HeroCard";
import styles from "./HeroSection.module.css";

const Navbar = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Metro NZ Property Management</h1>
        <p className={styles.heroText}>
          As one of the top Auckland Property Management
          <br /> companies, we provide services tailored to the needs of our
          <br /> clients
        </p>
        <div className={styles.cardContainer}>
          <HeroCard title="For Property Owners" text="Get a Free Appraisal" />
          <HeroCard title="For Tenants" text="Find a Rental" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
