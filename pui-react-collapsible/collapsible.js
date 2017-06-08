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

var _weakMap = require('babel-runtime/core-js/weak-map');

var _weakMap2 = _interopRequireDefault(_weakMap);

var _animation_mixin = require('pui-react-mixins/mixins/animation_mixin');

var _animation_mixin2 = _interopRequireDefault(_animation_mixin);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _puiReactMixins = require('pui-react-mixins');

var _puiReactMixins2 = _interopRequireDefault(_puiReactMixins);

var _puiReactHelpers = require('pui-react-helpers');

var _bounding_client_rect = require('pui-react-mixins/components/bounding_client_rect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('pui-css-collapse');

var types = _react2.default.PropTypes;

var privates = new _weakMap2.default();

var Collapsible = function (_mixin$with) {
  (0, _inherits3.default)(Collapsible, _mixin$with);

  function Collapsible(props, context) {
    (0, _classCallCheck3.default)(this, Collapsible);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Collapsible).call(this, props, context));

    privates.set(_this, { isAnimating: false });
    return _this;
  }

  (0, _createClass3.default)(Collapsible, [{
    key: 'toggleAnimation',
    value: function toggleAnimation(isAnimating) {
      var _props = this.props;
      var expanded = _props.expanded;
      var onEntered = _props.onEntered;
      var onExited = _props.onExited;

      if (!isAnimating) {
        expanded && onEntered && onEntered();
        !expanded && onExited && onExited();
      }

      privates.set(this, { isAnimating: isAnimating });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var _props2$boundingClien = _props2.boundingClientRect.height;
      var height = _props2$boundingClien === undefined ? 0 : _props2$boundingClien;
      var children = _props2.children;
      var container = _props2.container;
      var containerReady = _props2.containerReady;
      var delay = _props2.delay;
      var expanded = _props2.expanded;
      var onEntered = _props2.onEntered;
      var onExited = _props2.onExited;
      var others = (0, _objectWithoutProperties3.default)(_props2, ['boundingClientRect', 'children', 'container', 'containerReady', 'delay', 'expanded', 'onEntered', 'onExited']);


      var fractionOpen = this.animate('fractionOpen', expanded ? 1 : 0, delay);

      var isAnimating = !expanded && fractionOpen > 0 || expanded && fractionOpen < 1;
      var style = height && isAnimating ? { marginBottom: -height * (1 - fractionOpen) } : {};

      if (privates.get(this).isAnimating !== isAnimating) {
        this.toggleAnimation(isAnimating);
      }

      var props = (0, _puiReactHelpers.mergeProps)(others, {
        className: ['collapse', { 'in': expanded || isAnimating }],
        style: isAnimating ? { overflow: 'hidden' } : {},
        'aria-hidden': !expanded
      });

      return _react2.default.createElement(
        'div',
        props,
        _react2.default.createElement(
          'div',
          { className: 'collapse-shield', style: style },
          children
        )
      );
    }
  }]);
  return Collapsible;
}((0, _puiReactMixins2.default)(_react2.default.Component).with(_animation_mixin2.default));

Collapsible.propTypes = {
  boundingClientRect: types.object,
  container: types.object,
  containerReady: types.object,
  delay: types.number,
  disableAnimation: types.bool,
  expanded: types.bool,
  onEntered: types.func,
  onExited: types.func,
  transitionProgress: types.number
};
Collapsible.defaultProps = {
  delay: 400
};


module.exports = { Collapsible: (0, _bounding_client_rect.useBoundingClientRect)(Collapsible) };