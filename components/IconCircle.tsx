import { Feather } from "@expo/vector-icons";
import { useThemeColor } from "./Themed";
import { View } from "react-native";

type IconCircleProps = {
  name: keyof typeof Feather.glyphMap;
};
const IconCircle = ({ name }: IconCircleProps) => {
  const color = useThemeColor(
    {
      dark: "#f0f0f0",
      light: "#3d3d3d",
    },
    "text"
  );

  const backgroundColor = useThemeColor(
    {
      dark: "#474747",
      light: "#d1d1d1",
    },
    "background"
  );
  return (
    <View
      style={{
        width: 40,
        height: 40,
        backgroundColor: backgroundColor,
        borderRadius: 48,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Feather name={name} size={20} color={color} />
    </View>
  );
};

export default IconCircle;
