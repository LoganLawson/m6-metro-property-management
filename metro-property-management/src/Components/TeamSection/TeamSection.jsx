import styles from "../TeamSection/TeamSection.module.css";
import teamProfiles from "../../images/team-profiles.png";
import teamArrow from "../../images/team-arrow.png";
import TeamInfoCard from "./TeamInfoCard";

const TeamSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionHead}>
        <h1 className={styles.teamTitle}>Meet our Team!</h1>
        <p className={styles.teamText}>
          All our staff are property investors who have expert knowledge of the
          property market and
          <br />
          your best interest in mind at all times.
        </p>
      </div>
      <div className={styles.teamProfiles}>
        <div className={styles.teamPictures}>
          <img
            src={teamProfiles}
            alt="team-profiles"
            className={styles.teamImage}
          />
        </div>
        <div className={styles.teamInfo}>
          <TeamInfoCard
            phoneNum="021 771 700"
            email="zsuzsanna@metronz.co.nz"
            linkedinName="Zsuzsanna Tantos-Rangi"
          />
          <TeamInfoCard
            phoneNum="021 771 700"
            email="zsuzsanna@metronz.co.nz"
            linkedinName="Zsuzsanna Tantos-Rangi"
          />
          <TeamInfoCard
            phoneNum="021 771 700"
            email="zsuzsanna@metronz.co.nz"
            linkedinName="Zsuzsanna Tantos-Rangi"
          />
          <TeamInfoCard
            phoneNum="021 771 700"
            email="zsuzsanna@metronz.co.nz"
            linkedinName="Zsuzsanna Tantos-Rangi"
          />
        </div>
        <div className={styles.appraisalContainer}>
          <img src={teamArrow} alt="arrow" />
          <div className={styles.button}>Get a Free Appraisal</div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
