"use client";

import { FC } from "react";
import { useTasks } from "shared/TaskProvider/TaskProvider";

const Summary: FC = () => {
  const { totalTasks, completedTasks } = useTasks();
  const taskWidth = Math.ceil(totalTasks / 10) * 16;
  const completedWidth = taskWidth + Math.ceil(completedTasks / 10) * 24;
  return (
    <div className="flex row items-center w-full justify-between mt-8 mb-4">
      <div className="flex row items-center">
        <div>Tasks</div>
        <div
          className={`w-[${taskWidth}px] h-[19px] p-[2px_8px] gap-[10px] rounded-[999px] bg-[#333333] text-[12px] text-center flex items-center ml-[10px]`}
        >
          {totalTasks}
        </div>
      </div>
      <div className="flex row items-center">
        <div>Completed</div>
        <div
          className={`w-[${completedWidth}px] h-[19px] p-[2px_8px] gap-[10px] rounded-[999px] bg-[#333333] text-[12px] text-center flex items-center ml-[10px]`}
        >
          {completedTasks} of {totalTasks}
        </div>
      </div>
    </div>
  );
};

export default Summary;
