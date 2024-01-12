import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Colors from "../constants/Colors";
import { Text, View as ThemedView, useThemeColor } from "./Themed";

const ItemListCard = React.memo(() => {
  const iconColor = useThemeColor(
    { light: Colors.dark.background, dark: Colors.light.background },
    "text"
  );
  const checkboxBackgroundColor = useThemeColor(
    {
      light: "#d6d6d6",
      dark: "#4d4d4d",
    },
    "background"
  );

  const [active, setActive] = useState(false);

  const item = {
    name: "Agua Sanitária",
    price: 7.12,
    quantity: 2,
    isChecked: false,
  };

  return (
    <TouchableNativeFeedback
      background={
        Platform.OS === "android"
          ? TouchableNativeFeedback.SelectableBackground()
          : undefined
      }
    >
      <ThemedView
        style={styles.container}
        darkColor="#181818"
        lightColor="#f1f1f1"
      >
        <Pressable
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: active ? "#777777" : checkboxBackgroundColor,
          }}
          onPress={() => setActive(!active)}
        >
          {active ? (
            <Ionicons name="checkmark" size={20} color="white" />
          ) : null}
        </Pressable>
        <View style={styles.body}>
          <View>
            <Text
              style={
                (styles.title,
                { textDecorationLine: active ? "line-through" : "none" })
              }
            >
              {item.name}
            </Text>
            <Text style={styles.subTitle}>
              R${item.price * item.quantity} (x{item.quantity})
            </Text>
          </View>
          <Pressable>
            <Ionicons name="chevron-forward" size={20} color={iconColor} />
          </Pressable>
        </View>
      </ThemedView>
    </TouchableNativeFeedback>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 16,
    gap: 16,
  },
  body: {
    gap: 2,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    maxWidth: 200,
  },
  subTitle: {
    fontSize: 12,
    opacity: 0.5,
    fontWeight: "bold",
  },

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  clickOutside: {
    flex: 1,
  },
  modalView: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

    height: 300,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ItemListCard;
