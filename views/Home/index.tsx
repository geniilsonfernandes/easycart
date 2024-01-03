import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, router } from "expo-router";
import { useCallback, useRef, useState } from "react";
import {
  Animated,
  RefreshControl,
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

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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
          <View>
            <Animated.View
              style={[
                {
                  transform: [{ translateY: translateTitle }],
                  opacity: opacityTitle,
                  paddingBottom: 24,
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
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <ShoppingListCard />
          </TouchableOpacity>
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
    height: 180,
    width: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 1,
    marginTop: StatusBar.currentHeight,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "flex-end",
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
    height: 180,
    justifyContent: "flex-end",
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 180 + 14,
    elevation: 100,
  },
});

export default Home;
