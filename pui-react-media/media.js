/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var React = require('react');
var classnames = require('classnames');
require('pui-css-media');

var types = React.PropTypes;

var shortSizes = { xsmall: 'xs', small: 'sm', medium: 'md', large: 'lg', xlarge: 'xl' };
var charSizes = { small: 's', medium: 'm', large: 'l', xlarge: 'xl' };
var paddingDirection = { left: 'r', right: 'l' };

var Media = function (_React$Component) {
  (0, _inherits3.default)(Media, _React$Component);

  function Media() {
    (0, _classCallCheck3.default)(this, Media);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Media).apply(this, arguments));
  }

  (0, _createClass3.default)(Media, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var innerClassName = _props.innerClassName;
      var image = _props.image;
      var mediaSpacing = _props.mediaSpacing;
      var stackSize = _props.stackSize;
      var vAlign = _props.vAlign;
      var placement = _props.placement;
      var children = _props.children;
      var other = (0, _objectWithoutProperties3.default)(_props, ['className', 'innerClassName', 'image', 'mediaSpacing', 'stackSize', 'vAlign', 'placement', 'children']);


      var vAlignClass = vAlign && 'media-' + vAlign;

      var classes = classnames('media', stackSize && 'media-stackable-' + shortSizes[stackSize], className);

      var bodyClasses = classnames('media-body', vAlignClass, innerClassName);

      var mediaClasses = classnames('media-' + placement, vAlignClass, 'p' + paddingDirection[placement] + charSizes[mediaSpacing]);

      var content = [React.createElement(
        'div',
        { key: 0, className: mediaClasses },
        image
      ), React.createElement(
        'div',
        { key: 1, className: bodyClasses },
        children
      )];

      if (placement === 'right') {
        content.reverse();
      }

      return React.createElement(
        'div',
        (0, _extends3.default)({}, other, { className: classes }),
        content
      );
    }
  }]);
  return Media;
}(React.Component);

Media.propTypes = {
  image: types.node.isRequired,
  innerClassName: types.string,
  mediaSpacing: types.oneOf(['small', 'medium', 'large', 'xlarge']),
  stackSize: types.oneOf(['xsmall', 'small', 'medium', 'large']),
  vAlign: types.oneOf(['middle', 'bottom']),
  placement: types.oneOf(['left', 'right']),
  className: types.string
};
Media.defaultProps = {
  placement: 'left'
};

var Flag = function (_React$Component2) {
  (0, _inherits3.default)(Flag, _React$Component2);

  function Flag() {
    (0, _classCallCheck3.default)(this, Flag);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Flag).apply(this, arguments));
  }

  (0, _createClass3.default)(Flag, [{
    key: 'render',
    value: function render() {
      return React.createElement(Media, (0, _extends3.default)({}, this.props, { vAlign: 'middle' }));
    }
  }]);
  return Flag;
}(React.Component);

module.exports = { Media: Media, Flag: Flag };