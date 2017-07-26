import { Platform } from "react-native";

import variables from "./../variables/platform";

export default (variables = variables) => {
  const titleTheme = {
    fontSize: variables.titleFontSize,
    fontFamily: variables.titleFontfamily,
    color: variables.titleFontColor,
    fontWeight: Platform.OS === "ios" ? "600" : undefined,
    textAlign: "center"
  };

  return titleTheme;
};
