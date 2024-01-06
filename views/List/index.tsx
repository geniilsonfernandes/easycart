import React from "react";
import { StyleSheet } from "react-native";
import { View as ThemedView } from "../../components/Themed";
import Colors from "../../constants/Colors";
import Footer from "./components/Footer";
import HeaderList from "./components/HeaderList";
import HeaderStatistics from "./components/HeaderStatistics";
import ListItems from "./components/ListItems";
const NewList = () => {
  return (
    <ThemedView
      darkColor={Colors.dark.mainColor}
      lightColor={Colors.light.mainColor}
      style={styles.container}
    >
      <HeaderList subtitle="lista de 1 de janeiro" title="Minha lista" />
      <HeaderStatistics />
      <ListItems />
      <Footer />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewList;
