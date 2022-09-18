import styles from "./ChooseUsSection.module.css";

const ChooseUsCard = ({ cardImg, title, text }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={cardImg} alt="card-img" />
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
};
export default ChooseUsCard;
