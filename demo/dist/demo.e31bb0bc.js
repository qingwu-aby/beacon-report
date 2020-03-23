// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../index.ts":[function(require,module,exports) {
"use strict"; // const ERROR_LIST: [] = [];

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
}); // const ADD_DATA: object = {};
// window.Performance = Performance;
// Performance.addError = function (err: IError) {
//   err = {
//     method: 'GET',
//     n: 'js',
//     message: err.message,
//     data: {
//       col: err.col,
//       line: err.line,
//       resUrl: err.resUrl
//     }
//   }
//   ERROR_LIST.push(err)
// }
// Performance.addData = function (fn: Function) {
//   fn && fn(ADD_DATA)
// }

var PerformanceIext =
/*#__PURE__*/
function () {
  function PerformanceIext() {
    _classCallCheck(this, PerformanceIext);
  }

  _createClass(PerformanceIext, [{
    key: "clearMarks",
    value: function clearMarks(markName) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "clearMeasures",
    value: function clearMeasures(measureName) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "clearResourceTimings",
    value: function clearResourceTimings() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "getEntries",
    value: function getEntries() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "getEntriesByName",
    value: function getEntriesByName(name, type) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "getEntriesByType",
    value: function getEntriesByType(type) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "mark",
    value: function mark(markName) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "measure",
    value: function measure(measureName, startMark, endMark) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "now",
    value: function now() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "setResourceTimingBufferSize",
    value: function setResourceTimingBufferSize(maxSize) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, listener, options) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, listener, options) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      throw new Error("Method not implemented.");
    }
  }]);

  return PerformanceIext;
}();

var PERFORMANCE_REPORT = 1;
var REQUEST_REPORT = 2;
var ERROR_REPORT = 3;
var LAST_TIMESTAMP = new Date().setHours(23, 59, 59, 999);
var NOT_AJAX_ARR = ['fetch', 'xmlhttprequest'];
/**
 * @desc new Monitor(opts, fn)
 */

var Monitor =
/*#__PURE__*/
function (_PerformanceIext) {
  _inherits(Monitor, _PerformanceIext);

  function Monitor(options, fn) {
    var _this;

    _classCallCheck(this, Monitor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Monitor).call(this));
    _this.options = options;
    _this.fn = fn;
    _this.initConf = {
      // 资源列表
      resourceList: [],
      // 页面信息
      performance: {},
      // 错误列表
      errorList: [],
      // referrer 来源
      lastURI: document.referrer && document.referrer !== location.href ? document.referrer : '',
      // 当前页面
      currentPage: ''
    };
    return _this;
  }

  _createClass(Monitor, [{
    key: "getOptions",
    value: function getOptions() {
      var opts = Object.assign({
        // 上报地址
        domain: 'XXXX',
        // 脚本延迟上报时间
        outTime: 300,
        // ajax请求时需要过滤的url信息
        filterUrl: [],
        // 是否上报页面性能数据
        isPage: true,
        // 是否上报ajax性能数据
        isAjax: true,
        // 是否上报页面资源数据
        isResource: true,
        // 是否上报错误信息
        isError: true,
        // 提交参数
        add: {}
      }, this.options);
      var initError = {
        t: '',
        n: 'js',
        msg: '',
        data: {}
      };
      return {
        opts: opts,
        initError: initError
      };
    }
  }, {
    key: "error",
    value: function error() {} // 页面性能信息

  }, {
    key: "performancePage",
    value: function performancePage() {
      if (!window.performance) return;
      var timing = performance.timing;
      this.initConf = _objectSpread({}, this.initConf, {
        performance: {
          // dns 解析
          dnsTiming: timing.domainLookupEnd - timing.domainLookupStart || 0,
          // tcp 建立
          tcpTiming: timing.connectEnd - timing.connectStart || 0,
          // request
          reqTiming: timing.responseEnd - timing.requestStart || 0,
          // 白屏
          whiteTiming: timing.responseStart - timing.navigationStart || 0,
          // dom 渲染
          domTiming: timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart || 0,
          // dom 解析耗时
          domInteractive: timing.domComplete - timing.domInteractive || 0,
          // onload
          onloadTiming: timing.loadEventEnd - timing.loadEventStart || 0,
          // ready
          readyTiming: timing.fetchStart - timing.navigationStart || 0
        }
      });
    } // 页面资源信息

  }, {
    key: "performanceSource",
    value: function performanceSource() {
      if (!window?.performance?.getEntries) return false;
      var resources = window.performance.getEntriesByType('resource');
      if (!resources || !resources?.length) return [];
      var _this$params$opts = this.params.opts,
          isAjax = _this$params$opts.isAjax,
          isResource = _this$params$opts.isResource;
      this.initConf = _objectSpread({}, this.initConf, {
        resourceList: resources.map(function (item) {
          if (!isAjax && NOT_AJAX_ARR.includes(item.initiatorType)) return {};
          if (!isResource && item.initiatorType != 'xmlhttprequest' && item.initiatorType !== 'fetchrequest') return {};
          var midData = {
            name: item.name,
            type: item.entryType,
            initiatorType: item.initiatorType,
            nextHopPortocol: item.nextHopProtocol,
            duration: item.duration.toFixed(2) || 0,
            decodedBodySize: item.decodedBodySize || 0
          };
          return midData;
        })
      });
    } // 上报

  }, {
    key: "reportData",
    value: function reportData(reportType) {
      var _this2 = this;

      var _this$params$opts2 = this.params.opts,
          isPage = _this$params$opts2.isPage,
          outTime = _this$params$opts2.outTime;
      setTimeout(function () {
        if (isPage) _this2.performancePage();
        console.log(_this2.initConf);
      }, outTime);
    }
  }, {
    key: "params",
    get: function get() {
      return this.getOptions();
    }
  }]);

  return Monitor;
}(PerformanceIext);

exports.default = Monitor;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _index.default({
  domain: 'http://localhost:1234'
}, function () {}).reportData();
},{"../index":"../index.ts"}],"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52872" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/demo.e31bb0bc.js.map