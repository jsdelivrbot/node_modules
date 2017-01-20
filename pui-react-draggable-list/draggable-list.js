/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DraggableListItem = exports.DraggableList = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _isNan = require('babel-runtime/core-js/number/is-nan');

var _isNan2 = _interopRequireDefault(_isNan);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _move_helper = require('./move_helper');

var _move_helper2 = _interopRequireDefault(_move_helper);

var _puiReactIconography = require('pui-react-iconography');

var _puiReactHelpers = require('pui-react-helpers');

require('pui-css-lists');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = _react2.default.PropTypes;

var childrenIndices = function childrenIndices(children) {
  return children.map(function (child, i) {
    return i;
  });
};

var DraggableList = exports.DraggableList = function (_React$Component) {
  (0, _inherits3.default)(DraggableList, _React$Component);

  function DraggableList(props, context) {
    (0, _classCallCheck3.default)(this, DraggableList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DraggableList.__proto__ || (0, _getPrototypeOf2.default)(DraggableList)).call(this, props, context));

    _this.dragStart = function (draggingId, _ref) {
      var dataTransfer = _ref.dataTransfer;

      dataTransfer.effectAllowed = 'move';
      try {
        dataTransfer.dropEffect = 'move';
        dataTransfer.setData('text/plain', '');
      } catch (err) {
        dataTransfer.setData('text', '');
      }
      setTimeout(function () {
        return _this.setState({ draggingId: draggingId });
      }, 0);
    };

    _this.dragEnd = function () {
      _this.setState({ draggingId: null });
      _this.props.onDragEnd && _this.props.onDragEnd(_this.state.itemIndices);
    };

    _this.dragEnter = function (e) {
      var _this$state = _this.state,
          draggingId = _this$state.draggingId,
          itemIndices = _this$state.itemIndices;

      var endDraggingId = Number(e.currentTarget.getAttribute('data-dragging-id'));
      if (draggingId === null || (0, _isNan2.default)(endDraggingId)) return;

      var startIndex = itemIndices.indexOf(draggingId);
      var endIndex = itemIndices.indexOf(endDraggingId);

      (0, _move_helper2.default)(itemIndices, startIndex, endIndex);
      _this.setState({ itemIndices: itemIndices });
    };

    _this.state = {
      itemIndices: childrenIndices(props.children),
      draggingId: null
    };
    return _this;
  }

  (0, _createClass3.default)(DraggableList, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.children) {
        this.setState({
          itemIndices: childrenIndices(nextProps.children),
          draggingId: null
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var items = [];
      var grabbed = void 0;
      var _props = this.props,
          children = _props.children,
          innerClassName = _props.innerClassName,
          onDragEnd = _props.onDragEnd,
          others = (0, _objectWithoutProperties3.default)(_props, ['children', 'innerClassName', 'onDragEnd']);

      _react2.default.Children.forEach(children, function (child, draggingId) {
        grabbed = this.state.draggingId === draggingId;
        items.push(_react2.default.cloneElement(child, {
          grabbed: grabbed,
          onDragStart: this.dragStart.bind(this, draggingId),
          onDragEnd: this.dragEnd,
          onDragEnter: this.dragEnter,
          draggingId: draggingId,
          key: draggingId,
          className: innerClassName
        }));
      }, this);
      var sortedItems = this.state.itemIndices.map(function (i) {
        return items[i];
      });
      var props = (0, _puiReactHelpers.mergeProps)(others, {
        className: {
          'list-group list-draggable': true,
          dragging: this.state.draggingId !== null
        }
      });
      return _react2.default.createElement(
        'ul',
        props,
        sortedItems
      );
    }
  }]);
  return DraggableList;
}(_react2.default.Component);

DraggableList.propTypes = {
  onDragEnd: types.func,
  innerClassName: types.string
};

var DraggableListItem = exports.DraggableListItem = function (_React$Component2) {
  (0, _inherits3.default)(DraggableListItem, _React$Component2);

  function DraggableListItem(props, context) {
    (0, _classCallCheck3.default)(this, DraggableListItem);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (DraggableListItem.__proto__ || (0, _getPrototypeOf2.default)(DraggableListItem)).call(this, props, context));

    _this2.onMouseEnter = function () {
      return _this2.setState({ hover: true });
    };

    _this2.onMouseLeave = function () {
      return _this2.setState({ hover: false });
    };

    _this2.state = { hover: false };
    return _this2;
  }

  (0, _createClass3.default)(DraggableListItem, [{
    key: 'render',
    value: function render() {
      var hover = this.state.hover;
      var _props2 = this.props,
          grabbed = _props2.grabbed,
          onDragStart = _props2.onDragStart,
          onDragEnd = _props2.onDragEnd,
          onDragEnter = _props2.onDragEnter,
          draggingId = _props2.draggingId,
          children = _props2.children;
      var onMouseEnter = this.onMouseEnter,
          onMouseLeave = this.onMouseLeave;

      var className = (0, _classnames2.default)({ 'list-group-item pan': true, grabbed: grabbed, hover: hover });
      var innerClassName = (0, _classnames2.default)(this.props.className, 'draggable-item-content');
      var props = {
        className: className, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, onDragStart: onDragStart, onDragEnd: onDragEnd, onDragEnter: onDragEnter,
        onDragOver: function onDragOver(e) {
          return e.preventDefault();
        },
        draggable: !grabbed,
        'data-dragging-id': draggingId
      };

      return _react2.default.createElement(
        'li',
        (0, _extends3.default)({}, props, { 'aria-dropeffect': 'move' }),
        _react2.default.createElement(
          'div',
          { className: innerClassName },
          _react2.default.createElement(
            'div',
            { className: 'draggable-grip mhs', 'aria-grabbed': grabbed, role: 'button' },
            _react2.default.createElement(_puiReactIconography.Icon, { src: 'grip' }),
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              'Drag to reorder'
            )
          ),
          _react2.default.createElement(
            'span',
            null,
            children
          )
        )
      );
    }
  }]);
  return DraggableListItem;
}(_react2.default.Component);

DraggableListItem.propTypes = {
  draggingId: types.number,
  onMouseEnter: types.func,
  onMouseLeave: types.func,
  onDragStart: types.func,
  onDragEnter: types.func,
  onDragEnd: types.func,
  grabbed: types.bool,
  className: types.string
};