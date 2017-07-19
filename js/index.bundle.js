(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function () {

    'use strict';


    function bounceOut(time, begin, change, duration) {
        if ((time /= duration) < 1 / 2.75) {
            return change * (7.5625 * time * time) + begin;
        } else if (time < 2 / 2.75) {
            return change * (7.5625 * (time -= 1.5 / 2.75) * time + 0.75) + begin;
        } else if (time < 2.5 / 2.75) {
            return change * (7.5625 * (time -= 2.25 / 2.75) * time + 0.9375) + begin;
        } else {
            return change * (7.5625 * (time -= 2.625 / 2.75) * time + 0.984375) + begin;
        }
    }


    function bounceIn(time, begin, change, duration) {
        return change - bounceOut(duration - time, 0, change, duration) + begin;
    }


    function bounceInOut(time, begin, change, duration) {
        if (time < duration / 2) {
            return bounceIn(time * 2, 0, change, duration) * 0.5 + begin;
        } else {
            return bounceOut(time * 2 - duration, 0, change, duration) * 0.5 + change * 0.5 + begin;
        }
    };

    function circIn(time, begin, change, duration) {
        return -change * (Math.sqrt(1 - (time = time / duration) * time) - 1) + begin;
    };

    function circOut(time, begin, change, duration) {
        return change * Math.sqrt(1 - (time = time / duration - 1) * time) + begin;
    };

    function circInOut(time, begin, change, duration) {
        if ((time = time / (duration / 2)) < 1) {
            return -change / 2 * (Math.sqrt(1 - time * time) - 1) + begin;
        } else {
            return change / 2 * (Math.sqrt(1 - (time -= 2) * time) + 1) + begin;
        }
    };

    function cubicIn(time, begin, change, duration) {
        return change * (time /= duration) * time * time + begin;
    };

    function cubicOut(time, begin, change, duration) {
        return change * ((time = time / duration - 1) * time * time + 1) + begin;
    };

    function cubicInOut(time, begin, change, duration) {
        if ((time = time / (duration / 2)) < 1) {
            return change / 2 * time * time * time + begin;
        } else {
            return change / 2 * ((time -= 2) * time * time + 2) + begin;
        }
    };

    function expoIn(time, begin, change, duration) {
        if (time === 0) {
            return begin;
        }
        return change * Math.pow(2, 10 * (time / duration - 1)) + begin;
    };

    function expoOut(time, begin, change, duration) {
        if (time === duration) {
            return begin + change;
        }
        return change * (-Math.pow(2, -10 * time / duration) + 1) + begin;
    };

    function expoInOut(time, begin, change, duration) {
        if (time === 0) {
            return begin;
        } else if (time === duration) {
            return begin + change;
        } else if ((time = time / (duration / 2)) < 1) {
            return change / 2 * Math.pow(2, 10 * (time - 1)) + begin;
        } else {
            return change / 2 * (-Math.pow(2, -10 * (time - 1)) + 2) + begin;
        }
    };

    function linear(time, begin, change, duration) {
        return change * time / duration + begin;
    };

    function quadIn(time, begin, change, duration) {
        return change * (time = time / duration) * time + begin;
    };

    function quadOut(time, begin, change, duration) {
        return -change * (time = time / duration) * (time - 2) + begin;
    };

    function quadInOut(time, begin, change, duration) {
        if ((time = time / (duration / 2)) < 1) {
            return change / 2 * time * time + begin;
        } else {
            return -change / 2 * ((time -= 1) * (time - 2) - 1) + begin;
        }
    };

    function quartIn(time, begin, change, duration) {
        return change * (time = time / duration) * time * time * time + begin;
    };

    function quartOut(time, begin, change, duration) {
        return -change * ((time = time / duration - 1) * time * time * time - 1) + begin;
    };

    function quartInOut(time, begin, change, duration) {
        if ((time = time / (duration / 2)) < 1) {
            return change / 2 * time * time * time * time + begin;
        } else {
            return -change / 2 * ((time -= 2) * time * time * time - 2) + begin;
        }
    };

    function quintIn(time, begin, change, duration) {
        return change * (time = time / duration) * time * time * time * time + begin;
    };

    function quintOut(time, begin, change, duration) {
        return change * ((time = time / duration - 1) * time * time * time * time + 1) + begin;
    };

    function quintInOut(time, begin, change, duration) {
        if ((time = time / (duration / 2)) < 1) {
            return change / 2 * time * time * time * time * time + begin;
        } else {
            return change / 2 * ((time -= 2) * time * time * time * time + 2) + begin;
        }
    };

    function sineIn(time, begin, change, duration) {
        return -change * Math.cos(time / duration * (Math.PI / 2)) + change + begin;
    };

    function sineOut(time, begin, change, duration) {
        return change * Math.sin(time / duration * (Math.PI / 2)) + begin;
    };

    function sineInOut(time, begin, change, duration) {
        return -change / 2 * (Math.cos(Math.PI * time / duration) - 1) + begin;
    };

    var Ease = {
        bounceOut: bounceOut,
        bounceIn: bounceIn,
        bounceInOut: bounceInOut,
        circIn: circIn,
        circOut: circOut,
        circInOut: circInOut,
        cubicIn: cubicIn,
        cubicOut: cubicOut,
        cubicInOut: cubicInOut,
        expoIn: expoIn,
        expoOut: expoOut,
        expoInOut: expoInOut,
        linear: linear,
        quadIn: quadIn,
        quadOut: quadOut,
        quadInOut: quadInOut,
        quartIn: quartIn,
        quartOut: quartOut,
        quartInOut: quartInOut,
        quintIn: quintIn,
        quintOut: quintOut,
        quintInOut: quintInOut,
        sineIn: sineIn,
        sineOut: sineOut,
        sineInOut: sineInOut
    }
    if (typeof exports === 'object') {
        module.exports = Ease;
    } else if (typeof define === 'function' && define.amd) {
        define(function () {
            return Ease;
        });
    } else {
        this.Ease = Ease;
    }

}.call(this));
},{}],2:[function(require,module,exports){
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;
},{}],3:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if ("development" !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
},{}],4:[function(require,module,exports){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var emptyFunction = require('./emptyFunction');

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if ("development" !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
},{"./emptyFunction":2}],5:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

if ("development" !== 'production') {
  var invariant = require('fbjs/lib/invariant');
  var warning = require('fbjs/lib/warning');
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if ("development" !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

},{"./lib/ReactPropTypesSecret":9,"fbjs/lib/invariant":3,"fbjs/lib/warning":4}],6:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');
var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

},{"./lib/ReactPropTypesSecret":9,"fbjs/lib/emptyFunction":2,"fbjs/lib/invariant":3}],7:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
var checkPropTypes = require('./checkPropTypes');

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if ("development" !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      "development" !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      "development" !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

},{"./checkPropTypes":5,"./lib/ReactPropTypesSecret":9,"fbjs/lib/emptyFunction":2,"fbjs/lib/invariant":3,"fbjs/lib/warning":4}],8:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if ("development" !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}

},{"./factoryWithThrowingShims":6,"./factoryWithTypeCheckers":7}],9:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = require('../../util/util.js');

