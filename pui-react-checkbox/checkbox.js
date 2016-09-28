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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');
var types = React.PropTypes;

require('pui-css-forms');

var Checkbox = function (_React$Component) {
  (0, _inherits3.default)(Checkbox, _React$Component);

  function Checkbox() {
    (0, _classCallCheck3.default)(this, Checkbox);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Checkbox).apply(this, arguments));
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var displayError = _props.displayError;
      var errorMessage = _props.errorMessage;
      var inputClassName = _props.inputClassName;
      var label = _props.label;
      var labelClassName = _props.labelClassName;
      var inputProps = (0, _objectWithoutProperties3.default)(_props, ['className', 'displayError', 'errorMessage', 'inputClassName', 'label', 'labelClassName']);
      var disabled = inputProps.disabled;
      var id = inputProps.id;

      var componentClasses = (0, _classnames2.default)('form-group', className, { 'has-error': displayError });
      var labelClasses = (0, _classnames2.default)('control-label', labelClassName, { disabled: disabled });

      return React.createElement(
        'div',
        { className: componentClasses },
        React.createElement(
          'div',
          { className: 'checkbox' },
          React.createElement(
            'label',
            { className: labelClasses, htmlFor: id },
            React.createElement('input', (0, _extends3.default)({ className: inputClassName, type: 'checkbox' }, inputProps)),
            label
          ),
          displayError && React.createElement(
            'span',
            { className: 'help-block has-error' },
            errorMessage
          )
        )
      );
    }
  }]);
  return Checkbox;
}(React.Component);

Checkbox.propTypes = {
  displayError: types.bool,
  errorMessage: types.node,
  inputClassName: types.string,
  id: types.string,
  label: types.node,
  labelClassName: types.string
};


module.exports = { Checkbox: Checkbox };