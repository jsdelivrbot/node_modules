/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var React = require('react');
var PropTypes = React.PropTypes;

var ReactFaIcon = require('react-fa/lib/Icon');
var objectAssign = require('object-assign');
var classnames = require('classnames');

var Icon = (function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    _React$Component.apply(this, arguments);
  }

  Icon.prototype.render = function render() {
    var _classnames;

    var _props = this.props;
    var size = _props.size;
    var className = _props.className;

    var props = _objectWithoutProperties(_props, ['size', 'className']);

    var classes = classnames(className, (_classnames = {}, _classnames['fa-' + size] = size, _classnames));

    return React.createElement(ReactFaIcon, _extends({ className: classes }, props));
  };

  return Icon;
})(React.Component);

function satisfiesOneOf() {
  for (var _len = arguments.length, propTypes = Array(_len), _key = 0; _key < _len; _key++) {
    propTypes[_key] = arguments[_key];
  }

  return function (props, propName, componentName) {
    var error;
    var errorMessages = [];
    for (var _iterator = propTypes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var propType = _ref;

      error = propType(props, propName, componentName);
      if (!error) {
        return null;
      } else {
        errorMessages.push(error.message);
      }
    }

    return new Error('Failed to satisfy any of the possible requirements:\n  ' + errorMessages.join('\n  '));
  };
}

Icon.propTypes = objectAssign({}, ReactFaIcon.propTypes, {
  size: satisfiesOneOf(ReactFaIcon.propTypes.size, PropTypes.oneOf(['title', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'sm', 'xs']))
});

module.exports = {
  Icon: Icon
};