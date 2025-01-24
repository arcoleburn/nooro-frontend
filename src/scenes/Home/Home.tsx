
import { FC } from "react";
import TaskList from "./components/TaskList";
import Summary from "./components/Summary";

const Home: FC = () => {
  return (
    <>
      <Summary />
      <TaskList />
    </>
  );
};

export default Home;
