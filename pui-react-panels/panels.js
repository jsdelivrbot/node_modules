/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _puiReactHelpers = require('pui-react-helpers');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var types = React.PropTypes;
var classnames = require('classnames');

require('pui-css-panels');

var paddingTypes = [];
['p', 'm'].forEach(function (type) {
  ['l', 'r', 't', 'b', 'h', 'v', 'a'].forEach(function (location) {
    ['n', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl'].forEach(function (size) {
      paddingTypes.push('' + type + location + size);
    });
  });
});

var PanelTitle = function (_React$Component) {
  _inherits(PanelTitle, _React$Component);

  function PanelTitle() {
    _classCallCheck(this, PanelTitle);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PanelTitle).apply(this, arguments));
  }

  _createClass(PanelTitle, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;

      var other = _objectWithoutProperties(_props, ['className']);

      className = classnames('panel-title-alt', className);
      return React.createElement('div', _extends({ className: className }, other));
    }
  }]);

  return PanelTitle;
}(React.Component);

PanelTitle.propTypes = {
  className: types.string
};

var PanelHeader = function (_React$Component2) {
  _inherits(PanelHeader, _React$Component2);

  function PanelHeader() {
    _classCallCheck(this, PanelHeader);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PanelHeader).apply(this, arguments));
  }

  _createClass(PanelHeader, [{
    key: 'render',
    value: function render() {
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
    }
  }]);

  return PanelHeader;
}(React.Component);

PanelHeader.propTypes = {
  actions: types.node,
  header: types.node,
  subtitle: types.node
};

var PanelFooter = function (_React$Component3) {
  _inherits(PanelFooter, _React$Component3);

  function PanelFooter() {
    _classCallCheck(this, PanelFooter);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PanelFooter).apply(this, arguments));
  }

  _createClass(PanelFooter, [{
    key: 'render',
    value: function render() {
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
    }
  }]);

  return PanelFooter;
}(React.Component);

PanelFooter.propTypes = {
  footer: types.node
};

var Panel = function (_React$Component4) {
  _inherits(Panel, _React$Component4);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Panel).apply(this, arguments));
  }

  _createClass(Panel, [{
    key: 'render',
    value: function render() {
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

      var scrollableStyle = typeof scrollable === 'number' ? { maxHeight: scrollable + 'px' } : null;
      var props = (0, _puiReactHelpers.mergeProps)(other, {
        className: ['panel', this.kind]
      });

      var bodyProps = {
        className: classnames('panel-body', padding, innerClassName, { 'panel-scrollable': scrollable }),
        style: scrollableStyle
      };

      return React.createElement(
        'div',
        props,
        React.createElement(PanelHeader, { actions: actions, header: header, subtitle: subtitle }),
        React.createElement(
          'div',
          bodyProps,
          children
        ),
        React.createElement(PanelFooter, { footer: footer })
      );
    }
  }]);

  return Panel;
}(React.Component);

Panel.propTypes = {
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
};

var ShadowPanel = function (_Panel) {
  _inherits(ShadowPanel, _Panel);

  function ShadowPanel(props) {
    _classCallCheck(this, ShadowPanel);

    var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(ShadowPanel).call(this, props));

    _this5.kind = 'panel-shadow-' + props.shadowLevel;
    return _this5;
  }

  return ShadowPanel;
}(Panel);

ShadowPanel.propTypes = _extends({}, Panel.propTypes, {
  shadowLevel: types.oneOf([1, 2, 3, 4])
});
ShadowPanel.defaultProps = {
  shadowLevel: 3
};

var SimplePanel = function (_Panel2) {
  _inherits(SimplePanel, _Panel2);

  function SimplePanel() {
    var _Object$getPrototypeO;

    var _temp, _this6, _ret;

    _classCallCheck(this, SimplePanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this6 = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SimplePanel)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this6), _this6.kind = 'panel-simple', _temp), _possibleConstructorReturn(_this6, _ret);
  }

  return SimplePanel;
}(Panel);

var BasicPanel = function (_Panel3) {
  _inherits(BasicPanel, _Panel3);

  function BasicPanel() {
    var _Object$getPrototypeO2;

    var _temp2, _this7, _ret2;

    _classCallCheck(this, BasicPanel);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this7 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(BasicPanel)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this7), _this7.kind = 'panel-basic', _temp2), _possibleConstructorReturn(_this7, _ret2);
  }

  return BasicPanel;
}(Panel);

var BasicPanelAlt = function (_Panel4) {
  _inherits(BasicPanelAlt, _Panel4);

  function BasicPanelAlt() {
    var _Object$getPrototypeO3;

    var _temp3, _this8, _ret3;

    _classCallCheck(this, BasicPanelAlt);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this8 = _possibleConstructorReturn(this, (_Object$getPrototypeO3 = Object.getPrototypeOf(BasicPanelAlt)).call.apply(_Object$getPrototypeO3, [this].concat(args))), _this8), _this8.kind = 'panel-basic-alt', _temp3), _possibleConstructorReturn(_this8, _ret3);
  }

  return BasicPanelAlt;
}(Panel);

var ClickablePanel = function (_Panel5) {
  _inherits(ClickablePanel, _Panel5);

  function ClickablePanel() {
    var _Object$getPrototypeO4;

    var _temp4, _this9, _ret4;

    _classCallCheck(this, ClickablePanel);

    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return _ret4 = (_temp4 = (_this9 = _possibleConstructorReturn(this, (_Object$getPrototypeO4 = Object.getPrototypeOf(ClickablePanel)).call.apply(_Object$getPrototypeO4, [this].concat(args))), _this9), _this9.kind = 'panel-clickable', _temp4), _possibleConstructorReturn(_this9, _ret4);
  }

  return ClickablePanel;
}(Panel);

var ClickableAltPanel = function (_Panel6) {
  _inherits(ClickableAltPanel, _Panel6);

  function ClickableAltPanel() {
    var _Object$getPrototypeO5;

    var _temp5, _this10, _ret5;

    _classCallCheck(this, ClickableAltPanel);

    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return _ret5 = (_temp5 = (_this10 = _possibleConstructorReturn(this, (_Object$getPrototypeO5 = Object.getPrototypeOf(ClickableAltPanel)).call.apply(_Object$getPrototypeO5, [this].concat(args))), _this10), _this10.kind = 'panel-clickable-alt', _temp5), _possibleConstructorReturn(_this10, _ret5);
  }

  return ClickableAltPanel;
}(Panel);

var HighlightPanel = function (_Panel7) {
  _inherits(HighlightPanel, _Panel7);

  function HighlightPanel() {
    var _Object$getPrototypeO6;

    var _temp6, _this11, _ret6;

    _classCallCheck(this, HighlightPanel);

    for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    return _ret6 = (_temp6 = (_this11 = _possibleConstructorReturn(this, (_Object$getPrototypeO6 = Object.getPrototypeOf(HighlightPanel)).call.apply(_Object$getPrototypeO6, [this].concat(args))), _this11), _this11.kind = 'panel-highlight', _temp6), _possibleConstructorReturn(_this11, _ret6);
  }

  return HighlightPanel;
}(Panel);

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