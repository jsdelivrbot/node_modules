/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

exports.__esModule = true;
exports.Input = undefined;

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _puiReactIconography = require('pui-react-iconography');

var _puiReactHelpers = require('pui-react-helpers');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('pui-css-forms');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = exports.Input = function (_React$Component) {
  (0, _inherits3.default)(Input, _React$Component);

  function Input() {
    (0, _classCallCheck3.default)(this, Input);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  Input.prototype.componentDidMount = function componentDidMount() {
    if (this.props.autoFocus) this.input.focus();
  };

  Input.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        autoFocus = _props.autoFocus,
        displayError = _props.displayError,
        errorMessage = _props.errorMessage,
        inputClassName = _props.inputClassName,
        label = _props.label,
        labelClassName = _props.labelClassName,
        search = _props.search,
        size = _props.size,
        success = _props.success,
        leftIcon = _props.leftIcon,
        props = (0, _objectWithoutProperties3.default)(_props, ['className', 'autoFocus', 'displayError', 'errorMessage', 'inputClassName', 'label', 'labelClassName', 'search', 'size', 'success', 'leftIcon']);
    var id = props.id,
        placeholder = props.placeholder;

    var successClassName = success ? 'form-group-right-icon' : '';
    var formClasses = (0, _classnames2.default)('form-group', { 'form-group-left-icon': search || leftIcon }, className, successClassName, { 'has-error': displayError });
    var labelClasses = (0, _classnames2.default)('control-label', labelClassName, {
      'label-lg': size === 'large',
      'label-sm': size === 'small'
    });
    var inputClassNames = (0, _classnames2.default)(inputClassName, {
      'input-lg': size === 'large',
      'input-sm': size === 'small'
    });
    var inputProps = (0, _puiReactHelpers.mergeProps)(props, { className: inputClassNames, 'aria-label': placeholder });
    var leftIconSrc = leftIcon || search && 'search';
    var customLeftIcon = typeof leftIconSrc === 'string' ? _react2.default.createElement(_puiReactIconography.Icon, { className: 'input-icon', src: leftIconSrc }) : _react2.default.createElement(
      'span',
      { className: 'input-icon' },
      leftIconSrc
    );

    return _react2.default.createElement(
      'div',
      { className: formClasses },
      label && _react2.default.createElement(
        'label',
        { htmlFor: id, className: labelClasses },
        label
      ),
      _react2.default.createElement(
        'div',
        { className: 'input-wrapper' },
        _react2.default.createElement('input', (0, _extends3.default)({}, inputProps, { ref: function ref(_ref) {
            return _this2.input = _ref;
          } })),
        leftIconSrc && customLeftIcon,
        success && _react2.default.createElement(_puiReactIconography.Icon, { className: 'success', src: 'check' })
      ),
      displayError && _react2.default.createElement(
        'div',
        { className: 'help-block' },
        errorMessage ? errorMessage : 'Please enter your ' + label.toLowerCase() + '.'
      )
    );
  };

  return Input;
}(_react2.default.Component);

Input.propTypes = {
  autoFocus: _propTypes2.default.bool,
  displayError: _propTypes2.default.bool,
  errorMessage: _propTypes2.default.node,
  id: _propTypes2.default.string,
  inputClassName: _propTypes2.default.string,
  label: _propTypes2.default.node,
  labelClassName: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  search: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  success: _propTypes2.default.bool,
  leftIcon: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.object])
};