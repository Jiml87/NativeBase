import React, { Component } from "react";
import {
  TouchableHighlight,
  Platform,
  TouchableNativeFeedback,
  View
} from "react-native";

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";
import variables from "../theme/variables/platform";

class ListItem extends Component {
  static contextTypes = {
    theme: React.PropTypes.object
  };
  render() {
    const variables = this.context.theme
      ? this.context.theme["@@shoutem.theme/themeStyle"].variables
      : variables;

    if (
      Platform.OS === "ios" ||
      variables.androidRipple === false ||
      (!this.props.onPress && !this.props.onLongPress) ||
      Platform.Version <= 21
    ) {
      return (
        <TouchableHighlight
          accessible={variables.accessible}
          onPress={this.props.onPress}
          onLongPress={this.props.onLongPress}
          ref={c => (this._root = c)}
          underlayColor={variables.listBtnUnderlayColor}
        >
          <View {...this.props}>{this.props.children}</View>
        </TouchableHighlight>
      );
    } else {
      return (
        <TouchableNativeFeedback
          accessible={variables.accessible}
          ref={c => (this._root = c)}
          onPress={this.props.onPress}
          onLongPress={this.props.onLongPress}
          background={
            this.props.androidRippleColor
              ? TouchableNativeFeedback.Ripple(this.props.androidRippleColor)
              : TouchableNativeFeedback.Ripple(variables.androidRippleColorDark)
          }
        >
          <View style={{ marginLeft: -17, paddingLeft: 17 }}>
            <View {...this.props}>{this.props.children}</View>
          </View>
        </TouchableNativeFeedback>
      );
    }
  }
}

ListItem.propTypes = {
  ...TouchableHighlight.propTypes,
  style: React.PropTypes.object,
  itemDivider: React.PropTypes.bool,
  button: React.PropTypes.bool
};

const StyledListItem = connectStyle(
  "NativeBase.ListItem",
  {},
  mapPropsToStyleNames
)(ListItem);

export { StyledListItem as ListItem };
