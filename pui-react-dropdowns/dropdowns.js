/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.uniqueid');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react');


var BsDropdown = require('react-bootstrap/lib/Dropdown');

function defDropdown(props) {
  return React.createClass({
    propTypes: {
      id: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
      bsStyle: React.PropTypes.any,
      buttonClassName: React.PropTypes.string,
      style: React.PropTypes.any,
      title: React.PropTypes.any,
      border: React.PropTypes.bool
    },
    render: function render() {
      var _props = this.props;
      var buttonClassName = _props.buttonClassName;
      var style = _props.style;
      var title = _props.title;
      var children = _props.children;
      var border = _props.border;

      var others = _objectWithoutProperties(_props, ['buttonClassName', 'style', 'title', 'children', 'border']);

      var id = others.id;
      var defaultBtnClassName = props.buttonClassName;
      var bsStyle = props.bsStyle;


      var btnClass = (0, _classnames2.default)(buttonClassName, defaultBtnClassName);
      var borderClass = border ? 'dropdown-border' : null;
      if (!id) {
        id = (0, _lodash2.default)('dropdown');
      }
      return React.createElement(
        BsDropdown,
        _extends({}, others, { id: id }),
        React.createElement(
          BsDropdown.Toggle,
          { className: btnClass, bsStyle: bsStyle, style: style },
          title
        ),
        React.createElement(
          BsDropdown.Menu,
          { className: borderClass },
          children
        )
      );
    }
  });
}

module.exports = {
  Dropdown: defDropdown({}),

  DropdownItem: require('react-bootstrap/lib/MenuItem'),

  LinkDropdown: defDropdown({ bsStyle: 'link' }),

  DefaultAltDropdown: defDropdown({ buttonClassName: 'btn-default-alt', bsStyle: null }),

  LowlightDropdown: defDropdown({ buttonClassName: 'btn-lowlight', bsStyle: null }),

  DangerDropdown: defDropdown({ bsStyle: 'danger' }),

  HighlightDropdown: defDropdown({ buttonClassName: 'btn-highlight', bsStyle: null }),

  HighlightAltDropdown: defDropdown({ buttonClassName: 'btn-highlight-alt', bsStyle: null })
};