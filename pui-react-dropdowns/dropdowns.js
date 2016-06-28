/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _puiReactMixins = require('pui-react-mixins');

var _puiReactMixins2 = _interopRequireDefault(_puiReactMixins);

var _scrim_mixin = require('pui-react-mixins/mixins/scrim_mixin');

var _scrim_mixin2 = _interopRequireDefault(_scrim_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('pui-css-dropdowns');

var types = _react2.default.PropTypes;

var DEFAULT_KIND = 'btn-default';
var DEFAULT_TOGGLE = _react2.default.createElement('span', { className: 'caret' });

var Dropdown = function (_mixin$with) {
  _inherits(Dropdown, _mixin$with);

  function Dropdown(props, context) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, props, context));

    _this.click = function (event) {
      _this.setState({ isOpen: !_this.state.isOpen });
      _this.props.onClick && _this.props.onClick(event);
    };

    _this.scrimClick = function () {
      _this.setState({ isOpen: false });
    };

    _this.menuClick = function () {
      if (!_this.props.closeOnMenuClick) return;
      _this.setState({ isOpen: false });
    };

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var border = _props.border;
      var buttonClassName = _props.buttonClassName;
      var children = _props.children;
      var className = _props.className;
      var kind = _props.kind;
      var pullRight = _props.pullRight;
      var split = _props.split;
      var title = _props.title;
      var toggle = _props.toggle;

      var props = _objectWithoutProperties(_props, ['border', 'buttonClassName', 'children', 'className', 'kind', 'pullRight', 'split', 'title', 'toggle']);

      var isOpen = this.state.isOpen;


      var buttonKind = void 0,
          dropdownLabel = void 0,
          dropdownToggle = void 0,
          toggleNode = void 0;

      buttonKind = kind ? 'btn-' + kind : DEFAULT_KIND;
      toggleNode = toggle ? toggle : DEFAULT_TOGGLE;

      var buttonStyleClasses = (0, _classnames2.default)('btn', buttonKind, buttonClassName);
      dropdownLabel = split ? _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('dropdown-label', buttonStyleClasses) },
        title
      ) : null;
      dropdownToggle = _react2.default.createElement(
        'button',
        _extends({ type: 'button' }, props, { onClick: this.click, className: (0, _classnames2.default)('dropdown-toggle', buttonStyleClasses) }),
        !split ? title : null,
        toggleNode
      );

      var dropdownClasses = (0, _classnames2.default)('dropdown', 'btn-group', { open: isOpen }, { split: split }, className);
      var dropdownMenuClasses = (0, _classnames2.default)('dropdown-menu', { 'dropdown-border': border }, { 'dropdown-menu-right': pullRight });
      return _react2.default.createElement(
        'div',
        { className: dropdownClasses },
        dropdownLabel,
        dropdownToggle,
        _react2.default.createElement(
          'ul',
          { className: dropdownMenuClasses, onClick: this.menuClick },
          children
        )
      );
    }
  }]);

  return Dropdown;
}((0, _puiReactMixins2.default)(_react2.default.Component).with(_scrim_mixin2.default));

Dropdown.propTypes = {
  border: types.bool,
  buttonClassName: types.string,
  closeOnMenuClick: types.bool,
  disableScrim: types.bool,
  pullRight: types.bool,
  split: types.bool,
  title: types.node,
  toggle: types.node,
  onClick: types.func
};
Dropdown.defaultProps = {
  closeOnMenuClick: true,
  disableScrim: false
};

var LinkDropdown = function (_Dropdown) {
  _inherits(LinkDropdown, _Dropdown);

  function LinkDropdown() {
    _classCallCheck(this, LinkDropdown);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LinkDropdown).apply(this, arguments));
  }

  return LinkDropdown;
}(Dropdown);

LinkDropdown.defaultProps = _extends({}, Dropdown.defaultProps, {
  kind: 'link'
});

var DefaultAltDropdown = function (_Dropdown2) {
  _inherits(DefaultAltDropdown, _Dropdown2);

  function DefaultAltDropdown() {
    _classCallCheck(this, DefaultAltDropdown);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DefaultAltDropdown).apply(this, arguments));
  }

  return DefaultAltDropdown;
}(Dropdown);

DefaultAltDropdown.defaultProps = _extends({}, Dropdown.defaultProps, {
  kind: 'default-alt'
});

