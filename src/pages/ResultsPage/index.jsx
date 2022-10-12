import { useParams } from "react-router-dom";
import { quizCorrection } from "../../util/quizUtils";
import quizBank from "../../assets/quizzes/quizBank";
import ExerciseCorrections from "../../components/ExerciseCorrections";
import styles from './ResultsPage.module.css'

const ResultsPage = () => {
  const { id } = useParams();
  const { correctAnswers, percentage, answerArray } = quizCorrection(id);

  return (
    <div>
      <h1 className={styles.resultsTitle}>
        You answered {correctAnswers} answers correctly. Your score is{" "}
        {percentage}%
      </h1>

      {quizBank[id].questions.map((exercise, idx) => (
        <ExerciseCorrections
          key={idx}
          question={exercise.question}
          options={exercise.options}
          correctAnswerIdx={exercise.correct_answer_idx}
          userAnswerIdx={answerArray[idx]}
        />
      ))}
    </div>
  );
};

export default ResultsPage;