var Util = _interopRequireWildcard(_util);

var _layout2 = require('../..//util/layout.js');

var _layout3 = _interopRequireDefault(_layout2);

var _depot = require('../../util/depot.js');

var _depot2 = _interopRequireDefault(_depot);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _layout = new _layout3.default();

var Carousel = function (_React$Component) {
    _inherits(Carousel, _React$Component);

    function Carousel(props) {
        _classCallCheck(this, Carousel);

        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        _this.PropTypes = {
            items: _propTypes2.default.array.isRequired,
            current: _propTypes2.default.number.isRequired,
            layout: _propTypes2.default.string.isRequired,
            width: _propTypes2.default.number.isRequired
        };
        _this.state = {
            current: 0,
            rotationY: 0,
            items: [],
            figures: []
        };

        return _this;
    }

    _createClass(Carousel, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                items: this.props.items,
                figures: _layout[this.props.layout].figures(this.props, this.props.items, 0)
            });
            this.depot = (0, _depot2.default)(this.state, this.props, this.setState.bind(this));
            this.onRotate = this.depot.onRotate.bind(this);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.depot.onNextProps(nextProps);
            this.onRotate = this.depot.onRotate.bind(this);
        }
    }, {
        key: 'render',
        value: function render() {
            var angle = 2 * Math.PI / this.state.figures.length;
            var listStyle = {
                perspective: this.props.perspective + 'px',
                width: !isNaN(this.props.width) ? this.props.width + 'px' : this.props.width
            };

            var figures = this.state.figures.map(function (d, i) {
                var itemStyle = {
                    backgroundImage: 'url(' + d.image + ')'
                };

                return _react2.default.createElement(
                    'div',
                    {
                        key: i,
                        style: Object.assign({}, itemStyle, Util.figureStyle(d)),
                        className: 'mdBanner__item'
                    },
                    _react2.default.createElement(
                        'a',
                        { title: d.title, href: d.link, target: '_blank' },
                        _react2.default.createElement('img', { className: 'image', src: d.image })
                    )
                );
            });
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'mdBanner' },
                    _react2.default.createElement(
                        'div',
                        { className: 'mdBanner-list', ref: 'bannerList', style: listStyle },
                        _react2.default.createElement(
                            'div',
                            { className: 'l-vm btnPrev' },
                            _react2.default.createElement(
                                'div',
                                { className: 'l-vm__content' },
                                _react2.default.createElement(
                                    'a',
                                    {
                                        className: '',
                                        href: '#',
                                        onClick: Util.partial(this.onRotate, +angle)
                                    },
                                    '<'
                                )
                            )
                        ),
                        figures,
                        _react2.default.createElement(
                            'div',
                            { className: 'l-vm btnNext' },
                            _react2.default.createElement(
                                'a',
                                {
                                    className: 'l-vm__content',
                                    href: '#',
                                    onClick: Util.partial(this.onRotate, -angle)
                                },
                                '>'
                            )
                        ),
                        _react2.default.createElement('br', null)
                    )
                )
            );
        }
    }]);

    return Carousel;
}(_react2.default.Component);

