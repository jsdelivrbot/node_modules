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

require('pui-css-images');

var Image = function (_React$Component) {
  (0, _inherits3.default)(Image, _React$Component);

  function Image() {
    (0, _classCallCheck3.default)(this, Image);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Image).apply(this, arguments));
  }

  (0, _createClass3.default)(Image, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var responsive = _props.responsive;
      var href = _props.href;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['responsive', 'href', 'children']);

      if (responsive) {
        props = (0, _puiReactHelpers.mergeProps)(props, { className: 'img-responsive' });
      }

      var image = React.createElement(
        'img',
        props,
        children
      );
      return href ? React.createElement(
        'a',
        { href: href },
        image
      ) : image;
    }
  }]);
  return Image;
}(React.Component);

Image.propTypes = {
  responsive: types.bool,
  href: types.string,
  alt: types.string,
  src: types.string.isRequired
};


module.exports = { Image: Image };