/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;
exports.mergeProps = mergeProps;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

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
 * var Ribbon = React.createClass({
 *   render() {
 *     var {children, ...others} = this.props;
 *     var props = mergeProps(others, {className: 'ribbon', style: {height: '50px', color: 'blue'}, id: 'default-ribbon-id'});
 *     return <div {...props}>{children}</div>;
 *   }
 * });
 *
 * ReactDOM.render(<Ribbon className="my-ribbon" style={{height: '25px'}} id="unique-ribbon-id" />, myNode);
 * // Resultant props: {className: 'ribbon my-ribbon', style: {height: '25px', color: 'blue'}, id: 'unique-ribbon-id'}
 * ```
 */

function mergeProps(reactInstanceProps, defaultProps) {
  var className = reactInstanceProps.className;
  var id = reactInstanceProps.id;
  var style = reactInstanceProps.style;

  var remainingProps = _objectWithoutProperties(reactInstanceProps, ['className', 'id', 'style']);

  var defaultClassName = defaultProps.className;
  var defaultId = defaultProps.id;
  var _defaultProps$style = defaultProps.style;
  var defaultStyle = _defaultProps$style === undefined ? {} : _defaultProps$style;

  var remainingDefaultProps = _objectWithoutProperties(defaultProps, ['className', 'id', 'style']);

  className = _classnames2['default'](defaultClassName, className);
  style = _extends({}, defaultStyle, style);
  id = id || defaultId;
  remainingProps = _extends({}, remainingDefaultProps, remainingProps);

  return _extends({ className: className, id: id, style: style }, remainingProps);
}