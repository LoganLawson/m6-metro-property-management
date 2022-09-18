import styles from "./HeroSection.module.css";
import sideArrow from "../../images/side-arrow.svg";

const HeroCard = ({ title, text }) => {
  return (
    <div className={styles.heroCards}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardText}>
        {text}
        <img
          src={sideArrow}
          alt="nav down arrow"
          className={styles.cardTextArrow}
        />
      </p>
    </div>
  );
};
export default HeroCard;
