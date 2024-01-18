/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
  TextInputProps as DefaultTextInputProps,
  TextInput as DefaultTextInput,
} from "react-native";

import Colors from "../constants/Colors";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <DefaultText
      style={[{ color, fontFamily: "Poppins" }, style]}
      {...otherProps}
    />
  );
}

export function TextInput(props: DefaultTextInputProps) {
  const textInputColor = useThemeColor(
    {
      light: "#181818",
      dark: "#f1f1f1",
    },
    "text"
  );
  const backgroundInputColor = useThemeColor(
    {
      light: "#f1f1f1",
      dark: "#181818",
    },
    "text"
  );
  const placeholderColor = useThemeColor(
    {
      light: "#BDBDBD",
      dark: "#BDBDBD",
    },
    "text"
  );

  return (
    <DefaultView style={{ gap: 10, flex: 1, marginTop: 16 }}>
      <Text style={{ marginLeft: 4, opacity: 0.5 }}>{props.placeholder}</Text>
      <DefaultTextInput
        {...props}
        style={[
          {
            height: 60,
            backgroundColor: backgroundInputColor,
            color: textInputColor,
            borderRadius: 10,
            paddingLeft: 20,
            fontFamily: "Poppins",
          },
        ]}
        placeholder={props.placeholder}
        placeholderTextColor={placeholderColor}
      />
    </DefaultView>
  );
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
