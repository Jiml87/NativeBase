import React, { Component } from 'react';
import { TouchableHighlight, Platform, TouchableNativeFeedback, View } from 'react-native';

import { connectStyle } from 'native-base-shoutem-theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';
import variable from '../theme/variables/platform';

class ListItem extends Component {
	static contextTypes = {
		theme: React.PropTypes.object,
	};
	render() {
		const variables = this.context.theme ? this.context.theme['@@shoutem.theme/themeStyle'].variables : variable;

		if (
			Platform.OS === 'ios' ||
			variable.androidRipple === false ||
			(!this.props.onPress && !this.props.onLongPress) ||
			Platform.Version <= 21
		) {
			return (
				<TouchableHighlight
					accessible={false}
					onPress={this.props.onPress}
					onLongPress={this.props.onLongPress}
					ref={c => (this._root = c)}
					underlayColor={variables.listBtnUnderlayColor}
					testID={this.props.testID}
					accessibilityLabel={this.props.accessibilityLabel}
				>
					<View {...this.props}>{this.props.children}</View>
				</TouchableHighlight>
			);
		} else {
			return (
				<TouchableNativeFeedback
					accessible={false}
					ref={c => (this._root = c)}
					onPress={this.props.onPress}
					onLongPress={this.props.onLongPress}
					background={
						this.props.androidRippleColor
							? TouchableNativeFeedback.Ripple(this.props.androidRippleColor)
							: TouchableNativeFeedback.Ripple(variable.androidRippleColorDark)
					}
					testID={this.props.testID}
					accessibilityLabel={this.props.accessibilityLabel}

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
	button: React.PropTypes.bool,
	accessibilityLabel: React.PropTypes.string,
	testID: React.PropTypes.string,
};
ListItem.defaultProps={
	accessibilityLabel: '',
	testID: '',
}

const StyledListItem = connectStyle('NativeBase.ListItem', {}, mapPropsToStyleNames)(ListItem);

export { StyledListItem as ListItem };
