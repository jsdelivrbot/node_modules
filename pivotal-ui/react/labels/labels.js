/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

exports.__esModule = true;
exports.Label = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = exports.Label = function (_React$PureComponent) {
  (0, _inherits3.default)(Label, _React$PureComponent);

  function Label() {
    (0, _classCallCheck3.default)(this, Label);
    return (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.apply(this, arguments));
  }

  Label.prototype.componentDidMount = function componentDidMount() {
    require('../../css/labels');
  };

  Label.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        props = (0, _objectWithoutProperties3.default)(_props, ['children']);

    return _react2.default.createElement(
      'span',
      props,
      children
    );
  };

  return Label;
}(_react2.default.PureComponent);

Label.defaultProps = {
  className: 'label label-primary'
};