import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, router } from "expo-router";
import { useRef } from "react";
import {
  Animated,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../../components/Button";
import SafeScreen from "../../components/SafeScreen";
import ShoppingListCard from "../../components/ShoppingListCard";
import {
  Text,
  View as ThemedView,
  useThemeColor,
} from "../../components/Themed";
import WelcomeUser from "../../components/WelcomeUser";
import Colors from "../../constants/Colors";

const Home = () => {
  const contentColor = useThemeColor(
    { light: "white", dark: "black" },
    "background"
  );
  const scrollY = useRef(new Animated.Value(0)).current;

  const translateHeader = scrollY.interpolate({
    inputRange: [0, 170],
    outputRange: [0, -170],
    extrapolate: "clamp",
  });

  const translateTitle = scrollY.interpolate({
    inputRange: [0, 280],
    outputRange: [0, 90],
    extrapolate: "clamp",
  });

  const opacityTitle = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const translateMenu = scrollY.interpolate({
    inputRange: [0, 170],
    outputRange: [0, 170],
    extrapolate: "clamp",
  });

  return (
    <SafeScreen
      darkColor={Colors.dark.mainColor}
      lightColor={Colors.light.mainColor}
    >
      <Animated.View
        style={[
          styles.header,
          { transform: [{ translateY: translateHeader }] },
        ]}
      >
        <ThemedView
          style={styles.headerContent}
          darkColor={Colors.dark.mainColor}
          lightColor={Colors.light.mainColor}
        >
          <Animated.View style={{ transform: [{ translateY: translateMenu }] }}>
            <View style={styles.menu}>
              <TouchableOpacity>
                <FontAwesome name="search" size={20} color={"white"} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="cog" size={20} color={"white"} />
              </TouchableOpacity>
            </View>
          </Animated.View>
          <View>
            <Animated.View
              style={[
                {
                  transform: [{ translateY: translateTitle }],
                  opacity: opacityTitle,
                },
              ]}
            >
              <WelcomeUser name="Genilson" />
            </Animated.View>

            <ThemedView style={styles.headerFooter}>
              <Text style={{ fontSize: 16 }}>Lista de compras</Text>
            </ThemedView>
          </View>
        </ThemedView>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={styles.content}
        style={{
          backgroundColor: contentColor,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
          }
        )}
        scrollEventThrottle={1}
      >
        <TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
        </TouchableOpacity>
      </Animated.ScrollView>
      <ThemedView style={{ paddingHorizontal: 24, paddingVertical: 16 }}>
        <TouchableOpacity onPress={() => router.push("/new-list")}>
          <Button title="Criar nova lista" />
        </TouchableOpacity>
      </ThemedView>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 280,
    width: "100%",
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
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  headerFooter: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    marginTop: -2,
  },
  headerContent: {
    width: "100%",
    height: 280,
    justifyContent: "space-between",
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 280 + 14,
  },
});

export default Home;
