"use client";
import { FC } from "react";
import Task from "../Task/Task";
import EmptyState from "./components/EmptyState";
import { useTasks } from "shared/TaskProvider/TaskProvider";

const TaskList: FC = () => {
  const { totalTasks, tasks } = useTasks();
  const sortedTasks = tasks.sort(
    (a, b) => Number(a.completed) - Number(b.completed)
  );
  return (
    <>
      <div className="w-full md:w-[736px] gap-[24px]">
        {totalTasks < 1 ? (
          <EmptyState />
        ) : (
          sortedTasks.map((task) => <Task key={task.id} task={task} />)
        )}
      </div>
    </>
  );
};

export default TaskList;
