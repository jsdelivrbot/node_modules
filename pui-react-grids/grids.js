/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _puiReactHelpers = require('pui-react-helpers');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react');
var types = React.PropTypes;
var BootstrapRow = require('react-bootstrap/lib/Row');

var Row = React.createClass({
  displayName: 'Row',

  propTypes: {
    gutter: types.oneOf(['sm', 'md', 'lg'])
  },

  render: function render() {
    var _props = this.props;
    var gutter = _props.gutter;
    var children = _props.children;

    var other = _objectWithoutProperties(_props, ['gutter', 'children']);

    var gutterClass = {
      'row-gutter-md': gutter === 'md',
      'row-gutter-sm': gutter === 'sm'
    };
    var props = (0, _puiReactHelpers.mergeProps)(other, { className: gutterClass });
    return React.createElement(
      BootstrapRow,
      props,
      children
    );
  }
});

var Col = require('react-bootstrap/lib/Col');

module.exports = { Row: Row, Col: Col };