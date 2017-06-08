/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.mergeProps = mergeProps;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @component mergeProps
 * @description A helper function that merges default props and provided props
 *
 * @param reactInstanceProps properties passed into the component. Typically
 * `this.props`
 *
 * @param defaultProps default values for the react component
 *
 * @return a merged hash of props, giving precedence to the `reactInstanceProps`.
 * If `className` is defined by both sets of props, the resultant `className`
 * will be a combination of the two.
 * If `style` is defined by both, the resultant `style` hash will be a merge of
 * the two style hashes, with precedence given to `reactInstanceProps`'s style.
 *
 * @example ```js
 * var {mergeProps} = require('pui-react-helpers');
 *
 * class Ribbon extends React.Component {
 *   render() {
 *     var {children, ...others} = this.props;
 *     var props = mergeProps(others, {className: 'ribbon', style: {height: '50px', color: 'blue'}, id: 'default-ribbon-id'});
 *     return <div {...props}>{children}</div>;
 *   }
 * }
 *
 * ReactDOM.render(<Ribbon className="my-ribbon" style={{height: '25px'}} id="unique-ribbon-id" />, myNode);
 * // Resultant props: {className: 'ribbon my-ribbon', style: {height: '25px', color: 'blue'}, id: 'unique-ribbon-id'}
 * ```
 */

function mergeProps(reactInstanceProps, defaultProps) {
  var className = reactInstanceProps.className;
  var id = reactInstanceProps.id;
  var style = reactInstanceProps.style;
  var remainingProps = (0, _objectWithoutProperties3.default)(reactInstanceProps, ['className', 'id', 'style']);
  var defaultClassName = defaultProps.className;
  var defaultId = defaultProps.id;
  var _defaultProps$style = defaultProps.style;
  var defaultStyle = _defaultProps$style === undefined ? {} : _defaultProps$style;
  var remainingDefaultProps = (0, _objectWithoutProperties3.default)(defaultProps, ['className', 'id', 'style']);


  className = (0, _classnames2.default)(defaultClassName, className);
  style = (0, _extends3.default)({}, defaultStyle, style);
  id = id || defaultId;
  remainingProps = (0, _extends3.default)({}, remainingDefaultProps, remainingProps);

  return (0, _extends3.default)({ className: className, id: id, style: style }, remainingProps);
}