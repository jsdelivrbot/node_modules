/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _puiReactHelpers = require('pui-react-helpers');

var React = require('react');

var _require = require('pui-react-typography');

var DefaultH4 = _require.DefaultH4;

var BsModal = require('react-bootstrap/lib/Modal');
var BsModalHeader = require('react-bootstrap/lib/ModalHeader');

var BaseModal = React.createClass({
  displayName: 'BaseModal',

  propTypes: {
    title: React.PropTypes.string,
    show: React.PropTypes.bool,
    onHide: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onHide: function onHide() {}
    };
  },

  render: function render() {
    var _props = this.props;
    var show = _props.show;
    var title = _props.title;
    var children = _props.children;
    var onHide = _props.onHide;

    var modalProps = _objectWithoutProperties(_props, ['show', 'title', 'children', 'onHide']);

    return React.createElement(
      BsModal,
      _extends({ show: show, onHide: onHide }, _puiReactHelpers.mergeProps(modalProps, { className: 'modal-basic' })),
      React.createElement(
        BsModalHeader,
        { className: 'modal-header', closeButton: true },
        React.createElement(
          DefaultH4,
          { className: 'modal-title', id: 'modalTitle' },
          title
        )
      ),
      children
    );
  }
});

var Modal = React.createClass({
  displayName: 'Modal',

  getInitialState: function getInitialState() {
    return { isVisible: false };
  },

  open: function open() {
    this.setState({ isVisible: true });
  },

  close: function close() {
    this.setState({ isVisible: false });
  },

  render: function render() {
    return React.createElement(BaseModal, _extends({ show: this.state.isVisible, onHide: this.close }, this.props));
  }
});

var ModalBody = React.createClass({
  displayName: 'ModalBody',

  render: function render() {
    return React.createElement(
      'div',
      _puiReactHelpers.mergeProps(this.props, { className: 'modal-body' }),
      this.props.children
    );
  }
});

var ModalFooter = React.createClass({
  displayName: 'ModalFooter',

  render: function render() {
    return React.createElement(
      'div',
      _puiReactHelpers.mergeProps(this.props, { className: 'modal-footer' }),
      this.props.children
    );
  }
});

module.exports = { Modal: Modal, ModalBody: ModalBody, ModalFooter: ModalFooter, BaseModal: BaseModal };