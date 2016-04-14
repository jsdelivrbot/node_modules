'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _AsyncUtils = require('./AsyncUtils');

var _deprecateObjectProperties = require('./deprecateObjectProperties');

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function getComponentsForRoute(nextState, route, callback) {
  if (route.component || route.components) {
    callback(null, route.component || route.components);
    return;
  }

  var getComponent = route.getComponent || route.getComponents;
  if (getComponent) {
    var _ret = (function () {
      var nextStateWithLocation = _extends({}, nextState);
      var location = nextState.location;

      if (process.env.NODE_ENV !== 'production' && _deprecateObjectProperties.canUseMembrane) {
        var _loop = function (prop) {
          if (!Object.prototype.hasOwnProperty.call(location, prop)) {
            return 'continue';
          }

          Object.defineProperty(nextStateWithLocation, prop, {
            get: function get() {
              process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'Accessing location properties from the first argument to `getComponent` and `getComponents` is deprecated. That argument is now the router state (`nextState`) rather than the location. To access the location, use `nextState.location`.') : undefined;
              return location[prop];
            }
          });
        };

        // I don't use deprecateObjectProperties here because I want to keep the
        // same code path between development and production, in that we just
        // assign extra properties to the copy of the state object in both cases.
        for (var prop in location) {
          var _ret2 = _loop(prop);

          if (_ret2 === 'continue') continue;
        }
      } else {
        Object.assign(nextStateWithLocation, location);
      }

      getComponent.call(route, nextStateWithLocation, callback);
      return {
        v: undefined
      };
    })();

    if (typeof _ret === 'object') return _ret.v;
  }

  callback();
}

/**
 * Asynchronously fetches all components needed for the given router
 * state and calls callback(error, components) when finished.
 *
 * Note: This operation may finish synchronously if no routes have an
 * asynchronous getComponents method.
 */
function getComponents(nextState, callback) {
  _AsyncUtils.mapAsync(nextState.routes, function (route, index, callback) {
    getComponentsForRoute(nextState, route, callback);
  }, callback);
}

exports['default'] = getComponents;
module.exports = exports['default'];