import ChooseUsCard from "./ChooseUsCard";
import styles from "./ChooseUsSection.module.css";
import cardImg1 from "../../images/choose-us/card1.png";
import cardImg2 from "../../images/choose-us/card2.png";
import cardImg3 from "../../images/choose-us/card3.png";

const ChooseUsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chooseUsHeading}>
        <h1 className={styles.chooseUsTitle}>Why Choose Us?</h1>
        <p className={styles.chooseUsText}>
          At Metro Property Management, we go above and beyond to meet our
          clients needs. We pride ourselves on our
          <br />
          professionalism at every level, whether that involves property
          investment, maintaining our assests or finding the right
          <br />
          tenants - we are here to help.
        </p>
      </div>
      <div className={styles.chooseUsCards}>
        <ChooseUsCard
          cardImg={cardImg1}
          title="Dedicated Team"
          text="When you work with us, you'll have access to a team of highly committed market experts"
        />
        <ChooseUsCard
          cardImg={cardImg2}
          title="Easy Communication"
          text="Non-English speaker? No problem! We speak your language with our diversified team and interpreters"
        />
        <ChooseUsCard
          cardImg={cardImg3}
          title="Ongoing Support"
          text="Our team of property management professionals will be with your every step of the way"
        />
      </div>
    </div>
  );
};
export default ChooseUsSection;
