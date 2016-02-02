/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _puiReactHelpers = require('pui-react-helpers');

var React = require('react');
var types = React.PropTypes;
var classnames = require('classnames');

var paddingTypes = (function () {
  var _paddingTypes = [];
  var _arr = ['p', 'm'];

  for (var _i = 0; _i < _arr.length; _i++) {
    var type = _arr[_i];
    var _arr2 = ['l', 'r', 't', 'b', 'h', 'v', 'a'];

    for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
      var _location = _arr2[_i2];
      var _arr3 = ['n', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl'];

      for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
        var size = _arr3[_i3];

        _paddingTypes.push('' + type + _location + size);
      }
    }
  }

  return _paddingTypes;
})();

var PanelTitle = React.createClass({
  displayName: 'PanelTitle',

  propTypes: {
    className: types.string
  },

  render: function render() {
    var _props = this.props;
    var className = _props.className;

    var other = _objectWithoutProperties(_props, ['className']);

    className = classnames('panel-title-alt', className);
    return React.createElement('div', _extends({ className: className }, other));
  }
});

var PanelHeader = (function (_React$Component) {
  _inherits(PanelHeader, _React$Component);

  function PanelHeader() {
    _classCallCheck(this, PanelHeader);

    _React$Component.apply(this, arguments);
  }

  PanelHeader.prototype.render = function render() {
    var _props2 = this.props;
    var actions = _props2.actions;
    var header = _props2.header;
    var subtitle = _props2.subtitle;

    if (header) {
      var titleNode = header.constructor === String ? React.createElement(
        PanelTitle,
        null,
        header
      ) : header;

      var headerNode = subtitle ? React.createElement(
        'div',
        null,
        titleNode,
        React.createElement(
          'div',
          { className: 'panel-subtitle' },
          subtitle
        )
      ) : titleNode;

      var actionsNode = actions ? React.createElement(
        'div',
        { className: 'panel-actions' },
        actions
      ) : null;

      return React.createElement(
        'div',
        { className: 'panel-header' },
        headerNode,
        actionsNode
      );
    } else {
      return null;
    }
  };

  _createClass(PanelHeader, null, [{
    key: 'propTypes',
    value: {
      actions: types.node,
      header: types.node,
      subtitle: types.node
    },
    enumerable: true
  }]);

  return PanelHeader;
})(React.Component);

var PanelFooter = (function (_React$Component2) {
  _inherits(PanelFooter, _React$Component2);

  function PanelFooter() {
    _classCallCheck(this, PanelFooter);

    _React$Component2.apply(this, arguments);
  }

  PanelFooter.prototype.render = function render() {
    var footer = this.props.footer;

    if (footer) {
      return React.createElement(
        'div',
        { className: 'panel-footer' },
        footer
      );
    } else {
      return null;
    }
  };

  _createClass(PanelFooter, null, [{
    key: 'propTypes',
    value: {
      footer: types.node
    },
    enumerable: true
  }]);

  return PanelFooter;
})(React.Component);

