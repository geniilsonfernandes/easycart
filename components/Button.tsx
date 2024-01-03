import React from "react";
import { Text, View as ThemedView } from "../components/Themed";
import Colors from "../constants/Colors";
type Props = {
  title: string;
};
const Button = ({ title }: Props) => {
  return (
    <ThemedView
      darkColor={Colors.dark.mainColor}
      lightColor={Colors.light.mainColor}
      style={{
        borderRadius: 10,
        height: 56,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        lightColor={Colors.dark.text}
        style={{ fontSize: 14, textAlign: "center" }}
      >
        {title}
      </Text>
    </ThemedView>
  );
};

export default Button;
