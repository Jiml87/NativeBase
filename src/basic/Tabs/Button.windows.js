const React = require("react");
const ReactNative = require("react-native");
const { TouchableOpacity, View } = ReactNative;
import variable from "../../theme/variables/platform";

const Button = props => {
  return (
    <TouchableOpacity accessible={variable.accessible} {...props}>
      {props.children}
    </TouchableOpacity>
  );
};

module.exports = Button;
