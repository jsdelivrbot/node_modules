/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _puiReactHelpers = require('pui-react-helpers');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react');


var TypographyMixin = {
  propTypes: {
    allCaps: React.PropTypes.bool,
    bold: React.PropTypes.oneOf(['low', 'default', 'high', 'max']),
    color: React.PropTypes.string,
    element: React.PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
    size: React.PropTypes.oneOf(['title', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'small'])
  }
};

var Heading = React.createClass({
  displayName: 'Heading',

  propTypes: {
    allCaps: React.PropTypes.bool,
    bold: React.PropTypes.oneOf(['low', 'default', 'high', 'max']),
    color: React.PropTypes.string,
    element: React.PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
    size: React.PropTypes.oneOf(['title', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'small'])
  },

  render: function render() {
    var _props = this.props;
    var size = _props.size;
    var bold = _props.bold;
    var allCaps = _props.allCaps;
    var color = _props.color;
    var _props$element = _props.element;
    var element = _props$element === undefined ? 'p' : _props$element;
    var children = _props.children;

    var other = _objectWithoutProperties(_props, ['size', 'bold', 'allCaps', 'color', 'element', 'children']);

    var classes = [size, bold && 'em-' + bold, allCaps && 'em-alt', color].filter(Boolean).join(' ');

    var props = (0, _puiReactHelpers.mergeProps)(other, { className: classes });
    var Klass = element;
    return React.createElement(
      Klass,
      props,
      children
    );
  }
});

function defHeader(props) {
  return React.createClass({
    mixins: [TypographyMixin],
    render: function render() {
      return React.createElement(Heading, _extends({}, this.props, props));
    }
  });
}

var DefaultH1 = defHeader({ element: 'h1' });
var DefaultH2 = defHeader({ element: 'h2' });

var DefaultH3 = defHeader({ element: 'h3' });

var DefaultH4 = defHeader({ element: 'h4' });

var DefaultH5 = defHeader({ element: 'h5' });

var DefaultH6 = defHeader({ element: 'h6' });

var AlternateH1 = defHeader({ element: 'h1', color: 'type-dark-2', bold: 'max' });

var AlternateH2 = defHeader({ element: 'h2', size: 'h4', bold: 'high', allCaps: true });

var AlternateH3 = defHeader({ element: 'h3', size: 'h4' });

var AlternateH4 = defHeader({ element: 'h4', size: 'h6', bold: 'high', allCaps: true });

var AlternateH5 = defHeader({ element: 'h5', size: 'h6', bold: 'high' });

var AlternateH6 = defHeader({ element: 'h6' });

var MarketingH1 = defHeader({ element: 'h1', size: 'title', bold: 'high', color: 'type-dark-2' });

var MarketingH2 = defHeader({ element: 'h2', size: 'h1', bold: 'high', color: 'type-dark-2' });

var MarketingH3 = defHeader({ element: 'h3', size: 'h2', bold: 'high', color: 'type-dark-2' });

var MarketingH4 = defHeader({ element: 'h4', size: 'h3', bold: 'high', color: 'type-dark-2' });

var MarketingH5 = defHeader({ element: 'h5', size: 'h4', bold: 'high', color: 'type-dark-2' });

var MarketingH6 = defHeader({ element: 'h6', size: 'h5', bold: 'high', color: 'type-dark-2' });

module.exports = {
  DefaultH1: DefaultH1,
  DefaultH2: DefaultH2,
  DefaultH3: DefaultH3,
  DefaultH4: DefaultH4,
  DefaultH5: DefaultH5,
  DefaultH6: DefaultH6,
  AlternateH1: AlternateH1,
  AlternateH2: AlternateH2,
  AlternateH3: AlternateH3,
  AlternateH4: AlternateH4,
  AlternateH5: AlternateH5,
  AlternateH6: AlternateH6,
  MarketingH1: MarketingH1,
  MarketingH2: MarketingH2,
  MarketingH3: MarketingH3,
  MarketingH4: MarketingH4,
  MarketingH5: MarketingH5,
  MarketingH6: MarketingH6,
  Heading: Heading
};