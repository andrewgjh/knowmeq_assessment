import TestCard from "../../components/TestCard";
const TestsPage = () => {
  return (
    <div>
      <TestCard
        testTitle="React"
        description="This quiz goes through all the key-concepts of the framework that any React developer should be familiar with. Topics: JSX, components, props, lifecycle & state, events."
        timeLimit={"10 mins"}
        level={"Entry Level"}
      />
    </div>
  );
};

export default TestsPage;
