import styles from "./PropertyCard.module.css";

const PropertyCard = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};
export default PropertyCard;
