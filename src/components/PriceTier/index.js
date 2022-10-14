import styles from "./PriceTier.module.css";

const PriceTier = ({ tierTitle, pricePerMonth, testAmount, userAmount }) => {
  console.log(tierTitle);
  return (
    <article className={styles.priceTierContainer}>
      <header className={`${styles.header} ${styles[tierTitle]}`}>
        <h1>
          <u>{tierTitle}</u>
        </h1>
        <h3>
          <span className={styles.price}>${pricePerMonth}</span> per month
        </h3>
      </header>
      <ul className={styles.featuresList}>
        {isNaN(testAmount) ? (
          <li>Unlimited tests per month</li>
        ) : (
          <li>{testAmount} tests per month</li>
        )}
        <hr />

        <li>{userAmount} users per account</li>
        <hr />
        <li>full test reports</li>
        <hr />
        <li>customizable tests</li>
      </ul>
      <div className={styles.btnContainer}>
        <button className={styles.priceTierBtn}>Sign Up</button>
      </div>
    </article>
  );
};

export default PriceTier;
