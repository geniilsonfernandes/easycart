import { View } from "react-native";
import { Text } from "../../../components/Themed";

type Props = {
  title: string;
  subtitle: string;
};
const HeaderList = ({ subtitle, title }: Props) => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 16,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
        {title}
      </Text>
      <Text style={{ fontSize: 12, color: "white" }}>{subtitle}</Text>
    </View>
  );
};

export default HeaderList;
