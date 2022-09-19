import styles from "./SucessSection.module.css";
import slideImg1 from "../../images/carousel/slide1.png";
import slideImg2 from "../../images/carousel/slide2.png";
import slideImg3 from "../../images/carousel/slide3.png";
import CarouselContent from "./CarouselContent";

const Carousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <ul>
        <li className={styles.slide} data-active>
          <CarouselContent
            slideImg={slideImg1}
            title="Sucess Stories"
            name="Robert Miller"
            text="My experience with Metro Property was really good from start to finish. 
            For the first time I was offered the approach, “we are here to offer help in 
            getting you the right tenant” and take care of all aspects of signing a new tenant.
            Made my life a lot easier as the loction from my house to the tenanted property 
            was a distance to travel and most people were wanting to view after work 
            which meant peak hour traffic was difficult for me."
          />
        </li>
        <li className={styles.slide}>
          <CarouselContent
            slideImg={slideImg2}
            title="Sucess Stories"
            name="Cynthia Scott"
            text="My experience with Metro Property was really good from start to finish. 
            For the first time I was offered the approach, “we are here to offer help in 
            getting you the right tenant” and take care of all aspects of signing a new tenant.
            Made my life a lot easier as the loction from my house to the tenanted property 
            was a distance to travel and most people were wanting to view after work 
            which meant peak hour traffic was difficult for me."
          />
        </li>
        <li className={styles.slide}>
          <CarouselContent
            slideImg={slideImg3}
            title="Sucess Stories"
            name="Sarah Sheppard"
            text="My experience with Metro Property was really good from start to finish. 
            For the first time I was offered the approach, “we are here to offer help in 
            getting you the right tenant” and take care of all aspects of signing a new tenant.
            Made my life a lot easier as the loction from my house to the tenanted property 
            was a distance to travel and most people were wanting to view after work 
            which meant peak hour traffic was difficult for me."
          />
        </li>
      </ul>
    </div>
  );
};

export default Carousel;
