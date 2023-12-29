import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  name: string;
};
const WelcomeUser = ({ name }: Props) => {
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
        Bom dia,
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
