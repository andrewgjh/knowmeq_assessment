import { useParams } from "react-router-dom";
import { useState } from "react";
import quizBank from "../../assets/quizzes/quizBank";
import styles from "./LiveTest.module.css";
import CountdownTimer from "../../components/CountdownTimer";
import { isTimeOver } from "../../util/timerUtils";
import { useNavigate } from "react-router-dom";
import { quizAllAnswered } from "../../util/quizUtils";
import useSubmit from "../../hooks/useSubmit";

const LiveTest = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [questions] = useState(quizBank[id].questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(
    JSON.parse(localStorage.getItem(`answers-${id}`)) || []
  );
  // const [submitReady, setSubmitReady] = useState(false);
  const [open, confirmSubmit, PopUpConfirm] = useSubmit();

  const nextQuestion = () => setCurrentQuestion(prev => prev + 1);
  const prevQuestion = () => setCurrentQuestion(prev => prev - 1);

  const submit = () => {
    localStorage.removeItem(`timer-${id}`);
    navigate(`/results/${id}`);
  };

  const confirmThenSubmit = async () => {
    if (!quizAllAnswered(id)) {
      const agree = await confirmSubmit(
        "There are unanswered questions, are you sure you want to submit?"
      );
      if (!agree) return;
    }
    submit();
  };

  const saveChoice = e => {
    setAnswers(prev => {
      let choice = [...prev];
      choice[currentQuestion] = parseInt(e.target.value);
      localStorage.setItem(`answers-${id}`, JSON.stringify(choice));
      return choice;
    });
  };

  return (
    <div className={styles.questionContainer}>
      <h1>{quizBank[id].quiz_name}</h1>
      <CountdownTimer
        expireTimeMS={JSON.parse(localStorage.getItem(`timer-${id}`))}
      />
      {open && <PopUpConfirm />}
      <fieldset disabled={isTimeOver(id)}>
        <legend>{questions[currentQuestion].question}</legend>
        {questions[currentQuestion].options.map((option, idx) => (
          <div key={option} className={styles.questionOption}>
            <input
              type="radio"
              id={idx}
              name={`question${currentQuestion}`}
              value={idx}
              checked={answers[currentQuestion] === idx}
              onChange={saveChoice}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </fieldset>
      <div className={styles.quizNav}>
        {currentQuestion > 0 && <button onClick={prevQuestion}>Back</button>}
        {currentQuestion < questions.length - 1 && (
          <button className={styles.nextButton} onClick={nextQuestion}>
            Next
          </button>
        )}
      </div>
      <button className={styles.submitButton} onClick={confirmThenSubmit}>
        Submit
      </button>
    </div>
  );
};

export default LiveTest;
