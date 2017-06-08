/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
"use strict";

module.exports = function mixin(ParentClass) {
  return {
    with: function _with() {
      for (var _len = arguments.length, classGenerators = Array(_len), _key = 0; _key < _len; _key++) {
        classGenerators[_key] = arguments[_key];
      }

      return classGenerators.reduceRight(function (ParentClass, classGenerator) {
        return classGenerator(ParentClass);
      }, ParentClass);
    }
  };
};