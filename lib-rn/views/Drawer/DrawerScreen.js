Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);

var _SceneView=require('../SceneView');var _SceneView2=_interopRequireDefault(_SceneView);
var _withCachedChildNavigation=require('../../withCachedChildNavigation');var _withCachedChildNavigation2=_interopRequireDefault(_withCachedChildNavigation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var





















DrawerScreen=function(_PureComponent){_inherits(DrawerScreen,_PureComponent);function DrawerScreen(){_classCallCheck(this,DrawerScreen);return _possibleConstructorReturn(this,(DrawerScreen.__proto__||Object.getPrototypeOf(DrawerScreen)).apply(this,arguments));}_createClass(DrawerScreen,[{key:'render',value:function render()


{var _props=
this.props,router=_props.router,navigation=_props.navigation,childNavigationProps=_props.childNavigationProps;var _navigation$state=
navigation.state,routes=_navigation$state.routes,index=_navigation$state.index;
var childNavigation=childNavigationProps[routes[index].key];
var Content=router.getComponentForRouteName(routes[index].routeName);
return(
_react2.default.createElement(_SceneView2.default,{
screenProps:this.props.screenProps,
component:Content,
navigation:childNavigation}));


}}]);return DrawerScreen;}(_react.PureComponent);exports.default=


(0,_withCachedChildNavigation2.default)(DrawerScreen);