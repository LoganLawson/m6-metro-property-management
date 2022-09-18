import styles from "./SucessSection.module.css";
import nextArrow from "../../images/carousel/carousel-next.svg";
import prevArrow from "../../images/carousel/carousel-prev.svg";

const CarouselContent = ({ slideImg, title, name, text }) => {
  return (
    <div className={styles.slideContainer}>
      <button className="carousel-button prev">
        <img src={prevArrow} alt="previous" />
      </button>
      <img src={slideImg} alt="slide" />
      <div className={styles.slideContent}>
        <h1 className={styles.slideTitle}>{title}</h1>
        <h3 className={styles.slideName}>{name}</h3>
        <p className={styles.slideText}>{text}</p>
      </div>
      <button className="carousel-button next">
        <img src={nextArrow} alt="next" />
      </button>
    </div>
  );
};
export default CarouselContent;
