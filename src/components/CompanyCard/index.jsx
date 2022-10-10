import styles from "./companyCard.module.css";

const CompanyCard = ({ imgSrc }) => {
  return (
    <div className={styles.imgContainer}>
      <img className={styles.companyImg} src={imgSrc} alt="our-client"></img>
    </div>
  );
};

export default CompanyCard;
