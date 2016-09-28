/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classnames = require('classnames');
var React = require('react');
var ReactFaIcon = require('react-fa/lib/Icon');
require('pui-css-iconography');

var types = React.PropTypes;

var Icon = function (_React$Component) {
  (0, _inherits3.default)(Icon, _React$Component);

  function Icon() {
    (0, _classCallCheck3.default)(this, Icon);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
  }

  (0, _createClass3.default)(Icon, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var size = _props.size;
      var className = _props.className;
      var props = (0, _objectWithoutProperties3.default)(_props, ['size', 'className']);


      var classes = classnames(className, (0, _defineProperty3.default)({}, 'fa-' + size, size));

      return React.createElement(ReactFaIcon, (0, _extends3.default)({ className: classes }, props));
    }
  }]);
  return Icon;
}(React.Component);

Icon.propTypes = {
  className: types.string,
  size: types.string
};


module.exports = { Icon: Icon };