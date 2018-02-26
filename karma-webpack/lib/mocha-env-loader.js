'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//var path = require('path')
var SourceNode = require('source-map').SourceNode;
var loaderUtils = require('loader-utils');

module.exports = function (content, map) {
  this.cacheable();

  var sourceNode;
  var id = this.options.name;

  if (!id) {
    this.callback(null, content, map);
  }

  if (map) {
    sourceNode = SourceNode.fromSourceWithMap(content, map);
  } else {
    var fileName = loaderUtils.getRemainingRequest(this);

    sourceNode = new SourceNode(null, null, null);
    content.split('\n').forEach(function (line, idx) {
      sourceNode.add(new SourceNode(idx + 1, 0, fileName, line + '\n'));
    });
    sourceNode.setSourceContent(fileName, content);
  }

  var concatSrc = new SourceNode();

  concatSrc.add(['describe(' + (0, _stringify2.default)(id) + ', function() {\n', sourceNode, '\n});']);

  var result = concatSrc.toStringWithSourceMap();

  this.callback(undefined, result.code, result.map.toString());
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2hhLWVudi1sb2FkZXIuanMiXSwibmFtZXMiOlsiU291cmNlTm9kZSIsInJlcXVpcmUiLCJsb2FkZXJVdGlscyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjb250ZW50IiwibWFwIiwiY2FjaGVhYmxlIiwic291cmNlTm9kZSIsImlkIiwib3B0aW9ucyIsIm5hbWUiLCJjYWxsYmFjayIsImZyb21Tb3VyY2VXaXRoTWFwIiwiZmlsZU5hbWUiLCJnZXRSZW1haW5pbmdSZXF1ZXN0Iiwic3BsaXQiLCJmb3JFYWNoIiwibGluZSIsImlkeCIsImFkZCIsInNldFNvdXJjZUNvbnRlbnQiLCJjb25jYXRTcmMiLCJyZXN1bHQiLCJ0b1N0cmluZ1dpdGhTb3VyY2VNYXAiLCJ1bmRlZmluZWQiLCJjb2RlIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFJQSxhQUFhQyxRQUFRLFlBQVIsRUFBc0JELFVBQXZDO0FBQ0EsSUFBSUUsY0FBY0QsUUFBUSxjQUFSLENBQWxCOztBQUVBRSxPQUFPQyxPQUFQLEdBQWlCLFVBQVNDLE9BQVQsRUFBa0JDLEdBQWxCLEVBQXVCO0FBQ3RDLE9BQUtDLFNBQUw7O0FBRUEsTUFBSUMsVUFBSjtBQUNBLE1BQUlDLEtBQUssS0FBS0MsT0FBTCxDQUFhQyxJQUF0Qjs7QUFFQSxNQUFJLENBQUNGLEVBQUwsRUFBUztBQUNQLFNBQUtHLFFBQUwsQ0FBYyxJQUFkLEVBQW9CUCxPQUFwQixFQUE2QkMsR0FBN0I7QUFDRDs7QUFFRCxNQUFJQSxHQUFKLEVBQVM7QUFDUEUsaUJBQWFSLFdBQVdhLGlCQUFYLENBQTZCUixPQUE3QixFQUFzQ0MsR0FBdEMsQ0FBYjtBQUNELEdBRkQsTUFFTztBQUNMLFFBQUlRLFdBQVdaLFlBQVlhLG1CQUFaLENBQWdDLElBQWhDLENBQWY7O0FBRUFQLGlCQUFhLElBQUlSLFVBQUosQ0FBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCLENBQWI7QUFDQUssWUFBUVcsS0FBUixDQUFjLElBQWQsRUFBb0JDLE9BQXBCLENBQTRCLFVBQVNDLElBQVQsRUFBZUMsR0FBZixFQUFvQjtBQUM5Q1gsaUJBQVdZLEdBQVgsQ0FBZSxJQUFJcEIsVUFBSixDQUFlbUIsTUFBTSxDQUFyQixFQUF3QixDQUF4QixFQUEyQkwsUUFBM0IsRUFBcUNJLE9BQU8sSUFBNUMsQ0FBZjtBQUNELEtBRkQ7QUFHQVYsZUFBV2EsZ0JBQVgsQ0FBNEJQLFFBQTVCLEVBQXNDVCxPQUF0QztBQUNEOztBQUVELE1BQUlpQixZQUFZLElBQUl0QixVQUFKLEVBQWhCOztBQUVBc0IsWUFBVUYsR0FBVixDQUFjLENBQ1osY0FBYyx5QkFBZVgsRUFBZixDQUFkLEdBQW1DLGtCQUR2QixFQUMyQ0QsVUFEM0MsRUFDdUQsT0FEdkQsQ0FBZDs7QUFJQSxNQUFJZSxTQUFTRCxVQUFVRSxxQkFBVixFQUFiOztBQUVBLE9BQUtaLFFBQUwsQ0FBY2EsU0FBZCxFQUF5QkYsT0FBT0csSUFBaEMsRUFBc0NILE9BQU9qQixHQUFQLENBQVdxQixRQUFYLEVBQXRDO0FBQ0QsQ0EvQkQiLCJmaWxlIjoibW9jaGEtZW52LWxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vdmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJylcbnZhciBTb3VyY2VOb2RlID0gcmVxdWlyZSgnc291cmNlLW1hcCcpLlNvdXJjZU5vZGVcbnZhciBsb2FkZXJVdGlscyA9IHJlcXVpcmUoJ2xvYWRlci11dGlscycpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY29udGVudCwgbWFwKSB7XG4gIHRoaXMuY2FjaGVhYmxlKClcblxuICB2YXIgc291cmNlTm9kZVxuICB2YXIgaWQgPSB0aGlzLm9wdGlvbnMubmFtZVxuXG4gIGlmICghaWQpIHtcbiAgICB0aGlzLmNhbGxiYWNrKG51bGwsIGNvbnRlbnQsIG1hcClcbiAgfVxuXG4gIGlmIChtYXApIHtcbiAgICBzb3VyY2VOb2RlID0gU291cmNlTm9kZS5mcm9tU291cmNlV2l0aE1hcChjb250ZW50LCBtYXApXG4gIH0gZWxzZSB7XG4gICAgdmFyIGZpbGVOYW1lID0gbG9hZGVyVXRpbHMuZ2V0UmVtYWluaW5nUmVxdWVzdCh0aGlzKVxuXG4gICAgc291cmNlTm9kZSA9IG5ldyBTb3VyY2VOb2RlKG51bGwsIG51bGwsIG51bGwpXG4gICAgY29udGVudC5zcGxpdCgnXFxuJykuZm9yRWFjaChmdW5jdGlvbihsaW5lLCBpZHgpIHtcbiAgICAgIHNvdXJjZU5vZGUuYWRkKG5ldyBTb3VyY2VOb2RlKGlkeCArIDEsIDAsIGZpbGVOYW1lLCBsaW5lICsgJ1xcbicpKVxuICAgIH0pXG4gICAgc291cmNlTm9kZS5zZXRTb3VyY2VDb250ZW50KGZpbGVOYW1lLCBjb250ZW50KVxuICB9XG5cbiAgdmFyIGNvbmNhdFNyYyA9IG5ldyBTb3VyY2VOb2RlKClcblxuICBjb25jYXRTcmMuYWRkKFtcbiAgICAnZGVzY3JpYmUoJyArIEpTT04uc3RyaW5naWZ5KGlkKSArICcsIGZ1bmN0aW9uKCkge1xcbicsIHNvdXJjZU5vZGUsICdcXG59KTsnXG4gIF0pXG5cbiAgdmFyIHJlc3VsdCA9IGNvbmNhdFNyYy50b1N0cmluZ1dpdGhTb3VyY2VNYXAoKVxuXG4gIHRoaXMuY2FsbGJhY2sodW5kZWZpbmVkLCByZXN1bHQuY29kZSwgcmVzdWx0Lm1hcC50b1N0cmluZygpKVxufVxuIl19