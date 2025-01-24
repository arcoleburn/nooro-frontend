"use client";

import { useRouter } from "next/navigation";
import ActionButton from "../src/shared/components/ActionButton";
import HomeScreen from "@/scenes/Home";
import { TaskProvider } from "shared/TaskProvider/TaskProvider";
export default function Home() {
  const router = useRouter();

  return (
    // <div
    // className="items-center justify-items-center "
    // >
    <main className="flex flex-col gap-8 items-center ">
      <ActionButton
        buttonText="Create Task"
        icon="plus"
        onClick={() => {
          router.push("/task");
        }}
      />
      <TaskProvider>
        <HomeScreen />
      </TaskProvider>
    </main>
    //  </div>
  );
}
