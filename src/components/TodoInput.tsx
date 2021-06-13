import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import checkIcon from "../assets/icons/Check.png";

interface TodoInputProps {
  addTask: (task: string) => void;
  currentTheme: string;
}

export function TodoInput({ addTask, currentTheme }: TodoInputProps) {
  const [task, setTask] = useState("");

  function handleAddNewTask() {
    addTask(task);
    setTask("");
  }

  const getCurrentTheme = () => {
    switch (currentTheme) {
      case "light":
        return {
          inputBackground: "#F5F4F8",
          inputColor: "#222",
          addButtonBackground: "#3FAD27",
        };
      case "dark1":
      case "dark2":
        return {
          inputBackground: "#34313D",
          inputColor: "#F5F4F8",
          addButtonBackground: "#988BC7",
        };
      case "dark3":
        return {
          inputBackground: "#212136",
          inputColor: "#F5F4F8",
          addButtonBackground: "#565BFF",
        };
      case "dark4":
        return {
          inputBackground: "#413A6F",
          inputColor: "#F5F4F8",
          addButtonBackground: "#9347CA",
        };
      case "dark5":
        return {
          inputBackground: "#303030",
          inputColor: "#F5F4F8",
          addButtonBackground: "#181818",
        };
      default:
        return {
          inputBackground: "#F5F4F8",
          inputColor: "#222",
          addButtonBackground: "#3FAD27",
        };
    }
  };

  return (
    <View
      style={[
        styles(getCurrentTheme()).inputContainer,
        Platform.OS === "ios"
          ? styles(getCurrentTheme()).inputIOSShadow
          : styles(getCurrentTheme()).inputAndroidShadow,
      ]}
    >
      <TextInput
        style={[styles(getCurrentTheme()).input]}
        placeholder="Adicionar novo todo..."
        placeholderTextColor="#A09CB1"
        returnKeyType="send"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles(getCurrentTheme()).addButton}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = (currentTheme: {
  inputBackground: string;
  inputColor: string;
  addButtonBackground: string;
}) =>
  StyleSheet.create({
    inputContainer: {
      borderRadius: 5,
      marginTop: -25,
      marginHorizontal: 40,
      height: 50,
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      backgroundColor: currentTheme.inputBackground,
      color: currentTheme.inputColor,
      flex: 1,
      paddingLeft: 12,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    inputIOSShadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    inputAndroidShadow: {
      elevation: 5,
    },
    addButton: {
      backgroundColor: currentTheme.addButtonBackground,
      height: 50,
      paddingHorizontal: 16,
      justifyContent: "center",
      alignItems: "center",
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
  });