var LowlightDropdown = function (_Dropdown3) {
  _inherits(LowlightDropdown, _Dropdown3);

  function LowlightDropdown() {
    _classCallCheck(this, LowlightDropdown);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LowlightDropdown).apply(this, arguments));
  }

  return LowlightDropdown;
}(Dropdown);

LowlightDropdown.defaultProps = _extends({}, Dropdown.defaultProps, {
  kind: 'lowlight'
});

var DangerDropdown = function (_Dropdown4) {
  _inherits(DangerDropdown, _Dropdown4);

  function DangerDropdown() {
    _classCallCheck(this, DangerDropdown);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DangerDropdown).apply(this, arguments));
  }

  return DangerDropdown;
}(Dropdown);

DangerDropdown.defaultProps = _extends({}, Dropdown.defaultProps, {
  kind: 'danger'
});

var HighlightDropdown = function (_Dropdown5) {
  _inherits(HighlightDropdown, _Dropdown5);

  function HighlightDropdown() {
    _classCallCheck(this, HighlightDropdown);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HighlightDropdown).apply(this, arguments));
  }

  return HighlightDropdown;
}(Dropdown);

HighlightDropdown.defaultProps = _extends({}, Dropdown.defaultProps, {
  kind: 'highlight'
});

var HighlightAltDropdown = function (_Dropdown6) {
  _inherits(HighlightAltDropdown, _Dropdown6);

  function HighlightAltDropdown() {
    _classCallCheck(this, HighlightAltDropdown);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HighlightAltDropdown).apply(this, arguments));
  }

  return HighlightAltDropdown;
}(Dropdown);

HighlightAltDropdown.defaultProps = _extends({}, Dropdown.defaultProps, {
  kind: 'highlight-alt'
});

var DropdownItem = function (_React$Component) {
  _inherits(DropdownItem, _React$Component);

  function DropdownItem() {
    var _Object$getPrototypeO;

    var _temp, _this8, _ret;

    _classCallCheck(this, DropdownItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this8 = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DropdownItem)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this8), _this8.handleClick = function (event) {
      var _this8$props = _this8.props;
      var href = _this8$props.href;
      var disabled = _this8$props.disabled;
      var onSelect = _this8$props.onSelect;
      var eventKey = _this8$props.eventKey;


      if (!href || disabled) {
        event.preventDefault();
      }

      if (disabled) return;

      if (onSelect) {
        onSelect(event, eventKey);
      }
    }, _temp), _possibleConstructorReturn(_this8, _ret);
  }

  _createClass(DropdownItem, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var children = _props2.children;
      var className = _props2.className;
      var style = _props2.style;
      var href = _props2.href;
      var header = _props2.header;
      var divider = _props2.divider;
      var disabled = _props2.disabled;

      var anchorProps = _objectWithoutProperties(_props2, ['children', 'className', 'style', 'href', 'header', 'divider', 'disabled']);

      if (header) return _react2.default.createElement(
        'li',
        { role: 'heading', className: 'dropdown-header' },
        children
      );
      if (divider) return _react2.default.createElement('li', { role: 'separator', className: 'divider' });

      var anchor = void 0;
      if (href) {
        anchor = _react2.default.createElement(
          'a',
          _extends({}, _extends({ href: href, disabled: disabled }, anchorProps), { onClick: this.handleClick }),
          children
        );
      } else {
        anchor = children;
      }

      var disabledClass = disabled ? 'disabled' : '';
      var dropdownItemClass = (0, _classnames2.default)(className, disabledClass);
      return _react2.default.createElement(
        'li',
        _extends({ style: style }, { className: dropdownItemClass, onClick: href ? '' : this.handleClick }),
        anchor
      );
    }
  }]);

  return DropdownItem;
}(_react2.default.Component);

DropdownItem.propTypes = {
  className: types.string,
  style: types.object,
  href: types.string,
  header: types.bool,
  divider: types.bool,
  disabled: types.bool,
  eventKey: types.string,
  onSelect: types.func
};


module.exports = {
  Dropdown: Dropdown,
  DropdownItem: DropdownItem,
  LinkDropdown: LinkDropdown,
  DefaultAltDropdown: DefaultAltDropdown,
  HighlightAltDropdown: HighlightAltDropdown,
  HighlightDropdown: HighlightDropdown,
  DangerDropdown: DangerDropdown,
  LowlightDropdown: LowlightDropdown
};