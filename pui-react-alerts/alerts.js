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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');
var types = React.PropTypes;
var BsAlert = require('react-bootstrap/lib/Alert');

var _require = require('pui-react-media');

var Media = _require.Media;

require('pui-css-alerts');

var Alert = function (_React$Component) {
  (0, _inherits3.default)(Alert, _React$Component);

  function Alert(props, context) {
    (0, _classCallCheck3.default)(this, Alert);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Alert).call(this, props, context));

    _this.handleAlertDismiss = function () {
      var dismissable = _this.props.dismissable;

      if (typeof dismissable === 'function') dismissable();
      _this.setState({ alertVisible: false });
    };

    _this.state = { alertVisible: true };
    return _this;
  }

  (0, _createClass3.default)(Alert, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var dismissable = _props.dismissable;
      var withIcon = _props.withIcon;
      var alertIcon = _props.alertIcon;
      var children = _props.children;
      var others = (0, _objectWithoutProperties3.default)(_props, ['dismissable', 'withIcon', 'alertIcon', 'children']);


      if (this.state.alertVisible) {
        var onDismiss = dismissable ? this.handleAlertDismiss : null;

        if (withIcon) {
          var icon = React.createElement('i', { className: 'fa ' + alertIcon });
          children = React.createElement(
            Media,
            { className: 'mtn', image: icon },
            children
          );
        }
        return React.createElement(
          BsAlert,
          (0, _extends3.default)({}, others, { onDismiss: onDismiss }),
          children
        );
      }

      return React.createElement('span', null);
    }
  }]);
  return Alert;
}(React.Component);

Alert.propTypes = {
  bsStyle: types.string,
  dismissable: types.oneOfType([types.bool, types.func]),
  withIcon: types.bool,
  alertIcon: types.string
};
Alert.defaultProps = {
  dismissable: false,
  withIcon: false
};


function defAlert(props) {
  var _class, _temp;

  return _temp = _class = function (_React$Component2) {
    (0, _inherits3.default)(_class, _React$Component2);

    function _class() {
      (0, _classCallCheck3.default)(this, _class);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(_class).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
      key: 'render',
      value: function render() {
        var _props2 = this.props;
        var children = _props2.children;
        var others = (0, _objectWithoutProperties3.default)(_props2, ['children']);

        return React.createElement(
          Alert,
          (0, _extends3.default)({}, props, others),
          React.createElement(
            'span',
            { className: 'sr-only' },
            (props.bsStyle === 'danger' ? 'error' : props.bsStyle) + ' alert message,'
          ),
          children
        );
      }
    }]);
    return _class;
  }(React.Component), _class.propTypes = {
    dismissable: types.oneOfType([types.bool, types.func]),
    withIcon: types.bool
  }, _temp;
}

module.exports = {
  SuccessAlert: defAlert({ bsStyle: 'success', alertIcon: 'fa-check-circle' }),
  InfoAlert: defAlert({ bsStyle: 'info', alertIcon: 'fa-info-circle' }),
  WarningAlert: defAlert({ bsStyle: 'warning', alertIcon: 'fa-exclamation-triangle' }),
  ErrorAlert: defAlert({ bsStyle: 'danger', alertIcon: 'fa-exclamation-triangle' })
};