/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _puiReactCollapsible = require('pui-react-collapsible');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = _react2.default.PropTypes;

var SmallTab = function (_React$Component) {
  _inherits(SmallTab, _React$Component);

  function SmallTab() {
    _classCallCheck(this, SmallTab);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SmallTab).apply(this, arguments));
  }

  _createClass(SmallTab, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var expanded = _props.expanded;
      var header = _props.header;
      var onClick = _props.onClick;
      var paneId = _props.paneId;


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
          { expanded: expanded, role: 'tabpanel' },
          children
        )
      );
    }
  }]);

  return SmallTab;
}(_react2.default.Component);

SmallTab.propTypes = {
  expanded: types.bool,
  header: types.node,
  onClick: types.func,
  paneId: types.string
};

var SmallTabs = function (_React$Component2) {
  _inherits(SmallTabs, _React$Component2);

  function SmallTabs() {
    _classCallCheck(this, SmallTabs);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SmallTabs).apply(this, arguments));
  }

  _createClass(SmallTabs, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var actions = _props2.actions;
      var activeKey = _props2.activeKey;
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
  id: types.string,
  handleClick: types.func,
  onSelect: types.func,
  smallScreenClassName: types.string,
  tabType: types.string
};


module.exports = { SmallTabs: SmallTabs };