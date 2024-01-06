import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { View as ThemedView, useThemeColor } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
const Footer = () => {
  const iconColor = useThemeColor(
    { light: Colors.dark.background, dark: Colors.light.background },
    "text"
  );

  return (
    <ThemedView style={styles.footer}>
      <Pressable
        style={styles.buttonGhost}
        onPress={() => router.push("/list/new-item")}
      >
        <Feather name="share-2" size={20} color={iconColor} />
      </Pressable>
      <Pressable
        style={styles.buttonFilled}
        onPress={() => router.push("/add-item")}
      >
        <Ionicons name="add" size={24} color="white" />
      </Pressable>
      <Pressable
        style={styles.buttonGhost}
        onPress={() => router.push("/list/new-item")}
      >
        <Ionicons name="search" size={20} color={iconColor} />
      </Pressable>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    paddingHorizontal: 16,

    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonFilled: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: Colors.light.mainColor,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -48,
    shadowColor: "rgb(7, 109, 46)",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.5,
    elevation: 6,
  },
  buttonGhost: {
    width: 48,
    height: 48,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
  },
});

export default Footer;
