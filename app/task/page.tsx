import TaskForm from "@/scenes/TaskForm";

export default function Task() {
  return (
      <div className="flex flex-col w-full md:w-[736px] mx-auto h-screen justify-center items-center">
        <TaskForm edit={false} />
    </div>
  );
}
