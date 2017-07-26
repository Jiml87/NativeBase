const React = require("react");
const ReactNative = require("react-native");
const { TouchableOpacity, View } = ReactNative;
import variable from "../../theme/variables/platform";

const Button = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} {...props} accessible={variable.accessible}>
      {props.children}
    </TouchableOpacity>
  );
};

module.exports = Button;
