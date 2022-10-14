import PriceTier from "../../components/PriceTier";
import styles from "./PricingPage.module.css";

const PricingPage = () => {
  return (
    <div className={styles.pricingPageContainer}>
      <PriceTier
        tierTitle={"BabyChimp"}
        pricePerMonth={0}
        testAmount={10}
        userAmount={5}
      />
      <PriceTier
        tierTitle={"MamaChimp"}
        pricePerMonth={120}
        testAmount={50}
        userAmount={20}
      />
      <PriceTier
        tierTitle={"PapaChimp"}
        pricePerMonth={300}
        testAmount={"Unlimited"}
        userAmount={"Unlimited"}
      />
    </div>
  );
};

export default PricingPage;
