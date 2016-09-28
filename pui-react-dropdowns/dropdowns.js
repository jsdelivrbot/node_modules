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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _puiReactMixins = require('pui-react-mixins');

var _puiReactMixins2 = _interopRequireDefault(_puiReactMixins);

var _scrim_mixin = require('pui-react-mixins/mixins/scrim_mixin');

var _scrim_mixin2 = _interopRequireDefault(_scrim_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('pui-css-dropdowns');

var types = _react2.default.PropTypes;

var DEFAULT_KIND = 'btn-default';
var DEFAULT_TOGGLE = _react2.default.createElement('span', { className: 'caret' });

var Dropdown = function (_mixin$with) {
  (0, _inherits3.default)(Dropdown, _mixin$with);

  function Dropdown(props, context) {
    (0, _classCallCheck3.default)(this, Dropdown);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Dropdown).call(this, props, context));

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

  (0, _createClass3.default)(Dropdown, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var border = _props.border;
      var buttonClassName = _props.buttonClassName;
      var children = _props.children;
      var className = _props.className;
      var closeOnMenuClick = _props.closeOnMenuClick;
      var disableScrim = _props.disableScrim;
      var kind = _props.kind;
      var pullRight = _props.pullRight;
      var onClick = _props.onClick;
      var split = _props.split;
      var title = _props.title;
      var toggle = _props.toggle;
      var props = (0, _objectWithoutProperties3.default)(_props, ['border', 'buttonClassName', 'children', 'className', 'closeOnMenuClick', 'disableScrim', 'kind', 'pullRight', 'onClick', 'split', 'title', 'toggle']);
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
        (0, _extends3.default)({ type: 'button' }, props, { onClick: this.click, className: (0, _classnames2.default)('dropdown-toggle', buttonStyleClasses) }),
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
  (0, _inherits3.default)(LinkDropdown, _Dropdown);

  function LinkDropdown() {
    (0, _classCallCheck3.default)(this, LinkDropdown);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LinkDropdown).apply(this, arguments));
  }

  return LinkDropdown;
}(Dropdown);

LinkDropdown.defaultProps = (0, _extends3.default)({}, Dropdown.defaultProps, {
  kind: 'link'
});

var DefaultAltDropdown = function (_Dropdown2) {
  (0, _inherits3.default)(DefaultAltDropdown, _Dropdown2);

  function DefaultAltDropdown() {
    (0, _classCallCheck3.default)(this, DefaultAltDropdown);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DefaultAltDropdown).apply(this, arguments));
  }

  return DefaultAltDropdown;
}(Dropdown);

DefaultAltDropdown.defaultProps = (0, _extends3.default)({}, Dropdown.defaultProps, {
  kind: 'default-alt'
});

var LowlightDropdown = function (_Dropdown3) {
  (0, _inherits3.default)(LowlightDropdown, _Dropdown3);

  function LowlightDropdown() {
    (0, _classCallCheck3.default)(this, LowlightDropdown);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LowlightDropdown).apply(this, arguments));
  }

  return LowlightDropdown;
}(Dropdown);

LowlightDropdown.defaultProps = (0, _extends3.default)({}, Dropdown.defaultProps, {
  kind: 'lowlight'
});

var DangerDropdown = function (_Dropdown4) {
  (0, _inherits3.default)(DangerDropdown, _Dropdown4);

  function DangerDropdown() {
    (0, _classCallCheck3.default)(this, DangerDropdown);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DangerDropdown).apply(this, arguments));
  }

  return DangerDropdown;
}(Dropdown);

DangerDropdown.defaultProps = (0, _extends3.default)({}, Dropdown.defaultProps, {
  kind: 'danger'
});

var HighlightDropdown = function (_Dropdown5) {
  (0, _inherits3.default)(HighlightDropdown, _Dropdown5);

  function HighlightDropdown() {
    (0, _classCallCheck3.default)(this, HighlightDropdown);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(HighlightDropdown).apply(this, arguments));
  }

  return HighlightDropdown;
}(Dropdown);

HighlightDropdown.defaultProps = (0, _extends3.default)({}, Dropdown.defaultProps, {
  kind: 'highlight'
});

var HighlightAltDropdown = function (_Dropdown6) {
  (0, _inherits3.default)(HighlightAltDropdown, _Dropdown6);

  function HighlightAltDropdown() {
    (0, _classCallCheck3.default)(this, HighlightAltDropdown);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(HighlightAltDropdown).apply(this, arguments));
  }

  return HighlightAltDropdown;
}(Dropdown);

HighlightAltDropdown.defaultProps = (0, _extends3.default)({}, Dropdown.defaultProps, {
  kind: 'highlight-alt'
});

var DropdownItem = function (_React$Component) {
  (0, _inherits3.default)(DropdownItem, _React$Component);

  function DropdownItem() {
    var _Object$getPrototypeO;

    var _temp, _this8, _ret;

    (0, _classCallCheck3.default)(this, DropdownItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this8 = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(DropdownItem)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this8), _this8.handleClick = function (event) {
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
    }, _temp), (0, _possibleConstructorReturn3.default)(_this8, _ret);
  }

  (0, _createClass3.default)(DropdownItem, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var children = _props2.children;
      var className = _props2.className;
      var eventKey = _props2.eventKey;
      var style = _props2.style;
      var href = _props2.href;
      var header = _props2.header;
      var divider = _props2.divider;
      var disabled = _props2.disabled;
      var anchorProps = (0, _objectWithoutProperties3.default)(_props2, ['children', 'className', 'eventKey', 'style', 'href', 'header', 'divider', 'disabled']);


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
          (0, _extends3.default)({}, (0, _extends3.default)({ href: href, disabled: disabled }, anchorProps), { onClick: this.handleClick }),
          children
        );
      } else {
        anchor = children;
      }

      var disabledClass = disabled ? 'disabled' : '';
      var dropdownItemClass = (0, _classnames2.default)(className, disabledClass);
      return _react2.default.createElement(
        'li',
        (0, _extends3.default)({ style: style }, { className: dropdownItemClass, onClick: href ? '' : this.handleClick }),
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