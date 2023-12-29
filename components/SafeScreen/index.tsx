import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColor } from "../Themed";

type Props = {
  children: React.ReactNode;
  lightColor?: string;
  darkColor?: string;
};

const SafeScreen = ({ children, darkColor, lightColor }: Props) => {
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color }}>
      {children}
    </SafeAreaView>
  );
};

export default SafeScreen;
