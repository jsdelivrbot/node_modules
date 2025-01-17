/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

exports.__esModule = true;
exports.TooltipTrigger = exports.Tooltip = undefined;

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tooltip = exports.Tooltip = function (_React$PureComponent) {
  (0, _inherits3.default)(Tooltip, _React$PureComponent);

  function Tooltip(props) {
    (0, _classCallCheck3.default)(this, Tooltip);
    return (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call(this, props));
  }

  Tooltip.prototype.componentDidMount = function componentDidMount() {
    require('../../css/tooltips');
  };

  Tooltip.prototype.render = function render() {
    var _props = this.props,
        isSticky = _props.isSticky,
        visible = _props.visible,
        size = _props.size,
        className = _props.className,
        children = _props.children,
        others = (0, _objectWithoutProperties3.default)(_props, ['isSticky', 'visible', 'size', 'className', 'children']);


    var newClasses = (0, _classnames2.default)('tooltip-container', visible ? 'tooltip-container-visible' : 'tooltip-container-hidden', size === 'auto' ? null : 'tooltip-' + size, isSticky ? 'tooltip-hoverable' : null, className);

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({ className: newClasses }, others),
      _react2.default.createElement(
        'div',
        { className: 'tooltip-content' },
        children
      )
    );
  };

  return Tooltip;
}(_react2.default.PureComponent);

Tooltip.propTypes = {
  visible: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['auto', 'sm', 'md', 'lg']),
  isSticky: _propTypes2.default.bool
};
Tooltip.defaultProps = {
  visible: true,
  size: 'auto',
  isSticky: false
};

var TooltipTrigger = exports.TooltipTrigger = function (_React$Component) {
  (0, _inherits3.default)(TooltipTrigger, _React$Component);

  function TooltipTrigger(props) {
    (0, _classCallCheck3.default)(this, TooltipTrigger);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this2.state = { visible: false };
    _this2.clickHandler = _this2.clickHandler.bind(_this2);
    return _this2;
  }

  TooltipTrigger.prototype.componentDidMount = function componentDidMount() {
    require('../../css/tooltips');
  };

  TooltipTrigger.prototype.hoverHandler = function hoverHandler(e) {
    this.setState({ visible: e.type === 'mouseenter' });
  };

  TooltipTrigger.prototype.clickHandler = function clickHandler(e, onClick) {
    var _this3 = this;

    this.setState({ visible: true });
    onClick(e);
    setTimeout(function () {
      _this3.setState({ visible: false });
    }, this.props.clickHideDelay);
  };

  TooltipTrigger.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.visible && !this.state.visible) {
      this.props.onExited();
    } else if (!prevState.visible && this.state.visible) {
      this.props.onEntered();
    }
  };

  TooltipTrigger.prototype.render = function render() {
    var _this4 = this;

    var _props2 = this.props,
        isSticky = _props2.isSticky,
        placement = _props2.placement,
        tooltip = _props2.tooltip,
        trigger = _props2.trigger,
        className = _props2.className,
        clickHideDelay = _props2.clickHideDelay,
        onEntered = _props2.onEntered,
        onExited = _props2.onExited,
        theme = _props2.theme,
        size = _props2.size,
        _onClick = _props2.onClick,
        others = (0, _objectWithoutProperties3.default)(_props2, ['isSticky', 'placement', 'tooltip', 'trigger', 'className', 'clickHideDelay', 'onEntered', 'onExited', 'theme', 'size', 'onClick']);
    var visible = this.state.visible;


    var placementClass = void 0;
    if (placement !== 'top') {
      placementClass = 'tooltip-' + placement;
    }

    var triggerHandler = void 0;
    switch (trigger) {
      case 'click':
        triggerHandler = { onClick: function onClick(e) {
            return _this4.clickHandler(e, _onClick);
          } };
        break;
      default:
        triggerHandler = {
          onClick: _onClick,
          onMouseEnter: this.hoverHandler.bind(this),
          onMouseLeave: this.hoverHandler.bind(this)
        };
        break;
    }

    var newClasses = (0, _classnames2.default)('tooltip', className, placementClass, theme === 'light' ? 'tooltip-light' : null);
    var newProps = (0, _extends3.default)({ className: newClasses }, triggerHandler, others);

    return _react2.default.createElement(
      'div',
      newProps,
      this.props.children,
      _react2.default.createElement(
        Tooltip,
        { isSticky: isSticky, size: this.props.size, visible: visible },
        tooltip
      )
    );
  };

  return TooltipTrigger;
}(_react2.default.Component);

TooltipTrigger.propTypes = {
  tooltip: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.object]).isRequired,
  placement: _propTypes2.default.oneOf(['left', 'right', 'bottom', 'top']),
  trigger: _propTypes2.default.oneOf(['hover', 'click']),
  clickHideDelay: _propTypes2.default.number,
  onClick: _propTypes2.default.func,
  onEntered: _propTypes2.default.func,
  onExited: _propTypes2.default.func,
  theme: _propTypes2.default.oneOf(['dark', 'light']),
  size: _propTypes2.default.oneOf(['auto', 'sm', 'md', 'lg']),
  isSticky: _propTypes2.default.bool
};
TooltipTrigger.defaultProps = {
  placement: 'top',
  trigger: 'hover',
  clickHideDelay: 1000,
  onClick: function onClick() {},
  onEntered: function onEntered() {},
  onExited: function onExited() {},
  theme: 'dark',
  size: 'auto',
  isSticky: false
};