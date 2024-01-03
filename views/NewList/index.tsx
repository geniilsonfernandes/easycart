import React from "react";
import CustomHeader from "../../components/CustomHeader";
import SafeScreen from "../../components/SafeScreen";
import {
  View as ThemedView,
  Text as ThemedText,
  useThemeColor,
  TextInput,
} from "../../components/Themed";
import Colors from "../../constants/Colors";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import CurrencyInput from "react-native-currency-input";
import Button from "../../components/Button";
import { router } from "expo-router";
const NewList = () => {
  const [value, setValue] = React.useState<number | null>(100);

  return (
    <SafeScreen
      darkColor={Colors.dark.mainColor}
      lightColor={Colors.light.mainColor}
    >
      <ThemedView style={styles.container}>
        <CustomHeader title="Nova lista" />
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

export default NewList;
