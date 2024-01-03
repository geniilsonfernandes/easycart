import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Colors from "../constants/Colors";
import { Text, View as ThemedView, useThemeColor } from "./Themed";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const ItemListCard = () => {
  const iconColor = useThemeColor(
    { light: Colors.dark.background, dark: Colors.light.background },
    "text"
  );

  const item = {
    name: "Agua Sanitária",
    price: 7.12,
    quantity: 2,
    isChecked: false,
  };
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ThemedView
      style={{
        paddingVertical: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8,
        paddingHorizontal: 16,
      }}
      darkColor="#181818"
      lightColor="#f1f1f1"
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <BouncyCheckbox
          size={24}
          fillColor="#4d4d4d"
          unfillColor="#4d4d4d"
          iconStyle={{ borderColor: "#f1f1f1", borderRadius: 6 }}
          innerIconStyle={{ borderWidth: 0, borderRadius: 6 }}
          onPress={(isChecked: boolean) => {}}
        />
        <View
          style={{
            gap: 2,
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 14, maxWidth: 200 }}>{item.name}</Text>
            <Text style={{ fontSize: 12, opacity: 0.5 }}>
              R${item.price * item.quantity} (x{item.quantity})
            </Text>
          </View>
          <Pressable onPress={() => setModalVisible(true)}>
            <Ionicons name="chevron-forward" size={20} color={iconColor} />
          </Pressable>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          closeModal();
        }}
      >
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.clickOutside} />
          </TouchableWithoutFeedback>
          <ThemedView
            style={styles.modalView}
            darkColor="#181818"
            lightColor="#f1f1f1"
          >
            <Text style={styles.modalText}>config desse item</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>config desse item</Text>
            </Pressable>
          </ThemedView>
        </View>
      </Modal>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
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
