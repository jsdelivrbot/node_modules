/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

exports.__esModule = true;
exports.Wizard = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _buttons = require('../buttons');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-unused-vars
function doNothing() {}

var Wizard = exports.Wizard = function (_React$Component) {
  (0, _inherits3.default)(Wizard, _React$Component);

  function Wizard(props) {
    (0, _classCallCheck3.default)(this, Wizard);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = { currentPage: 0 };
    _this.onClickCancel = _this.onClickCancel.bind(_this);
    _this.onClickBack = _this.onClickBack.bind(_this);
    _this.onClickNext = _this.onClickNext.bind(_this);
    _this.onClickFinish = _this.onClickFinish.bind(_this);
    _this.setState = _this.setState.bind(_this);
    _this.getPage = _this.getPage.bind(_this);
    _this.setPage = _this.setPage.bind(_this);
    return _this;
  }

  Wizard.prototype.getPage = function getPage() {
    return this.state.currentPage;
  };

  Wizard.prototype.setPage = function setPage(page) {
    this.setState({ currentPage: Math.min(this.props.pages.length - 1, Math.max(0, page)) });
  };

  Wizard.prototype.onClickCancel = function onClickCancel() {
    this.props.cancel();
  };

  Wizard.prototype.onClickBack = function onClickBack() {
    var currentPage = this.state.currentPage;
    var pages = this.props.pages;

    var page = pages[currentPage];
    var onClickBack = page.onClickBack;


    var customPage = onClickBack ? onClickBack() : null;
    var target = typeof customPage === 'number' ? customPage : currentPage - 1;
    this.setPage(target);
  };

  Wizard.prototype.onClickNext = function onClickNext() {
    var currentPage = this.state.currentPage;
    var pages = this.props.pages;

    var page = pages[currentPage];
    var onClickNext = page.onClickNext;


    onClickNext && onClickNext();

    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  Wizard.prototype.onClickFinish = function onClickFinish() {
    this.props.finish();
  };

  Wizard.prototype.render = function render() {
    var _props = this.props,
        cancel = _props.cancel,
        cancelText = _props.cancelText,
        className = _props.className,
        pages = _props.pages,
        finishText = _props.finishText,
        style = _props.style;
    var currentPage = this.state.currentPage;


    var page = pages[currentPage];
    var hideNextButton = page.hideNextButton,
        _page$nextText = page.nextText,
        nextText = _page$nextText === undefined ? function () {
      return 'Next';
    } : _page$nextText;


    var lastPage = currentPage >= pages.length - 1;
    var firstPage = currentPage === 0;

    var nextDisabled = page.nextEnabled ? !page.nextEnabled(this.getPage) : false;

    var onClickNext = this.onClickNext,
        setPage = this.setPage,
        getPage = this.getPage;

    var renderedPage = page.render({ onClickNext: onClickNext, setPage: setPage, getPage: getPage });

    var cancelButton = _react2.default.createElement(
      _buttons.PrimaryButton,
      { alt: true, className: 'wizard-cancel-btn',
        onClick: this.onClickCancel },
      cancelText
    );

    var backButton = _react2.default.createElement(
      _buttons.PrimaryButton,
      { alt: true, className: 'wizard-back-btn',
        onClick: this.onClickBack },
      'Back'
    );

    var finishButton = _react2.default.createElement(
      _buttons.PrimaryButton,
      { className: 'wizard-finish-btn',
        onClick: this.onClickFinish },
      finishText
    );

    var nextButton = _react2.default.createElement(
      _buttons.PrimaryButton,
      { className: 'wizard-next-btn', disabled: nextDisabled,
        onClick: this.onClickNext },
      nextText()
    );

    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('wizard', className), style: style },
      _react2.default.createElement(
        'div',
        { className: 'wizard-page' },
        renderedPage
      ),
      _react2.default.createElement(
        'div',
        { className: 'wizard-footer grid ptxl' },
        _react2.default.createElement(
          'div',
          { className: 'col' },
          cancel && cancelButton,
          !firstPage && backButton
        ),
        _react2.default.createElement(
          'div',
          { className: 'col col-fixed' },
          !lastPage && !hideNextButton && nextButton,
          lastPage && finishButton
        )
      )
    );
  };

  return Wizard;
}(_react2.default.Component);

Wizard.propTypes = {
  pages: _propTypes2.default.array.isRequired,
  cancel: _propTypes2.default.func,
  cancelText: _propTypes2.default.string,
  finish: _propTypes2.default.func,
  finishText: _propTypes2.default.string
};
Wizard.defaultProps = {
  pages: [],
  cancelText: 'Cancel',
  finish: doNothing,
  finishText: 'Finish'
};