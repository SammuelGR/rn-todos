import React from "react";
import {
  Image,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import lightModeIcon from "../assets/icons/light-mode.png";
import darkModeIcon from "../assets/icons/dark-mode.png";

interface IHeaderProps {
  currentTheme: string;
  onChangeTheme: () => void;
}

export function Header({ onChangeTheme, currentTheme }: IHeaderProps) {
  const getCurrentTheme = (currentTheme: string) => {
    switch (currentTheme) {
      case "light":
        return {
          headerBackground: "#273FAD",
          headerTextColor: "#FFF",
        };
      case "dark1":
      case "dark2":
        return {
          headerBackground: "#483C67",
          headerTextColor: "#E1E1E6",
        };
      case "dark3":
        return {
          headerBackground: "#191932",
          headerTextColor: "#E1E1E6",
        };
      case "dark4":
        return {
          headerBackground: "#282B5A",
          headerTextColor: "#E1E1E6",
        };
      case "dark5":
        return {
          headerBackground: "#3E3E3E",
          headerTextColor: "#E1E1E6",
        };
      default:
        return {
          headerBackground: "#273FAD",
          headerTextColor: "#E1E1E6",
        };
    }
  };

  return (
    <View style={styles(getCurrentTheme(currentTheme)).header}>
      <View style={styles(getCurrentTheme(currentTheme)).emptyContainer} />

      <View style={styles(getCurrentTheme(currentTheme)).headerTitle}>
        <Text style={styles(getCurrentTheme(currentTheme)).headerText}>
          to.
        </Text>
        <Text
          style={[
            styles(getCurrentTheme(currentTheme)).headerText,
            { fontFamily: "Poppins-SemiBold" },
          ]}
        >
          do
        </Text>
      </View>

      <View style={styles(getCurrentTheme(currentTheme)).headerRightContainer}>
        <TouchableOpacity
          style={styles(getCurrentTheme(currentTheme)).headerRightButton}
          onPress={onChangeTheme}
        >
          <Image
            resizeMode="cover"
            source={currentTheme === "dark5" ? lightModeIcon : darkModeIcon}
            style={styles(getCurrentTheme(currentTheme)).themeModeIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = (currentTheme: {
  headerBackground: string;
  headerTextColor: string;
}) =>
  StyleSheet.create({
    header: {
      paddingTop: StatusBar.currentHeight,
      paddingBottom: 44,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: currentTheme.headerBackground,
    },
    emptyContainer: {
      width: "33.3%",
      height: 20,
    },
    headerTitle: {
      flexDirection: "row",
      justifyContent: "center",
      width: "33.3%",
    },
    headerText: {
      fontSize: 24,
      fontFamily: "Poppins-Regular",
      color: currentTheme.headerTextColor,
    },
    headerRightContainer: {
      alignItems: "flex-end",
      justifyContent: "center",
      paddingRight: 16,
      width: "33.3%",
      height: 20,
    },
    headerRightButton: {
      backgroundColor: "#34313D",
      borderRadius: 5,
      height: 32,
      width: 32,
      alignItems: "center",
      justifyContent: "center",
      elevation: 5,
    },
    themeModeIcon: {
      width: 16,
      height: 16,
    },
  });
