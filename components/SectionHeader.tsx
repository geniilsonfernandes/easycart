import React from "react";
import { StyleSheet } from "react-native";
import { View as ThemedView, Text } from "../components/Themed";

type Props = {
  title: string;
};

const SectionHeader = ({ title }: Props) => {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  title: {
    fontSize: 14,
  },
});

export default SectionHeader;
