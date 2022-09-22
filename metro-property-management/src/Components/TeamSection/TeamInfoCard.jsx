import styles from "../TeamSection/TeamSection.module.css";
import phone from "../../images/phone.svg";
import envelope from "../../images/envelope.svg";
import linkedin from "../../images/linkedn-circle.svg";

const TeamInfoCard = ({ phoneNum, email, linkedinName }) => {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoDetails}>
        <img src={phone} alt="phone-icon" />
        <p className={styles.infoCardText}>{phoneNum}</p>
      </div>
      <div className={styles.infoDetails}>
        <img src={envelope} alt="email-icon" />
        <p className={styles.infoCardText}>{email}</p>
      </div>
      <div className={styles.infoDetails}>
        <img src={linkedin} alt="linkedin-icon" />
        <p className={styles.infoCardText}>{linkedinName}</p>
      </div>
    </div>
  );
};
export default TeamInfoCard;
