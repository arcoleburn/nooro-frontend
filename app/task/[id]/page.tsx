import TaskForm from "@/scenes/TaskForm";
import { notFound } from "next/navigation";
import type { Task } from "shared/TaskProvider/TaskProvider";

const fetchTaskData = async (id: string) => {

  const res = await fetch(`http://localhost:3000/tasks/${id}`);
  if (!res.ok) {
    throw new Error("Task not found");
  }
  return res.json();
};

const TaskPage = async ({ params }: { params: { id: string } }) => {
  const { id } =  await params;

  let taskData: Task;

  try {
    taskData = await fetchTaskData(id);
  } catch (err) {
    console.error(err);
    notFound();
  }
  return (
    <div className="flex flex-col w-full md:w-[736px] mx-auto h-screen justify-center items-center">
      <TaskForm taskData={taskData} edit= {true} />
    </div>
  );
};

export default TaskPage;
