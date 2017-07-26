import variables from "./../variables/platform";

export default (variables = variables) => {
  const h1Theme = {
    color: variables.textColor,
    fontSize: variables.fontSizeH1,
    lineHeight: variables.lineHeightH1,
  };

  return h1Theme;
};
