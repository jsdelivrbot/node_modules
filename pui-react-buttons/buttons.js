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

require('pui-css-buttons');

var UIButton = function (_React$Component) {
  (0, _inherits3.default)(UIButton, _React$Component);

  function UIButton() {
    (0, _classCallCheck3.default)(this, UIButton);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(UIButton).apply(this, arguments));
  }

  (0, _createClass3.default)(UIButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var block = _props.block;
      var large = _props.large;
      var _props$kind = _props.kind;
      var kind = _props$kind === undefined ? 'default' : _props$kind;
      var children = _props.children;
      var others = (0, _objectWithoutProperties3.default)(_props, ['block', 'large', 'kind', 'children']);


      var defaultProps = {
        className: ['btn', 'btn-' + kind, {
          'btn-block': block,
          'btn-lg': large
        }]
      };
      var props = (0, _puiReactHelpers.mergeProps)(others, defaultProps);

      return this.props.href ? React.createElement(
        'a',
        props,
        children
      ) : React.createElement(
        'button',
        props,
        children
      );
    }
  }]);
  return UIButton;
}(React.Component);

UIButton.propTypes = {
  block: React.PropTypes.bool,
  href: React.PropTypes.string,
  kind: React.PropTypes.oneOf(['default', 'default-alt', 'lowlight', 'danger', 'highlight', 'highlight-alt']),
  large: React.PropTypes.bool
};


function defButton(propOverrides) {
  var _class, _temp;

  return _temp = _class = function (_React$Component2) {
    (0, _inherits3.default)(_class, _React$Component2);

    function _class() {
      (0, _classCallCheck3.default)(this, _class);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(_class).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
      key: 'render',
      value: function render() {
        return React.createElement(UIButton, (0, _extends3.default)({}, this.props, propOverrides));
      }
    }]);
    return _class;
  }(React.Component), _class.propTypes = {
    block: React.PropTypes.bool,
    href: React.PropTypes.string,
    kind: React.PropTypes.oneOf(['default', 'default-alt', 'lowlight', 'danger', 'highlight', 'highlight-alt']),
    large: React.PropTypes.bool
  }, _temp;
}

module.exports = {
  UIButton: UIButton,

  DefaultButton: defButton({ kind: 'default' }),

  DefaultAltButton: defButton({ kind: 'default-alt' }),

  LowlightButton: defButton({ kind: 'lowlight' }),

  DangerButton: defButton({ kind: 'danger' }),

  HighlightButton: defButton({ kind: 'highlight' }),

  HighlightAltButton: defButton({ kind: 'highlight-alt' })
};