var Panel = (function (_React$Component3) {
  _inherits(Panel, _React$Component3);

  function Panel() {
    _classCallCheck(this, Panel);

    _React$Component3.apply(this, arguments);
  }

  Panel.prototype.render = function render() {
    var _props3 = this.props;
    var actions = _props3.actions;
    var children = _props3.children;
    var footer = _props3.footer;
    var header = _props3.header;
    var innerClassName = _props3.innerClassName;
    var padding = _props3.padding;
    var scrollable = _props3.scrollable;
    var subtitle = _props3.subtitle;

    var other = _objectWithoutProperties(_props3, ['actions', 'children', 'footer', 'header', 'innerClassName', 'padding', 'scrollable', 'subtitle']);

    var panelStyle = typeof scrollable === 'number' ? { maxHeight: scrollable + 'px' } : null;
    var props = _puiReactHelpers.mergeProps(other, {
      className: ['panel', this.kind, { 'panel-scrollable': scrollable }],
      style: panelStyle
    });

    return React.createElement(
      'div',
      props,
      React.createElement(PanelHeader, { actions: actions, header: header, subtitle: subtitle }),
      React.createElement(
        'div',
        { className: classnames('panel-body', padding, innerClassName) },
        children
      ),
      React.createElement(PanelFooter, { footer: footer })
    );
  };

  _createClass(Panel, null, [{
    key: 'propTypes',
    value: {
      header: types.node,
      footer: types.node,
      actions: types.node,
      subtitle: types.node,
      innerClassName: types.string,
      padding: function padding(props, propName, componentName) {
        if (props.padding && !props.padding.split(' ').every(function (pad) {
          return paddingTypes.indexOf(pad) >= 0;
        })) {
          return new Error('Invalid padding type used in ' + componentName);
        }
      },
      scrollable: types.oneOfType([types.bool, types.number])
    },
    enumerable: true
  }]);

  return Panel;
})(React.Component);

var ShadowPanel = (function (_Panel) {
  _inherits(ShadowPanel, _Panel);

  function ShadowPanel(props) {
    _classCallCheck(this, ShadowPanel);

    _Panel.call(this, props);
    this.kind = 'panel-shadow-' + props.shadowLevel;
  }

  _createClass(ShadowPanel, null, [{
    key: 'propTypes',
    value: _extends({}, Panel.propTypes, {
      shadowLevel: types.oneOf([1, 2, 3, 4])
    }),
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      shadowLevel: 3
    },
    enumerable: true
  }]);

  return ShadowPanel;
})(Panel);

var SimplePanel = (function (_Panel2) {
  _inherits(SimplePanel, _Panel2);

  function SimplePanel() {
    _classCallCheck(this, SimplePanel);

    _Panel2.apply(this, arguments);

    this.kind = 'panel-simple';
  }

  return SimplePanel;
})(Panel);

var BasicPanel = (function (_Panel3) {
  _inherits(BasicPanel, _Panel3);

  function BasicPanel() {
    _classCallCheck(this, BasicPanel);

    _Panel3.apply(this, arguments);

    this.kind = 'panel-basic';
  }

  return BasicPanel;
})(Panel);

var BasicPanelAlt = (function (_Panel4) {
  _inherits(BasicPanelAlt, _Panel4);

  function BasicPanelAlt() {
    _classCallCheck(this, BasicPanelAlt);

    _Panel4.apply(this, arguments);

    this.kind = 'panel-basic-alt';
  }

  return BasicPanelAlt;
})(Panel);

var ClickablePanel = (function (_Panel5) {
  _inherits(ClickablePanel, _Panel5);

  function ClickablePanel() {
    _classCallCheck(this, ClickablePanel);

    _Panel5.apply(this, arguments);

    this.kind = 'panel-clickable';
  }

  return ClickablePanel;
})(Panel);

var ClickableAltPanel = (function (_Panel6) {
  _inherits(ClickableAltPanel, _Panel6);

  function ClickableAltPanel() {
    _classCallCheck(this, ClickableAltPanel);

    _Panel6.apply(this, arguments);

    this.kind = 'panel-clickable-alt';
  }

  return ClickableAltPanel;
})(Panel);

var HighlightPanel = (function (_Panel7) {
  _inherits(HighlightPanel, _Panel7);

  function HighlightPanel() {
    _classCallCheck(this, HighlightPanel);

    _Panel7.apply(this, arguments);

    this.kind = 'panel-highlight';
  }

  return HighlightPanel;
})(Panel);

module.exports = {
  Panel: Panel,
  SimplePanel: SimplePanel,
  BasicPanel: BasicPanel,
  BasicPanelAlt: BasicPanelAlt,
  ClickablePanel: ClickablePanel,
  ClickableAltPanel: ClickableAltPanel,
  HighlightPanel: HighlightPanel,
  ShadowPanel: ShadowPanel,
  PanelTitle: PanelTitle
};