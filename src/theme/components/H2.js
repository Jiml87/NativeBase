import variables from "./../variables/platform";

export default (variables = variables) => {
  const h2Theme = {
    color: variables.textColor,
    fontSize: variables.fontSizeH2,
    lineHeight: variables.lineHeightH2,
  };

  return h2Theme;
};
