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
      </div>
    </div>
  );
};
export default Navbar;
