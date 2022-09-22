import styles from "./SucessSection.module.css";

const CarouselContent = ({ slideImg, title, name, text }) => {
  return (
    <div className={styles.slideContainer}>
      <img src={slideImg} alt="slide" />
      <div className={styles.slideContent}>
        <h1 className={styles.slideTitle}>{title}</h1>
        <h3 className={styles.slideName}>{name}</h3>
        <p className={styles.slideText}>{text}</p>
      </div>
    </div>
  );
};
export default CarouselContent;