exports.default = Carousel;

},{"../..//util/layout.js":13,"../../util/depot.js":12,"../../util/util.js":14,"prop-types":8,"react":"react"}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Carousel = require('./components/\bcarousel/Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('./util/util');

var util = _interopRequireWildcard(_util);

var _easeFunctions = require('ease-functions');

var _easeFunctions2 = _interopRequireDefault(_easeFunctions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import CarouselAction from './components/carousel/Carousel.action';

var items = [{
    url: 'https://placem.at/things?w=400&random=' + 1,
    title: 'this items title ',
    link: 'http://dummyimage.com/'
}, {
    url: 'https://placem.at/things?w=400&random=' + 2,
    title: 'this items title ',
    link: 'http://dummyimage.com/'
}, {
    url: 'https://placem.at/things?w=400&random=' + 3,
    title: 'this items title ',
    link: 'http://dummyimage.com/'
}, {
    url: 'https://placem.at/things?w=400&random=' + 4,
    title: 'this items title ',
    link: 'http://dummyimage.com/'
}, {
    url: 'https://placem.at/things?w=400&random=' + 5,
    title: 'this items title ',
    link: 'http://dummyimage.com/'
}, {
    url: 'https://placem.at/things?w=400&random=' + 6,
    title: 'this items title ',
    link: 'http://dummyimage.com/'
}, {
    url: 'https://placem.at/things?w=400&random=' + 7,
    title: 'this items title ',
    link: 'http://dummyimage.com/'
}, {
    url: 'https://placem.at/things?w=400&random=' + 8,
    title: 'this items title ',
    link: 'http://dummyimage.com/'
}, {
    url: 'https://placem.at/things?w=400&random=' + 9,
    title: 'this items title ',
    link: 'http://dummyimage.com/'
}];

var Demo = function (_React$Component) {
    _inherits(Demo, _React$Component);

    function Demo(props) {
        _classCallCheck(this, Demo);

        var _this2 = _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

        _this2.PropTypes = {
            banner: _propTypes2.default.object.isRequired,
            actions: _propTypes2.default.object.isRequired
        };

        var state = {
            layout: 'itunes',
            perspective: 960,
            width: '15%',
            diameter: 960,
            zDistance: 3,
            xDistance: 3,
            opacity: true,
            duration: 300,
            ease: 'sineOut'
        };
        var _this = _this2;
        var easeType = [];
        var gui = new dat.GUI();

        Object.keys(_easeFunctions2.default).map(function (key, index) {
            easeType.push(key.toString());
        });

        _this2.controller = {};
        _this2.controller.perspective = gui.add(state, 'perspective', 0, 3000).step(50);
        _this2.controller.width = gui.add(state, 'width');
        _this2.controller.diameter = gui.add(state, 'diameter', 0, 2000).step(1);
        _this2.controller.zDistance = gui.add(state, 'zDistance', 1, 5).step(0.001);
        _this2.controller.xDistance = gui.add(state, 'xDistance', 1, 5).step(0.001);
        _this2.controller.opacity = gui.add(state, 'opacity');
        _this2.controller.duration = gui.add(state, 'duration', 0, 2000).step(300);
        _this2.controller.ease = gui.add(state, 'ease', easeType);

        util.mapObj(function (input) {
            input.onFinishChange(function (value) {
                _this.setState(Object.assign({}, _this.state, state));
            });
        }, _this2.controller);

        _this2.state = Object.assign({}, state);
        return _this2;
    }

    _createClass(Demo, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Carousel2.default, {
                    items: items,
                    current: this.state.current,
                    layout: 'itunes',
                    duration: this.state.duration,
                    perspective: this.state.perspective,
                    diameter: this.state.diameter,
                    width: this.state.width,
                    zDistance: this.state.zDistance,
                    xDistance: this.state.xDistance,
                    ease: this.state.ease,
                    opacity: this.state.opacity
                })
            );
        }
    }]);

    return Demo;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Demo, null), document.getElementById('react-index'));

},{"./components/\bcarousel/Carousel":10,"./util/util":14,"ease-functions":1,"prop-types":8,"react":"react","react-dom":"react-dom"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = depot;

var _easeFunctions = require('ease-functions');

var _easeFunctions2 = _interopRequireDefault(_easeFunctions);

var _layout2 = require('./layout');

var _layout3 = _interopRequireDefault(_layout2);

var _util = require('./util');

var Util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _layout = new _layout3.default();

function depot(initialState, initialProps, callback) {
    var res = {};
    var state = initialState;
    var props = initialProps;
    var requestID;
    res.onNextProps = function onNextProps(nextProps) {
        // if (true /*props.layout != nextProps.layout || props.items != nextProps.items*/) {
        props = nextProps;
        var to = _layout[props.layout].figures(props, props.items, state.rotationY);
        var bounds = transitionFigures(state.figures, to, _easeFunctions2.default[props.ease], props.duration);
        var stepper = transit(bounds, to, props.duration);
        playAnimation(state, to, stepper, callback);
        // }
        props = nextProps;
    };

    res.onRotate = function (angle) {
        var to = _layout[props.layout].figures(props, props.items, state.rotationY + angle);
        state.rotationY += angle;
        var bounds = transitionFigures(state.figures, to, _easeFunctions2.default[props.ease], props.duration);
        var stepper = transit(bounds, to, props.duration);

        if (requestID) {
            cancelAnimationFrame(requestID);
        }
        playAnimation(state, to, stepper, callback);
    };

    function playAnimation(state, to, stepper, callback) {
        if (requestID) window.cancelAnimationFrame(requestID);
        function animate(timestamp) {
            requestID = requestAnimationFrame(animate);
            state.figures = stepper(timestamp);
            callback(state);
            if (state.figures == to) {
                cancelAnimationFrame(requestID);
            }
        }
        requestAnimationFrame(animate);
    }
    return res;
}

function transitionFigures(from, to, ease) {
    var keys = Util.uniq(Util.pluck('key', from.concat(to)));
    var fromTo = [];
    keys.forEach(function (key) {
        fromTo.push(transfigure(startFrame(from[key], to[key]), endFrame(from[key], to[key]), ease));
    });
    return fromTo;
}

function transit(entries, to, duration) {
    var start, end;
    var withChange = addChange(entries);
    var time = 0;
    return function step(timestamp) {
        if (!start) {
            start = timestamp;
            end = timestamp + duration;
        }
        if (timestamp >= end) {
            return to;
        }
        time = timestamp - start;
        return tally(time, withChange, duration);
    };
}

function transfigure(from, to, ease) {
    var keys = Util.uniq(Object.keys(from || {}).concat(Object.keys(to || {})));
    var res = {};
    keys.forEach(function (key) {
        res[key] = {
            from: from[key],
            to: to[key]
        };
        res[key].ease = isNaN(res[key].from) ? secondArg : ease;
    });
    return res;
}

function addChange(entries) {
    var len = entries.length;
    var res = new Array(len);
    for (var i = 0; i < len; ++i) {
        res[i] = addObjChange(entries[i]);
    }
    return res;
}

function addObjChange(entry) {
    var res = Object.create(null);
    for (var key in entry) {
        res[key] = Util.merge(entry[key], { change: entry[key].to - entry[key].from });
    }
    return res;
}

function tally(time, entries, duration) {
    var len = entries.length;
    var res = new Array(len);
    var entry;
    for (var i = 0; i < len; ++i) {
        entry = entries[i];
        var obj = Object.create(null);
        for (var key in entry) {
            obj[key] = entry[key].ease ? entry[key].ease(time, entry[key].from, entry[key].change, duration) : entry[key].from;
        }
        res[i] = obj;
    }
    return res;
}

var secondArg = function secondArg(x, y) {
    return y;
};

var present = function present(entries) {
    return entries.filter(function (entry) {
        return entry.present;
    });
};

function startFrame(now, then) {
    return now || Util.merge(then, { present: true /*opacity: 0 */ });
}

function endFrame(now, then) {
    return now && !then ? Util.merge(now, { present: false /*opacity: 0 */ }) // leaves
    : Util.merge(then, { present: true /*opacity: 1*/ });
}

},{"./layout":13,"./util":14,"ease-functions":1}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Layout;

