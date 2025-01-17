/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

exports.__esModule = true;
exports.NotificationItem = exports.AlertNotifications = exports.Notifications = undefined;

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

var _iconography = require('../iconography');

var _dropdowns = require('../dropdowns');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notifications = exports.Notifications = function (_React$PureComponent) {
  (0, _inherits3.default)(Notifications, _React$PureComponent);

  function Notifications() {
    (0, _classCallCheck3.default)(this, Notifications);
    return (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.apply(this, arguments));
  }

  Notifications.prototype.render = function render() {
    var _props = this.props,
        size = _props.size,
        children = _props.children,
        others = (0, _objectWithoutProperties3.default)(_props, ['size', 'children']);

    var props = (0, _helpers.mergeProps)(others, { className: 'dropdown-notifications dropdown-icon-only' });
    var numChildren = _react2.default.Children.count(children);
    var badge = numChildren > 1 ? _react2.default.createElement(
      'span',
      { className: 'dropdown-notifications-badge' },
      numChildren
    ) : null;
    var dropdownTitleClasses = (0, _classnames2.default)('dropdown-notifications-title', size);
    var dropdownTitle = _react2.default.createElement(
      'div',
      { className: dropdownTitleClasses },
      _react2.default.createElement(_iconography.Icon, { src: 'notifications' }),
      badge
    );

    return _react2.default.createElement(
      _dropdowns.Dropdown,
      (0, _extends3.default)({ flat: true, showIcon: false, title: dropdownTitle }, props),
      children
    );
  };

  return Notifications;
}(_react2.default.PureComponent);

Notifications.propTypes = {
  size: _propTypes2.default.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};
Notifications.defaultProps = {
  children: _react2.default.createElement(
    'li',
    { role: 'presentation' },
    _react2.default.createElement(
      'div',
      { className: 'dropdown-notifications-none' },
      _react2.default.createElement(_iconography.Icon, { src: 'add' }),
      _react2.default.createElement(
        'p',
        { className: 'type-neutral-4 em-alt mbn' },
        'no notifications'
      )
    )
  )
};

var AlertNotifications = exports.AlertNotifications = function (_React$PureComponent2) {
  (0, _inherits3.default)(AlertNotifications, _React$PureComponent2);

  function AlertNotifications() {
    (0, _classCallCheck3.default)(this, AlertNotifications);
    return (0, _possibleConstructorReturn3.default)(this, _React$PureComponent2.apply(this, arguments));
  }

  AlertNotifications.prototype.render = function render() {
    var _props2 = this.props,
        size = _props2.size,
        children = _props2.children,
        others = (0, _objectWithoutProperties3.default)(_props2, ['size', 'children']);

    var numChildren = _react2.default.Children.count(children);
    var badge = numChildren > 1 && _react2.default.createElement(_iconography.Icon, { src: 'warning', className: 'dropdown-notifications-alert' });
    var dropdownTitleClasses = (0, _classnames2.default)('dropdown-notifications-title', size);
    var dropdownTitle = _react2.default.createElement(
      'div',
      { className: dropdownTitleClasses },
      _react2.default.createElement(_iconography.Icon, { src: 'notifications' }),
      badge
    );
    var props = (0, _helpers.mergeProps)(others, { className: 'dropdown-notifications dropdown-icon-only' });

    return _react2.default.createElement(
      _dropdowns.Dropdown,
      (0, _extends3.default)({ flat: true, showIcon: false, title: dropdownTitle }, props),
      children
    );
  };

  return AlertNotifications;
}(_react2.default.PureComponent);

AlertNotifications.propTypes = {
  size: _propTypes2.default.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};
AlertNotifications.defaultProps = {
  children: _react2.default.createElement(
    'li',
    { role: 'presentation' },
    _react2.default.createElement(
      'div',
      { className: 'dropdown-notifications-none' },
      _react2.default.createElement(_iconography.Icon, { src: 'notifications' }),
      _react2.default.createElement(
        'p',
        { className: 'type-neutral-4 em-alt mbn' },
        'no alerts'
      )
    )
  )
};

var NotificationItem = exports.NotificationItem = function (_React$PureComponent3) {
  (0, _inherits3.default)(NotificationItem, _React$PureComponent3);

  function NotificationItem() {
    (0, _classCallCheck3.default)(this, NotificationItem);
    return (0, _possibleConstructorReturn3.default)(this, _React$PureComponent3.apply(this, arguments));
  }

  NotificationItem.prototype.render = function render() {
    var _props3 = this.props,
        href = _props3.href,
        children = _props3.children,
        props = (0, _objectWithoutProperties3.default)(_props3, ['href', 'children']);

    return _react2.default.createElement(
      _dropdowns.DropdownItem,
      (0, _extends3.default)({ href: href }, props),
      children
    );
  };

  return NotificationItem;
}(_react2.default.PureComponent);

NotificationItem.propTypes = {
  href: _propTypes2.default.string
};