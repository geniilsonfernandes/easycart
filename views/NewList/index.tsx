import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import CurrencyInput from "react-native-currency-input";
import Button from "../../components/Button";
import { TextInput, View as ThemedView } from "../../components/Themed";
import Colors from "../../constants/Colors";
const NewList = () => {
  const [value, setValue] = React.useState<number | null>(100);

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
