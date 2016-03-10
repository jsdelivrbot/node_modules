/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tabs = require('react-bootstrap/lib/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tab = require('react-bootstrap/lib/Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _Accordion = require('react-bootstrap/lib/Accordion');

var _Accordion2 = _interopRequireDefault(_Accordion);

var _Panel = require('react-bootstrap/lib/Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _lodash = require('lodash.uniqueid');

var _lodash2 = _interopRequireDefault(_lodash);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _mediaSize = require('./media-size');

var _mediaSize2 = _interopRequireDefault(_mediaSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BaseTabs = _react2.default.createClass({
  displayName: 'BaseTabs',

  propTypes: {
    defaultActiveKey: _react2.default.PropTypes.any,
    tabType: _react2.default.PropTypes.oneOf(['tab-simple', 'tab-simple-alt', 'tab-left']),
    responsiveBreakpoint: _react2.default.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    largeScreenClassName: _react2.default.PropTypes.string,
    smallScreenClassName: _react2.default.PropTypes.string,
    onSelect: _react2.default.PropTypes.func,
    position: _react2.default.PropTypes.oneOf(['top', 'left']),
    tabWidth: _react2.default.PropTypes.number,
    paneWidth: _react2.default.PropTypes.number,
    id: _react2.default.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      responsiveBreakpoint: 'xs'
    };
  },
  getInitialState: function getInitialState() {
    return {
      activeKey: this.props.defaultActiveKey,
      smallScreen: false,
      id: (0, _lodash2.default)('pui-react-tabs-')
    };
  },
  setActiveKey: function setActiveKey(key) {
    var previousActiveKey = this.state.activeKey;
    this.setState({
      activeKey: key,
      previousActiveKey: previousActiveKey
    });
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.defaultActiveKey !== this.props.defaultActiveKey) {
      this.setActiveKey(nextProps.defaultActiveKey);
    }
  },
  componentDidMount: function componentDidMount() {
    (0, _raf2.default)(this.checkScreenSize);
  },
  checkScreenSize: function checkScreenSize() {
    if (!this.isMounted()) {
      return;
    } else {
      if (_mediaSize2.default.matches(this.props.responsiveBreakpoint)) {
        this.setState({ smallScreen: false });
      } else {
        this.setState({ smallScreen: true });
      }

      (0, _raf2.default)(this.checkScreenSize);
    }
  },
  handleSelect: function handleSelect(key) {
    if (!this.props.onSelect) {
      this.setActiveKey(key);
    } else {
      this.props.onSelect(key);
    }
  },
  render: function render() {
    var _props = this.props;
    var defaultActiveKey = _props.defaultActiveKey;
    var children = _props.children;
    var responsiveBreakpoint = _props.responsiveBreakpoint;
    var tabType = _props.tabType;
    var largeScreenClassName = _props.largeScreenClassName;
    var smallScreenClassName = _props.smallScreenClassName;
    var onSelect = _props.onSelect;
    var position = _props.position;
    var tabWidth = _props.tabWidth;
    var paneWidth = _props.paneWidth;
    var className = _props.className;

    var props = _objectWithoutProperties(_props, ['defaultActiveKey', 'children', 'responsiveBreakpoint', 'tabType', 'largeScreenClassName', 'smallScreenClassName', 'onSelect', 'position', 'tabWidth', 'paneWidth', 'className']);

    var largeScreenClasses = (0, _classnames2.default)([tabType, largeScreenClassName, className]);
    var smallScreenClasses = (0, _classnames2.default)([tabType + '-small-screen', smallScreenClassName, className]);

    var tabs = void 0;

    if (this.state.smallScreen) {
      var childrenAsPanels = _react2.default.Children.map(children, function (child) {
        var _child$props = child.props;
        var title = _child$props.title;

        var childProps = _objectWithoutProperties(_child$props, ['title']);

        return _react2.default.createElement(_Panel2.default, _extends({ header: title }, childProps));
      });

      tabs = _react2.default.createElement(
        _Accordion2.default,
        _extends({ className: smallScreenClasses,
          activeKey: this.state.activeKey,
          onSelect: this.handleSelect
        }, props),
        childrenAsPanels
      );
    } else {
      tabs = _react2.default.createElement(
        _Tabs2.default,
        _extends({ position: position,
          tabWidth: tabWidth,
          paneWidth: paneWidth,
          activeKey: this.state.activeKey,
          onSelect: this.handleSelect,
          className: largeScreenClasses
        }, _extends({ id: this.state.id }, props)),
        children
      );
    }

    return _react2.default.createElement(
      'div',
      null,
      tabs
    );
  }
});

var SimpleTabs = _react2.default.createClass({
  displayName: 'SimpleTabs',
  render: function render() {
    return _react2.default.createElement(BaseTabs, _extends({}, this.props, { tabType: 'tab-simple' }));
  }
});

var SimpleAltTabs = _react2.default.createClass({
  displayName: 'SimpleAltTabs',
  render: function render() {
    return _react2.default.createElement(BaseTabs, _extends({}, this.props, { tabType: 'tab-simple-alt' }));
  }
});

var LeftTabs = _react2.default.createClass({
  displayName: 'LeftTabs',

  propTypes: {
    position: _react2.default.PropTypes.oneOf(['top', 'left']),
    tabWidth: _react2.default.PropTypes.number,
    paneWidth: _react2.default.PropTypes.number
  },
  getDefaultProps: function getDefaultProps() {
    return {
      position: 'left',
      tabWidth: 6
    };
  },
  render: function render() {
    var _props2 = this.props;
    var tabWidth = _props2.tabWidth;
    var paneWidth = _props2.paneWidth;

    var props = _objectWithoutProperties(_props2, ['tabWidth', 'paneWidth']);

    if (!paneWidth) {
      paneWidth = 24 - tabWidth;
    }
    return _react2.default.createElement(BaseTabs, _extends({}, props, { tabWidth: tabWidth, paneWidth: paneWidth, tabType: 'tab-left' }));
  }
});

var Tab = _Tab2.default;

module.exports = {
  BaseTabs: BaseTabs,
  SimpleTabs: SimpleTabs,
  SimpleAltTabs: SimpleAltTabs,
  Tab: Tab,
  LeftTabs: LeftTabs
};