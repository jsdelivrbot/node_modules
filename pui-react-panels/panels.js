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

var _puiReactHelpers = require('pui-react-helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  (0, _inherits3.default)(PanelTitle, _React$Component);

  function PanelTitle() {
    (0, _classCallCheck3.default)(this, PanelTitle);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PanelTitle).apply(this, arguments));
  }

  (0, _createClass3.default)(PanelTitle, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var other = (0, _objectWithoutProperties3.default)(_props, ['className']);

      className = classnames('panel-title-alt', className);
      return React.createElement('div', (0, _extends3.default)({ className: className }, other));
    }
  }]);
  return PanelTitle;
}(React.Component);

PanelTitle.propTypes = {
  className: types.string
};

var PanelHeader = function (_React$Component2) {
  (0, _inherits3.default)(PanelHeader, _React$Component2);

  function PanelHeader() {
    (0, _classCallCheck3.default)(this, PanelHeader);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PanelHeader).apply(this, arguments));
  }

  (0, _createClass3.default)(PanelHeader, [{
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
  (0, _inherits3.default)(PanelFooter, _React$Component3);

  function PanelFooter() {
    (0, _classCallCheck3.default)(this, PanelFooter);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PanelFooter).apply(this, arguments));
  }

  (0, _createClass3.default)(PanelFooter, [{
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
  (0, _inherits3.default)(Panel, _React$Component4);

  function Panel() {
    (0, _classCallCheck3.default)(this, Panel);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Panel).apply(this, arguments));
  }

  (0, _createClass3.default)(Panel, [{
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
      var shadowLevel = _props3.shadowLevel;
      var subtitle = _props3.subtitle;
      var other = (0, _objectWithoutProperties3.default)(_props3, ['actions', 'children', 'footer', 'header', 'innerClassName', 'padding', 'scrollable', 'shadowLevel', 'subtitle']);

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
  (0, _inherits3.default)(ShadowPanel, _Panel);

  function ShadowPanel(props) {
    (0, _classCallCheck3.default)(this, ShadowPanel);

    var _this5 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ShadowPanel).call(this, props));

    _this5.kind = 'panel-shadow-' + props.shadowLevel;
    return _this5;
  }

  return ShadowPanel;
}(Panel);

ShadowPanel.propTypes = (0, _extends3.default)({}, Panel.propTypes, {
  shadowLevel: types.oneOf([1, 2, 3, 4])
});
ShadowPanel.defaultProps = {
  shadowLevel: 3
};

var SimplePanel = function (_Panel2) {
  (0, _inherits3.default)(SimplePanel, _Panel2);

  function SimplePanel() {
    var _Object$getPrototypeO;

    var _temp, _this6, _ret;

    (0, _classCallCheck3.default)(this, SimplePanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this6 = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(SimplePanel)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this6), _this6.kind = 'panel-simple', _temp), (0, _possibleConstructorReturn3.default)(_this6, _ret);
  }

  return SimplePanel;
}(Panel);

var BasicPanel = function (_Panel3) {
  (0, _inherits3.default)(BasicPanel, _Panel3);

  function BasicPanel() {
    var _Object$getPrototypeO2;

    var _temp2, _this7, _ret2;

    (0, _classCallCheck3.default)(this, BasicPanel);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this7 = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO2 = (0, _getPrototypeOf2.default)(BasicPanel)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this7), _this7.kind = 'panel-basic', _temp2), (0, _possibleConstructorReturn3.default)(_this7, _ret2);
  }

  return BasicPanel;
}(Panel);

var BasicPanelAlt = function (_Panel4) {
  (0, _inherits3.default)(BasicPanelAlt, _Panel4);

  function BasicPanelAlt() {
    var _Object$getPrototypeO3;

    var _temp3, _this8, _ret3;

    (0, _classCallCheck3.default)(this, BasicPanelAlt);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this8 = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO3 = (0, _getPrototypeOf2.default)(BasicPanelAlt)).call.apply(_Object$getPrototypeO3, [this].concat(args))), _this8), _this8.kind = 'panel-basic-alt', _temp3), (0, _possibleConstructorReturn3.default)(_this8, _ret3);
  }

  return BasicPanelAlt;
}(Panel);

var ClickablePanel = function (_Panel5) {
  (0, _inherits3.default)(ClickablePanel, _Panel5);

  function ClickablePanel() {
    var _Object$getPrototypeO4;

    var _temp4, _this9, _ret4;

    (0, _classCallCheck3.default)(this, ClickablePanel);

    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return _ret4 = (_temp4 = (_this9 = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO4 = (0, _getPrototypeOf2.default)(ClickablePanel)).call.apply(_Object$getPrototypeO4, [this].concat(args))), _this9), _this9.kind = 'panel-clickable', _temp4), (0, _possibleConstructorReturn3.default)(_this9, _ret4);
  }

  return ClickablePanel;
}(Panel);

var ClickableAltPanel = function (_Panel6) {
  (0, _inherits3.default)(ClickableAltPanel, _Panel6);

  function ClickableAltPanel() {
    var _Object$getPrototypeO5;

    var _temp5, _this10, _ret5;

    (0, _classCallCheck3.default)(this, ClickableAltPanel);

    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return _ret5 = (_temp5 = (_this10 = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO5 = (0, _getPrototypeOf2.default)(ClickableAltPanel)).call.apply(_Object$getPrototypeO5, [this].concat(args))), _this10), _this10.kind = 'panel-clickable-alt', _temp5), (0, _possibleConstructorReturn3.default)(_this10, _ret5);
  }

  return ClickableAltPanel;
}(Panel);

var HighlightPanel = function (_Panel7) {
  (0, _inherits3.default)(HighlightPanel, _Panel7);

  function HighlightPanel() {
    var _Object$getPrototypeO6;

    var _temp6, _this11, _ret6;

    (0, _classCallCheck3.default)(this, HighlightPanel);

    for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    return _ret6 = (_temp6 = (_this11 = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO6 = (0, _getPrototypeOf2.default)(HighlightPanel)).call.apply(_Object$getPrototypeO6, [this].concat(args))), _this11), _this11.kind = 'panel-highlight', _temp6), (0, _possibleConstructorReturn3.default)(_this11, _ret6);
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