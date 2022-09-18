import styles from "./ContactSection.module.css";
import contactEnvelope from "../../images/contact-envelope-large.png";

const ContactSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactContent}>
        <div className={styles.leftContent}>
          <div className={styles.contactHeading}>
            <h2 className={styles.contactTitle}>Need Help? Contact Us!</h2>
            <p className={styles.contactText}>
              Fill out the form to the right and one of our team will get
              <br />
              back to you shortly.
            </p>
          </div>
          <img src={contactEnvelope} alt="envelope-large" />
        </div>
        <div className={styles.rightContent}>
          <div className={styles.formContainer}>
            <form className={styles.contactForm}>
              <input
                type="text"
                name="name"
                placeholder="Name:"
                className={styles.inputField}
              />
              <input
                type="text"
                name="name"
                placeholder="Email:"
                className={styles.inputField}
              />
              <textarea
                className={styles.inputTextarea}
                placeholder="Message:"
              ></textarea>

              <input type="submit" value="Send" className={styles.formSubmit} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
