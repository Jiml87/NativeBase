const React = require("react");
const ReactNative = require("react-native");
const { TouchableNativeFeedback, View } = ReactNative;
import variable from "../../theme/variables/platform";


const Button = props => {
  return (
    <TouchableNativeFeedback
      accessible={variable.accessible}
      delayPressIn={0}
      background={TouchableNativeFeedback.SelectableBackground()} // eslint-disable-line new-cap
      {...props}
    >
      {props.children}
    </TouchableNativeFeedback>
  );
};

module.exports = Button;
