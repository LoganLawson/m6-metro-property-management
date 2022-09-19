import styles from "./SucessSection.module.css";
import nextArrow from "../../images/carousel/carousel-next.svg";
import prevArrow from "../../images/carousel/carousel-prev.svg";

const CarouselContent = ({ slideImg, title, name, text }) => {
  return (
    <div className={styles.slideContainer}>
      <img src={prevArrow} alt="previous" className={styles.slideButton} />

      <img src={slideImg} alt="slide" />
      <div className={styles.slideContent}>
        <h1 className={styles.slideTitle}>{title}</h1>
        <h3 className={styles.slideName}>{name}</h3>
        <p className={styles.slideText}>{text}</p>
      </div>

      <img src={nextArrow} alt="next" className={styles.slideButton} />
    </div>
  );
};
export default CarouselContent;
