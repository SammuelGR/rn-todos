import React, { useState } from "react";
import { Alert, View } from "react-native";

import { themes } from "../constants/themes";

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
    const index = themes.indexOf(currentTheme);
    if (index < themes.length - 1) setTheme(themes[index + 1]);
    else setTheme(themes[0]);
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme === "light" ? "#FFF" : "#191622",
      }}
    >
      <Header currentTheme={theme} onChangeTheme={() => handleTheme(theme)} />

      <TodoInput currentTheme={theme} addTask={handleAddTask} />

      <MyTasksList
        currentTheme={theme}
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </View>
  );
}