var _util = require('./util');

var Util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Layout() {
    var layout = this;
    layout.itunes = {
        distance: function distance(width, sides) {},
        figures: function figures(props, images, initial) {
            var sides = images.length;
            var r = Math.floor(props.diameter / 2);
            var angle = Math.PI * 2 / sides;
            var acceptable = Math.round(initial / angle) * angle;
            // var rotate = -30;
            var maxRatio = 0.4;
            var zDistance = props.zDistance;
            var xDistance = props.xDistance;

            function cubicOut(time, begin, change, duration) {
                return change * ((time = time / duration - 1) * time * time + 1) + begin;
            }

            function cubicIn(time, begin, change, duration) {
                return change * (time /= duration) * time * time + begin;
            }

            return Util.range(0, sides).map(function (d) {
                var ratio = {};
                var angleR = Math.PI * 0.5 - (d * angle + acceptable);
                var thisRotate = 0.5;
                var opacity = 0;

                if (Math.abs(Math.cos(angleR)) != 1) {
                    ratio.easeOut = 1 + Math.round(cubicOut(sides, 0, maxRatio, sides - 1) * 10 / 10);
                    ratio.easeIn = 1 + Math.round(cubicIn(sides, 0, maxRatio, sides - 1) * 10 / 10);
                }

                if (Math.sin(angleR) != -1) {
                    thisRotate = Math.sin(angleR + Math.PI * 0.5) * 0.3;
                }

                if (Math.sin(angleR) != 1) {
                    opacity = Math.max(Math.sin(angleR) * 1.1, 0.45);
                } else {
                    opacity = 1;
                }

                return {
                    rotateY: (0 - thisRotate * ratio.easeOut) * -1,
                    translateX: r * Math.cos(angleR) * xDistance,
                    translateZ: 0 - r * Math.abs(1 - Math.sin(angleR)) * zDistance * ratio.easeOut, //bug issue with change z distance witnout min value
                    opacity: props.opacity ? opacity : 1,
                    zIndex: Math.round(Math.sin(angleR) * 100),
                    present: true,
                    key: d,
                    image: images[d].url
                };
            });
        }
    };

    return layout;
} // import Ease from 'ease-functions';

},{"./util":14}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.figureStyle = figureStyle;
exports.partial = partial;
exports.range = range;
exports.uniq = uniq;
exports.merge = merge;
exports.pluck = pluck;
exports.mapObj = mapObj;
//conver object to css inline style
function figureStyle(d) {
    var translateX = Object.hasOwnProperty.call(d, 'translateX') ? d.translateX : 0;
    var zIndex = Object.hasOwnProperty.call(d, 'zIndex') ? d.zIndex : 0;
    // var shadowOpacity = d.opacity == 1 ? 0 : 1;
    return {
        transform: 'rotateY(' + d.rotateY + 'rad) ' + ' translateX(' + translateX + 'px)' + ' translateZ(' + d.translateZ + 'px)' + '',
        zIndex: zIndex,
        boxShadow: '0 0 100px 100px rgba(0,0,0,' + (1 - d.opacity) + ') inset',
        opacity: d.opacity
        // opacity: d.opacity
    };
}

