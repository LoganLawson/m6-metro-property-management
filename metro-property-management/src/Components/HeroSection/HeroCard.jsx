import styles from "./HeroSection.module.css";

const HeroCard = ({ title, text }) => {
  return (
    <div className={styles.heroCards}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
};
export default HeroCard;
