/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _puiReactHelpers = require('pui-react-helpers');

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
    var props = _puiReactHelpers.mergeProps(other, { className: gutterClass });
    return React.createElement(
      BootstrapRow,
      props,
      children
    );
  }
});

var Col = require('react-bootstrap/lib/Col');

module.exports = { Row: Row, Col: Col };