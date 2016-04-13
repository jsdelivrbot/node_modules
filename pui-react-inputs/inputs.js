/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _puiReactHelpers = require('pui-react-helpers');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var types = React.PropTypes;

require('pui-css-forms');

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).apply(this, arguments));
  }

  _createClass(Input, [{
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

      var props = _objectWithoutProperties(_props, ['className', 'displayError', 'errorMessage', 'inputClassName', 'label', 'labelClassName', 'search', 'success']);

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
        React.createElement('input', inputProps),
        search && React.createElement('i', { className: 'search-icon' }),
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