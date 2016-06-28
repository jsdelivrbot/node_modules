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

require('pui-css-modals');

var BsModal = require('react-bootstrap/lib/Modal');
var BsModalHeader = require('react-bootstrap/lib/ModalHeader');

var BaseModal = function (_React$Component) {
  _inherits(BaseModal, _React$Component);

  function BaseModal() {
    _classCallCheck(this, BaseModal);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseModal).apply(this, arguments));
  }

  _createClass(BaseModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var show = _props.show;
      var title = _props.title;
      var children = _props.children;
      var onHide = _props.onHide;

      var modalProps = _objectWithoutProperties(_props, ['show', 'title', 'children', 'onHide']);

      return React.createElement(
        BsModal,
        _extends({ show: show, onHide: onHide }, modalProps),
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
  _inherits(Modal, _React$Component2);

  function Modal(props, context) {
    _classCallCheck(this, Modal);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props, context));

    _this2.open = function () {
      _this2.setState({ isVisible: true });
    };

    _this2.close = function () {
      _this2.setState({ isVisible: false });
    };

    _this2.state = { isVisible: false };
    return _this2;
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      return React.createElement(BaseModal, _extends({ show: this.state.isVisible, onHide: this.close }, this.props));
    }
  }]);

  return Modal;
}(React.Component);

var ModalBody = function (_React$Component3) {
  _inherits(ModalBody, _React$Component3);

  function ModalBody() {
    _classCallCheck(this, ModalBody);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalBody).apply(this, arguments));
  }

  _createClass(ModalBody, [{
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
  _inherits(ModalFooter, _React$Component4);

  function ModalFooter() {
    _classCallCheck(this, ModalFooter);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalFooter).apply(this, arguments));
  }

  _createClass(ModalFooter, [{
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