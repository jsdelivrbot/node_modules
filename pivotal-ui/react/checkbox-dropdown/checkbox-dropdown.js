/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

exports.__esModule = true;
exports.CheckboxDropdown = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _dropdowns = require('../dropdowns');

var _checkbox = require('../checkbox');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doNothing() {};

var CheckboxDropdown = exports.CheckboxDropdown = function (_React$Component) {
  (0, _inherits3.default)(CheckboxDropdown, _React$Component);

  function CheckboxDropdown(props, context) {
    (0, _classCallCheck3.default)(this, CheckboxDropdown);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props, context));

    var labels = _this.props.labels;

    var options = labels.reduce(function (result, item) {
      result[item] = true;
      return result;
    }, {});
    _this.state = { open: false, options: options };
    return _this;
  }

  CheckboxDropdown.prototype.componentDidMount = function componentDidMount() {
    var onChange = this.props.onChange;
    var options = this.state.options;

    onChange(options);
  };

  CheckboxDropdown.prototype.getTitle = function getTitle() {
    if (this.allSelected()) return 'ALL';
    var options = this.state.options;

    var selectedOptions = (0, _keys2.default)(options).filter(function (key) {
      return options[key];
    }).join(', ');
    if (!selectedOptions) return 'NONE';
    return selectedOptions;
  };

  CheckboxDropdown.prototype.allSelected = function allSelected() {
    var options = this.state.options;

    return (0, _values2.default)(options).every(function (val) {
      return val;
    });
  };

  CheckboxDropdown.prototype.toggleAll = function toggleAll(e) {
    e.stopPropagation();
    var options = this.state.options;

    var toggledVal = !this.allSelected();
    (0, _keys2.default)(options).forEach(function (key) {
      return options[key] = toggledVal;
    });
    this.setState({ options: options });
    var onChange = this.props.onChange;

    onChange(options);
  };

  CheckboxDropdown.prototype.toggleOption = function toggleOption(e, key) {
    e.stopPropagation();
    var options = this.state.options;

    options[key] = !options[key];
    this.setState({ options: options });
    var onChange = this.props.onChange;

    onChange(options);
  };

  CheckboxDropdown.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        labels = _props.labels,
        onChange = _props.onChange,
        dropDownProps = (0, _objectWithoutProperties3.default)(_props, ['labels', 'onChange']);
    var options = this.state.options;


    var dropdownItems = labels.map(function (label) {
      return _react2.default.createElement(
        _dropdowns.DropdownItem,
        { className: 'checkbox-dropdown-item',
          key: label, onSelect: function onSelect(e) {
            return _this2.toggleOption(e, label);
          } },
        _react2.default.createElement(_checkbox.Checkbox, { className: 'checkbox-dropdown-item-checkbox man',
          checked: options[label],
          onChange: doNothing,
          onClick: function onClick(e) {
            return _this2.toggleOption(e, label);
          },
          label: label })
      );
    });

    var checkBoxAllProps = {
      className: 'all-checkbox man',
      checked: this.allSelected(),
      onClick: function onClick(e) {
        return _this2.toggleAll(e);
      },
      onChange: doNothing,
      label: 'ALL'
    };

    var title = _react2.default.createElement(
      'span',
      { className: 'type-ellipsis' },
      this.getTitle()
    );

    return _react2.default.createElement(
      _dropdowns.Dropdown,
      (0, _extends3.default)({}, dropDownProps, { title: title }),
      _react2.default.createElement(
        _dropdowns.DropdownItem,
        { className: 'checkbox-dropdown-item show-all',
          onSelect: function onSelect(e) {
            return _this2.toggleAll(e);
          },
          checked: this.allSelected() },
        _react2.default.createElement(_checkbox.Checkbox, checkBoxAllProps)
      ),
      dropdownItems
    );
  };

  return CheckboxDropdown;
}(_react2.default.Component);

CheckboxDropdown.propTypes = {
  buttonAriaLabel: _propTypes2.default.string,
  buttonClassName: _propTypes2.default.string,
  flat: _propTypes2.default.bool,
  labelAriaLabel: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  size: _propTypes2.default.oneOf(['normal', 'large', 'small']),
  split: _propTypes2.default.bool,
  labels: _propTypes2.default.array
};
CheckboxDropdown.defaultProps = {
  onChange: doNothing,
  size: 'normal'
};