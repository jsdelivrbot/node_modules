/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

exports.__esModule = true;
exports.OverlayTrigger = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _weakMap = require('babel-runtime/core-js/weak-map');

var _weakMap2 = _interopRequireDefault(_weakMap);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _scrim_mixin = require('../mixins/mixins/scrim_mixin');

var _scrim_mixin2 = _interopRequireDefault(_scrim_mixin);

var _reactTether = require('react-tether');

var _reactTether2 = _interopRequireDefault(_reactTether);

var _lodash = require('lodash.uniqueid');

var _lodash2 = _interopRequireDefault(_lodash);

var _mixins = require('../mixins');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TETHER_PLACEMENTS = {
  top: 'bottom center',
  bottom: 'top center',
  left: 'middle right',
  right: 'middle left'
};

var privates = new _weakMap2.default();

var OverlayTrigger = exports.OverlayTrigger = function (_mixin$with) {
  (0, _inherits3.default)(OverlayTrigger, _mixin$with);

  function OverlayTrigger(props, context) {
    (0, _classCallCheck3.default)(this, OverlayTrigger);

    var _this = (0, _possibleConstructorReturn3.default)(this, _mixin$with.call(this, props, context));

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
      var _this$props = _this.props,
          delay = _this$props.delay,
          delayHide = _this$props.delayHide,
          delayShow = _this$props.delayShow,
          isSticky = _this$props.isSticky;

      if (display && delayShow) return delayShow;
      if (!display && delayHide) return delayHide;
      if (!display && isSticky && !delay) return 50;
      return delay;
    };

    _this.scrimClick = function () {
      return _this.hide();
    };

    _this.setDisplay = function (display) {
      var oldTimeout = privates.get(_this).timeout;

      if (display === _this.state.display) {
        clearTimeout(oldTimeout);
        privates.set(_this, { timeout: null });
        return;
      }

      var delay = _this.getDelay(display);

      if (oldTimeout && delay) return;

      var timeout = void 0;
      if (delay) {
        timeout = setTimeout(function () {
          privates.set(_this, { timeout: null });
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
      return _this.setDisplay(true);
    };

    _this.hide = function () {
      return _this.setDisplay(false);
    };

    privates.set(_this, {});
    _this.state = {
      display: props.display
    };
    return _this;
  }

  OverlayTrigger.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var display = _ref.display;

    if (display !== this.props.display) this.setDisplay(display);
  };

  OverlayTrigger.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    require('../../css/tooltips');
    if (prevState.display !== this.state.display) {
      var _props = this.props,
          onEntered = _props.onEntered,
          onExited = _props.onExited;

      var callback = this.state.display ? onEntered : onExited;
      callback && callback();
    }
  };

  OverlayTrigger.prototype.componentWillUnmount = function componentWillUnmount() {
    if (_mixin$with.prototype.componentWillUnmount) _mixin$with.prototype.componentWillUnmount.call(this);
    clearTimeout(privates.get(this).timeout);
  };

  OverlayTrigger.prototype.render = function render() {
    var _props2 = this.props,
        children = _props2.children,
        isSticky = _props2.isSticky,
        overlay = _props2.overlay,
        pin = _props2.pin,
        placement = _props2.placement,
        theme = _props2.theme,
        trigger = _props2.trigger,
        props = (0, _objectWithoutProperties3.default)(_props2, ['children', 'isSticky', 'overlay', 'pin', 'placement', 'theme', 'trigger']);
    var display = this.state.display;


    var triggerHandlers = {
      'manual': {},
      'hover': {
        onMouseOver: this.triggerShow('onMouseOver'),
        onMouseOut: this.triggerHide('onMouseOut')
      },
      'focus': {
        onFocus: this.triggerShow('onFocus'),
        onBlur: this.triggerHide('onBlur')
      },
      'click': {
        onClick: this.click
      }
    }[trigger];

    var overlayId = overlay.props.id || (0, _lodash2.default)('overlay');
    overlay = _react2.default.cloneElement(overlay, { id: overlayId });

    if (isSticky) {
      overlay = _react2.default.cloneElement(overlay, {
        onMouseOver: this.triggerShow('onMouseOver'),
        onMouseOut: this.triggerHide('onMouseOut')
      });
    }

    children = _react2.default.cloneElement(children, (0, _extends3.default)({
      'aria-describedby': overlayId
    }, triggerHandlers));

    var classes = (0, _classnames2.default)('tooltip', {
      'tooltip-light': theme === 'light'
    });

    var tetherProps = (0, _extends3.default)({
      attachment: TETHER_PLACEMENTS[placement],
      constraints: pin ? [{ to: 'window', attachment: 'together', pin: true }] : [],
      className: classes,
      classes: { 'target-attached': 'tooltip' }
    }, props);

    return _react2.default.createElement(
      _reactTether2.default,
      tetherProps,
      children,
      display && overlay
    );
  };

  return OverlayTrigger;
}((0, _mixins2.default)(_react2.default.Component).with(_scrim_mixin2.default));

OverlayTrigger.propTypes = {
  delay: _propTypes2.default.number,
  delayHide: _propTypes2.default.number,
  delayShow: _propTypes2.default.number,
  disableScrim: _propTypes2.default.bool,
  display: _propTypes2.default.bool,
  isSticky: _propTypes2.default.bool,
  onEntered: _propTypes2.default.func,
  onExited: _propTypes2.default.func,
  overlay: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.object]),
  pin: _propTypes2.default.bool,
  placement: _propTypes2.default.oneOf(['top', 'bottom', 'left', 'right']),
  theme: _propTypes2.default.oneOf(['light', 'dark']),
  trigger: _propTypes2.default.oneOf(['hover', 'click', 'focus', 'manual'])
};
OverlayTrigger.defaultProps = {
  display: false,
  isSticky: false,
  pin: true,
  placement: 'right',
  theme: 'dark',
  trigger: 'hover'
};