import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import CurrencyInput from "react-native-currency-input";
import Button from "../../components/Button";
import {
  Text,
  TextInput,
  View as ThemedView,
  useThemeColor,
} from "../../components/Themed";
import Colors from "../../constants/Colors";
import ItemListCard from "../../components/ItemListCard";
import { Feather, Ionicons } from "@expo/vector-icons";
import HeaderStatistics from "./components/HeaderStatistics";
const NewList = () => {
  const iconColor = useThemeColor(
    { light: Colors.dark.background, dark: Colors.light.background },
    "text"
  );

  const items = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <ThemedView
      darkColor={Colors.dark.mainColor}
      lightColor={Colors.light.mainColor}
      style={styles.container}
    >
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 16,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
          Compras de março
        </Text>
        <Text style={{ fontSize: 12, color: "white" }}>20 de junho</Text>
      </View>
      <HeaderStatistics />
      <ThemedView
        style={{
          flex: 1,
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            flex: 1,
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <FlatList
            style={{
              flex: 1,
            }}
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

      <ThemedView style={styles.footer}>
        <Pressable
          style={styles.buttonGhost}
          onPress={() => router.push("/list/new-item")}
        >
          <Feather name="share-2" size={20} color={iconColor} />
        </Pressable>
        <Pressable
          style={styles.buttonFilled}
          onPress={() => router.push("/add-item")}
        >
          <Ionicons name="add" size={24} color="white" />
        </Pressable>
        <Pressable
          style={styles.buttonGhost}
          onPress={() => router.push("/list/new-item")}
        >
          <Ionicons name="search" size={20} color={iconColor} />
        </Pressable>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  inputGroup: { gap: 24, marginTop: 20 },
  footer: {
    alignItems: "center",
    paddingHorizontal: 16,

    flexDirection: "row",
    justifyContent: "space-around",
  },

  buttonFilled: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: Colors.light.mainColor,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -48,
    shadowColor: "rgb(7, 109, 46)",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.5,
    elevation: 6,
  },
  buttonGhost: {
    width: 48,
    height: 48,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
  },
});

export default NewList;
