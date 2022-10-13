import styles from "./LandingPage.module.css";
import ClientCarousel from "../../components/ClientCarousel";
import monkeyIcon from "../../assets/images/monkey.png";

const LandingPage = () => {
  return (
    <main>
      <section>
        <h2 className={styles.mainHeader}>
          Make sure your next candidate has <u>the skills</u> your company is
          looking to hire.{" "}
          <img className={styles.monkey} src={monkeyIcon} alt="monkey" />
        </h2>
      </section>
      <ClientCarousel />
    </main>
  );
};

export default LandingPage;
