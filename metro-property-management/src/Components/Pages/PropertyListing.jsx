import PropertyCard from "../PropertyListing/PropertyCard";
import { useParams } from "react-router-dom";
import styles from "../PropertyListing/PropertyListing.module.css";
import placeholder1 from "../../images/placeholders/image-large.png";
import placeholderS1 from "../../images/placeholders/image-small1.png";
import placeholderS2 from "../../images/placeholders/image-small2.png";
import placeholderS3 from "../../images/placeholders/image-small3.png";
import placeholderS4 from "../../images/placeholders/image-small4.png";
import placeholderS5 from "../../images/placeholders/image-small5.png";
import bedGlyph from "../../images/bed.svg";
import bathGlyph from "../../images/bath.svg";
import carGlyph from "../../images/car.svg";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import AgentCard from "../AgentProfileCard/AgentCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const PropertyListing = () => {
  const { propertyId } = useParams();
  console.log(propertyId);

  const [properties, setProperties] = useState([]);

  const smallPropertyImgs = [
    placeholderS1,
    placeholderS2,
    placeholderS3,
    placeholderS4,
    placeholderS5,
  ];

  useEffect(() => {
    axios.get("http://localhost:3005/properties/").then((response) => {
      setProperties(response.data);
    });
  }, []);

  const map =
    properties && properties.slice(1, 2).map((property) => property.title);
  console.log(map);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <PropertyCard>
          <div className={styles.wrapper}>
            <div className={styles.carousel}>
              <div className={styles.mainImg}>
                <img
                  src={placeholder1}
                  alt="placeholder"
                  className={styles.largeIcon}
                />
              </div>
              <div className={styles.smallIcons}>
                {smallPropertyImgs.map((val, index) => {
                  return (
                    <img
                      src={val}
                      alt="placeholder"
                      key={index}
                      className={styles.smallImg}
                    />
                  );
                })}
              </div>
            </div>
            <div className={styles.propertyContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.propertyTitle}>{map}</h1>
                <input type="checkbox" className={styles.heartCheck} />
              </div>
              <div className={styles.propertyDetails}>
                <div className={styles.propertyDetailsLeft}>
                  <h1 className={styles.propertyRent}>$500 per week</h1>
                  <div className={styles["info-banner"]}>
                    <img src={bedGlyph} alt="bed glyph" />1
                    <img src={bathGlyph} alt="bath glyph" />1
                    <img src={carGlyph} alt="car glyph" />0
                  </div>
                  <div className={styles.propertyInfo}>
                    <p className={styles.listingText}>
                      • Power included in rent
                    </p>
                    <p className={styles.listingText}>
                      • Water Included in rent
                    </p>
                    <p className={styles.listingText}>• Furnished</p>
                    <p className={styles.listingText}>• Pet</p>
                    <p className={styles.listingText}>
                      Friendly One bedroom apartment with one bathroom in great
                      inner city location.
                    </p>
                    <p className={styles.listingText}>
                      Location-wise this property is hard to beat. a short
                      stroll away from Commercial Bay, which is known to some of
                      the city's most stylish fashion boutiques and premium
                      eateries.
                    </p>
                    <p className={styles.listingText}>
                      Auckland's Viaduct Harbour and Wynyard Quarter are also in
                      close proximity.
                    </p>
                    <p className={styles.listingText}>
                      This is a seriously good deal for the location so get in
                      quick!
                    </p>
                    <p className={styles.listingText}>
                      For any further information please contact Zsuzsanna
                      Tantos-Rangi on 021 771 700
                    </p>
                    <h4>MOVE IN COSTS:</h4>
                    <h4>4x Week Bond, 1x Weeks Rent in Advance</h4>
                  </div>
                </div>
                <div className={styles.propertyDetailsRight}>
                  <AgentCard
                    name="Zsuzsanna Tantos-Rangi"
                    phoneNum="021 771 700"
                    email="zsuzsanna@metronz.co.nz"
                  />
                  <div className={styles.buttonGroup}>
                    <Link
                      to="/ApplicationForm"
                      className={styles.secondaryButton}
                      style={{ color: "white" }}
                    >
                      Apply Now
                    </Link>
                    <div className={styles.button}>Search Rentals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PropertyCard>
      </div>
      <Footer />
    </>
  );
};
export default PropertyListing;
