import styles from "./SucessSection.module.css";
import CarouselContent from "./CarouselContent";
import slideData from "../../data/home-page/SliderData";
import BtnSlider from "./BtnSlider";
import { useState } from "react";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== slideData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slideData.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slideData.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselSlider}>
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        {slideData.map((slide, index) => {
          return (
            <div
              className={
                slideIndex === index + 1
                  ? styles.slide + " " + styles.activeAnim
                  : styles.slide
              }
            >
              <CarouselContent
                slideImg={slide.slideImg}
                title={slide.title}
                name={slide.name}
                text={slide.text}
                key={index}
              />
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
      </div>
      <div className={styles.containerDots}>
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={
              slideIndex === index + 1
                ? styles.dot + " " + styles.active
                : styles.dot
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
