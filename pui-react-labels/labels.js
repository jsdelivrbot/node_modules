/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _puiReactHelpers = require('pui-react-helpers');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react');


var Label = React.createClass({
  displayName: 'Label',
  render: function render() {
    var defaultProps = {
      className: ['label', 'label-primary']
    };
    var _props = this.props;
    var children = _props.children;

    var others = _objectWithoutProperties(_props, ['children']);

    var props = (0, _puiReactHelpers.mergeProps)(others, defaultProps);
    return React.createElement(
      'span',
      props,
      children
    );
  }
});

module.exports = { Label: Label };