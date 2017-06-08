/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _animation_mixin = require('pui-react-mixins/mixins/animation_mixin');

var _animation_mixin2 = _interopRequireDefault(_animation_mixin);

var _Tab = require('react-bootstrap/lib/Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _small_tabs = require('./small_tabs');

var _mediaSize = require('./media-size');

var _mediaSize2 = _interopRequireDefault(_mediaSize);

var _puiReactMixins = require('pui-react-mixins');

var _puiReactMixins2 = _interopRequireDefault(_puiReactMixins);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.uniqueid');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('pui-css-tabs');


var types = _react2.default.PropTypes;

var Tabs = function (_mixin$with) {
  (0, _inherits3.default)(Tabs, _mixin$with);

  function Tabs(props, context) {
    (0, _classCallCheck3.default)(this, Tabs);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Tabs).call(this, props, context));

    _this.checkScreenSize = function () {
      if (_mediaSize2.default.matches(_this.props.responsiveBreakpoint)) {
        _this.setState({ smallScreen: false });
      } else {
        _this.setState({ smallScreen: true });
      }
    };

    _this.handleClick = function (e, eventKey, callback) {
      if (callback) {
        callback(e, eventKey);
      } else {
        _this.setActiveKey(eventKey);
      }
    };

    var id = _this.props.id;

    if (typeof id === 'undefined') {
      id = (0, _lodash2.default)('pui-react-tabs-');
    }
    _this.state = {
      activeKey: _this.props.defaultActiveKey,
      smallScreen: false,
      id: id
    };
    return _this;
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.defaultActiveKey !== this.props.defaultActiveKey) {
        this.setActiveKey(nextProps.defaultActiveKey);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.checkScreenSize);
      this.checkScreenSize();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.checkScreenSize);
    }
  }, {
    key: 'setActiveKey',
    value: function setActiveKey(key) {
      var previousActiveKey = this.state.activeKey;
      this.setState({
        activeKey: key,
        previousActiveKey: previousActiveKey
      });
      if (key !== previousActiveKey) this.animate('transitionProgress', 0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var actions = _props.actions;
      var animation = _props.animation;
      var children = _props.children;
      var className = _props.className;
      var defaultActiveKey = _props.defaultActiveKey;
      var _props$id = _props.id;
      var id = _props$id === undefined ? this.state.id : _props$id;
      var largeScreenClassName = _props.largeScreenClassName;
      var onSelect = _props.onSelect;
      var paneWidth = _props.paneWidth;
      var position = _props.position;
      var responsiveBreakpoint = _props.responsiveBreakpoint;
      var smallScreenClassName = _props.smallScreenClassName;
      var tabType = _props.tabType;
      var tabWidth = _props.tabWidth;
      var props = (0, _objectWithoutProperties3.default)(_props, ['actions', 'animation', 'children', 'className', 'defaultActiveKey', 'id', 'largeScreenClassName', 'onSelect', 'paneWidth', 'position', 'responsiveBreakpoint', 'smallScreenClassName', 'tabType', 'tabWidth']);

      var largeScreenClasses = (0, _classnames4.default)(['tab-' + tabType, largeScreenClassName, className]);

      var transitionProgress = this.animate('transitionProgress', 1, animation ? Tabs.ANIMATION_TIME : 0);

      var childArray = _react2.default.Children.toArray(children);

      if (this.state.smallScreen) {
        return _react2.default.createElement(_small_tabs.SmallTabs, (0, _extends3.default)({}, this.state, this.props, {
          transitionProgress: transitionProgress,
          handleClick: this.handleClick
        }));
      }

      var listChildren = childArray.map(function (child, key) {
        var _child$props = child.props;
        var eventKey = _child$props.eventKey;
        var tabClassName = _child$props.tabClassName;
        var title = _child$props.title;

        var paneId = id + '-pane-' + key;
        var tabId = id + '-tab-' + key;
        var isActive = eventKey === _this2.state.activeKey;

        return _react2.default.createElement(
          'li',
          { key: key, role: 'presentation', className: (0, _classnames4.default)({ active: isActive }) },
          _react2.default.createElement(
            'a',
            { id: tabId, 'aria-controls': paneId, 'aria-selected': isActive, role: 'tab', className: tabClassName,
              onClick: function onClick(e) {
                return _this2.handleClick(e, eventKey, onSelect);
              } },
            title
          )
        );
      });

      var isLeft = position === 'left';
      var leftPaneClasses = 'col-xs-' + paneWidth;
      var leftTabClasses = 'col-xs-' + tabWidth + ' nav-pills nav-stacked';

      var tabContent = null;
      var activeKey = transitionProgress >= 0.5 ? this.state.activeKey : this.state.previousActiveKey;
      childArray.forEach(function (child, key) {
        var _child$props2 = child.props;
        var eventKey = _child$props2.eventKey;
        var children = _child$props2.children;
        var className = _child$props2.className;
        var tabClassName = _child$props2.tabClassName;
        var props = (0, _objectWithoutProperties3.default)(_child$props2, ['eventKey', 'children', 'className', 'tabClassName']);

        var paneId = id + '-pane-' + key;
        var tabId = id + '-tab-' + key;
        var isActive = eventKey === activeKey;
        var style = transitionProgress < 1 ? { opacity: Math.abs(1 - 2 * transitionProgress) } : {};

        if (!isActive) return false;
        tabContent = _react2.default.createElement(
          'div',
          (0, _extends3.default)({ className: (0, _classnames4.default)('tab-content', (0, _defineProperty3.default)({}, leftPaneClasses, isLeft), className) }, props),
          _react2.default.createElement(
            'div',
            { className: 'tab-pane fade active in', id: paneId, role: 'tabpanel', 'aria-labelledby': tabId,
              'aria-hidden': 'false', style: style },
            children
          )
        );
      });

      var actionsNode = actions ? _react2.default.createElement(
        'div',
        { className: 'tabs-action' },
        actions
      ) : null;

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: (0, _classnames4.default)(largeScreenClasses, { 'tab-left clearfix': isLeft }) }, props),
        actionsNode,
        _react2.default.createElement(
          'ul',
          { role: 'tablist',
            className: (0, _classnames4.default)('nav', { 'nav-tabs': !isLeft }, (0, _defineProperty3.default)({}, leftTabClasses, isLeft)) },
          listChildren
        ),
        tabContent
      );
    }
  }]);
  return Tabs;
}((0, _puiReactMixins2.default)(_react2.default.Component).with(_animation_mixin2.default));

