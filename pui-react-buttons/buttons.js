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

require('pui-css-buttons');

var UIButton = function (_React$Component) {
  _inherits(UIButton, _React$Component);

  function UIButton() {
    _classCallCheck(this, UIButton);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(UIButton).apply(this, arguments));
  }

  _createClass(UIButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var block = _props.block;
      var large = _props.large;
      var _props$kind = _props.kind;
      var kind = _props$kind === undefined ? 'default' : _props$kind;
      var children = _props.children;

      var others = _objectWithoutProperties(_props, ['block', 'large', 'kind', 'children']);

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
    _inherits(_class, _React$Component2);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'render',
      value: function render() {
        return React.createElement(UIButton, _extends({}, this.props, propOverrides));
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