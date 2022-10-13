import styles from "./LandingPage.module.css";
import ClientCarousel from "../../components/ClientCarousel";

const LandingPage = () => {
  return (
    <main>
      <section>
        <h2 className={styles.mainHeader}>
          Make sure your next candidate has <u>the skills</u> your company is
          looking to hire.{" "}
        </h2>
      </section>
      <ClientCarousel />
    </main>
  );
};

export default LandingPage;
