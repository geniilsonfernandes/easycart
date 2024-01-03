import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  name: string;
};
const WelcomeUser = ({ name }: Props) => {
  const text = {
    morning: "Bom dia",
    afternoon: "Boa tarde",
    night: "Boa noite",
  };

  const time = new Date().getHours();

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "white",
          opacity: 0.5,
          fontSize: 16,
          fontFamily: "Poppins",
        }}
      >
        {time < 12 ? text.morning : time < 18 ? text.afternoon : text.night},
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 24,
          fontFamily: "PoppinsBold",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default WelcomeUser;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
});
