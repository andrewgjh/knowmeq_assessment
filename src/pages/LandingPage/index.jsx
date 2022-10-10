import companyOne from "../../assets/images/company1.jpg";
import companyTwo from "../../assets/images/company2.jpg";
import companyThree from "../../assets/images/company3.jpg";
import companyFour from "../../assets/images/company4.jpg";
import companyFive from "../../assets/images/company5.jpg";
import CompanyCard from "../../components/CompanyCard/index";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <main>
      <section>
        <h2 className={styles.mainHeader}>
          Make sure your next candidate has <u>the skills</u> your company is
          looking to hire.{" "}
        </h2>
      </section>
      <section>
        <h3>Some of our Clients</h3>
        <CompanyCard imgSrc={companyOne} />
        <CompanyCard imgSrc={companyTwo} />
        <CompanyCard imgSrc={companyThree} />
        <CompanyCard imgSrc={companyFour} />
        <CompanyCard imgSrc={companyFive} />
      </section>
    </main>
  );
};

export default LandingPage;
