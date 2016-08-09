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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2hhLWVudi1sb2FkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLElBQUksYUFBYSxRQUFRLFlBQVIsRUFBc0IsVUFBdkM7QUFDQSxJQUFJLGNBQWMsUUFBUSxjQUFSLENBQWxCOztBQUVBLE9BQU8sT0FBUCxHQUFpQixVQUFTLE9BQVQsRUFBa0IsR0FBbEIsRUFBdUI7QUFDdEMsT0FBSyxTQUFMOztBQUVBLE1BQUksVUFBSjtBQUNBLE1BQUksS0FBSyxLQUFLLE9BQUwsQ0FBYSxJQUF0Qjs7QUFFQSxNQUFJLENBQUMsRUFBTCxFQUFTO0FBQ1AsU0FBSyxRQUFMLENBQWMsSUFBZCxFQUFvQixPQUFwQixFQUE2QixHQUE3QjtBQUNEOztBQUVELE1BQUksR0FBSixFQUFTO0FBQ1AsaUJBQWEsV0FBVyxpQkFBWCxDQUE2QixPQUE3QixFQUFzQyxHQUF0QyxDQUFiO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBSSxXQUFXLFlBQVksbUJBQVosQ0FBZ0MsSUFBaEMsQ0FBZjs7QUFFQSxpQkFBYSxJQUFJLFVBQUosQ0FBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCLENBQWI7QUFDQSxZQUFRLEtBQVIsQ0FBYyxJQUFkLEVBQW9CLE9BQXBCLENBQTRCLFVBQVMsSUFBVCxFQUFlLEdBQWYsRUFBb0I7QUFDOUMsaUJBQVcsR0FBWCxDQUFlLElBQUksVUFBSixDQUFlLE1BQU0sQ0FBckIsRUFBd0IsQ0FBeEIsRUFBMkIsUUFBM0IsRUFBcUMsT0FBTyxJQUE1QyxDQUFmO0FBQ0QsS0FGRDtBQUdBLGVBQVcsZ0JBQVgsQ0FBNEIsUUFBNUIsRUFBc0MsT0FBdEM7QUFDRDs7QUFFRCxNQUFJLFlBQVksSUFBSSxVQUFKLEVBQWhCOztBQUVBLFlBQVUsR0FBVixDQUFjLENBQ1osY0FBYyx5QkFBZSxFQUFmLENBQWQsR0FBbUMsa0JBRHZCLEVBQzJDLFVBRDNDLEVBQ3VELE9BRHZELENBQWQ7O0FBSUEsTUFBSSxTQUFTLFVBQVUscUJBQVYsRUFBYjs7QUFFQSxPQUFLLFFBQUwsQ0FBYyxTQUFkLEVBQXlCLE9BQU8sSUFBaEMsRUFBc0MsT0FBTyxHQUFQLENBQVcsUUFBWCxFQUF0QztBQUNELENBL0JEIiwiZmlsZSI6Im1vY2hhLWVudi1sb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3ZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG52YXIgU291cmNlTm9kZSA9IHJlcXVpcmUoJ3NvdXJjZS1tYXAnKS5Tb3VyY2VOb2RlXG52YXIgbG9hZGVyVXRpbHMgPSByZXF1aXJlKCdsb2FkZXItdXRpbHMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNvbnRlbnQsIG1hcCkge1xuICB0aGlzLmNhY2hlYWJsZSgpXG5cbiAgdmFyIHNvdXJjZU5vZGVcbiAgdmFyIGlkID0gdGhpcy5vcHRpb25zLm5hbWVcblxuICBpZiAoIWlkKSB7XG4gICAgdGhpcy5jYWxsYmFjayhudWxsLCBjb250ZW50LCBtYXApXG4gIH1cblxuICBpZiAobWFwKSB7XG4gICAgc291cmNlTm9kZSA9IFNvdXJjZU5vZGUuZnJvbVNvdXJjZVdpdGhNYXAoY29udGVudCwgbWFwKVxuICB9IGVsc2Uge1xuICAgIHZhciBmaWxlTmFtZSA9IGxvYWRlclV0aWxzLmdldFJlbWFpbmluZ1JlcXVlc3QodGhpcylcblxuICAgIHNvdXJjZU5vZGUgPSBuZXcgU291cmNlTm9kZShudWxsLCBudWxsLCBudWxsKVxuICAgIGNvbnRlbnQuc3BsaXQoJ1xcbicpLmZvckVhY2goZnVuY3Rpb24obGluZSwgaWR4KSB7XG4gICAgICBzb3VyY2VOb2RlLmFkZChuZXcgU291cmNlTm9kZShpZHggKyAxLCAwLCBmaWxlTmFtZSwgbGluZSArICdcXG4nKSlcbiAgICB9KVxuICAgIHNvdXJjZU5vZGUuc2V0U291cmNlQ29udGVudChmaWxlTmFtZSwgY29udGVudClcbiAgfVxuXG4gIHZhciBjb25jYXRTcmMgPSBuZXcgU291cmNlTm9kZSgpXG5cbiAgY29uY2F0U3JjLmFkZChbXG4gICAgJ2Rlc2NyaWJlKCcgKyBKU09OLnN0cmluZ2lmeShpZCkgKyAnLCBmdW5jdGlvbigpIHtcXG4nLCBzb3VyY2VOb2RlLCAnXFxufSk7J1xuICBdKVxuXG4gIHZhciByZXN1bHQgPSBjb25jYXRTcmMudG9TdHJpbmdXaXRoU291cmNlTWFwKClcblxuICB0aGlzLmNhbGxiYWNrKHVuZGVmaW5lZCwgcmVzdWx0LmNvZGUsIHJlc3VsdC5tYXAudG9TdHJpbmcoKSlcbn1cbiJdfQ==