Tabs.propTypes = {
  actions: types.node,
  activeKey: types.number,
  defaultActiveKey: types.any,
  id: types.string,
  largeScreenClassName: types.string,
  onSelect: types.func,
  paneWidth: types.number,
  position: types.oneOf(['top', 'left']),
  responsiveBreakpoint: types.oneOf(['xs', 'sm', 'md', 'lg']),
  smallScreenClassName: types.string,
  tabType: types.oneOf(['simple', 'simple-alt', 'left']),
  tabWidth: types.number
};
Tabs.defaultProps = {
  animation: true,
  responsiveBreakpoint: 'xs',
  tabType: 'simple'
};
Tabs.ANIMATION_TIME = 400;

var LeftTabs = function (_React$Component) {
  (0, _inherits3.default)(LeftTabs, _React$Component);

  function LeftTabs() {
    (0, _classCallCheck3.default)(this, LeftTabs);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LeftTabs).apply(this, arguments));
  }

  (0, _createClass3.default)(LeftTabs, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var tabWidth = _props2.tabWidth;
      var paneWidth = _props2.paneWidth;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['tabWidth', 'paneWidth']);

      if (!paneWidth) {
        paneWidth = 24 - tabWidth;
      }
      return _react2.default.createElement(Tabs, (0, _extends3.default)({}, props, { tabWidth: tabWidth, paneWidth: paneWidth }));
    }
  }]);
  return LeftTabs;
}(_react2.default.Component);

LeftTabs.propTypes = {
  position: types.oneOf(['top', 'left']),
  tabWidth: types.number,
  paneWidth: types.number
};
LeftTabs.defaultProps = {
  position: 'left',
  tabWidth: 6,
  tabType: 'left'
};


var Tab = _Tab2.default;

module.exports = {
  Tabs: Tabs,
  Tab: Tab,
  LeftTabs: LeftTabs
};