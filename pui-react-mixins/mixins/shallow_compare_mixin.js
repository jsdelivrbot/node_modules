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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shallowCompare = require('react-addons-shallow-compare');

module.exports = function (ParentClass) {
  return function (_ParentClass) {
    (0, _inherits3.default)(ShallowCompare, _ParentClass);

    function ShallowCompare() {
      (0, _classCallCheck3.default)(this, ShallowCompare);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ShallowCompare).apply(this, arguments));
    }

    (0, _createClass3.default)(ShallowCompare, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
      }
    }]);
    return ShallowCompare;
  }(ParentClass);
};