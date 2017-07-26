import variables from "./../variables/platform";

export default (variables = variables) => {
  const viewTheme = {
    ".padder": {
      padding: variables.contentPadding
    }
  };

  return viewTheme;
};
