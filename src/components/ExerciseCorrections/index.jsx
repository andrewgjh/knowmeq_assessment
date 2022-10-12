import CorrectIcon from "../../assets/images/accept.png";
import IncorrectIcon from "../../assets/images/cancel.png";
import styles from "./ExerciseCorrections.module.css";

const ExerciseCorrections = ({
  question,
  options,
  correctAnswerIdx,
  userAnswerIdx,
}) => {
  return (
    <fieldset disabled className={styles.correctionContainer}>
      <legend>{question}</legend>
      <ul className={styles.correctionList}>
        {options.map((option, idx) => {
          const listClasses = `${styles.listOptions} ${
            correctAnswerIdx === idx ? styles.correctAnswer : ""
          } ${
            userAnswerIdx === idx && userAnswerIdx !== correctAnswerIdx
              ? styles.wrongAnswer
              : ""
          } ${
            idx !== correctAnswerIdx && idx !== userAnswerIdx
              ? styles.neutralAnswer
              : ""
          }`;

          return (
            <li key={option} className={listClasses}>
              {option}
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
};

export default ExerciseCorrections;
