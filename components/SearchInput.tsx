import { TextInput, TextInputProps, View } from "react-native";
import { useThemeColor } from "./Themed";
import IconCircle from "./IconCircle";

type SearchInputProps = TextInputProps;
const SearchInput = (props: SearchInputProps) => {
  const color = useThemeColor(
    {
      dark: "#f0f0f0",
      light: "#3d3d3d",
    },
    "text"
  );

  return (
    <View
      style={{
        height: 56,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <IconCircle name="search" />
      <TextInput
        style={{
          marginLeft: 16,
          opacity: 0.5,
          flex: 1,
          color: color,
        }}
        placeholder="Pesquisar um item"
        placeholderTextColor={color}
        {...props}
      />
    </View>
  );
};

export default SearchInput;
