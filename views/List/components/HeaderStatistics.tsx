import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, View as ThemedView } from "../../../components/Themed";

const HeaderStatistics = () => {
  return (
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
        <Text style={styles.title}>Produtos</Text>
        <Text style={styles.subTitle}>R$ 500.00</Text>
      </View>
      <View>
        <Text style={styles.title}>Orçamento</Text>
        <Text style={styles.subTitle}>R$ 500.00</Text>
      </View>
      <View>
        <Text style={styles.title}>Total</Text>
        <Text style={styles.subTitle}>R$ 500.00</Text>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  title: {
    fontSize: 14,
  },
  subTitle: {
    fontSize: 12,
    opacity: 0.5,
    fontWeight: "bold",
  },
});

export default HeaderStatistics;
