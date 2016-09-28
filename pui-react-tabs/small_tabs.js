/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _puiReactCollapsible = require('pui-react-collapsible');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = _react2.default.PropTypes;

var SmallTab = function (_React$Component) {
  (0, _inherits3.default)(SmallTab, _React$Component);

  function SmallTab() {
    (0, _classCallCheck3.default)(this, SmallTab);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SmallTab).apply(this, arguments));
  }

  (0, _createClass3.default)(SmallTab, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var animation = _props.animation;
      var children = _props.children;
      var expanded = _props.expanded;
      var header = _props.header;
      var onClick = _props.onClick;
      var paneId = _props.paneId;

      var delay = void 0;
      if (!animation) delay = 0;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'tab-heading' },
          _react2.default.createElement(
            'h4',
            { className: 'tab-title', role: 'presentation' },
            _react2.default.createElement(
              'a',
              { 'aria-expanded': expanded, 'aria-controls': paneId, 'aria-selected': expanded, role: 'tab',
                onClick: onClick },
              header
            )
          )
        ),
        _react2.default.createElement(
          _puiReactCollapsible.Collapsible,
          { expanded: expanded, delay: delay, role: 'tabpanel' },
          children
        )
      );
    }
  }]);
  return SmallTab;
}(_react2.default.Component);

SmallTab.propTypes = {
  animation: types.bool,
  expanded: types.bool,
  header: types.node,
  onClick: types.func,
  paneId: types.string
};

var SmallTabs = function (_React$Component2) {
  (0, _inherits3.default)(SmallTabs, _React$Component2);

  function SmallTabs() {
    (0, _classCallCheck3.default)(this, SmallTabs);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SmallTabs).apply(this, arguments));
  }

  (0, _createClass3.default)(SmallTabs, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var actions = _props2.actions;
      var activeKey = _props2.activeKey;
      var animation = _props2.animation;
      var children = _props2.children;
      var className = _props2.className;
      var id = _props2.id;
      var handleClick = _props2.handleClick;
      var onSelect = _props2.onSelect;
      var smallScreenClassName = _props2.smallScreenClassName;
      var tabType = _props2.tabType;

      var smallScreenClasses = (0, _classnames2.default)(['tab-' + tabType + '-small-screen', 'panel-group', smallScreenClassName, className]);
      var childArray = _react2.default.Children.toArray(children);
      var childrenAsPanels = childArray.map(function (child, key) {
        var _child$props = child.props;
        var title = _child$props.title;
        var eventKey = _child$props.eventKey;
        var children = _child$props.children;

        var paneId = id + '-pane-' + key;
        var myProps = {
          animation: animation,
          expanded: eventKey === activeKey,
          header: title,
          key: key,
          onClick: function onClick(e) {
            return handleClick(e, eventKey, onSelect);
          },
          paneId: paneId
        };
        return _react2.default.createElement(
          SmallTab,
          myProps,
          children
        );
      });

      var actionsNode = actions ? _react2.default.createElement(
        'div',
        { className: 'tabs-action' },
        actions
      ) : null;

      return _react2.default.createElement(
        'div',
        { className: smallScreenClasses },
        actionsNode,
        childrenAsPanels
      );
    }
  }]);
  return SmallTabs;
}(_react2.default.Component);

SmallTabs.propTypes = {
  actions: types.node,
  activeKey: types.number,
  animation: types.bool,
  id: types.string,
  handleClick: types.func,
  onSelect: types.func,
  smallScreenClassName: types.string,
  tabType: types.string
};


module.exports = { SmallTabs: SmallTabs };