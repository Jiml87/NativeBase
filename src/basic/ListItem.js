import React, { Component, PropTypes } from "react";
import {
  TouchableHighlight,
  Platform,
  TouchableNativeFeedback,
  View
} from "react-native";

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";
import variable from "../theme/variables/platform";

class ListItem extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };
  render() {
    const variables = this.context.theme
      ? this.context.theme["@@shoutem.theme/themeStyle"].variables
      : variable;

    if (
      Platform.OS === "ios" ||
      variable.androidRipple === false ||
      (!this.props.onPress && !this.props.onLongPress) ||
      Platform.Version <= 21
    ) {
      return (
        <TouchableHighlight
          accessible={variable.accessible}
          onPress={this.props.onPress}
          onLongPress={this.props.onLongPress}
          ref={c => (this._root = c)}
          underlayColor={variables.listBtnUnderlayColor}
        >
          <View {...this.props}>
            {this.props.children}
          </View>
        </TouchableHighlight>
      );
    } else {
      return (
        <TouchableNativeFeedback
          accessible={variable.accessible}
          ref={c => (this._root = c)}
          onPress={this.props.onPress}
          onLongPress={this.props.onLongPress}
          background={
            this.props.androidRippleColor
              ? TouchableNativeFeedback.Ripple(this.props.androidRippleColor)
              : TouchableNativeFeedback.Ripple(variable.androidRippleColorDark)
          }
        >
          <View style={{ marginLeft: -17, paddingLeft: 17 }}>
            <View {...this.props}>
              {this.props.children}
            </View>
          </View>
        </TouchableNativeFeedback>
      );
    }
  }
}

ListItem.propTypes = {
  ...TouchableHighlight.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  itemDivider: PropTypes.bool,
  button: PropTypes.bool
};

const StyledListItem = connectStyle(
  "NativeBase.ListItem",
  {},
  mapPropsToStyleNames
)(ListItem);

export { StyledListItem as ListItem };
