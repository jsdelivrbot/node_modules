/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _puiReactHelpers = require('pui-react-helpers');

var React = require('react');

var UIButton = React.createClass({
  displayName: 'UIButton',

  propTypes: {
    block: React.PropTypes.bool,
    href: React.PropTypes.string,
    kind: React.PropTypes.oneOf(['default', 'default-alt', 'lowlight', 'danger', 'highlight', 'highlight-alt']),
    large: React.PropTypes.bool
  },

  render: function render() {
    var _props = this.props;
    var block = _props.block;
    var large = _props.large;
    var _props$kind = _props.kind;
    var kind = _props$kind === undefined ? 'default' : _props$kind;
    var children = _props.children;

    var others = _objectWithoutProperties(_props, ['block', 'large', 'kind', 'children']);

    var defaultProps = {
      className: ['btn', 'btn-' + kind, {
        'btn-block': block,
        'btn-lg': large
      }]
    };
    var props = _puiReactHelpers.mergeProps(others, defaultProps);

    return this.props.href ? React.createElement(
      'a',
      props,
      children
    ) : React.createElement(
      'button',
      props,
      children
    );
  }
});

function defButton(propOverrides) {
  return React.createClass({
    propTypes: {
      block: React.PropTypes.bool,
      href: React.PropTypes.string,
      kind: React.PropTypes.oneOf(['default', 'default-alt', 'lowlight', 'danger', 'highlight', 'highlight-alt']),
      large: React.PropTypes.bool
    },
    render: function render() {
      return React.createElement(UIButton, _extends({}, this.props, propOverrides));
    }
  });
}

module.exports = {
  UIButton: UIButton,

  DefaultButton: defButton({ kind: 'default' }),

  DefaultAltButton: defButton({ kind: 'default-alt' }),

  LowlightButton: defButton({ kind: 'lowlight' }),

  DangerButton: defButton({ kind: 'danger' }),

  HighlightButton: defButton({ kind: 'highlight' }),

  HighlightAltButton: defButton({ kind: 'highlight-alt' })
};