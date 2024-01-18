import { router } from "expo-router";
import React from "react";
import { Alert, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import CurrencyInput from "react-native-currency-input";
import Button from "../../components/Button";
import { TextInput, View as ThemedView } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { createList } from "../../store";
const NewList = () => {
  const [nameList, setNameList] = React.useState<string>("");
  const [value, setValue] = React.useState<number>(0);

  const handleCreateList = async () => {
    if (!nameList) {
      Alert.alert("Erro", "Preencha o nome da lista");

      return;
    }

    if (!value || value <= 0) {
      Alert.alert("Erro", "Preencha o orcamento da lista");

      return;
    }

    createList({
      budget: value,
      name: nameList,
      create_at: new Date().toISOString(),
    }).then((res) => {
      if (res) {
        router.push(`/list`);
      }
    });
  };

  return (
    <ThemedView
      darkColor={Colors.dark.mainColor}
      lightColor={Colors.light.mainColor}
      style={styles.container}
    >
      <ThemedView style={styles.body}>
        <ScrollView style={styles.inputGroup}>
          <TextInput
            placeholder="Nome da lista"
            onChangeText={(text) => setNameList(text)}
            value={nameList}
          />

          <CurrencyInput
            value={value}
            onChangeValue={(value) => setValue(value || 0)}
            prefix="R$ "
            delimiter="."
            separator=","
            renderTextInput={(props) => (
              <TextInput {...props} placeholder="Orçamento" />
            )}
          />
        </ScrollView>
      </ThemedView>

      <ThemedView style={styles.footer}>
        <TouchableOpacity onPress={handleCreateList}>
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
