import clockIcon from "../../assets/images/clock.png";
import rankIcon from "../../assets/images/rank.png";
import styles from "./TestCard.module.css";
import { Link } from "react-router-dom";

const TestCard = ({ testTitle, timeLimit, description, level, testID }) => {
  const startTimer = () => {
    if (!localStorage.getItem(`timer-${testID}`)) {
      localStorage.setItem(
        `timer-${testID}`,
        JSON.stringify(Date.now() + timeLimit * 60000)
      );
    }
  };
  return (
    <article className={styles.testCard}>
      <div>
        <h2>
          <u>{testTitle}</u>
        </h2>
        <h4>{description}</h4>
      </div>
      <div>
        <aside className={styles.iconContainer}>
          <div className={styles.icons}>
            <img
              className={styles.iconImgs}
              src={clockIcon}
              alt="clock-imgicon"
            />
            <p>{timeLimit} mins</p>
          </div>
          <div className={styles.icons}>
            <img
              className={styles.iconImgs}
              src={rankIcon}
              alt="rank-imgicon"
            />
            <p>{level}</p>
          </div>
        </aside>
        <hr className={styles.divider} />
        <button>
          <Link
            className={styles.buttonLink}
            to={`/test/${testID}`}
            onClick={startTimer}
          >
            Take Test
          </Link>
        </button>
      </div>
    </article>
  );
};

export default TestCard;
