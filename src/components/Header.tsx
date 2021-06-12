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
  return (
    <View
      style={[
        styles.header,
        currentTheme === "light"
          ? styles.headerBackground
          : styles.headerBackgroundDark,
      ]}
    >
      <View style={styles.emptyContainer} />

      <View style={styles.headerTitle}>
        <Text
          style={[
            styles.headerText,
            currentTheme === "light"
              ? styles.headerTextColor
              : styles.headerTextColorDark,
          ]}
        >
          to.
        </Text>
        <Text
          style={[
            styles.headerText,
            currentTheme === "light"
              ? styles.headerTextColor
              : styles.headerTextColorDark,
            { fontFamily: "Poppins-SemiBold" },
          ]}
        >
          do
        </Text>
      </View>

      <View style={styles.headerRightContainer}>
        <TouchableOpacity
          style={styles.headerRightButton}
          onPress={onChangeTheme}
        >
          <Image
            resizeMode="cover"
            source={currentTheme === "light" ? darkModeIcon : lightModeIcon}
            style={styles.themeModeIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerBackground: {
    backgroundColor: "#273FAD",
  },
  headerBackgroundDark: {
    backgroundColor: "#483C67",
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
  },
  headerTextColor: {
    color: "#FFF",
  },
  headerTextColorDark: {
    color: "#E1E1E6",
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
