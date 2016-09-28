/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

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

var _puiReactHelpers = require('pui-react-helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');
var types = React.PropTypes;
var BootstrapRow = require('react-bootstrap/lib/Row');

require('pui-css-grids');

var Row = function (_React$Component) {
  (0, _inherits3.default)(Row, _React$Component);

  function Row() {
    (0, _classCallCheck3.default)(this, Row);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Row).apply(this, arguments));
  }

  (0, _createClass3.default)(Row, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var gutter = _props.gutter;
      var children = _props.children;
      var other = (0, _objectWithoutProperties3.default)(_props, ['gutter', 'children']);

      var gutterClass = {
        'row-gutter-md': gutter === 'md',
        'row-gutter-sm': gutter === 'sm'
      };
      var props = (0, _puiReactHelpers.mergeProps)(other, { className: gutterClass });
      return React.createElement(
        BootstrapRow,
        props,
        children
      );
    }
  }]);
  return Row;
}(React.Component);

Row.propTypes = {
  gutter: types.oneOf(['sm', 'md', 'lg'])
};


var Col = require('react-bootstrap/lib/Col');

module.exports = { Row: Row, Col: Col };