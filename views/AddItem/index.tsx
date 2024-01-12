import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import CurrencyInput from "react-native-currency-input";
import Button from "../../components/Button";
import {
  Text,
  TextInput,
  View as ThemedView,
  useThemeColor,
} from "../../components/Themed";
import Colors from "../../constants/Colors";
import { Feather } from "@expo/vector-icons";
const AddItem = () => {
  const [value, setValue] = React.useState<number | null>(0);
  const backgroundInputColor = useThemeColor(
    {
      light: "#f1f1f1",
      dark: "#181818",
    },
    "text"
  );
  return (
    <ThemedView
      darkColor={Colors.dark.mainColor}
      lightColor={Colors.light.mainColor}
      style={styles.container}
    >
      <ThemedView style={styles.body}>
        <ScrollView style={styles.inputGroup}>
          <TextInput placeholder="Nome do produto" />
          <View
            style={{ flexDirection: "row", gap: 16, alignItems: "flex-end" }}
          >
            <CurrencyInput
              value={value}
              onChangeValue={setValue}
              prefix="R$ "
              delimiter="."
              separator=","
              renderTextInput={(props) => (
                <TextInput {...props} placeholder="Valor" />
              )}
            />
            <View
              style={{
                flexDirection: "row",
                gap: 16,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: backgroundInputColor,
                  width: 60,
                  height: 60,
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather name="plus" size={24} color={Colors.light.mainColor} />
              </TouchableOpacity>
              <Text style={{ color: Colors.light.mainColor, fontSize: 24 }}>
                {" "}
                1{" "}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: backgroundInputColor,
                  width: 60,
                  height: 60,
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather
                  name="minus"
                  size={24}
                  color={Colors.light.mainColor}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ThemedView>
      <ThemedView
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 24,
          paddingVertical: 16,
          borderTopWidth: 1,
          borderTopColor: "#f1f1f1",
        }}
      >
        <Text
          style={{
            fontSize: 16,
          }}
        >
          Total
        </Text>
        <Text
          style={{
            fontSize: 16,
            opacity: 0.5,
          }}
        >
          R$ 5000.00
        </Text>
      </ThemedView>
      <ThemedView style={styles.footer}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => router.push("/list")}
        >
          <Button title="adicionar item" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTrash}
          onPress={() => router.push("/list")}
        >
          <Feather name="trash" size={24} color={Colors.light.mainColor} />
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
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: "row",
    gap: 16,
  },
  buttonTrash: {
    width: 56,
    height: 56,
    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddItem;
