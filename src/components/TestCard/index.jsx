import clockIcon from "../../assets/images/clock.png";
import rankIcon from "../../assets/images/rank.png";
import styles from "./TestCard.module.css";

const TestCard = ({ testTitle, timeLimit, description, level }) => {
  return (
    <article className={styles.testCard}>
      <h2>{testTitle}</h2>
      <h4>{description}</h4>
      <aside className={styles.iconContainer}>
        <div className={styles.icons}>
          <img
            className={styles.iconImgs}
            src={clockIcon}
            alt="clock-imgicon"
          />
          <p>{timeLimit}</p>
        </div>
        <div className={styles.icons}>
          <img className={styles.iconImgs} src={rankIcon} alt="rank-imgicon" />
          <p>{level}</p>
        </div>
      </aside>
      <hr className={styles.divider} />
      <button>Take Test</button>
    </article>
  );
};

export default TestCard;
