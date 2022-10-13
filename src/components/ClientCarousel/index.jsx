import CompanyCard from "../CompanyCard";
import styles from "./ClientCarousel.module.css";
import useImageCarousel from "../../hooks/useImageCarousel";
import arrowIcon from "../../assets/images/right-arrow.png";

const ClientCarousel = () => {
  const [activeImgArr, slideLeft, slideRight] = useImageCarousel();
  return (
    <section>
      <h2 className={styles.sectionHeader}>Some of our Clients</h2>
      <div className={styles.slider}>
        <img
          src={arrowIcon}
          alt="leftarrow"
          onClick={slideLeft}
          className={`${styles.arrowSlider} ${styles.leftArrow}`}
        />
        {activeImgArr.map(img => (
          <CompanyCard imgSrc={img} />
        ))}
        <img
          src={arrowIcon}
          alt="rightarrow"
          onClick={slideRight}
          className={styles.arrowSlider}
        />
      </div>
    </section>
  );
};

export default ClientCarousel;
