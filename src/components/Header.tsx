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

export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.emptyContainer} />

      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: "Poppins-SemiBold" }]}>
          do
        </Text>
      </View>

      <View style={styles.headerRightContainer}>
        <TouchableOpacity style={styles.headerRightButton} onPress={() => {}}>
          <Image
            resizeMode="cover"
            source={darkModeIcon}
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
    backgroundColor: "#273FAD",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    color: "#FFF",
    fontFamily: "Poppins-Regular",
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
