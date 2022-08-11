"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // <define:OS_ENV.ANALYTICS_PAGE_CONFIG>
  var init_define_OS_ENV_ANALYTICS_PAGE_CONFIG = __esm({
    "<define:OS_ENV.ANALYTICS_PAGE_CONFIG>"() {
    }
  });

  // <define:OS_ENV.SEGMENT_SETTINGS>
  var define_OS_ENV_SEGMENT_SETTINGS_default;
  var init_define_OS_ENV_SEGMENT_SETTINGS = __esm({
    "<define:OS_ENV.SEGMENT_SETTINGS>"() {
      define_OS_ENV_SEGMENT_SETTINGS_default = { integrations: { "Segment.io": { apiKey: "gDdVNSnGNypHpimb21HjHr0jQZ9Z0X57", unbundledIntegrations: [], addBundledMetadata: true, maybeBundledConfigIds: {}, versionSettings: { version: "4.4.7", componentTypes: ["browser"] } } }, plan: { track: { __default: { enabled: true, integrations: {} } }, identify: { __default: { enabled: true } }, group: { __default: { enabled: true } } }, edgeFunction: {}, analyticsNextEnabled: true, middlewareSettings: {}, enabledMiddleware: {}, metrics: { sampleRate: 0.1 }, legacyVideoPluginsEnabled: false, remotePlugins: [] };
    }
  });

  // ../../node_modules/.pnpm/tslib@2.4.0/node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "../../node_modules/.pnpm/tslib@2.4.0/node_modules/tslib/tslib.js"(exports, module) {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var __extends2;
      var __assign2;
      var __rest2;
      var __decorate2;
      var __param2;
      var __metadata2;
      var __awaiter2;
      var __generator2;
      var __exportStar2;
      var __values2;
      var __read2;
      var __spread2;
      var __spreadArrays2;
      var __spreadArray2;
      var __await2;
      var __asyncGenerator2;
      var __asyncDelegator2;
      var __asyncValues2;
      var __makeTemplateObject2;
      var __importStar2;
      var __importDefault2;
      var __classPrivateFieldGet2;
      var __classPrivateFieldSet2;
      var __classPrivateFieldIn2;
      var __createBinding2;
      (function(factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v) {
            return exports2[id] = previous ? previous(id, v) : v;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p))
              d[p] = b[p];
        };
        __extends2 = function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        __rest2 = function(s, e) {
          var t = {};
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
            }
          return t;
        };
        __decorate2 = function(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        __param2 = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __metadata2 = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter2 = function(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator2 = function(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __exportStar2 = function(m, o) {
          for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding2(o, m, p);
        };
        __createBinding2 = Object.create ? function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          var desc = Object.getOwnPropertyDescriptor(m, k);
          if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() {
              return m[k];
            } };
          }
          Object.defineProperty(o, k2, desc);
        } : function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          o[k2] = m[k];
        };
        __values2 = function(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
          if (m)
            return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function() {
                if (o && i >= o.length)
                  o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read2 = function(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
            return o;
          var i = m.call(o), r, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error };
          } finally {
            try {
              if (r && !r.done && (m = i["return"]))
                m.call(i);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread2 = function() {
          for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read2(arguments[i]));
          return ar;
        };
        __spreadArrays2 = function() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
          return r;
        };
        __spreadArray2 = function(to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        };
        __await2 = function(v) {
          return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
        };
        __asyncGenerator2 = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i, q = [];
          return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function verb(n) {
            if (g[n])
              i[n] = function(v) {
                return new Promise(function(a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
                });
              };
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v) {
            if (f(v), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator2 = function(o) {
          var i, p;
          return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i[Symbol.iterator] = function() {
            return this;
          }, i;
          function verb(n, f) {
            i[n] = o[n] ? function(v) {
              return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
            } : f;
          }
        };
        __asyncValues2 = function(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i;
          return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i);
          function verb(n) {
            i[n] = o[n] && function(v) {
              return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v2) {
              resolve({ value: v2, done: d });
            }, reject);
          }
        };
        __makeTemplateObject2 = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        var __setModuleDefault = Object.create ? function(o, v) {
          Object.defineProperty(o, "default", { enumerable: true, value: v });
        } : function(o, v) {
          o["default"] = v;
        };
        __importStar2 = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding2(result, mod, k);
          }
          __setModuleDefault(result, mod);
          return result;
        };
        __importDefault2 = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet2 = function(receiver, state, kind, f) {
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
        };
        __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
          if (kind === "m")
            throw new TypeError("Private method is not writable");
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
        };
        __classPrivateFieldIn2 = function(state, receiver) {
          if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
            throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof state === "function" ? receiver === state : state.has(receiver);
        };
        exporter("__extends", __extends2);
        exporter("__assign", __assign2);
        exporter("__rest", __rest2);
        exporter("__decorate", __decorate2);
        exporter("__param", __param2);
        exporter("__metadata", __metadata2);
        exporter("__awaiter", __awaiter2);
        exporter("__generator", __generator2);
        exporter("__exportStar", __exportStar2);
        exporter("__createBinding", __createBinding2);
        exporter("__values", __values2);
        exporter("__read", __read2);
        exporter("__spread", __spread2);
        exporter("__spreadArrays", __spreadArrays2);
        exporter("__spreadArray", __spreadArray2);
        exporter("__await", __await2);
        exporter("__asyncGenerator", __asyncGenerator2);
        exporter("__asyncDelegator", __asyncDelegator2);
        exporter("__asyncValues", __asyncValues2);
        exporter("__makeTemplateObject", __makeTemplateObject2);
        exporter("__importStar", __importStar2);
        exporter("__importDefault", __importDefault2);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
        exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
      });
    }
  });

  // ../../node_modules/.pnpm/tslib@2.4.0/node_modules/tslib/modules/index.js
  var import_tslib, __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __createBinding, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn;
  var init_modules = __esm({
    "../../node_modules/.pnpm/tslib@2.4.0/node_modules/tslib/modules/index.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      import_tslib = __toESM(require_tslib(), 1);
      ({
        __extends,
        __assign,
        __rest,
        __decorate,
        __param,
        __metadata,
        __awaiter,
        __generator,
        __exportStar,
        __createBinding,
        __values,
        __read,
        __spread,
        __spreadArrays,
        __spreadArray,
        __await,
        __asyncGenerator,
        __asyncDelegator,
        __asyncValues,
        __makeTemplateObject,
        __importStar,
        __importDefault,
        __classPrivateFieldGet,
        __classPrivateFieldSet,
        __classPrivateFieldIn
      } = import_tslib.default);
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/as-promise.js
  function asPromise(value) {
    return Promise.resolve(value);
  }
  var init_as_promise = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/as-promise.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/callback/index.js
  function pTimeout(cb, timeout) {
    return new Promise(function(resolve, reject) {
      var timeoutId = setTimeout(function() {
        reject(Error("Promise timed out"));
      }, timeout);
      cb.then(function(val) {
        clearTimeout(timeoutId);
        return resolve(val);
      }).catch(reject);
    });
  }
  function sleep(timeoutInMs) {
    return new Promise(function(resolve) {
      return setTimeout(resolve, timeoutInMs);
    });
  }
  function invokeCallback(ctx, callback, delayTimeout, timeout) {
    var cb = function() {
      try {
        return asPromise(callback(ctx));
      } catch (err) {
        return Promise.reject(err);
      }
    };
    return sleep(delayTimeout).then(function() {
      return pTimeout(cb(), timeout !== null && timeout !== void 0 ? timeout : 1e3);
    }).catch(function(err) {
      ctx === null || ctx === void 0 ? void 0 : ctx.log("warn", "Callback Error", { error: err });
      ctx === null || ctx === void 0 ? void 0 : ctx.stats.increment("callback_error");
    }).then(function() {
      return ctx;
    });
  }
  var init_callback = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/callback/index.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_as_promise();
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/environment/index.js
  function isBrowser() {
    return typeof window !== "undefined";
  }
  function isServer() {
    return !isBrowser();
  }
  var init_environment = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/environment/index.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/connection/index.js
  function isOnline() {
    if (isBrowser()) {
      return window.navigator.onLine;
    }
    return true;
  }
  function isOffline() {
    return !isOnline();
  }
  var init_connection = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/connection/index.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_environment();
    }
  });

  // ../../node_modules/.pnpm/@lukeed+uuid@2.0.0/node_modules/@lukeed/uuid/dist/index.mjs
  function v4() {
    var i = 0, num, out = "";
    if (!BUFFER || IDX + 16 > 256) {
      BUFFER = Array(i = 256);
      while (i--)
        BUFFER[i] = 256 * Math.random() | 0;
      i = IDX = 0;
    }
    for (; i < 16; i++) {
      num = BUFFER[IDX + i];
      if (i == 6)
        out += HEX[num & 15 | 64];
      else if (i == 8)
        out += HEX[num & 63 | 128];
      else
        out += HEX[num];
      if (i & 1 && i > 1 && i < 11)
        out += "-";
    }
    IDX++;
    return out;
  }
  var IDX, HEX, BUFFER;
  var init_dist = __esm({
    "../../node_modules/.pnpm/@lukeed+uuid@2.0.0/node_modules/@lukeed/uuid/dist/index.mjs"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      IDX = 256;
      HEX = [];
      while (IDX--)
        HEX[IDX] = (IDX + 256).toString(16).substring(1);
    }
  });

  // ../../node_modules/.pnpm/dset@3.1.2/node_modules/dset/dist/index.mjs
  function dset(obj, keys, val) {
    keys.split && (keys = keys.split("."));
    var i = 0, l = keys.length, t = obj, x, k;
    while (i < l) {
      k = keys[i++];
      if (k === "__proto__" || k === "constructor" || k === "prototype")
        break;
      t = t[k] = i === l ? val : typeof (x = t[k]) === typeof keys ? x : keys[i] * 0 !== 0 || !!~("" + keys[i]).indexOf(".") ? {} : [];
    }
  }
  var init_dist2 = __esm({
    "../../node_modules/.pnpm/dset@3.1.2/node_modules/dset/dist/index.mjs"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/logger/index.js
  var Logger, logger_default;
  var init_logger = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/logger/index.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_modules();
      Logger = function() {
        function Logger2() {
          var _this = this;
          this._logs = [];
          this.log = function(level, message, extras) {
            var time = new Date();
            _this._logs.push({
              level,
              message,
              time,
              extras
            });
          };
        }
        Object.defineProperty(Logger2.prototype, "logs", {
          get: function() {
            return this._logs;
          },
          enumerable: false,
          configurable: true
        });
        Logger2.prototype.flush = function() {
          if (this.logs.length > 1) {
            var formatted = this._logs.reduce(function(logs, log) {
              var _a;
              var _b, _c;
              var line = __assign(__assign({}, log), { json: JSON.stringify(log.extras, null, " "), extras: log.extras });
              delete line["time"];
              var key = (_c = (_b = log.time) === null || _b === void 0 ? void 0 : _b.toISOString()) !== null && _c !== void 0 ? _c : "";
              if (logs[key]) {
                key = "".concat(key, "-").concat(Math.random());
              }
              return __assign(__assign({}, logs), (_a = {}, _a[key] = line, _a));
            }, {});
            if (console.table) {
              console.table(formatted);
            } else {
              console.log(formatted);
            }
          } else {
            this.logs.forEach(function(logEntry) {
              var level = logEntry.level, message = logEntry.message, extras = logEntry.extras;
              if (level === "info" || level === "debug") {
                console.log(message, extras !== null && extras !== void 0 ? extras : "");
              } else {
                console[level](message, extras !== null && extras !== void 0 ? extras : "");
              }
            });
          }
          this._logs = [];
        };
        return Logger2;
      }();
      logger_default = Logger;
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/stats/index.js
  var compactMetricType, Stats, stats_default;
  var init_stats = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/stats/index.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_modules();
      compactMetricType = function(type) {
        var enums = {
          gauge: "g",
          counter: "c"
        };
        return enums[type];
      };
      Stats = function() {
        function Stats2(remoteMetrics2) {
          this.metrics = [];
          this.remoteMetrics = remoteMetrics2;
        }
        Stats2.prototype.increment = function(metric, by, tags) {
          var _a;
          if (by === void 0) {
            by = 1;
          }
          this.metrics.push({
            metric,
            value: by,
            tags: tags !== null && tags !== void 0 ? tags : [],
            type: "counter",
            timestamp: Date.now()
          });
          (_a = this.remoteMetrics) === null || _a === void 0 ? void 0 : _a.increment(metric, tags !== null && tags !== void 0 ? tags : []);
        };
        Stats2.prototype.gauge = function(metric, value, tags) {
          this.metrics.push({
            metric,
            value,
            tags: tags !== null && tags !== void 0 ? tags : [],
            type: "gauge",
            timestamp: Date.now()
          });
        };
        Stats2.prototype.flush = function() {
          var formatted = this.metrics.map(function(m) {
            return __assign(__assign({}, m), { tags: m.tags.join(",") });
          });
          if (console.table) {
            console.table(formatted);
          } else {
            console.log(formatted);
          }
          this.metrics = [];
        };
        Stats2.prototype.serialize = function() {
          return this.metrics.map(function(m) {
            return {
              m: m.metric,
              v: m.value,
              t: m.tags,
              k: compactMetricType(m.type),
              e: m.timestamp
            };
          });
        };
        return Stats2;
      }();
      stats_default = Stats;
    }
  });

  // ../../node_modules/.pnpm/unfetch@4.2.0/node_modules/unfetch/dist/unfetch.module.js
  function unfetch_module_default(e, n) {
    return n = n || {}, new Promise(function(t, r) {
      var s = new XMLHttpRequest(), o = [], u = [], i = {}, a = function() {
        return { ok: 2 == (s.status / 100 | 0), statusText: s.statusText, status: s.status, url: s.responseURL, text: function() {
          return Promise.resolve(s.responseText);
        }, json: function() {
          return Promise.resolve(s.responseText).then(JSON.parse);
        }, blob: function() {
          return Promise.resolve(new Blob([s.response]));
        }, clone: a, headers: { keys: function() {
          return o;
        }, entries: function() {
          return u;
        }, get: function(e2) {
          return i[e2.toLowerCase()];
        }, has: function(e2) {
          return e2.toLowerCase() in i;
        } } };
      };
      for (var l in s.open(n.method || "get", e, true), s.onload = function() {
        s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e2, n2, t2) {
          o.push(n2 = n2.toLowerCase()), u.push([n2, t2]), i[n2] = i[n2] ? i[n2] + "," + t2 : t2;
        }), t(a());
      }, s.onerror = r, s.withCredentials = "include" == n.credentials, n.headers)
        s.setRequestHeader(l, n.headers[l]);
      s.send(n.body || null);
    });
  }
  var init_unfetch_module = __esm({
    "../../node_modules/.pnpm/unfetch@4.2.0/node_modules/unfetch/dist/unfetch.module.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/generated/version.js
  var version;
  var init_version = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/generated/version.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      version = "1.40.0";
    }
  });

  // ../../node_modules/.pnpm/js-cookie@3.0.1/node_modules/js-cookie/dist/js.cookie.mjs
  function assign(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        target[key] = source[key];
      }
    }
    return target;
  }
  function init(converter, defaultAttributes) {
    function set(key, value, attributes) {
      if (typeof document === "undefined") {
        return;
      }
      attributes = assign({}, defaultAttributes, attributes);
      if (typeof attributes.expires === "number") {
        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
      }
      if (attributes.expires) {
        attributes.expires = attributes.expires.toUTCString();
      }
      key = encodeURIComponent(key).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var stringifiedAttributes = "";
      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue;
        }
        stringifiedAttributes += "; " + attributeName;
        if (attributes[attributeName] === true) {
          continue;
        }
        stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
      }
      return document.cookie = key + "=" + converter.write(value, key) + stringifiedAttributes;
    }
    function get(key) {
      if (typeof document === "undefined" || arguments.length && !key) {
        return;
      }
      var cookies = document.cookie ? document.cookie.split("; ") : [];
      var jar = {};
      for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split("=");
        var value = parts.slice(1).join("=");
        try {
          var foundKey = decodeURIComponent(parts[0]);
          jar[foundKey] = converter.read(value, foundKey);
          if (key === foundKey) {
            break;
          }
        } catch (e) {
        }
      }
      return key ? jar[key] : jar;
    }
    return Object.create({
      set,
      get,
      remove: function(key, attributes) {
        set(key, "", assign({}, attributes, {
          expires: -1
        }));
      },
      withAttributes: function(attributes) {
        return init(this.converter, assign({}, this.attributes, attributes));
      },
      withConverter: function(converter2) {
        return init(assign({}, this.converter, converter2), this.attributes);
      }
    }, {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    });
  }
  var defaultConverter, api, js_cookie_default;
  var init_js_cookie = __esm({
    "../../node_modules/.pnpm/js-cookie@3.0.1/node_modules/js-cookie/dist/js.cookie.mjs"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      defaultConverter = {
        read: function(value) {
          if (value[0] === '"') {
            value = value.slice(1, -1);
          }
          return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
        },
        write: function(value) {
          return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
        }
      };
      api = init(defaultConverter, { path: "/" });
      js_cookie_default = api;
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/query-string/gracefulDecodeURIComponent.js
  function gracefulDecodeURIComponent(encodedURIComponent) {
    try {
      return decodeURIComponent(encodedURIComponent.replace(/\+/g, " "));
    } catch (_a) {
      return encodedURIComponent;
    }
  }
  var init_gracefulDecodeURIComponent = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/query-string/gracefulDecodeURIComponent.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/user/tld.js
  function levels(url) {
    var host = url.hostname;
    var parts = host.split(".");
    var last = parts[parts.length - 1];
    var levels2 = [];
    if (parts.length === 4 && parseInt(last, 10) > 0) {
      return levels2;
    }
    if (parts.length <= 1) {
      return levels2;
    }
    for (var i = parts.length - 2; i >= 0; --i) {
      levels2.push(parts.slice(i).join("."));
    }
    return levels2;
  }
  function parseUrl(url) {
    try {
      return new URL(url);
    } catch (_a) {
      return;
    }
  }
  function tld(url) {
    var parsedUrl = parseUrl(url);
    if (!parsedUrl)
      return;
    var lvls = levels(parsedUrl);
    for (var i = 0; i < lvls.length; ++i) {
      var cname = "__tld__";
      var domain = lvls[i];
      var opts = { domain: "." + domain };
      try {
        js_cookie_default.set(cname, "1", opts);
        if (js_cookie_default.get(cname)) {
          js_cookie_default.remove(cname, opts);
          return domain;
        }
      } catch (_) {
        return;
      }
    }
  }
  var init_tld = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/user/tld.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_js_cookie();
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/segmentio/normalize.js
  function getCookieOptions() {
    if (cookieOptions) {
      return cookieOptions;
    }
    var domain = tld(window.location.href);
    cookieOptions = {
      expires: 31536e6,
      secure: false,
      path: "/"
    };
    if (domain) {
      cookieOptions.domain = domain;
    }
    return cookieOptions;
  }
  function getVersionType() {
    return _version;
  }
  function ampId() {
    var ampId2 = js_cookie_default.get("_ga");
    if (ampId2 && ampId2.startsWith("amp")) {
      return ampId2;
    }
  }
  function utm(query) {
    if (query.startsWith("?")) {
      query = query.substring(1);
    }
    query = query.replace(/\?/g, "&");
    return query.split("&").reduce(function(acc, str) {
      var _a = str.split("="), k = _a[0], _b = _a[1], v = _b === void 0 ? "" : _b;
      if (k.includes("utm_") && k.length > 4) {
        var utmParam = k.substr(4);
        if (utmParam === "campaign") {
          utmParam = "name";
        }
        acc[utmParam] = gracefulDecodeURIComponent(v);
      }
      return acc;
    }, {});
  }
  function ads(query) {
    var queryIds = {
      btid: "dataxu",
      urid: "millennial-media"
    };
    if (query.startsWith("?")) {
      query = query.substring(1);
    }
    query = query.replace(/\?/g, "&");
    var parts = query.split("&");
    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
      var part = parts_1[_i];
      var _a = part.split("="), k = _a[0], v = _a[1];
      if (queryIds[k]) {
        return {
          id: v,
          type: queryIds[k]
        };
      }
    }
  }
  function referrerId(query, ctx, disablePersistance) {
    var stored = js_cookie_default.get("s:context.referrer");
    var ad = ads(query);
    stored = stored ? JSON.parse(stored) : void 0;
    ad = ad !== null && ad !== void 0 ? ad : stored;
    if (!ad) {
      return;
    }
    if (ctx) {
      ctx.referrer = __assign(__assign({}, ctx.referrer), ad);
    }
    if (!disablePersistance) {
      js_cookie_default.set("s:context.referrer", JSON.stringify(ad), getCookieOptions());
    }
  }
  function normalize(analytics, json, settings, integrations) {
    var _a, _b, _c, _d;
    var user = analytics.user();
    var query = window.location.search;
    json.context = (_b = (_a = json.context) !== null && _a !== void 0 ? _a : json.options) !== null && _b !== void 0 ? _b : {};
    var ctx = json.context;
    var anonId = json.anonymousId;
    delete json.options;
    json.writeKey = settings === null || settings === void 0 ? void 0 : settings.apiKey;
    ctx.userAgent = window.navigator.userAgent;
    var locale = navigator.userLanguage || navigator.language;
    if (typeof ctx.locale === "undefined" && typeof locale !== "undefined") {
      ctx.locale = locale;
    }
    if (!ctx.library) {
      var type = getVersionType();
      if (type === "web") {
        ctx.library = {
          name: "analytics.js",
          version: "next-".concat(version)
        };
      } else {
        ctx.library = {
          name: "analytics.js",
          version: "npm:next-".concat(version)
        };
      }
    }
    if (query && !ctx.campaign) {
      ctx.campaign = utm(query);
    }
    referrerId(query, ctx, (_c = analytics.options.disableClientPersistence) !== null && _c !== void 0 ? _c : false);
    json.userId = json.userId || user.id();
    json.anonymousId = user.anonymousId(anonId);
    json.sentAt = new Date();
    var failed = analytics.queue.failedInitializations || [];
    if (failed.length > 0) {
      json._metadata = { failedInitializations: failed };
    }
    var bundled = [];
    var unbundled = [];
    for (var key in integrations) {
      var integration = integrations[key];
      if (key === "Segment.io") {
        bundled.push(key);
      }
      if (integration.bundlingStatus === "bundled") {
        bundled.push(key);
      }
      if (integration.bundlingStatus === "unbundled") {
        unbundled.push(key);
      }
    }
    for (var _i = 0, _e = (settings === null || settings === void 0 ? void 0 : settings.unbundledIntegrations) || []; _i < _e.length; _i++) {
      var settingsUnbundled = _e[_i];
      if (!unbundled.includes(settingsUnbundled)) {
        unbundled.push(settingsUnbundled);
      }
    }
    var configIds = (_d = settings === null || settings === void 0 ? void 0 : settings.maybeBundledConfigIds) !== null && _d !== void 0 ? _d : {};
    var bundledConfigIds = [];
    bundled.sort().forEach(function(name) {
      var _a2;
      ;
      ((_a2 = configIds[name]) !== null && _a2 !== void 0 ? _a2 : []).forEach(function(id) {
        bundledConfigIds.push(id);
      });
    });
    if ((settings === null || settings === void 0 ? void 0 : settings.addBundledMetadata) !== false) {
      json._metadata = __assign(__assign({}, json._metadata), { bundled: bundled.sort(), unbundled: unbundled.sort(), bundledIds: bundledConfigIds });
    }
    var amp = ampId();
    if (amp) {
      ctx.amp = { id: amp };
    }
    return json;
  }
  var cookieOptions, _version;
  var init_normalize = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/segmentio/normalize.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_modules();
      init_js_cookie();
      init_gracefulDecodeURIComponent();
      init_tld();
      init_version();
      _version = "npm";
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/stats/remote-metrics.js
  var RemoteMetrics;
  var init_remote_metrics = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/stats/remote-metrics.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_modules();
      init_unfetch_module();
      init_version();
      init_normalize();
      RemoteMetrics = function() {
        function RemoteMetrics2(options) {
          var _this = this;
          var _a, _b, _c, _d;
          this.host = (_a = options === null || options === void 0 ? void 0 : options.host) !== null && _a !== void 0 ? _a : "api.segment.io/v1";
          this.sampleRate = (_b = options === null || options === void 0 ? void 0 : options.sampleRate) !== null && _b !== void 0 ? _b : 1;
          this.flushTimer = (_c = options === null || options === void 0 ? void 0 : options.flushTimer) !== null && _c !== void 0 ? _c : 30 * 1e3;
          this.maxQueueSize = (_d = options === null || options === void 0 ? void 0 : options.maxQueueSize) !== null && _d !== void 0 ? _d : 20;
          this.queue = [];
          if (this.sampleRate > 0) {
            var flushing_1 = false;
            var run_1 = function() {
              if (flushing_1) {
                return;
              }
              flushing_1 = true;
              _this.flush().catch(function(err) {
                console.error(err);
              });
              flushing_1 = false;
              setTimeout(run_1, _this.flushTimer);
            };
            run_1();
          }
        }
        RemoteMetrics2.prototype.increment = function(metric, tags) {
          if (!metric.includes("analytics_js.")) {
            return;
          }
          if (tags.length === 0) {
            return;
          }
          if (Math.random() > this.sampleRate) {
            return;
          }
          if (this.queue.length >= this.maxQueueSize) {
            return;
          }
          var formatted = tags.reduce(function(acc, t) {
            var _a = t.split(":"), k = _a[0], v = _a[1];
            acc[k] = v;
            return acc;
          }, {});
          formatted["library"] = "analytics.js";
          var type = getVersionType();
          if (type === "web") {
            formatted["library_version"] = "next-".concat(version);
          } else {
            formatted["library_version"] = "npm:next-".concat(version);
          }
          this.queue.push({
            type: "Counter",
            metric,
            value: 1,
            tags: formatted
          });
          if (metric.includes("error")) {
            this.flush().catch(function(err) {
              return console.error(err);
            });
          }
        };
        RemoteMetrics2.prototype.flush = function() {
          return __awaiter(this, void 0, void 0, function() {
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (this.queue.length <= 0) {
                    return [2];
                  }
                  return [4, this.send().catch(function(error) {
                    console.error(error);
                    _this.sampleRate = 0;
                  })];
                case 1:
                  _a.sent();
                  return [2];
              }
            });
          });
        };
        RemoteMetrics2.prototype.send = function() {
          return __awaiter(this, void 0, void 0, function() {
            var payload, headers, url;
            return __generator(this, function(_a) {
              payload = { series: this.queue };
              this.queue = [];
              headers = { "Content-Type": "text/plain" };
              url = "https://".concat(this.host, "/m");
              return [2, unfetch_module_default(url, {
                headers,
                body: JSON.stringify(payload),
                method: "POST"
              })];
            });
          });
        };
        return RemoteMetrics2;
      }();
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/context/index.js
  var ContextCancelation, remoteMetrics, Context;
  var init_context = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/context/index.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_dist();
      init_dist2();
      init_logger();
      init_stats();
      init_remote_metrics();
      ContextCancelation = function() {
        function ContextCancelation2(options) {
          var _a, _b, _c;
          this.retry = (_a = options.retry) !== null && _a !== void 0 ? _a : true;
          this.type = (_b = options.type) !== null && _b !== void 0 ? _b : "plugin Error";
          this.reason = (_c = options.reason) !== null && _c !== void 0 ? _c : "";
        }
        return ContextCancelation2;
      }();
      Context = function() {
        function Context2(event, id) {
          this.logger = new logger_default();
          this.cancel = function(error) {
            if (error) {
              throw error;
            }
            throw new ContextCancelation({ reason: "Context Cancel" });
          };
          this._attempts = 0;
          this._event = event;
          this._id = id !== null && id !== void 0 ? id : v4();
          this.stats = new stats_default(remoteMetrics);
        }
        Context2.initMetrics = function(options) {
          remoteMetrics = new RemoteMetrics(options);
        };
        Context2.system = function() {
          return new Context2({ type: "track", event: "system" });
        };
        Context2.prototype.isSame = function(other) {
          return other._id === this._id;
        };
        Context2.prototype.log = function(level, message, extras) {
          this.logger.log(level, message, extras);
        };
        Object.defineProperty(Context2.prototype, "id", {
          get: function() {
            return this._id;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Context2.prototype, "event", {
          get: function() {
            return this._event;
          },
          set: function(evt) {
            this._event = evt;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Context2.prototype, "attempts", {
          get: function() {
            return this._attempts;
          },
          set: function(attempts) {
            this._attempts = attempts;
          },
          enumerable: false,
          configurable: true
        });
        Context2.prototype.updateEvent = function(path, val) {
          var _a;
          if (path.split(".")[0] === "integrations") {
            var integrationName = path.split(".")[1];
            if (((_a = this._event.integrations) === null || _a === void 0 ? void 0 : _a[integrationName]) === false) {
              return this._event;
            }
          }
          dset(this._event, path, val);
          return this._event;
        };
        Context2.prototype.failedDelivery = function() {
          return this._failedDelivery;
        };
        Context2.prototype.setFailedDelivery = function(options) {
          this._failedDelivery = options;
        };
        Context2.prototype.logs = function() {
          return this.logger.logs;
        };
        Context2.prototype.flush = function() {
          this.logger.flush();
          this.stats.flush();
        };
        Context2.prototype.toJSON = function() {
          return {
            id: this._id,
            event: this._event,
            logs: this.logger.logs,
            metrics: this.stats.metrics
          };
        };
        return Context2;
      }();
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/emitter/index.js
  var Emitter;
  var init_emitter = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/emitter/index.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_modules();
      Emitter = function() {
        function Emitter2() {
          this.callbacks = {};
        }
        Emitter2.prototype.on = function(event, callback) {
          var _a;
          this.callbacks[event] = __spreadArray(__spreadArray([], (_a = this.callbacks[event]) !== null && _a !== void 0 ? _a : [], true), [callback], false);
          return this;
        };
        Emitter2.prototype.once = function(event, fn) {
          var _this = this;
          var on = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            _this.off(event, on);
            fn.apply(_this, args);
          };
          this.on(event, on);
          return this;
        };
        Emitter2.prototype.off = function(event, callback) {
          var _a;
          var fns = (_a = this.callbacks[event]) !== null && _a !== void 0 ? _a : [];
          var without = fns.filter(function(fn) {
            return fn !== callback;
          });
          this.callbacks[event] = without;
          return this;
        };
        Emitter2.prototype.emit = function(event) {
          var _this = this;
          var _a;
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
          }
          var callbacks = (_a = this.callbacks[event]) !== null && _a !== void 0 ? _a : [];
          callbacks.forEach(function(callback) {
            callback.apply(_this, args);
          });
          return this;
        };
        return Emitter2;
      }();
    }
  });

  // ../../node_modules/.pnpm/spark-md5@3.0.2/node_modules/spark-md5/spark-md5.js
  var require_spark_md5 = __commonJS({
    "../../node_modules/.pnpm/spark-md5@3.0.2/node_modules/spark-md5/spark-md5.js"(exports, module) {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      (function(factory) {
        if (typeof exports === "object") {
          module.exports = factory();
        } else if (typeof define === "function" && define.amd) {
          define(factory);
        } else {
          var glob;
          try {
            glob = window;
          } catch (e) {
            glob = self;
          }
          glob.SparkMD5 = factory();
        }
      })(function(undefined2) {
        "use strict";
        var add32 = function(a, b) {
          return a + b & 4294967295;
        }, hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        function cmn(q, a, b, x, s, t) {
          a = add32(add32(a, q), add32(x, t));
          return add32(a << s | a >>> 32 - s, b);
        }
        function md5cycle(x, k) {
          var a = x[0], b = x[1], c = x[2], d = x[3];
          a += (b & c | ~b & d) + k[0] - 680876936 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[1] - 389564586 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[2] + 606105819 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[4] - 176418897 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[7] - 45705983 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[10] - 42063 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[13] - 40341101 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & d | c & ~d) + k[1] - 165796510 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[11] + 643717713 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[0] - 373897302 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[5] - 701558691 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[10] + 38016083 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[15] - 660478335 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[4] - 405537848 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[9] + 568446438 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[3] - 187363961 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[2] - 51403784 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b ^ c ^ d) + k[5] - 378558 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[14] - 35309556 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[7] - 155497632 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[13] + 681279174 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[0] - 358537222 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[3] - 722521979 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[6] + 76029189 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[9] - 640364487 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[12] - 421815835 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[15] + 530742520 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[2] - 995338651 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          x[0] = a + x[0] | 0;
          x[1] = b + x[1] | 0;
          x[2] = c + x[2] | 0;
          x[3] = d + x[3] | 0;
        }
        function md5blk(s) {
          var md5blks = [], i;
          for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
          }
          return md5blks;
        }
        function md5blk_array(a) {
          var md5blks = [], i;
          for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
          }
          return md5blks;
        }
        function md51(s) {
          var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
          for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)));
          }
          s = s.substring(i - 64);
          length = s.length;
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
          }
          tail[i >> 2] |= 128 << (i % 4 << 3);
          if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
              tail[i] = 0;
            }
          }
          tmp = n * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;
          tail[14] = lo;
          tail[15] = hi;
          md5cycle(state, tail);
          return state;
        }
        function md51_array(a) {
          var n = a.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
          for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
          }
          a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
          length = a.length;
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3);
          }
          tail[i >> 2] |= 128 << (i % 4 << 3);
          if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
              tail[i] = 0;
            }
          }
          tmp = n * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;
          tail[14] = lo;
          tail[15] = hi;
          md5cycle(state, tail);
          return state;
        }
        function rhex(n) {
          var s = "", j;
          for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
          }
          return s;
        }
        function hex(x) {
          var i;
          for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i]);
          }
          return x.join("");
        }
        if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
          add32 = function(x, y) {
            var lsw = (x & 65535) + (y & 65535), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535;
          };
        }
        if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
          (function() {
            function clamp(val, length) {
              val = val | 0 || 0;
              if (val < 0) {
                return Math.max(val + length, 0);
              }
              return Math.min(val, length);
            }
            ArrayBuffer.prototype.slice = function(from, to) {
              var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
              if (to !== undefined2) {
                end = clamp(to, length);
              }
              if (begin > end) {
                return new ArrayBuffer(0);
              }
              num = end - begin;
              target = new ArrayBuffer(num);
              targetArray = new Uint8Array(target);
              sourceArray = new Uint8Array(this, begin, num);
              targetArray.set(sourceArray);
              return target;
            };
          })();
        }
        function toUtf8(str) {
          if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str));
          }
          return str;
        }
        function utf8Str2ArrayBuffer(str, returnUInt8Array) {
          var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
          for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i);
          }
          return returnUInt8Array ? arr : buff;
        }
        function arrayBuffer2Utf8Str(buff) {
          return String.fromCharCode.apply(null, new Uint8Array(buff));
        }
        function concatenateArrayBuffers(first, second, returnUInt8Array) {
          var result = new Uint8Array(first.byteLength + second.byteLength);
          result.set(new Uint8Array(first));
          result.set(new Uint8Array(second), first.byteLength);
          return returnUInt8Array ? result : result.buffer;
        }
        function hexToBinaryString(hex2) {
          var bytes = [], length = hex2.length, x;
          for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex2.substr(x, 2), 16));
          }
          return String.fromCharCode.apply(String, bytes);
        }
        function SparkMD5() {
          this.reset();
        }
        SparkMD5.prototype.append = function(str) {
          this.appendBinary(toUtf8(str));
          return this;
        };
        SparkMD5.prototype.appendBinary = function(contents) {
          this._buff += contents;
          this._length += contents.length;
          var length = this._buff.length, i;
          for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
          }
          this._buff = this._buff.substring(i - 64);
          return this;
        };
        SparkMD5.prototype.end = function(raw) {
          var buff = this._buff, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
          for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
          }
          this._finish(tail, length);
          ret = hex(this._hash);
          if (raw) {
            ret = hexToBinaryString(ret);
          }
          this.reset();
          return ret;
        };
        SparkMD5.prototype.reset = function() {
          this._buff = "";
          this._length = 0;
          this._hash = [1732584193, -271733879, -1732584194, 271733878];
          return this;
        };
        SparkMD5.prototype.getState = function() {
          return {
            buff: this._buff,
            length: this._length,
            hash: this._hash.slice()
          };
        };
        SparkMD5.prototype.setState = function(state) {
          this._buff = state.buff;
          this._length = state.length;
          this._hash = state.hash;
          return this;
        };
        SparkMD5.prototype.destroy = function() {
          delete this._hash;
          delete this._buff;
          delete this._length;
        };
        SparkMD5.prototype._finish = function(tail, length) {
          var i = length, tmp, lo, hi;
          tail[i >> 2] |= 128 << (i % 4 << 3);
          if (i > 55) {
            md5cycle(this._hash, tail);
            for (i = 0; i < 16; i += 1) {
              tail[i] = 0;
            }
          }
          tmp = this._length * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;
          tail[14] = lo;
          tail[15] = hi;
          md5cycle(this._hash, tail);
        };
        SparkMD5.hash = function(str, raw) {
          return SparkMD5.hashBinary(toUtf8(str), raw);
        };
        SparkMD5.hashBinary = function(content, raw) {
          var hash = md51(content), ret = hex(hash);
          return raw ? hexToBinaryString(ret) : ret;
        };
        SparkMD5.ArrayBuffer = function() {
          this.reset();
        };
        SparkMD5.ArrayBuffer.prototype.append = function(arr) {
          var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i;
          this._length += arr.byteLength;
          for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
          }
          this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
          return this;
        };
        SparkMD5.ArrayBuffer.prototype.end = function(raw) {
          var buff = this._buff, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;
          for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3);
          }
          this._finish(tail, length);
          ret = hex(this._hash);
          if (raw) {
            ret = hexToBinaryString(ret);
          }
          this.reset();
          return ret;
        };
        SparkMD5.ArrayBuffer.prototype.reset = function() {
          this._buff = new Uint8Array(0);
          this._length = 0;
          this._hash = [1732584193, -271733879, -1732584194, 271733878];
          return this;
        };
        SparkMD5.ArrayBuffer.prototype.getState = function() {
          var state = SparkMD5.prototype.getState.call(this);
          state.buff = arrayBuffer2Utf8Str(state.buff);
          return state;
        };
        SparkMD5.ArrayBuffer.prototype.setState = function(state) {
          state.buff = utf8Str2ArrayBuffer(state.buff, true);
          return SparkMD5.prototype.setState.call(this, state);
        };
        SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
        SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
        SparkMD5.ArrayBuffer.hash = function(arr, raw) {
          var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
          return raw ? hexToBinaryString(ret) : ret;
        };
        return SparkMD5;
      });
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/priority-queue/backoff.js
  function backoff(params) {
    var random = Math.random() + 1;
    var _a = params.minTimeout, minTimeout = _a === void 0 ? 500 : _a, _b = params.factor, factor = _b === void 0 ? 2 : _b, attempt2 = params.attempt, _c = params.maxTimeout, maxTimeout = _c === void 0 ? Infinity : _c;
    return Math.min(random * minTimeout * Math.pow(factor, attempt2), maxTimeout);
  }
  var init_backoff = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/priority-queue/backoff.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/priority-queue/index.js
  var ON_REMOVE_FROM_FUTURE, PriorityQueue;
  var init_priority_queue = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/priority-queue/index.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_modules();
      init_emitter();
      init_backoff();
      ON_REMOVE_FROM_FUTURE = "onRemoveFromFuture";
      PriorityQueue = function(_super) {
        __extends(PriorityQueue2, _super);
        function PriorityQueue2(maxAttempts, queue, seen2) {
          var _this = _super.call(this) || this;
          _this.future = [];
          _this.maxAttempts = maxAttempts;
          _this.queue = queue;
          _this.seen = seen2 !== null && seen2 !== void 0 ? seen2 : {};
          return _this;
        }
        PriorityQueue2.prototype.push = function() {
          var _this = this;
          var operations = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
          }
          var accepted = operations.map(function(operation) {
            var attempts = _this.updateAttempts(operation);
            if (attempts > _this.maxAttempts || _this.includes(operation)) {
              return false;
            }
            _this.queue.push(operation);
            return true;
          });
          this.queue = this.queue.sort(function(a, b) {
            return _this.getAttempts(a) - _this.getAttempts(b);
          });
          return accepted;
        };
        PriorityQueue2.prototype.pushWithBackoff = function(operation) {
          var _this = this;
          if (this.getAttempts(operation) === 0) {
            return this.push(operation)[0];
          }
          var attempt2 = this.updateAttempts(operation);
          if (attempt2 > this.maxAttempts || this.includes(operation)) {
            return false;
          }
          var timeout = backoff({ attempt: attempt2 - 1 });
          setTimeout(function() {
            _this.queue.push(operation);
            _this.future = _this.future.filter(function(f) {
              return f.id !== operation.id;
            });
            _this.emit(ON_REMOVE_FROM_FUTURE);
          }, timeout);
          this.future.push(operation);
          return true;
        };
        PriorityQueue2.prototype.getAttempts = function(operation) {
          var _a;
          return (_a = this.seen[operation.id]) !== null && _a !== void 0 ? _a : 0;
        };
        PriorityQueue2.prototype.updateAttempts = function(operation) {
          this.seen[operation.id] = this.getAttempts(operation) + 1;
          return this.getAttempts(operation);
        };
        PriorityQueue2.prototype.includes = function(operation) {
          return this.queue.includes(operation) || this.future.includes(operation) || Boolean(this.queue.find(function(i) {
            return i.id === operation.id;
          })) || Boolean(this.future.find(function(i) {
            return i.id === operation.id;
          }));
        };
        PriorityQueue2.prototype.pop = function() {
          return this.queue.shift();
        };
        Object.defineProperty(PriorityQueue2.prototype, "length", {
          get: function() {
            return this.queue.length;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(PriorityQueue2.prototype, "todo", {
          get: function() {
            return this.queue.length + this.future.length;
          },
          enumerable: false,
          configurable: true
        });
        return PriorityQueue2;
      }(Emitter);
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/priority-queue/persisted.js
  function persisted(key) {
    var items = loc.getItem(key);
    return (items ? JSON.parse(items) : []).map(function(p) {
      return new Context(p.event, p.id);
    });
  }
  function persistItems(key, items) {
    var existing = persisted(key);
    var all = __spreadArray(__spreadArray([], items, true), existing, true);
    var merged = all.reduce(function(acc, item) {
      var _a;
      return __assign(__assign({}, acc), (_a = {}, _a[item.id] = item, _a));
    }, {});
    loc.setItem(key, JSON.stringify(Object.values(merged)));
  }
  function seen(key) {
    var stored = loc.getItem(key);
    return stored ? JSON.parse(stored) : {};
  }
  function persistSeen(key, memory) {
    var stored = seen(key);
    loc.setItem(key, JSON.stringify(__assign(__assign({}, stored), memory)));
  }
  function remove(key) {
    loc.removeItem(key);
  }
  function mutex(key, onUnlock, attempt2) {
    if (attempt2 === void 0) {
      attempt2 = 0;
    }
    var lockTimeout = 50;
    var lockKey = "persisted-queue:v1:".concat(key, ":lock");
    var expired = function(lock2) {
      return new Date().getTime() > lock2;
    };
    var rawLock = loc.getItem(lockKey);
    var lock = rawLock ? JSON.parse(rawLock) : null;
    var allowed = lock === null || expired(lock);
    if (allowed) {
      loc.setItem(lockKey, JSON.stringify(now() + lockTimeout));
      onUnlock();
      loc.removeItem(lockKey);
      return;
    }
    if (!allowed && attempt2 < 3) {
      setTimeout(function() {
        mutex(key, onUnlock, attempt2 + 1);
      }, lockTimeout);
    } else {
      console.error("Unable to retrieve lock");
    }
  }
  var loc, now, PersistedPriorityQueue;
  var init_persisted = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/priority-queue/persisted.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_modules();
      init_priority_queue();
      init_context();
      init_environment();
      loc = {
        getItem: function() {
        },
        setItem: function() {
        },
        removeItem: function() {
        }
      };
      try {
        loc = isBrowser() && window.localStorage ? window.localStorage : loc;
      } catch (err) {
        console.warn("Unable to access localStorage", err);
      }
      now = function() {
        return new Date().getTime();
      };
      PersistedPriorityQueue = function(_super) {
        __extends(PersistedPriorityQueue2, _super);
        function PersistedPriorityQueue2(maxAttempts, key) {
          var _this = _super.call(this, maxAttempts, []) || this;
          var itemsKey = "persisted-queue:v1:".concat(key, ":items");
          var seenKey = "persisted-queue:v1:".concat(key, ":seen");
          var saved = [];
          var lastSeen = {};
          mutex(key, function() {
            try {
              saved = persisted(itemsKey);
              lastSeen = seen(seenKey);
              remove(itemsKey);
              remove(seenKey);
              _this.queue = __spreadArray(__spreadArray([], saved, true), _this.queue, true);
              _this.seen = __assign(__assign({}, lastSeen), _this.seen);
            } catch (err) {
              console.error(err);
            }
          });
          window.addEventListener("beforeunload", function() {
            if (_this.todo > 0) {
              var items_1 = __spreadArray(__spreadArray([], _this.queue, true), _this.future, true);
              try {
                mutex(key, function() {
                  persistItems(itemsKey, items_1);
                  persistSeen(seenKey, _this.seen);
                });
              } catch (err) {
                console.error(err);
              }
            }
          });
          return _this;
        }
        return PersistedPriorityQueue2;
      }(PriorityQueue);
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/queue/delivery.js
  function tryOperation(op) {
    return __awaiter(this, void 0, void 0, function() {
      var err_1;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4, op()];
          case 1:
            return [2, _a.sent()];
          case 2:
            err_1 = _a.sent();
            return [2, Promise.reject(err_1)];
          case 3:
            return [2];
        }
      });
    });
  }
  function attempt(ctx, plugin) {
    ctx.log("debug", "plugin", { plugin: plugin.name });
    var start = new Date().getTime();
    var hook = plugin[ctx.event.type];
    if (hook === void 0) {
      return Promise.resolve(ctx);
    }
    var newCtx = tryOperation(function() {
      return hook.apply(plugin, [ctx]);
    }).then(function(ctx2) {
      var done = new Date().getTime() - start;
      ctx2.stats.gauge("plugin_time", done, ["plugin:".concat(plugin.name)]);
      return ctx2;
    }).catch(function(err) {
      if (err instanceof ContextCancelation && err.type === "middleware_cancellation") {
        throw err;
      }
      if (err instanceof ContextCancelation) {
        ctx.log("warn", err.type, {
          plugin: plugin.name,
          error: err
        });
        return err;
      }
      ctx.log("error", "plugin Error", {
        plugin: plugin.name,
        error: err
      });
      ctx.stats.increment("plugin_error", 1, ["plugin:".concat(plugin.name)]);
      return err;
    });
    return newCtx;
  }
  function ensure(ctx, plugin) {
    return attempt(ctx, plugin).then(function(newContext) {
      if (newContext instanceof Context) {
        return newContext;
      }
      ctx.log("debug", "Context canceled");
      ctx.stats.increment("context_canceled");
      ctx.cancel(newContext);
    });
  }
  var init_delivery = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/queue/delivery.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_modules();
      init_context();
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/auto-track.js
  var auto_track_exports = {};
  __export(auto_track_exports, {
    form: () => form,
    link: () => link
  });
  function userNewTab(event) {
    var typedEvent = event;
    if (typedEvent.ctrlKey || typedEvent.shiftKey || typedEvent.metaKey || typedEvent.button && typedEvent.button == 1) {
      return true;
    }
    return false;
  }
  function linkNewTab(element, href) {
    if (element.target === "_blank" && href) {
      return true;
    }
    return false;
  }
  function link(links, event, properties, options) {
    var _this = this;
    var elements = [];
    if (!links) {
      return this;
    }
    if (links instanceof Element) {
      elements = [links];
    } else if ("toArray" in links) {
      elements = links.toArray();
    } else {
      elements = links;
    }
    elements.forEach(function(el) {
      el.addEventListener("click", function(elementEvent) {
        var _a, _b;
        var ev = event instanceof Function ? event(el) : event;
        var props = properties instanceof Function ? properties(el) : properties;
        var href = el.getAttribute("href") || el.getAttributeNS("http://www.w3.org/1999/xlink", "href") || el.getAttribute("xlink:href") || ((_a = el.getElementsByTagName("a")[0]) === null || _a === void 0 ? void 0 : _a.getAttribute("href"));
        var trackEvent = pTimeout(_this.track(ev, props, options !== null && options !== void 0 ? options : {}), (_b = _this.settings.timeout) !== null && _b !== void 0 ? _b : 500);
        if (!linkNewTab(el, href) && !userNewTab(elementEvent)) {
          if (href) {
            elementEvent.preventDefault ? elementEvent.preventDefault() : elementEvent.returnValue = false;
            trackEvent.catch(console.error).then(function() {
              window.location.href = href;
            }).catch(console.error);
          }
        }
      }, false);
    });
    return this;
  }
  function form(forms, event, properties, options) {
    var _this = this;
    if (!forms)
      return this;
    if (forms instanceof HTMLFormElement)
      forms = [forms];
    var elements = forms;
    elements.forEach(function(el) {
      if (!(el instanceof Element))
        throw new TypeError("Must pass HTMLElement to trackForm/trackSubmit.");
      var handler = function(elementEvent) {
        var _a;
        elementEvent.preventDefault ? elementEvent.preventDefault() : elementEvent.returnValue = false;
        var ev = event instanceof Function ? event(el) : event;
        var props = properties instanceof Function ? properties(el) : properties;
        var trackEvent = pTimeout(_this.track(ev, props, options !== null && options !== void 0 ? options : {}), (_a = _this.settings.timeout) !== null && _a !== void 0 ? _a : 500);
        trackEvent.catch(console.error).then(function() {
          el.submit();
        }).catch(console.error);
      };
      var $ = window.jQuery || window.Zepto;
      if ($) {
        $(el).submit(handler);
      } else {
        el.addEventListener("submit", handler, false);
      }
    });
    return this;
  }
  var init_auto_track = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/auto-track.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_callback();
    }
  });

  // ../../node_modules/.pnpm/obj-case@0.2.1/node_modules/obj-case/index.js
  var require_obj_case = __commonJS({
    "../../node_modules/.pnpm/obj-case@0.2.1/node_modules/obj-case/index.js"(exports, module) {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      module.exports = multiple(find);
      module.exports.find = module.exports;
      module.exports.replace = function(obj, key, val, options) {
        multiple(replace).call(this, obj, key, val, options);
        return obj;
      };
      module.exports.del = function(obj, key, options) {
        multiple(del).call(this, obj, key, null, options);
        return obj;
      };
      function multiple(fn) {
        return function(obj, path, val, options) {
          var normalize2 = options && isFunction2(options.normalizer) ? options.normalizer : defaultNormalize;
          path = normalize2(path);
          var key;
          var finished = false;
          while (!finished)
            loop();
          function loop() {
            for (key in obj) {
              var normalizedKey = normalize2(key);
              if (0 === path.indexOf(normalizedKey)) {
                var temp = path.substr(normalizedKey.length);
                if (temp.charAt(0) === "." || temp.length === 0) {
                  path = temp.substr(1);
                  var child = obj[key];
                  if (null == child) {
                    finished = true;
                    return;
                  }
                  if (!path.length) {
                    finished = true;
                    return;
                  }
                  obj = child;
                  return;
                }
              }
            }
            key = void 0;
            finished = true;
          }
          if (!key)
            return;
          if (null == obj)
            return obj;
          return fn(obj, key, val);
        };
      }
      function find(obj, key) {
        if (obj.hasOwnProperty(key))
          return obj[key];
      }
      function del(obj, key) {
        if (obj.hasOwnProperty(key))
          delete obj[key];
        return obj;
      }
      function replace(obj, key, val) {
        if (obj.hasOwnProperty(key))
          obj[key] = val;
        return obj;
      }
      function defaultNormalize(path) {
        return path.replace(/[^a-zA-Z0-9\.]+/g, "").toLowerCase();
      }
      function isFunction2(val) {
        return typeof val === "function";
      }
    }
  });

  // ../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/address.js
  var require_address = __commonJS({
    "../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/address.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var obj_case_1 = __importDefault2(require_obj_case());
      function trait(a, b) {
        return function() {
          var traits = this.traits();
          var props = this.properties ? this.properties() : {};
          return obj_case_1.default(traits, "address." + a) || obj_case_1.default(traits, a) || (b ? obj_case_1.default(traits, "address." + b) : null) || (b ? obj_case_1.default(traits, b) : null) || obj_case_1.default(props, "address." + a) || obj_case_1.default(props, a) || (b ? obj_case_1.default(props, "address." + b) : null) || (b ? obj_case_1.default(props, b) : null);
        };
      }
      function default_1(proto) {
        proto.zip = trait("postalCode", "zip");
        proto.country = trait("country");
        proto.street = trait("street");
        proto.state = trait("state");
        proto.city = trait("city");
        proto.region = trait("region");
      }
      exports.default = default_1;
    }
  });

  // ../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/clone.js
  var require_clone = __commonJS({
    "../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/clone.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.clone = void 0;
      function clone(properties) {
        if (Object.prototype.toString.call(properties) === "[object Object]") {
          var temp = {};
          for (var key in properties) {
            temp[key] = clone(properties[key]);
          }
          return temp;
        } else if (Array.isArray(properties)) {
          return properties.map(clone);
        } else {
          return properties;
        }
      }
      exports.clone = clone;
    }
  });

  // ../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/is-enabled.js
  var require_is_enabled = __commonJS({
    "../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/is-enabled.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      Object.defineProperty(exports, "__esModule", { value: true });
      var disabled = {
        Salesforce: true
      };
      function default_1(integration) {
        return !disabled[integration];
      }
      exports.default = default_1;
    }
  });

  // ../../node_modules/.pnpm/@segment+isodate@1.0.3/node_modules/@segment/isodate/lib/index.js
  var require_lib = __commonJS({
    "../../node_modules/.pnpm/@segment+isodate@1.0.3/node_modules/@segment/isodate/lib/index.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var matcher = /^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
      exports.parse = function(iso) {
        var numericKeys = [1, 5, 6, 7, 11, 12];
        var arr = matcher.exec(iso);
        var offset = 0;
        if (!arr) {
          return new Date(iso);
        }
        for (var i = 0, val; val = numericKeys[i]; i++) {
          arr[val] = parseInt(arr[val], 10) || 0;
        }
        arr[2] = parseInt(arr[2], 10) || 1;
        arr[3] = parseInt(arr[3], 10) || 1;
        arr[2]--;
        arr[8] = arr[8] ? (arr[8] + "00").substring(0, 3) : 0;
        if (arr[4] === " ") {
          offset = new Date().getTimezoneOffset();
        } else if (arr[9] !== "Z" && arr[10]) {
          offset = arr[11] * 60 + arr[12];
          if (arr[10] === "+") {
            offset = 0 - offset;
          }
        }
        var millis = Date.UTC(arr[1], arr[2], arr[3], arr[5], arr[6] + offset, arr[7], arr[8]);
        return new Date(millis);
      };
      exports.is = function(string, strict) {
        if (typeof string !== "string") {
          return false;
        }
        if (strict && /^\d{4}-\d{2}-\d{2}/.test(string) === false) {
          return false;
        }
        return matcher.test(string);
      };
    }
  });

  // ../../node_modules/.pnpm/new-date@1.0.3/node_modules/new-date/lib/milliseconds.js
  var require_milliseconds = __commonJS({
    "../../node_modules/.pnpm/new-date@1.0.3/node_modules/new-date/lib/milliseconds.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var matcher = /\d{13}/;
      exports.is = function(string) {
        return matcher.test(string);
      };
      exports.parse = function(millis) {
        millis = parseInt(millis, 10);
        return new Date(millis);
      };
    }
  });

  // ../../node_modules/.pnpm/new-date@1.0.3/node_modules/new-date/lib/seconds.js
  var require_seconds = __commonJS({
    "../../node_modules/.pnpm/new-date@1.0.3/node_modules/new-date/lib/seconds.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var matcher = /\d{10}/;
      exports.is = function(string) {
        return matcher.test(string);
      };
      exports.parse = function(seconds) {
        var millis = parseInt(seconds, 10) * 1e3;
        return new Date(millis);
      };
    }
  });

  // ../../node_modules/.pnpm/new-date@1.0.3/node_modules/new-date/lib/index.js
  var require_lib2 = __commonJS({
    "../../node_modules/.pnpm/new-date@1.0.3/node_modules/new-date/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var isodate = require_lib();
      var milliseconds = require_milliseconds();
      var seconds = require_seconds();
      var objProto = Object.prototype;
      var toStr = objProto.toString;
      function isDate(value) {
        return toStr.call(value) === "[object Date]";
      }
      function isNumber2(value) {
        return toStr.call(value) === "[object Number]";
      }
      module.exports = function newDate(val) {
        if (isDate(val))
          return val;
        if (isNumber2(val))
          return new Date(toMs(val));
        if (isodate.is(val)) {
          return isodate.parse(val);
        }
        if (milliseconds.is(val)) {
          return milliseconds.parse(val);
        }
        if (seconds.is(val)) {
          return seconds.parse(val);
        }
        return new Date(val);
      };
      function toMs(num) {
        if (num < 315576e5)
          return num * 1e3;
        return num;
      }
    }
  });

  // ../../node_modules/.pnpm/@segment+isodate-traverse@1.1.1/node_modules/@segment/isodate-traverse/lib/index.js
  var require_lib3 = __commonJS({
    "../../node_modules/.pnpm/@segment+isodate-traverse@1.1.1/node_modules/@segment/isodate-traverse/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var isodate = require_lib();
      module.exports = traverse;
      function traverse(input, strict) {
        if (strict === void 0)
          strict = true;
        if (input && typeof input === "object") {
          return traverseObject(input, strict);
        } else if (Array.isArray(input)) {
          return traverseArray(input, strict);
        } else if (isodate.is(input, strict)) {
          return isodate.parse(input);
        }
        return input;
      }
      function traverseObject(obj, strict) {
        Object.keys(obj).forEach(function(key) {
          obj[key] = traverse(obj[key], strict);
        });
        return obj;
      }
      function traverseArray(arr, strict) {
        arr.forEach(function(value, index) {
          arr[index] = traverse(value, strict);
        });
        return arr;
      }
    }
  });

  // ../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/facade.js
  var require_facade = __commonJS({
    "../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/facade.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Facade = void 0;
      var address_1 = __importDefault2(require_address());
      var clone_1 = require_clone();
      var is_enabled_1 = __importDefault2(require_is_enabled());
      var new_date_1 = __importDefault2(require_lib2());
      var obj_case_1 = __importDefault2(require_obj_case());
      var isodate_traverse_1 = __importDefault2(require_lib3());
      function Facade2(obj, opts) {
        opts = opts || {};
        this.raw = clone_1.clone(obj);
        if (!("clone" in opts))
          opts.clone = true;
        if (opts.clone)
          obj = clone_1.clone(obj);
        if (!("traverse" in opts))
          opts.traverse = true;
        if (!("timestamp" in obj))
          obj.timestamp = new Date();
        else
          obj.timestamp = new_date_1.default(obj.timestamp);
        if (opts.traverse)
          isodate_traverse_1.default(obj);
        this.opts = opts;
        this.obj = obj;
      }
      exports.Facade = Facade2;
      var f = Facade2.prototype;
      f.proxy = function(field) {
        var fields = field.split(".");
        field = fields.shift();
        var obj = this[field] || this.field(field);
        if (!obj)
          return obj;
        if (typeof obj === "function")
          obj = obj.call(this) || {};
        if (fields.length === 0)
          return this.opts.clone ? transform2(obj) : obj;
        obj = obj_case_1.default(obj, fields.join("."));
        return this.opts.clone ? transform2(obj) : obj;
      };
      f.field = function(field) {
        var obj = this.obj[field];
        return this.opts.clone ? transform2(obj) : obj;
      };
      Facade2.proxy = function(field) {
        return function() {
          return this.proxy(field);
        };
      };
      Facade2.field = function(field) {
        return function() {
          return this.field(field);
        };
      };
      Facade2.multi = function(path) {
        return function() {
          var multi = this.proxy(path + "s");
          if (Array.isArray(multi))
            return multi;
          var one = this.proxy(path);
          if (one)
            one = [this.opts.clone ? clone_1.clone(one) : one];
          return one || [];
        };
      };
      Facade2.one = function(path) {
        return function() {
          var one = this.proxy(path);
          if (one)
            return one;
          var multi = this.proxy(path + "s");
          if (Array.isArray(multi))
            return multi[0];
        };
      };
      f.json = function() {
        var ret = this.opts.clone ? clone_1.clone(this.obj) : this.obj;
        if (this.type)
          ret.type = this.type();
        return ret;
      };
      f.rawEvent = function() {
        return this.raw;
      };
      f.options = function(integration) {
        var obj = this.obj.options || this.obj.context || {};
        var options = this.opts.clone ? clone_1.clone(obj) : obj;
        if (!integration)
          return options;
        if (!this.enabled(integration))
          return;
        var integrations = this.integrations();
        var value = integrations[integration] || obj_case_1.default(integrations, integration);
        if (typeof value !== "object")
          value = obj_case_1.default(this.options(), integration);
        return typeof value === "object" ? value : {};
      };
      f.context = f.options;
      f.enabled = function(integration) {
        var allEnabled = this.proxy("options.providers.all");
        if (typeof allEnabled !== "boolean")
          allEnabled = this.proxy("options.all");
        if (typeof allEnabled !== "boolean")
          allEnabled = this.proxy("integrations.all");
        if (typeof allEnabled !== "boolean")
          allEnabled = true;
        var enabled = allEnabled && is_enabled_1.default(integration);
        var options = this.integrations();
        if (options.providers && options.providers.hasOwnProperty(integration)) {
          enabled = options.providers[integration];
        }
        if (options.hasOwnProperty(integration)) {
          var settings = options[integration];
          if (typeof settings === "boolean") {
            enabled = settings;
          } else {
            enabled = true;
          }
        }
        return !!enabled;
      };
      f.integrations = function() {
        return this.obj.integrations || this.proxy("options.providers") || this.options();
      };
      f.active = function() {
        var active = this.proxy("options.active");
        if (active === null || active === void 0)
          active = true;
        return active;
      };
      f.anonymousId = function() {
        return this.field("anonymousId") || this.field("sessionId");
      };
      f.sessionId = f.anonymousId;
      f.groupId = Facade2.proxy("options.groupId");
      f.traits = function(aliases) {
        var ret = this.proxy("options.traits") || {};
        var id = this.userId();
        aliases = aliases || {};
        if (id)
          ret.id = id;
        for (var alias in aliases) {
          var value = this[alias] == null ? this.proxy("options.traits." + alias) : this[alias]();
          if (value == null)
            continue;
          ret[aliases[alias]] = value;
          delete ret[alias];
        }
        return ret;
      };
      f.library = function() {
        var library = this.proxy("options.library");
        if (!library)
          return { name: "unknown", version: null };
        if (typeof library === "string")
          return { name: library, version: null };
        return library;
      };
      f.device = function() {
        var device = this.proxy("context.device");
        if (typeof device !== "object" || device === null) {
          device = {};
        }
        var library = this.library().name;
        if (device.type)
          return device;
        if (library.indexOf("ios") > -1)
          device.type = "ios";
        if (library.indexOf("android") > -1)
          device.type = "android";
        return device;
      };
      f.userAgent = Facade2.proxy("context.userAgent");
      f.timezone = Facade2.proxy("context.timezone");
      f.timestamp = Facade2.field("timestamp");
      f.channel = Facade2.field("channel");
      f.ip = Facade2.proxy("context.ip");
      f.userId = Facade2.field("userId");
      address_1.default(f);
      function transform2(obj) {
        return clone_1.clone(obj);
      }
    }
  });

  // ../../node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js
  var require_inherits_browser = __commonJS({
    "../../node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js"(exports, module) {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      if (typeof Object.create === "function") {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
              constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
          }
        };
      } else {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {
            };
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
          }
        };
      }
    }
  });

  // ../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/alias.js
  var require_alias = __commonJS({
    "../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/alias.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Alias = void 0;
      var inherits_1 = __importDefault2(require_inherits_browser());
      var facade_1 = require_facade();
      function Alias3(dictionary, opts) {
        facade_1.Facade.call(this, dictionary, opts);
      }
      exports.Alias = Alias3;
      inherits_1.default(Alias3, facade_1.Facade);
      Alias3.prototype.action = function() {
        return "alias";
      };
      Alias3.prototype.type = Alias3.prototype.action;
      Alias3.prototype.previousId = function() {
        return this.field("previousId") || this.field("from");
      };
      Alias3.prototype.from = Alias3.prototype.previousId;
      Alias3.prototype.userId = function() {
        return this.field("userId") || this.field("to");
      };
      Alias3.prototype.to = Alias3.prototype.userId;
    }
  });

  // ../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/is-email.js
  var require_is_email = __commonJS({
    "../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/is-email.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      Object.defineProperty(exports, "__esModule", { value: true });
      var matcher = /.+\@.+\..+/;
      function isEmail(string) {
        return matcher.test(string);
      }
      exports.default = isEmail;
    }
  });

  // ../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/group.js
  var require_group = __commonJS({
    "../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/group.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Group = void 0;
      var inherits_1 = __importDefault2(require_inherits_browser());
      var is_email_1 = __importDefault2(require_is_email());
      var new_date_1 = __importDefault2(require_lib2());
      var facade_1 = require_facade();
      function Group4(dictionary, opts) {
        facade_1.Facade.call(this, dictionary, opts);
      }
      exports.Group = Group4;
      inherits_1.default(Group4, facade_1.Facade);
      var g = Group4.prototype;
      g.action = function() {
        return "group";
      };
      g.type = g.action;
      g.groupId = facade_1.Facade.field("groupId");
      g.created = function() {
        var created = this.proxy("traits.createdAt") || this.proxy("traits.created") || this.proxy("properties.createdAt") || this.proxy("properties.created");
        if (created)
          return new_date_1.default(created);
      };
      g.email = function() {
        var email = this.proxy("traits.email");
        if (email)
          return email;
        var groupId = this.groupId();
        if (is_email_1.default(groupId))
          return groupId;
      };
      g.traits = function(aliases) {
        var ret = this.properties();
        var id = this.groupId();
        aliases = aliases || {};
        if (id)
          ret.id = id;
        for (var alias in aliases) {
          var value = this[alias] == null ? this.proxy("traits." + alias) : this[alias]();
          if (value == null)
            continue;
          ret[aliases[alias]] = value;
          delete ret[alias];
        }
        return ret;
      };
      g.name = facade_1.Facade.proxy("traits.name");
      g.industry = facade_1.Facade.proxy("traits.industry");
      g.employees = facade_1.Facade.proxy("traits.employees");
      g.properties = function() {
        return this.field("traits") || this.field("properties") || {};
      };
    }
  });

  // ../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/identify.js
  var require_identify = __commonJS({
    "../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/identify.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Identify = void 0;
      var facade_1 = require_facade();
      var obj_case_1 = __importDefault2(require_obj_case());
      var inherits_1 = __importDefault2(require_inherits_browser());
      var is_email_1 = __importDefault2(require_is_email());
      var new_date_1 = __importDefault2(require_lib2());
      var trim = function(str) {
        return str.trim();
      };
      function Identify3(dictionary, opts) {
        facade_1.Facade.call(this, dictionary, opts);
      }
      exports.Identify = Identify3;
      inherits_1.default(Identify3, facade_1.Facade);
      var i = Identify3.prototype;
      i.action = function() {
        return "identify";
      };
      i.type = i.action;
      i.traits = function(aliases) {
        var ret = this.field("traits") || {};
        var id = this.userId();
        aliases = aliases || {};
        if (id)
          ret.id = id;
        for (var alias in aliases) {
          var value = this[alias] == null ? this.proxy("traits." + alias) : this[alias]();
          if (value == null)
            continue;
          ret[aliases[alias]] = value;
          if (alias !== aliases[alias])
            delete ret[alias];
        }
        return ret;
      };
      i.email = function() {
        var email = this.proxy("traits.email");
        if (email)
          return email;
        var userId = this.userId();
        if (is_email_1.default(userId))
          return userId;
      };
      i.created = function() {
        var created = this.proxy("traits.created") || this.proxy("traits.createdAt");
        if (created)
          return new_date_1.default(created);
      };
      i.companyCreated = function() {
        var created = this.proxy("traits.company.created") || this.proxy("traits.company.createdAt");
        if (created) {
          return new_date_1.default(created);
        }
      };
      i.companyName = function() {
        return this.proxy("traits.company.name");
      };
      i.name = function() {
        var name = this.proxy("traits.name");
        if (typeof name === "string") {
          return trim(name);
        }
        var firstName = this.firstName();
        var lastName = this.lastName();
        if (firstName && lastName) {
          return trim(firstName + " " + lastName);
        }
      };
      i.firstName = function() {
        var firstName = this.proxy("traits.firstName");
        if (typeof firstName === "string") {
          return trim(firstName);
        }
        var name = this.proxy("traits.name");
        if (typeof name === "string") {
          return trim(name).split(" ")[0];
        }
      };
      i.lastName = function() {
        var lastName = this.proxy("traits.lastName");
        if (typeof lastName === "string") {
          return trim(lastName);
        }
        var name = this.proxy("traits.name");
        if (typeof name !== "string") {
          return;
        }
        var space = trim(name).indexOf(" ");
        if (space === -1) {
          return;
        }
        return trim(name.substr(space + 1));
      };
      i.uid = function() {
        return this.userId() || this.username() || this.email();
      };
      i.description = function() {
        return this.proxy("traits.description") || this.proxy("traits.background");
      };
      i.age = function() {
        var date = this.birthday();
        var age = obj_case_1.default(this.traits(), "age");
        if (age != null)
          return age;
        if (!(date instanceof Date))
          return;
        var now2 = new Date();
        return now2.getFullYear() - date.getFullYear();
      };
      i.avatar = function() {
        var traits = this.traits();
        return obj_case_1.default(traits, "avatar") || obj_case_1.default(traits, "photoUrl") || obj_case_1.default(traits, "avatarUrl");
      };
      i.position = function() {
        var traits = this.traits();
        return obj_case_1.default(traits, "position") || obj_case_1.default(traits, "jobTitle");
      };
      i.username = facade_1.Facade.proxy("traits.username");
      i.website = facade_1.Facade.one("traits.website");
      i.websites = facade_1.Facade.multi("traits.website");
      i.phone = facade_1.Facade.one("traits.phone");
      i.phones = facade_1.Facade.multi("traits.phone");
      i.address = facade_1.Facade.proxy("traits.address");
      i.gender = facade_1.Facade.proxy("traits.gender");
      i.birthday = facade_1.Facade.proxy("traits.birthday");
    }
  });

  // ../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/track.js
  var require_track = __commonJS({
    "../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/track.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Track = void 0;
      var inherits_1 = __importDefault2(require_inherits_browser());
      var facade_1 = require_facade();
      var identify_1 = require_identify();
      var is_email_1 = __importDefault2(require_is_email());
      var obj_case_1 = __importDefault2(require_obj_case());
      function Track3(dictionary, opts) {
        facade_1.Facade.call(this, dictionary, opts);
      }
      exports.Track = Track3;
      inherits_1.default(Track3, facade_1.Facade);
      var t = Track3.prototype;
      t.action = function() {
        return "track";
      };
      t.type = t.action;
      t.event = facade_1.Facade.field("event");
      t.value = facade_1.Facade.proxy("properties.value");
      t.category = facade_1.Facade.proxy("properties.category");
      t.id = facade_1.Facade.proxy("properties.id");
      t.productId = function() {
        return this.proxy("properties.product_id") || this.proxy("properties.productId");
      };
      t.promotionId = function() {
        return this.proxy("properties.promotion_id") || this.proxy("properties.promotionId");
      };
      t.cartId = function() {
        return this.proxy("properties.cart_id") || this.proxy("properties.cartId");
      };
      t.checkoutId = function() {
        return this.proxy("properties.checkout_id") || this.proxy("properties.checkoutId");
      };
      t.paymentId = function() {
        return this.proxy("properties.payment_id") || this.proxy("properties.paymentId");
      };
      t.couponId = function() {
        return this.proxy("properties.coupon_id") || this.proxy("properties.couponId");
      };
      t.wishlistId = function() {
        return this.proxy("properties.wishlist_id") || this.proxy("properties.wishlistId");
      };
      t.reviewId = function() {
        return this.proxy("properties.review_id") || this.proxy("properties.reviewId");
      };
      t.orderId = function() {
        return this.proxy("properties.id") || this.proxy("properties.order_id") || this.proxy("properties.orderId");
      };
      t.sku = facade_1.Facade.proxy("properties.sku");
      t.tax = facade_1.Facade.proxy("properties.tax");
      t.name = facade_1.Facade.proxy("properties.name");
      t.price = facade_1.Facade.proxy("properties.price");
      t.total = facade_1.Facade.proxy("properties.total");
      t.repeat = facade_1.Facade.proxy("properties.repeat");
      t.coupon = facade_1.Facade.proxy("properties.coupon");
      t.shipping = facade_1.Facade.proxy("properties.shipping");
      t.discount = facade_1.Facade.proxy("properties.discount");
      t.shippingMethod = function() {
        return this.proxy("properties.shipping_method") || this.proxy("properties.shippingMethod");
      };
      t.paymentMethod = function() {
        return this.proxy("properties.payment_method") || this.proxy("properties.paymentMethod");
      };
      t.description = facade_1.Facade.proxy("properties.description");
      t.plan = facade_1.Facade.proxy("properties.plan");
      t.subtotal = function() {
        var subtotal = obj_case_1.default(this.properties(), "subtotal");
        var total = this.total() || this.revenue();
        if (subtotal)
          return subtotal;
        if (!total)
          return 0;
        if (this.total()) {
          var n = this.tax();
          if (n)
            total -= n;
          n = this.shipping();
          if (n)
            total -= n;
          n = this.discount();
          if (n)
            total += n;
        }
        return total;
      };
      t.products = function() {
        var props = this.properties();
        var products = obj_case_1.default(props, "products");
        if (Array.isArray(products)) {
          return products.filter(function(item) {
            return item !== null;
          });
        }
        return [];
      };
      t.quantity = function() {
        var props = this.obj.properties || {};
        return props.quantity || 1;
      };
      t.currency = function() {
        var props = this.obj.properties || {};
        return props.currency || "USD";
      };
      t.referrer = function() {
        return this.proxy("context.referrer.url") || this.proxy("context.page.referrer") || this.proxy("properties.referrer");
      };
      t.query = facade_1.Facade.proxy("options.query");
      t.properties = function(aliases) {
        var ret = this.field("properties") || {};
        aliases = aliases || {};
        for (var alias in aliases) {
          var value = this[alias] == null ? this.proxy("properties." + alias) : this[alias]();
          if (value == null)
            continue;
          ret[aliases[alias]] = value;
          delete ret[alias];
        }
        return ret;
      };
      t.username = function() {
        return this.proxy("traits.username") || this.proxy("properties.username") || this.userId() || this.sessionId();
      };
      t.email = function() {
        var email = this.proxy("traits.email") || this.proxy("properties.email") || this.proxy("options.traits.email");
        if (email)
          return email;
        var userId = this.userId();
        if (is_email_1.default(userId))
          return userId;
      };
      t.revenue = function() {
        var revenue = this.proxy("properties.revenue");
        var event = this.event();
        var orderCompletedRegExp = /^[ _]?completed[ _]?order[ _]?|^[ _]?order[ _]?completed[ _]?$/i;
        if (!revenue && event && event.match(orderCompletedRegExp)) {
          revenue = this.proxy("properties.total");
        }
        return currency(revenue);
      };
      t.cents = function() {
        var revenue = this.revenue();
        return typeof revenue !== "number" ? this.value() || 0 : revenue * 100;
      };
      t.identify = function() {
        var json = this.json();
        json.traits = this.traits();
        return new identify_1.Identify(json, this.opts);
      };
      function currency(val) {
        if (!val)
          return;
        if (typeof val === "number") {
          return val;
        }
        if (typeof val !== "string") {
          return;
        }
        val = val.replace(/\$/g, "");
        val = parseFloat(val);
        if (!isNaN(val)) {
          return val;
        }
      }
    }
  });

  // ../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/page.js
  var require_page = __commonJS({
    "../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/page.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Page = void 0;
      var inherits_1 = __importDefault2(require_inherits_browser());
      var facade_1 = require_facade();
      var track_1 = require_track();
      var is_email_1 = __importDefault2(require_is_email());
      function Page3(dictionary, opts) {
        facade_1.Facade.call(this, dictionary, opts);
      }
      exports.Page = Page3;
      inherits_1.default(Page3, facade_1.Facade);
      var p = Page3.prototype;
      p.action = function() {
        return "page";
      };
      p.type = p.action;
      p.category = facade_1.Facade.field("category");
      p.name = facade_1.Facade.field("name");
      p.title = facade_1.Facade.proxy("properties.title");
      p.path = facade_1.Facade.proxy("properties.path");
      p.url = facade_1.Facade.proxy("properties.url");
      p.referrer = function() {
        return this.proxy("context.referrer.url") || this.proxy("context.page.referrer") || this.proxy("properties.referrer");
      };
      p.properties = function(aliases) {
        var props = this.field("properties") || {};
        var category = this.category();
        var name = this.name();
        aliases = aliases || {};
        if (category)
          props.category = category;
        if (name)
          props.name = name;
        for (var alias in aliases) {
          var value = this[alias] == null ? this.proxy("properties." + alias) : this[alias]();
          if (value == null)
            continue;
          props[aliases[alias]] = value;
          if (alias !== aliases[alias])
            delete props[alias];
        }
        return props;
      };
      p.email = function() {
        var email = this.proxy("context.traits.email") || this.proxy("properties.email");
        if (email)
          return email;
        var userId = this.userId();
        if (is_email_1.default(userId))
          return userId;
      };
      p.fullName = function() {
        var category = this.category();
        var name = this.name();
        return name && category ? category + " " + name : name;
      };
      p.event = function(name) {
        return name ? "Viewed " + name + " Page" : "Loaded a Page";
      };
      p.track = function(name) {
        var json = this.json();
        json.event = this.event(name);
        json.timestamp = this.timestamp();
        json.properties = this.properties();
        return new track_1.Track(json, this.opts);
      };
    }
  });

  // ../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/screen.js
  var require_screen = __commonJS({
    "../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/screen.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Screen = void 0;
      var inherits_1 = __importDefault2(require_inherits_browser());
      var page_1 = require_page();
      var track_1 = require_track();
      function Screen2(dictionary, opts) {
        page_1.Page.call(this, dictionary, opts);
      }
      exports.Screen = Screen2;
      inherits_1.default(Screen2, page_1.Page);
      Screen2.prototype.action = function() {
        return "screen";
      };
      Screen2.prototype.type = Screen2.prototype.action;
      Screen2.prototype.event = function(name) {
        return name ? "Viewed " + name + " Screen" : "Loaded a Screen";
      };
      Screen2.prototype.track = function(name) {
        var json = this.json();
        json.event = this.event(name);
        json.timestamp = this.timestamp();
        json.properties = this.properties();
        return new track_1.Track(json, this.opts);
      };
    }
  });

  // ../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/delete.js
  var require_delete = __commonJS({
    "../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/delete.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Delete = void 0;
      var inherits_1 = __importDefault2(require_inherits_browser());
      var facade_1 = require_facade();
      function Delete(dictionary, opts) {
        facade_1.Facade.call(this, dictionary, opts);
      }
      exports.Delete = Delete;
      inherits_1.default(Delete, facade_1.Facade);
      Delete.prototype.type = function() {
        return "delete";
      };
    }
  });

  // ../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/index.js
  var require_dist = __commonJS({
    "../../node_modules/.pnpm/@segment+facade@3.4.9/node_modules/@segment/facade/dist/index.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var __assign2 = exports && exports.__assign || function() {
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign2.apply(this, arguments);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Delete = exports.Screen = exports.Page = exports.Track = exports.Identify = exports.Group = exports.Alias = exports.Facade = void 0;
      var facade_1 = require_facade();
      Object.defineProperty(exports, "Facade", { enumerable: true, get: function() {
        return facade_1.Facade;
      } });
      var alias_1 = require_alias();
      Object.defineProperty(exports, "Alias", { enumerable: true, get: function() {
        return alias_1.Alias;
      } });
      var group_1 = require_group();
      Object.defineProperty(exports, "Group", { enumerable: true, get: function() {
        return group_1.Group;
      } });
      var identify_1 = require_identify();
      Object.defineProperty(exports, "Identify", { enumerable: true, get: function() {
        return identify_1.Identify;
      } });
      var track_1 = require_track();
      Object.defineProperty(exports, "Track", { enumerable: true, get: function() {
        return track_1.Track;
      } });
      var page_1 = require_page();
      Object.defineProperty(exports, "Page", { enumerable: true, get: function() {
        return page_1.Page;
      } });
      var screen_1 = require_screen();
      Object.defineProperty(exports, "Screen", { enumerable: true, get: function() {
        return screen_1.Screen;
      } });
      var delete_1 = require_delete();
      Object.defineProperty(exports, "Delete", { enumerable: true, get: function() {
        return delete_1.Delete;
      } });
      exports.default = __assign2(__assign2({}, facade_1.Facade), {
        Alias: alias_1.Alias,
        Group: group_1.Group,
        Identify: identify_1.Identify,
        Track: track_1.Track,
        Page: page_1.Page,
        Screen: screen_1.Screen,
        Delete: delete_1.Delete
      });
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/to-facade.js
  function toFacade(evt, options) {
    var fcd = new import_facade.Facade(evt, options);
    if (evt.type === "track") {
      fcd = new import_facade.Track(evt, options);
    }
    if (evt.type === "identify") {
      fcd = new import_facade.Identify(evt, options);
    }
    if (evt.type === "page") {
      fcd = new import_facade.Page(evt, options);
    }
    if (evt.type === "alias") {
      fcd = new import_facade.Alias(evt, options);
    }
    if (evt.type === "group") {
      fcd = new import_facade.Group(evt, options);
    }
    if (evt.type === "screen") {
      fcd = new import_facade.Screen(evt, options);
    }
    Object.defineProperty(fcd, "obj", {
      value: evt,
      writable: true
    });
    return fcd;
  }
  var import_facade;
  var init_to_facade = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/to-facade.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      import_facade = __toESM(require_dist());
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/middleware/index.js
  var middleware_exports = {};
  __export(middleware_exports, {
    applyDestinationMiddleware: () => applyDestinationMiddleware,
    sourceMiddlewarePlugin: () => sourceMiddlewarePlugin
  });
  function applyDestinationMiddleware(destination, evt, middleware) {
    return __awaiter(this, void 0, void 0, function() {
      function applyMiddleware(event, fn) {
        return __awaiter(this, void 0, void 0, function() {
          var nextCalled, returnedEvent;
          var _a;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                nextCalled = false;
                returnedEvent = null;
                return [4, asPromise(fn({
                  payload: toFacade(event, {
                    clone: true,
                    traverse: false
                  }),
                  integration: destination,
                  next: function(evt2) {
                    nextCalled = true;
                    if (evt2 === null) {
                      returnedEvent = null;
                    }
                    if (evt2) {
                      returnedEvent = evt2.obj;
                    }
                  }
                }))];
              case 1:
                _b.sent();
                if (!nextCalled && returnedEvent !== null) {
                  returnedEvent = returnedEvent;
                  returnedEvent.integrations = __assign(__assign({}, event.integrations), (_a = {}, _a[destination] = false, _a));
                }
                return [2, returnedEvent];
            }
          });
        });
      }
      var _i, middleware_1, md, result;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            _i = 0, middleware_1 = middleware;
            _a.label = 1;
          case 1:
            if (!(_i < middleware_1.length))
              return [3, 4];
            md = middleware_1[_i];
            return [4, applyMiddleware(evt, md)];
          case 2:
            result = _a.sent();
            if (result === null) {
              return [2, null];
            }
            evt = result;
            _a.label = 3;
          case 3:
            _i++;
            return [3, 1];
          case 4:
            return [2, evt];
        }
      });
    });
  }
  function sourceMiddlewarePlugin(fn, integrations) {
    function apply(ctx) {
      return __awaiter(this, void 0, void 0, function() {
        var nextCalled;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              nextCalled = false;
              return [4, asPromise(fn({
                payload: toFacade(ctx.event, {
                  clone: true,
                  traverse: false
                }),
                integrations: integrations !== null && integrations !== void 0 ? integrations : {},
                next: function(evt) {
                  nextCalled = true;
                  if (evt) {
                    ctx.event = evt.obj;
                  }
                }
              }))];
            case 1:
              _a.sent();
              if (!nextCalled) {
                throw new ContextCancelation({
                  retry: false,
                  type: "middleware_cancellation",
                  reason: "Middleware `next` function skipped"
                });
              }
              return [2, ctx];
          }
        });
      });
    }
    return {
      name: "Source Middleware ".concat(fn.name),
      type: "before",
      version: "0.1.0",
      isLoaded: function() {
        return true;
      },
      load: function(ctx) {
        return Promise.resolve(ctx);
      },
      track: apply,
      page: apply,
      identify: apply,
      alias: apply,
      group: apply
    };
  }
  var init_middleware = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/middleware/index.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_modules();
      init_context();
      init_as_promise();
      init_to_facade();
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/query-string/pickPrefix.js
  function pickPrefix(prefix, object) {
    return Object.keys(object).reduce(function(acc, key) {
      if (key.startsWith(prefix)) {
        var field = key.substr(prefix.length);
        acc[field] = object[key];
      }
      return acc;
    }, {});
  }
  var init_pickPrefix = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/query-string/pickPrefix.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/query-string/index.js
  var query_string_exports = {};
  __export(query_string_exports, {
    queryString: () => queryString
  });
  function queryString(analytics, query) {
    var a = document.createElement("a");
    a.href = query;
    var parsed = a.search.slice(1);
    var params = parsed.split("&").reduce(function(acc, str) {
      var _a = str.split("="), k = _a[0], v = _a[1];
      acc[k] = gracefulDecodeURIComponent(v);
      return acc;
    }, {});
    var calls = [];
    var ajs_uid = params.ajs_uid, ajs_event = params.ajs_event, ajs_aid = params.ajs_aid;
    if (ajs_aid) {
      var anonId = Array.isArray(params.ajs_aid) ? params.ajs_aid[0] : params.ajs_aid;
      analytics.setAnonymousId(anonId);
    }
    if (ajs_uid) {
      var uid = Array.isArray(params.ajs_uid) ? params.ajs_uid[0] : params.ajs_uid;
      var traits = pickPrefix("ajs_trait_", params);
      calls.push(analytics.identify(uid, traits));
    }
    if (ajs_event) {
      var event_1 = Array.isArray(params.ajs_event) ? params.ajs_event[0] : params.ajs_event;
      var props = pickPrefix("ajs_prop_", params);
      calls.push(analytics.track(event_1, props));
    }
    return Promise.all(calls);
  }
  var init_query_string = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/query-string/index.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_pickPrefix();
      init_gracefulDecodeURIComponent();
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/parse-cdn.js
  var analyticsScriptRegex, getCDNUrlFromScriptTag, _globalCDN, getGlobalCDNUrl, setGlobalCDNUrl, getCDN, getNextIntegrationsURL;
  var init_parse_cdn = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/parse-cdn.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      analyticsScriptRegex = /(https:\/\/.*)\/analytics\.js\/v1\/(?:.*?)\/(?:platform|analytics.*)?/;
      getCDNUrlFromScriptTag = function() {
        var cdn;
        var scripts = Array.prototype.slice.call(document.querySelectorAll("script"));
        scripts.forEach(function(s) {
          var _a;
          var src = (_a = s.getAttribute("src")) !== null && _a !== void 0 ? _a : "";
          var result = analyticsScriptRegex.exec(src);
          if (result && result[1]) {
            cdn = result[1];
          }
        });
        return cdn;
      };
      getGlobalCDNUrl = function() {
        var _a;
        var result = _globalCDN !== null && _globalCDN !== void 0 ? _globalCDN : (_a = window.analytics) === null || _a === void 0 ? void 0 : _a._cdn;
        return result;
      };
      setGlobalCDNUrl = function(cdn) {
        if (window.analytics) {
          window.analytics._cdn = cdn;
        }
        _globalCDN = cdn;
      };
      getCDN = function() {
        var globalCdnUrl = getGlobalCDNUrl();
        if (globalCdnUrl)
          return globalCdnUrl;
        var cdnFromScriptTag = getCDNUrlFromScriptTag();
        if (cdnFromScriptTag) {
          return cdnFromScriptTag;
        } else {
          return "https://cdn.segment.com";
        }
      };
      getNextIntegrationsURL = function() {
        var cdn = getCDN();
        return "".concat(cdn, "/next-integrations");
      };
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/merged-options.js
  function mergedOptions(settings, options) {
    var _a;
    var optionOverrides = Object.entries((_a = options.integrations) !== null && _a !== void 0 ? _a : {}).reduce(function(overrides, _a2) {
      var _b, _c;
      var integration = _a2[0], options2 = _a2[1];
      if (typeof options2 === "object") {
        return __assign(__assign({}, overrides), (_b = {}, _b[integration] = options2, _b));
      }
      return __assign(__assign({}, overrides), (_c = {}, _c[integration] = {}, _c));
    }, {});
    return Object.entries(settings.integrations).reduce(function(integrationSettings, _a2) {
      var _b;
      var integration = _a2[0], settings2 = _a2[1];
      return __assign(__assign({}, integrationSettings), (_b = {}, _b[integration] = __assign(__assign({}, settings2), optionOverrides[integration]), _b));
    }, {});
  }
  var init_merged_options = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/merged-options.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_modules();
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/load-script.js
  function findScript(src) {
    var scripts = Array.prototype.slice.call(window.document.querySelectorAll("script"));
    return scripts.find(function(s) {
      return s.src === src;
    });
  }
  function loadScript(src, attributes) {
    var found = findScript(src);
    if (found !== void 0) {
      var status_1 = found === null || found === void 0 ? void 0 : found.getAttribute("status");
      if (status_1 === "loaded") {
        return Promise.resolve(found);
      }
      if (status_1 === "loading") {
        return new Promise(function(resolve, reject) {
          found.addEventListener("load", function() {
            return resolve(found);
          });
          found.addEventListener("error", function(err) {
            return reject(err);
          });
        });
      }
    }
    return new Promise(function(resolve, reject) {
      var _a;
      var script = window.document.createElement("script");
      script.type = "text/javascript";
      script.src = src;
      script.async = true;
      script.setAttribute("status", "loading");
      for (var _i = 0, _b = Object.entries(attributes !== null && attributes !== void 0 ? attributes : {}); _i < _b.length; _i++) {
        var _c = _b[_i], k = _c[0], v = _c[1];
        script.setAttribute(k, v);
      }
      script.onload = function() {
        script.onerror = script.onload = null;
        script.setAttribute("status", "loaded");
        resolve(script);
      };
      script.onerror = function() {
        script.onerror = script.onload = null;
        script.setAttribute("status", "error");
        reject(new Error("Failed to load ".concat(src)));
      };
      var tag = window.document.getElementsByTagName("script")[0];
      (_a = tag.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(script, tag);
    });
  }
  function unloadScript(src) {
    var found = findScript(src);
    if (found !== void 0) {
      found.remove();
    }
    return Promise.resolve();
  }
  var init_load_script = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/load-script.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/p-while.js
  var pWhile;
  var init_p_while = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/p-while.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_modules();
      pWhile = function(condition, action) {
        return __awaiter(void 0, void 0, void 0, function() {
          var loop;
          return __generator(this, function(_a) {
            loop = function(actionResult) {
              return __awaiter(void 0, void 0, void 0, function() {
                var _a2;
                return __generator(this, function(_b) {
                  switch (_b.label) {
                    case 0:
                      if (!condition(actionResult))
                        return [3, 2];
                      _a2 = loop;
                      return [4, action()];
                    case 1:
                      return [2, _a2.apply(void 0, [_b.sent()])];
                    case 2:
                      return [2];
                  }
                });
              });
            };
            return [2, loop(void 0)];
          });
        });
      };
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/is-plan-event-enabled.js
  function isPlanEventEnabled(plan, planEvent) {
    var _a, _b;
    if (typeof (planEvent === null || planEvent === void 0 ? void 0 : planEvent.enabled) === "boolean") {
      return planEvent.enabled;
    }
    return (_b = (_a = plan === null || plan === void 0 ? void 0 : plan.__default) === null || _a === void 0 ? void 0 : _a.enabled) !== null && _b !== void 0 ? _b : true;
  }
  var init_is_plan_event_enabled = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/is-plan-event-enabled.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
    }
  });

  // ../../node_modules/.pnpm/tiny-hashes@1.0.1/node_modules/tiny-hashes/md5/index.js
  var require_md5 = __commonJS({
    "../../node_modules/.pnpm/tiny-hashes@1.0.1/node_modules/tiny-hashes/md5/index.js"(exports, module) {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      for (r = [], o = 0; o < 64; )
        r[o] = 0 | 4294967296 * Math.sin(++o % Math.PI);
      var r;
      var o;
      module.exports = function(e) {
        var t, n, f, a = [t = 1732584193, n = 4023233417, ~t, ~n], c = [], h = unescape(encodeURI(e)) + "\x80", u = h.length;
        for (e = --u / 4 + 2 | 15, c[--e] = 8 * u; ~u; )
          c[u >> 2] |= h.charCodeAt(u) << 8 * u--;
        for (o = h = 0; o < e; o += 16) {
          for (u = a; h < 64; u = [f = u[3], t + ((f = u[0] + [t & n | ~t & f, f & t | ~f & n, t ^ n ^ f, n ^ (t | ~f)][u = h >> 4] + r[h] + ~~c[o | 15 & [h, 5 * h + 1, 3 * h + 5, 7 * h][u]]) << (u = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21][4 * u + h++ % 4]) | f >>> -u), t, n])
            t = 0 | u[1], n = u[2];
          for (h = 4; h; )
            a[--h] += u[h];
        }
        for (e = ""; h < 32; )
          e += (a[h >> 3] >> 4 * (1 ^ h++) & 15).toString(16);
        return e;
      };
    }
  });

  // ../../node_modules/.pnpm/dlv@1.1.3/node_modules/dlv/dist/dlv.umd.js
  var require_dlv_umd = __commonJS({
    "../../node_modules/.pnpm/dlv@1.1.3/node_modules/dlv/dist/dlv.umd.js"(exports, module) {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      !function(t, n) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = function(t2, n2, e, i, o) {
          for (n2 = n2.split ? n2.split(".") : n2, i = 0; i < n2.length; i++)
            t2 = t2 ? t2[n2[i]] : o;
          return t2 === o ? e : t2;
        } : "function" == typeof define && define.amd ? define(function() {
          return function(t2, n2, e, i, o) {
            for (n2 = n2.split ? n2.split(".") : n2, i = 0; i < n2.length; i++)
              t2 = t2 ? t2[n2[i]] : o;
            return t2 === o ? e : t2;
          };
        }) : t.dlv = function(t2, n2, e, i, o) {
          for (n2 = n2.split ? n2.split(".") : n2, i = 0; i < n2.length; i++)
            t2 = t2 ? t2[n2[i]] : o;
          return t2 === o ? e : t2;
        };
      }(exports);
    }
  });

  // ../../node_modules/.pnpm/@stdlib+constants-float64-pinf@0.0.7/node_modules/@stdlib/constants-float64-pinf/lib/index.js
  var require_lib4 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+constants-float64-pinf@0.0.7/node_modules/@stdlib/constants-float64-pinf/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var FLOAT64_PINF = Number.POSITIVE_INFINITY;
      module.exports = FLOAT64_PINF;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+number-ctor@0.0.7/node_modules/@stdlib/number-ctor/lib/number.js
  var require_number = __commonJS({
    "../../node_modules/.pnpm/@stdlib+number-ctor@0.0.7/node_modules/@stdlib/number-ctor/lib/number.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      module.exports = Number;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+number-ctor@0.0.7/node_modules/@stdlib/number-ctor/lib/index.js
  var require_lib5 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+number-ctor@0.0.7/node_modules/@stdlib/number-ctor/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var Number2 = require_number();
      module.exports = Number2;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+constants-float64-ninf@0.0.7/node_modules/@stdlib/constants-float64-ninf/lib/index.js
  var require_lib6 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+constants-float64-ninf@0.0.7/node_modules/@stdlib/constants-float64-ninf/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var Number2 = require_lib5();
      var FLOAT64_NINF = Number2.NEGATIVE_INFINITY;
      module.exports = FLOAT64_NINF;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+constants-float64-exponent-bias@0.0.7/node_modules/@stdlib/constants-float64-exponent-bias/lib/index.js
  var require_lib7 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+constants-float64-exponent-bias@0.0.7/node_modules/@stdlib/constants-float64-exponent-bias/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var FLOAT64_EXPONENT_BIAS = 1023 | 0;
      module.exports = FLOAT64_EXPONENT_BIAS;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+constants-float64-max-base2-exponent@0.0.7/node_modules/@stdlib/constants-float64-max-base2-exponent/lib/index.js
  var require_lib8 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+constants-float64-max-base2-exponent@0.0.7/node_modules/@stdlib/constants-float64-max-base2-exponent/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var FLOAT64_MAX_BASE2_EXPONENT = 1023 | 0;
      module.exports = FLOAT64_MAX_BASE2_EXPONENT;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+constants-float64-max-base2-exponent-subnormal@0.0.7/node_modules/@stdlib/constants-float64-max-base2-exponent-subnormal/lib/index.js
  var require_lib9 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+constants-float64-max-base2-exponent-subnormal@0.0.7/node_modules/@stdlib/constants-float64-max-base2-exponent-subnormal/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var FLOAT64_MAX_BASE2_EXPONENT_SUBNORMAL = -1023 | 0;
      module.exports = FLOAT64_MAX_BASE2_EXPONENT_SUBNORMAL;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+constants-float64-min-base2-exponent-subnormal@0.0.7/node_modules/@stdlib/constants-float64-min-base2-exponent-subnormal/lib/index.js
  var require_lib10 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+constants-float64-min-base2-exponent-subnormal@0.0.7/node_modules/@stdlib/constants-float64-min-base2-exponent-subnormal/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var FLOAT64_MIN_BASE2_EXPONENT_SUBNORMAL = -1074 | 0;
      module.exports = FLOAT64_MIN_BASE2_EXPONENT_SUBNORMAL;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+math-base-assert-is-nan@0.0.8/node_modules/@stdlib/math-base-assert-is-nan/lib/main.js
  var require_main = __commonJS({
    "../../node_modules/.pnpm/@stdlib+math-base-assert-is-nan@0.0.8/node_modules/@stdlib/math-base-assert-is-nan/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      function isnan(x) {
        return x !== x;
      }
      module.exports = isnan;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+math-base-assert-is-nan@0.0.8/node_modules/@stdlib/math-base-assert-is-nan/lib/index.js
  var require_lib11 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+math-base-assert-is-nan@0.0.8/node_modules/@stdlib/math-base-assert-is-nan/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var isnan = require_main();
      module.exports = isnan;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+math-base-assert-is-infinite@0.0.9/node_modules/@stdlib/math-base-assert-is-infinite/lib/main.js
  var require_main2 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+math-base-assert-is-infinite@0.0.9/node_modules/@stdlib/math-base-assert-is-infinite/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var PINF = require_lib4();
      var NINF = require_lib6();
      function isInfinite(x) {
        return x === PINF || x === NINF;
      }
      module.exports = isInfinite;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+math-base-assert-is-infinite@0.0.9/node_modules/@stdlib/math-base-assert-is-infinite/lib/index.js
  var require_lib12 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+math-base-assert-is-infinite@0.0.9/node_modules/@stdlib/math-base-assert-is-infinite/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var isInfinite = require_main2();
      module.exports = isInfinite;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-has-symbol-support@0.0.8/node_modules/@stdlib/assert-has-symbol-support/lib/main.js
  var require_main3 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-has-symbol-support@0.0.8/node_modules/@stdlib/assert-has-symbol-support/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      function hasSymbolSupport() {
        return typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
      }
      module.exports = hasSymbolSupport;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-has-symbol-support@0.0.8/node_modules/@stdlib/assert-has-symbol-support/lib/index.js
  var require_lib13 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-has-symbol-support@0.0.8/node_modules/@stdlib/assert-has-symbol-support/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var hasSymbolSupport = require_main3();
      module.exports = hasSymbolSupport;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-has-tostringtag-support@0.0.9/node_modules/@stdlib/assert-has-tostringtag-support/lib/main.js
  var require_main4 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-has-tostringtag-support@0.0.9/node_modules/@stdlib/assert-has-tostringtag-support/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var hasSymbols = require_lib13();
      var FLG = hasSymbols();
      function hasToStringTagSupport() {
        return FLG && typeof Symbol.toStringTag === "symbol";
      }
      module.exports = hasToStringTagSupport;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-has-tostringtag-support@0.0.9/node_modules/@stdlib/assert-has-tostringtag-support/lib/index.js
  var require_lib14 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-has-tostringtag-support@0.0.9/node_modules/@stdlib/assert-has-tostringtag-support/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var hasToStringTagSupport = require_main4();
      module.exports = hasToStringTagSupport;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+utils-native-class@0.0.8/node_modules/@stdlib/utils-native-class/lib/tostring.js
  var require_tostring = __commonJS({
    "../../node_modules/.pnpm/@stdlib+utils-native-class@0.0.8/node_modules/@stdlib/utils-native-class/lib/tostring.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var toStr = Object.prototype.toString;
      module.exports = toStr;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+utils-native-class@0.0.8/node_modules/@stdlib/utils-native-class/lib/native_class.js
  var require_native_class = __commonJS({
    "../../node_modules/.pnpm/@stdlib+utils-native-class@0.0.8/node_modules/@stdlib/utils-native-class/lib/native_class.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var toStr = require_tostring();
      function nativeClass(v) {
        return toStr.call(v);
      }
      module.exports = nativeClass;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-has-own-property@0.0.7/node_modules/@stdlib/assert-has-own-property/lib/main.js
  var require_main5 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-has-own-property@0.0.7/node_modules/@stdlib/assert-has-own-property/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var has = Object.prototype.hasOwnProperty;
      function hasOwnProp(value, property) {
        if (value === void 0 || value === null) {
          return false;
        }
        return has.call(value, property);
      }
      module.exports = hasOwnProp;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-has-own-property@0.0.7/node_modules/@stdlib/assert-has-own-property/lib/index.js
  var require_lib15 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-has-own-property@0.0.7/node_modules/@stdlib/assert-has-own-property/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var hasOwnProp = require_main5();
      module.exports = hasOwnProp;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+utils-native-class@0.0.8/node_modules/@stdlib/utils-native-class/lib/tostringtag.js
  var require_tostringtag = __commonJS({
    "../../node_modules/.pnpm/@stdlib+utils-native-class@0.0.8/node_modules/@stdlib/utils-native-class/lib/tostringtag.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var toStrTag = typeof Symbol === "function" ? Symbol.toStringTag : "";
      module.exports = toStrTag;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+utils-native-class@0.0.8/node_modules/@stdlib/utils-native-class/lib/polyfill.js
  var require_polyfill = __commonJS({
    "../../node_modules/.pnpm/@stdlib+utils-native-class@0.0.8/node_modules/@stdlib/utils-native-class/lib/polyfill.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var hasOwnProp = require_lib15();
      var toStringTag = require_tostringtag();
      var toStr = require_tostring();
      function nativeClass(v) {
        var isOwn;
        var tag;
        var out;
        if (v === null || v === void 0) {
          return toStr.call(v);
        }
        tag = v[toStringTag];
        isOwn = hasOwnProp(v, toStringTag);
        try {
          v[toStringTag] = void 0;
        } catch (err) {
          return toStr.call(v);
        }
        out = toStr.call(v);
        if (isOwn) {
          v[toStringTag] = tag;
        } else {
          delete v[toStringTag];
        }
        return out;
      }
      module.exports = nativeClass;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+utils-native-class@0.0.8/node_modules/@stdlib/utils-native-class/lib/index.js
  var require_lib16 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+utils-native-class@0.0.8/node_modules/@stdlib/utils-native-class/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var hasToStringTag = require_lib14();
      var builtin = require_native_class();
      var polyfill = require_polyfill();
      var nativeClass;
      if (hasToStringTag()) {
        nativeClass = polyfill;
      } else {
        nativeClass = builtin;
      }
      module.exports = nativeClass;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-is-uint32array@0.0.8/node_modules/@stdlib/assert-is-uint32array/lib/main.js
  var require_main6 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-is-uint32array@0.0.8/node_modules/@stdlib/assert-is-uint32array/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var nativeClass = require_lib16();
      var hasUint32Array = typeof Uint32Array === "function";
      function isUint32Array(value) {
        return hasUint32Array && value instanceof Uint32Array || nativeClass(value) === "[object Uint32Array]";
      }
      module.exports = isUint32Array;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-is-uint32array@0.0.8/node_modules/@stdlib/assert-is-uint32array/lib/index.js
  var require_lib17 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-is-uint32array@0.0.8/node_modules/@stdlib/assert-is-uint32array/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var isUint32Array = require_main6();
      module.exports = isUint32Array;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+constants-uint32-max@0.0.7/node_modules/@stdlib/constants-uint32-max/lib/index.js
  var require_lib18 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+constants-uint32-max@0.0.7/node_modules/@stdlib/constants-uint32-max/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var UINT32_MAX = 4294967295;
      module.exports = UINT32_MAX;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-has-uint32array-support@0.0.8/node_modules/@stdlib/assert-has-uint32array-support/lib/uint32array.js
  var require_uint32array = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-has-uint32array-support@0.0.8/node_modules/@stdlib/assert-has-uint32array-support/lib/uint32array.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var main2 = typeof Uint32Array === "function" ? Uint32Array : null;
      module.exports = main2;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-has-uint32array-support@0.0.8/node_modules/@stdlib/assert-has-uint32array-support/lib/main.js
  var require_main7 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-has-uint32array-support@0.0.8/node_modules/@stdlib/assert-has-uint32array-support/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var isUint32Array = require_lib17();
      var UINT32_MAX = require_lib18();
      var GlobalUint32Array = require_uint32array();
      function hasUint32ArraySupport() {
        var bool;
        var arr;
        if (typeof GlobalUint32Array !== "function") {
          return false;
        }
        try {
          arr = [1, 3.14, -3.14, UINT32_MAX + 1, UINT32_MAX + 2];
          arr = new GlobalUint32Array(arr);
          bool = isUint32Array(arr) && arr[0] === 1 && arr[1] === 3 && arr[2] === UINT32_MAX - 2 && arr[3] === 0 && arr[4] === 1;
        } catch (err) {
          bool = false;
        }
        return bool;
      }
      module.exports = hasUint32ArraySupport;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-has-uint32array-support@0.0.8/node_modules/@stdlib/assert-has-uint32array-support/lib/index.js
  var require_lib19 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-has-uint32array-support@0.0.8/node_modules/@stdlib/assert-has-uint32array-support/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var hasUint32ArraySupport = require_main7();
      module.exports = hasUint32ArraySupport;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+array-uint32@0.0.6/node_modules/@stdlib/array-uint32/lib/uint32array.js
  var require_uint32array2 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+array-uint32@0.0.6/node_modules/@stdlib/array-uint32/lib/uint32array.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var ctor = typeof Uint32Array === "function" ? Uint32Array : void 0;
      module.exports = ctor;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+array-uint32@0.0.6/node_modules/@stdlib/array-uint32/lib/polyfill.js
  var require_polyfill2 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+array-uint32@0.0.6/node_modules/@stdlib/array-uint32/lib/polyfill.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      function polyfill() {
        throw new Error("not implemented");
      }
      module.exports = polyfill;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+array-uint32@0.0.6/node_modules/@stdlib/array-uint32/lib/index.js
  var require_lib20 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+array-uint32@0.0.6/node_modules/@stdlib/array-uint32/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var hasUint32ArraySupport = require_lib19();
      var builtin = require_uint32array2();
      var polyfill = require_polyfill2();
      var ctor;
      if (hasUint32ArraySupport()) {
        ctor = builtin;
      } else {
        ctor = polyfill;
      }
      module.exports = ctor;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-is-float64array@0.0.8/node_modules/@stdlib/assert-is-float64array/lib/main.js
  var require_main8 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-is-float64array@0.0.8/node_modules/@stdlib/assert-is-float64array/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var nativeClass = require_lib16();
      var hasFloat64Array = typeof Float64Array === "function";
      function isFloat64Array(value) {
        return hasFloat64Array && value instanceof Float64Array || nativeClass(value) === "[object Float64Array]";
      }
      module.exports = isFloat64Array;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-is-float64array@0.0.8/node_modules/@stdlib/assert-is-float64array/lib/index.js
  var require_lib21 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-is-float64array@0.0.8/node_modules/@stdlib/assert-is-float64array/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var isFloat64Array = require_main8();
      module.exports = isFloat64Array;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-has-float64array-support@0.0.8/node_modules/@stdlib/assert-has-float64array-support/lib/float64array.js
  var require_float64array = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-has-float64array-support@0.0.8/node_modules/@stdlib/assert-has-float64array-support/lib/float64array.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var main2 = typeof Float64Array === "function" ? Float64Array : null;
      module.exports = main2;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-has-float64array-support@0.0.8/node_modules/@stdlib/assert-has-float64array-support/lib/main.js
  var require_main9 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-has-float64array-support@0.0.8/node_modules/@stdlib/assert-has-float64array-support/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var isFloat64Array = require_lib21();
      var GlobalFloat64Array = require_float64array();
      function hasFloat64ArraySupport() {
        var bool;
        var arr;
        if (typeof GlobalFloat64Array !== "function") {
          return false;
        }
        try {
          arr = new GlobalFloat64Array([1, 3.14, -3.14, NaN]);
          bool = isFloat64Array(arr) && arr[0] === 1 && arr[1] === 3.14 && arr[2] === -3.14 && arr[3] !== arr[3];
        } catch (err) {
          bool = false;
        }
        return bool;
      }
      module.exports = hasFloat64ArraySupport;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-has-float64array-support@0.0.8/node_modules/@stdlib/assert-has-float64array-support/lib/index.js
  var require_lib22 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-has-float64array-support@0.0.8/node_modules/@stdlib/assert-has-float64array-support/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var hasFloat64ArraySupport = require_main9();
      module.exports = hasFloat64ArraySupport;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+array-float64@0.0.6/node_modules/@stdlib/array-float64/lib/float64array.js
  var require_float64array2 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+array-float64@0.0.6/node_modules/@stdlib/array-float64/lib/float64array.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var ctor = typeof Float64Array === "function" ? Float64Array : void 0;
      module.exports = ctor;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+array-float64@0.0.6/node_modules/@stdlib/array-float64/lib/polyfill.js
  var require_polyfill3 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+array-float64@0.0.6/node_modules/@stdlib/array-float64/lib/polyfill.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      function polyfill() {
        throw new Error("not implemented");
      }
      module.exports = polyfill;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+array-float64@0.0.6/node_modules/@stdlib/array-float64/lib/index.js
  var require_lib23 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+array-float64@0.0.6/node_modules/@stdlib/array-float64/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var hasFloat64ArraySupport = require_lib22();
      var builtin = require_float64array2();
      var polyfill = require_polyfill3();
      var ctor;
      if (hasFloat64ArraySupport()) {
        ctor = builtin;
      } else {
        ctor = polyfill;
      }
      module.exports = ctor;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-is-uint8array@0.0.8/node_modules/@stdlib/assert-is-uint8array/lib/main.js
  var require_main10 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-is-uint8array@0.0.8/node_modules/@stdlib/assert-is-uint8array/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var nativeClass = require_lib16();
      var hasUint8Array = typeof Uint8Array === "function";
      function isUint8Array(value) {
        return hasUint8Array && value instanceof Uint8Array || nativeClass(value) === "[object Uint8Array]";
      }
      module.exports = isUint8Array;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-is-uint8array@0.0.8/node_modules/@stdlib/assert-is-uint8array/lib/index.js
  var require_lib24 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-is-uint8array@0.0.8/node_modules/@stdlib/assert-is-uint8array/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var isUint8Array = require_main10();
      module.exports = isUint8Array;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+constants-uint8-max@0.0.7/node_modules/@stdlib/constants-uint8-max/lib/index.js
  var require_lib25 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+constants-uint8-max@0.0.7/node_modules/@stdlib/constants-uint8-max/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var UINT8_MAX = 255 | 0;
      module.exports = UINT8_MAX;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-has-uint8array-support@0.0.8/node_modules/@stdlib/assert-has-uint8array-support/lib/uint8array.js
  var require_uint8array = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-has-uint8array-support@0.0.8/node_modules/@stdlib/assert-has-uint8array-support/lib/uint8array.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var main2 = typeof Uint8Array === "function" ? Uint8Array : null;
      module.exports = main2;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-has-uint8array-support@0.0.8/node_modules/@stdlib/assert-has-uint8array-support/lib/main.js
  var require_main11 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-has-uint8array-support@0.0.8/node_modules/@stdlib/assert-has-uint8array-support/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var isUint8Array = require_lib24();
      var UINT8_MAX = require_lib25();
      var GlobalUint8Array = require_uint8array();
      function hasUint8ArraySupport() {
        var bool;
        var arr;
        if (typeof GlobalUint8Array !== "function") {
          return false;
        }
        try {
          arr = [1, 3.14, -3.14, UINT8_MAX + 1, UINT8_MAX + 2];
          arr = new GlobalUint8Array(arr);
          bool = isUint8Array(arr) && arr[0] === 1 && arr[1] === 3 && arr[2] === UINT8_MAX - 2 && arr[3] === 0 && arr[4] === 1;
        } catch (err) {
          bool = false;
        }
        return bool;
      }
      module.exports = hasUint8ArraySupport;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-has-uint8array-support@0.0.8/node_modules/@stdlib/assert-has-uint8array-support/lib/index.js
  var require_lib26 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-has-uint8array-support@0.0.8/node_modules/@stdlib/assert-has-uint8array-support/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var hasUint8ArraySupport = require_main11();
      module.exports = hasUint8ArraySupport;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+array-uint8@0.0.7/node_modules/@stdlib/array-uint8/lib/uint8array.js
  var require_uint8array2 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+array-uint8@0.0.7/node_modules/@stdlib/array-uint8/lib/uint8array.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var ctor = typeof Uint8Array === "function" ? Uint8Array : void 0;
      module.exports = ctor;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+array-uint8@0.0.7/node_modules/@stdlib/array-uint8/lib/polyfill.js
  var require_polyfill4 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+array-uint8@0.0.7/node_modules/@stdlib/array-uint8/lib/polyfill.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      function polyfill() {
        throw new Error("not implemented");
      }
      module.exports = polyfill;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+array-uint8@0.0.7/node_modules/@stdlib/array-uint8/lib/index.js
  var require_lib27 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+array-uint8@0.0.7/node_modules/@stdlib/array-uint8/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var hasUint8ArraySupport = require_lib26();
      var builtin = require_uint8array2();
      var polyfill = require_polyfill4();
      var ctor;
      if (hasUint8ArraySupport()) {
        ctor = builtin;
      } else {
        ctor = polyfill;
      }
      module.exports = ctor;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-is-uint16array@0.0.8/node_modules/@stdlib/assert-is-uint16array/lib/main.js
  var require_main12 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-is-uint16array@0.0.8/node_modules/@stdlib/assert-is-uint16array/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var nativeClass = require_lib16();
      var hasUint16Array = typeof Uint16Array === "function";
      function isUint16Array(value) {
        return hasUint16Array && value instanceof Uint16Array || nativeClass(value) === "[object Uint16Array]";
      }
      module.exports = isUint16Array;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-is-uint16array@0.0.8/node_modules/@stdlib/assert-is-uint16array/lib/index.js
  var require_lib28 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-is-uint16array@0.0.8/node_modules/@stdlib/assert-is-uint16array/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var isUint16Array = require_main12();
      module.exports = isUint16Array;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+constants-uint16-max@0.0.7/node_modules/@stdlib/constants-uint16-max/lib/index.js
  var require_lib29 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+constants-uint16-max@0.0.7/node_modules/@stdlib/constants-uint16-max/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var UINT16_MAX = 65535 | 0;
      module.exports = UINT16_MAX;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-has-uint16array-support@0.0.8/node_modules/@stdlib/assert-has-uint16array-support/lib/uint16array.js
  var require_uint16array = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-has-uint16array-support@0.0.8/node_modules/@stdlib/assert-has-uint16array-support/lib/uint16array.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var main2 = typeof Uint16Array === "function" ? Uint16Array : null;
      module.exports = main2;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-has-uint16array-support@0.0.8/node_modules/@stdlib/assert-has-uint16array-support/lib/main.js
  var require_main13 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-has-uint16array-support@0.0.8/node_modules/@stdlib/assert-has-uint16array-support/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var isUint16Array = require_lib28();
      var UINT16_MAX = require_lib29();
      var GlobalUint16Array = require_uint16array();
      function hasUint16ArraySupport() {
        var bool;
        var arr;
        if (typeof GlobalUint16Array !== "function") {
          return false;
        }
        try {
          arr = [1, 3.14, -3.14, UINT16_MAX + 1, UINT16_MAX + 2];
          arr = new GlobalUint16Array(arr);
          bool = isUint16Array(arr) && arr[0] === 1 && arr[1] === 3 && arr[2] === UINT16_MAX - 2 && arr[3] === 0 && arr[4] === 1;
        } catch (err) {
          bool = false;
        }
        return bool;
      }
      module.exports = hasUint16ArraySupport;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-has-uint16array-support@0.0.8/node_modules/@stdlib/assert-has-uint16array-support/lib/index.js
  var require_lib30 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-has-uint16array-support@0.0.8/node_modules/@stdlib/assert-has-uint16array-support/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var hasUint16ArraySupport = require_main13();
      module.exports = hasUint16ArraySupport;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+array-uint16@0.0.6/node_modules/@stdlib/array-uint16/lib/uint16array.js
  var require_uint16array2 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+array-uint16@0.0.6/node_modules/@stdlib/array-uint16/lib/uint16array.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var ctor = typeof Uint16Array === "function" ? Uint16Array : void 0;
      module.exports = ctor;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+array-uint16@0.0.6/node_modules/@stdlib/array-uint16/lib/polyfill.js
  var require_polyfill5 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+array-uint16@0.0.6/node_modules/@stdlib/array-uint16/lib/polyfill.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      function polyfill() {
        throw new Error("not implemented");
      }
      module.exports = polyfill;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+array-uint16@0.0.6/node_modules/@stdlib/array-uint16/lib/index.js
  var require_lib31 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+array-uint16@0.0.6/node_modules/@stdlib/array-uint16/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var hasUint16ArraySupport = require_lib30();
      var builtin = require_uint16array2();
      var polyfill = require_polyfill5();
      var ctor;
      if (hasUint16ArraySupport()) {
        ctor = builtin;
      } else {
        ctor = polyfill;
      }
      module.exports = ctor;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-is-little-endian@0.0.7/node_modules/@stdlib/assert-is-little-endian/lib/ctors.js
  var require_ctors = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-is-little-endian@0.0.7/node_modules/@stdlib/assert-is-little-endian/lib/ctors.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var Uint8Array2 = require_lib27();
      var Uint16Array2 = require_lib31();
      var ctors = {
        "uint16": Uint16Array2,
        "uint8": Uint8Array2
      };
      module.exports = ctors;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-is-little-endian@0.0.7/node_modules/@stdlib/assert-is-little-endian/lib/main.js
  var require_main14 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-is-little-endian@0.0.7/node_modules/@stdlib/assert-is-little-endian/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var ctors = require_ctors();
      var bool;
      function isLittleEndian() {
        var uint16view;
        var uint8view;
        uint16view = new ctors["uint16"](1);
        uint16view[0] = 4660;
        uint8view = new ctors["uint8"](uint16view.buffer);
        return uint8view[0] === 52;
      }
      bool = isLittleEndian();
      module.exports = bool;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+assert-is-little-endian@0.0.7/node_modules/@stdlib/assert-is-little-endian/lib/index.js
  var require_lib32 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+assert-is-little-endian@0.0.7/node_modules/@stdlib/assert-is-little-endian/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var IS_LITTLE_ENDIAN = require_main14();
      module.exports = IS_LITTLE_ENDIAN;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+number-float64-base-to-words@0.0.6/node_modules/@stdlib/number-float64-base-to-words/lib/indices.js
  var require_indices = __commonJS({
    "../../node_modules/.pnpm/@stdlib+number-float64-base-to-words@0.0.6/node_modules/@stdlib/number-float64-base-to-words/lib/indices.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var isLittleEndian = require_lib32();
      var indices;
      var HIGH;
      var LOW;
      if (isLittleEndian === true) {
        HIGH = 1;
        LOW = 0;
      } else {
        HIGH = 0;
        LOW = 1;
      }
      indices = {
        "HIGH": HIGH,
        "LOW": LOW
      };
      module.exports = indices;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+number-float64-base-to-words@0.0.6/node_modules/@stdlib/number-float64-base-to-words/lib/to_words.js
  var require_to_words = __commonJS({
    "../../node_modules/.pnpm/@stdlib+number-float64-base-to-words@0.0.6/node_modules/@stdlib/number-float64-base-to-words/lib/to_words.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var Uint32Array2 = require_lib20();
      var Float64Array2 = require_lib23();
      var indices = require_indices();
      var FLOAT64_VIEW = new Float64Array2(1);
      var UINT32_VIEW = new Uint32Array2(FLOAT64_VIEW.buffer);
      var HIGH = indices.HIGH;
      var LOW = indices.LOW;
      function toWords(out, x) {
        FLOAT64_VIEW[0] = x;
        out[0] = UINT32_VIEW[HIGH];
        out[1] = UINT32_VIEW[LOW];
        return out;
      }
      module.exports = toWords;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+number-float64-base-to-words@0.0.6/node_modules/@stdlib/number-float64-base-to-words/lib/main.js
  var require_main15 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+number-float64-base-to-words@0.0.6/node_modules/@stdlib/number-float64-base-to-words/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var fcn = require_to_words();
      function toWords(out, x) {
        if (arguments.length === 1) {
          return fcn([0, 0], out);
        }
        return fcn(out, x);
      }
      module.exports = toWords;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+number-float64-base-to-words@0.0.6/node_modules/@stdlib/number-float64-base-to-words/lib/index.js
  var require_lib33 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+number-float64-base-to-words@0.0.6/node_modules/@stdlib/number-float64-base-to-words/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var toWords = require_main15();
      module.exports = toWords;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+number-float64-base-get-high-word@0.0.6/node_modules/@stdlib/number-float64-base-get-high-word/lib/high.js
  var require_high = __commonJS({
    "../../node_modules/.pnpm/@stdlib+number-float64-base-get-high-word@0.0.6/node_modules/@stdlib/number-float64-base-get-high-word/lib/high.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var isLittleEndian = require_lib32();
      var HIGH;
      if (isLittleEndian === true) {
        HIGH = 1;
      } else {
        HIGH = 0;
      }
      module.exports = HIGH;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+number-float64-base-get-high-word@0.0.6/node_modules/@stdlib/number-float64-base-get-high-word/lib/main.js
  var require_main16 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+number-float64-base-get-high-word@0.0.6/node_modules/@stdlib/number-float64-base-get-high-word/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var Uint32Array2 = require_lib20();
      var Float64Array2 = require_lib23();
      var HIGH = require_high();
      var FLOAT64_VIEW = new Float64Array2(1);
      var UINT32_VIEW = new Uint32Array2(FLOAT64_VIEW.buffer);
      function getHighWord(x) {
        FLOAT64_VIEW[0] = x;
        return UINT32_VIEW[HIGH];
      }
      module.exports = getHighWord;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+number-float64-base-get-high-word@0.0.6/node_modules/@stdlib/number-float64-base-get-high-word/lib/index.js
  var require_lib34 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+number-float64-base-get-high-word@0.0.6/node_modules/@stdlib/number-float64-base-get-high-word/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var getHighWord = require_main16();
      module.exports = getHighWord;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+number-float64-base-from-words@0.0.6/node_modules/@stdlib/number-float64-base-from-words/lib/indices.js
  var require_indices2 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+number-float64-base-from-words@0.0.6/node_modules/@stdlib/number-float64-base-from-words/lib/indices.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var isLittleEndian = require_lib32();
      var indices;
      var HIGH;
      var LOW;
      if (isLittleEndian === true) {
        HIGH = 1;
        LOW = 0;
      } else {
        HIGH = 0;
        LOW = 1;
      }
      indices = {
        "HIGH": HIGH,
        "LOW": LOW
      };
      module.exports = indices;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+number-float64-base-from-words@0.0.6/node_modules/@stdlib/number-float64-base-from-words/lib/main.js
  var require_main17 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+number-float64-base-from-words@0.0.6/node_modules/@stdlib/number-float64-base-from-words/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var Uint32Array2 = require_lib20();
      var Float64Array2 = require_lib23();
      var indices = require_indices2();
      var FLOAT64_VIEW = new Float64Array2(1);
      var UINT32_VIEW = new Uint32Array2(FLOAT64_VIEW.buffer);
      var HIGH = indices.HIGH;
      var LOW = indices.LOW;
      function fromWords(high, low) {
        UINT32_VIEW[HIGH] = high;
        UINT32_VIEW[LOW] = low;
        return FLOAT64_VIEW[0];
      }
      module.exports = fromWords;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+number-float64-base-from-words@0.0.6/node_modules/@stdlib/number-float64-base-from-words/lib/index.js
  var require_lib35 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+number-float64-base-from-words@0.0.6/node_modules/@stdlib/number-float64-base-from-words/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var fromWords = require_main17();
      module.exports = fromWords;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+math-base-special-copysign@0.0.6/node_modules/@stdlib/math-base-special-copysign/lib/main.js
  var require_main18 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+math-base-special-copysign@0.0.6/node_modules/@stdlib/math-base-special-copysign/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var toWords = require_lib33();
      var getHighWord = require_lib34();
      var fromWords = require_lib35();
      var SIGN_MASK = 2147483648 >>> 0;
      var MAGNITUDE_MASK = 2147483647 | 0;
      var WORDS = [0, 0];
      function copysign(x, y) {
        var hx;
        var hy;
        toWords(WORDS, x);
        hx = WORDS[0];
        hx &= MAGNITUDE_MASK;
        hy = getHighWord(y);
        hy &= SIGN_MASK;
        hx |= hy;
        return fromWords(hx, WORDS[1]);
      }
      module.exports = copysign;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+math-base-special-copysign@0.0.6/node_modules/@stdlib/math-base-special-copysign/lib/index.js
  var require_lib36 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+math-base-special-copysign@0.0.6/node_modules/@stdlib/math-base-special-copysign/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var main2 = require_main18();
      module.exports = main2;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+constants-float64-smallest-normal@0.0.7/node_modules/@stdlib/constants-float64-smallest-normal/lib/index.js
  var require_lib37 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+constants-float64-smallest-normal@0.0.7/node_modules/@stdlib/constants-float64-smallest-normal/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var FLOAT64_SMALLEST_NORMAL = 22250738585072014e-324;
      module.exports = FLOAT64_SMALLEST_NORMAL;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+math-base-special-abs@0.0.6/node_modules/@stdlib/math-base-special-abs/lib/main.js
  var require_main19 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+math-base-special-abs@0.0.6/node_modules/@stdlib/math-base-special-abs/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      function abs(x) {
        return Math.abs(x);
      }
      module.exports = abs;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+math-base-special-abs@0.0.6/node_modules/@stdlib/math-base-special-abs/lib/index.js
  var require_lib38 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+math-base-special-abs@0.0.6/node_modules/@stdlib/math-base-special-abs/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var abs = require_main19();
      module.exports = abs;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+number-float64-base-normalize@0.0.6/node_modules/@stdlib/number-float64-base-normalize/lib/normalize.js
  var require_normalize = __commonJS({
    "../../node_modules/.pnpm/@stdlib+number-float64-base-normalize@0.0.6/node_modules/@stdlib/number-float64-base-normalize/lib/normalize.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var FLOAT64_SMALLEST_NORMAL = require_lib37();
      var isInfinite = require_lib12();
      var isnan = require_lib11();
      var abs = require_lib38();
      var SCALAR = 4503599627370496;
      function normalize2(out, x) {
        if (isnan(x) || isInfinite(x)) {
          out[0] = x;
          out[1] = 0;
          return out;
        }
        if (x !== 0 && abs(x) < FLOAT64_SMALLEST_NORMAL) {
          out[0] = x * SCALAR;
          out[1] = -52;
          return out;
        }
        out[0] = x;
        out[1] = 0;
        return out;
      }
      module.exports = normalize2;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+number-float64-base-normalize@0.0.6/node_modules/@stdlib/number-float64-base-normalize/lib/main.js
  var require_main20 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+number-float64-base-normalize@0.0.6/node_modules/@stdlib/number-float64-base-normalize/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var fcn = require_normalize();
      function normalize2(out, x) {
        if (arguments.length === 1) {
          return fcn([0, 0], out);
        }
        return fcn(out, x);
      }
      module.exports = normalize2;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+number-float64-base-normalize@0.0.6/node_modules/@stdlib/number-float64-base-normalize/lib/index.js
  var require_lib39 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+number-float64-base-normalize@0.0.6/node_modules/@stdlib/number-float64-base-normalize/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var normalize2 = require_main20();
      module.exports = normalize2;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+constants-float64-high-word-exponent-mask@0.0.7/node_modules/@stdlib/constants-float64-high-word-exponent-mask/lib/index.js
  var require_lib40 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+constants-float64-high-word-exponent-mask@0.0.7/node_modules/@stdlib/constants-float64-high-word-exponent-mask/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var FLOAT64_HIGH_WORD_EXPONENT_MASK = 2146435072;
      module.exports = FLOAT64_HIGH_WORD_EXPONENT_MASK;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+number-float64-base-exponent@0.0.6/node_modules/@stdlib/number-float64-base-exponent/lib/main.js
  var require_main21 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+number-float64-base-exponent@0.0.6/node_modules/@stdlib/number-float64-base-exponent/lib/main.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var getHighWord = require_lib34();
      var EXP_MASK = require_lib40();
      var BIAS = require_lib7();
      function exponent(x) {
        var high = getHighWord(x);
        high = (high & EXP_MASK) >>> 20;
        return high - BIAS | 0;
      }
      module.exports = exponent;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+number-float64-base-exponent@0.0.6/node_modules/@stdlib/number-float64-base-exponent/lib/index.js
  var require_lib41 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+number-float64-base-exponent@0.0.6/node_modules/@stdlib/number-float64-base-exponent/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var exponent = require_main21();
      module.exports = exponent;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+math-base-special-ldexp@0.0.5/node_modules/@stdlib/math-base-special-ldexp/lib/ldexp.js
  var require_ldexp = __commonJS({
    "../../node_modules/.pnpm/@stdlib+math-base-special-ldexp@0.0.5/node_modules/@stdlib/math-base-special-ldexp/lib/ldexp.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var PINF = require_lib4();
      var NINF = require_lib6();
      var BIAS = require_lib7();
      var MAX_EXPONENT = require_lib8();
      var MAX_SUBNORMAL_EXPONENT = require_lib9();
      var MIN_SUBNORMAL_EXPONENT = require_lib10();
      var isnan = require_lib11();
      var isInfinite = require_lib12();
      var copysign = require_lib36();
      var normalize2 = require_lib39();
      var floatExp = require_lib41();
      var toWords = require_lib33();
      var fromWords = require_lib35();
      var TWO52_INV = 2220446049250313e-31;
      var CLEAR_EXP_MASK = 2148532223 >>> 0;
      var FRAC = [0, 0];
      var WORDS = [0, 0];
      function ldexp(frac, exp) {
        var high;
        var m;
        if (frac === 0 || isnan(frac) || isInfinite(frac)) {
          return frac;
        }
        normalize2(FRAC, frac);
        frac = FRAC[0];
        exp += FRAC[1];
        exp += floatExp(frac);
        if (exp < MIN_SUBNORMAL_EXPONENT) {
          return copysign(0, frac);
        }
        if (exp > MAX_EXPONENT) {
          if (frac < 0) {
            return NINF;
          }
          return PINF;
        }
        if (exp <= MAX_SUBNORMAL_EXPONENT) {
          exp += 52;
          m = TWO52_INV;
        } else {
          m = 1;
        }
        toWords(WORDS, frac);
        high = WORDS[0];
        high &= CLEAR_EXP_MASK;
        high |= exp + BIAS << 20;
        return m * fromWords(high, WORDS[1]);
      }
      module.exports = ldexp;
    }
  });

  // ../../node_modules/.pnpm/@stdlib+math-base-special-ldexp@0.0.5/node_modules/@stdlib/math-base-special-ldexp/lib/index.js
  var require_lib42 = __commonJS({
    "../../node_modules/.pnpm/@stdlib+math-base-special-ldexp@0.0.5/node_modules/@stdlib/math-base-special-ldexp/lib/index.js"(exports, module) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var ldexp = require_ldexp();
      module.exports = ldexp;
    }
  });

  // ../../node_modules/.pnpm/dset@3.1.2/node_modules/dset/dist/index.js
  var require_dist2 = __commonJS({
    "../../node_modules/.pnpm/dset@3.1.2/node_modules/dset/dist/index.js"(exports) {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      function dset2(obj, keys, val) {
        keys.split && (keys = keys.split("."));
        var i = 0, l = keys.length, t = obj, x, k;
        while (i < l) {
          k = keys[i++];
          if (k === "__proto__" || k === "constructor" || k === "prototype")
            break;
          t = t[k] = i === l ? val : typeof (x = t[k]) === typeof keys ? x : keys[i] * 0 !== 0 || !!~("" + keys[i]).indexOf(".") ? {} : [];
        }
      }
      exports.dset = dset2;
    }
  });

  // ../../node_modules/.pnpm/@segment+tsub@0.1.12/node_modules/@segment/tsub/dist/unset.js
  var require_unset = __commonJS({
    "../../node_modules/.pnpm/@segment+tsub@0.1.12/node_modules/@segment/tsub/dist/unset.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.unset = void 0;
      var dlv_1 = __importDefault2(require_dlv_umd());
      function unset(obj, prop) {
        if ((0, dlv_1.default)(obj, prop)) {
          var segs = prop.split(".");
          var last = segs.pop();
          while (segs.length && segs[segs.length - 1].slice(-1) === "\\") {
            last = segs.pop().slice(0, -1) + "." + last;
          }
          while (segs.length)
            obj = obj[prop = segs.shift()];
          return delete obj[last];
        }
        return true;
      }
      exports.unset = unset;
    }
  });

  // ../../node_modules/.pnpm/@segment+tsub@0.1.12/node_modules/@segment/tsub/dist/transformers.js
  var require_transformers = __commonJS({
    "../../node_modules/.pnpm/@segment+tsub@0.1.12/node_modules/@segment/tsub/dist/transformers.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var md5_1 = __importDefault2(require_md5());
      var dlv_1 = __importDefault2(require_dlv_umd());
      var math_base_special_ldexp_1 = __importDefault2(require_lib42());
      var dset_1 = require_dist2();
      var unset_1 = require_unset();
      function transform2(payload, transformers) {
        var transformedPayload = payload;
        for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
          var transformer = transformers_1[_i];
          switch (transformer.type) {
            case "drop":
              return null;
            case "drop_properties":
              dropProperties(transformedPayload, transformer.config);
              break;
            case "allow_properties":
              allowProperties(transformedPayload, transformer.config);
              break;
            case "sample_event":
              if (sampleEvent(transformedPayload, transformer.config)) {
                break;
              }
              return null;
            case "map_properties":
              mapProperties(transformedPayload, transformer.config);
              break;
            case "hash_properties":
              break;
            default:
              throw new Error('Transformer of type "'.concat(transformer.type, '" is unsupported.'));
          }
        }
        return transformedPayload;
      }
      exports.default = transform2;
      function dropProperties(payload, config) {
        for (var key in config.drop) {
          if (!config.drop.hasOwnProperty(key)) {
            continue;
          }
          var field = key === "" ? payload : (0, dlv_1.default)(payload, key);
          if (typeof field !== "object" || field === null) {
            continue;
          }
          for (var _i = 0, _a = config.drop[key]; _i < _a.length; _i++) {
            var target = _a[_i];
            delete field[target];
          }
        }
      }
      function allowProperties(payload, config) {
        for (var key in config.allow) {
          if (!config.allow.hasOwnProperty(key)) {
            continue;
          }
          var field = key === "" ? payload : (0, dlv_1.default)(payload, key);
          if (typeof field !== "object" || field === null) {
            continue;
          }
          for (var k in field) {
            if (!field.hasOwnProperty(k)) {
              continue;
            }
            if (config.allow[key].indexOf(k) === -1) {
              delete field[k];
            }
          }
        }
      }
      function mapProperties(payload, config) {
        var initialPayload = JSON.parse(JSON.stringify(payload));
        for (var key in config.map) {
          if (!config.map.hasOwnProperty(key)) {
            continue;
          }
          var actionMap = config.map[key];
          var splitKey = key.split(".");
          var parent_1 = void 0;
          if (splitKey.length > 1) {
            splitKey.pop();
            parent_1 = (0, dlv_1.default)(initialPayload, splitKey.join("."));
          } else {
            parent_1 = payload;
          }
          if (typeof parent_1 !== "object") {
            continue;
          }
          if (actionMap.copy) {
            var valueToCopy = (0, dlv_1.default)(initialPayload, actionMap.copy);
            if (valueToCopy !== void 0) {
              (0, dset_1.dset)(payload, key, valueToCopy);
            }
          } else if (actionMap.move) {
            var valueToMove = (0, dlv_1.default)(initialPayload, actionMap.move);
            if (valueToMove !== void 0) {
              (0, dset_1.dset)(payload, key, valueToMove);
            }
            (0, unset_1.unset)(payload, actionMap.move);
          } else if (actionMap.hasOwnProperty("set")) {
            (0, dset_1.dset)(payload, key, actionMap.set);
          }
          if (actionMap.to_string) {
            var valueToString = (0, dlv_1.default)(payload, key);
            if (typeof valueToString === "string" || typeof valueToString === "object" && valueToString !== null) {
              continue;
            }
            if (valueToString !== void 0) {
              (0, dset_1.dset)(payload, key, JSON.stringify(valueToString));
            } else {
              (0, dset_1.dset)(payload, key, "undefined");
            }
          }
        }
      }
      function sampleEvent(payload, config) {
        if (config.sample.percent <= 0) {
          return false;
        } else if (config.sample.percent >= 1) {
          return true;
        }
        if (!config.sample.path) {
          return samplePercent(config.sample.percent);
        }
        return sampleConsistentPercent(payload, config);
      }
      function samplePercent(percent) {
        return Math.random() <= percent;
      }
      function sampleConsistentPercent(payload, config) {
        var field = (0, dlv_1.default)(payload, config.sample.path);
        var digest = (0, md5_1.default)(JSON.stringify(field));
        var exponent = -64;
        var significand = [];
        consumeDigest(digest.slice(0, 8), significand);
        var leadingZeros = 0;
        for (var i = 0; i < 64; i++) {
          if (significand[i] === 1) {
            break;
          }
          leadingZeros++;
        }
        if (leadingZeros !== 0) {
          var val = [];
          consumeDigest(digest.slice(9, 16), val);
          exponent -= leadingZeros;
          significand.splice(0, leadingZeros);
          val.splice(64 - leadingZeros);
          significand = significand.concat(val);
        }
        significand[63] = significand[63] === 0 ? 1 : 0;
        return (0, math_base_special_ldexp_1.default)(parseInt(significand.join(""), 2), exponent) < config.sample.percent;
      }
      function consumeDigest(digest, arr) {
        for (var i = 0; i < 8; i++) {
          var remainder = digest[i];
          for (var binary = 128; binary >= 1; binary /= 2) {
            if (remainder - binary >= 0) {
              remainder -= binary;
              arr.push(1);
            } else {
              arr.push(0);
            }
          }
        }
      }
    }
  });

  // ../../node_modules/.pnpm/@segment+tsub@0.1.12/node_modules/@segment/tsub/dist/matchers.js
  var require_matchers = __commonJS({
    "../../node_modules/.pnpm/@segment+tsub@0.1.12/node_modules/@segment/tsub/dist/matchers.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var dlv_1 = __importDefault2(require_dlv_umd());
      function matches2(event, matcher) {
        if (!matcher) {
          throw new Error("No matcher supplied!");
        }
        switch (matcher.type) {
          case "all":
            return all();
          case "fql":
            return fql(matcher.ir, event);
          default:
            throw new Error("Matcher of type ".concat(matcher.type, " unsupported."));
        }
      }
      exports.default = matches2;
      function all() {
        return true;
      }
      function fql(ir, event) {
        if (!ir) {
          return false;
        }
        try {
          ir = JSON.parse(ir);
        } catch (e) {
          throw new Error('Failed to JSON.parse FQL intermediate representation "'.concat(ir, '": ').concat(e));
        }
        var result = fqlEvaluate(ir, event);
        if (typeof result !== "boolean") {
          return false;
        }
        return result;
      }
      function fqlEvaluate(ir, event) {
        if (!Array.isArray(ir)) {
          return getValue(ir, event) === true;
        }
        var item = ir[0];
        switch (item) {
          case "!":
            return !fqlEvaluate(ir[1], event);
          case "or":
            for (var i = 1; i < ir.length; i++) {
              if (fqlEvaluate(ir[i], event)) {
                return true;
              }
            }
            return false;
          case "and":
            for (var i = 1; i < ir.length; i++) {
              if (!fqlEvaluate(ir[i], event)) {
                return false;
              }
            }
            return true;
          case "=":
          case "!=":
            return compareItems(getValue(ir[1], event), getValue(ir[2], event), item, event);
          case "<=":
          case "<":
          case ">":
          case ">=":
            return compareNumbers(getValue(ir[1], event), getValue(ir[2], event), item, event);
          case "contains":
            return contains(getValue(ir[1], event), getValue(ir[2], event));
          case "match":
            return match(getValue(ir[1], event), getValue(ir[2], event));
          case "lowercase":
            var target = getValue(ir[1], event);
            if (typeof target !== "string") {
              return null;
            }
            return target.toLowerCase();
          case "typeof":
            return typeof getValue(ir[1], event);
          case "length":
            return length(getValue(ir[1], event));
          default:
            throw new Error("FQL IR could not evaluate for token: ".concat(item));
        }
      }
      function getValue(item, event) {
        if (Array.isArray(item)) {
          return item;
        }
        if (typeof item === "object") {
          return item.value;
        }
        return (0, dlv_1.default)(event, item);
      }
      function compareNumbers(first, second, operator, event) {
        if (isIR(first)) {
          first = fqlEvaluate(first, event);
        }
        if (isIR(second)) {
          second = fqlEvaluate(second, event);
        }
        if (typeof first !== "number" || typeof second !== "number") {
          return false;
        }
        switch (operator) {
          case "<=":
            return first <= second;
          case ">=":
            return first >= second;
          case "<":
            return first < second;
          case ">":
            return first > second;
          default:
            throw new Error("Invalid operator in compareNumbers: ".concat(operator));
        }
      }
      function compareItems(first, second, operator, event) {
        if (isIR(first)) {
          first = fqlEvaluate(first, event);
        }
        if (isIR(second)) {
          second = fqlEvaluate(second, event);
        }
        if (typeof first === "object" && typeof second === "object") {
          first = JSON.stringify(first);
          second = JSON.stringify(second);
        }
        switch (operator) {
          case "=":
            return first === second;
          case "!=":
            return first !== second;
          default:
            throw new Error("Invalid operator in compareItems: ".concat(operator));
        }
      }
      function contains(first, second) {
        if (typeof first !== "string" || typeof second !== "string") {
          return false;
        }
        return first.indexOf(second) !== -1;
      }
      function match(str, glob) {
        if (typeof str !== "string" || typeof glob !== "string") {
          return false;
        }
        return globMatches(glob, str);
      }
      function length(item) {
        if (item === null) {
          return 0;
        }
        if (!Array.isArray(item) && typeof item !== "string") {
          return NaN;
        }
        return item.length;
      }
      function isIR(value) {
        if (!Array.isArray(value)) {
          return false;
        }
        if ((value[0] === "lowercase" || value[0] === "length" || value[0] === "typeof") && value.length === 2) {
          return true;
        }
        if ((value[0] === "contains" || value[0] === "match") && value.length === 3) {
          return true;
        }
        return false;
      }
      function globMatches(pattern, str) {
        var _a, _b;
        Pattern:
          while (pattern.length > 0) {
            var star = void 0;
            var chunk = void 0;
            _a = scanChunk(pattern), star = _a.star, chunk = _a.chunk, pattern = _a.pattern;
            if (star && chunk === "") {
              return true;
            }
            var _c = matchChunk(chunk, str), t = _c.t, ok = _c.ok, err = _c.err;
            if (err) {
              return false;
            }
            if (ok && (t.length === 0 || pattern.length > 0)) {
              str = t;
              continue;
            }
            if (star) {
              for (var i = 0; i < str.length; i++) {
                ;
                _b = matchChunk(chunk, str.slice(i + 1)), t = _b.t, ok = _b.ok, err = _b.err;
                if (ok) {
                  if (pattern.length === 0 && t.length > 0) {
                    continue;
                  }
                  str = t;
                  continue Pattern;
                }
                if (err) {
                  return false;
                }
              }
            }
            return false;
          }
        return str.length === 0;
      }
      function scanChunk(pattern) {
        var result = {
          star: false,
          chunk: "",
          pattern: ""
        };
        while (pattern.length > 0 && pattern[0] === "*") {
          pattern = pattern.slice(1);
          result.star = true;
        }
        var inRange = false;
        var i;
        Scan:
          for (i = 0; i < pattern.length; i++) {
            switch (pattern[i]) {
              case "\\":
                if (i + 1 < pattern.length) {
                  i++;
                }
                break;
              case "[":
                inRange = true;
                break;
              case "]":
                inRange = false;
                break;
              case "*":
                if (!inRange) {
                  break Scan;
                }
            }
          }
        result.chunk = pattern.slice(0, i);
        result.pattern = pattern.slice(i);
        return result;
      }
      function matchChunk(chunk, str) {
        var _a, _b;
        var result = {
          t: "",
          ok: false,
          err: false
        };
        while (chunk.length > 0) {
          if (str.length === 0) {
            return result;
          }
          switch (chunk[0]) {
            case "[":
              var char = str[0];
              str = str.slice(1);
              chunk = chunk.slice(1);
              var notNegated = true;
              if (chunk.length > 0 && chunk[0] === "^") {
                notNegated = false;
                chunk = chunk.slice(1);
              }
              var foundMatch = false;
              var nRange = 0;
              while (true) {
                if (chunk.length > 0 && chunk[0] === "]" && nRange > 0) {
                  chunk = chunk.slice(1);
                  break;
                }
                var lo = "";
                var hi = "";
                var err = void 0;
                _a = getEsc(chunk), lo = _a.char, chunk = _a.newChunk, err = _a.err;
                if (err) {
                  return result;
                }
                hi = lo;
                if (chunk[0] === "-") {
                  ;
                  _b = getEsc(chunk.slice(1)), hi = _b.char, chunk = _b.newChunk, err = _b.err;
                  if (err) {
                    return result;
                  }
                }
                if (lo <= char && char <= hi) {
                  foundMatch = true;
                }
                nRange++;
              }
              if (foundMatch !== notNegated) {
                return result;
              }
              break;
            case "?":
              str = str.slice(1);
              chunk = chunk.slice(1);
              break;
            case "\\":
              chunk = chunk.slice(1);
              if (chunk.length === 0) {
                result.err = true;
                return result;
              }
            default:
              if (chunk[0] !== str[0]) {
                return result;
              }
              str = str.slice(1);
              chunk = chunk.slice(1);
          }
        }
        result.t = str;
        result.ok = true;
        result.err = false;
        return result;
      }
      function getEsc(chunk) {
        var result = {
          char: "",
          newChunk: "",
          err: false
        };
        if (chunk.length === 0 || chunk[0] === "-" || chunk[0] === "]") {
          result.err = true;
          return result;
        }
        if (chunk[0] === "\\") {
          chunk = chunk.slice(1);
          if (chunk.length === 0) {
            result.err = true;
            return result;
          }
        }
        result.char = chunk[0];
        result.newChunk = chunk.slice(1);
        if (result.newChunk.length === 0) {
          result.err = true;
        }
        return result;
      }
    }
  });

  // ../../node_modules/.pnpm/@segment+tsub@0.1.12/node_modules/@segment/tsub/dist/store.js
  var require_store = __commonJS({
    "../../node_modules/.pnpm/@segment+tsub@0.1.12/node_modules/@segment/tsub/dist/store.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      Object.defineProperty(exports, "__esModule", { value: true });
      var Store3 = function() {
        function Store4(rules) {
          this.rules = [];
          this.rules = rules || [];
        }
        Store4.prototype.getRulesByDestinationName = function(destinationName) {
          var rules = [];
          for (var _i = 0, _a = this.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            if (rule.destinationName === destinationName || rule.destinationName === void 0) {
              rules.push(rule);
            }
          }
          return rules;
        };
        return Store4;
      }();
      exports.default = Store3;
    }
  });

  // ../../node_modules/.pnpm/@segment+tsub@0.1.12/node_modules/@segment/tsub/dist/index.js
  var require_dist3 = __commonJS({
    "../../node_modules/.pnpm/@segment+tsub@0.1.12/node_modules/@segment/tsub/dist/index.js"(exports) {
      "use strict";
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Store = exports.matches = exports.transform = void 0;
      var transformers_1 = require_transformers();
      Object.defineProperty(exports, "transform", { enumerable: true, get: function() {
        return __importDefault2(transformers_1).default;
      } });
      var matchers_1 = require_matchers();
      Object.defineProperty(exports, "matches", { enumerable: true, get: function() {
        return __importDefault2(matchers_1).default;
      } });
      var store_1 = require_store();
      Object.defineProperty(exports, "Store", { enumerable: true, get: function() {
        return __importDefault2(store_1).default;
      } });
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/routing-middleware/index.js
  var tsub, tsubMiddleware;
  var init_routing_middleware = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/routing-middleware/index.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      tsub = __toESM(require_dist3());
      tsubMiddleware = function(rules) {
        return function(_a) {
          var payload = _a.payload, integration = _a.integration, next = _a.next;
          var store = new tsub.Store(rules);
          var rulesToApply = store.getRulesByDestinationName(integration);
          rulesToApply.forEach(function(rule) {
            var matchers = rule.matchers, transformers = rule.transformers;
            for (var i = 0; i < matchers.length; i++) {
              if (tsub.matches(payload.obj, matchers[i])) {
                payload.obj = tsub.transform(payload.obj, transformers[i]);
                if (payload.obj === null) {
                  return next(null);
                }
              }
            }
          });
          next(payload);
        };
      };
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/ajs-destination/loader.js
  function normalizeName(name) {
    return name.toLowerCase().replace(".", "").replace(/\s+/g, "-");
  }
  function obfuscatePathName(pathName, obfuscate) {
    if (obfuscate === void 0) {
      obfuscate = false;
    }
    return obfuscate ? btoa(pathName).replace(/=/g, "") : void 0;
  }
  function recordLoadMetrics(fullPath, ctx, name) {
    var _a, _b;
    try {
      var metric = ((_b = (_a = window === null || window === void 0 ? void 0 : window.performance) === null || _a === void 0 ? void 0 : _a.getEntriesByName(fullPath, "resource")) !== null && _b !== void 0 ? _b : [])[0];
      metric && ctx.stats.gauge("legacy_destination_time", Math.round(metric.duration), __spreadArray([
        name
      ], metric.duration < 100 ? ["cached"] : [], true));
    } catch (_) {
    }
  }
  function loadIntegration(ctx, analyticsInstance, name, version2, settings, obfuscate) {
    return __awaiter(this, void 0, void 0, function() {
      var pathName, obfuscatedPathName, path, fullPath, err_1, deps, integrationBuilder, analyticsStub, integration;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            pathName = normalizeName(name);
            obfuscatedPathName = obfuscatePathName(pathName, obfuscate);
            path = getNextIntegrationsURL();
            fullPath = "".concat(path, "/integrations/").concat(obfuscatedPathName !== null && obfuscatedPathName !== void 0 ? obfuscatedPathName : pathName, "/").concat(version2, "/").concat(obfuscatedPathName !== null && obfuscatedPathName !== void 0 ? obfuscatedPathName : pathName, ".dynamic.js.gz");
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            return [4, loadScript(fullPath)];
          case 2:
            _a.sent();
            recordLoadMetrics(fullPath, ctx, name);
            return [3, 4];
          case 3:
            err_1 = _a.sent();
            ctx.stats.gauge("legacy_destination_time", -1, ["plugin:".concat(name), "failed"]);
            throw err_1;
          case 4:
            deps = window["".concat(pathName, "Deps")];
            return [
              4,
              Promise.all(deps.map(function(dep) {
                return loadScript(path + dep + ".gz");
              }))
            ];
          case 5:
            _a.sent();
            window["".concat(pathName, "Loader")]();
            integrationBuilder = window["".concat(pathName, "Integration")];
            if (integrationBuilder.Integration) {
              analyticsStub = {
                user: function() {
                  return analyticsInstance.user();
                },
                addIntegration: function() {
                }
              };
              integrationBuilder(analyticsStub);
              integrationBuilder = integrationBuilder.Integration;
            }
            integration = new integrationBuilder(settings);
            integration.analytics = analyticsInstance;
            return [2, integration];
        }
      });
    });
  }
  function unloadIntegration(name, version2, obfuscate) {
    return __awaiter(this, void 0, void 0, function() {
      var path, pathName, obfuscatedPathName, fullPath;
      return __generator(this, function(_a) {
        path = getNextIntegrationsURL();
        pathName = normalizeName(name);
        obfuscatedPathName = obfuscatePathName(name, obfuscate);
        fullPath = "".concat(path, "/integrations/").concat(obfuscatedPathName !== null && obfuscatedPathName !== void 0 ? obfuscatedPathName : pathName, "/").concat(version2, "/").concat(obfuscatedPathName !== null && obfuscatedPathName !== void 0 ? obfuscatedPathName : pathName, ".dynamic.js.gz");
        return [2, unloadScript(fullPath)];
      });
    });
  }
  function resolveVersion(settings) {
    var _a, _b, _c, _d;
    return (_d = (_b = (_a = settings.versionSettings) === null || _a === void 0 ? void 0 : _a.override) !== null && _b !== void 0 ? _b : (_c = settings.versionSettings) === null || _c === void 0 ? void 0 : _c.version) !== null && _d !== void 0 ? _d : "latest";
  }
  var init_loader = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/ajs-destination/loader.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_modules();
      init_parse_cdn();
      init_load_script();
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/ajs-destination/index.js
  var ajs_destination_exports = {};
  __export(ajs_destination_exports, {
    LegacyDestination: () => LegacyDestination,
    ajsDestinations: () => ajsDestinations
  });
  function flushQueue2(xt, queue) {
    return __awaiter(this, void 0, void 0, function() {
      var failedQueue;
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            failedQueue = [];
            if (isOffline()) {
              return [2, queue];
            }
            return [
              4,
              pWhile(function() {
                return queue.length > 0 && isOnline();
              }, function() {
                return __awaiter(_this, void 0, void 0, function() {
                  var ctx, result, success;
                  return __generator(this, function(_a2) {
                    switch (_a2.label) {
                      case 0:
                        ctx = queue.pop();
                        if (!ctx) {
                          return [2];
                        }
                        return [4, attempt(ctx, xt)];
                      case 1:
                        result = _a2.sent();
                        success = result instanceof Context;
                        if (!success) {
                          failedQueue.push(ctx);
                        }
                        return [2];
                    }
                  });
                });
              })
            ];
          case 1:
            _a.sent();
            failedQueue.map(function(failed) {
              return queue.pushWithBackoff(failed);
            });
            return [2, queue];
        }
      });
    });
  }
  function ajsDestinations(settings, globalIntegrations, options) {
    var _a, _b;
    if (globalIntegrations === void 0) {
      globalIntegrations = {};
    }
    if (options === void 0) {
      options = {};
    }
    if (isServer()) {
      return [];
    }
    if (settings.plan) {
      options = options !== null && options !== void 0 ? options : {};
      options.plan = settings.plan;
    }
    var routingRules = (_b = (_a = settings.middlewareSettings) === null || _a === void 0 ? void 0 : _a.routingRules) !== null && _b !== void 0 ? _b : [];
    var routingMiddleware = tsubMiddleware(routingRules);
    var integrationOptions = mergedOptions(settings, options !== null && options !== void 0 ? options : {});
    return Object.entries(settings.integrations).map(function(_a2) {
      var _b2;
      var name = _a2[0], integrationSettings = _a2[1];
      if (name.startsWith("Segment")) {
        return;
      }
      var allDisableAndNotDefined = globalIntegrations.All === false && globalIntegrations[name] === void 0;
      if (globalIntegrations[name] === false || allDisableAndNotDefined) {
        return;
      }
      var type = integrationSettings.type, bundlingStatus = integrationSettings.bundlingStatus, versionSettings = integrationSettings.versionSettings;
      var deviceMode = bundlingStatus !== "unbundled" && (type === "browser" || ((_b2 = versionSettings === null || versionSettings === void 0 ? void 0 : versionSettings.componentTypes) === null || _b2 === void 0 ? void 0 : _b2.includes("browser")));
      if (!deviceMode && name !== "Segment.io" || name === "Iterable") {
        return;
      }
      var version2 = resolveVersion(integrationSettings);
      var destination = new LegacyDestination(name, version2, integrationOptions[name], options);
      var routing = routingRules.filter(function(rule) {
        return rule.destinationName === name;
      });
      if (routing.length > 0) {
        destination.addMiddleware(routingMiddleware);
      }
      return destination;
    }).filter(function(xt) {
      return xt !== void 0;
    });
  }
  var import_facade2, klona, LegacyDestination;
  var init_ajs_destination = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/ajs-destination/index.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_modules();
      import_facade2 = __toESM(require_dist());
      init_connection();
      init_context();
      init_environment();
      init_delivery();
      init_as_promise();
      init_is_plan_event_enabled();
      init_merged_options();
      init_p_while();
      init_priority_queue();
      init_persisted();
      init_middleware();
      init_routing_middleware();
      init_loader();
      klona = function(evt) {
        return JSON.parse(JSON.stringify(evt));
      };
      LegacyDestination = function() {
        function LegacyDestination2(name, version2, settings, options) {
          if (settings === void 0) {
            settings = {};
          }
          this.options = {};
          this.type = "destination";
          this.middleware = [];
          this._ready = false;
          this._initialized = false;
          this.flushing = false;
          this.name = name;
          this.version = version2;
          this.settings = __assign({}, settings);
          if (this.settings["type"] && this.settings["type"] === "browser") {
            delete this.settings["type"];
          }
          this.options = options;
          this.buffer = options.disableClientPersistence ? new PriorityQueue(4, []) : new PersistedPriorityQueue(4, "dest-".concat(name));
          this.scheduleFlush();
        }
        LegacyDestination2.prototype.isLoaded = function() {
          return this._ready;
        };
        LegacyDestination2.prototype.ready = function() {
          var _a;
          return (_a = this.onReady) !== null && _a !== void 0 ? _a : Promise.resolve();
        };
        LegacyDestination2.prototype.load = function(ctx, analyticsInstance) {
          return __awaiter(this, void 0, void 0, function() {
            var _a;
            var _this = this;
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  if (this._ready || this.onReady !== void 0) {
                    return [2];
                  }
                  _a = this;
                  return [4, loadIntegration(ctx, analyticsInstance, this.name, this.version, this.settings, this.options.obfuscate)];
                case 1:
                  _a.integration = _b.sent();
                  this.onReady = new Promise(function(resolve) {
                    var onReadyFn = function() {
                      _this._ready = true;
                      resolve(true);
                    };
                    _this.integration.once("ready", onReadyFn);
                  });
                  this.onInitialize = new Promise(function(resolve) {
                    var onInit = function() {
                      _this._initialized = true;
                      resolve(true);
                    };
                    _this.integration.on("initialize", onInit);
                  });
                  try {
                    ctx.stats.increment("analytics_js.integration.invoke", 1, [
                      "method:initialize",
                      "integration_name:".concat(this.name)
                    ]);
                    this.integration.initialize();
                  } catch (error) {
                    ctx.stats.increment("analytics_js.integration.invoke.error", 1, [
                      "method:initialize",
                      "integration_name:".concat(this.name)
                    ]);
                    throw error;
                  }
                  return [2];
              }
            });
          });
        };
        LegacyDestination2.prototype.unload = function(_ctx, _analyticsInstance) {
          return unloadIntegration(this.name, this.version, this.options.obfuscate);
        };
        LegacyDestination2.prototype.addMiddleware = function() {
          var _a;
          var fn = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            fn[_i] = arguments[_i];
          }
          this.middleware = (_a = this.middleware).concat.apply(_a, fn);
        };
        LegacyDestination2.prototype.shouldBuffer = function(ctx) {
          return ctx.event.type !== "page" && (isOffline() || this._ready === false || this._initialized === false);
        };
        LegacyDestination2.prototype.send = function(ctx, clz, eventType) {
          var _a, _b;
          return __awaiter(this, void 0, void 0, function() {
            var plan, ev, planEvent, afterMiddleware, event, err_1;
            return __generator(this, function(_c) {
              switch (_c.label) {
                case 0:
                  if (this.shouldBuffer(ctx)) {
                    this.buffer.push(ctx);
                    this.scheduleFlush();
                    return [2, ctx];
                  }
                  plan = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.plan) === null || _b === void 0 ? void 0 : _b.track;
                  ev = ctx.event.event;
                  if (plan && ev && this.name !== "Segment.io") {
                    planEvent = plan[ev];
                    if (!isPlanEventEnabled(plan, planEvent)) {
                      ctx.updateEvent("integrations", __assign(__assign({}, ctx.event.integrations), { All: false, "Segment.io": true }));
                      ctx.cancel(new ContextCancelation({
                        retry: false,
                        reason: "Event ".concat(ev, " disabled for integration ").concat(this.name, " in tracking plan"),
                        type: "Dropped by plan"
                      }));
                      return [2, ctx];
                    } else {
                      ctx.updateEvent("integrations", __assign(__assign({}, ctx.event.integrations), planEvent === null || planEvent === void 0 ? void 0 : planEvent.integrations));
                    }
                    if ((planEvent === null || planEvent === void 0 ? void 0 : planEvent.enabled) && (planEvent === null || planEvent === void 0 ? void 0 : planEvent.integrations[this.name]) === false) {
                      ctx.cancel(new ContextCancelation({
                        retry: false,
                        reason: "Event ".concat(ev, " disabled for integration ").concat(this.name, " in tracking plan"),
                        type: "Dropped by plan"
                      }));
                      return [2, ctx];
                    }
                  }
                  return [4, applyDestinationMiddleware(this.name, klona(ctx.event), this.middleware)];
                case 1:
                  afterMiddleware = _c.sent();
                  if (afterMiddleware === null) {
                    return [2, ctx];
                  }
                  event = new clz(afterMiddleware, {});
                  ctx.stats.increment("analytics_js.integration.invoke", 1, [
                    "method:".concat(eventType),
                    "integration_name:".concat(this.name)
                  ]);
                  _c.label = 2;
                case 2:
                  _c.trys.push([2, 5, , 6]);
                  if (!this.integration)
                    return [3, 4];
                  return [4, asPromise(this.integration.invoke.call(this.integration, eventType, event))];
                case 3:
                  _c.sent();
                  _c.label = 4;
                case 4:
                  return [3, 6];
                case 5:
                  err_1 = _c.sent();
                  ctx.stats.increment("analytics_js.integration.invoke.error", 1, [
                    "method:".concat(eventType),
                    "integration_name:".concat(this.name)
                  ]);
                  throw err_1;
                case 6:
                  return [2, ctx];
              }
            });
          });
        };
        LegacyDestination2.prototype.track = function(ctx) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              return [2, this.send(ctx, import_facade2.Track, "track")];
            });
          });
        };
        LegacyDestination2.prototype.page = function(ctx) {
          var _a;
          return __awaiter(this, void 0, void 0, function() {
            var _this = this;
            return __generator(this, function(_b) {
              if (((_a = this.integration) === null || _a === void 0 ? void 0 : _a._assumesPageview) && !this._initialized) {
                this.integration.initialize();
              }
              return [2, this.onInitialize.then(function() {
                return _this.send(ctx, import_facade2.Page, "page");
              })];
            });
          });
        };
        LegacyDestination2.prototype.identify = function(ctx) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              return [2, this.send(ctx, import_facade2.Identify, "identify")];
            });
          });
        };
        LegacyDestination2.prototype.alias = function(ctx) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              return [2, this.send(ctx, import_facade2.Alias, "alias")];
            });
          });
        };
        LegacyDestination2.prototype.group = function(ctx) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              return [2, this.send(ctx, import_facade2.Group, "group")];
            });
          });
        };
        LegacyDestination2.prototype.scheduleFlush = function() {
          var _this = this;
          if (this.flushing) {
            return;
          }
          setTimeout(function() {
            return __awaiter(_this, void 0, void 0, function() {
              var _a;
              return __generator(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    this.flushing = true;
                    _a = this;
                    return [4, flushQueue2(this, this.buffer)];
                  case 1:
                    _a.buffer = _b.sent();
                    this.flushing = false;
                    if (this.buffer.todo > 0) {
                      this.scheduleFlush();
                    }
                    return [2];
                }
              });
            });
          }, Math.random() * 5e3);
        };
        return LegacyDestination2;
      }();
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics.js-video-plugins@0.2.1/node_modules/@segment/analytics.js-video-plugins/dist/index.umd.js
  var require_index_umd = __commonJS({
    "../../node_modules/.pnpm/@segment+analytics.js-video-plugins@0.2.1/node_modules/@segment/analytics.js-video-plugins/dist/index.umd.js"(exports, module) {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      !function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.analyticsVideoPlugins = t() : e.analyticsVideoPlugins = t();
      }(window, function() {
        return function(e) {
          var t = {};
          function a(n) {
            if (t[n])
              return t[n].exports;
            var i = t[n] = { i: n, l: false, exports: {} };
            return e[n].call(i.exports, i, i.exports, a), i.l = true, i.exports;
          }
          return a.m = e, a.c = t, a.d = function(e2, t2, n) {
            a.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: n });
          }, a.r = function(e2) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
          }, a.t = function(e2, t2) {
            if (1 & t2 && (e2 = a(e2)), 8 & t2)
              return e2;
            if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
              return e2;
            var n = /* @__PURE__ */ Object.create(null);
            if (a.r(n), Object.defineProperty(n, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
              for (var i in e2)
                a.d(n, i, function(t3) {
                  return e2[t3];
                }.bind(null, i));
            return n;
          }, a.n = function(e2) {
            var t2 = e2 && e2.__esModule ? function() {
              return e2.default;
            } : function() {
              return e2;
            };
            return a.d(t2, "a", t2), t2;
          }, a.o = function(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          }, a.p = "", a(a.s = 2);
        }([function(e, t, a) {
          "use strict";
          a.r(t);
          var n = "function" == typeof fetch ? fetch.bind() : function(e2, t2) {
            return t2 = t2 || {}, new Promise(function(a2, n2) {
              var i = new XMLHttpRequest();
              for (var r in i.open(t2.method || "get", e2, true), t2.headers)
                i.setRequestHeader(r, t2.headers[r]);
              function o() {
                var e3, t3 = [], a3 = [], n3 = {};
                return i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(i2, r2, o2) {
                  t3.push(r2 = r2.toLowerCase()), a3.push([r2, o2]), e3 = n3[r2], n3[r2] = e3 ? e3 + "," + o2 : o2;
                }), { ok: 2 == (i.status / 100 | 0), status: i.status, statusText: i.statusText, url: i.responseURL, clone: o, text: function() {
                  return Promise.resolve(i.responseText);
                }, json: function() {
                  return Promise.resolve(i.responseText).then(JSON.parse);
                }, blob: function() {
                  return Promise.resolve(new Blob([i.response]));
                }, headers: { keys: function() {
                  return t3;
                }, entries: function() {
                  return a3;
                }, get: function(e4) {
                  return n3[e4.toLowerCase()];
                }, has: function(e4) {
                  return e4.toLowerCase() in n3;
                } } };
              }
              i.withCredentials = "include" == t2.credentials, i.onload = function() {
                a2(o());
              }, i.onerror = n2, i.send(t2.body);
            });
          };
          t.default = n;
        }, function(e, t, a) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = function() {
            function e2(e3, t2) {
              for (var a2 = 0; a2 < t2.length; a2++) {
                var n2 = t2[a2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e3, n2.key, n2);
              }
            }
            return function(t2, a2, n2) {
              return a2 && e2(t2.prototype, a2), n2 && e2(t2, n2), t2;
            };
          }();
          var i = function() {
            function e2(t2, a2) {
              !function(e3, t3) {
                if (!(e3 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2), this.pluginName = t2;
            }
            return n(e2, [{ key: "track", value: function(e3, t2) {
              window.analytics.track(e3, t2, { integration: { name: this.pluginName } });
            } }]), e2;
          }();
          t.default = i;
        }, function(e, t, a) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.YouTubeAnalytics = t.VimeoAnalytics = void 0;
          var n = r(a(3)), i = r(a(4));
          function r(e2) {
            return e2 && e2.__esModule ? e2 : { default: e2 };
          }
          t.VimeoAnalytics = n.default, t.YouTubeAnalytics = i.default;
        }, function(e, t, a) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = function() {
            function e2(e3, t2) {
              for (var a2 = 0; a2 < t2.length; a2++) {
                var n2 = t2[a2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e3, n2.key, n2);
              }
            }
            return function(t2, a2, n2) {
              return a2 && e2(t2.prototype, a2), n2 && e2(t2, n2), t2;
            };
          }(), i = r(a(0));
          function r(e2) {
            return e2 && e2.__esModule ? e2 : { default: e2 };
          }
          var o = function(e2) {
            function t2(e3, a2) {
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var n2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, "VimeoAnalytics"));
              return n2.authToken = a2, n2.player = e3, n2.metadata = { content: {}, playback: { videoPlayer: "Vimeo" } }, n2.mostRecentHeartbeat = 0, n2.isPaused = false, n2;
            }
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, e2), n(t2, [{ key: "initialize", value: function() {
              var e3 = this, t3 = { loaded: this.retrieveMetadata, play: this.trackPlay, pause: this.trackPause, ended: this.trackEnded, timeupdate: this.trackHeartbeat };
              for (var a2 in t3)
                this.registerHandler(a2, t3[a2]);
              this.player.getVideoId().then(function(t4) {
                e3.retrieveMetadata({ id: t4 });
              }).catch(console.error);
            } }, { key: "registerHandler", value: function(e3, t3) {
              var a2 = this;
              this.player.on(e3, function(e4) {
                a2.updateMetadata(e4), t3.call(a2, e4);
              });
            } }, { key: "trackPlay", value: function() {
              this.isPaused ? (this.track("Video Playback Resumed", this.metadata.playback), this.isPaused = false) : (this.track("Video Playback Started", this.metadata.playback), this.track("Video Content Started", this.metadata.content));
            } }, { key: "trackEnded", value: function() {
              this.track("Video Playback Completed", this.metadata.playback), this.track("Video Content Completed", this.metadata.content);
            } }, { key: "trackHeartbeat", value: function() {
              var e3 = this.mostRecentHeartbeat, t3 = this.metadata.playback.position;
              t3 !== e3 && t3 - e3 >= 10 && (this.track("Video Content Playing", this.metadata.content), this.mostRecentHeartbeat = Math.floor(t3));
            } }, { key: "trackPause", value: function() {
              this.isPaused = true, this.track("Video Playback Paused", this.metadata.playback);
            } }, { key: "retrieveMetadata", value: function(e3) {
              var t3 = this;
              return new Promise(function(a2, n2) {
                var r2 = e3.id;
                (0, i.default)("https://api.vimeo.com/videos/" + r2, { headers: { Authorization: "Bearer " + t3.authToken } }).then(function(e4) {
                  return e4.ok ? e4.json() : n2(e4);
                }).then(function(e4) {
                  t3.metadata.content.title = e4.name, t3.metadata.content.description = e4.description, t3.metadata.content.publisher = e4.user.name, t3.metadata.playback.position = 0, t3.metadata.playback.totalLength = e4.duration;
                }).catch(function(e4) {
                  return console.error("Request to Vimeo API Failed with: ", e4), n2(e4);
                });
              });
            } }, { key: "updateMetadata", value: function(e3) {
              var t3 = this;
              return new Promise(function(a2, n2) {
                t3.player.getVolume().then(function(n3) {
                  n3 && (t3.metadata.playback.sound = 100 * n3), t3.metadata.playback.position = e3.seconds, a2();
                }).catch(n2);
              });
            } }]), t2;
          }(r(a(1)).default);
          t.default = o;
        }, function(e, t, a) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = function() {
            function e2(e3, t2) {
              for (var a2 = 0; a2 < t2.length; a2++) {
                var n2 = t2[a2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e3, n2.key, n2);
              }
            }
            return function(t2, a2, n2) {
              return a2 && e2(t2.prototype, a2), n2 && e2(t2, n2), t2;
            };
          }(), i = o(a(0)), r = o(a(1));
          function o(e2) {
            return e2 && e2.__esModule ? e2 : { default: e2 };
          }
          var s = function(e2) {
            function t2(e3, a2) {
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var n2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, "YoutubeAnalytics"));
              return n2.player = e3, n2.apiKey = a2, n2.playerLoaded = false, n2.playbackStarted = false, n2.contentStarted = false, n2.isPaused = false, n2.isBuffering = false, n2.isSeeking = false, n2.lastRecordedTime = { timeReported: Date.now(), timeElapsed: 0 }, n2.metadata = [{ playback: { video_player: "youtube" }, content: {} }], n2.playlistIndex = 0, n2;
            }
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, e2), n(t2, [{ key: "initialize", value: function() {
              window.segmentYoutubeOnStateChange = this.onPlayerStateChange.bind(this), window.segmentYoutubeOnReady = this.onPlayerReady.bind(this), this.player.addEventListener("onReady", "segmentYoutubeOnReady"), this.player.addEventListener("onStateChange", "segmentYoutubeOnStateChange");
            } }, { key: "onPlayerReady", value: function(e3) {
              this.retrieveMetadata();
            } }, { key: "onPlayerStateChange", value: function(e3) {
              var t3 = this.player.getCurrentTime();
              switch (this.metadata[this.playlistIndex] && (this.metadata[this.playlistIndex].playback.position = this.metadata[this.playlistIndex].content.position = t3, this.metadata[this.playlistIndex].playback.quality = this.player.getPlaybackQuality(), this.metadata[this.playlistIndex].playback.sound = this.player.isMuted() ? 0 : this.player.getVolume()), e3.data) {
                case -1:
                  if (this.playerLoaded)
                    break;
                  this.retrieveMetadata(), this.playerLoaded = true;
                  break;
                case YT.PlayerState.BUFFERING:
                  this.handleBuffer();
                  break;
                case YT.PlayerState.PLAYING:
                  this.handlePlay();
                  break;
                case YT.PlayerState.PAUSED:
                  this.handlePause();
                  break;
                case YT.PlayerState.ENDED:
                  this.handleEnd();
              }
              this.lastRecordedTime = { timeReported: Date.now(), timeElapsed: 1e3 * this.player.getCurrentTime() };
            } }, { key: "retrieveMetadata", value: function() {
              var e3 = this;
              return new Promise(function(t3, a2) {
                var n2 = e3.player.getVideoData(), r2 = e3.player.getPlaylist() || [n2.video_id], o2 = r2.join();
                (0, i.default)("https://www.googleapis.com/youtube/v3/videos?id=" + o2 + "&part=snippet,contentDetails&key=" + e3.apiKey).then(function(e4) {
                  if (!e4.ok) {
                    var t4 = new Error("Segment request to Youtube API failed (likely due to a bad API Key. Events will still be sent but will not contain video metadata)");
                    throw t4.response = e4, t4;
                  }
                  return e4.json();
                }).then(function(a3) {
                  e3.metadata = [];
                  for (var n3 = 0, i2 = 0; i2 < r2.length; i2++) {
                    var o3 = a3.items[i2];
                    e3.metadata.push({ content: { title: o3.snippet.title, description: o3.snippet.description, keywords: o3.snippet.tags, channel: o3.snippet.channelTitle, airdate: o3.snippet.publishedAt } }), n3 += l(o3.contentDetails.duration);
                  }
                  for (i2 = 0; i2 < r2.length; i2++)
                    e3.metadata[i2].playback = { total_length: n3, video_player: "youtube" };
                  t3();
                }).catch(function(t4) {
                  e3.metadata = r2.map(function(e4) {
                    return { playback: { video_player: "youtube" }, content: {} };
                  }), a2(t4);
                });
              });
            } }, { key: "handleBuffer", value: function() {
              var e3 = this.determineSeek();
              this.playbackStarted || (this.playbackStarted = true, this.track("Video Playback Started", this.metadata[this.playlistIndex].playback)), e3 && !this.isSeeking && (this.isSeeking = true, this.track("Video Playback Seek Started", this.metadata[this.playlistIndex].playback)), this.isSeeking && (this.track("Video Playback Seek Completed", this.metadata[this.playlistIndex].playback), this.isSeeking = false);
              var t3 = this.player.getPlaylist();
              t3 && 0 === this.player.getCurrentTime() && this.player.getPlaylistIndex() !== this.playlistIndex && (this.contentStarted = false, this.playlistIndex === t3.length - 1 && 0 === this.player.getPlaylistIndex() && (this.track("Video Playback Completed", this.metadata[this.player.getPlaylistIndex()].playback), this.track("Video Playback Started", this.metadata[this.player.getPlaylistIndex()].playback))), this.track("Video Playback Buffer Started", this.metadata[this.playlistIndex].playback), this.isBuffering = true;
            } }, { key: "handlePlay", value: function() {
              this.contentStarted || (this.playlistIndex = this.player.getPlaylistIndex(), -1 === this.playlistIndex && (this.playlistIndex = 0), this.track("Video Content Started", this.metadata[this.playlistIndex].content), this.contentStarted = true), this.isBuffering && (this.track("Video Playback Buffer Completed", this.metadata[this.playlistIndex].playback), this.isBuffering = false), this.isPaused && (this.track("Video Playback Resumed", this.metadata[this.playlistIndex].playback), this.isPaused = false);
            } }, { key: "handlePause", value: function() {
              var e3 = this.determineSeek();
              this.isBuffering && (this.track("Video Playback Buffer Completed", this.metadata[this.playlistIndex].playback), this.isBuffering = false), this.isPaused || (e3 ? (this.track("Video Playback Seek Started", this.metadata[this.playlistIndex].playback), this.isSeeking = true) : (this.track("Video Playback Paused", this.metadata[this.playlistIndex].playback), this.isPaused = true));
            } }, { key: "handleEnd", value: function() {
              this.track("Video Content Completed", this.metadata[this.playlistIndex].content), this.contentStarted = false;
              var e3 = this.player.getPlaylistIndex(), t3 = this.player.getPlaylist();
              (t3 && e3 === t3.length - 1 || -1 === e3) && (this.track("Video Playback Completed", this.metadata[this.playlistIndex].playback), this.playbackStarted = false);
            } }, { key: "determineSeek", value: function() {
              var e3 = this.isPaused || this.isBuffering ? 0 : Date.now() - this.lastRecordedTime.timeReported, t3 = 1e3 * this.player.getCurrentTime() - this.lastRecordedTime.timeElapsed;
              return Math.abs(e3 - t3) > 2e3;
            } }]), t2;
          }(r.default);
          function l(e2) {
            var t2 = e2.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
            return t2 = t2.slice(1).map(function(e3) {
              if (null != e3)
                return e3.replace(/\D/, "");
            }), 3600 * (parseInt(t2[0]) || 0) + 60 * (parseInt(t2[1]) || 0) + (parseInt(t2[2]) || 0);
          }
          t.default = s;
        }]);
      });
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/legacy-video-plugins/index.js
  var legacy_video_plugins_exports = {};
  __export(legacy_video_plugins_exports, {
    loadLegacyVideoPlugins: () => loadLegacyVideoPlugins
  });
  function loadLegacyVideoPlugins(analytics) {
    return __awaiter(this, void 0, void 0, function() {
      var plugins;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              Promise.resolve().then(() => __toESM(require_index_umd()))
            ];
          case 1:
            plugins = _a.sent();
            analytics._plugins = plugins;
            return [2];
        }
      });
    });
  }
  var init_legacy_video_plugins = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/legacy-video-plugins/index.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_modules();
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/schema-filter/index.js
  var schema_filter_exports = {};
  __export(schema_filter_exports, {
    schemaFilter: () => schemaFilter
  });
  function disabledActionDestinations(plan, settings) {
    var _a, _b;
    if (!plan || !Object.keys(plan)) {
      return {};
    }
    var disabledIntegrations = Object.keys(plan.integrations).filter(function(i) {
      return plan.integrations[i] === false;
    });
    var disabledRemotePlugins = [];
    ((_a = settings.remotePlugins) !== null && _a !== void 0 ? _a : []).forEach(function(p) {
      disabledIntegrations.forEach(function(int) {
        if (p.name.includes(int) || int.includes(p.name)) {
          disabledRemotePlugins.push(p.name);
        }
      });
    });
    return ((_b = settings.remotePlugins) !== null && _b !== void 0 ? _b : []).reduce(function(acc, p) {
      if (p.settings["subscriptions"]) {
        if (disabledRemotePlugins.includes(p.name)) {
          p.settings["subscriptions"].forEach(function(sub) {
            return acc["".concat(p.name, " ").concat(sub.partnerAction)] = false;
          });
        }
      }
      return acc;
    }, {});
  }
  function schemaFilter(track, settings) {
    function filter(ctx) {
      var plan = track;
      var ev = ctx.event.event;
      if (plan && ev) {
        var planEvent = plan[ev];
        if (!isPlanEventEnabled(plan, planEvent)) {
          ctx.updateEvent("integrations", __assign(__assign({}, ctx.event.integrations), { All: false, "Segment.io": true }));
          return ctx;
        } else {
          var disabledActions = disabledActionDestinations(planEvent, settings);
          ctx.updateEvent("integrations", __assign(__assign(__assign({}, ctx.event.integrations), planEvent === null || planEvent === void 0 ? void 0 : planEvent.integrations), disabledActions));
        }
      }
      return ctx;
    }
    return {
      name: "Schema Filter",
      version: "0.1.0",
      isLoaded: function() {
        return true;
      },
      load: function() {
        return Promise.resolve();
      },
      type: "before",
      page: filter,
      alias: filter,
      track: filter,
      identify: filter,
      group: filter
    };
  }
  var init_schema_filter = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/schema-filter/index.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_modules();
      init_is_plan_event_enabled();
    }
  });

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/remote-middleware/index.js
  var remote_middleware_exports = {};
  __export(remote_middleware_exports, {
    remoteMiddlewares: () => remoteMiddlewares
  });
  function remoteMiddlewares(ctx, settings, obfuscate) {
    var _a;
    return __awaiter(this, void 0, void 0, function() {
      var path, remoteMiddleware, names, scripts, middleware;
      var _this = this;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            if (isServer()) {
              return [2, []];
            }
            path = getNextIntegrationsURL();
            remoteMiddleware = (_a = settings.enabledMiddleware) !== null && _a !== void 0 ? _a : {};
            names = Object.entries(remoteMiddleware).filter(function(_a2) {
              var _ = _a2[0], enabled = _a2[1];
              return enabled;
            }).map(function(_a2) {
              var name = _a2[0];
              return name;
            });
            scripts = names.map(function(name) {
              return __awaiter(_this, void 0, void 0, function() {
                var nonNamespaced, bundleName, fullPath, error_1;
                return __generator(this, function(_a2) {
                  switch (_a2.label) {
                    case 0:
                      nonNamespaced = name.replace("@segment/", "");
                      bundleName = nonNamespaced;
                      if (obfuscate) {
                        bundleName = btoa(nonNamespaced).replace(/=/g, "");
                      }
                      fullPath = "".concat(path, "/middleware/").concat(bundleName, "/latest/").concat(bundleName, ".js.gz");
                      _a2.label = 1;
                    case 1:
                      _a2.trys.push([1, 3, , 4]);
                      return [
                        4,
                        loadScript(fullPath)
                      ];
                    case 2:
                      _a2.sent();
                      return [2, window["".concat(nonNamespaced, "Middleware")]];
                    case 3:
                      error_1 = _a2.sent();
                      ctx.log("error", error_1);
                      ctx.stats.increment("failed_remote_middleware");
                      return [3, 4];
                    case 4:
                      return [2];
                  }
                });
              });
            });
            return [4, Promise.all(scripts)];
          case 1:
            middleware = _b.sent();
            middleware = middleware.filter(Boolean);
            return [2, middleware];
        }
      });
    });
  }
  var init_remote_middleware = __esm({
    "../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/remote-middleware/index.js"() {
      init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
      init_define_OS_ENV_SEGMENT_SETTINGS();
      init_modules();
      init_environment();
      init_load_script();
      init_parse_cdn();
    }
  });

  // src/browser/index.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/analytics/index.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  init_modules();

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/arguments-resolver/index.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/validation/index.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  init_modules();
  function isString(obj) {
    return typeof obj === "string";
  }
  function isNumber(obj) {
    return typeof obj === "number";
  }
  function isFunction(obj) {
    return typeof obj === "function";
  }
  function isPlainObject(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === "object";
  }
  function hasUser(event) {
    var _a, _b, _c;
    var id = (_c = (_b = (_a = event.userId) !== null && _a !== void 0 ? _a : event.anonymousId) !== null && _b !== void 0 ? _b : event.groupId) !== null && _c !== void 0 ? _c : event.previousId;
    return isString(id);
  }
  var ValidationError = function(_super) {
    __extends(ValidationError2, _super);
    function ValidationError2(field, message) {
      var _this = _super.call(this, message) || this;
      _this.field = field;
      return _this;
    }
    return ValidationError2;
  }(Error);
  function validate(ctx) {
    var _a;
    var eventType = ctx && ctx.event && ctx.event.type;
    var event = ctx.event;
    if (event === void 0) {
      throw new ValidationError("event", "Event is missing");
    }
    if (!isString(eventType)) {
      throw new ValidationError("event", "Event is not a string");
    }
    if (eventType === "track" && !isString(event.event)) {
      throw new ValidationError("event", "Event is not a string");
    }
    var props = (_a = event.properties) !== null && _a !== void 0 ? _a : event.traits;
    if (eventType !== "alias" && !isPlainObject(props)) {
      throw new ValidationError("properties", "properties is not an object");
    }
    if (!hasUser(event)) {
      throw new ValidationError("userId", "Missing userId or anonymousId");
    }
    return ctx;
  }
  var validation = {
    name: "Event Validation",
    type: "before",
    version: "1.0.0",
    isLoaded: function() {
      return true;
    },
    load: function() {
      return Promise.resolve();
    },
    track: validate,
    identify: validate,
    page: validate,
    alias: validate,
    group: validate,
    screen: validate
  };

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/arguments-resolver/index.js
  function resolveArguments(eventName, properties, options, callback) {
    var _a;
    var args = [eventName, properties, options, callback];
    var name = isPlainObject(eventName) ? eventName.event : eventName;
    if (!name || !isString(name)) {
      throw new Error("Event missing");
    }
    var data = isPlainObject(eventName) ? (_a = eventName.properties) !== null && _a !== void 0 ? _a : {} : isPlainObject(properties) ? properties : {};
    var opts = {};
    if (isPlainObject(properties) && !isFunction(options)) {
      opts = options !== null && options !== void 0 ? options : {};
    }
    if (isPlainObject(eventName) && !isFunction(properties)) {
      opts = properties !== null && properties !== void 0 ? properties : {};
    }
    var cb = args.find(isFunction);
    return [name, data, opts, cb];
  }
  function resolvePageArguments(category, name, properties, options, callback) {
    var _a, _b;
    var resolvedCategory = null;
    var resolvedName = null;
    var args = [category, name, properties, options, callback];
    var strings = args.filter(isString);
    if (strings[0] !== void 0 && strings[1] !== void 0) {
      resolvedCategory = strings[0];
      resolvedName = strings[1];
    }
    if (strings.length === 1) {
      resolvedCategory = null;
      resolvedName = strings[0];
    }
    var resolvedCallback = args.find(isFunction);
    var objects = args.filter(function(obj) {
      if (resolvedName === null) {
        return isPlainObject(obj);
      }
      return isPlainObject(obj) || obj === null;
    });
    var resolvedProperties = (_a = objects[0]) !== null && _a !== void 0 ? _a : {};
    var resolvedOptions = (_b = objects[1]) !== null && _b !== void 0 ? _b : {};
    return [
      resolvedCategory,
      resolvedName,
      resolvedProperties,
      resolvedOptions,
      resolvedCallback
    ];
  }
  var resolveUserArguments = function(user) {
    return function() {
      var _a, _b, _c, _d, _e;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var id = null;
      id = (_c = (_a = args.find(isString)) !== null && _a !== void 0 ? _a : (_b = args.find(isNumber)) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : user.id();
      var objects = args.filter(function(obj) {
        if (id === null) {
          return isPlainObject(obj);
        }
        return isPlainObject(obj) || obj === null;
      });
      var data = (_d = objects[0]) !== null && _d !== void 0 ? _d : {};
      var opts = (_e = objects[1]) !== null && _e !== void 0 ? _e : {};
      var resolvedCallback = args.find(isFunction);
      return [id, data, opts, resolvedCallback];
    };
  };
  function resolveAliasArguments(to, from, options, callback) {
    if (isNumber(to))
      to = to.toString();
    if (isNumber(from))
      from = from.toString();
    var args = [to, from, options, callback];
    var _a = args.filter(isString), _b = _a[0], aliasTo = _b === void 0 ? to : _b, _c = _a[1], aliasFrom = _c === void 0 ? null : _c;
    var _d = args.filter(isPlainObject)[0], opts = _d === void 0 ? {} : _d;
    var resolvedCallback = args.find(isFunction);
    return [aliasTo, aliasFrom, opts, resolvedCallback];
  }

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/analytics/index.js
  init_callback();
  init_connection();
  init_context();
  init_emitter();

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/events/index.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  init_modules();
  init_dist();
  init_dist2();
  var import_spark_md5 = __toESM(require_spark_md5());
  var EventFactory = function() {
    function EventFactory2(user) {
      this.user = user;
    }
    EventFactory2.prototype.track = function(event, properties, options, globalIntegrations) {
      return this.normalize(__assign(__assign({}, this.baseEvent()), { event, type: "track", properties, options: __assign({}, options), integrations: __assign({}, globalIntegrations) }));
    };
    EventFactory2.prototype.page = function(category, page, properties, options, globalIntegrations) {
      var _a;
      var event = {
        type: "page",
        properties: __assign({}, properties),
        options: __assign({}, options),
        integrations: __assign({}, globalIntegrations)
      };
      if (category !== null) {
        event.category = category;
        event.properties = (_a = event.properties) !== null && _a !== void 0 ? _a : {};
        event.properties.category = category;
      }
      if (page !== null) {
        event.name = page;
      }
      return this.normalize(__assign(__assign({}, this.baseEvent()), event));
    };
    EventFactory2.prototype.screen = function(category, screen, properties, options, globalIntegrations) {
      var event = {
        type: "screen",
        properties: __assign({}, properties),
        options: __assign({}, options),
        integrations: __assign({}, globalIntegrations)
      };
      if (category !== null) {
        event.category = category;
      }
      if (screen !== null) {
        event.name = screen;
      }
      return this.normalize(__assign(__assign({}, this.baseEvent()), event));
    };
    EventFactory2.prototype.identify = function(userId, traits, options, globalIntegrations) {
      return this.normalize(__assign(__assign({}, this.baseEvent()), { type: "identify", userId, traits, options: __assign({}, options), integrations: __assign({}, globalIntegrations) }));
    };
    EventFactory2.prototype.group = function(groupId, traits, options, globalIntegrations) {
      return this.normalize(__assign(__assign({}, this.baseEvent()), { type: "group", traits, options: __assign({}, options), integrations: __assign({}, globalIntegrations), groupId }));
    };
    EventFactory2.prototype.alias = function(to, from, options, globalIntegrations) {
      var base = {
        userId: to,
        type: "alias",
        options: __assign({}, options),
        integrations: __assign({}, globalIntegrations)
      };
      if (from !== null) {
        base.previousId = from;
      }
      if (to === void 0) {
        return this.normalize(__assign(__assign({}, base), this.baseEvent()));
      }
      return this.normalize(__assign(__assign({}, this.baseEvent()), base));
    };
    EventFactory2.prototype.baseEvent = function() {
      var base = {
        integrations: {},
        options: {}
      };
      var user = this.user;
      if (user.id()) {
        base.userId = user.id();
      }
      if (user.anonymousId()) {
        base.anonymousId = user.anonymousId();
      }
      return base;
    };
    EventFactory2.prototype.context = function(event) {
      var _a, _b, _c;
      var optionsKeys = ["integrations", "anonymousId", "timestamp", "userId"];
      var options = (_a = event.options) !== null && _a !== void 0 ? _a : {};
      delete options["integrations"];
      var providedOptionsKeys = Object.keys(options);
      var context = (_c = (_b = event.options) === null || _b === void 0 ? void 0 : _b.context) !== null && _c !== void 0 ? _c : {};
      var overrides = {};
      providedOptionsKeys.forEach(function(key) {
        if (key === "context") {
          return;
        }
        if (optionsKeys.includes(key)) {
          dset(overrides, key, options[key]);
        } else {
          dset(context, key, options[key]);
        }
      });
      return [context, overrides];
    };
    EventFactory2.prototype.normalize = function(event) {
      var _a, _b;
      var integrationBooleans = Object.keys((_a = event.integrations) !== null && _a !== void 0 ? _a : {}).reduce(function(integrationNames, name) {
        var _a2;
        var _b2;
        return __assign(__assign({}, integrationNames), (_a2 = {}, _a2[name] = Boolean((_b2 = event.integrations) === null || _b2 === void 0 ? void 0 : _b2[name]), _a2));
      }, {});
      var allIntegrations = __assign(__assign({}, integrationBooleans), (_b = event.options) === null || _b === void 0 ? void 0 : _b.integrations);
      var _c = this.context(event), context = _c[0], overrides = _c[1];
      var options = event.options, rest = __rest(event, ["options"]);
      var body = __assign(__assign(__assign({ timestamp: new Date() }, rest), { context, integrations: allIntegrations }), overrides);
      var messageId = "ajs-next-" + import_spark_md5.default.hash(JSON.stringify(body) + v4());
      var evt = __assign(__assign({}, body), { messageId });
      return evt;
    };
    return EventFactory2;
  }();

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/queue/event-queue.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  init_modules();

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/group-by.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  init_modules();
  function groupBy(collection, grouper) {
    var results = {};
    collection.forEach(function(item) {
      var _a;
      var key = void 0;
      if (typeof grouper === "string") {
        var suggestedKey = item[grouper];
        key = typeof suggestedKey !== "string" ? JSON.stringify(suggestedKey) : suggestedKey;
      } else if (grouper instanceof Function) {
        key = grouper(item);
      }
      if (key === void 0) {
        return;
      }
      results[key] = __spreadArray(__spreadArray([], (_a = results[key]) !== null && _a !== void 0 ? _a : [], true), [item], false);
    });
    return results;
  }

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/queue/event-queue.js
  init_priority_queue();
  init_persisted();
  init_connection();
  init_context();
  init_emitter();
  init_delivery();

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/inspector/index.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/get-global.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  var getGlobal = function() {
    if (typeof globalThis !== "undefined") {
      return globalThis;
    }
    if (typeof self !== "undefined") {
      return self;
    }
    if (typeof window !== "undefined") {
      return window;
    }
    if (typeof global !== "undefined") {
      return global;
    }
    return null;
  };

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/inspector/index.js
  var env = getGlobal();
  var inspectorHost = {
    start: function() {
      var _a;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return (_a = env === null || env === void 0 ? void 0 : env["__SEGMENT_INSPECTOR__"]) === null || _a === void 0 ? void 0 : _a.start.apply(_a, args);
    },
    trace: function() {
      var _a;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return (_a = env === null || env === void 0 ? void 0 : env["__SEGMENT_INSPECTOR__"]) === null || _a === void 0 ? void 0 : _a.trace.apply(_a, args);
    }
  };

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/queue/event-queue.js
  var EventQueue = function(_super) {
    __extends(EventQueue2, _super);
    function EventQueue2(priorityQueue) {
      var _this = _super.call(this) || this;
      _this.plugins = [];
      _this.failedInitializations = [];
      _this.flushing = false;
      _this.queue = priorityQueue !== null && priorityQueue !== void 0 ? priorityQueue : new PersistedPriorityQueue(4, "event-queue");
      _this.queue.on(ON_REMOVE_FROM_FUTURE, function() {
        _this.scheduleFlush(0);
      });
      return _this;
    }
    EventQueue2.prototype.register = function(ctx, plugin, instance) {
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, Promise.resolve(plugin.load(ctx, instance)).then(function() {
                _this.plugins.push(plugin);
              }).catch(function(err) {
                if (plugin.type === "destination") {
                  _this.failedInitializations.push(plugin.name);
                  console.warn(plugin.name, err);
                  ctx.log("warn", "Failed to load destination", {
                    plugin: plugin.name,
                    error: err
                  });
                  return;
                }
                throw err;
              })];
            case 1:
              _a.sent();
              return [2];
          }
        });
      });
    };
    EventQueue2.prototype.deregister = function(ctx, plugin, instance) {
      return __awaiter(this, void 0, void 0, function() {
        var e_1;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 3, , 4]);
              if (!plugin.unload)
                return [3, 2];
              return [4, Promise.resolve(plugin.unload(ctx, instance))];
            case 1:
              _a.sent();
              _a.label = 2;
            case 2:
              this.plugins = this.plugins.filter(function(p) {
                return p.name !== plugin.name;
              });
              return [3, 4];
            case 3:
              e_1 = _a.sent();
              ctx.log("warn", "Failed to unload destination", {
                plugin: plugin.name,
                error: e_1
              });
              return [3, 4];
            case 4:
              return [2];
          }
        });
      });
    };
    EventQueue2.prototype.dispatch = function(ctx) {
      return __awaiter(this, void 0, void 0, function() {
        var willDeliver;
        return __generator(this, function(_a) {
          ctx.log("debug", "Dispatching");
          ctx.stats.increment("message_dispatched");
          this.queue.push(ctx);
          willDeliver = this.subscribeToDelivery(ctx);
          this.scheduleFlush(0);
          return [2, willDeliver];
        });
      });
    };
    EventQueue2.prototype.subscribeToDelivery = function(ctx) {
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_a) {
          return [2, new Promise(function(resolve) {
            var onDeliver = function(flushed, delivered) {
              if (flushed.isSame(ctx)) {
                _this.off("flush", onDeliver);
                if (delivered) {
                  resolve(flushed);
                } else {
                  resolve(flushed);
                }
              }
            };
            _this.on("flush", onDeliver);
          })];
        });
      });
    };
    EventQueue2.prototype.dispatchSingle = function(ctx) {
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_a) {
          ctx.log("debug", "Dispatching");
          ctx.stats.increment("message_dispatched");
          this.queue.updateAttempts(ctx);
          ctx.attempts = 1;
          return [2, this.deliver(ctx).catch(function(err) {
            if (err instanceof ContextCancelation && err.retry === false) {
              ctx.setFailedDelivery({ reason: err });
              return ctx;
            }
            var accepted = _this.enqueuRetry(err, ctx);
            if (!accepted) {
              ctx.setFailedDelivery({ reason: err });
              return ctx;
            }
            return _this.subscribeToDelivery(ctx);
          })];
        });
      });
    };
    EventQueue2.prototype.isEmpty = function() {
      return this.queue.length === 0;
    };
    EventQueue2.prototype.scheduleFlush = function(timeout) {
      var _this = this;
      if (timeout === void 0) {
        timeout = 500;
      }
      if (this.flushing) {
        return;
      }
      this.flushing = true;
      setTimeout(function() {
        _this.flush().then(function() {
          setTimeout(function() {
            _this.flushing = false;
            if (_this.queue.length) {
              _this.scheduleFlush(0);
            }
          }, 0);
        });
      }, timeout);
    };
    EventQueue2.prototype.deliver = function(ctx) {
      return __awaiter(this, void 0, void 0, function() {
        var start, done, err_1;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              start = Date.now();
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              return [4, this.flushOne(ctx)];
            case 2:
              ctx = _a.sent();
              done = Date.now() - start;
              ctx.stats.gauge("delivered", done);
              ctx.log("debug", "Delivered", ctx.event);
              return [2, ctx];
            case 3:
              err_1 = _a.sent();
              ctx.log("error", "Failed to deliver", err_1);
              ctx.stats.increment("delivery_failed");
              throw err_1;
            case 4:
              return [2];
          }
        });
      });
    };
    EventQueue2.prototype.enqueuRetry = function(err, ctx) {
      var notRetriable = err instanceof ContextCancelation && err.retry === false;
      var retriable = !notRetriable;
      if (retriable) {
        var accepted = this.queue.pushWithBackoff(ctx);
        return accepted;
      }
      return false;
    };
    EventQueue2.prototype.flush = function() {
      return __awaiter(this, void 0, void 0, function() {
        var ctx, err_2, accepted;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (this.queue.length === 0 || !isOnline()) {
                return [2, []];
              }
              ctx = this.queue.pop();
              if (!ctx) {
                return [2, []];
              }
              ctx.attempts = this.queue.getAttempts(ctx);
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              return [4, this.deliver(ctx)];
            case 2:
              ctx = _a.sent();
              this.emit("flush", ctx, true);
              return [3, 4];
            case 3:
              err_2 = _a.sent();
              accepted = this.enqueuRetry(err_2, ctx);
              if (!accepted) {
                ctx.setFailedDelivery({ reason: err_2 });
                this.emit("flush", ctx, false);
              }
              return [2, []];
            case 4:
              return [2, [ctx]];
          }
        });
      });
    };
    EventQueue2.prototype.isReady = function() {
      return true;
    };
    EventQueue2.prototype.availableExtensions = function(denyList) {
      var available = this.plugins.filter(function(p) {
        var _a2;
        if (p.type !== "destination" && p.name !== "Segment.io") {
          return true;
        }
        return (_a2 = denyList[p.name]) !== null && _a2 !== void 0 ? _a2 : (p.name === "Segment.io" ? true : denyList.All) !== false;
      });
      var _a = groupBy(available, "type"), _b = _a.before, before = _b === void 0 ? [] : _b, _c = _a.enrichment, enrichment = _c === void 0 ? [] : _c, _d = _a.destination, destination = _d === void 0 ? [] : _d, _e = _a.after, after = _e === void 0 ? [] : _e;
      return {
        before,
        enrichment,
        destinations: destination,
        after
      };
    };
    EventQueue2.prototype.flushOne = function(ctx) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function() {
        var _c, before, enrichment, _i, before_1, beforeWare, temp, _d, enrichment_1, enrichmentWare, temp, _e, destinations, after, afterCalls;
        return __generator(this, function(_f) {
          switch (_f.label) {
            case 0:
              if (!this.isReady()) {
                throw new Error("Not ready");
              }
              _c = this.availableExtensions((_a = ctx.event.integrations) !== null && _a !== void 0 ? _a : {}), before = _c.before, enrichment = _c.enrichment;
              _i = 0, before_1 = before;
              _f.label = 1;
            case 1:
              if (!(_i < before_1.length))
                return [3, 4];
              beforeWare = before_1[_i];
              return [4, ensure(ctx, beforeWare)];
            case 2:
              temp = _f.sent();
              if (temp instanceof Context) {
                ctx = temp;
              }
              _f.label = 3;
            case 3:
              _i++;
              return [3, 1];
            case 4:
              _d = 0, enrichment_1 = enrichment;
              _f.label = 5;
            case 5:
              if (!(_d < enrichment_1.length))
                return [3, 8];
              enrichmentWare = enrichment_1[_d];
              return [4, attempt(ctx, enrichmentWare)];
            case 6:
              temp = _f.sent();
              if (temp instanceof Context) {
                ctx = temp;
              }
              _f.label = 7;
            case 7:
              _d++;
              return [3, 5];
            case 8:
              inspectorHost.trace({
                stage: "enriched",
                id: ctx.id,
                event: ctx.event,
                timestamp: new Date().toISOString()
              });
              _e = this.availableExtensions((_b = ctx.event.integrations) !== null && _b !== void 0 ? _b : {}), destinations = _e.destinations, after = _e.after;
              return [4, new Promise(function(resolve, reject) {
                setTimeout(function() {
                  var attempts = destinations.map(function(destination) {
                    return attempt(ctx, destination);
                  });
                  Promise.all(attempts).then(resolve).catch(reject);
                }, 0);
              })];
            case 9:
              _f.sent();
              ctx.stats.increment("message_delivered");
              inspectorHost.trace({
                stage: "delivered",
                id: ctx.id,
                event: ctx.event,
                timestamp: new Date().toISOString(),
                destinations: ["segment.io"]
              });
              afterCalls = after.map(function(after2) {
                return attempt(ctx, after2);
              });
              return [4, Promise.all(afterCalls)];
            case 10:
              _f.sent();
              return [2, ctx];
          }
        });
      });
    };
    return EventQueue2;
  }(Emitter);

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/user/index.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  init_modules();
  init_dist();
  init_js_cookie();
  init_tld();

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/bind-all.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function bindAll(obj) {
    var proto = obj.constructor.prototype;
    for (var _i = 0, _a = Object.getOwnPropertyNames(proto); _i < _a.length; _i++) {
      var key = _a[_i];
      if (key !== "constructor") {
        var desc = Object.getOwnPropertyDescriptor(obj.constructor.prototype, key);
        if (!!desc && typeof desc.value === "function") {
          obj[key] = obj[key].bind(obj);
        }
      }
    }
    return obj;
  }

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/user/index.js
  var defaults = {
    persist: true,
    cookie: {
      key: "ajs_user_id",
      oldKey: "ajs_user"
    },
    localStorage: {
      key: "ajs_user_traits"
    }
  };
  var Store = function() {
    function Store3() {
      this.cache = {};
    }
    Store3.prototype.get = function(key) {
      return this.cache[key];
    };
    Store3.prototype.set = function(key, value) {
      this.cache[key] = value;
      return value;
    };
    Store3.prototype.remove = function(key) {
      delete this.cache[key];
    };
    return Store3;
  }();
  var ONE_YEAR = 365;
  var Cookie = function(_super) {
    __extends(Cookie2, _super);
    function Cookie2(options) {
      if (options === void 0) {
        options = Cookie2.defaults;
      }
      var _this = _super.call(this) || this;
      _this.options = __assign(__assign({}, Cookie2.defaults), options);
      return _this;
    }
    Cookie2.available = function() {
      var cookieEnabled = window.navigator.cookieEnabled;
      if (!cookieEnabled) {
        js_cookie_default.set("ajs:cookies", "test");
        cookieEnabled = document.cookie.includes("ajs:cookies");
        js_cookie_default.remove("ajs:cookies");
      }
      return cookieEnabled;
    };
    Object.defineProperty(Cookie2, "defaults", {
      get: function() {
        return {
          maxage: ONE_YEAR,
          domain: tld(window.location.href),
          path: "/",
          sameSite: "Lax"
        };
      },
      enumerable: false,
      configurable: true
    });
    Cookie2.prototype.opts = function() {
      return {
        sameSite: this.options.sameSite,
        expires: this.options.maxage,
        domain: this.options.domain,
        path: this.options.path
      };
    };
    Cookie2.prototype.get = function(key) {
      try {
        var value = js_cookie_default.get(key);
        if (!value) {
          return null;
        }
        try {
          return JSON.parse(value);
        } catch (e) {
          return value;
        }
      } catch (e) {
        return null;
      }
    };
    Cookie2.prototype.set = function(key, value) {
      if (typeof value === "string") {
        js_cookie_default.set(key, value, this.opts());
      } else if (value === null) {
        js_cookie_default.remove(key, this.opts());
      } else {
        js_cookie_default.set(key, JSON.stringify(value), this.opts());
      }
      return value;
    };
    Cookie2.prototype.remove = function(key) {
      return js_cookie_default.remove(key, this.opts());
    };
    return Cookie2;
  }(Store);
  var NullStorage = function(_super) {
    __extends(NullStorage2, _super);
    function NullStorage2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.get = function(_key) {
        return null;
      };
      _this.set = function(_key, _val) {
        return null;
      };
      _this.remove = function(_key) {
      };
      return _this;
    }
    return NullStorage2;
  }(Store);
  var LocalStorage = function(_super) {
    __extends(LocalStorage2, _super);
    function LocalStorage2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalStorage2.available = function() {
      var test = "test";
      try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
      } catch (e) {
        return false;
      }
    };
    LocalStorage2.prototype.get = function(key) {
      var val = localStorage.getItem(key);
      if (val) {
        try {
          return JSON.parse(val);
        } catch (e) {
          return JSON.parse(JSON.stringify(val));
        }
      }
      return null;
    };
    LocalStorage2.prototype.set = function(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (_a) {
        console.warn("Unable to set ".concat(key, " in localStorage, storage may be full."));
      }
      return value;
    };
    LocalStorage2.prototype.remove = function(key) {
      return localStorage.removeItem(key);
    };
    return LocalStorage2;
  }(Store);
  var User = function() {
    function User2(options, cookieOptions2) {
      if (options === void 0) {
        options = defaults;
      }
      var _this = this;
      var _a, _b, _c, _d;
      this.options = {};
      this.id = function(id) {
        var _a2, _b2;
        if (_this.options.disable) {
          return null;
        }
        var prevId = _this.chainGet(_this.idKey);
        if (id !== void 0) {
          _this.trySet(_this.idKey, id);
          var changingIdentity = id !== prevId && prevId !== null && id !== null;
          if (changingIdentity) {
            _this.anonymousId(null);
          }
        }
        return (_b2 = (_a2 = _this.chainGet(_this.idKey)) !== null && _a2 !== void 0 ? _a2 : _this.cookies.get(defaults.cookie.oldKey)) !== null && _b2 !== void 0 ? _b2 : null;
      };
      this.anonymousId = function(id) {
        var _a2, _b2;
        if (_this.options.disable) {
          return null;
        }
        if (id === void 0) {
          var val = (_a2 = _this.chainGet(_this.anonKey)) !== null && _a2 !== void 0 ? _a2 : (_b2 = _this.legacySIO()) === null || _b2 === void 0 ? void 0 : _b2[0];
          if (val) {
            return val;
          }
        }
        if (id === null) {
          _this.trySet(_this.anonKey, null);
          return _this.chainGet(_this.anonKey);
        }
        _this.trySet(_this.anonKey, id !== null && id !== void 0 ? id : v4());
        return _this.chainGet(_this.anonKey);
      };
      this.traits = function(traits) {
        var _a2, _b2;
        if (_this.options.disable) {
          return;
        }
        if (traits === null) {
          traits = {};
        }
        if (traits) {
          _this.mem.set(_this.traitsKey, traits !== null && traits !== void 0 ? traits : {});
          _this.localStorage.set(_this.traitsKey, traits !== null && traits !== void 0 ? traits : {});
        }
        return (_b2 = (_a2 = _this.localStorage.get(_this.traitsKey)) !== null && _a2 !== void 0 ? _a2 : _this.mem.get(_this.traitsKey)) !== null && _b2 !== void 0 ? _b2 : {};
      };
      this.options = options;
      this.cookieOptions = cookieOptions2;
      this.idKey = (_b = (_a = options.cookie) === null || _a === void 0 ? void 0 : _a.key) !== null && _b !== void 0 ? _b : defaults.cookie.key;
      this.traitsKey = (_d = (_c = options.localStorage) === null || _c === void 0 ? void 0 : _c.key) !== null && _d !== void 0 ? _d : defaults.localStorage.key;
      this.anonKey = "ajs_anonymous_id";
      var isDisabled = options.disable === true;
      var shouldPersist = options.persist !== false;
      this.localStorage = isDisabled || options.localStorageFallbackDisabled || !shouldPersist || !LocalStorage.available() ? new NullStorage() : new LocalStorage();
      this.cookies = !isDisabled && shouldPersist && Cookie.available() ? new Cookie(cookieOptions2) : new NullStorage();
      this.mem = isDisabled ? new NullStorage() : new Store();
      var legacyUser = this.cookies.get(defaults.cookie.oldKey);
      if (legacyUser) {
        legacyUser.id && this.id(legacyUser.id);
        legacyUser.traits && this.traits(legacyUser.traits);
      }
      bindAll(this);
    }
    User2.prototype.chainGet = function(key) {
      var _a, _b, _c;
      var val = (_c = (_b = (_a = this.localStorage.get(key)) !== null && _a !== void 0 ? _a : this.cookies.get(key)) !== null && _b !== void 0 ? _b : this.mem.get(key)) !== null && _c !== void 0 ? _c : null;
      return this.trySet(key, typeof val === "number" ? val.toString() : val);
    };
    User2.prototype.trySet = function(key, value) {
      this.localStorage.set(key, value);
      this.cookies.set(key, value);
      this.mem.set(key, value);
      return value;
    };
    User2.prototype.chainClear = function(key) {
      this.localStorage.remove(key);
      this.cookies.remove(key);
      this.mem.remove(key);
    };
    User2.prototype.legacySIO = function() {
      var val = this.cookies.get("_sio");
      if (!val) {
        return null;
      }
      var _a = val.split("----"), anon = _a[0], user = _a[1];
      return [anon, user];
    };
    User2.prototype.identify = function(id, traits) {
      if (this.options.disable) {
        return;
      }
      traits = traits !== null && traits !== void 0 ? traits : {};
      var currentId = this.id();
      if (currentId === null || currentId === id) {
        traits = __assign(__assign({}, this.traits()), traits);
      }
      if (id) {
        this.id(id);
      }
      this.traits(traits);
    };
    User2.prototype.logout = function() {
      this.anonymousId(null);
      this.id(null);
      this.traits({});
    };
    User2.prototype.reset = function() {
      this.logout();
      this.chainClear(this.idKey);
      this.chainClear(this.anonKey);
      this.chainClear(this.traitsKey);
    };
    User2.prototype.load = function() {
      return new User2(this.options, this.cookieOptions);
    };
    User2.prototype.save = function() {
      return true;
    };
    User2.defaults = defaults;
    return User2;
  }();
  var groupDefaults = {
    persist: true,
    cookie: {
      key: "ajs_group_id"
    },
    localStorage: {
      key: "ajs_group_properties"
    }
  };
  var Group = function(_super) {
    __extends(Group4, _super);
    function Group4(options, cookie) {
      if (options === void 0) {
        options = groupDefaults;
      }
      var _this = _super.call(this, options, cookie) || this;
      _this.anonymousId = function(_id) {
        return void 0;
      };
      bindAll(_this);
      return _this;
    }
    return Group4;
  }(User);

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/analytics/index.js
  init_persisted();
  init_version();
  init_priority_queue();
  var deprecationWarning = "This is being deprecated and will be not be available in future releases of Analytics JS";
  var global2 = getGlobal();
  var _analytics = global2 === null || global2 === void 0 ? void 0 : global2.analytics;
  function createDefaultQueue(retryQueue, disablePersistance) {
    if (retryQueue === void 0) {
      retryQueue = false;
    }
    if (disablePersistance === void 0) {
      disablePersistance = false;
    }
    var maxAttempts = retryQueue ? 4 : 1;
    var priorityQueue = disablePersistance ? new PriorityQueue(maxAttempts, []) : new PersistedPriorityQueue(maxAttempts, "event-queue");
    return new EventQueue(priorityQueue);
  }
  var Analytics = function(_super) {
    __extends(Analytics2, _super);
    function Analytics2(settings, options, queue, user, group) {
      var _this = this;
      var _a, _b, _c;
      _this = _super.call(this) || this;
      _this._debug = false;
      _this.initialized = false;
      _this.user = function() {
        return _this._user;
      };
      _this.init = _this.initialize.bind(_this);
      var cookieOptions2 = options === null || options === void 0 ? void 0 : options.cookie;
      var disablePersistance = (_a = options === null || options === void 0 ? void 0 : options.disableClientPersistence) !== null && _a !== void 0 ? _a : false;
      _this.settings = settings;
      _this.settings.timeout = (_b = _this.settings.timeout) !== null && _b !== void 0 ? _b : 300;
      _this.queue = queue !== null && queue !== void 0 ? queue : createDefaultQueue(options === null || options === void 0 ? void 0 : options.retryQueue, disablePersistance);
      _this._user = user !== null && user !== void 0 ? user : new User(disablePersistance ? __assign(__assign({}, options === null || options === void 0 ? void 0 : options.user), { persist: false }) : options === null || options === void 0 ? void 0 : options.user, cookieOptions2).load();
      _this._group = group !== null && group !== void 0 ? group : new Group(disablePersistance ? __assign(__assign({}, options === null || options === void 0 ? void 0 : options.group), { persist: false }) : options === null || options === void 0 ? void 0 : options.group, cookieOptions2).load();
      _this.eventFactory = new EventFactory(_this._user);
      _this.integrations = (_c = options === null || options === void 0 ? void 0 : options.integrations) !== null && _c !== void 0 ? _c : {};
      _this.options = options !== null && options !== void 0 ? options : {};
      inspectorHost.start({
        user: {
          id: _this.user().id() || null,
          traits: _this.user().traits()
        }
      });
      bindAll(_this);
      return _this;
    }
    Analytics2.prototype.track = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var _a, name, data, opts, cb, segmentEvent;
        var _this = this;
        return __generator(this, function(_b) {
          _a = resolveArguments.apply(void 0, args), name = _a[0], data = _a[1], opts = _a[2], cb = _a[3];
          segmentEvent = this.eventFactory.track(name, data, opts, this.integrations);
          return [2, this.dispatch(segmentEvent, cb).then(function(ctx) {
            _this.emit("track", name, ctx.event.properties, ctx.event.options);
            return ctx;
          })];
        });
      });
    };
    Analytics2.prototype.page = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var _a, category, page, properties, options, callback, segmentEvent;
        var _this = this;
        return __generator(this, function(_b) {
          _a = resolvePageArguments.apply(void 0, args), category = _a[0], page = _a[1], properties = _a[2], options = _a[3], callback = _a[4];
          segmentEvent = this.eventFactory.page(category, page, properties, options, this.integrations);
          return [2, this.dispatch(segmentEvent, callback).then(function(ctx) {
            _this.emit("page", category, page, ctx.event.properties, ctx.event.options);
            return ctx;
          })];
        });
      });
    };
    Analytics2.prototype.identify = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var _a, id, _traits, options, callback, segmentEvent;
        var _this = this;
        return __generator(this, function(_b) {
          _a = resolveUserArguments(this._user).apply(void 0, args), id = _a[0], _traits = _a[1], options = _a[2], callback = _a[3];
          this._user.identify(id, _traits);
          segmentEvent = this.eventFactory.identify(this._user.id(), this._user.traits(), options, this.integrations);
          return [2, this.dispatch(segmentEvent, callback).then(function(ctx) {
            _this.emit("identify", ctx.event.userId, ctx.event.traits, ctx.event.options);
            return ctx;
          })];
        });
      });
    };
    Analytics2.prototype.group = function() {
      var _this = this;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (args.length === 0) {
        return this._group;
      }
      var _a = resolveUserArguments(this._group).apply(void 0, args), id = _a[0], _traits = _a[1], options = _a[2], callback = _a[3];
      this._group.identify(id, _traits);
      var groupId = this._group.id();
      var groupTraits = this._group.traits();
      var segmentEvent = this.eventFactory.group(groupId, groupTraits, options, this.integrations);
      return this.dispatch(segmentEvent, callback).then(function(ctx) {
        _this.emit("group", ctx.event.groupId, ctx.event.traits, ctx.event.options);
        return ctx;
      });
    };
    Analytics2.prototype.alias = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var _a, to, from, options, callback, segmentEvent;
        var _this = this;
        return __generator(this, function(_b) {
          _a = resolveAliasArguments.apply(void 0, args), to = _a[0], from = _a[1], options = _a[2], callback = _a[3];
          segmentEvent = this.eventFactory.alias(to, from, options, this.integrations);
          return [2, this.dispatch(segmentEvent, callback).then(function(ctx) {
            _this.emit("alias", to, from, ctx.event.options);
            return ctx;
          })];
        });
      });
    };
    Analytics2.prototype.screen = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var _a, category, page, properties, options, callback, segmentEvent;
        var _this = this;
        return __generator(this, function(_b) {
          _a = resolvePageArguments.apply(void 0, args), category = _a[0], page = _a[1], properties = _a[2], options = _a[3], callback = _a[4];
          segmentEvent = this.eventFactory.screen(category, page, properties, options, this.integrations);
          return [2, this.dispatch(segmentEvent, callback).then(function(ctx) {
            _this.emit("screen", category, page, ctx.event.properties, ctx.event.options);
            return ctx;
          })];
        });
      });
    };
    Analytics2.prototype.trackClick = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var autotrack;
        var _a;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, Promise.resolve().then(() => (init_auto_track(), auto_track_exports))];
            case 1:
              autotrack = _b.sent();
              return [2, (_a = autotrack.link).call.apply(_a, __spreadArray([this], args, false))];
          }
        });
      });
    };
    Analytics2.prototype.trackLink = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var autotrack;
        var _a;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, Promise.resolve().then(() => (init_auto_track(), auto_track_exports))];
            case 1:
              autotrack = _b.sent();
              return [2, (_a = autotrack.link).call.apply(_a, __spreadArray([this], args, false))];
          }
        });
      });
    };
    Analytics2.prototype.trackSubmit = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var autotrack;
        var _a;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, Promise.resolve().then(() => (init_auto_track(), auto_track_exports))];
            case 1:
              autotrack = _b.sent();
              return [2, (_a = autotrack.form).call.apply(_a, __spreadArray([this], args, false))];
          }
        });
      });
    };
    Analytics2.prototype.trackForm = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var autotrack;
        var _a;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, Promise.resolve().then(() => (init_auto_track(), auto_track_exports))];
            case 1:
              autotrack = _b.sent();
              return [2, (_a = autotrack.form).call.apply(_a, __spreadArray([this], args, false))];
          }
        });
      });
    };
    Analytics2.prototype.register = function() {
      var plugins = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        plugins[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var ctx, registrations;
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              ctx = Context.system();
              registrations = plugins.map(function(xt) {
                return _this.queue.register(ctx, xt, _this);
              });
              return [4, Promise.all(registrations)];
            case 1:
              _a.sent();
              return [2, ctx];
          }
        });
      });
    };
    Analytics2.prototype.deregister = function() {
      var plugins = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        plugins[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var ctx, deregistrations;
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              ctx = Context.system();
              deregistrations = plugins.map(function(pl) {
                return __awaiter(_this, void 0, void 0, function() {
                  var plugin;
                  return __generator(this, function(_a2) {
                    plugin = this.queue.plugins.find(function(p) {
                      return p.name === pl;
                    });
                    if (plugin) {
                      return [2, this.queue.deregister(ctx, plugin, this)];
                    } else {
                      ctx.log("warn", "plugin ".concat(pl, " not found"));
                    }
                    return [2];
                  });
                });
              });
              return [4, Promise.all(deregistrations)];
            case 1:
              _a.sent();
              return [2, ctx];
          }
        });
      });
    };
    Analytics2.prototype.debug = function(toggle) {
      if (toggle === false && localStorage.getItem("debug")) {
        localStorage.removeItem("debug");
      }
      this._debug = toggle;
      return this;
    };
    Analytics2.prototype.reset = function() {
      this._user.reset();
    };
    Analytics2.prototype.timeout = function(timeout) {
      this.settings.timeout = timeout;
    };
    Analytics2.prototype.dispatch = function(event, callback) {
      return __awaiter(this, void 0, void 0, function() {
        var ctx, startTime, dispatched, elapsedTime, timeoutInMs;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              ctx = new Context(event);
              inspectorHost.trace({
                stage: "triggered",
                id: ctx.id,
                event,
                timestamp: new Date().toISOString()
              });
              if (isOffline() && !this.options.retryQueue) {
                return [2, ctx];
              }
              startTime = Date.now();
              if (!this.queue.isEmpty())
                return [3, 2];
              return [4, this.queue.dispatchSingle(ctx)];
            case 1:
              dispatched = _a.sent();
              return [3, 4];
            case 2:
              return [4, this.queue.dispatch(ctx)];
            case 3:
              dispatched = _a.sent();
              _a.label = 4;
            case 4:
              elapsedTime = Date.now() - startTime;
              timeoutInMs = this.settings.timeout;
              if (!callback)
                return [3, 6];
              return [4, invokeCallback(dispatched, callback, Math.max((timeoutInMs !== null && timeoutInMs !== void 0 ? timeoutInMs : 300) - elapsedTime, 0), timeoutInMs)];
            case 5:
              dispatched = _a.sent();
              _a.label = 6;
            case 6:
              if (this._debug) {
                dispatched.flush();
              }
              return [2, dispatched];
          }
        });
      });
    };
    Analytics2.prototype.addSourceMiddleware = function(fn) {
      return __awaiter(this, void 0, void 0, function() {
        var sourceMiddlewarePlugin2, integrations, plugin;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, Promise.resolve().then(() => (init_middleware(), middleware_exports))];
            case 1:
              sourceMiddlewarePlugin2 = _a.sent().sourceMiddlewarePlugin;
              integrations = {};
              this.queue.plugins.forEach(function(plugin2) {
                if (plugin2.type === "destination") {
                  return integrations[plugin2.name] = true;
                }
              });
              plugin = sourceMiddlewarePlugin2(fn, integrations);
              return [4, this.register(plugin)];
            case 2:
              _a.sent();
              return [2, this];
          }
        });
      });
    };
    Analytics2.prototype.addDestinationMiddleware = function(integrationName) {
      var middlewares = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        middlewares[_i - 1] = arguments[_i];
      }
      var legacyDestinations = this.queue.plugins.filter(function(xt) {
        return xt.name.toLowerCase() === integrationName.toLowerCase();
      });
      legacyDestinations.forEach(function(destination) {
        destination.addMiddleware.apply(destination, middlewares);
      });
      return Promise.resolve(this);
    };
    Analytics2.prototype.setAnonymousId = function(id) {
      return this._user.anonymousId(id);
    };
    Analytics2.prototype.queryString = function(query) {
      return __awaiter(this, void 0, void 0, function() {
        var queryString2;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, Promise.resolve().then(() => (init_query_string(), query_string_exports))];
            case 1:
              queryString2 = _a.sent().queryString;
              return [2, queryString2(this, query)];
          }
        });
      });
    };
    Analytics2.prototype.use = function(legacyPluginFactory) {
      legacyPluginFactory(this);
      return this;
    };
    Analytics2.prototype.ready = function(callback) {
      if (callback === void 0) {
        callback = function(res) {
          return res;
        };
      }
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, Promise.all(this.queue.plugins.map(function(i) {
            return i.ready ? i.ready() : Promise.resolve();
          })).then(function(res) {
            callback(res);
            return res;
          })];
        });
      });
    };
    Analytics2.prototype.noConflict = function() {
      console.warn(deprecationWarning);
      window.analytics = _analytics !== null && _analytics !== void 0 ? _analytics : this;
      return this;
    };
    Analytics2.prototype.normalize = function(msg) {
      console.warn(deprecationWarning);
      return this.eventFactory.normalize(msg);
    };
    Object.defineProperty(Analytics2.prototype, "failedInitializations", {
      get: function() {
        console.warn(deprecationWarning);
        return this.queue.failedInitializations;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Analytics2.prototype, "VERSION", {
      get: function() {
        return version;
      },
      enumerable: false,
      configurable: true
    });
    Analytics2.prototype.initialize = function(_settings, _options) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          console.warn(deprecationWarning);
          return [2, Promise.resolve(this)];
        });
      });
    };
    Analytics2.prototype.pageview = function(url) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              console.warn(deprecationWarning);
              return [4, this.page({ path: url })];
            case 1:
              _a.sent();
              return [2, this];
          }
        });
      });
    };
    Object.defineProperty(Analytics2.prototype, "plugins", {
      get: function() {
        var _a;
        console.warn(deprecationWarning);
        return (_a = this._plugins) !== null && _a !== void 0 ? _a : {};
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Analytics2.prototype, "Integrations", {
      get: function() {
        console.warn(deprecationWarning);
        var integrations = this.queue.plugins.filter(function(plugin) {
          return plugin.type === "destination";
        }).reduce(function(acc, plugin) {
          var name = "".concat(plugin.name.toLowerCase().replace(".", "").split(" ").join("-"), "Integration");
          var integration = window[name];
          if (!integration) {
            return acc;
          }
          var nested = integration.Integration;
          if (nested) {
            acc[plugin.name] = nested;
            return acc;
          }
          acc[plugin.name] = integration;
          return acc;
        }, {});
        return integrations;
      },
      enumerable: false,
      configurable: true
    });
    Analytics2.prototype.log = function() {
      console.warn(deprecationWarning);
      return;
    };
    Analytics2.prototype.addIntegrationMiddleware = function() {
      console.warn(deprecationWarning);
      return;
    };
    Analytics2.prototype.listeners = function() {
      console.warn(deprecationWarning);
      return;
    };
    Analytics2.prototype.addEventListener = function() {
      console.warn(deprecationWarning);
      return;
    };
    Analytics2.prototype.removeAllListeners = function() {
      console.warn(deprecationWarning);
      return;
    };
    Analytics2.prototype.removeListener = function() {
      console.warn(deprecationWarning);
      return;
    };
    Analytics2.prototype.removeEventListener = function() {
      console.warn(deprecationWarning);
      return;
    };
    Analytics2.prototype.hasListeners = function() {
      console.warn(deprecationWarning);
      return;
    };
    Analytics2.prototype.addIntegration = function() {
      console.warn(deprecationWarning);
      return;
    };
    Analytics2.prototype.add = function() {
      console.warn(deprecationWarning);
      return;
    };
    Analytics2.prototype.push = function(args) {
      var an = this;
      var method = args.shift();
      if (method) {
        if (!an[method])
          return;
      }
      an[method].apply(this, args);
    };
    return Analytics2;
  }(Emitter);

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/browser/index.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  init_modules();

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/get-process-env.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function getProcessEnv() {
    if (typeof process === "undefined" || !process.env) {
      return {};
    }
    return process.env;
  }

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/browser/index.js
  init_parse_cdn();
  init_unfetch_module();
  init_context();
  init_merged_options();

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/page-enrichment/index.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function canonical() {
    var tags = document.getElementsByTagName("link");
    var canon = "";
    Array.prototype.slice.call(tags).forEach(function(tag) {
      if (tag.getAttribute("rel") === "canonical") {
        canon = tag.getAttribute("href");
      }
    });
    return canon;
  }
  function canonicalPath() {
    var canon = canonical();
    if (!canon) {
      return window.location.pathname;
    }
    var a = document.createElement("a");
    a.href = canon;
    var pathname = !a.pathname.startsWith("/") ? "/" + a.pathname : a.pathname;
    return pathname;
  }
  function canonicalUrl(search) {
    if (search === void 0) {
      search = "";
    }
    var canon = canonical();
    if (canon) {
      return canon.includes("?") ? canon : "".concat(canon).concat(search);
    }
    var url = window.location.href;
    var i = url.indexOf("#");
    return i === -1 ? url : url.slice(0, i);
  }
  function pageDefaults() {
    return {
      path: canonicalPath(),
      referrer: document.referrer,
      search: location.search,
      title: document.title,
      url: canonicalUrl(location.search)
    };
  }
  function enrichPageContext(ctx) {
    var _a;
    var event = ctx.event;
    event.context = event.context || {};
    var pageContext = pageDefaults();
    var pageProps = (_a = event.properties) !== null && _a !== void 0 ? _a : {};
    Object.keys(pageContext).forEach(function(key) {
      if (pageProps[key]) {
        pageContext[key] = pageProps[key];
      }
    });
    if (event.context.page) {
      pageContext = Object.assign({}, pageContext, event.context.page);
    }
    event.context = Object.assign({}, event.context, {
      page: pageContext
    });
    ctx.event = event;
    return ctx;
  }
  var pageEnrichment = {
    name: "Page Enrichment",
    version: "0.1.0",
    isLoaded: function() {
      return true;
    },
    load: function() {
      return Promise.resolve();
    },
    type: "before",
    page: function(ctx) {
      ctx.event.properties = Object.assign({}, pageDefaults(), ctx.event.properties);
      if (ctx.event.name) {
        ctx.event.properties.name = ctx.event.name;
      }
      return enrichPageContext(ctx);
    },
    alias: enrichPageContext,
    track: enrichPageContext,
    identify: enrichPageContext,
    group: enrichPageContext
  };

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/remote-loader/index.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  init_modules();
  init_as_promise();
  init_load_script();
  init_parse_cdn();
  function validate2(pluginLike) {
    if (!Array.isArray(pluginLike)) {
      throw new Error("Not a valid list of plugins");
    }
    var required = ["load", "isLoaded", "name", "version", "type"];
    pluginLike.forEach(function(plugin) {
      required.forEach(function(method) {
        var _a;
        if (plugin[method] === void 0) {
          throw new Error("Plugin: ".concat((_a = plugin.name) !== null && _a !== void 0 ? _a : "unknown", " missing required function ").concat(method));
        }
      });
    });
    return true;
  }
  function remoteLoader(settings, userIntegrations, mergedIntegrations, obfuscate) {
    var _a;
    return __awaiter(this, void 0, void 0, function() {
      var allPlugins, cdn, pluginPromises;
      var _this = this;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            allPlugins = [];
            cdn = getCDN();
            pluginPromises = ((_a = settings.remotePlugins) !== null && _a !== void 0 ? _a : []).map(function(remotePlugin) {
              return __awaiter(_this, void 0, void 0, function() {
                var urlSplit, name_1, obfuscatedURL, error_1, libraryName, pluginFactory, plugin, plugins, error_2;
                return __generator(this, function(_a2) {
                  switch (_a2.label) {
                    case 0:
                      if (userIntegrations.All === false && !userIntegrations[remotePlugin.name] || userIntegrations[remotePlugin.name] === false)
                        return [2];
                      _a2.label = 1;
                    case 1:
                      _a2.trys.push([1, 12, , 13]);
                      if (!obfuscate)
                        return [3, 7];
                      urlSplit = remotePlugin.url.split("/");
                      name_1 = urlSplit[urlSplit.length - 2];
                      obfuscatedURL = remotePlugin.url.replace(name_1, btoa(name_1).replace(/=/g, ""));
                      _a2.label = 2;
                    case 2:
                      _a2.trys.push([2, 4, , 6]);
                      return [4, loadScript(obfuscatedURL.replace("https://cdn.segment.com", cdn))];
                    case 3:
                      _a2.sent();
                      return [3, 6];
                    case 4:
                      error_1 = _a2.sent();
                      return [4, loadScript(remotePlugin.url.replace("https://cdn.segment.com", cdn))];
                    case 5:
                      _a2.sent();
                      return [3, 6];
                    case 6:
                      return [3, 9];
                    case 7:
                      return [4, loadScript(remotePlugin.url.replace("https://cdn.segment.com", cdn))];
                    case 8:
                      _a2.sent();
                      _a2.label = 9;
                    case 9:
                      libraryName = remotePlugin.libraryName;
                      if (!(typeof window[libraryName] === "function"))
                        return [3, 11];
                      pluginFactory = window[libraryName];
                      return [4, asPromise(pluginFactory(__assign(__assign({}, remotePlugin.settings), mergedIntegrations[remotePlugin.name])))];
                    case 10:
                      plugin = _a2.sent();
                      plugins = Array.isArray(plugin) ? plugin : [plugin];
                      validate2(plugins);
                      allPlugins.push.apply(allPlugins, plugins);
                      _a2.label = 11;
                    case 11:
                      return [3, 13];
                    case 12:
                      error_2 = _a2.sent();
                      console.warn("Failed to load Remote Plugin", error_2);
                      return [3, 13];
                    case 13:
                      return [2];
                  }
                });
              });
            });
            return [4, Promise.all(pluginPromises)];
          case 1:
            _b.sent();
            return [2, allPlugins.filter(Boolean)];
        }
      });
    });
  }

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/segmentio/index.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  init_modules();
  init_connection();
  init_priority_queue();
  init_persisted();
  init_to_facade();

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/segmentio/batched-dispatcher.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  init_modules();
  init_unfetch_module();
  var fetch2 = unfetch_module_default;
  if (typeof window !== "undefined") {
    fetch2 = window.fetch || unfetch_module_default;
  }
  var MAX_PAYLOAD_SIZE = 500;
  function kilobytes(buffer) {
    var size = encodeURI(JSON.stringify(buffer)).split(/%..|./).length - 1;
    return size / 1024;
  }
  function approachingTrackingAPILimit(buffer) {
    return kilobytes(buffer) >= MAX_PAYLOAD_SIZE - 50;
  }
  function chunks(batch2) {
    var result = [];
    var index = 0;
    batch2.forEach(function(item) {
      var size = kilobytes(result[index]);
      if (size >= 64) {
        index++;
      }
      if (result[index]) {
        result[index].push(item);
      } else {
        result[index] = [item];
      }
    });
    return result;
  }
  function batch(apiHost, config) {
    var _a, _b;
    var buffer = [];
    var pageUnloaded = false;
    var limit = (_a = config === null || config === void 0 ? void 0 : config.size) !== null && _a !== void 0 ? _a : 10;
    var timeout = (_b = config === null || config === void 0 ? void 0 : config.timeout) !== null && _b !== void 0 ? _b : 5e3;
    function sendBatch(batch2) {
      var _a2;
      if (batch2.length === 0) {
        return;
      }
      var writeKey = (_a2 = batch2[0]) === null || _a2 === void 0 ? void 0 : _a2.writeKey;
      return fetch2("https://".concat(apiHost, "/b"), {
        keepalive: pageUnloaded,
        headers: {
          "Content-Type": "text/plain"
        },
        method: "post",
        body: JSON.stringify({ batch: batch2, writeKey })
      });
    }
    function flush() {
      return __awaiter(this, void 0, void 0, function() {
        var batch_1;
        return __generator(this, function(_a2) {
          if (buffer.length) {
            batch_1 = buffer;
            buffer = [];
            return [2, sendBatch(batch_1)];
          }
          return [2];
        });
      });
    }
    var schedule;
    function scheduleFlush2() {
      if (schedule) {
        return;
      }
      schedule = setTimeout(function() {
        schedule = void 0;
        flush().catch(console.error);
      }, timeout);
    }
    window.addEventListener("beforeunload", function() {
      pageUnloaded = true;
      if (buffer.length) {
        var reqs = chunks(buffer).map(sendBatch);
        Promise.all(reqs).catch(console.error);
      }
    });
    function dispatch(_url, body) {
      return __awaiter(this, void 0, void 0, function() {
        var bufferOverflow;
        return __generator(this, function(_a2) {
          buffer.push(body);
          bufferOverflow = buffer.length >= limit || approachingTrackingAPILimit(buffer);
          return [2, bufferOverflow || pageUnloaded ? flush() : scheduleFlush2()];
        });
      });
    }
    return {
      dispatch
    };
  }

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/segmentio/fetch-dispatcher.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  init_unfetch_module();
  var fetch3 = unfetch_module_default;
  if (typeof window !== "undefined") {
    fetch3 = window.fetch || unfetch_module_default;
  }
  function fetch_dispatcher_default() {
    function dispatch(url, body) {
      return fetch3(url, {
        headers: { "Content-Type": "text/plain" },
        method: "post",
        body: JSON.stringify(body)
      });
    }
    return {
      dispatch
    };
  }

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/segmentio/index.js
  init_normalize();

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/segmentio/schedule-flush.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  init_modules();
  init_connection();
  init_context();
  init_delivery();
  init_p_while();
  function flushQueue(xt, queue) {
    return __awaiter(this, void 0, void 0, function() {
      var failedQueue;
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            failedQueue = [];
            if (isOffline()) {
              return [2, queue];
            }
            return [
              4,
              pWhile(function() {
                return queue.length > 0 && !isOffline();
              }, function() {
                return __awaiter(_this, void 0, void 0, function() {
                  var ctx, result, success;
                  return __generator(this, function(_a2) {
                    switch (_a2.label) {
                      case 0:
                        ctx = queue.pop();
                        if (!ctx) {
                          return [2];
                        }
                        return [4, attempt(ctx, xt)];
                      case 1:
                        result = _a2.sent();
                        success = result instanceof Context;
                        if (!success) {
                          failedQueue.push(ctx);
                        }
                        return [2];
                    }
                  });
                });
              })
            ];
          case 1:
            _a.sent();
            failedQueue.map(function(failed) {
              return queue.pushWithBackoff(failed);
            });
            return [2, queue];
        }
      });
    });
  }
  function scheduleFlush(flushing, buffer, xt, scheduleFlush2) {
    var _this = this;
    if (flushing) {
      return;
    }
    setTimeout(function() {
      return __awaiter(_this, void 0, void 0, function() {
        var isFlushing, newBuffer;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              isFlushing = true;
              return [4, flushQueue(xt, buffer)];
            case 1:
              newBuffer = _a.sent();
              isFlushing = false;
              if (buffer.todo > 0) {
                scheduleFlush2(isFlushing, newBuffer, xt, scheduleFlush2);
              }
              return [2];
          }
        });
      });
    }, Math.random() * 5e3);
  }

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/plugins/segmentio/index.js
  function onAlias(analytics, json) {
    var _a, _b, _c, _d;
    var user = analytics.user();
    json.previousId = (_c = (_b = (_a = json.previousId) !== null && _a !== void 0 ? _a : json.from) !== null && _b !== void 0 ? _b : user.id()) !== null && _c !== void 0 ? _c : user.anonymousId();
    json.userId = (_d = json.userId) !== null && _d !== void 0 ? _d : json.to;
    delete json.from;
    delete json.to;
    return json;
  }
  function segmentio(analytics, settings, integrations) {
    var _a, _b, _c, _d;
    var buffer = analytics.options.disableClientPersistence ? new PriorityQueue(analytics.queue.queue.maxAttempts, []) : new PersistedPriorityQueue(analytics.queue.queue.maxAttempts, "dest-Segment.io");
    var flushing = false;
    var apiHost = (_a = settings === null || settings === void 0 ? void 0 : settings.apiHost) !== null && _a !== void 0 ? _a : "api.segment.io/v1";
    var protocol = (_b = settings === null || settings === void 0 ? void 0 : settings.protocol) !== null && _b !== void 0 ? _b : "https";
    var remote = "".concat(protocol, "://").concat(apiHost);
    var client = ((_c = settings === null || settings === void 0 ? void 0 : settings.deliveryStrategy) === null || _c === void 0 ? void 0 : _c.strategy) === "batching" ? batch(apiHost, (_d = settings === null || settings === void 0 ? void 0 : settings.deliveryStrategy) === null || _d === void 0 ? void 0 : _d.config) : fetch_dispatcher_default();
    function send(ctx) {
      return __awaiter(this, void 0, void 0, function() {
        var path, json;
        return __generator(this, function(_a2) {
          if (isOffline()) {
            buffer.push(ctx);
            scheduleFlush(flushing, buffer, segmentio2, scheduleFlush);
            return [2, ctx];
          }
          path = ctx.event.type.charAt(0);
          json = toFacade(ctx.event).json();
          if (ctx.event.type === "track") {
            delete json.traits;
          }
          if (ctx.event.type === "alias") {
            json = onAlias(analytics, json);
          }
          return [2, client.dispatch("".concat(remote, "/").concat(path), normalize(analytics, json, settings, integrations)).then(function() {
            return ctx;
          }).catch(function(err) {
            if (err.type === "error" || err.message === "Failed to fetch") {
              buffer.push(ctx);
              scheduleFlush(flushing, buffer, segmentio2, scheduleFlush);
            }
            return ctx;
          })];
        });
      });
    }
    var segmentio2 = {
      name: "Segment.io",
      type: "after",
      version: "0.1.0",
      isLoaded: function() {
        return true;
      },
      load: function() {
        return Promise.resolve();
      },
      track: send,
      identify: send,
      page: send,
      alias: send,
      group: send
    };
    return segmentio2;
  }

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/buffer/index.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  init_modules();

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/lib/is-thenable.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  var isThenable = function(value) {
    return typeof value === "object" && value !== null && "then" in value && typeof value.then === "function";
  };

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/buffer/index.js
  var flushSyncAnalyticsCalls = function(name, analytics, buffer) {
    buffer.getCalls(name).forEach(function(c) {
      callAnalyticsMethod(analytics, c).catch(console.error);
    });
  };
  var flushAddSourceMiddleware = function(analytics, buffer) {
    return __awaiter(void 0, void 0, void 0, function() {
      var _i, _a, c;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            _i = 0, _a = buffer.getCalls("addSourceMiddleware");
            _b.label = 1;
          case 1:
            if (!(_i < _a.length))
              return [3, 4];
            c = _a[_i];
            return [4, callAnalyticsMethod(analytics, c).catch(console.error)];
          case 2:
            _b.sent();
            _b.label = 3;
          case 3:
            _i++;
            return [3, 1];
          case 4:
            return [2];
        }
      });
    });
  };
  var flushOn = flushSyncAnalyticsCalls.bind(void 0, "on");
  var flushSetAnonymousID = flushSyncAnalyticsCalls.bind(void 0, "setAnonymousId");
  var flushAnalyticsCallsInNewTask = function(analytics, buffer) {
    buffer.toArray().forEach(function(m) {
      setTimeout(function() {
        callAnalyticsMethod(analytics, m).catch(console.error);
      }, 0);
    });
  };
  var PreInitMethodCallBuffer = function() {
    function PreInitMethodCallBuffer2() {
      this._value = {};
    }
    PreInitMethodCallBuffer2.prototype.toArray = function() {
      return Object.values(this._value).reduce(function(acc, v) {
        return acc.concat.apply(acc, v);
      }, []);
    };
    PreInitMethodCallBuffer2.prototype.getCalls = function(methodName) {
      var _a;
      return (_a = this._value[methodName]) !== null && _a !== void 0 ? _a : [];
    };
    PreInitMethodCallBuffer2.prototype.push = function() {
      var _this = this;
      var calls = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        calls[_i] = arguments[_i];
      }
      calls.forEach(function(call) {
        if (_this._value[call.method]) {
          _this._value[call.method].push(call);
        } else {
          _this._value[call.method] = [call];
        }
      });
      return this;
    };
    PreInitMethodCallBuffer2.prototype.clear = function() {
      this._value = {};
      return this;
    };
    return PreInitMethodCallBuffer2;
  }();
  function callAnalyticsMethod(analytics, call) {
    return __awaiter(this, void 0, void 0, function() {
      var result, err_1;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3, , 4]);
            if (call.called) {
              return [2, void 0];
            }
            call.called = true;
            result = analytics[call.method].apply(analytics, call.args);
            if (!isThenable(result))
              return [3, 2];
            return [4, result];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            call.resolve(result);
            return [3, 4];
          case 3:
            err_1 = _a.sent();
            call.reject(err_1);
            return [3, 4];
          case 4:
            return [2];
        }
      });
    });
  }
  var AnalyticsBuffered = function() {
    function AnalyticsBuffered2(loader) {
      var _this = this;
      this._preInitBuffer = new PreInitMethodCallBuffer();
      this.trackSubmit = this._createMethod("trackSubmit");
      this.trackClick = this._createMethod("trackClick");
      this.trackLink = this._createMethod("trackLink");
      this.pageView = this._createMethod("pageview");
      this.identify = this._createMethod("identify");
      this.reset = this._createMethod("reset");
      this.group = this._createMethod("group");
      this.track = this._createMethod("track");
      this.ready = this._createMethod("ready");
      this.alias = this._createMethod("alias");
      this.debug = this._createChainableMethod("debug");
      this.page = this._createMethod("page");
      this.once = this._createChainableMethod("once");
      this.off = this._createChainableMethod("off");
      this.on = this._createChainableMethod("on");
      this.addSourceMiddleware = this._createMethod("addSourceMiddleware");
      this.setAnonymousId = this._createMethod("setAnonymousId");
      this.addDestinationMiddleware = this._createMethod("addDestinationMiddleware");
      this._promise = loader(this._preInitBuffer);
      this._promise.then(function(_a) {
        var ajs = _a[0], ctx = _a[1];
        _this.instance = ajs;
        _this.ctx = ctx;
      }).catch(function() {
      });
    }
    AnalyticsBuffered2.prototype.then = function() {
      var _a;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return (_a = this._promise).then.apply(_a, args);
    };
    AnalyticsBuffered2.prototype.catch = function() {
      var _a;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return (_a = this._promise).catch.apply(_a, args);
    };
    AnalyticsBuffered2.prototype.finally = function() {
      var _a;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return (_a = this._promise).finally.apply(_a, args);
    };
    AnalyticsBuffered2.prototype._createMethod = function(methodName) {
      var _this = this;
      return function() {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (_this.instance) {
          return (_a = _this.instance)[methodName].apply(_a, args);
        }
        return new Promise(function(resolve, reject) {
          _this._preInitBuffer.push({
            method: methodName,
            args,
            resolve,
            reject,
            called: false
          });
        });
      };
    };
    AnalyticsBuffered2.prototype._createChainableMethod = function(methodName) {
      var _this = this;
      return function() {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (_this.instance) {
          void (_a = _this.instance)[methodName].apply(_a, args);
          return _this;
        } else {
          _this._preInitBuffer.push({
            method: methodName,
            args,
            resolve: function() {
            },
            reject: console.error,
            called: false
          });
        }
        return _this;
      };
    };
    return AnalyticsBuffered2;
  }();

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/core/buffer/snippet.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function transformSnippetCall(_a) {
    var methodName = _a[0], args = _a.slice(1);
    return {
      method: methodName,
      resolve: function() {
      },
      reject: console.error,
      args,
      called: false
    };
  }
  var normalizeSnippetBuffer = function(buffer) {
    return buffer.map(transformSnippetCall);
  };
  var popSnippetWindowBuffer = function() {
    var wa = window.analytics;
    if (!Array.isArray(wa))
      return [];
    var buffered = wa.splice(0, wa.length);
    return normalizeSnippetBuffer(buffered);
  };

  // ../../node_modules/.pnpm/@segment+analytics-next@1.40.0/node_modules/@segment/analytics-next/dist/pkg/browser/index.js
  function loadLegacySettings(writeKey, cdnURL) {
    var baseUrl = cdnURL !== null && cdnURL !== void 0 ? cdnURL : getCDN();
    return unfetch_module_default("".concat(baseUrl, "/v1/projects/").concat(writeKey, "/settings")).then(function(res) {
      return res.json();
    }).catch(function(err) {
      console.warn("Failed to load settings", err);
      throw err;
    });
  }
  function hasLegacyDestinations(settings) {
    return getProcessEnv().NODE_ENV !== "test" && Object.keys(settings.integrations).length > 1;
  }
  function flushPreBuffer(analytics, buffer) {
    buffer.push.apply(buffer, popSnippetWindowBuffer());
    flushSetAnonymousID(analytics, buffer);
    flushOn(analytics, buffer);
  }
  function flushFinalBuffer(analytics, buffer) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            buffer.push.apply(buffer, popSnippetWindowBuffer());
            return [4, flushAddSourceMiddleware(analytics, buffer)];
          case 1:
            _a.sent();
            buffer.push.apply(buffer, popSnippetWindowBuffer());
            flushAnalyticsCallsInNewTask(analytics, buffer);
            buffer.clear();
            return [2];
        }
      });
    });
  }
  function registerPlugins(legacySettings, analytics, opts, options, plugins) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function() {
      var legacyDestinations, _d, schemaFilter2, _e, mergedSettings, remotePlugins, toRegister, shouldIgnoreSegmentio, ctx;
      var _this = this;
      return __generator(this, function(_f) {
        switch (_f.label) {
          case 0:
            if (!hasLegacyDestinations(legacySettings))
              return [3, 2];
            return [4, Promise.resolve().then(() => (init_ajs_destination(), ajs_destination_exports)).then(function(mod) {
              return mod.ajsDestinations(legacySettings, analytics.integrations, opts);
            })];
          case 1:
            _d = _f.sent();
            return [3, 3];
          case 2:
            _d = [];
            _f.label = 3;
          case 3:
            legacyDestinations = _d;
            if (!legacySettings.legacyVideoPluginsEnabled)
              return [3, 5];
            return [4, Promise.resolve().then(() => (init_legacy_video_plugins(), legacy_video_plugins_exports)).then(function(mod) {
              return mod.loadLegacyVideoPlugins(analytics);
            })];
          case 4:
            _f.sent();
            _f.label = 5;
          case 5:
            if (!((_a = opts.plan) === null || _a === void 0 ? void 0 : _a.track))
              return [3, 7];
            return [4, Promise.resolve().then(() => (init_schema_filter(), schema_filter_exports)).then(function(mod) {
              var _a2;
              return mod.schemaFilter((_a2 = opts.plan) === null || _a2 === void 0 ? void 0 : _a2.track, legacySettings);
            })];
          case 6:
            _e = _f.sent();
            return [3, 8];
          case 7:
            _e = void 0;
            _f.label = 8;
          case 8:
            schemaFilter2 = _e;
            mergedSettings = mergedOptions(legacySettings, options);
            return [4, remoteLoader(legacySettings, analytics.integrations, mergedSettings, options.obfuscate).catch(function() {
              return [];
            })];
          case 9:
            remotePlugins = _f.sent();
            toRegister = __spreadArray(__spreadArray(__spreadArray([
              validation,
              pageEnrichment
            ], plugins, true), legacyDestinations, true), remotePlugins, true);
            if (schemaFilter2) {
              toRegister.push(schemaFilter2);
            }
            shouldIgnoreSegmentio = ((_b = opts.integrations) === null || _b === void 0 ? void 0 : _b.All) === false && !opts.integrations["Segment.io"] || opts.integrations && opts.integrations["Segment.io"] === false;
            if (!shouldIgnoreSegmentio) {
              toRegister.push(segmentio(analytics, mergedSettings["Segment.io"], legacySettings.integrations));
            }
            return [4, analytics.register.apply(analytics, toRegister)];
          case 10:
            ctx = _f.sent();
            if (!Object.entries((_c = legacySettings.enabledMiddleware) !== null && _c !== void 0 ? _c : {}).some(function(_a2) {
              var enabled = _a2[1];
              return enabled;
            }))
              return [3, 12];
            return [4, Promise.resolve().then(() => (init_remote_middleware(), remote_middleware_exports)).then(function(_a2) {
              var remoteMiddlewares2 = _a2.remoteMiddlewares;
              return __awaiter(_this, void 0, void 0, function() {
                var middleware, promises;
                return __generator(this, function(_b2) {
                  switch (_b2.label) {
                    case 0:
                      return [4, remoteMiddlewares2(ctx, legacySettings, options.obfuscate)];
                    case 1:
                      middleware = _b2.sent();
                      promises = middleware.map(function(mdw) {
                        return analytics.addSourceMiddleware(mdw);
                      });
                      return [2, Promise.all(promises)];
                  }
                });
              });
            })];
          case 11:
            _f.sent();
            _f.label = 12;
          case 12:
            return [2, ctx];
        }
      });
    });
  }
  function loadAnalytics(settings, options, preInitBuffer) {
    var _a, _b, _c, _d, _e, _f;
    if (options === void 0) {
      options = {};
    }
    return __awaiter(this, void 0, void 0, function() {
      var legacySettings, _g, retryQueue, opts, analytics, plugins, ctx, search, hash, term;
      return __generator(this, function(_h) {
        switch (_h.label) {
          case 0:
            if (settings.cdnURL)
              setGlobalCDNUrl(settings.cdnURL);
            if (!((_a = settings.cdnSettings) !== null && _a !== void 0))
              return [3, 1];
            _g = _a;
            return [3, 3];
          case 1:
            return [4, loadLegacySettings(settings.writeKey, settings.cdnURL)];
          case 2:
            _g = _h.sent();
            _h.label = 3;
          case 3:
            legacySettings = _g;
            retryQueue = (_c = (_b = legacySettings.integrations["Segment.io"]) === null || _b === void 0 ? void 0 : _b.retryQueue) !== null && _c !== void 0 ? _c : true;
            opts = __assign({ retryQueue }, options);
            analytics = new Analytics(settings, opts);
            plugins = (_d = settings.plugins) !== null && _d !== void 0 ? _d : [];
            Context.initMetrics(legacySettings.metrics);
            flushPreBuffer(analytics, preInitBuffer);
            return [4, registerPlugins(legacySettings, analytics, opts, options, plugins)];
          case 4:
            ctx = _h.sent();
            search = (_e = window.location.search) !== null && _e !== void 0 ? _e : "";
            hash = (_f = window.location.hash) !== null && _f !== void 0 ? _f : "";
            term = search.length ? search : hash.replace(/(?=#).*(?=\?)/, "");
            if (!term.includes("ajs_"))
              return [3, 6];
            return [4, analytics.queryString(term).catch(console.error)];
          case 5:
            _h.sent();
            _h.label = 6;
          case 6:
            analytics.initialized = true;
            analytics.emit("initialize", settings, options);
            if (options.initialPageview) {
              analytics.page().catch(console.error);
            }
            return [4, flushFinalBuffer(analytics, preInitBuffer)];
          case 7:
            _h.sent();
            return [2, [analytics, ctx]];
        }
      });
    });
  }
  var AnalyticsBrowser = function(_super) {
    __extends(AnalyticsBrowser2, _super);
    function AnalyticsBrowser2(loader) {
      return _super.call(this, loader) || this;
    }
    AnalyticsBrowser2.load = function(settings, options) {
      if (options === void 0) {
        options = {};
      }
      return new this(function(preInitBuffer) {
        return loadAnalytics(settings, options, preInitBuffer);
      });
    };
    AnalyticsBrowser2.standalone = function(writeKey, options) {
      return AnalyticsBrowser2.load({ writeKey }, options).then(function(res) {
        return res[0];
      });
    };
    return AnalyticsBrowser2;
  }(AnalyticsBuffered);

  // src/browser/constants.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();

  // src/browser/utils/getClickEventTarget.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();

  // src/browser/utils/getElementMatchingAncestor.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function getElementMatchingAncestor(element, pred) {
    const parent = element.parentElement;
    if (!parent) {
      return void 0;
    } else if (pred(parent)) {
      return parent;
    } else {
      return getElementMatchingAncestor(parent, pred);
    }
  }

  // src/browser/utils/isElementClickable.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function isElementClickable(element) {
    if (!element || !(element instanceof HTMLElement))
      return false;
    const tag = element.tagName.toLowerCase();
    const type = element.getAttribute("type");
    const role = element.getAttribute("role");
    const isLink = tag === "a" || role === "link";
    const isButton = tag === "button" || role === "button";
    const isClickableInput = tag === "input" && (type === "radio" || type === "checkbox");
    return isLink || isButton || isClickableInput;
  }

  // src/browser/utils/isElementOfType.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function isElementOfType(el, type) {
    return el instanceof HTMLElement && el.nodeName === type;
  }

  // src/browser/utils/getClickEventTarget.ts
  function getClickEventTarget(event) {
    if (event?.target) {
      if (isElementClickable(event.target)) {
        return event.target;
      } else if (isElementOfType(event.target, "label") && event.target.htmlFor) {
        const forElement = document.getElementById(event.target.htmlFor);
        if (forElement && isElementClickable(forElement)) {
          return forElement;
        }
      } else {
        const clickableParent = getElementMatchingAncestor(event.target, isElementClickable);
        return clickableParent;
      }
    } else {
      return void 0;
    }
  }

  // src/browser/constants.ts
  var COMMON_ELEMENT_ATTRIBUTES = ["id", "name", "className", "hidden"];
  var BUTTON_TRACKED_ATTRIBUTES = [...COMMON_ELEMENT_ATTRIBUTES, "disabled"];
  var FORM_TRACKED_ATTRIBUTES = [...COMMON_ELEMENT_ATTRIBUTES, "action", "method", "disabled"];
  var LINK_TRACKED_ATTRIBUTES = [...COMMON_ELEMENT_ATTRIBUTES, "href"];
  var SHOPIFY_PAGE_TYPES = {
    Page: "Page",
    Blog: "Blog",
    Cart: "Cart",
    Home: "Home",
    "Search Results": "Search Results",
    "Product List": "Product List",
    "Product Detail": "Product Detail",
    "Collection List": "Collection List",
    "Collection Detail": "Collection Detail",
    "Contact Information": "Contact Information",
    "Shipping Methods": "Shipping Methods",
    "Payment Methods": "Payment Methods",
    "Post Purchase": "Post Purchase",
    "Thank You": "Thank You",
    "Not Found": "Not Found"
  };
  var SHOPIFY_URL_PATTERNS = {
    Blog: /^\/blog\/?(\?.*)?$/,
    Cart: /^\/cart\/?(\?.*)?$/,
    Home: /^\/?(\?.*)?$/,
    Page: /^\/pages\/?([a-zA-Z0-9/-]*)(\?.*)?$/,
    "Search Results": /^\/search\/?(\?.*)?$/,
    "Product List": /^\/products\/?(\?.*)?$/,
    "Product Detail": /^\/products\/?([a-zA-Z0-9/-]*)(\?.*)?$/,
    "Collection List": /^\/collections\/?([a-zA-Z0-9/-]*)(\?.*)?$/,
    "Collection Detail": /^\/collections\/?([a-zA-Z0-9/-]*)\/products\/?([a-zA-Z0-9/-]*)(\?.*)?$/,
    "Contact Information": /^\/([a-zA-Z0-9/-]*)\/checkout\/?([a-zA-Z0-9/-]*)\/\?step=contact_information/,
    "Shipping Methods": /^\/([a-zA-Z0-9/-]*)\/checkout\/?([a-zA-Z0-9/-]*)\/\?step=shipping_method/,
    "Payment Methods": /^\/([a-zA-Z0-9/-]*)\/checkout\/?([a-zA-Z0-9/-]*)\/\?step=payment_method/,
    "Post Purchase": /^\/([a-zA-Z0-9/-]*)\/checkout\/?([a-zA-Z0-9/-]*)\/post_purchase(\?.*)?$/,
    "Thank You": /^\/([a-zA-Z0-9/-]*)\/checkout\/?([a-zA-Z0-9/-]*)\/thank_you(\?.*)?$/,
    "Not Found": /^\/404?(\?.*)?$/
  };
  var SHOPIFY_THEME_PAGE_TYPES = {
    "Not Found": "404",
    Article: "article",
    Page: "page",
    Policy: "policy",
    Blog: "blog",
    Cart: "cart",
    Home: "home",
    "Search Results": "search",
    "Product List": "products",
    "Product Detail": "product",
    "Collection List": "collection"
  };
  var SHOPIFY_CHECKOUT_PAGE_TYPES = {
    CONTACT_INFORMATION: "contact_information",
    SHIPPING_METHOD: "shipping_method",
    PAYMENT_METHOD: "payment_method",
    POST_PURCHASE: "post_purchase",
    THANK_YOU: "thank_you"
  };
  var PAGE_TYPES = [
    ...Object.keys(SHOPIFY_THEME_PAGE_TYPES),
    ...Object.keys(SHOPIFY_CHECKOUT_PAGE_TYPES)
  ];
  var ACTION_SELECTORS = {
    Checkout: 'form[action="/cart"] button[type="submit"]',
    "Add To Cart": 'form[action^="/cart/add"] button[type="submit"]',
    "Remove From Cart": 'a[href^="/cart/update"][href*="quantity=0"]',
    "Change Cart Quantity": 'a[href^="/cart/update"][href!="quantity=0"]',
    "Next Checkout Step": "#continue_button[type=submit]",
    "Apply Discount Code": "[data-reduction-form=update] button[type=submit]",
    "Klaviyo Form Closed": ".klaviyo-close-form"
  };
  var matchUrl = (regex, href) => !!href.match(regex)?.length;
  var matchCurrentUrl = (regex) => matchUrl(regex, window.location.pathname);
  var matchLinkClickEvent = (pattern) => (event) => {
    const target = getClickEventTarget(event);
    if (target) {
      const href = target.getAttribute("href");
      if (href && matchUrl(pattern, href)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  var matchButtonClickEvent = (name, selector) => (event) => {
    const target = getClickEventTarget(event);
    if (target) {
      return target.matches([selector, `[data-analytics-id="${name}"]`].join(","));
    } else {
      return false;
    }
  };
  var PAGE_EVENTS = {
    Page: () => ShopifyMetadata.pageType === "page" || matchCurrentUrl(SHOPIFY_URL_PATTERNS.Page),
    Blog: () => ShopifyMetadata.pageType === "blog" || matchCurrentUrl(SHOPIFY_URL_PATTERNS.Blog),
    Cart: () => ShopifyMetadata.pageType === "cart" || matchCurrentUrl(SHOPIFY_URL_PATTERNS.Cart),
    Home: () => ShopifyMetadata.pageType === "home" || matchCurrentUrl(SHOPIFY_URL_PATTERNS.Home),
    "Product List": () => ShopifyMetadata.pageType === "products" || matchCurrentUrl(SHOPIFY_URL_PATTERNS["Product List"]),
    "Product Detail": () => ShopifyMetadata.pageType === "product" || matchCurrentUrl(SHOPIFY_URL_PATTERNS["Product Detail"]),
    "Collection List": () => ShopifyMetadata.pageType === "collection" || matchCurrentUrl(SHOPIFY_URL_PATTERNS["Collection List"]),
    "Search Results": () => ShopifyMetadata.pageType === "searchresults" || matchCurrentUrl(SHOPIFY_URL_PATTERNS["Search Results"]),
    "Not Found": () => ShopifyMetadata.pageType === "notfound",
    "Contact Information": () => ShopifyMetadata.checkout?.step === SHOPIFY_CHECKOUT_PAGE_TYPES.CONTACT_INFORMATION || matchCurrentUrl(SHOPIFY_URL_PATTERNS["Contact Information"]),
    "Shipping Methods": () => ShopifyMetadata.checkout?.step === SHOPIFY_CHECKOUT_PAGE_TYPES.SHIPPING_METHOD || matchCurrentUrl(SHOPIFY_URL_PATTERNS["Shipping Methods"]),
    "Payment Methods": () => ShopifyMetadata.checkout?.step === SHOPIFY_CHECKOUT_PAGE_TYPES.PAYMENT_METHOD || matchCurrentUrl(SHOPIFY_URL_PATTERNS["Payment Methods"]),
    "Post-Checkout": () => ShopifyMetadata.checkout?.step === SHOPIFY_CHECKOUT_PAGE_TYPES.POST_PURCHASE || matchCurrentUrl(SHOPIFY_URL_PATTERNS["Post Purchase"]),
    "Thank You": () => ShopifyMetadata.checkout?.step === SHOPIFY_CHECKOUT_PAGE_TYPES.THANK_YOU || matchCurrentUrl(SHOPIFY_URL_PATTERNS["Thank You"])
  };
  var CLICK_EVENTS = {
    ...Object.entries(SHOPIFY_URL_PATTERNS).reduce((acc, [key, regex]) => ({
      ...acc,
      [`${SHOPIFY_PAGE_TYPES[key]} Link Clicked`]: matchLinkClickEvent(regex)
    }), {}),
    ...Object.entries(ACTION_SELECTORS).reduce((acc, [key, selector]) => ({
      ...acc,
      [`${key} Clicked`]: matchButtonClickEvent(key, selector)
    }), {})
  };
  var ShopifyMetadata = {
    cache: {},
    get pageType() {
      return window.ShopifyAnalytics?.meta?.page.pageType;
    },
    get selectedVariantId() {
      return window.ShopifyAnalytics?.meta?.selectedVariantId;
    },
    get product() {
      return window.ShopifyAnalytics?.meta?.product;
    },
    get products() {
      return window.ShopifyAnalytics?.meta?.products;
    },
    get checkout() {
      return window.Shopify?.Checkout;
    }
  };
  var SCROLL_BUCKETS = [10, 25, 50, 75, 90, 100];
  var DEFAULT_SCROLL_STATE = {
    settled: true,
    lastScrollTime: void 0,
    percentage: 0,
    direction: void 0,
    history: {}
  };
  var BrowserAssertionError = class extends Error {
    constructor() {
      super("This functionality can only be used in a browser");
    }
  };

  // src/browser/utils/index.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();

  // src/browser/utils/addEventInterceptor.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();

  // src/browser/utils/delayEvent.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function delayEvent(event) {
    const eventCopy = new event.constructor(event.type, event);
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
    return () => {
      eventCopy._internal = true;
      event.target?.dispatchEvent(eventCopy);
      return true;
    };
  }

  // src/browser/utils/addEventInterceptor.ts
  function addEventInterceptor(type, listener) {
    window?.addEventListener(type, function(event) {
      const isInternal = event._internal;
      if (!isInternal) {
        const resumeEvent = delayEvent(event);
        listener(event, resumeEvent);
        return false;
      }
    }, { capture: true, once: false, passive: false });
  }

  // src/browser/utils/assertBrowser.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function assertBrowser() {
    if (typeof window === "undefined") {
      throw new BrowserAssertionError();
    }
  }

  // src/browser/utils/cleanInternalEventData.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function cleanInternalEventData(event) {
    delete event.properties?.event;
    delete event.properties?.target;
  }

  // src/browser/utils/createMiddleware.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function createMiddleware(typeOrFn, fn) {
    return ({ payload, next }) => {
      if (typeof typeOrFn === "function") {
        typeOrFn(payload.obj);
      } else {
        const type = typeOrFn;
        const isEventType = payload.obj.type === type;
        const isMatchingTrackEvent = payload.obj.event === type;
        if (isEventType || isMatchingTrackEvent) {
          fn?.(payload.obj);
        }
      }
      next(payload);
    };
  }

  // src/browser/utils/createShopifyAttributeInput.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function createShopifyAttributeElement(key, value) {
    const containerElement = document.createElement("p");
    if (ShopifyMetadata.pageType === "product") {
      containerElement.className = `product-property__field`;
    } else if (ShopifyMetadata.pageType === "cart") {
      containerElement.className = `cart-attribute__field`;
    } else {
      containerElement.className = `checkout-attribute__field`;
    }
    containerElement.hidden = true;
    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", `attributes[${key}]`);
    const inputElement = document.createElement("input");
    const primaryKey = ShopifyMetadata.pageType === "product" ? "properties" : "attributes";
    inputElement.name = `${primaryKey}[${key}]`;
    inputElement.value = value;
    inputElement.type = "hidden";
    containerElement.append(labelElement, inputElement);
    return containerElement;
  }

  // src/browser/utils/getClickEventProperties.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();

  // src/browser/utils/getElementAncestors.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();

  // src/browser/utils/getElementSiblingIndex.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();

  // src/browser/utils/getElementSiblings.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function* getElementSiblings(el) {
    while (el?.nodeType === Node.ELEMENT_NODE) {
      const type = el.nodeName.toLowerCase();
      yield { type, id: el.id, classes: Array.from(el.classList) };
      el = el.previousSibling;
    }
    return;
  }

  // src/browser/utils/getElementSiblingIndex.ts
  function getElementSiblingIndex(el) {
    let index = 1;
    for (const sibling of getElementSiblings(el)) {
      if (sibling.type == el.nodeName.toLowerCase())
        index++;
    }
    return index;
  }

  // src/browser/utils/getElementAncestors.ts
  function* getElementAncestors(el) {
    while (el instanceof HTMLElement && el.parentNode?.nodeType === Node.ELEMENT_NODE) {
      const type = el.nodeName.toLowerCase();
      const id = typeof el.id === "string" ? el.id : void 0;
      const name = el instanceof HTMLFormElement || el instanceof HTMLInputElement ? el.name : void 0;
      const classes = el.classList.length ? Array.from(el.classList) : void 0;
      const nthOfType = getElementSiblingIndex(el.parentElement);
      yield {
        type,
        id,
        name,
        classes,
        nthOfType
      };
      el = el.parentNode;
    }
    return;
  }

  // src/browser/utils/getElementAttributes.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function getElementAttributes(el) {
    return el?.getAttributeNames().reduce((acc, attr) => {
      const val = el.getAttribute(attr);
      if (val) {
        acc[attr] = val.trim();
      }
      return acc;
    }, {});
  }

  // src/browser/utils/getClickEventProperties.ts
  function getClickEventProperties(event) {
    const target = getClickEventTarget(event) ?? event?.target;
    if (!target)
      return {};
    return {
      text: target?.textContent?.trim(),
      element: target?.tagName?.toLocaleLowerCase(),
      classes: Array.from(target?.classList?.entries() ?? [])?.map(([, className]) => className.trim()),
      attributes: JSON.stringify(getElementAttributes(target)),
      ancestors: Array.from(getElementAncestors(target))
    };
  }

  // src/browser/utils/getElementClickEventName.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();

  // src/browser/utils/getScrollPercent.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function getScrollPercent() {
    const h = document.documentElement, b = document.body, st = "scrollTop", sh = "scrollHeight";
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
  }

  // src/browser/utils/isElementNavigationInitiator.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function isElementNavigationInitiator(element) {
    if (!element)
      return false;
    const tag = element.tagName.toLowerCase();
    const href = element.getAttribute("href");
    const isLink = tag === "a" && href;
    return isLink;
  }

  // src/browser/utils/onWindowScroll.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function onWindowScroll({
    onScroll,
    onSettled
  }) {
    const state = Object.assign({}, DEFAULT_SCROLL_STATE);
    const listener = () => {
      const percentage = getScrollPercent();
      const newState = Object.assign({}, state, {
        percentage,
        lastScrollTime: Date.now(),
        settled: false,
        direction: state.percentage < percentage ? "forward" : "backward"
      });
      onScroll({ ...newState }, { ...state });
      Object.assign(state, newState);
    };
    window.addEventListener("scroll", listener);
    window.setInterval(() => {
      if (!state.settled && !!state.lastScrollTime && Date.now() - state.lastScrollTime >= 1e3) {
        state.settled = true;
        onSettled?.(state);
      }
    }, 50);
    return () => window.removeEventListener("scroll", listener);
  }

  // src/browser/utils/parseCookie.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function parseCookie(str) {
    return str.split(";").map((v) => v.split("=")).reduce((acc, v) => {
      acc[decodeURIComponent(v[0]?.trim()) || ""] = decodeURIComponent(v[1]?.trim());
      return acc;
    }, {});
  }

  // src/browser/utils/parseJson.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function parseJson(val) {
    try {
      return JSON.parse(val);
    } catch {
      return void 0;
    }
  }

  // src/browser/utils/parseQueryParams.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function parseQueryParams(search) {
    return {
      ...search?.replace("?", "")?.split("&")?.reduce((acc, params) => {
        const [key, val] = params.trim().split("=");
        return { ...acc, [key]: val };
      }, {})
    };
  }

  // src/browser/utils/setClickEventAction.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function setClickEventAction(event) {
    const properties = event.properties ?? { attributes: {} };
    const mouseEvent = properties.event;
    const target = getClickEventTarget(mouseEvent);
    if (event && !properties.action) {
      const actionFromAttribute = target?.getAttribute("data-analytics-id");
      if (actionFromAttribute) {
        console.log(actionFromAttribute);
        properties.action = actionFromAttribute;
      } else {
        const [action] = Object.entries(CLICK_EVENTS).find(([, isMatch]) => isMatch(mouseEvent)) ?? [];
        properties.action = action ?? null;
      }
    }
  }

  // src/browser/utils/setClickEventProperties.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function setClickEventProperties(event) {
    const mouseEvent = event.properties?.event;
    event.properties = {
      ...event.properties,
      ...getClickEventProperties(mouseEvent)
    };
  }

  // src/browser/utils/setClickEventShopifyFormData.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();

  // ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/index.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();

  // ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/rng.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }

  // ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/stringify.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();

  // ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/validate.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();

  // ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/regex.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

  // ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/validate.js
  function validate3(uuid) {
    return typeof uuid === "string" && regex_default.test(uuid);
  }
  var validate_default = validate3;

  // ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/stringify.js
  var byteToHex = [];
  for (i = 0; i < 256; ++i) {
    byteToHex.push((i + 256).toString(16).substr(1));
  }
  var i;
  function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
    if (!validate_default(uuid)) {
      throw TypeError("Stringified UUID is invalid");
    }
    return uuid;
  }
  var stringify_default = stringify;

  // ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function v42(options, buf, offset) {
    options = options || {};
    var rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }
      return buf;
    }
    return stringify_default(rnds);
  }
  var v4_default = v42;

  // src/browser/utils/setShopifyFormData.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function setShopifyFormData(key, value) {
    const forms = document.getElementsByTagName("form") ?? [];
    Array.from(forms).forEach((form2) => {
      form2.appendChild(createShopifyAttributeElement(key, value));
    });
  }

  // src/browser/utils/setClickEventShopifyFormData.ts
  function setClickEventShopifyFormData(event) {
    event.messageId ||= v4_default();
    event.timestamp ||= new Date(Date.now()).toISOString();
    setShopifyFormData("_os_related_message_timestamp", typeof event.timestamp === "string" ? event.timestamp : event.timestamp.toISOString());
    setShopifyFormData("_os_related_message_id", event.messageId);
  }

  // src/browser/utils/setPageEventName.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function setPageEventName(event) {
    const [name] = Object.entries(PAGE_EVENTS).find(([, isMatch]) => isMatch()) ?? [];
    event.name = name ? `${name} Viewed` : void 0;
  }

  // src/browser/utils/setPageEventProperties.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function setPageEventProperties(event) {
    event.properties = {
      ...event.properties,
      ...event.properties?.page
    };
  }

  // src/browser/utils/setSegmentEventContext.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  function setSegmentEventContext(event) {
    const shopifyDataScripts = document.head.querySelectorAll("script[data-type]");
    const shopifyData = Array.from(shopifyDataScripts).reduce((acc, script) => ({
      ...acc,
      [script.getAttribute("data-type") ?? ""]: parseJson(script.innerText)
    }), {});
    const cookie = parseCookie(document.cookie);
    const klaviyo = localStorage.getItem("klaviyoOnsite");
    const { step, token, customer, cartToken, estimatedPrice, geolocatedAddress, i18n } = window.Shopify?.Checkout ?? {};
    const checkout = window.Shopify?.Checkout ? {
      checkout: JSON.stringify({
        step,
        token,
        customer,
        cartToken,
        estimatedPrice,
        geolocatedAddress,
        i18n
      })
    } : {};
    event.context = {
      checkout: JSON.stringify(checkout),
      ...event?.context,
      page: {
        ...event.context?.page,
        query: JSON.stringify(parseQueryParams(event.context?.page.search))
      },
      theme: shopifyData.theme,
      selectedVariantId: ShopifyMetadata.selectedVariantId,
      klaviyo,
      fbp: cookie["_fbp"],
      fbc: cookie["_fbc"],
      sclid: cookie["_sclid"],
      gclid: cookie["_gclid"],
      ga: cookie["_ga"],
      gid: cookie["_gid"]
    };
    console.log();
  }

  // src/browser/utils/identifyUser.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();

  // src/browser/utils/getUserId.ts
  init_define_OS_ENV_ANALYTICS_PAGE_CONFIG();
  init_define_OS_ENV_SEGMENT_SETTINGS();
  async function getUserId() {
    const FingerprintJS = await import(`https://fpcdn.io/v3/${"GLlVgEEjZjh95tTyc4ZC"}`);
    const fp = await FingerprintJS.load();
    const { visitorId } = await fp.get();
    return visitorId;
  }

  // src/browser/utils/identifyUser.ts
  async function identifyUser(analytics) {
    const { ajs_user_id: userIdFromCookie, ajs_anonymous_id: anonymousIdFromCookie } = parseCookie(document.cookie);
    setShopifyFormData("_os_anonymous_id", anonymousIdFromCookie);
    if (userIdFromCookie) {
      setShopifyFormData("_os_user_id", userIdFromCookie);
    } else {
      window.addEventListener("pointerdown", async () => {
        const userId = await getUserId();
        setShopifyFormData("_os_user_id", userId);
        analytics.identify(userId, {
          browserId: userId
        });
      }, { once: true });
    }
  }

  // src/browser/index.ts
  async function main({
    writeKey = "gDdVNSnGNypHpimb21HjHr0jQZ9Z0X57",
    cdnSettings = define_OS_ENV_SEGMENT_SETTINGS_default
  } = {}) {
    try {
      assertBrowser();
      const analytics = AnalyticsBrowser.load({
        writeKey,
        cdnSettings
      }, {
        integrations: {
          "Segment.io": {}
        }
      });
      analytics.addSourceMiddleware(createMiddleware(setSegmentEventContext));
      analytics.addSourceMiddleware(createMiddleware("page", setPageEventName));
      analytics.addSourceMiddleware(createMiddleware("page", setPageEventProperties));
      analytics.addSourceMiddleware(createMiddleware("Element Clicked", setClickEventProperties));
      analytics.addSourceMiddleware(createMiddleware("Element Clicked", setClickEventAction));
      analytics.addSourceMiddleware(createMiddleware("Element Clicked", setClickEventShopifyFormData));
      analytics.addSourceMiddleware(createMiddleware(cleanInternalEventData));
      onWindowScroll({
        onScroll: ({ direction, percentage, history }) => {
          if (direction === "forward") {
            SCROLL_BUCKETS.forEach((bucket, i) => {
              if (percentage > bucket && percentage < SCROLL_BUCKETS[i + 1] && !history[bucket]) {
                history[bucket] = true;
                analytics.track("Scroll Threshold", {
                  bucket,
                  percentage,
                  direction
                });
              }
            });
          }
        }
      });
      addEventInterceptor("click", (event, resume) => {
        const target = getClickEventTarget(event);
        if (!target)
          return resume();
        analytics.track("Element Clicked", { event });
        analytics.ctx?.flush();
        const timeout = isElementNavigationInitiator(target) ? 300 : 0;
        setTimeout(resume, timeout);
      });
      analytics.page();
      void identifyUser(analytics);
      return analytics;
    } catch (e) {
      console.error(`[OS Analytics] Could not load Segment:
    ${e instanceof Error ? e.message : e}`);
    }
  }
  var browser_default = window.addEventListener("load", () => setTimeout(main, 200));
})();
/*! js-cookie v3.0.1 | MIT */
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
