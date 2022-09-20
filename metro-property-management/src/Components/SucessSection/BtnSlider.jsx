import leftArrow from "../../images/carousel/carousel-prev.svg";
import rightArrow from "../../images/carousel/carousel-next.svg";
import styles from "./SucessSection.module.css";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={
        direction === "next"
          ? styles.btnSlide + " " + styles.next
          : styles.btnSlide + " " + styles.prev
      }
    >
      <img
        src={direction === "next" ? rightArrow : leftArrow}
        alt="arrows"
        className={styles.btnArrow}
      />
    </button>
  );
}
