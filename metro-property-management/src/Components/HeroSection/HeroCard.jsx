import styles from "./HeroSection.module.css";
import sideArrow from "../../images/side-arrow.svg";
import { Link } from "react-router-dom";

const HeroCard = ({ title, text }) => {
  return (
    <Link
      to="/SearchResults"
      className={styles.heroCards}
      style={{ color: "white" }}
    >
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardText}>
        {text}
        <img
          src={sideArrow}
          alt="nav down arrow"
          className={styles.cardTextArrow}
        />
      </p>
    </Link>
  );
};
export default HeroCard;
