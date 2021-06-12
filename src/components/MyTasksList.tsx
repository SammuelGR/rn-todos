import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";

function FlatListHeaderComponent({ currentTheme }: { currentTheme: string }) {
  return (
    <View>
      <Text style={styles(currentTheme).header}>Minhas tasks</Text>
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
                ? styles(currentTheme).taskButtonDone
                : styles(currentTheme).taskButton
            }
          >
            <View
              testID={`marker-${index}`}
              style={
                item.done
                  ? styles(currentTheme).taskMarkerDone
                  : styles(currentTheme).taskMarker
              }
            />
            <Text
              style={
                item.done
                  ? styles(currentTheme).taskTextDone
                  : styles(currentTheme).taskText
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

const styles = (currentTheme: string) =>
  StyleSheet.create({
    header: {
      color: currentTheme === "light" ? "#3D3D4D" : "#FF79C6",
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
      borderColor: currentTheme === "light" ? "#3D3D4D" : "#FF79C6",
      marginRight: 10,
    },
    taskText: {
      color: currentTheme === "light" ? "#3D3D4D" : "#FF79C6",
    },
    taskButtonDone: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      backgroundColor:
        currentTheme === "light"
          ? "rgba(25, 61, 223, 0.1)"
          : "rgba(255, 121, 198, 0.1)",
      flexDirection: "row",
      alignItems: "center",
    },
    taskMarkerDone: {
      height: 16,
      width: 16,
      borderRadius: 8,
      backgroundColor: currentTheme === "light" ? "#273FAD" : "#FF79C6",
      marginRight: 10,
    },
    taskTextDone: {
      color: currentTheme === "light" ? "#A09CB1" : "#E1E1E6",
      textDecorationLine: "line-through",
    },
  });
