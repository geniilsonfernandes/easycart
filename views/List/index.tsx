import React, { useCallback, useMemo, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Text,
  View as ThemedView,
  useThemeColor,
} from "../../components/Themed";
import Colors from "../../constants/Colors";
import Footer from "./components/Footer";
import HeaderList from "./components/HeaderList";
import HeaderStatistics from "./components/HeaderStatistics";
import ListItems from "./components/ListItems";

import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetFlatList,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import IconCircle from "../../components/IconCircle";
import SearchInput from "../../components/SearchInput";

type SheetItemProps = {
  name: string;
};
const SheetItem = ({ name }: SheetItemProps) => {
  return (
    <View style={styles.button}>
      <IconCircle name="plus" />
      <Text style={{ marginLeft: 16, opacity: 0.5 }}>{name}</Text>
    </View>
  );
};

interface IList {
  id: number;
  nome: string;
}

const compras = [
  { id: 1, nome: "Pão" },
  { id: 2, nome: "Leite" },
  { id: 3, nome: "Ovos" },
  { id: 4, nome: "Arroz" },
  { id: 5, nome: "Feijão" },
  { id: 6, nome: "Macarrão" },
  { id: 7, nome: "Carne" },
  { id: 8, nome: "Frutas" },
  { id: 9, nome: "Verduras" },
  { id: 10, nome: "Sabonete" },
];

const NewList = () => {
  const [sheetComponent, setSheetComponent] = useState<"SEARCH" | "ADD_ITEM">(
    "SEARCH"
  );

  const backgroundColor = useThemeColor(
    {
      dark: "#2b2b2b",
      light: "#f0f0f0",
    },
    "background"
  );
  const sheetRef = useRef<BottomSheet>(null);

  // sheet search

  const [newItemNameToCreate, setNewItemNameToCreate] = useState("");
  const [filteredList, setFilteredList] = useState<IList[]>(
    compras.slice(0, 5)
  );

  const handleFilterList = (query: string) => {
    if (query === "ALL") {
      setFilteredList(compras);
      return;
    }

    if (!query) {
      setFilteredList(compras.slice(0, 5));
      return;
    }
    const filtered = compras.filter((item) => item.nome.includes(query));

    setNewItemNameToCreate(filtered.length === 0 ? query : "");
    setFilteredList(filtered);
  };

  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handleSheetChange = useCallback((index: number) => {
    console.log("handleSheetChange", index);
  }, []);

  const handleSnapPress = useCallback(
    (index = 0, sheet: "SEARCH" | "ADD_ITEM") => {
      setSheetComponent(sheet);
      sheetRef.current?.snapToIndex(index);
    },
    []
  );
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  const renderItem = useCallback(
    ({ id, nome }: IList) => <SheetItem name={nome} key={id} />,
    []
  );

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior="close"
      />
    ),
    []
  );

  return (
    <ThemedView
      darkColor={Colors.dark.mainColor}
      lightColor={Colors.light.mainColor}
      style={styles.container}
    >
      <HeaderList subtitle="lista de 1 de janeiro" title="Minha lista" />
      <HeaderStatistics />

      <ListItems />
      <Footer
        onSearch={() => handleSnapPress(1, "SEARCH")}
        onAdd={() => handleSnapPress(1, "ADD_ITEM")}
      />
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        enableOverDrag={false}
        index={-1}
        handleIndicatorStyle={{ height: 0 }}
        backdropComponent={renderBackdrop}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: backgroundColor }}
      >
        <BottomSheetFlatList
          data={filteredList}
          keyExtractor={(i) => i.id.toString()}
          renderItem={({ item }) => renderItem(item)}
          contentContainerStyle={{}}
          ListHeaderComponent={
            <SearchInput
              onChangeText={(query) => {
                handleFilterList(query);
              }}
            />
          }
          ListFooterComponent={
            <SheetItem
              name={
                newItemNameToCreate
                  ? `Criar ${newItemNameToCreate}`
                  : "Criar item"
              }
            />
          }
        />
      </BottomSheet>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default NewList;
