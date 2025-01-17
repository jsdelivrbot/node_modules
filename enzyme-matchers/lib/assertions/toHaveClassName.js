'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toHaveClassName;

var _name = require('../utils/name');

var _name2 = _interopRequireDefault(_name);

var _html = require('../utils/html');

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toHaveClassName(enzymeWrapper, className) {
  var normalizedClassName = className.split(' ').join('.');
  var actualClassName = '(none)';
  var pass = false;

  if (normalizedClassName[0] !== '.') {
    normalizedClassName = '.' + normalizedClassName;
  }

  // handle different lengths of enzymeWrappers
  switch (enzymeWrapper.getElements().length) {
    case 0:
      break; // this will and should fail the test
    case 1:
      pass = enzymeWrapper.is(normalizedClassName);
      actualClassName = enzymeWrapper.prop('className');
      break;
    default:
      var allMatch = true;

      enzymeWrapper.forEach(function (node) {
        if (!node.is(normalizedClassName)) {
          allMatch = false;
        }
        actualClassName = node.prop('className');
      });

      pass = allMatch;
  }

  return {
    pass: pass,
    message: 'Expected <' + (0, _name2.default)(enzymeWrapper) + '> to have className of "' + normalizedClassName + '" but instead found "' + actualClassName + '"', // eslint-disable-line max-len
    negatedMessage: 'Expected <' + (0, _name2.default)(enzymeWrapper) + '> not to contain "' + normalizedClassName + '" for it\'s classname', // eslint-disable-line max-len
    contextualInformation: {
      actual: 'Found node output: ' + (0, _html2.default)(enzymeWrapper)
    }
  };
} /**
   * This source code is licensed under the MIT-style license found in the
   * LICENSE file in the root directory of this source tree. *
   *
   * @providesModule toHaveClassNameAssertion
   * 
   */

module.exports = exports['default'];