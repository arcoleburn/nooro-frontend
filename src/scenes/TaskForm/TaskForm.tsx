"use client";

import { FC, useState } from "react";
import TitleInput from "./components/TitleInput";
import ColorPicker from "./components/ColorPicker";
import ActionButton from "@/components/ActionButton";
import BackButton from "@/components/BackButton/BackButton";
import { Task, useTasks } from "shared/TaskProvider/TaskProvider";
import { colors } from "@/utils/colors";
import { useRouter } from "next/navigation";

interface TaskFormProps {
  taskData?: Task;
  edit: boolean;
}
const TaskForm: FC<TaskFormProps> = ({ taskData, edit }) => {
  const [title, setTitle] = useState(taskData ? taskData.title : "");
  const [color, setColor] = useState(
    taskData ? colors.findIndex((c) => c === taskData.color) : 0
  );
  const router = useRouter();
  const { addTask, updateTask } = useTasks();

  const handleTitleChange = (val: string) => {
    setTitle(val);
  };
  const handleColorChange = (val: number) => {
    setColor(val);
  };

  const handleSubmit = async () => {
    if (edit) {
      await updateTask({ title, color: colors[color], id: taskData?.id });
    } else {
      await addTask({ title, color: colors[color] });
    }
    router.push("/");
  };
  return (
    <div className="flex flex-col gap-6 w-full md:w-[736px] mx-auto mt-8">
      <BackButton />
      <TitleInput
        title={title}
        onChange={(e) => handleTitleChange(e.target.value)}
      />
      <ColorPicker colorIdx={color} onClick={handleColorChange} />
      <div className="mt-16">
        <ActionButton
          buttonText={edit ? "Save" : "Add Task"}
          icon={edit ? "check" : "plus"}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default TaskForm;
