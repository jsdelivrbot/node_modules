/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var Checkbox = function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var displayError = _props.displayError;
      var errorMessage = _props.errorMessage;
      var inputClassName = _props.inputClassName;
      var label = _props.label;
      var labelClassName = _props.labelClassName;

      var inputProps = _objectWithoutProperties(_props, ['className', 'displayError', 'errorMessage', 'inputClassName', 'label', 'labelClassName']);

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
            React.createElement('input', _extends({ className: inputClassName, type: 'checkbox' }, inputProps)),
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