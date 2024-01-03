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
import { Text, TextInput, View as ThemedView } from "../../components/Themed";
import Colors from "../../constants/Colors";
import ItemListCard from "../../components/ItemListCard";
import { Ionicons } from "@expo/vector-icons";
const NewList = () => {
  const [value, setValue] = React.useState<number | null>(100);

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
      <ThemedView
        aria-label="Analise de Gastos"
        style={{
          borderTopEndRadius: 20,
          borderTopLeftRadius: 20,
          paddingHorizontal: 20,
          paddingVertical: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 14 }}>Produtos</Text>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>R$ 500.00</Text>
        </View>
        <View>
          <Text style={{ fontSize: 14 }}>Orçamento</Text>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>R$ 500.00</Text>
        </View>
        <View>
          <Text style={{ fontSize: 14 }}>Total</Text>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>R$ 500.00</Text>
        </View>
      </ThemedView>
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
            data={items}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => <ItemListCard />}
          />
        </View>
      </ThemedView>

      <ThemedView
        style={{
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 16,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Pressable
          style={{
            width: 48,
            height: 48,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
          }}
          onPress={() => router.push("/list/new-item")}
        >
          <Ionicons name="share-social-sharp" size={24} color="black" />
        </Pressable>
        <Pressable
          style={{
            width: 48,
            height: 48,
            borderRadius: 10,
            backgroundColor: Colors.light.mainColor,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
          }}
          onPress={() => router.push("/list/new-item")}
        >
          <Ionicons name="add" size={24} color="black" />
        </Pressable>
        <Pressable
          style={{
            width: 48,
            height: 48,
            borderRadius: 10,

            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
          }}
          onPress={() => router.push("/list/new-item")}
        >
          <Ionicons name="search" size={24} color="black" />
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
  footer: { paddingHorizontal: 24, height: 56 },
});

export default NewList;
