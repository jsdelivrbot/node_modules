/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react');
var types = React.PropTypes;
var BsAlert = require('react-bootstrap/lib/Alert');

var _require = require('pui-react-media');

var Media = _require.Media;


var Alert = React.createClass({
  displayName: 'Alert',

  propTypes: {
    bsStyle: types.string,
    dismissable: types.oneOfType([types.bool, types.func]),
    withIcon: types.bool,
    alertIcon: types.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      dismissable: false,
      withIcon: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      alertVisible: true
    };
  },
  render: function render() {
    var _props = this.props;
    var dismissable = _props.dismissable;
    var withIcon = _props.withIcon;
    var alertIcon = _props.alertIcon;
    var children = _props.children;

    var others = _objectWithoutProperties(_props, ['dismissable', 'withIcon', 'alertIcon', 'children']);

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
        _extends({}, others, { onDismiss: onDismiss }),
        children
      );
    }

    return React.createElement('span', null);
  },


  handleAlertDismiss: function handleAlertDismiss() {
    var dismissable = this.props.dismissable;

    if (typeof dismissable === 'function') dismissable();
    this.setState({ alertVisible: false });
  }
});

function defAlert(props) {
  return React.createClass({
    propTypes: {
      dismissable: types.oneOfType([types.bool, types.func]),
      withIcon: types.bool
    },
    render: function render() {
      var _props2 = this.props;
      var children = _props2.children;

      var others = _objectWithoutProperties(_props2, ['children']);

      return React.createElement(
        Alert,
        _extends({}, props, others),
        React.createElement(
          'span',
          { className: 'sr-only' },
          (props.bsStyle === 'danger' ? 'error' : props.bsStyle) + ' alert message,'
        ),
        children
      );
    }
  });
}

module.exports = {
  SuccessAlert: defAlert({ bsStyle: 'success', alertIcon: 'fa-check-circle' }),
  InfoAlert: defAlert({ bsStyle: 'info', alertIcon: 'fa-info-circle' }),
  WarningAlert: defAlert({ bsStyle: 'warning', alertIcon: 'fa-exclamation-triangle' }),
  ErrorAlert: defAlert({ bsStyle: 'danger', alertIcon: 'fa-exclamation-triangle' })
};