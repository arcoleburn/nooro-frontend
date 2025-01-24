"use client";

import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Task {
  id: number;
  title: string;
  color: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Partial<Task>) => void;
  updateTask: (task: Partial<Task>) => void;
  deleteTask: (id: number) => void;
  totalTasks: number;
  completedTasks: number;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:3000/tasks", {
        method: "GET",
      });
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error("error fetching tasks", err);
    }
  };

  const addTask = async (task: Partial<Task>) => {
    const newTask = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await newTask.json();

    setTasks([...tasks, data]);
    return data;
  };

  const updateTask = async (task: Partial<Task>) => {
    const { id } = task;
    const body = JSON.stringify(task);
    const updated = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await updated.json();

    const staleTasks = [...tasks];

    const updatedTasks = staleTasks.map((task) => {
      if (task.id == id) {
        return data;
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);

    return data;
  };
  const deleteTask = async (id: number) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      const newTasks = [...tasks];
      const removed = newTasks.filter((task) => task.id !== id);
      setTasks(removed);
    }
    return res.json();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const value: TaskContextType = {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    totalTasks,
    completedTasks,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks needs to be used within provider");
  }
  return context;
};
