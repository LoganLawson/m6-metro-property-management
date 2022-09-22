import styles from "./AgentCard.module.css";
import phone from "../../images/phone.svg";
import envelope from "../../images/envelope.svg";
import linkedin from "../../images/linkedn-circle.svg";
import agentImg from "../../images/agent-profile.png";

const AgentCard = ({ name, phoneNum, email }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardImg}>
          <img
            src={agentImg}
            alt="agent-profile-pic"
            className={styles.agentImg}
          />
        </div>
        <div className={styles.agentDetails}>
          <h4 className={styles.agentName}>{name}</h4>
          <div className={styles.infoDetails}>
            <img src={phone} alt="phone-icon" className={styles.contactIcon} />
            <p className={styles.infoCardText}>{phoneNum}</p>
          </div>
          <div className={styles.infoDetails}>
            <img
              src={envelope}
              alt="email-icon"
              className={styles.contactIcon}
            />
            <p className={styles.infoCardText}>{email}</p>
          </div>
          <div className={styles.infoDetails}>
            <img
              src={linkedin}
              alt="linkedin-icon"
              className={styles.contactIcon}
            />
            <p className={styles.infoCardText}>{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AgentCard;
