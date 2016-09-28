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

require('pui-css-modals');

var BsModal = require('react-bootstrap/lib/Modal');
var BsModalHeader = require('react-bootstrap/lib/ModalHeader');

var BaseModal = function (_React$Component) {
  (0, _inherits3.default)(BaseModal, _React$Component);

  function BaseModal() {
    (0, _classCallCheck3.default)(this, BaseModal);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(BaseModal).apply(this, arguments));
  }

  (0, _createClass3.default)(BaseModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var show = _props.show;
      var title = _props.title;
      var children = _props.children;
      var onHide = _props.onHide;
      var modalProps = (0, _objectWithoutProperties3.default)(_props, ['show', 'title', 'children', 'onHide']);


      return React.createElement(
        BsModal,
        (0, _extends3.default)({ show: show, onHide: onHide }, modalProps),
        React.createElement(
          BsModalHeader,
          { className: 'modal-header', closeButton: true },
          React.createElement(
            'h4',
            { className: 'modal-title', id: 'modalTitle' },
            title
          )
        ),
        children
      );
    }
  }]);
  return BaseModal;
}(React.Component);

BaseModal.propTypes = {
  title: React.PropTypes.string,
  show: React.PropTypes.bool,
  onHide: React.PropTypes.func
};
BaseModal.defaultProps = {
  onHide: function onHide() {}
};

var Modal = function (_React$Component2) {
  (0, _inherits3.default)(Modal, _React$Component2);

  function Modal(props, context) {
    (0, _classCallCheck3.default)(this, Modal);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Modal).call(this, props, context));

    _this2.open = function () {
      _this2.setState({ isVisible: true });
    };

    _this2.close = function () {
      _this2.setState({ isVisible: false });
    };

    _this2.state = { isVisible: false };
    return _this2;
  }

  (0, _createClass3.default)(Modal, [{
    key: 'render',
    value: function render() {
      return React.createElement(BaseModal, (0, _extends3.default)({ show: this.state.isVisible, onHide: this.close }, this.props));
    }
  }]);
  return Modal;
}(React.Component);

var ModalBody = function (_React$Component3) {
  (0, _inherits3.default)(ModalBody, _React$Component3);

  function ModalBody() {
    (0, _classCallCheck3.default)(this, ModalBody);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ModalBody).apply(this, arguments));
  }

  (0, _createClass3.default)(ModalBody, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        (0, _puiReactHelpers.mergeProps)(this.props, { className: 'modal-body' }),
        this.props.children
      );
    }
  }]);
  return ModalBody;
}(React.Component);

var ModalFooter = function (_React$Component4) {
  (0, _inherits3.default)(ModalFooter, _React$Component4);

  function ModalFooter() {
    (0, _classCallCheck3.default)(this, ModalFooter);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ModalFooter).apply(this, arguments));
  }

  (0, _createClass3.default)(ModalFooter, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        (0, _puiReactHelpers.mergeProps)(this.props, { className: 'modal-footer' }),
        this.props.children
      );
    }
  }]);
  return ModalFooter;
}(React.Component);

module.exports = { Modal: Modal, ModalBody: ModalBody, ModalFooter: ModalFooter, BaseModal: BaseModal };