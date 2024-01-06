import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { View as ThemedView } from "../../../components/Themed";
import ItemListCard from "../../../components/ItemListCard";

const items = Array.from({ length: 100 }, (_, i) => i + 1);

const ListItems = () => {
  return (
    <ThemedView style={styles.itemsWrapper}>
      <View style={styles.itemsWrapperOverflow}>
        <FlatList
          initialNumToRender={2}
          removeClippedSubviews={true}
          maxToRenderPerBatch={2}
          windowSize={2}
          data={items}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => <ItemListCard />}
        />
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  itemsWrapper: {
    flex: 1,
    paddingHorizontal: 16,
  },
  itemsWrapperOverflow: { flex: 1, borderRadius: 10, overflow: "hidden" },
});
export default ListItems;
