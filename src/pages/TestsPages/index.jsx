import TestCard from "../../components/TestCard";
import styles from "./TestPages.module.css";
import quizBank from "../../assets/quizzes/quizBank";

const TestsPage = () => {
  const quizList = Object.keys(quizBank).map(id => {
    return {
      testID: id,
      testTitle: quizBank[id].quiz_name,
      description: quizBank[id].description,
      timeLimit: quizBank[id].time_limit_mins,
      level: quizBank[id].level,
    };
  });
  return (
    <div className={styles.testContainer}>
      {quizList.map(quiz => {
        return <TestCard key={quiz.testID} {...quiz} />;
      })}
    </div>
  );
};

export default TestsPage;
