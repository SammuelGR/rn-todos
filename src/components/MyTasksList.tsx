import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";

const getCurrentTheme = (currentTheme: string) => {
  switch (currentTheme) {
    case "light":
      return {
        headerColor: "#3D3D4D",
        taskMarkerBorder: "#3D3D4D",
        taskText: "#3D3D4D",
        taskButtonDoneBackground: "rgba(25, 61, 223, 0.1)",
        taskMarkerDoneBackground: "#273FAD",
        taskTextDoneColor: "#A09CB1",
      };
    case "dark1":
      return {
        headerColor: "#FF79C6",
        taskMarkerBorder: "#FF79C6",
        taskText: "#FF79C6",
        taskButtonDoneBackground: "rgba(255, 121, 198, 0.1)",
        taskMarkerDoneBackground: "#FF79C6",
        taskTextDoneColor: "#E1E1E6",
      };
    case "dark2":
      return {
        headerColor: "#67E480",
        taskMarkerBorder: "#67E480",
        taskText: "#67E480",
        taskButtonDoneBackground: "rgba(68, 71, 90, 0.1)",
        taskMarkerDoneBackground: "#67E480",
        taskTextDoneColor: "#E1E1E6",
      };
    case "dark3":
      return {
        headerColor: "#565BFF",
        taskMarkerBorder: "#565BFF",
        taskText: "#E1E1E6",
        // taskButtonDoneBackground: "rgba(33, 33, 54, 0.3)",
        taskButtonDoneBackground: "rgba(63, 63, 85, 0.3)",
        taskMarkerDoneBackground: "#565BFF",
        taskTextDoneColor: "rgba(225, 225, 230, 0.6)",
      };
    case "dark4":
      return {
        headerColor: "#E1E1E6",
        taskMarkerBorder: "#9347CA",
        taskText: "#E1E1E6",
        taskButtonDoneBackground: "rgba(65, 58, 111, 0.5)",
        taskMarkerDoneBackground: "#9347CA",
        taskTextDoneColor: "rgba(225, 225, 230, 0.6)",
      };
    case "dark5":
      return {
        headerColor: "#BF4AD4",
        taskMarkerBorder: "#12A952",
        taskText: "#E1E1E6",
        taskButtonDoneBackground: "rgba(34, 34, 34, 0.6)",
        taskMarkerDoneBackground: "#12A952",
        taskTextDoneColor: "rgba(225, 225, 230, 0.6)",
      };
    default:
      return {
        headerColor: "#3D3D4D",
        taskMarkerBorder: "#3D3D4D",
        taskText: "#3D3D4D",
        taskButtonDoneBackground: "rgba(25, 61, 223, 0.1)",
        taskMarkerDoneBackground: "#273FAD",
        taskTextDoneColor: "#A09CB1",
      };
  }
};

function FlatListHeaderComponent({ currentTheme }: { currentTheme: string }) {
  return (
    <View>
      <Text style={styles(getCurrentTheme(currentTheme)).header}>
        Minhas tasks
      </Text>
    </View>
  );
}

interface MyTasksListProps {
  currentTheme: string;
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({
  currentTheme,
  tasks,
  onLongPress,
  onPress,
}: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={
              item.done
                ? styles(getCurrentTheme(currentTheme)).taskButtonDone
                : styles(getCurrentTheme(currentTheme)).taskButton
            }
          >
            <View
              testID={`marker-${index}`}
              style={
                item.done
                  ? styles(getCurrentTheme(currentTheme)).taskMarkerDone
                  : styles(getCurrentTheme(currentTheme)).taskMarker
              }
            />
            <Text
              style={
                item.done
                  ? styles(getCurrentTheme(currentTheme)).taskTextDone
                  : styles(getCurrentTheme(currentTheme)).taskText
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={
        <FlatListHeaderComponent currentTheme={currentTheme} />
      }
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  );
}

const styles = (currentTheme: {
  headerColor: string;
  taskMarkerBorder: string;
  taskText: string;
  taskButtonDoneBackground: string;
  taskMarkerDoneBackground: string;
  taskTextDoneColor: string;
}) =>
  StyleSheet.create({
    header: {
      color: currentTheme.headerColor,
      fontSize: 24,
      fontFamily: "Poppins-SemiBold",
    },
    taskButton: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      flexDirection: "row",
      alignItems: "center",
    },
    taskMarker: {
      height: 16,
      width: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: currentTheme.taskMarkerBorder,
      marginRight: 10,
    },
    taskText: {
      color: currentTheme.taskText,
    },
    taskButtonDone: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      backgroundColor: currentTheme.taskButtonDoneBackground,
      flexDirection: "row",
      alignItems: "center",
    },
    taskMarkerDone: {
      height: 16,
      width: 16,
      borderRadius: 8,
      backgroundColor: currentTheme.taskMarkerDoneBackground,
      marginRight: 10,
    },
    taskTextDone: {
      color: currentTheme.taskTextDoneColor,
      textDecorationLine: "line-through",
    },
  });
