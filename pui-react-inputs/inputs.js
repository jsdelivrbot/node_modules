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

var _puiReactHelpers = require('pui-react-helpers');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');
var types = React.PropTypes;

require('pui-css-forms');

var Input = function (_React$Component) {
  (0, _inherits3.default)(Input, _React$Component);

  function Input() {
    (0, _classCallCheck3.default)(this, Input);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Input).apply(this, arguments));
  }

  (0, _createClass3.default)(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var displayError = _props.displayError;
      var errorMessage = _props.errorMessage;
      var inputClassName = _props.inputClassName;
      var label = _props.label;
      var labelClassName = _props.labelClassName;
      var search = _props.search;
      var success = _props.success;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'displayError', 'errorMessage', 'inputClassName', 'label', 'labelClassName', 'search', 'success']);
      var id = props.id;
      var placeholder = props.placeholder;

      var successClassName = success ? 'has-success' : '';
      var formClasses = (0, _classnames2.default)('form-group', { 'form-group-search': search }, className, successClassName, { 'has-error': displayError });

      var labelClasses = (0, _classnames2.default)('control-label', labelClassName);
      var inputClassNames = (0, _classnames2.default)(inputClassName, 'form-control');
      var inputProps = (0, _puiReactHelpers.mergeProps)(props, { className: inputClassNames, 'aria-label': placeholder });
      return React.createElement(
        'div',
        { className: formClasses },
        label && React.createElement(
          'label',
          { htmlFor: id, className: labelClasses },
          label
        ),
        React.createElement(
          'div',
          { className: 'input-wrapper' },
          React.createElement('input', inputProps),
          search && React.createElement('i', { className: 'search-icon' })
        ),
        displayError && React.createElement(
          'div',
          { className: 'error-text help-block' },
          errorMessage ? errorMessage : 'Please enter your ' + label.toLowerCase() + '.'
        )
      );
    }
  }]);
  return Input;
}(React.Component);

Input.propTypes = {
  displayError: types.bool,
  errorMessage: types.node,
  id: types.string,
  inputClassName: types.string,
  label: types.node,
  labelClassName: types.string,
  placeholder: types.string,
  search: types.bool,
  success: types.bool
};


module.exports = { Input: Input };