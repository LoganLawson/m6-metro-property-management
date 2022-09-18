import HeroCard from "./HeroCard";
import styles from "./HeroSection.module.css";

const Navbar = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Metro NZ Property Management</h1>
        <p className={styles.heroText}>
          As one of the top Auckland Property
          <br />
          Management companies, we provide
          <br />
          services tailored to the needs of our clients
        </p>
        <div className={styles.cardContainer}>
          <HeroCard
            title="For Property Owners"
            text="Get a Free Appraisal Now"
          />
          <HeroCard title="For Tenants" text="Start your Search Today" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
