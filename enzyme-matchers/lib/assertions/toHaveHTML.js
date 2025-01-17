'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _name = require('../utils/name');

var _name2 = _interopRequireDefault(_name);

var _single = require('../utils/single');

var _single2 = _interopRequireDefault(_single);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toHaveHTML(enzymeWrapper, html) {
  var wrapperHTML = enzymeWrapper.html();

  // normalize quotes
  var useSingleQuotes = html.search("'") !== -1;

  var actualHTML = wrapperHTML.replace(/("|')/g, useSingleQuotes ? "'" : '"');
  var expectedHTML = html.replace(/("|')/g, useSingleQuotes ? "'" : '"');

  var pass = actualHTML === expectedHTML;

  return {
    pass: pass,
    message: 'Expected <' + (0, _name2.default)(enzymeWrapper) + '> html to match the expected, but it didn\'t.',
    negatedMessage: 'Expected <' + (0, _name2.default)(enzymeWrapper) + '> html not to match the expected, but it did.',
    contextualInformation: {
      actual: 'Actual HTML: ' + actualHTML,
      expected: 'Expected HTML: ' + expectedHTML
    }
  };
} /**
   * This source code is licensed under the MIT-style license found in the
   * LICENSE file in the root directory of this source tree. *
   *
   * @providesModule toHaveHTMLAssertion
   * 
   */

exports.default = (0, _single2.default)(toHaveHTML);
module.exports = exports['default'];