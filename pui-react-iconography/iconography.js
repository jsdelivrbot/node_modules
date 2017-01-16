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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('pui-react-helpers'),
    mergeProps = _require.mergeProps;

var React = require('react');

var _require2 = require('pui-react-svg'),
    Svg = _require2.Svg;

require('pui-css-iconography');

var types = React.PropTypes;

var SvgIcon = function (_Svg) {
  (0, _inherits3.default)(SvgIcon, _Svg);

  function SvgIcon() {
    (0, _classCallCheck3.default)(this, SvgIcon);
    return (0, _possibleConstructorReturn3.default)(this, (SvgIcon.__proto__ || (0, _getPrototypeOf2.default)(SvgIcon)).apply(this, arguments));
  }

  (0, _createClass3.default)(SvgIcon, [{
    key: 'svgPathLoader',
    value: function svgPathLoader(src) {
      return require('!!babel!svg-react!pui-css-iconography/svgs/' + src + '.svg');
    }
  }]);
  return SvgIcon;
}(Svg);

var Icon = function (_React$Component) {
  (0, _inherits3.default)(Icon, _React$Component);

  function Icon() {
    (0, _classCallCheck3.default)(this, Icon);
    return (0, _possibleConstructorReturn3.default)(this, (Icon.__proto__ || (0, _getPrototypeOf2.default)(Icon)).apply(this, arguments));
  }

  (0, _createClass3.default)(Icon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          src = _props.src,
          style = _props.style,
          others = (0, _objectWithoutProperties3.default)(_props, ['src', 'style']);


      var props = mergeProps(others, { className: 'svgicon' });
      return React.createElement(
        'span',
        props,
        React.createElement(SvgIcon, { src: src, style: style, className: 'icon-' + src, key: src })
      );
    }
  }]);
  return Icon;
}(React.Component);

Icon.propTypes = {
  src: types.string.isRequired,
  style: types.object
};
Icon.defaultProps = {
  size: 'inherit',
  style: {}
};


module.exports = { Icon: Icon };