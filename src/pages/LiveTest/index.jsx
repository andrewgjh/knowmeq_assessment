import { useParams } from "react-router-dom";
import { useState } from "react";
import quizBank from "../../assets/quizzes/quizBank";

const LiveTest = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState(quizBank[id].questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div>
      <h3>{questions[currentQuestion].question}</h3>
      {questions[currentQuestion].options.map(option => {
        return <p>{option}</p>;
      })}
      <button
        onClick={() => {
          setCurrentQuestion(prev => prev - 1);
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          setCurrentQuestion(prev => prev + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default LiveTest;