function partial(func) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
        return func.apply(this, args.concat(Array.prototype.slice.call(arguments, 0)));
    };
}

function range(from, to) {
    var res = [];
    for (var i = from; i < to; ++i) {
        res.push(i);
    }
    return res;
}

function uniq(a) {
    var prims = { boolean: {}, number: {}, string: {} },
        objs = [];
    return a.filter(function (item) {
        var type = typeof item === 'undefined' ? 'undefined' : _typeof(item);
        if (type in prims) return prims[type].hasOwnProperty(item) ? false : prims[type][item] = true;else return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
}

/**
 * Merge defaults with user options
 * @private
 * @param {Object} defaults Default settings
 * @param {Object} options User options
 * @returns {Object} Merged values of defaults and options
 */
function merge(defaults, options) {
    var extended = {};
    var prop;
    for (prop in defaults) {
        if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
            extended[prop] = defaults[prop];
        }
    }
    for (prop in options) {
        if (Object.prototype.hasOwnProperty.call(options, prop)) {
            extended[prop] = options[prop];
        }
    }
    return extended;
}

function pluck(key, entries) {
    return entries.map(function (entry) {
        return entry[key];
    });
}

function mapObj(fn, obj) {
    var res = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            res[key] = fn(obj[key]);
        }
    }
    return res;
}

},{}]},{},[11])

//# sourceMappingURL=../js/maps/index.bundle.js.map
