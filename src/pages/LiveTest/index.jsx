import { useParams } from "react-router-dom";
import { useState } from "react";
import quizBank from "../../assets/quizzes/quizBank";
import styles from "./LiveTest.module.css";

const LiveTest = () => {
  const { id } = useParams();
  const [questions] = useState(quizBank[id].questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswers] = useState(
    JSON.parse(localStorage.getItem(`answers-${id}`)) || []
  );

  const nextQuestion = () => setCurrentQuestion(prev => prev + 1);
  const prevQuestion = () => setCurrentQuestion(prev => prev - 1);

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
      <fieldset>
        <legend>{questions[currentQuestion].question}</legend>
        {questions[currentQuestion].options.map((option, idx) => (
          <div key={option} className={styles.questionOption}>
            <input
              type="radio"
              id={idx}
              name={`question${currentQuestion}`}
              value={idx}
              checked={answer[currentQuestion] === idx}
              onChange={saveChoice}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </fieldset>
      {currentQuestion > 0 && <button onClick={prevQuestion}>Back</button>}
      {currentQuestion < questions.length - 1 && (
        <button onClick={nextQuestion}>Next</button>
      )}
    </div>
  );
};

export default LiveTest;
