import { router } from "expo-router";
import React, { useCallback, useMemo, useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CurrencyInput from "react-native-currency-input";
import Button from "../../components/Button";
import { TextInput, View as ThemedView } from "../../components/Themed";
import Colors from "../../constants/Colors";
import BottomSheet from "@gorhom/bottom-sheet";
const NewList = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [value, setValue] = React.useState<number | null>(100);
  const snapPoints = useMemo(() => ["25%", "50%", "75%", "100%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <ThemedView
      darkColor={Colors.dark.mainColor}
      lightColor={Colors.light.mainColor}
      style={styles.container}
    >
      <ThemedView style={styles.body}>
        <ScrollView style={styles.inputGroup}>
          <TextInput placeholder="Nome da lista" />

          <CurrencyInput
            value={value}
            onChangeValue={setValue}
            prefix="R$ "
            delimiter="."
            separator=","
            renderTextInput={(props) => (
              <TextInput {...props} placeholder="Orçamentoa" />
            )}
          />
        </ScrollView>
      </ThemedView>

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose
      >
        <View>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
      <ThemedView style={styles.footer}>
        <TouchableOpacity onPress={() => router.push("/list")}>
          <Button title="Criar nova lista" />
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  body: {
    flex: 1,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 16,
  },
  inputGroup: { gap: 24, marginTop: 20 },
  footer: { paddingHorizontal: 24, paddingVertical: 16 },
});

export default NewList;
