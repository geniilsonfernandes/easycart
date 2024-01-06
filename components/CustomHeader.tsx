import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Pressable,
  TouchableHighlight,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import { Text as ThemedText } from "../components/Themed";

type Props = {
  title?: string;
};

const CustomHeader = ({ title }: Props) => {
  const iconColor = useColorScheme() === "dark" ? "white" : "black";
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 64,
      }}
    >
      <TouchableHighlight
        underlayColor="gray"
        style={{ position: "absolute", left: 0 }}
        onPress={() => router.back()}
      >
        <Feather name="arrow-left" size={24} color={iconColor} />
      </TouchableHighlight>

      <ThemedText>{title}</ThemedText>
    </View>
  );
};

export default CustomHeader;
