var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src/basic/Tabs/Button.android.js";


var _platform=require("../../theme/variables/platform");var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var React=require("react");var ReactNative=require("react-native");var TouchableNativeFeedback=ReactNative.TouchableNativeFeedback,View=ReactNative.View;

var Button=function Button(props){
return(
React.createElement(TouchableNativeFeedback,_extends({
accessible:_platform2.default.accessible,
delayPressIn:0,
background:TouchableNativeFeedback.SelectableBackground()},
props,{__source:{fileName:_jsxFileName,lineNumber:8}}),

props.children));


};

module.exports=Button;
//# sourceMappingURL=Button.android.js.map