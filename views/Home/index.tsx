import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import SafeScreen from "../../components/SafeScreen";
import {
  Text,
  View as ThemedView,
  useThemeColor,
} from "../../components/Themed";
import WelcomeUser from "../../components/WelcomeUser";
import Colors from "../../constants/Colors";

const ShoppingListCard = () => {
  const iconColor = useThemeColor({ light: "black", dark: "white" }, "text");
  return (
    <ThemedView
      style={{
        paddingVertical: 8,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8,
      }}
      darkColor="#181818"
      lightColor="#f1f1f1"
    >
      <View style={{ paddingLeft: 16 }}>
        <Text style={{ fontSize: 12 }}>Lista de janeiro</Text>
        <Text style={{ opacity: 0.5, fontSize: 12 }}>R$ 560,70</Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            height: 40,
            paddingHorizontal: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: -3,
            }}
          >
            <Text style={{ fontSize: 10 }}>34</Text>
            <Text style={{ opacity: 0.5, fontSize: 10 }}>/56</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
};
const Home = () => {
  return (
    <SafeScreen
      darkColor={Colors.dark.mainColor}
      lightColor={Colors.light.mainColor}
    >
      <ThemedView
        style={styles.headerContainer}
        darkColor={Colors.dark.mainColor}
        lightColor={Colors.light.mainColor}
      >
        <View style={styles.menu}>
          <TouchableOpacity></TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
        </View>
        <View>
          <WelcomeUser name="Genilson" />

          <ThemedView
            style={{
              paddingHorizontal: 24,
              paddingVertical: 16,
              borderTopEndRadius: 30,
              borderTopStartRadius: 30,
            }}
          >
            <Text style={{ fontSize: 16 }}>Lista de compras</Text>
          </ThemedView>
        </View>
      </ThemedView>
      <ScrollView>
        <ThemedView style={styles.contentContainer}>
          <ShoppingListCard />
          <ShoppingListCard />
          <ShoppingListCard />
          <ShoppingListCard />
          <ShoppingListCard />
          <ShoppingListCard />
          <ShoppingListCard />
          <ShoppingListCard />
          <ShoppingListCard />
          <ShoppingListCard />
          <ShoppingListCard />
          <ShoppingListCard />
          <ShoppingListCard />
          <ShoppingListCard />
          <ShoppingListCard />
          <ThemedView
            darkColor={Colors.dark.mainColor}
            lightColor={Colors.light.mainColor}
            style={{
              borderRadius: 10,
              height: 56,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 14, textAlign: "center" }}>
              Criar Nova lista
            </Text>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 280,
    width: "100%",
    justifyContent: "space-between",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 1,
    marginTop: StatusBar.currentHeight,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 280 + 16,
  },
});

export default Home;
