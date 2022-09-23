import PropertyCard from "../PropertyListing/PropertyCard";
import { useParams } from "react-router-dom";
import styles from "../PropertyListing/PropertyListing.module.css";
import placeholder1 from "../../images/placeholders/image-large.png";
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
import PropertyMap from "../GoogleMap/PropertyMap";
import missingImage from "../../images/missing-image.webp";

const PropertyListing = () => {
  const { propertyId } = useParams();
  console.log(propertyId);

  const [properties, setProperties] = useState([]);
  const [propertyImages, setPropertyImages] = useState([missingImage]);

  const url = `http://localhost:3005/properties/property?id=${propertyId}`;
  console.log(url);
  useEffect(() => {
    axios.get(url).then((response) => {
      setProperties(response.data);
      console.log(response.data);

      const imsrc =
        response.data.imglinks && JSON.parse(response.data.imglinks)
          ? JSON.parse(response.data.imglinks)
          : missingImage;

      setPropertyImages(imsrc);
    });
  }, [url]);

  console.log("setProperties: ", properties);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <PropertyCard>
          <div className={styles.wrapper}>
            <div className={styles.carousel}>
              <div className={styles.mainImg}>
                {propertyImages &&
                  propertyImages.slice(0, 1).map((val, index) => {
                    return (
                      <img
                        src={val}
                        alt="placeholder"
                        className={styles.largeIcon}
                      />
                    );
                  })}
              </div>
              <div className={styles.smallIcons}>
                {propertyImages &&
                  propertyImages.slice(0, 5).map((val, index) => {
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
                <h1 className={styles.propertyTitle}>{properties.title}</h1>
                <input type="checkbox" className={styles.heartCheck} />
              </div>
              <div className={styles.propertyDetails}>
                <div className={styles.propertyDetailsLeft}>
                  <h1 className={styles.propertyRent}>
                    ${properties.rate} per week
                  </h1>
                  <div className={styles["info-banner"]}>
                    <img src={bedGlyph} alt="bed glyph" />
                    {properties.bedrooms}
                    <img src={bathGlyph} alt="bath glyph" />
                    {properties.bathrooms}
                    <img src={carGlyph} alt="car glyph" />
                    {properties.Parking}
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
                    <div className={styles.button}>Book a Viewing</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.propertyMapContainer}>
              <div className={styles.mapTitle}>
                <h5>About the area</h5>
              </div>
              <PropertyMap />
            </div>
          </div>
        </PropertyCard>
      </div>
      <Footer />
    </>
  );
};
export default PropertyListing;
