/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animation_mixin = require('pui-react-mixins/mixins/animation_mixin');

var _animation_mixin2 = _interopRequireDefault(_animation_mixin);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _puiReactMixins = require('pui-react-mixins');

var _puiReactMixins2 = _interopRequireDefault(_puiReactMixins);

var _puiReactHelpers = require('pui-react-helpers');

var _bounding_client_rect = require('pui-react-mixins/components/bounding_client_rect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('pui-css-collapse');

var types = _react2.default.PropTypes;

var privates = new WeakMap();

var Collapsible = function (_mixin$with) {
  _inherits(Collapsible, _mixin$with);

  function Collapsible(props, context) {
    _classCallCheck(this, Collapsible);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Collapsible).call(this, props, context));

    privates.set(_this, { isAnimating: false });
    return _this;
  }

  _createClass(Collapsible, [{
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
      var delay = _props2.delay;
      var expanded = _props2.expanded;

      var others = _objectWithoutProperties(_props2, ['boundingClientRect', 'children', 'delay', 'expanded']);

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
  delay: types.number,
  disableAnimation: types.bool,
  expanded: types.bool,
  onEntered: types.func,
  transitionProgress: types.number
};
Collapsible.defaultProps = {
  delay: 400
};


module.exports = { Collapsible: (0, _bounding_client_rect.useBoundingClientRect)(Collapsible) };