import React, { useState } from "react";
import { Alert } from "react-native";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [theme, setTheme] = useState("light");

  function handleAddTask(newTaskTitle: string) {
    if (!newTaskTitle) return;

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((oldTasks) => [...oldTasks, newTask]);
  }

  function handleMarkTaskAsDone(id: number) {
    let taskExists = tasks.find((task) => task.id === id);

    if (!taskExists) return Alert.alert("Erro", "Task não encontrada!");

    const newTasks = tasks.map((task) => {
      if (task.id === id) task.done = !task.done;
      return task;
    });

    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    let taskExists = tasks.find((task) => task.id === id);

    if (!taskExists) return Alert.alert("Erro", "Task não encontrada!");

    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  }

  function handleTheme(currentTheme: string) {
    if (currentTheme === "light") setTheme("dark");
    else setTheme("light");
  }

  return (
    <>
      <Header onChangeTheme={() => handleTheme(theme)} currentTheme={theme} />

      <TodoInput currentTheme={theme} addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
