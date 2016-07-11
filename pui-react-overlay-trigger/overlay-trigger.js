/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.uniqueid');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactTether = require('react-tether');

var _reactTether2 = _interopRequireDefault(_reactTether);

var _puiReactMixins = require('pui-react-mixins');

var _puiReactMixins2 = _interopRequireDefault(_puiReactMixins);

var _scrim_mixin = require('pui-react-mixins/mixins/scrim_mixin');

var _scrim_mixin2 = _interopRequireDefault(_scrim_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = _react2.default.PropTypes;

var TETHER_PLACEMENTS = {
  top: 'bottom center',
  bottom: 'top center',
  left: 'middle right',
  right: 'middle left'
};

var privates = new WeakMap();

var OverlayTrigger = function (_mixin$with) {
  _inherits(OverlayTrigger, _mixin$with);

  function OverlayTrigger(props, context) {
    _classCallCheck(this, OverlayTrigger);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OverlayTrigger).call(this, props, context));

    _this.triggerShow = function (eventType) {
      return function () {
        _this.show();
        var userCallback = _this.props.children.props[eventType];
        userCallback && userCallback.apply(undefined, arguments);
      };
    };

    _this.triggerHide = function (eventType) {
      return function () {
        _this.hide();
        var userCallback = _this.props.children.props[eventType];
        userCallback && userCallback.apply(undefined, arguments);
      };
    };

    _this.getDelay = function (display) {
      var _this$props = _this.props;
      var delay = _this$props.delay;
      var delayHide = _this$props.delayHide;
      var delayShow = _this$props.delayShow;

      if (display && delayShow) return delayShow;
      if (!display && delayHide) return delayHide;
      return delay;
    };

    _this.scrimClick = function () {
      _this.hide();
    };

    _this.setDisplay = function (display) {
      clearTimeout(privates.get(_this).timeout);
      if (display === _this.state.display) return;
      var delay = _this.getDelay(display);
      var timeout = void 0;
      if (delay) {
        timeout = setTimeout(function () {
          _this.setState({ display: display });
        }, delay);
      } else {
        _this.setState({ display: display });
      }

      privates.set(_this, { timeout: timeout });
    };

    _this.click = function () {
      _this.setDisplay(!_this.state.display);
      var userCallback = _this.props.children.props.onClick;
      userCallback && userCallback.apply(undefined, arguments);
    };

    _this.show = function () {
      _this.setDisplay(true);
    };

    _this.hide = function () {
      _this.setDisplay(false);
    };

    privates.set(_this, {});
    _this.state = {
      display: props.display
    };
    return _this;
  }

  _createClass(OverlayTrigger, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var display = _ref.display;

      if (display !== this.props.display) this.setDisplay(display);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.display !== this.state.display) {
        var _props = this.props;
        var onEntered = _props.onEntered;
        var onExited = _props.onExited;

        var callback = this.state.display ? onEntered : onExited;
        callback && callback();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (_get(Object.getPrototypeOf(OverlayTrigger.prototype), 'componentWillUnmount', this)) _get(Object.getPrototypeOf(OverlayTrigger.prototype), 'componentWillUnmount', this).call(this);
      clearTimeout(privates.get(this).timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var children = _props2.children;
      var overlay = _props2.overlay;
      var pin = _props2.pin;
      var placement = _props2.placement;
      var trigger = _props2.trigger;

      var props = _objectWithoutProperties(_props2, ['children', 'overlay', 'pin', 'placement', 'trigger']);

      var display = this.state.display;


      var overlayId = overlay.props.id || (0, _lodash2.default)('overlay');
      overlay = _react2.default.cloneElement(overlay, { id: overlayId });

      var triggerHandlers = {
        'manual': {},
        'hover': {
          onMouseOver: this.triggerShow('onMouseOver'),
          onMouseOut: this.triggerHide('onMouseOut')
        },
        'focus': {
          onFocus: this.triggerShow('onFocus'),
          onBlur: this.triggerHide('onFocus')
        },
        'click': {
          onClick: this.click
        }
      }[trigger];

      children = _react2.default.cloneElement(children, _extends({
        'aria-describedby': overlayId
      }, triggerHandlers));

      var tetherProps = _extends({
        attachment: TETHER_PLACEMENTS[placement],
        constraints: pin ? [{ to: 'window', attachment: 'together', pin: true }] : [],
        classes: { 'target-attached': 'overlay-placement' }
      }, props);

      return _react2.default.createElement(
        _reactTether2.default,
        tetherProps,
        children,
        display && overlay
      );
    }
  }]);

  return OverlayTrigger;
}((0, _puiReactMixins2.default)(_react2.default.Component).with(_scrim_mixin2.default));

OverlayTrigger.propTypes = {
  delay: types.number,
  delayHide: types.number,
  delayShow: types.number,
  display: types.bool,
  onEntered: types.func,
  onExited: types.func,
  overlay: types.element,
  pin: types.bool,
  placement: types.oneOf(['top', 'bottom', 'left', 'right']),
  disableScrim: types.bool,
  trigger: types.oneOf(['hover', 'click', 'focus', 'manual'])
};
OverlayTrigger.defaultProps = {
  display: false,
  pin: true,
  placement: 'right',
  trigger: 'hover'
};


module.exports = {
  OverlayTrigger: OverlayTrigger
};