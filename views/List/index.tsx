import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import SafeScreen from "../../components/SafeScreen";
import { View as ThemedView } from "../../components/Themed";
import Colors from "../../constants/Colors";
const List = () => {
  return (
    <SafeScreen
      darkColor={Colors.dark.mainColor}
      lightColor={Colors.light.mainColor}
    >
      <ThemedView style={styles.container}>
        <CustomHeader title="nome da lista" />
        <ScrollView style={styles.inputGroup}></ScrollView>
      </ThemedView>
      <ThemedView style={styles.footer}></ThemedView>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopEndRadius: 20,
    marginTop: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 16,
  },
  inputGroup: { gap: 24, marginTop: 20 },
  footer: { paddingHorizontal: 24, paddingVertical: 16 },
});

export default List;
