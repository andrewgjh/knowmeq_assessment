import quizBank from "../assets/quizzes/quizBank";

export const quizCorrection = testID => {
  let correctAnswers = 0;
  const answerArray = JSON.parse(localStorage.getItem(`answers-${testID}`));
  const correctAnswerArray = quizBank[testID].questions.map(
    question => question.correct_answer_idx
  );
  answerArray.forEach((answer, idx) => {
    if (answer === correctAnswerArray[idx]) {
      correctAnswers++;
    }
  });

  return {
    correctAnswers,
    percentage: correctAnswers / answerArray.length,
    correctAnswerArray,
  };
};

export const quizAllAnswered = testID => {
  const answerArray = JSON.parse(localStorage.getItem(`answers-${testID}`));
  return (
    quizBank[testID].questions.length ===
    answerArray.filter(x => !isNaN(x)).length
  );
};
