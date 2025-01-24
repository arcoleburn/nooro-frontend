"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, MouseEvent, useState } from "react";
import { useTasks } from "shared/TaskProvider/TaskProvider";
import type { Task as TaskType } from "shared/TaskProvider/TaskProvider";
interface TaskProps {
  task: TaskType;
}
const Task: FC<TaskProps> = ({ task }) => {
  const { title, completed, id, color } = task;

  const textColor = color.replace(/^bg/, "text");
  const [checked, setChecked] = useState(completed);
  const { updateTask, deleteTask } = useTasks();
  const router = useRouter();
  const handleCheck = async (e: MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();
    await updateTask({
      id: task.id,
      completed: !task.completed,
    });
    setChecked(!task.completed);
  };
  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this Task? This will permanently delete the task from the Database: it cannot be recovered! "
    );
    if (confirmed) {
      await deleteTask(id);
    }
  };
  const checkedTextClass =
    "flex-1 text-left font-inter text-[16px] font-normal leading-[22.4px] text-[#808080] line-through";
  const unCheckedTextClass = `flex-1 text-left font-inter text-[16px] font-normal leading-[22.4px] ${textColor}`;

  return (
    <div className="w-full border-t border-[#333333] px-[16px] py-[16px] flex items-center gap-[16px] rounded-[8px] bg-[#262626] mb-[12px]">
      <label
        className={`w-[20px] h-[20px] border-[1px] rounded-full flex items-center justify-center ${
          checked ? "bg-purple-500 border-purple-500" : "border-blue-500"
        }`}
      >
        <input
          type="checkbox"
          onClick={(e) => handleCheck(e)}
          className="hidden"
        />
        <span
          className={`w-[10px] h-[10px] block ${
            checked ? "bg-purple-500" : "bg-transparent"
          }`}
        >
          {checked && <Image src="/check.svg" alt="" width={10} height={10} />}
        </span>
      </label>
      <p
        onClick={() => router.push(`/task/${id}`)}
        className={checked ? checkedTextClass : unCheckedTextClass}
      >
        {title}
      </p>
      <button onClick={() => handleDelete()}>
        <Image src="trash.svg" alt="" width={20} height={20} />
      </button>
    </div>
  );
};

export default Task;
