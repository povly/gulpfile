"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Swiper 11.1.14
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2025 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 21, 2025
 */

var Swiper = function () {
  'use strict';

  /**
   * SSR Window 4.0.2
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2021, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: December 13, 2021
   */
  /* eslint-disable no-param-reassign */
  function isObject$1(obj) {
    return obj !== null && _typeof(obj) === 'object' && 'constructor' in obj && obj.constructor === Object;
  }
  function extend$1(target, src) {
    if (target === void 0) {
      target = {};
    }
    if (src === void 0) {
      src = {};
    }
    Object.keys(src).forEach(function (key) {
      if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
        extend$1(target[key], src[key]);
      }
    });
  }
  var ssrDocument = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ''
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: ''
    }
  };
  function getDocument() {
    var doc = typeof document !== 'undefined' ? document : {};
    extend$1(doc, ssrDocument);
    return doc;
  }
  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ''
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: ''
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return '';
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(callback) {
      if (typeof setTimeout === 'undefined') {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(id) {
      if (typeof setTimeout === 'undefined') {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow() {
    var win = typeof window !== 'undefined' ? window : {};
    extend$1(win, ssrWindow);
    return win;
  }
  function classesToTokens(classes) {
    if (classes === void 0) {
      classes = '';
    }
    return classes.trim().split(' ').filter(function (c) {
      return !!c.trim();
    });
  }
  function deleteProps(obj) {
    var object = obj;
    Object.keys(object).forEach(function (key) {
      try {
        object[key] = null;
      } catch (e) {
        // no getter for object
      }
      try {
        delete object[key];
      } catch (e) {
        // something got wrong
      }
    });
  }
  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle$1(el) {
    var window = getWindow();
    var style;
    if (window.getComputedStyle) {
      style = window.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = 'x';
    }
    var window = getWindow();
    var matrix;
    var curTransform;
    var transformMatrix;
    var curStyle = getComputedStyle$1(el);
    if (window.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(',').length > 6) {
        curTransform = curTransform.split(', ').map(function (a) {
          return a.replace(',', '.');
        }).join(', ');
      }
      // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case
      transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
      matrix = transformMatrix.toString().split(',');
    }
    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
      // Normal Browsers
      else curTransform = parseFloat(matrix[4]);
    }
    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
      // Normal Browsers
      else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject(o) {
    return _typeof(o) === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
  }
  function isNode(node) {
    // eslint-disable-next-line
    if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
      return node instanceof HTMLElement;
    }
    return node && (node.nodeType === 1 || node.nodeType === 11);
  }
  function extend() {
    var to = Object(arguments.length <= 0 ? undefined : arguments[0]);
    var noExtend = ['__proto__', 'constructor', 'prototype'];
    for (var i = 1; i < arguments.length; i += 1) {
      var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
      if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
        var keysArray = Object.keys(Object(nextSource)).filter(function (key) {
          return noExtend.indexOf(key) < 0;
        });
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll(_ref) {
    var swiper = _ref.swiper,
      targetPosition = _ref.targetPosition,
      side = _ref.side;
    var window = getWindow();
    var startPosition = -swiper.translate;
    var startTime = null;
    var time;
    var duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = 'none';
    window.cancelAnimationFrame(swiper.cssModeFrameID);
    var dir = targetPosition > startPosition ? 'next' : 'prev';
    var isOutOfBound = function isOutOfBound(current, target) {
      return dir === 'next' && current >= target || dir === 'prev' && current <= target;
    };
    var animate = function animate() {
      time = new Date().getTime();
      if (startTime === null) {
        startTime = time;
      }
      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      var currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }
      swiper.wrapperEl.scrollTo(_defineProperty({}, side, currentPosition));
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper.wrapperEl.style.overflow = 'hidden';
        swiper.wrapperEl.style.scrollSnapType = '';
        setTimeout(function () {
          swiper.wrapperEl.style.overflow = '';
          swiper.wrapperEl.scrollTo(_defineProperty({}, side, currentPosition));
        });
        window.cancelAnimationFrame(swiper.cssModeFrameID);
        return;
      }
      swiper.cssModeFrameID = window.requestAnimationFrame(animate);
    };
    animate();
  }
  function getSlideTransformEl(slideEl) {
    return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
  }
  function elementChildren(element, selector) {
    if (selector === void 0) {
      selector = '';
    }
    var children = _toConsumableArray(element.children);
    if (element instanceof HTMLSlotElement) {
      children.push.apply(children, _toConsumableArray(element.assignedElements()));
    }
    if (!selector) {
      return children;
    }
    return children.filter(function (el) {
      return el.matches(selector);
    });
  }
  function elementIsChildOf(el, parent) {
    var isChild = parent.contains(el);
    if (!isChild && parent instanceof HTMLSlotElement) {
      var children = _toConsumableArray(parent.assignedElements());
      return children.includes(el);
    }
    return isChild;
  }
  function showWarning(text) {
    try {
      console.warn(text);
      return;
    } catch (err) {
      // err
    }
  }
  function createElement(tag, classes) {
    var _el$classList;
    if (classes === void 0) {
      classes = [];
    }
    var el = document.createElement(tag);
    (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(Array.isArray(classes) ? classes : classesToTokens(classes)));
    return el;
  }
  function elementOffset(el) {
    var window = getWindow();
    var document = getDocument();
    var box = el.getBoundingClientRect();
    var body = document.body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;
    var scrollTop = el === window ? window.scrollY : el.scrollTop;
    var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }
  function elementPrevAll(el, selector) {
    var prevEls = [];
    while (el.previousElementSibling) {
      var prev = el.previousElementSibling; // eslint-disable-line
      if (selector) {
        if (prev.matches(selector)) prevEls.push(prev);
      } else prevEls.push(prev);
      el = prev;
    }
    return prevEls;
  }
  function elementNextAll(el, selector) {
    var nextEls = [];
    while (el.nextElementSibling) {
      var next = el.nextElementSibling; // eslint-disable-line
      if (selector) {
        if (next.matches(selector)) nextEls.push(next);
      } else nextEls.push(next);
      el = next;
    }
    return nextEls;
  }
  function elementStyle(el, prop) {
    var window = getWindow();
    return window.getComputedStyle(el, null).getPropertyValue(prop);
  }
  function elementIndex(el) {
    var child = el;
    var i;
    if (child) {
      i = 0;
      // eslint-disable-next-line
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) i += 1;
      }
      return i;
    }
    return undefined;
  }
  function elementParents(el, selector) {
    var parents = []; // eslint-disable-line
    var parent = el.parentElement; // eslint-disable-line
    while (parent) {
      if (selector) {
        if (parent.matches(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }
      parent = parent.parentElement;
    }
    return parents;
  }
  function elementTransitionEnd(el, callback) {
    function fireCallBack(e) {
      if (e.target !== el) return;
      callback.call(el, e);
      el.removeEventListener('transitionend', fireCallBack);
    }
    if (callback) {
      el.addEventListener('transitionend', fireCallBack);
    }
  }
  function elementOuterSize(el, size, includeMargins) {
    var window = getWindow();
    if (includeMargins) {
      return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
    }
    return el.offsetWidth;
  }
  function makeElementsArray(el) {
    return (Array.isArray(el) ? el : [el]).filter(function (e) {
      return !!e;
    });
  }
  var support;
  function calcSupport() {
    var window = getWindow();
    var document = getDocument();
    return {
      smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
      touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }
  var deviceCached;
  function calcDevice(_temp) {
    var _ref3 = _temp === void 0 ? {} : _temp,
      userAgent = _ref3.userAgent;
    var support = getSupport();
    var window = getWindow();
    var platform = window.navigator.platform;
    var ua = userAgent || window.navigator.userAgent;
    var device = {
      ios: false,
      android: false
    };
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    var windows = platform === 'Win32';
    var macos = platform === 'MacIntel';

    // iPadOs 13 fix
    var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
    if (!ipad && macos && support.touch && iPadScreens.indexOf("".concat(screenWidth, "x").concat(screenHeight)) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad) ipad = [0, 1, '13_0_0'];
      macos = false;
    }

    // Android
    if (android && !windows) {
      device.os = 'android';
      device.android = true;
    }
    if (ipad || iphone || ipod) {
      device.os = 'ios';
      device.ios = true;
    }

    // Export object
    return device;
  }
  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }
    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }
    return deviceCached;
  }
  var browser;
  function calcBrowser() {
    var window = getWindow();
    var device = getDevice();
    var needPerspectiveFix = false;
    function isSafari() {
      var ua = window.navigator.userAgent.toLowerCase();
      return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
    }
    if (isSafari()) {
      var ua = String(window.navigator.userAgent);
      if (ua.includes('Version/')) {
        var _ua$split$1$split$0$s = ua.split('Version/')[1].split(' ')[0].split('.').map(function (num) {
            return Number(num);
          }),
          _ua$split$1$split$0$s2 = _slicedToArray(_ua$split$1$split$0$s, 2),
          major = _ua$split$1$split$0$s2[0],
          minor = _ua$split$1$split$0$s2[1];
        needPerspectiveFix = major < 16 || major === 16 && minor < 2;
      }
    }
    var isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
    var isSafariBrowser = isSafari();
    var need3dFix = isSafariBrowser || isWebView && device.ios;
    return {
      isSafari: needPerspectiveFix || isSafariBrowser,
      needPerspectiveFix: needPerspectiveFix,
      need3dFix: need3dFix,
      isWebView: isWebView
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }
  function Resize(_ref) {
    var swiper = _ref.swiper,
      on = _ref.on,
      emit = _ref.emit;
    var window = getWindow();
    var observer = null;
    var animationFrame = null;
    var resizeHandler = function resizeHandler() {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit('beforeResize');
      emit('resize');
    };
    var createObserver = function createObserver() {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      observer = new ResizeObserver(function (entries) {
        animationFrame = window.requestAnimationFrame(function () {
          var width = swiper.width,
            height = swiper.height;
          var newWidth = width;
          var newHeight = height;
          entries.forEach(function (_ref2) {
            var contentBoxSize = _ref2.contentBoxSize,
              contentRect = _ref2.contentRect,
              target = _ref2.target;
            if (target && target !== swiper.el) return;
            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
          });
          if (newWidth !== width || newHeight !== height) {
            resizeHandler();
          }
        });
      });
      observer.observe(swiper.el);
    };
    var removeObserver = function removeObserver() {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      if (observer && observer.unobserve && swiper.el) {
        observer.unobserve(swiper.el);
        observer = null;
      }
    };
    var orientationChangeHandler = function orientationChangeHandler() {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit('orientationchange');
    };
    on('init', function () {
      if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
        createObserver();
        return;
      }
      window.addEventListener('resize', resizeHandler);
      window.addEventListener('orientationchange', orientationChangeHandler);
    });
    on('destroy', function () {
      removeObserver();
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('orientationchange', orientationChangeHandler);
    });
  }
  function Observer(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
    var observers = [];
    var window = getWindow();
    var attach = function attach(target, options) {
      if (options === void 0) {
        options = {};
      }
      var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
      var observer = new ObserverFunc(function (mutations) {
        // The observerUpdate event should only be triggered
        // once despite the number of mutations.  Additional
        // triggers are redundant and are very costly
        if (swiper.__preventObserver__) return;
        if (mutations.length === 1) {
          emit('observerUpdate', mutations[0]);
          return;
        }
        var observerUpdate = function observerUpdate() {
          emit('observerUpdate', mutations[0]);
        };
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(observerUpdate);
        } else {
          window.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: swiper.isElement || (typeof options.childList === 'undefined' ? true : options).childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData
      });
      observers.push(observer);
    };
    var init = function init() {
      if (!swiper.params.observer) return;
      if (swiper.params.observeParents) {
        var containerParents = elementParents(swiper.hostEl);
        for (var i = 0; i < containerParents.length; i += 1) {
          attach(containerParents[i]);
        }
      }
      // Observe container
      attach(swiper.hostEl, {
        childList: swiper.params.observeSlideChildren
      });

      // Observe wrapper
      attach(swiper.wrapperEl, {
        attributes: false
      });
    };
    var destroy = function destroy() {
      observers.forEach(function (observer) {
        observer.disconnect();
      });
      observers.splice(0, observers.length);
    };
    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    });
    on('init', init);
    on('destroy', destroy);
  }

  /* eslint-disable no-underscore-dangle */

  var eventsEmitter = {
    on: function on(events, handler, priority) {
      var self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== 'function') return self;
      var method = priority ? 'unshift' : 'push';
      events.split(' ').forEach(function (event) {
        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
        self.eventsListeners[event][method](handler);
      });
      return self;
    },
    once: function once(events, handler, priority) {
      var self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== 'function') return self;
      function onceHandler() {
        self.off(events, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        handler.apply(self, args);
      }
      onceHandler.__emitterProxy = handler;
      return self.on(events, onceHandler, priority);
    },
    onAny: function onAny(handler, priority) {
      var self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== 'function') return self;
      var method = priority ? 'unshift' : 'push';
      if (self.eventsAnyListeners.indexOf(handler) < 0) {
        self.eventsAnyListeners[method](handler);
      }
      return self;
    },
    offAny: function offAny(handler) {
      var self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsAnyListeners) return self;
      var index = self.eventsAnyListeners.indexOf(handler);
      if (index >= 0) {
        self.eventsAnyListeners.splice(index, 1);
      }
      return self;
    },
    off: function off(events, handler) {
      var self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsListeners) return self;
      events.split(' ').forEach(function (event) {
        if (typeof handler === 'undefined') {
          self.eventsListeners[event] = [];
        } else if (self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(function (eventHandler, index) {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self.eventsListeners[event].splice(index, 1);
            }
          });
        }
      });
      return self;
    },
    emit: function emit() {
      var self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsListeners) return self;
      var events;
      var data;
      var context;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (typeof args[0] === 'string' || Array.isArray(args[0])) {
        events = args[0];
        data = args.slice(1, args.length);
        context = self;
      } else {
        events = args[0].events;
        data = args[0].data;
        context = args[0].context || self;
      }
      data.unshift(context);
      var eventsArray = Array.isArray(events) ? events : events.split(' ');
      eventsArray.forEach(function (event) {
        if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
          self.eventsAnyListeners.forEach(function (eventHandler) {
            eventHandler.apply(context, [event].concat(_toConsumableArray(data)));
          });
        }
        if (self.eventsListeners && self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(function (eventHandler) {
            eventHandler.apply(context, data);
          });
        }
      });
      return self;
    }
  };
  function updateSize() {
    var swiper = this;
    var width;
    var height;
    var el = swiper.el;
    if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
      width = swiper.params.width;
    } else {
      width = el.clientWidth;
    }
    if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
      height = swiper.params.height;
    } else {
      height = el.clientHeight;
    }
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    }

    // Subtract paddings
    width = width - parseInt(elementStyle(el, 'padding-left') || 0, 10) - parseInt(elementStyle(el, 'padding-right') || 0, 10);
    height = height - parseInt(elementStyle(el, 'padding-top') || 0, 10) - parseInt(elementStyle(el, 'padding-bottom') || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
      width: width,
      height: height,
      size: swiper.isHorizontal() ? width : height
    });
  }
  function updateSlides() {
    var swiper = this;
    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
    }
    var params = swiper.params;
    var wrapperEl = swiper.wrapperEl,
      slidesEl = swiper.slidesEl,
      swiperSize = swiper.size,
      rtl = swiper.rtlTranslate,
      wrongRTL = swiper.wrongRTL;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    var slides = elementChildren(slidesEl, ".".concat(swiper.params.slideClass, ", swiper-slide"));
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];
    var offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    var offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.slidesGrid.length;
    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index = 0;
    if (typeof swiperSize === 'undefined') {
      return;
    }
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
    } else if (typeof spaceBetween === 'string') {
      spaceBetween = parseFloat(spaceBetween);
    }
    swiper.virtualSize = -spaceBetween;

    // reset margins
    slides.forEach(function (slideEl) {
      if (rtl) {
        slideEl.style.marginLeft = '';
      } else {
        slideEl.style.marginRight = '';
      }
      slideEl.style.marginBottom = '';
      slideEl.style.marginTop = '';
    });

    // reset cssMode offsets
    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(wrapperEl, '--swiper-centered-offset-before', '');
      setCSSProperty(wrapperEl, '--swiper-centered-offset-after', '');
    }
    var gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) {
      swiper.grid.initSlides(slides);
    } else if (swiper.grid) {
      swiper.grid.unsetSlides();
    }

    // Calc slides
    var slideSize;
    var shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(function (key) {
      return typeof params.breakpoints[key].slidesPerView !== 'undefined';
    }).length > 0;
    for (var i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      var _slide = void 0;
      if (slides[i]) _slide = slides[i];
      if (gridEnabled) {
        swiper.grid.updateSlide(i, _slide, slides);
      }
      if (slides[i] && elementStyle(_slide, 'display') === 'none') continue; // eslint-disable-line

      if (params.slidesPerView === 'auto') {
        if (shouldResetSlideSize) {
          slides[i].style[swiper.getDirectionLabel('width')] = "";
        }
        var slideStyles = getComputedStyle(_slide);
        var currentTransform = _slide.style.transform;
        var currentWebKitTransform = _slide.style.webkitTransform;
        if (currentTransform) {
          _slide.style.transform = 'none';
        }
        if (currentWebKitTransform) {
          _slide.style.webkitTransform = 'none';
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? elementOuterSize(_slide, 'width', true) : elementOuterSize(_slide, 'height', true);
        } else {
          // eslint-disable-next-line
          var width = getDirectionPropertyValue(slideStyles, 'width');
          var paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
          var paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
          var marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
          var marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
          var boxSizing = slideStyles.getPropertyValue('box-sizing');
          if (boxSizing && boxSizing === 'border-box') {
            slideSize = width + marginLeft + marginRight;
          } else {
            var _slide2 = _slide,
              clientWidth = _slide2.clientWidth,
              offsetWidth = _slide2.offsetWidth;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          _slide.style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          _slide.style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths) slideSize = Math.floor(slideSize);
        if (slides[i]) {
          slides[i].style[swiper.getDirectionLabel('width')] = "".concat(slideSize, "px");
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
      wrapperEl.style.width = "".concat(swiper.virtualSize + spaceBetween, "px");
    }
    if (params.setWrapperSize) {
      wrapperEl.style[swiper.getDirectionLabel('width')] = "".concat(swiper.virtualSize + spaceBetween, "px");
    }
    if (gridEnabled) {
      swiper.grid.updateWrapperSize(slideSize, snapGrid);
    }

    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
      var newSlidesGrid = [];
      for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
        var slidesGridItem = snapGrid[_i2];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (isVirtual && params.loop) {
      var size = slidesSizesGrid[0] + spaceBetween;
      if (params.slidesPerGroup > 1) {
        var groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
        var groupSize = size * params.slidesPerGroup;
        for (var _i3 = 0; _i3 < groups; _i3 += 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
      }
      for (var _i4 = 0; _i4 < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; _i4 += 1) {
        if (params.slidesPerGroup === 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + size);
        }
        slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
        swiper.virtualSize += size;
      }
    }
    if (snapGrid.length === 0) snapGrid = [0];
    if (spaceBetween !== 0) {
      var key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
      slides.filter(function (_, slideIndex) {
        if (!params.cssMode || params.loop) return true;
        if (slideIndex === slides.length - 1) {
          return false;
        }
        return true;
      }).forEach(function (slideEl) {
        slideEl.style[key] = "".concat(spaceBetween, "px");
      });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      var allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      var maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
      snapGrid = snapGrid.map(function (snap) {
        if (snap <= 0) return -offsetBefore;
        if (snap > maxSnap) return maxSnap + offsetAfter;
        return snap;
      });
    }
    if (params.centerInsufficientSlides) {
      var _allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        _allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      _allSlidesSize -= spaceBetween;
      var offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
      if (_allSlidesSize + offsetSize < swiperSize) {
        var allSlidesOffset = (swiperSize - _allSlidesSize - offsetSize) / 2;
        snapGrid.forEach(function (snap, snapIndex) {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach(function (snap, snapIndex) {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
    Object.assign(swiper, {
      slides: slides,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      slidesSizesGrid: slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
      setCSSProperty(wrapperEl, '--swiper-centered-offset-before', "".concat(-snapGrid[0], "px"));
      setCSSProperty(wrapperEl, '--swiper-centered-offset-after', "".concat(swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2, "px"));
      var addToSnapGrid = -swiper.snapGrid[0];
      var addToSlidesGrid = -swiper.slidesGrid[0];
      swiper.snapGrid = swiper.snapGrid.map(function (v) {
        return v + addToSnapGrid;
      });
      swiper.slidesGrid = swiper.slidesGrid.map(function (v) {
        return v + addToSlidesGrid;
      });
    }
    if (slidesLength !== previousSlidesLength) {
      swiper.emit('slidesLengthChange');
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) swiper.checkOverflow();
      swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit('slidesGridLengthChange');
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    swiper.emit('slidesUpdated');
    if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
      var backFaceHiddenClass = "".concat(params.containerModifierClass, "backface-hidden");
      var hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
      if (slidesLength <= params.maxBackfaceHiddenSlides) {
        if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
      } else if (hasClassBackfaceClassAdded) {
        swiper.el.classList.remove(backFaceHiddenClass);
      }
    }
  }
  function updateAutoHeight(speed) {
    var swiper = this;
    var activeSlides = [];
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var newHeight = 0;
    var i;
    if (typeof speed === 'number') {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    var getSlideByIndex = function getSlideByIndex(index) {
      if (isVirtual) {
        return swiper.slides[swiper.getSlideIndexByData(index)];
      }
      return swiper.slides[index];
    };
    // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        (swiper.visibleSlides || []).forEach(function (slide) {
          activeSlides.push(slide);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          var index = swiper.activeIndex + i;
          if (index > swiper.slides.length && !isVirtual) break;
          activeSlides.push(getSlideByIndex(index));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    }

    // Find new height from highest slide in view
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== 'undefined') {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }

    // Update Height
    if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = "".concat(newHeight, "px");
  }
  function updateSlidesOffset() {
    var swiper = this;
    var slides = swiper.slides;
    // eslint-disable-next-line
    var minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
    }
  }
  var toggleSlideClasses$1 = function toggleSlideClasses$1(slideEl, condition, className) {
    if (condition && !slideEl.classList.contains(className)) {
      slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
      slideEl.classList.remove(className);
    }
  };
  function updateSlidesProgress(translate) {
    if (translate === void 0) {
      translate = this && this.translate || 0;
    }
    var swiper = this;
    var params = swiper.params;
    var slides = swiper.slides,
      rtl = swiper.rtlTranslate,
      snapGrid = swiper.snapGrid;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
    var offsetCenter = -translate;
    if (rtl) offsetCenter = translate;
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    var spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
    } else if (typeof spaceBetween === 'string') {
      spaceBetween = parseFloat(spaceBetween);
    }
    for (var i = 0; i < slides.length; i += 1) {
      var _slide3 = slides[i];
      var slideOffset = _slide3.swiperSlideOffset;
      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }
      var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (_slide3.swiperSlideSize + spaceBetween);
      var originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (_slide3.swiperSlideSize + spaceBetween);
      var slideBefore = -(offsetCenter - slideOffset);
      var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      var isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
      var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
      if (isVisible) {
        swiper.visibleSlides.push(_slide3);
        swiper.visibleSlidesIndexes.push(i);
      }
      toggleSlideClasses$1(_slide3, isVisible, params.slideVisibleClass);
      toggleSlideClasses$1(_slide3, isFullyVisible, params.slideFullyVisibleClass);
      _slide3.progress = rtl ? -slideProgress : slideProgress;
      _slide3.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
  }
  function updateProgress(translate) {
    var swiper = this;
    if (typeof translate === 'undefined') {
      var multiplier = swiper.rtlTranslate ? -1 : 1;
      // eslint-disable-next-line
      translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    var params = swiper.params;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress,
      isBeginning = swiper.isBeginning,
      isEnd = swiper.isEnd,
      progressLoop = swiper.progressLoop;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / translatesDiff;
      var isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
      var isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
      isBeginning = isBeginningRounded || progress <= 0;
      isEnd = isEndRounded || progress >= 1;
      if (isBeginningRounded) progress = 0;
      if (isEndRounded) progress = 1;
    }
    if (params.loop) {
      var firstSlideIndex = swiper.getSlideIndexByData(0);
      var lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
      var firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
      var lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
      var translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
      var translateAbs = Math.abs(translate);
      if (translateAbs >= firstSlideTranslate) {
        progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
      } else {
        progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
      }
      if (progressLoop > 1) progressLoop -= 1;
    }
    Object.assign(swiper, {
      progress: progress,
      progressLoop: progressLoop,
      isBeginning: isBeginning,
      isEnd: isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) {
      swiper.emit('reachBeginning toEdge');
    }
    if (isEnd && !wasEnd) {
      swiper.emit('reachEnd toEdge');
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit('fromEdge');
    }
    swiper.emit('progress', progress);
  }
  var toggleSlideClasses = function toggleSlideClasses(slideEl, condition, className) {
    if (condition && !slideEl.classList.contains(className)) {
      slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
      slideEl.classList.remove(className);
    }
  };
  function updateSlidesClasses() {
    var swiper = this;
    var slides = swiper.slides,
      params = swiper.params,
      slidesEl = swiper.slidesEl,
      activeIndex = swiper.activeIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    var getFilteredSlide = function getFilteredSlide(selector) {
      return elementChildren(slidesEl, ".".concat(params.slideClass).concat(selector, ", swiper-slide").concat(selector))[0];
    };
    var activeSlide;
    var prevSlide;
    var nextSlide;
    if (isVirtual) {
      if (params.loop) {
        var slideIndex = activeIndex - swiper.virtual.slidesBefore;
        if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
        if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
        activeSlide = getFilteredSlide("[data-swiper-slide-index=\"".concat(slideIndex, "\"]"));
      } else {
        activeSlide = getFilteredSlide("[data-swiper-slide-index=\"".concat(activeIndex, "\"]"));
      }
    } else {
      if (gridEnabled) {
        activeSlide = slides.filter(function (slideEl) {
          return slideEl.column === activeIndex;
        })[0];
        nextSlide = slides.filter(function (slideEl) {
          return slideEl.column === activeIndex + 1;
        })[0];
        prevSlide = slides.filter(function (slideEl) {
          return slideEl.column === activeIndex - 1;
        })[0];
      } else {
        activeSlide = slides[activeIndex];
      }
    }
    if (activeSlide) {
      if (!gridEnabled) {
        // Next Slide
        nextSlide = elementNextAll(activeSlide, ".".concat(params.slideClass, ", swiper-slide"))[0];
        if (params.loop && !nextSlide) {
          nextSlide = slides[0];
        }

        // Prev Slide
        prevSlide = elementPrevAll(activeSlide, ".".concat(params.slideClass, ", swiper-slide"))[0];
        if (params.loop && !prevSlide === 0) {
          prevSlide = slides[slides.length - 1];
        }
      }
    }
    slides.forEach(function (slideEl) {
      toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
      toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
      toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
    });
    swiper.emitSlidesClasses();
  }
  var processLazyPreloader = function processLazyPreloader(swiper, imageEl) {
    if (!swiper || swiper.destroyed || !swiper.params) return;
    var slideSelector = function slideSelector() {
      return swiper.isElement ? "swiper-slide" : ".".concat(swiper.params.slideClass);
    };
    var slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
      var lazyEl = slideEl.querySelector(".".concat(swiper.params.lazyPreloaderClass));
      if (!lazyEl && swiper.isElement) {
        if (slideEl.shadowRoot) {
          lazyEl = slideEl.shadowRoot.querySelector(".".concat(swiper.params.lazyPreloaderClass));
        } else {
          // init later
          requestAnimationFrame(function () {
            if (slideEl.shadowRoot) {
              lazyEl = slideEl.shadowRoot.querySelector(".".concat(swiper.params.lazyPreloaderClass));
              if (lazyEl) lazyEl.remove();
            }
          });
        }
      }
      if (lazyEl) lazyEl.remove();
    }
  };
  var unlazy = function unlazy(swiper, index) {
    if (!swiper.slides[index]) return;
    var imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl) imageEl.removeAttribute('loading');
  };
  var preload = function preload(swiper) {
    if (!swiper || swiper.destroyed || !swiper.params) return;
    var amount = swiper.params.lazyPreloadPrevNext;
    var len = swiper.slides.length;
    if (!len || !amount || amount < 0) return;
    amount = Math.min(amount, len);
    var slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
    var activeIndex = swiper.activeIndex;
    if (swiper.params.grid && swiper.params.grid.rows > 1) {
      var activeColumn = activeIndex;
      var preloadColumns = [activeColumn - amount];
      preloadColumns.push.apply(preloadColumns, _toConsumableArray(Array.from({
        length: amount
      }).map(function (_, i) {
        return activeColumn + slidesPerView + i;
      })));
      swiper.slides.forEach(function (slideEl, i) {
        if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
      });
      return;
    }
    var slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind || swiper.params.loop) {
      for (var i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
        var realIndex = (i % len + len) % len;
        if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
      }
    } else {
      for (var _i5 = Math.max(activeIndex - amount, 0); _i5 <= Math.min(slideIndexLastInView + amount, len - 1); _i5 += 1) {
        if (_i5 !== activeIndex && (_i5 > slideIndexLastInView || _i5 < activeIndex)) {
          unlazy(swiper, _i5);
        }
      }
    }
  };
  function getActiveIndexByTranslate(swiper) {
    var slidesGrid = swiper.slidesGrid,
      params = swiper.params;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var activeIndex;
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
    return activeIndex;
  }
  function updateActiveIndex(newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var snapGrid = swiper.snapGrid,
      params = swiper.params,
      previousIndex = swiper.activeIndex,
      previousRealIndex = swiper.realIndex,
      previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;
    var getVirtualRealIndex = function getVirtualRealIndex(aIndex) {
      var realIndex = aIndex - swiper.virtual.slidesBefore;
      if (realIndex < 0) {
        realIndex = swiper.virtual.slides.length + realIndex;
      }
      if (realIndex >= swiper.virtual.slides.length) {
        realIndex -= swiper.virtual.slides.length;
      }
      return realIndex;
    };
    if (typeof activeIndex === 'undefined') {
      activeIndex = getActiveIndexByTranslate(swiper);
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex && !swiper.params.loop) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit('snapIndexChange');
      }
      return;
    }
    if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
      return;
    }
    var gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;

    // Get real index
    var realIndex;
    if (swiper.virtual && params.virtual.enabled && params.loop) {
      realIndex = getVirtualRealIndex(activeIndex);
    } else if (gridEnabled) {
      var firstSlideInColumn = swiper.slides.filter(function (slideEl) {
        return slideEl.column === activeIndex;
      })[0];
      var activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
      if (Number.isNaN(activeSlideIndex)) {
        activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
      }
      realIndex = Math.floor(activeSlideIndex / params.grid.rows);
    } else if (swiper.slides[activeIndex]) {
      var slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
      if (slideIndex) {
        realIndex = parseInt(slideIndex, 10);
      } else {
        realIndex = activeIndex;
      }
    } else {
      realIndex = activeIndex;
    }
    Object.assign(swiper, {
      previousSnapIndex: previousSnapIndex,
      snapIndex: snapIndex,
      previousRealIndex: previousRealIndex,
      realIndex: realIndex,
      previousIndex: previousIndex,
      activeIndex: activeIndex
    });
    if (swiper.initialized) {
      preload(swiper);
    }
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      if (previousRealIndex !== realIndex) {
        swiper.emit('realIndexChange');
      }
      swiper.emit('slideChange');
    }
  }
  function updateClickedSlide(el, path) {
    var swiper = this;
    var params = swiper.params;
    var slide = el.closest(".".concat(params.slideClass, ", swiper-slide"));
    if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
      _toConsumableArray(path.slice(path.indexOf(el) + 1, path.length)).forEach(function (pathEl) {
        if (!slide && pathEl.matches && pathEl.matches(".".concat(params.slideClass, ", swiper-slide"))) {
          slide = pathEl;
        }
      });
    }
    var slideFound = false;
    var slideIndex;
    if (slide) {
      for (var i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) {
          slideFound = true;
          slideIndex = i;
          break;
        }
      }
    }
    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }
  var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide
  };
  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? 'x' : 'y';
    }
    var swiper = this;
    var params = swiper.params,
      rtl = swiper.rtlTranslate,
      translate = swiper.translate,
      wrapperEl = swiper.wrapperEl;
    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }
    if (params.cssMode) {
      return translate;
    }
    var currentTranslate = getTranslate(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }
  function setTranslate(translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate,
      params = swiper.params,
      wrapperEl = swiper.wrapperEl,
      progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;
    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }
    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      if (swiper.isHorizontal()) {
        x -= swiper.cssOverflowAdjustment();
      } else {
        y -= swiper.cssOverflowAdjustment();
      }
      wrapperEl.style.transform = "translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)");
    }

    // Check if we need to update progress
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }
    swiper.emit('setTranslate', swiper.translate, byController);
  }
  function minTranslate() {
    return -this.snapGrid[0];
  }
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
    if (translate === void 0) {
      translate = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (translateBounds === void 0) {
      translateBounds = true;
    }
    var swiper = this;
    var params = swiper.params,
      wrapperEl = swiper.wrapperEl;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    var minTranslate = swiper.minTranslate();
    var maxTranslate = swiper.maxTranslate();
    var newTranslate;
    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

    // Update progress
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      var isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      } else {
        var _wrapperEl$scrollTo;
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper: swiper,
            targetPosition: -newTranslate,
            side: isH ? 'left' : 'top'
          });
          return true;
        }
        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _defineProperty(_wrapperEl$scrollTo, isH ? 'left' : 'top', -newTranslate), _defineProperty(_wrapperEl$scrollTo, "behavior", 'smooth'), _wrapperEl$scrollTo));
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.emit('transitionEnd');
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.emit('transitionStart');
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            swiper.animating = false;
            if (runCallbacks) {
              swiper.emit('transitionEnd');
            }
          };
        }
        swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }
  var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
    translateTo: translateTo
  };
  function setTransition(duration, byController) {
    var swiper = this;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style.transitionDuration = "".concat(duration, "ms");
      swiper.wrapperEl.style.transitionDelay = duration === 0 ? "0ms" : '';
    }
    swiper.emit('setTransition', duration, byController);
  }
  function transitionEmit(_ref) {
    var swiper = _ref.swiper,
      runCallbacks = _ref.runCallbacks,
      direction = _ref.direction,
      step = _ref.step;
    var activeIndex = swiper.activeIndex,
      previousIndex = swiper.previousIndex;
    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
    }
    swiper.emit("transition".concat(step));
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit("slideResetTransition".concat(step));
        return;
      }
      swiper.emit("slideChangeTransition".concat(step));
      if (dir === 'next') {
        swiper.emit("slideNextTransition".concat(step));
      } else {
        swiper.emit("slidePrevTransition".concat(step));
      }
    }
  }
  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    var params = swiper.params;
    if (params.cssMode) return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    transitionEmit({
      swiper: swiper,
      runCallbacks: runCallbacks,
      direction: direction,
      step: 'Start'
    });
  }
  function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    var params = swiper.params;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    transitionEmit({
      swiper: swiper,
      runCallbacks: runCallbacks,
      direction: direction,
      step: 'End'
    });
  }
  var transition = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd
  };
  function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) {
      index = 0;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === 'string') {
      index = parseInt(index, 10);
    }
    var swiper = this;
    var slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    var params = swiper.params,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      previousIndex = swiper.previousIndex,
      activeIndex = swiper.activeIndex,
      rtl = swiper.rtlTranslate,
      wrapperEl = swiper.wrapperEl,
      enabled = swiper.enabled;
    if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    if (typeof speed === 'undefined') {
      speed = swiper.params.speed;
    }
    var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    var translate = -snapGrid[snapIndex];
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        var normalizedTranslate = -Math.floor(translate * 100);
        var normalizedGrid = Math.floor(slidesGrid[i] * 100);
        var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
            slideIndex = i;
          } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
            slideIndex = i + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i;
        }
      }
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) {
          return false;
        }
      }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
      swiper.emit('beforeSlideChangeStart');
    }

    // Update progress
    swiper.updateProgress(translate);
    var direction;
    if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

    // initial virtual
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var isInitialVirtual = isVirtual && initial;
    // Update Index
    if (!isInitialVirtual && (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)) {
      swiper.updateActiveIndex(slideIndex);
      // Update Height
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== 'slide') {
        swiper.setTranslate(translate);
      }
      if (direction !== 'reset') {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      var isH = swiper.isHorizontal();
      var t = rtl ? translate : -translate;
      if (speed === 0) {
        if (isVirtual) {
          swiper.wrapperEl.style.scrollSnapType = 'none';
          swiper._immediateVirtual = true;
        }
        if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
          swiper._cssModeVirtualInitialSet = true;
          requestAnimationFrame(function () {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
          });
        } else {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        }
        if (isVirtual) {
          requestAnimationFrame(function () {
            swiper.wrapperEl.style.scrollSnapType = '';
            swiper._immediateVirtual = false;
          });
        }
      } else {
        var _wrapperEl$scrollTo2;
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper: swiper,
            targetPosition: t,
            side: isH ? 'left' : 'top'
          });
          return true;
        }
        wrapperEl.scrollTo((_wrapperEl$scrollTo2 = {}, _defineProperty(_wrapperEl$scrollTo2, isH ? 'left' : 'top', t), _defineProperty(_wrapperEl$scrollTo2, "behavior", 'smooth'), _wrapperEl$scrollTo2));
      }
      return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) {
      swiper.transitionEnd(runCallbacks, direction);
    } else if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
  }
  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === 'string') {
      var indexAsNumber = parseInt(index, 10);
      index = indexAsNumber;
    }
    var swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === 'undefined') {
      speed = swiper.params.speed;
    }
    var gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    var newIndex = index;
    if (swiper.params.loop) {
      if (swiper.virtual && swiper.params.virtual.enabled) {
        // eslint-disable-next-line
        newIndex = newIndex + swiper.virtual.slidesBefore;
      } else {
        var targetSlideIndex;
        if (gridEnabled) {
          var slideIndex = newIndex * swiper.params.grid.rows;
          targetSlideIndex = swiper.slides.filter(function (slideEl) {
            return slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex;
          })[0].column;
        } else {
          targetSlideIndex = swiper.getSlideIndexByData(newIndex);
        }
        var cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
        var centeredSlides = swiper.params.centeredSlides;
        var slidesPerView = swiper.params.slidesPerView;
        if (slidesPerView === 'auto') {
          slidesPerView = swiper.slidesPerViewDynamic();
        } else {
          slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
          if (centeredSlides && slidesPerView % 2 === 0) {
            slidesPerView = slidesPerView + 1;
          }
        }
        var needLoopFix = cols - targetSlideIndex < slidesPerView;
        if (centeredSlides) {
          needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
        }
        if (internal && centeredSlides && swiper.params.slidesPerView !== 'auto' && !gridEnabled) {
          needLoopFix = false;
        }
        if (needLoopFix) {
          var direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? 'prev' : 'next' : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? 'next' : 'prev';
          swiper.loopFix({
            direction: direction,
            slideTo: true,
            activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
            slideRealIndex: direction === 'next' ? swiper.realIndex : undefined
          });
        }
        if (gridEnabled) {
          var _slideIndex = newIndex * swiper.params.grid.rows;
          newIndex = swiper.slides.filter(function (slideEl) {
            return slideEl.getAttribute('data-swiper-slide-index') * 1 === _slideIndex;
          })[0].column;
        } else {
          newIndex = swiper.getSlideIndexByData(newIndex);
        }
      }
    }
    requestAnimationFrame(function () {
      swiper.slideTo(newIndex, speed, runCallbacks, internal);
    });
    return swiper;
  }

  /* eslint no-unused-vars: "off" */
  function slideNext(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    var enabled = swiper.enabled,
      params = swiper.params,
      animating = swiper.animating;
    if (!enabled || swiper.destroyed) return swiper;
    if (typeof speed === 'undefined') {
      speed = swiper.params.speed;
    }
    var perGroup = params.slidesPerGroup;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
    }
    var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding) return false;
      swiper.loopFix({
        direction: 'next'
      });
      // eslint-disable-next-line
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
      if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
        requestAnimationFrame(function () {
          swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        });
        return true;
      }
    }
    if (params.rewind && swiper.isEnd) {
      return swiper.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slidePrev(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    var params = swiper.params,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      rtlTranslate = swiper.rtlTranslate,
      enabled = swiper.enabled,
      animating = swiper.animating;
    if (!enabled || swiper.destroyed) return swiper;
    if (typeof speed === 'undefined') {
      speed = swiper.params.speed;
    }
    var isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding) return false;
      swiper.loopFix({
        direction: 'prev'
      });
      // eslint-disable-next-line
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    var translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function (val) {
      return normalize(val);
    });
    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === 'undefined' && params.cssMode) {
      var prevSnapIndex;
      snapGrid.forEach(function (snap, snapIndex) {
        if (normalizedTranslate >= snap) {
          // prevSnap = snap;
          prevSnapIndex = snapIndex;
        }
      });
      if (typeof prevSnapIndex !== 'undefined') {
        prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }
    var prevIndex = 0;
    if (typeof prevSnap !== 'undefined') {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
      if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }
    if (params.rewind && swiper.isBeginning) {
      var lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
      requestAnimationFrame(function () {
        swiper.slideTo(prevIndex, speed, runCallbacks, internal);
      });
      return true;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideReset(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === 'undefined') {
      speed = swiper.params.speed;
    }
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (threshold === void 0) {
      threshold = 0.5;
    }
    var swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === 'undefined') {
      speed = swiper.params.speed;
    }
    var index = swiper.activeIndex;
    var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
      // The current translate is on or after the current snap index, so the choice
      // is between the current index and the one after it.
      var currentSnap = swiper.snapGrid[snapIndex];
      var nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      // The current translate is before the current snap index, so the choice
      // is between the current index and the one before it.
      var prevSnap = swiper.snapGrid[snapIndex - 1];
      var _currentSnap = swiper.snapGrid[snapIndex];
      if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }
  function slideToClickedSlide() {
    var swiper = this;
    if (swiper.destroyed) return;
    var params = swiper.params,
      slidesEl = swiper.slidesEl;
    var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;
    var slideSelector = swiper.isElement ? "swiper-slide" : ".".concat(params.slideClass);
    if (params.loop) {
      if (swiper.animating) return;
      realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
      if (params.centeredSlides) {
        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
          swiper.loopFix();
          slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, "".concat(slideSelector, "[data-swiper-slide-index=\"").concat(realIndex, "\"]"))[0]);
          nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, "".concat(slideSelector, "[data-swiper-slide-index=\"").concat(realIndex, "\"]"))[0]);
        nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide
  };
  function loopCreate(slideRealIndex) {
    var swiper = this;
    var params = swiper.params,
      slidesEl = swiper.slidesEl;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    var initSlides = function initSlides() {
      var slides = elementChildren(slidesEl, ".".concat(params.slideClass, ", swiper-slide"));
      slides.forEach(function (el, index) {
        el.setAttribute('data-swiper-slide-index', index);
      });
    };
    var gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    var slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
    var shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
    var shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
    var addBlankSlides = function addBlankSlides(amountOfSlides) {
      for (var i = 0; i < amountOfSlides; i += 1) {
        var slideEl = swiper.isElement ? createElement('swiper-slide', [params.slideBlankClass]) : createElement('div', [params.slideClass, params.slideBlankClass]);
        swiper.slidesEl.append(slideEl);
      }
    };
    if (shouldFillGroup) {
      if (params.loopAddBlankSlides) {
        var slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
      }
      initSlides();
    } else if (shouldFillGrid) {
      if (params.loopAddBlankSlides) {
        var _slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
        addBlankSlides(_slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
      }
      initSlides();
    } else {
      initSlides();
    }
    swiper.loopFix({
      slideRealIndex: slideRealIndex,
      direction: params.centeredSlides ? undefined : 'next'
    });
  }
  function loopFix(_temp) {
    var _ref4 = _temp === void 0 ? {} : _temp,
      slideRealIndex = _ref4.slideRealIndex,
      _ref4$slideTo = _ref4.slideTo,
      slideTo = _ref4$slideTo === void 0 ? true : _ref4$slideTo,
      direction = _ref4.direction,
      setTranslate = _ref4.setTranslate,
      activeSlideIndex = _ref4.activeSlideIndex,
      byController = _ref4.byController,
      byMousewheel = _ref4.byMousewheel;
    var swiper = this;
    if (!swiper.params.loop) return;
    swiper.emit('beforeLoopFix');
    var slides = swiper.slides,
      allowSlidePrev = swiper.allowSlidePrev,
      allowSlideNext = swiper.allowSlideNext,
      slidesEl = swiper.slidesEl,
      params = swiper.params;
    var centeredSlides = params.centeredSlides;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual.enabled) {
      if (slideTo) {
        if (!params.centeredSlides && swiper.snapIndex === 0) {
          swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
        } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
          swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
        } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
          swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
        }
      }
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit('loopFix');
      return;
    }
    var slidesPerView = params.slidesPerView;
    if (slidesPerView === 'auto') {
      slidesPerView = swiper.slidesPerViewDynamic();
    } else {
      slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
      if (centeredSlides && slidesPerView % 2 === 0) {
        slidesPerView = slidesPerView + 1;
      }
    }
    var slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
    var loopedSlides = slidesPerGroup;
    if (loopedSlides % slidesPerGroup !== 0) {
      loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
    }
    loopedSlides += params.loopAdditionalSlides;
    swiper.loopedSlides = loopedSlides;
    var gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (slides.length < slidesPerView + loopedSlides) {
      showWarning('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');
    } else if (gridEnabled && params.grid.fill === 'row') {
      showWarning('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
    }
    var prependSlidesIndexes = [];
    var appendSlidesIndexes = [];
    var activeIndex = swiper.activeIndex;
    if (typeof activeSlideIndex === 'undefined') {
      activeSlideIndex = swiper.getSlideIndex(slides.filter(function (el) {
        return el.classList.contains(params.slideActiveClass);
      })[0]);
    } else {
      activeIndex = activeSlideIndex;
    }
    var isNext = direction === 'next' || !direction;
    var isPrev = direction === 'prev' || !direction;
    var slidesPrepended = 0;
    var slidesAppended = 0;
    var cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
    var activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
    var activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);
    // prepend last slides before start
    if (activeColIndexWithShift < loopedSlides) {
      slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
      for (var i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
        var index = i - Math.floor(i / cols) * cols;
        if (gridEnabled) {
          var colIndexToPrepend = cols - index - 1;
          for (var _i6 = slides.length - 1; _i6 >= 0; _i6 -= 1) {
            if (slides[_i6].column === colIndexToPrepend) prependSlidesIndexes.push(_i6);
          }
          // slides.forEach((slide, slideIndex) => {
          //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
          // });
        } else {
          prependSlidesIndexes.push(cols - index - 1);
        }
      }
    } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
      slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
      var _loop = function _loop(_i7) {
        var index = _i7 - Math.floor(_i7 / cols) * cols;
        if (gridEnabled) {
          slides.forEach(function (slide, slideIndex) {
            if (slide.column === index) appendSlidesIndexes.push(slideIndex);
          });
        } else {
          appendSlidesIndexes.push(index);
        }
      };
      for (var _i7 = 0; _i7 < slidesAppended; _i7 += 1) {
        _loop(_i7);
      }
    }
    swiper.__preventObserver__ = true;
    requestAnimationFrame(function () {
      swiper.__preventObserver__ = false;
    });
    if (isPrev) {
      prependSlidesIndexes.forEach(function (index) {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    if (isNext) {
      appendSlidesIndexes.forEach(function (index) {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    swiper.recalcSlides();
    if (params.slidesPerView === 'auto') {
      swiper.updateSlides();
    } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
      swiper.slides.forEach(function (slide, slideIndex) {
        swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
      });
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    if (slideTo) {
      if (prependSlidesIndexes.length > 0 && isPrev) {
        if (typeof slideRealIndex === 'undefined') {
          var currentSlideTranslate = swiper.slidesGrid[activeIndex];
          var newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
          var diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
            if (setTranslate) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          if (setTranslate) {
            var shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
            swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else if (appendSlidesIndexes.length > 0 && isNext) {
        if (typeof slideRealIndex === 'undefined') {
          var _currentSlideTranslate = swiper.slidesGrid[activeIndex];
          var _newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
          var _diff = _newSlideTranslate - _currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - _diff);
          } else {
            swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
            if (setTranslate) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - _diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - _diff;
            }
          }
        } else {
          var _shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex - _shift, 0, false, true);
        }
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.controller && swiper.controller.control && !byController) {
      var loopParams = {
        slideRealIndex: slideRealIndex,
        direction: direction,
        setTranslate: setTranslate,
        activeSlideIndex: activeSlideIndex,
        byController: true
      };
      if (Array.isArray(swiper.controller.control)) {
        swiper.controller.control.forEach(function (c) {
          if (!c.destroyed && c.params.loop) c.loopFix(_objectSpread(_objectSpread({}, loopParams), {}, {
            slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
          }));
        });
      } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
        swiper.controller.control.loopFix(_objectSpread(_objectSpread({}, loopParams), {}, {
          slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
        }));
      }
    }
    swiper.emit('loopFix');
  }
  function loopDestroy() {
    var swiper = this;
    var params = swiper.params,
      slidesEl = swiper.slidesEl;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    swiper.recalcSlides();
    var newSlidesOrder = [];
    swiper.slides.forEach(function (slideEl) {
      var index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
      newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach(function (slideEl) {
      slideEl.removeAttribute('data-swiper-slide-index');
    });
    newSlidesOrder.forEach(function (slideEl) {
      slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
  }
  var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy
  };
  function setGrabCursor(moving) {
    var swiper = this;
    if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    var el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    el.style.cursor = 'move';
    el.style.cursor = moving ? 'grabbing' : 'grab';
    if (swiper.isElement) {
      requestAnimationFrame(function () {
        swiper.__preventObserver__ = false;
      });
    }
  }
  function unsetGrabCursor() {
    var swiper = this;
    if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
    if (swiper.isElement) {
      requestAnimationFrame(function () {
        swiper.__preventObserver__ = false;
      });
    }
  }
  var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor
  };

  // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
  function closestElement(selector, base) {
    if (base === void 0) {
      base = this;
    }
    function __closestFrom(el) {
      if (!el || el === getDocument() || el === getWindow()) return null;
      if (el.assignedSlot) el = el.assignedSlot;
      var found = el.closest(selector);
      if (!found && !el.getRootNode) {
        return null;
      }
      return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  function preventEdgeSwipe(swiper, event, startX) {
    var window = getWindow();
    var params = swiper.params;
    var edgeSwipeDetection = params.edgeSwipeDetection;
    var edgeSwipeThreshold = params.edgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === 'prevent') {
        event.preventDefault();
        return true;
      }
      return false;
    }
    return true;
  }
  function onTouchStart(event) {
    var swiper = this;
    var document = getDocument();
    var e = event;
    if (e.originalEvent) e = e.originalEvent;
    var data = swiper.touchEventsData;
    if (e.type === 'pointerdown') {
      if (data.pointerId !== null && data.pointerId !== e.pointerId) {
        return;
      }
      data.pointerId = e.pointerId;
    } else if (e.type === 'touchstart' && e.targetTouches.length === 1) {
      data.touchId = e.targetTouches[0].identifier;
    }
    if (e.type === 'touchstart') {
      // don't proceed touch event
      preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
      return;
    }
    var params = swiper.params,
      touches = swiper.touches,
      enabled = swiper.enabled;
    if (!enabled) return;
    if (!params.simulateTouch && e.pointerType === 'mouse') return;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!swiper.animating && params.cssMode && params.loop) {
      swiper.loopFix();
    }
    var targetEl = e.target;
    if (params.touchEventsTarget === 'wrapper') {
      if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
    }
    if ('which' in e && e.which === 3) return;
    if ('button' in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return;

    // change target el for shadow root component
    var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
    // eslint-disable-next-line
    var eventPath = e.composedPath ? e.composedPath() : e.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
      targetEl = eventPath[0];
    }
    var noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : ".".concat(params.noSwipingClass);
    var isTargetShadow = !!(e.target && e.target.shadowRoot);

    // use closestElement for shadow root element to get the actual closest for nested shadow root element
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!targetEl.closest(params.swipeHandler)) return;
    }
    touches.currentX = e.pageX;
    touches.currentY = e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY;

    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

    if (!preventEdgeSwipe(swiper, e, startX)) {
      return;
    }
    Object.assign(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;
    var preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
      preventDefault = false;
      if (targetEl.nodeName === 'SELECT') {
        data.isTouched = false;
      }
    }
    if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl && (e.pointerType === 'mouse' || e.pointerType !== 'mouse' && !targetEl.matches(data.focusableElements))) {
      document.activeElement.blur();
    }
    var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
      e.preventDefault();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
      swiper.freeMode.onTouchStart();
    }
    swiper.emit('touchStart', e);
  }
  function onTouchMove(event) {
    var document = getDocument();
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      enabled = swiper.enabled;
    if (!enabled) return;
    if (!params.simulateTouch && event.pointerType === 'mouse') return;
    var e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (e.type === 'pointermove') {
      if (data.touchId !== null) return; // return from pointer if we use touch
      var id = e.pointerId;
      if (id !== data.pointerId) return;
    }
    var targetTouch;
    if (e.type === 'touchmove') {
      targetTouch = _toConsumableArray(e.changedTouches).filter(function (t) {
        return t.identifier === data.touchId;
      })[0];
      if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    } else {
      targetTouch = e;
    }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }
      return;
    }
    var pageX = targetTouch.pageX;
    var pageY = targetTouch.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      if (!e.target.matches(data.focusableElements)) {
        swiper.allowClick = false;
      }
      if (data.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }
      return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        // Vertical
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
        return;
      }
    }
    if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== e.target && e.pointerType !== 'mouse') {
      document.activeElement.blur();
    }
    if (document.activeElement) {
      if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchMove', e);
    }
    touches.previousX = touches.currentX;
    touches.previousY = touches.currentY;
    touches.currentX = pageX;
    touches.currentY = pageY;
    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;
    if (typeof data.isScrolling === 'undefined') {
      var touchAngle;
      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    if (typeof data.startMoving === 'undefined') {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling || e.type === 'touchmove' && data.preventTouchMoveFromPointerMove) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }
    var diff = swiper.isHorizontal() ? diffX : diffY;
    var touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
      diff = Math.abs(diff) * (rtl ? 1 : -1);
      touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
      diff = -diff;
      touchesDiff = -touchesDiff;
    }
    var prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
    var isLoop = swiper.params.loop && !params.cssMode;
    var allowLoopFix = swiper.touchesDirection === 'next' && swiper.allowSlideNext || swiper.touchesDirection === 'prev' && swiper.allowSlidePrev;
    if (!data.isMoved) {
      if (isLoop && allowLoopFix) {
        swiper.loopFix({
          direction: swiper.swipeDirection
        });
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        var evt = new window.CustomEvent('transitionend', {
          bubbles: true,
          cancelable: true,
          detail: {
            bySwiperTouchMove: true
          }
        });
        swiper.wrapperEl.dispatchEvent(evt);
      }
      data.allowMomentumBounce = false;
      // Grab Cursor
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit('sliderFirstMove', e);
    }
    var loopFixed;
    new Date().getTime();
    if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY,
        startTranslate: data.currentTranslate
      });
      data.loopSwapReset = true;
      data.startTranslate = data.currentTranslate;
      return;
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
        swiper.loopFix({
          direction: 'prev',
          setTranslate: true,
          activeSlideIndex: 0
        });
      }
      if (data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
        }
      }
    } else if (diff < 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
        swiper.loopFix({
          direction: 'next',
          setTranslate: true,
          activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
        });
      }
      if (data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
        }
      }
    }
    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }

    // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    }

    // Threshold
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode) return;

    // Update active index in free mode
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
      swiper.freeMode.onTouchMove();
    }
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
  }
  function onTouchEnd(event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var e = event;
    if (e.originalEvent) e = e.originalEvent;
    var targetTouch;
    var isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';
    if (!isTouchEvent) {
      if (data.touchId !== null) return; // return from pointer if we use touch
      if (e.pointerId !== data.pointerId) return;
      targetTouch = e;
    } else {
      targetTouch = _toConsumableArray(e.changedTouches).filter(function (t) {
        return t.identifier === data.touchId;
      })[0];
      if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    }
    if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type)) {
      var proceed = ['pointercancel', 'contextmenu'].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
      if (!proceed) {
        return;
      }
    }
    data.pointerId = null;
    data.touchId = null;
    var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      slidesGrid = swiper.slidesGrid,
      enabled = swiper.enabled;
    if (!enabled) return;
    if (!params.simulateTouch && e.pointerType === 'mouse') return;
    if (data.allowTouchCallbacks) {
      swiper.emit('touchEnd', e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }

    // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }

    // Time diff
    var touchEndTime = now();
    var timeDiff = touchEndTime - data.touchStartTime;

    // Tap, doubleTap, Click
    if (swiper.allowClick) {
      var pathTree = e.path || e.composedPath && e.composedPath();
      swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
      swiper.emit('tap click', e);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit('doubleTap doubleClick', e);
      }
    }
    data.lastClickTime = now();
    nextTick(function () {
      if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    var currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (params.freeMode && params.freeMode.enabled) {
      swiper.freeMode.onTouchEnd({
        currentPos: currentPos
      });
      return;
    }

    // Find current slide
    var swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];
    for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i + _increment] !== 'undefined') {
        if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
          stopIndex = i;
          groupSize = slidesGrid[i + _increment] - slidesGrid[i];
        }
      } else if (swipeToLast || currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    var rewindFirstIndex = null;
    var rewindLastIndex = null;
    if (params.rewind) {
      if (swiper.isBeginning) {
        rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      } else if (swiper.isEnd) {
        rewindFirstIndex = 0;
      }
    }
    // Find current slide size
    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === 'prev') {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + increment);
        } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
          swiper.slideTo(rewindLastIndex);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === 'next') {
          swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
        }
        if (swiper.swipeDirection === 'prev') {
          swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }
  function onResize() {
    var swiper = this;
    var params = swiper.params,
      el = swiper.el;
    if (el && el.offsetWidth === 0) return;

    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Save locks
    var allowSlideNext = swiper.allowSlideNext,
      allowSlidePrev = swiper.allowSlidePrev,
      snapGrid = swiper.snapGrid;
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    var isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      if (swiper.params.loop && !isVirtual) {
        swiper.slideToLoop(swiper.realIndex, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      clearTimeout(swiper.autoplay.resizeTimeout);
      swiper.autoplay.resizeTimeout = setTimeout(function () {
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
          swiper.autoplay.resume();
        }
      }, 500);
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }
  function onClick(e) {
    var swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) e.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }
  function onScroll() {
    var swiper = this;
    var wrapperEl = swiper.wrapperEl,
      rtlTranslate = swiper.rtlTranslate,
      enabled = swiper.enabled;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      swiper.translate = -wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    // eslint-disable-next-line
    if (swiper.translate === 0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
    swiper.emit('setTranslate', swiper.translate, false);
  }
  function onLoad(e) {
    var swiper = this;
    processLazyPreloader(swiper, e.target);
    if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
      return;
    }
    swiper.update();
  }
  function onDocumentTouchStart() {
    var swiper = this;
    if (swiper.documentTouchHandlerProceeded) return;
    swiper.documentTouchHandlerProceeded = true;
    if (swiper.params.touchReleaseOnEdges) {
      swiper.el.style.touchAction = 'auto';
    }
  }
  var events = function events(swiper, method) {
    var document = getDocument();
    var params = swiper.params,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device;
    var capture = !!params.nested;
    var domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    var swiperMethod = method;
    if (!el || typeof el === 'string') return;

    // Touch Events
    document[domMethod]('touchstart', swiper.onDocumentTouchStart, {
      passive: false,
      capture: capture
    });
    el[domMethod]('touchstart', swiper.onTouchStart, {
      passive: false
    });
    el[domMethod]('pointerdown', swiper.onTouchStart, {
      passive: false
    });
    document[domMethod]('touchmove', swiper.onTouchMove, {
      passive: false,
      capture: capture
    });
    document[domMethod]('pointermove', swiper.onTouchMove, {
      passive: false,
      capture: capture
    });
    document[domMethod]('touchend', swiper.onTouchEnd, {
      passive: true
    });
    document[domMethod]('pointerup', swiper.onTouchEnd, {
      passive: true
    });
    document[domMethod]('pointercancel', swiper.onTouchEnd, {
      passive: true
    });
    document[domMethod]('touchcancel', swiper.onTouchEnd, {
      passive: true
    });
    document[domMethod]('pointerout', swiper.onTouchEnd, {
      passive: true
    });
    document[domMethod]('pointerleave', swiper.onTouchEnd, {
      passive: true
    });
    document[domMethod]('contextmenu', swiper.onTouchEnd, {
      passive: true
    });

    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]('click', swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl[domMethod]('scroll', swiper.onScroll);
    }

    // Resize handler
    if (params.updateOnWindowResize) {
      swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
    } else {
      swiper[swiperMethod]('observerUpdate', onResize, true);
    }

    // Images loader
    el[domMethod]('load', swiper.onLoad, {
      capture: true
    });
  };
  function attachEvents() {
    var swiper = this;
    var params = swiper.params;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    swiper.onLoad = onLoad.bind(swiper);
    events(swiper, 'on');
  }
  function detachEvents() {
    var swiper = this;
    events(swiper, 'off');
  }
  var events$1 = {
    attachEvents: attachEvents,
    detachEvents: detachEvents
  };
  var isGridEnabled = function isGridEnabled(swiper, params) {
    return swiper.grid && params.grid && params.grid.rows > 1;
  };
  function setBreakpoint() {
    var swiper = this;
    var realIndex = swiper.realIndex,
      initialized = swiper.initialized,
      params = swiper.params,
      el = swiper.el;
    var breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;

    // Get breakpoint for window width and update parameters
    var breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    var breakpointParams = breakpointOnlyParams || swiper.originalParams;
    var wasMultiRow = isGridEnabled(swiper, params);
    var isMultiRow = isGridEnabled(swiper, breakpointParams);
    var wasGrabCursor = swiper.params.grabCursor;
    var isGrabCursor = breakpointParams.grabCursor;
    var wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove("".concat(params.containerModifierClass, "grid"), "".concat(params.containerModifierClass, "grid-column"));
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add("".concat(params.containerModifierClass, "grid"));
      if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
        el.classList.add("".concat(params.containerModifierClass, "grid-column"));
      }
      swiper.emitContainerClasses();
    }
    if (wasGrabCursor && !isGrabCursor) {
      swiper.unsetGrabCursor();
    } else if (!wasGrabCursor && isGrabCursor) {
      swiper.setGrabCursor();
    }

    // Toggle navigation, pagination, scrollbar
    ['navigation', 'pagination', 'scrollbar'].forEach(function (prop) {
      if (typeof breakpointParams[prop] === 'undefined') return;
      var wasModuleEnabled = params[prop] && params[prop].enabled;
      var isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
      if (wasModuleEnabled && !isModuleEnabled) {
        swiper[prop].disable();
      }
      if (!wasModuleEnabled && isModuleEnabled) {
        swiper[prop].enable();
      }
    });
    var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    var wasLoop = params.loop;
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    extend(swiper.params, breakpointParams);
    var isEnabled = swiper.params.enabled;
    var hasLoop = swiper.params.loop;
    Object.assign(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit('_beforeBreakpoint', breakpointParams);
    if (initialized) {
      if (needsReLoop) {
        swiper.loopDestroy();
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (!wasLoop && hasLoop) {
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (wasLoop && !hasLoop) {
        swiper.loopDestroy();
      }
    }
    swiper.emit('breakpoint', breakpointParams);
  }
  function getBreakpoint(breakpoints, base, containerEl) {
    if (base === void 0) {
      base = 'window';
    }
    if (!breakpoints || base === 'container' && !containerEl) return undefined;
    var breakpoint = false;
    var window = getWindow();
    var currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
    var points = Object.keys(breakpoints).map(function (point) {
      if (typeof point === 'string' && point.indexOf('@') === 0) {
        var minRatio = parseFloat(point.substr(1));
        var value = currentHeight * minRatio;
        return {
          value: value,
          point: point
        };
      }
      return {
        value: point,
        point: point
      };
    });
    points.sort(function (a, b) {
      return parseInt(a.value, 10) - parseInt(b.value, 10);
    });
    for (var i = 0; i < points.length; i += 1) {
      var _points$i = points[i],
        point = _points$i.point,
        value = _points$i.value;
      if (base === 'window') {
        if (window.matchMedia("(min-width: ".concat(value, "px)")).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || 'max';
  }
  var breakpoints = {
    setBreakpoint: setBreakpoint,
    getBreakpoint: getBreakpoint
  };
  function prepareClasses(entries, prefix) {
    var resultClasses = [];
    entries.forEach(function (item) {
      if (_typeof(item) === 'object') {
        Object.keys(item).forEach(function (classNames) {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === 'string') {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    var _el$classList2;
    var swiper = this;
    var classNames = swiper.classNames,
      params = swiper.params,
      rtl = swiper.rtl,
      el = swiper.el,
      device = swiper.device;
    // prettier-ignore
    var suffixes = prepareClasses(['initialized', params.direction, {
      'free-mode': swiper.params.freeMode && params.freeMode.enabled
    }, {
      'autoheight': params.autoHeight
    }, {
      'rtl': rtl
    }, {
      'grid': params.grid && params.grid.rows > 1
    }, {
      'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
    }, {
      'android': device.android
    }, {
      'ios': device.ios
    }, {
      'css-mode': params.cssMode
    }, {
      'centered': params.cssMode && params.centeredSlides
    }, {
      'watch-progress': params.watchSlidesProgress
    }], params.containerModifierClass);
    classNames.push.apply(classNames, _toConsumableArray(suffixes));
    (_el$classList2 = el.classList).add.apply(_el$classList2, _toConsumableArray(classNames));
    swiper.emitContainerClasses();
  }
  function removeClasses() {
    var _el$classList3;
    var swiper = this;
    var el = swiper.el,
      classNames = swiper.classNames;
    if (!el || typeof el === 'string') return;
    (_el$classList3 = el.classList).remove.apply(_el$classList3, _toConsumableArray(classNames));
    swiper.emitContainerClasses();
  }
  var classes = {
    addClasses: addClasses,
    removeClasses: removeClasses
  };
  function checkOverflow() {
    var swiper = this;
    var wasLocked = swiper.isLocked,
      params = swiper.params;
    var slidesOffsetBefore = params.slidesOffsetBefore;
    if (slidesOffsetBefore) {
      var lastSlideIndex = swiper.slides.length - 1;
      var lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
      swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
      swiper.allowSlideNext = !swiper.isLocked;
    }
    if (params.allowSlidePrev === true) {
      swiper.allowSlidePrev = !swiper.isLocked;
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
    }
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
    }
  }
  var checkOverflow$1 = {
    checkOverflow: checkOverflow
  };
  var defaults = {
    init: true,
    direction: 'horizontal',
    oneWayMovement: false,
    swiperElementNodeName: 'SWIPER-CONTAINER',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    eventsPrefix: 'swiper',
    enabled: true,
    focusableElements: 'input, select, option, textarea, button, video, label',
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: 'slide',
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: 'window',
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: 'swiper-',
    // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-blank',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideFullyVisibleClass: 'swiper-slide-fully-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
  };
  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
      if (obj === void 0) {
        obj = {};
      }
      var moduleParamName = Object.keys(obj)[0];
      var moduleParams = obj[moduleParamName];
      if (_typeof(moduleParams) !== 'object' || moduleParams === null) {
        extend(allModulesParams, obj);
        return;
      }
      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true
        };
      }
      if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
        params[moduleParamName].auto = true;
      }
      if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
        params[moduleParamName].auto = true;
      }
      if (!(moduleParamName in params && 'enabled' in moduleParams)) {
        extend(allModulesParams, obj);
        return;
      }
      if (_typeof(params[moduleParamName]) === 'object' && !('enabled' in params[moduleParamName])) {
        params[moduleParamName].enabled = true;
      }
      if (!params[moduleParamName]) params[moduleParamName] = {
        enabled: false
      };
      extend(allModulesParams, obj);
    };
  }

  /* eslint no-param-reassign: "off" */
  var prototypes = {
    eventsEmitter: eventsEmitter,
    update: update,
    translate: translate,
    transition: transition,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    events: events$1,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes
  };
  var extendedDefaults = {};
  var Swiper = /*#__PURE__*/function () {
    function Swiper() {
      _classCallCheck(this, Swiper);
      var el;
      var params;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
        params = args[0];
      } else {
        el = args[0];
        params = args[1];
      }
      if (!params) params = {};
      params = extend({}, params);
      if (el && !params.el) params.el = el;
      var document = getDocument();
      if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
        var swipers = [];
        document.querySelectorAll(params.el).forEach(function (containerEl) {
          var newParams = extend({}, params, {
            el: containerEl
          });
          swipers.push(new Swiper(newParams));
        });
        // eslint-disable-next-line no-constructor-return
        return swipers;
      }

      // Swiper Instance
      var swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      swiper.modules = _toConsumableArray(swiper.__modules__);
      if (params.modules && Array.isArray(params.modules)) {
        var _swiper$modules;
        (_swiper$modules = swiper.modules).push.apply(_swiper$modules, _toConsumableArray(params.modules));
      }
      var allModulesParams = {};
      swiper.modules.forEach(function (mod) {
        mod({
          params: params,
          swiper: swiper,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper.on.bind(swiper),
          once: swiper.once.bind(swiper),
          off: swiper.off.bind(swiper),
          emit: swiper.emit.bind(swiper)
        });
      });

      // Extend defaults with modules params
      var swiperParams = extend({}, defaults, allModulesParams);

      // Extend defaults with passed params
      swiper.params = extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend({}, swiper.params);
      swiper.passedParams = extend({}, params);

      // add event listeners
      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach(function (eventName) {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }
      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      }

      // Extend Swiper
      Object.assign(swiper, {
        enabled: swiper.params.enabled,
        el: el,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal: function isHorizontal() {
          return swiper.params.direction === 'horizontal';
        },
        isVertical: function isVertical() {
          return swiper.params.direction === 'vertical';
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        cssOverflowAdjustment: function cssOverflowAdjustment() {
          // Returns 0 unless `translate` is > 2**23
          // Should be subtracted from css values to prevent overflow
          return Math.trunc(this.translate / Math.pow(2, 23)) * Math.pow(2, 23);
        },
        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        // Touch Events
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          focusableElements: swiper.params.focusableElements,
          // Last click time
          lastClickTime: 0,
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          startMoving: undefined,
          pointerId: null,
          touchId: null
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper.emit('_swiper');

      // Init
      if (swiper.params.init) {
        swiper.init();
      }

      // Return app instance
      // eslint-disable-next-line no-constructor-return
      return swiper;
    }
    _createClass(Swiper, [{
      key: "getDirectionLabel",
      value: function getDirectionLabel(property) {
        if (this.isHorizontal()) {
          return property;
        }
        // prettier-ignore
        return {
          'width': 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          'marginRight': 'marginBottom'
        }[property];
      }
    }, {
      key: "getSlideIndex",
      value: function getSlideIndex(slideEl) {
        var slidesEl = this.slidesEl,
          params = this.params;
        var slides = elementChildren(slidesEl, ".".concat(params.slideClass, ", swiper-slide"));
        var firstSlideIndex = elementIndex(slides[0]);
        return elementIndex(slideEl) - firstSlideIndex;
      }
    }, {
      key: "getSlideIndexByData",
      value: function getSlideIndexByData(index) {
        return this.getSlideIndex(this.slides.filter(function (slideEl) {
          return slideEl.getAttribute('data-swiper-slide-index') * 1 === index;
        })[0]);
      }
    }, {
      key: "recalcSlides",
      value: function recalcSlides() {
        var swiper = this;
        var slidesEl = swiper.slidesEl,
          params = swiper.params;
        swiper.slides = elementChildren(slidesEl, ".".concat(params.slideClass, ", swiper-slide"));
      }
    }, {
      key: "enable",
      value: function enable() {
        var swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;
        if (swiper.params.grabCursor) {
          swiper.setGrabCursor();
        }
        swiper.emit('enable');
      }
    }, {
      key: "disable",
      value: function disable() {
        var swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;
        if (swiper.params.grabCursor) {
          swiper.unsetGrabCursor();
        }
        swiper.emit('disable');
      }
    }, {
      key: "setProgress",
      value: function setProgress(progress, speed) {
        var swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        var min = swiper.minTranslate();
        var max = swiper.maxTranslate();
        var current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
    }, {
      key: "emitContainerClasses",
      value: function emitContainerClasses() {
        var swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        var cls = swiper.el.className.split(' ').filter(function (className) {
          return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit('_containerClasses', cls.join(' '));
      }
    }, {
      key: "getSlideClasses",
      value: function getSlideClasses(slideEl) {
        var swiper = this;
        if (swiper.destroyed) return '';
        return slideEl.className.split(' ').filter(function (className) {
          return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(' ');
      }
    }, {
      key: "emitSlidesClasses",
      value: function emitSlidesClasses() {
        var swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        var updates = [];
        swiper.slides.forEach(function (slideEl) {
          var classNames = swiper.getSlideClasses(slideEl);
          updates.push({
            slideEl: slideEl,
            classNames: classNames
          });
          swiper.emit('_slideClass', slideEl, classNames);
        });
        swiper.emit('_slideClasses', updates);
      }
    }, {
      key: "slidesPerViewDynamic",
      value: function slidesPerViewDynamic(view, exact) {
        if (view === void 0) {
          view = 'current';
        }
        if (exact === void 0) {
          exact = false;
        }
        var swiper = this;
        var params = swiper.params,
          slides = swiper.slides,
          slidesGrid = swiper.slidesGrid,
          slidesSizesGrid = swiper.slidesSizesGrid,
          swiperSize = swiper.size,
          activeIndex = swiper.activeIndex;
        var spv = 1;
        if (typeof params.slidesPerView === 'number') return params.slidesPerView;
        if (params.centeredSlides) {
          var slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
          var breakLoop;
          for (var i = activeIndex + 1; i < slides.length; i += 1) {
            if (slides[i] && !breakLoop) {
              slideSize += Math.ceil(slides[i].swiperSlideSize);
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }
          for (var _i8 = activeIndex - 1; _i8 >= 0; _i8 -= 1) {
            if (slides[_i8] && !breakLoop) {
              slideSize += slides[_i8].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }
        } else {
          // eslint-disable-next-line
          if (view === 'current') {
            for (var _i9 = activeIndex + 1; _i9 < slides.length; _i9 += 1) {
              var slideInView = exact ? slidesGrid[_i9] + slidesSizesGrid[_i9] - slidesGrid[activeIndex] < swiperSize : slidesGrid[_i9] - slidesGrid[activeIndex] < swiperSize;
              if (slideInView) {
                spv += 1;
              }
            }
          } else {
            // previous
            for (var _i10 = activeIndex - 1; _i10 >= 0; _i10 -= 1) {
              var _slideInView = slidesGrid[activeIndex] - slidesGrid[_i10] < swiperSize;
              if (_slideInView) {
                spv += 1;
              }
            }
          }
        }
        return spv;
      }
    }, {
      key: "update",
      value: function update() {
        var swiper = this;
        if (!swiper || swiper.destroyed) return;
        var snapGrid = swiper.snapGrid,
          params = swiper.params;
        // Breakpoints
        if (params.breakpoints) {
          swiper.setBreakpoint();
        }
        _toConsumableArray(swiper.el.querySelectorAll('[loading="lazy"]')).forEach(function (imageEl) {
          if (imageEl.complete) {
            processLazyPreloader(swiper, imageEl);
          }
        });
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        function setTranslate() {
          var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
          var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
          swiper.setTranslate(newTranslate);
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }
        var translated;
        if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
          setTranslate();
          if (params.autoHeight) {
            swiper.updateAutoHeight();
          }
        } else {
          if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
            var slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
            translated = swiper.slideTo(slides.length - 1, 0, false, true);
          } else {
            translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
          }
          if (!translated) {
            setTranslate();
          }
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
          swiper.checkOverflow();
        }
        swiper.emit('update');
      }
    }, {
      key: "changeDirection",
      value: function changeDirection(newDirection, needUpdate) {
        if (needUpdate === void 0) {
          needUpdate = true;
        }
        var swiper = this;
        var currentDirection = swiper.params.direction;
        if (!newDirection) {
          // eslint-disable-next-line
          newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        }
        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
          return swiper;
        }
        swiper.el.classList.remove("".concat(swiper.params.containerModifierClass).concat(currentDirection));
        swiper.el.classList.add("".concat(swiper.params.containerModifierClass).concat(newDirection));
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.forEach(function (slideEl) {
          if (newDirection === 'vertical') {
            slideEl.style.width = '';
          } else {
            slideEl.style.height = '';
          }
        });
        swiper.emit('changeDirection');
        if (needUpdate) swiper.update();
        return swiper;
      }
    }, {
      key: "changeLanguageDirection",
      value: function changeLanguageDirection(direction) {
        var swiper = this;
        if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
        swiper.rtl = direction === 'rtl';
        swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
        if (swiper.rtl) {
          swiper.el.classList.add("".concat(swiper.params.containerModifierClass, "rtl"));
          swiper.el.dir = 'rtl';
        } else {
          swiper.el.classList.remove("".concat(swiper.params.containerModifierClass, "rtl"));
          swiper.el.dir = 'ltr';
        }
        swiper.update();
      }
    }, {
      key: "mount",
      value: function mount(element) {
        var swiper = this;
        if (swiper.mounted) return true;

        // Find el
        var el = element || swiper.params.el;
        if (typeof el === 'string') {
          el = document.querySelector(el);
        }
        if (!el) {
          return false;
        }
        el.swiper = swiper;
        if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
          swiper.isElement = true;
        }
        var getWrapperSelector = function getWrapperSelector() {
          return ".".concat((swiper.params.wrapperClass || '').trim().split(' ').join('.'));
        };
        var getWrapper = function getWrapper() {
          if (el && el.shadowRoot && el.shadowRoot.querySelector) {
            var res = el.shadowRoot.querySelector(getWrapperSelector());
            // Children needs to return slot items
            return res;
          }
          return elementChildren(el, getWrapperSelector())[0];
        };
        // Find Wrapper
        var wrapperEl = getWrapper();
        if (!wrapperEl && swiper.params.createElements) {
          wrapperEl = createElement('div', swiper.params.wrapperClass);
          el.append(wrapperEl);
          elementChildren(el, ".".concat(swiper.params.slideClass)).forEach(function (slideEl) {
            wrapperEl.append(slideEl);
          });
        }
        Object.assign(swiper, {
          el: el,
          wrapperEl: wrapperEl,
          slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
          hostEl: swiper.isElement ? el.parentNode.host : el,
          mounted: true,
          // RTL
          rtl: el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl',
          rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl'),
          wrongRTL: elementStyle(wrapperEl, 'display') === '-webkit-box'
        });
        return true;
      }
    }, {
      key: "init",
      value: function init(el) {
        var swiper = this;
        if (swiper.initialized) return swiper;
        var mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit('beforeInit');

        // Set breakpoint
        if (swiper.params.breakpoints) {
          swiper.setBreakpoint();
        }

        // Add Classes
        swiper.addClasses();

        // Update size
        swiper.updateSize();

        // Update slides
        swiper.updateSlides();
        if (swiper.params.watchOverflow) {
          swiper.checkOverflow();
        }

        // Set Grab Cursor
        if (swiper.params.grabCursor && swiper.enabled) {
          swiper.setGrabCursor();
        }

        // Slide To Initial Slide
        if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
          swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
        } else {
          swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
        }

        // Create loop
        if (swiper.params.loop) {
          swiper.loopCreate();
        }

        // Attach events
        swiper.attachEvents();
        var lazyElements = _toConsumableArray(swiper.el.querySelectorAll('[loading="lazy"]'));
        if (swiper.isElement) {
          lazyElements.push.apply(lazyElements, _toConsumableArray(swiper.hostEl.querySelectorAll('[loading="lazy"]')));
        }
        lazyElements.forEach(function (imageEl) {
          if (imageEl.complete) {
            processLazyPreloader(swiper, imageEl);
          } else {
            imageEl.addEventListener('load', function (e) {
              processLazyPreloader(swiper, e.target);
            });
          }
        });
        preload(swiper);

        // Init Flag
        swiper.initialized = true;
        preload(swiper);

        // Emit
        swiper.emit('init');
        swiper.emit('afterInit');
        return swiper;
      }
    }, {
      key: "destroy",
      value: function destroy(deleteInstance, cleanStyles) {
        if (deleteInstance === void 0) {
          deleteInstance = true;
        }
        if (cleanStyles === void 0) {
          cleanStyles = true;
        }
        var swiper = this;
        var params = swiper.params,
          el = swiper.el,
          wrapperEl = swiper.wrapperEl,
          slides = swiper.slides;
        if (typeof swiper.params === 'undefined' || swiper.destroyed) {
          return null;
        }
        swiper.emit('beforeDestroy');

        // Init Flag
        swiper.initialized = false;

        // Detach events
        swiper.detachEvents();

        // Destroy loop
        if (params.loop) {
          swiper.loopDestroy();
        }

        // Cleanup styles
        if (cleanStyles) {
          swiper.removeClasses();
          if (el && typeof el !== 'string') {
            el.removeAttribute('style');
          }
          if (wrapperEl) {
            wrapperEl.removeAttribute('style');
          }
          if (slides && slides.length) {
            slides.forEach(function (slideEl) {
              slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
              slideEl.removeAttribute('style');
              slideEl.removeAttribute('data-swiper-slide-index');
            });
          }
        }
        swiper.emit('destroy');

        // Detach emitter events
        Object.keys(swiper.eventsListeners).forEach(function (eventName) {
          swiper.off(eventName);
        });
        if (deleteInstance !== false) {
          if (swiper.el && typeof swiper.el !== 'string') {
            swiper.el.swiper = null;
          }
          deleteProps(swiper);
        }
        swiper.destroyed = true;
        return null;
      }
    }], [{
      key: "extendDefaults",
      value: function extendDefaults(newDefaults) {
        extend(extendedDefaults, newDefaults);
      }
    }, {
      key: "extendedDefaults",
      get: function get() {
        return extendedDefaults;
      }
    }, {
      key: "defaults",
      get: function get() {
        return defaults;
      }
    }, {
      key: "installModule",
      value: function installModule(mod) {
        if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
        var modules = Swiper.prototype.__modules__;
        if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
          modules.push(mod);
        }
      }
    }, {
      key: "use",
      value: function use(module) {
        if (Array.isArray(module)) {
          module.forEach(function (m) {
            return Swiper.installModule(m);
          });
          return Swiper;
        }
        Swiper.installModule(module);
        return Swiper;
      }
    }]);
    return Swiper;
  }();
  Object.keys(prototypes).forEach(function (prototypeGroup) {
    Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer]);
  function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    if (swiper.params.createElements) {
      Object.keys(checkProps).forEach(function (key) {
        if (!params[key] && params.auto === true) {
          var element = elementChildren(swiper.el, ".".concat(checkProps[key]))[0];
          if (!element) {
            element = createElement('div', checkProps[key]);
            element.className = checkProps[key];
            swiper.el.append(element);
          }
          params[key] = element;
          originalParams[key] = element;
        }
      });
    }
    return params;
  }
  function Navigation(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
    extendParams({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock',
        navigationDisabledClass: 'swiper-navigation-disabled'
      }
    });
    swiper.navigation = {
      nextEl: null,
      prevEl: null
    };
    function getEl(el) {
      var res;
      if (el && typeof el === 'string' && swiper.isElement) {
        res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
        if (res) return res;
      }
      if (el) {
        if (typeof el === 'string') res = _toConsumableArray(document.querySelectorAll(el));
        if (swiper.params.uniqueNavElements && typeof el === 'string' && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
          res = swiper.el.querySelector(el);
        } else if (res && res.length === 1) {
          res = res[0];
        }
      }
      if (el && !res) return el;
      // if (Array.isArray(res) && res.length === 1) res = res[0];
      return res;
    }
    function toggleEl(el, disabled) {
      var params = swiper.params.navigation;
      el = makeElementsArray(el);
      el.forEach(function (subEl) {
        if (subEl) {
          var _subEl$classList;
          (_subEl$classList = subEl.classList)[disabled ? 'add' : 'remove'].apply(_subEl$classList, _toConsumableArray(params.disabledClass.split(' ')));
          if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
          if (swiper.params.watchOverflow && swiper.enabled) {
            subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
          }
        }
      });
    }
    function update() {
      // Update Navigation Buttons
      var _swiper$navigation = swiper.navigation,
        nextEl = _swiper$navigation.nextEl,
        prevEl = _swiper$navigation.prevEl;
      if (swiper.params.loop) {
        toggleEl(prevEl, false);
        toggleEl(nextEl, false);
        return;
      }
      toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
      toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slidePrev();
      emit('navigationPrev');
    }
    function onNextClick(e) {
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slideNext();
      emit('navigationNext');
    }
    function init() {
      var params = swiper.params.navigation;
      swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev'
      });
      if (!(params.nextEl || params.prevEl)) return;
      var nextEl = getEl(params.nextEl);
      var prevEl = getEl(params.prevEl);
      Object.assign(swiper.navigation, {
        nextEl: nextEl,
        prevEl: prevEl
      });
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      var initButton = function initButton(el, dir) {
        if (el) {
          el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
        }
        if (!swiper.enabled && el) {
          var _el$classList4;
          (_el$classList4 = el.classList).add.apply(_el$classList4, _toConsumableArray(params.lockClass.split(' ')));
        }
      };
      nextEl.forEach(function (el) {
        return initButton(el, 'next');
      });
      prevEl.forEach(function (el) {
        return initButton(el, 'prev');
      });
    }
    function destroy() {
      var _swiper$navigation2 = swiper.navigation,
        nextEl = _swiper$navigation2.nextEl,
        prevEl = _swiper$navigation2.prevEl;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      var destroyButton = function destroyButton(el, dir) {
        var _el$classList5;
        el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
        (_el$classList5 = el.classList).remove.apply(_el$classList5, _toConsumableArray(swiper.params.navigation.disabledClass.split(' ')));
      };
      nextEl.forEach(function (el) {
        return destroyButton(el, 'next');
      });
      prevEl.forEach(function (el) {
        return destroyButton(el, 'prev');
      });
    }
    on('init', function () {
      if (swiper.params.navigation.enabled === false) {
        // eslint-disable-next-line
        disable();
      } else {
        init();
        update();
      }
    });
    on('toEdge fromEdge lock unlock', function () {
      update();
    });
    on('destroy', function () {
      destroy();
    });
    on('enable disable', function () {
      var _swiper$navigation3 = swiper.navigation,
        nextEl = _swiper$navigation3.nextEl,
        prevEl = _swiper$navigation3.prevEl;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (swiper.enabled) {
        update();
        return;
      }
      [].concat(_toConsumableArray(nextEl), _toConsumableArray(prevEl)).filter(function (el) {
        return !!el;
      }).forEach(function (el) {
        return el.classList.add(swiper.params.navigation.lockClass);
      });
    });
    on('click', function (_s, e) {
      var _swiper$navigation4 = swiper.navigation,
        nextEl = _swiper$navigation4.nextEl,
        prevEl = _swiper$navigation4.prevEl;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      var targetEl = e.target;
      var targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
      if (swiper.isElement && !targetIsButton) {
        var path = e.path || e.composedPath && e.composedPath();
        if (path) {
          targetIsButton = path.find(function (pathEl) {
            return nextEl.includes(pathEl) || prevEl.includes(pathEl);
          });
        }
      }
      if (swiper.params.navigation.hideOnClick && !targetIsButton) {
        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
        var isHidden;
        if (nextEl.length) {
          isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
        } else if (prevEl.length) {
          isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          emit('navigationShow');
        } else {
          emit('navigationHide');
        }
        [].concat(_toConsumableArray(nextEl), _toConsumableArray(prevEl)).filter(function (el) {
          return !!el;
        }).forEach(function (el) {
          return el.classList.toggle(swiper.params.navigation.hiddenClass);
        });
      }
    });
    var enable = function enable() {
      var _swiper$el$classList;
      (_swiper$el$classList = swiper.el.classList).remove.apply(_swiper$el$classList, _toConsumableArray(swiper.params.navigation.navigationDisabledClass.split(' ')));
      init();
      update();
    };
    var disable = function disable() {
      var _swiper$el$classList2;
      (_swiper$el$classList2 = swiper.el.classList).add.apply(_swiper$el$classList2, _toConsumableArray(swiper.params.navigation.navigationDisabledClass.split(' ')));
      destroy();
    };
    Object.assign(swiper.navigation, {
      enable: enable,
      disable: disable,
      update: update,
      init: init,
      destroy: destroy
    });
  }
  function classesToSelector(classes) {
    if (classes === void 0) {
      classes = '';
    }
    return ".".concat(classes.trim().replace(/([\.:!+\/])/g, '\\$1') // eslint-disable-line
    .replace(/ /g, '.'));
  }
  function Pagination(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
    var pfx = 'swiper-pagination';
    extendParams({
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: 'bullets',
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(number) {
          return number;
        },
        formatFractionTotal: function formatFractionTotal(number) {
          return number;
        },
        bulletClass: "".concat(pfx, "-bullet"),
        bulletActiveClass: "".concat(pfx, "-bullet-active"),
        modifierClass: "".concat(pfx, "-"),
        currentClass: "".concat(pfx, "-current"),
        totalClass: "".concat(pfx, "-total"),
        hiddenClass: "".concat(pfx, "-hidden"),
        progressbarFillClass: "".concat(pfx, "-progressbar-fill"),
        progressbarOppositeClass: "".concat(pfx, "-progressbar-opposite"),
        clickableClass: "".concat(pfx, "-clickable"),
        lockClass: "".concat(pfx, "-lock"),
        horizontalClass: "".concat(pfx, "-horizontal"),
        verticalClass: "".concat(pfx, "-vertical"),
        paginationDisabledClass: "".concat(pfx, "-disabled")
      }
    });
    swiper.pagination = {
      el: null,
      bullets: []
    };
    var bulletSize;
    var dynamicBulletIndex = 0;
    function isPaginationDisabled() {
      return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
    }
    function setSideBullets(bulletEl, position) {
      var bulletActiveClass = swiper.params.pagination.bulletActiveClass;
      if (!bulletEl) return;
      bulletEl = bulletEl["".concat(position === 'prev' ? 'previous' : 'next', "ElementSibling")];
      if (bulletEl) {
        bulletEl.classList.add("".concat(bulletActiveClass, "-").concat(position));
        bulletEl = bulletEl["".concat(position === 'prev' ? 'previous' : 'next', "ElementSibling")];
        if (bulletEl) {
          bulletEl.classList.add("".concat(bulletActiveClass, "-").concat(position, "-").concat(position));
        }
      }
    }
    function getMoveDirection(prevIndex, nextIndex, length) {
      prevIndex = prevIndex % length;
      nextIndex = nextIndex % length;
      if (nextIndex === prevIndex + 1) {
        return 'next';
      } else if (nextIndex === prevIndex - 1) {
        return 'previous';
      }
      return;
    }
    function onBulletClick(e) {
      var bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
      if (!bulletEl) {
        return;
      }
      e.preventDefault();
      var index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
      if (swiper.params.loop) {
        if (swiper.realIndex === index) return;
        var moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
        if (moveDirection === 'next') {
          swiper.slideNext();
        } else if (moveDirection === 'previous') {
          swiper.slidePrev();
        } else {
          swiper.slideToLoop(index);
        }
      } else {
        swiper.slideTo(index);
      }
    }
    function update() {
      // Render || Update Pagination bullets/items
      var rtl = swiper.rtl;
      var params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      var el = swiper.pagination.el;
      el = makeElementsArray(el);
      // Current/Total
      var current;
      var previousIndex;
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      var total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        previousIndex = swiper.previousRealIndex || 0;
        current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
      } else if (typeof swiper.snapIndex !== 'undefined') {
        current = swiper.snapIndex;
        previousIndex = swiper.previousSnapIndex;
      } else {
        previousIndex = swiper.previousIndex || 0;
        current = swiper.activeIndex || 0;
      }
      // Types
      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        var bullets = swiper.pagination.bullets;
        var firstIndex;
        var lastIndex;
        var midIndex;
        if (params.dynamicBullets) {
          bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
          el.forEach(function (subEl) {
            subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = "".concat(bulletSize * (params.dynamicMainBullets + 4), "px");
          });
          if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
            dynamicBulletIndex += current - (previousIndex || 0);
            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
              dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (dynamicBulletIndex < 0) {
              dynamicBulletIndex = 0;
            }
          }
          firstIndex = Math.max(current - dynamicBulletIndex, 0);
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.forEach(function (bulletEl) {
          var _bulletEl$classList;
          var classesToRemove = _toConsumableArray(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(function (suffix) {
            return "".concat(params.bulletActiveClass).concat(suffix);
          })).map(function (s) {
            return typeof s === 'string' && s.includes(' ') ? s.split(' ') : s;
          }).flat();
          (_bulletEl$classList = bulletEl.classList).remove.apply(_bulletEl$classList, _toConsumableArray(classesToRemove));
        });
        if (el.length > 1) {
          bullets.forEach(function (bullet) {
            var bulletIndex = elementIndex(bullet);
            if (bulletIndex === current) {
              var _bullet$classList;
              (_bullet$classList = bullet.classList).add.apply(_bullet$classList, _toConsumableArray(params.bulletActiveClass.split(' ')));
            } else if (swiper.isElement) {
              bullet.setAttribute('part', 'bullet');
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                var _bullet$classList2;
                (_bullet$classList2 = bullet.classList).add.apply(_bullet$classList2, _toConsumableArray("".concat(params.bulletActiveClass, "-main").split(' ')));
              }
              if (bulletIndex === firstIndex) {
                setSideBullets(bullet, 'prev');
              }
              if (bulletIndex === lastIndex) {
                setSideBullets(bullet, 'next');
              }
            }
          });
        } else {
          var bullet = bullets[current];
          if (bullet) {
            var _bullet$classList3;
            (_bullet$classList3 = bullet.classList).add.apply(_bullet$classList3, _toConsumableArray(params.bulletActiveClass.split(' ')));
          }
          if (swiper.isElement) {
            bullets.forEach(function (bulletEl, bulletIndex) {
              bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
            });
          }
          if (params.dynamicBullets) {
            var firstDisplayedBullet = bullets[firstIndex];
            var lastDisplayedBullet = bullets[lastIndex];
            for (var i = firstIndex; i <= lastIndex; i += 1) {
              if (bullets[i]) {
                var _bullets$i$classList;
                (_bullets$i$classList = bullets[i].classList).add.apply(_bullets$i$classList, _toConsumableArray("".concat(params.bulletActiveClass, "-main").split(' ')));
              }
            }
            setSideBullets(firstDisplayedBullet, 'prev');
            setSideBullets(lastDisplayedBullet, 'next');
          }
        }
        if (params.dynamicBullets) {
          var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          var bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
          var offsetProp = rtl ? 'right' : 'left';
          bullets.forEach(function (bullet) {
            bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = "".concat(bulletsOffset, "px");
          });
        }
      }
      el.forEach(function (subEl, subElIndex) {
        if (params.type === 'fraction') {
          subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach(function (fractionEl) {
            fractionEl.textContent = params.formatFractionCurrent(current + 1);
          });
          subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach(function (totalEl) {
            totalEl.textContent = params.formatFractionTotal(total);
          });
        }
        if (params.type === 'progressbar') {
          var progressbarDirection;
          if (params.progressbarOpposite) {
            progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
          } else {
            progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
          }
          var scale = (current + 1) / total;
          var scaleX = 1;
          var scaleY = 1;
          if (progressbarDirection === 'horizontal') {
            scaleX = scale;
          } else {
            scaleY = scale;
          }
          subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach(function (progressEl) {
            progressEl.style.transform = "translate3d(0,0,0) scaleX(".concat(scaleX, ") scaleY(").concat(scaleY, ")");
            progressEl.style.transitionDuration = "".concat(swiper.params.speed, "ms");
          });
        }
        if (params.type === 'custom' && params.renderCustom) {
          subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
          if (subElIndex === 0) emit('paginationRender', subEl);
        } else {
          if (subElIndex === 0) emit('paginationRender', subEl);
          emit('paginationUpdate', subEl);
        }
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
        }
      });
    }
    function render() {
      // Render Container
      var params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
      var el = swiper.pagination.el;
      el = makeElementsArray(el);
      var paginationHTML = '';
      if (params.type === 'bullets') {
        var numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
          numberOfBullets = slidesLength;
        }
        for (var i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            // prettier-ignore
            paginationHTML += "<".concat(params.bulletElement, " ").concat(swiper.isElement ? 'part="bullet"' : '', " class=\"").concat(params.bulletClass, "\"></").concat(params.bulletElement, ">");
          }
        }
      }
      if (params.type === 'fraction') {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = "<span class=\"".concat(params.currentClass, "\"></span>") + ' / ' + "<span class=\"".concat(params.totalClass, "\"></span>");
        }
      }
      if (params.type === 'progressbar') {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = "<span class=\"".concat(params.progressbarFillClass, "\"></span>");
        }
      }
      swiper.pagination.bullets = [];
      el.forEach(function (subEl) {
        if (params.type !== 'custom') {
          subEl.innerHTML = paginationHTML || '';
        }
        if (params.type === 'bullets') {
          var _swiper$pagination$bu;
          (_swiper$pagination$bu = swiper.pagination.bullets).push.apply(_swiper$pagination$bu, _toConsumableArray(subEl.querySelectorAll(classesToSelector(params.bulletClass))));
        }
      });
      if (params.type !== 'custom') {
        emit('paginationRender', el[0]);
      }
    }
    function init() {
      swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
        el: 'swiper-pagination'
      });
      var params = swiper.params.pagination;
      if (!params.el) return;
      var el;
      if (typeof params.el === 'string' && swiper.isElement) {
        el = swiper.el.querySelector(params.el);
      }
      if (!el && typeof params.el === 'string') {
        el = _toConsumableArray(document.querySelectorAll(params.el));
      }
      if (!el) {
        el = params.el;
      }
      if (!el || el.length === 0) return;
      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
        el = _toConsumableArray(swiper.el.querySelectorAll(params.el));
        // check if it belongs to another nested Swiper
        if (el.length > 1) {
          el = el.filter(function (subEl) {
            if (elementParents(subEl, '.swiper')[0] !== swiper.el) return false;
            return true;
          })[0];
        }
      }
      if (Array.isArray(el) && el.length === 1) el = el[0];
      Object.assign(swiper.pagination, {
        el: el
      });
      el = makeElementsArray(el);
      el.forEach(function (subEl) {
        if (params.type === 'bullets' && params.clickable) {
          var _subEl$classList2;
          (_subEl$classList2 = subEl.classList).add.apply(_subEl$classList2, _toConsumableArray((params.clickableClass || '').split(' ')));
        }
        subEl.classList.add(params.modifierClass + params.type);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.type === 'bullets' && params.dynamicBullets) {
          subEl.classList.add("".concat(params.modifierClass).concat(params.type, "-dynamic"));
          dynamicBulletIndex = 0;
          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }
        if (params.type === 'progressbar' && params.progressbarOpposite) {
          subEl.classList.add(params.progressbarOppositeClass);
        }
        if (params.clickable) {
          subEl.addEventListener('click', onBulletClick);
        }
        if (!swiper.enabled) {
          subEl.classList.add(params.lockClass);
        }
      });
    }
    function destroy() {
      var params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      var el = swiper.pagination.el;
      if (el) {
        el = makeElementsArray(el);
        el.forEach(function (subEl) {
          subEl.classList.remove(params.hiddenClass);
          subEl.classList.remove(params.modifierClass + params.type);
          subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
          if (params.clickable) {
            var _subEl$classList3;
            (_subEl$classList3 = subEl.classList).remove.apply(_subEl$classList3, _toConsumableArray((params.clickableClass || '').split(' ')));
            subEl.removeEventListener('click', onBulletClick);
          }
        });
      }
      if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(function (subEl) {
        var _subEl$classList4;
        return (_subEl$classList4 = subEl.classList).remove.apply(_subEl$classList4, _toConsumableArray(params.bulletActiveClass.split(' ')));
      });
    }
    on('changeDirection', function () {
      if (!swiper.pagination || !swiper.pagination.el) return;
      var params = swiper.params.pagination;
      var el = swiper.pagination.el;
      el = makeElementsArray(el);
      el.forEach(function (subEl) {
        subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      });
    });
    on('init', function () {
      if (swiper.params.pagination.enabled === false) {
        // eslint-disable-next-line
        disable();
      } else {
        init();
        render();
        update();
      }
    });
    on('activeIndexChange', function () {
      if (typeof swiper.snapIndex === 'undefined') {
        update();
      }
    });
    on('snapIndexChange', function () {
      update();
    });
    on('snapGridLengthChange', function () {
      render();
      update();
    });
    on('destroy', function () {
      destroy();
    });
    on('enable disable', function () {
      var el = swiper.pagination.el;
      if (el) {
        el = makeElementsArray(el);
        el.forEach(function (subEl) {
          return subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass);
        });
      }
    });
    on('lock unlock', function () {
      update();
    });
    on('click', function (_s, e) {
      var targetEl = e.target;
      var el = makeElementsArray(swiper.pagination.el);
      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
        var isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
        if (isHidden === true) {
          emit('paginationShow');
        } else {
          emit('paginationHide');
        }
        el.forEach(function (subEl) {
          return subEl.classList.toggle(swiper.params.pagination.hiddenClass);
        });
      }
    });
    var enable = function enable() {
      swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
      var el = swiper.pagination.el;
      if (el) {
        el = makeElementsArray(el);
        el.forEach(function (subEl) {
          return subEl.classList.remove(swiper.params.pagination.paginationDisabledClass);
        });
      }
      init();
      render();
      update();
    };
    var disable = function disable() {
      swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
      var el = swiper.pagination.el;
      if (el) {
        el = makeElementsArray(el);
        el.forEach(function (subEl) {
          return subEl.classList.add(swiper.params.pagination.paginationDisabledClass);
        });
      }
      destroy();
    };
    Object.assign(swiper.pagination, {
      enable: enable,
      disable: disable,
      render: render,
      update: update,
      init: init,
      destroy: destroy
    });
  }
  function effectInit(params) {
    var effect = params.effect,
      swiper = params.swiper,
      on = params.on,
      setTranslate = params.setTranslate,
      setTransition = params.setTransition,
      overwriteParams = params.overwriteParams,
      perspective = params.perspective,
      recreateShadows = params.recreateShadows,
      getEffectParams = params.getEffectParams;
    on('beforeInit', function () {
      if (swiper.params.effect !== effect) return;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass).concat(effect));
      if (perspective && perspective()) {
        swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
      }
      var overwriteParamsResult = overwriteParams ? overwriteParams() : {};
      Object.assign(swiper.params, overwriteParamsResult);
      Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on('setTranslate', function () {
      if (swiper.params.effect !== effect) return;
      setTranslate();
    });
    on('setTransition', function (_s, duration) {
      if (swiper.params.effect !== effect) return;
      setTransition(duration);
    });
    on('transitionEnd', function () {
      if (swiper.params.effect !== effect) return;
      if (recreateShadows) {
        if (!getEffectParams || !getEffectParams().slideShadows) return;
        // remove shadows
        swiper.slides.forEach(function (slideEl) {
          slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(function (shadowEl) {
            return shadowEl.remove();
          });
        });
        // create new one
        recreateShadows();
      }
    });
    var requireUpdateOnVirtual;
    on('virtualUpdate', function () {
      if (swiper.params.effect !== effect) return;
      if (!swiper.slides.length) {
        requireUpdateOnVirtual = true;
      }
      requestAnimationFrame(function () {
        if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
          setTranslate();
          requireUpdateOnVirtual = false;
        }
      });
    });
  }
  function effectTarget(effectParams, slideEl) {
    var transformEl = getSlideTransformEl(slideEl);
    if (transformEl !== slideEl) {
      transformEl.style.backfaceVisibility = 'hidden';
      transformEl.style['-webkit-backface-visibility'] = 'hidden';
    }
    return transformEl;
  }
  function effectVirtualTransitionEnd(_ref) {
    var swiper = _ref.swiper,
      duration = _ref.duration,
      transformElements = _ref.transformElements,
      allSlides = _ref.allSlides;
    var activeIndex = swiper.activeIndex;
    var getSlide = function getSlide(el) {
      if (!el.parentElement) {
        // assume shadow root
        var _slide4 = swiper.slides.filter(function (slideEl) {
          return slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode;
        })[0];
        return _slide4;
      }
      return el.parentElement;
    };
    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false;
      var transitionEndTarget;
      if (allSlides) {
        transitionEndTarget = transformElements;
      } else {
        transitionEndTarget = transformElements.filter(function (transformEl) {
          var el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
          return swiper.getSlideIndex(el) === activeIndex;
        });
      }
      transitionEndTarget.forEach(function (el) {
        elementTransitionEnd(el, function () {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return;
          eventTriggered = true;
          swiper.animating = false;
          var evt = new window.CustomEvent('transitionend', {
            bubbles: true,
            cancelable: true
          });
          swiper.wrapperEl.dispatchEvent(evt);
        });
      });
    }
  }
  function EffectFade(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
    extendParams({
      fadeEffect: {
        crossFade: false
      }
    });
    var setTranslate = function setTranslate() {
      var slides = swiper.slides;
      var params = swiper.params.fadeEffect;
      for (var i = 0; i < slides.length; i += 1) {
        var slideEl = swiper.slides[i];
        var offset = slideEl.swiperSlideOffset;
        var tx = -offset;
        if (!swiper.params.virtualTranslate) tx -= swiper.translate;
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
        var targetEl = effectTarget(params, slideEl);
        targetEl.style.opacity = slideOpacity;
        targetEl.style.transform = "translate3d(".concat(tx, "px, ").concat(ty, "px, 0px)");
      }
    };
    var setTransition = function setTransition(duration) {
      var transformElements = swiper.slides.map(function (slideEl) {
        return getSlideTransformEl(slideEl);
      });
      transformElements.forEach(function (el) {
        el.style.transitionDuration = "".concat(duration, "ms");
      });
      effectVirtualTransitionEnd({
        swiper: swiper,
        duration: duration,
        transformElements: transformElements,
        allSlides: true
      });
    };
    effectInit({
      effect: 'fade',
      swiper: swiper,
      on: on,
      setTranslate: setTranslate,
      setTransition: setTransition,
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: !swiper.params.cssMode
        };
      }
    });
  }
  function Scrollbar(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
    var document = getDocument();
    var isTouched = false;
    var timeout = null;
    var dragTimeout = null;
    var dragStartPos;
    var dragSize;
    var trackSize;
    var divider;
    extendParams({
      scrollbar: {
        el: null,
        dragSize: 'auto',
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: 'swiper-scrollbar-lock',
        dragClass: 'swiper-scrollbar-drag',
        scrollbarDisabledClass: 'swiper-scrollbar-disabled',
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical"
      }
    });
    swiper.scrollbar = {
      el: null,
      dragEl: null
    };
    function setTranslate() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate;
      var dragEl = scrollbar.dragEl,
        el = scrollbar.el;
      var params = swiper.params.scrollbar;
      var progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
      var newSize = dragSize;
      var newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        dragEl.style.transform = "translate3d(".concat(newPos, "px, 0, 0)");
        dragEl.style.width = "".concat(newSize, "px");
      } else {
        dragEl.style.transform = "translate3d(0px, ".concat(newPos, "px, 0)");
        dragEl.style.height = "".concat(newSize, "px");
      }
      if (params.hide) {
        clearTimeout(timeout);
        el.style.opacity = 1;
        timeout = setTimeout(function () {
          el.style.opacity = 0;
          el.style.transitionDuration = '400ms';
        }, 1000);
      }
    }
    function setTransition(duration) {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      swiper.scrollbar.dragEl.style.transitionDuration = "".concat(duration, "ms");
    }
    function updateSize() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      var scrollbar = swiper.scrollbar;
      var dragEl = scrollbar.dragEl,
        el = scrollbar.el;
      dragEl.style.width = '';
      dragEl.style.height = '';
      trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
      divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
      if (swiper.params.scrollbar.dragSize === 'auto') {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }
      if (swiper.isHorizontal()) {
        dragEl.style.width = "".concat(dragSize, "px");
      } else {
        dragEl.style.height = "".concat(dragSize, "px");
      }
      if (divider >= 1) {
        el.style.display = 'none';
      } else {
        el.style.display = '';
      }
      if (swiper.params.scrollbar.hide) {
        el.style.opacity = 0;
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
      }
    }
    function getPointerPosition(e) {
      return swiper.isHorizontal() ? e.clientX : e.clientY;
    }
    function setDragPosition(e) {
      var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate;
      var el = scrollbar.el;
      var positionRatio;
      positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }
      var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    function onDragStart(e) {
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar,
        wrapperEl = swiper.wrapperEl;
      var el = scrollbar.el,
        dragEl = scrollbar.dragEl;
      isTouched = true;
      dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
      e.preventDefault();
      e.stopPropagation();
      wrapperEl.style.transitionDuration = '100ms';
      dragEl.style.transitionDuration = '100ms';
      setDragPosition(e);
      clearTimeout(dragTimeout);
      el.style.transitionDuration = '0ms';
      if (params.hide) {
        el.style.opacity = 1;
      }
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style['scroll-snap-type'] = 'none';
      }
      emit('scrollbarDragStart', e);
    }
    function onDragMove(e) {
      var scrollbar = swiper.scrollbar,
        wrapperEl = swiper.wrapperEl;
      var el = scrollbar.el,
        dragEl = scrollbar.dragEl;
      if (!isTouched) return;
      if (e.preventDefault && e.cancelable) e.preventDefault();else e.returnValue = false;
      setDragPosition(e);
      wrapperEl.style.transitionDuration = '0ms';
      el.style.transitionDuration = '0ms';
      dragEl.style.transitionDuration = '0ms';
      emit('scrollbarDragMove', e);
    }
    function onDragEnd(e) {
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar,
        wrapperEl = swiper.wrapperEl;
      var el = scrollbar.el;
      if (!isTouched) return;
      isTouched = false;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style['scroll-snap-type'] = '';
        wrapperEl.style.transitionDuration = '';
      }
      if (params.hide) {
        clearTimeout(dragTimeout);
        dragTimeout = nextTick(function () {
          el.style.opacity = 0;
          el.style.transitionDuration = '400ms';
        }, 1000);
      }
      emit('scrollbarDragEnd', e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    }
    function events(method) {
      var scrollbar = swiper.scrollbar,
        params = swiper.params;
      var el = scrollbar.el;
      if (!el) return;
      var target = el;
      var activeListener = params.passiveListeners ? {
        passive: false,
        capture: false
      } : false;
      var passiveListener = params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      if (!target) return;
      var eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
      target[eventMethod]('pointerdown', onDragStart, activeListener);
      document[eventMethod]('pointermove', onDragMove, activeListener);
      document[eventMethod]('pointerup', onDragEnd, passiveListener);
    }
    function enableDraggable() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      events('on');
    }
    function disableDraggable() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      events('off');
    }
    function init() {
      var scrollbar = swiper.scrollbar,
        swiperEl = swiper.el;
      swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
        el: 'swiper-scrollbar'
      });
      var params = swiper.params.scrollbar;
      if (!params.el) return;
      var el;
      if (typeof params.el === 'string' && swiper.isElement) {
        el = swiper.el.querySelector(params.el);
      }
      if (!el && typeof params.el === 'string') {
        el = document.querySelectorAll(params.el);
        if (!el.length) return;
      } else if (!el) {
        el = params.el;
      }
      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
        el = swiperEl.querySelector(params.el);
      }
      if (el.length > 0) el = el[0];
      el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      var dragEl;
      if (el) {
        dragEl = el.querySelector(classesToSelector(swiper.params.scrollbar.dragClass));
        if (!dragEl) {
          dragEl = createElement('div', swiper.params.scrollbar.dragClass);
          el.append(dragEl);
        }
      }
      Object.assign(scrollbar, {
        el: el,
        dragEl: dragEl
      });
      if (params.draggable) {
        enableDraggable();
      }
      if (el) {
        var _el$classList6;
        (_el$classList6 = el.classList)[swiper.enabled ? 'remove' : 'add'].apply(_el$classList6, _toConsumableArray(classesToTokens(swiper.params.scrollbar.lockClass)));
      }
    }
    function destroy() {
      var params = swiper.params.scrollbar;
      var el = swiper.scrollbar.el;
      if (el) {
        var _el$classList7;
        (_el$classList7 = el.classList).remove.apply(_el$classList7, _toConsumableArray(classesToTokens(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass)));
      }
      disableDraggable();
    }
    on('changeDirection', function () {
      if (!swiper.scrollbar || !swiper.scrollbar.el) return;
      var params = swiper.params.scrollbar;
      var el = swiper.scrollbar.el;
      el = makeElementsArray(el);
      el.forEach(function (subEl) {
        subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      });
    });
    on('init', function () {
      if (swiper.params.scrollbar.enabled === false) {
        // eslint-disable-next-line
        disable();
      } else {
        init();
        updateSize();
        setTranslate();
      }
    });
    on('update resize observerUpdate lock unlock changeDirection', function () {
      updateSize();
    });
    on('setTranslate', function () {
      setTranslate();
    });
    on('setTransition', function (_s, duration) {
      setTransition(duration);
    });
    on('enable disable', function () {
      var el = swiper.scrollbar.el;
      if (el) {
        var _el$classList8;
        (_el$classList8 = el.classList)[swiper.enabled ? 'remove' : 'add'].apply(_el$classList8, _toConsumableArray(classesToTokens(swiper.params.scrollbar.lockClass)));
      }
    });
    on('destroy', function () {
      destroy();
    });
    var enable = function enable() {
      var _swiper$el$classList3;
      (_swiper$el$classList3 = swiper.el.classList).remove.apply(_swiper$el$classList3, _toConsumableArray(classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass)));
      if (swiper.scrollbar.el) {
        var _swiper$scrollbar$el$;
        (_swiper$scrollbar$el$ = swiper.scrollbar.el.classList).remove.apply(_swiper$scrollbar$el$, _toConsumableArray(classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass)));
      }
      init();
      updateSize();
      setTranslate();
    };
    var disable = function disable() {
      var _swiper$el$classList4;
      (_swiper$el$classList4 = swiper.el.classList).add.apply(_swiper$el$classList4, _toConsumableArray(classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass)));
      if (swiper.scrollbar.el) {
        var _swiper$scrollbar$el$2;
        (_swiper$scrollbar$el$2 = swiper.scrollbar.el.classList).add.apply(_swiper$scrollbar$el$2, _toConsumableArray(classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass)));
      }
      destroy();
    };
    Object.assign(swiper.scrollbar, {
      enable: enable,
      disable: disable,
      updateSize: updateSize,
      setTranslate: setTranslate,
      init: init,
      destroy: destroy
    });
  }

  /* eslint no-underscore-dangle: "off" */
  /* eslint no-use-before-define: "off" */
  function Autoplay(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit,
      params = _ref.params;
    swiper.autoplay = {
      running: false,
      paused: false,
      timeLeft: 0
    };
    extendParams({
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: false,
        stopOnLastSlide: false,
        reverseDirection: false,
        pauseOnMouseEnter: false
      }
    });
    var timeout;
    var raf;
    var autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
    var autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
    var autoplayTimeLeft;
    var autoplayStartTime = new Date().getTime();
    var wasPaused;
    var isTouched;
    var pausedByTouch;
    var touchStartTimeout;
    var slideChanged;
    var pausedByInteraction;
    var pausedByPointerEnter;
    function onTransitionEnd(e) {
      if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
      if (e.target !== swiper.wrapperEl) return;
      swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
      if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) {
        return;
      }
      resume();
    }
    var calcTimeLeft = function calcTimeLeft() {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (swiper.autoplay.paused) {
        wasPaused = true;
      } else if (wasPaused) {
        autoplayDelayCurrent = autoplayTimeLeft;
        wasPaused = false;
      }
      var timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
      swiper.autoplay.timeLeft = timeLeft;
      emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
      raf = requestAnimationFrame(function () {
        calcTimeLeft();
      });
    };
    var getSlideDelay = function getSlideDelay() {
      var activeSlideEl;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        activeSlideEl = swiper.slides.filter(function (slideEl) {
          return slideEl.classList.contains('swiper-slide-active');
        })[0];
      } else {
        activeSlideEl = swiper.slides[swiper.activeIndex];
      }
      if (!activeSlideEl) return undefined;
      var currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
      return currentSlideDelay;
    };
    var run = function run(delayForce) {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      cancelAnimationFrame(raf);
      calcTimeLeft();
      var delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
      autoplayDelayTotal = swiper.params.autoplay.delay;
      autoplayDelayCurrent = swiper.params.autoplay.delay;
      var currentSlideDelay = getSlideDelay();
      if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
        delay = currentSlideDelay;
        autoplayDelayTotal = currentSlideDelay;
        autoplayDelayCurrent = currentSlideDelay;
      }
      autoplayTimeLeft = delay;
      var speed = swiper.params.speed;
      var proceed = function proceed() {
        if (!swiper || swiper.destroyed) return;
        if (swiper.params.autoplay.reverseDirection) {
          if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
            swiper.slidePrev(speed, true, true);
            emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, speed, true, true);
            emit('autoplay');
          }
        } else {
          if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
            swiper.slideNext(speed, true, true);
            emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(0, speed, true, true);
            emit('autoplay');
          }
        }
        if (swiper.params.cssMode) {
          autoplayStartTime = new Date().getTime();
          requestAnimationFrame(function () {
            run();
          });
        }
      };
      if (delay > 0) {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          proceed();
        }, delay);
      } else {
        requestAnimationFrame(function () {
          proceed();
        });
      }

      // eslint-disable-next-line
      return delay;
    };
    var start = function start() {
      autoplayStartTime = new Date().getTime();
      swiper.autoplay.running = true;
      run();
      emit('autoplayStart');
    };
    var stop = function stop() {
      swiper.autoplay.running = false;
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
      emit('autoplayStop');
    };
    var pause = function pause(internal, reset) {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      clearTimeout(timeout);
      if (!internal) {
        pausedByInteraction = true;
      }
      var proceed = function proceed() {
        emit('autoplayPause');
        if (swiper.params.autoplay.waitForTransition) {
          swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
        } else {
          resume();
        }
      };
      swiper.autoplay.paused = true;
      if (reset) {
        if (slideChanged) {
          autoplayTimeLeft = swiper.params.autoplay.delay;
        }
        slideChanged = false;
        proceed();
        return;
      }
      var delay = autoplayTimeLeft || swiper.params.autoplay.delay;
      autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
      if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
      proceed();
    };
    var resume = function resume() {
      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
      autoplayStartTime = new Date().getTime();
      if (pausedByInteraction) {
        pausedByInteraction = false;
        run(autoplayTimeLeft);
      } else {
        run();
      }
      swiper.autoplay.paused = false;
      emit('autoplayResume');
    };
    var onVisibilityChange = function onVisibilityChange() {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      var document = getDocument();
      if (document.visibilityState === 'hidden') {
        pausedByInteraction = true;
        pause(true);
      }
      if (document.visibilityState === 'visible') {
        resume();
      }
    };
    var onPointerEnter = function onPointerEnter(e) {
      if (e.pointerType !== 'mouse') return;
      pausedByInteraction = true;
      pausedByPointerEnter = true;
      if (swiper.animating || swiper.autoplay.paused) return;
      pause(true);
    };
    var onPointerLeave = function onPointerLeave(e) {
      if (e.pointerType !== 'mouse') return;
      pausedByPointerEnter = false;
      if (swiper.autoplay.paused) {
        resume();
      }
    };
    var attachMouseEvents = function attachMouseEvents() {
      if (swiper.params.autoplay.pauseOnMouseEnter) {
        swiper.el.addEventListener('pointerenter', onPointerEnter);
        swiper.el.addEventListener('pointerleave', onPointerLeave);
      }
    };
    var detachMouseEvents = function detachMouseEvents() {
      if (swiper.el && typeof swiper.el !== 'string') {
        swiper.el.removeEventListener('pointerenter', onPointerEnter);
        swiper.el.removeEventListener('pointerleave', onPointerLeave);
      }
    };
    var attachDocumentEvents = function attachDocumentEvents() {
      var document = getDocument();
      document.addEventListener('visibilitychange', onVisibilityChange);
    };
    var detachDocumentEvents = function detachDocumentEvents() {
      var document = getDocument();
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
    on('init', function () {
      if (swiper.params.autoplay.enabled) {
        attachMouseEvents();
        attachDocumentEvents();
        start();
      }
    });
    on('destroy', function () {
      detachMouseEvents();
      detachDocumentEvents();
      if (swiper.autoplay.running) {
        stop();
      }
    });
    on('_freeModeStaticRelease', function () {
      if (pausedByTouch || pausedByInteraction) {
        resume();
      }
    });
    on('_freeModeNoMomentumRelease', function () {
      if (!swiper.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on('beforeTransitionStart', function (_s, speed, internal) {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on('sliderFirstMove', function () {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
        return;
      }
      isTouched = true;
      pausedByTouch = false;
      pausedByInteraction = false;
      touchStartTimeout = setTimeout(function () {
        pausedByInteraction = true;
        pausedByTouch = true;
        pause(true);
      }, 200);
    });
    on('touchEnd', function () {
      if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
      clearTimeout(touchStartTimeout);
      clearTimeout(timeout);
      if (swiper.params.autoplay.disableOnInteraction) {
        pausedByTouch = false;
        isTouched = false;
        return;
      }
      if (pausedByTouch && swiper.params.cssMode) resume();
      pausedByTouch = false;
      isTouched = false;
    });
    on('slideChange', function () {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      slideChanged = true;
    });
    Object.assign(swiper.autoplay, {
      start: start,
      stop: stop,
      pause: pause,
      resume: resume
    });
  }
  function Thumb(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
    extendParams({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: true,
        autoScrollOffset: 0,
        slideThumbActiveClass: 'swiper-slide-thumb-active',
        thumbsContainerClass: 'swiper-thumbs'
      }
    });
    var initialized = false;
    var swiperCreated = false;
    swiper.thumbs = {
      swiper: null
    };
    function onThumbClick() {
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      var clickedIndex = thumbsSwiper.clickedIndex;
      var clickedSlide = thumbsSwiper.clickedSlide;
      if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
      if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
      var slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        swiper.slideToLoop(slideToIndex);
      } else {
        swiper.slideTo(slideToIndex);
      }
    }
    function init() {
      var thumbsParams = swiper.params.thumbs;
      if (initialized) return false;
      initialized = true;
      var SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Object.assign(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        Object.assign(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        swiper.thumbs.swiper.update();
      } else if (isObject(thumbsParams.swiper)) {
        var thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
        Object.assign(thumbsSwiperParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
        swiperCreated = true;
      }
      swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
      swiper.thumbs.swiper.on('tap', onThumbClick);
      return true;
    }
    function update(initial) {
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

      // Activate thumbs
      var thumbsToActivate = 1;
      var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }
      if (!swiper.params.thumbs.multipleActiveThumbs) {
        thumbsToActivate = 1;
      }
      thumbsToActivate = Math.floor(thumbsToActivate);
      thumbsSwiper.slides.forEach(function (slideEl) {
        return slideEl.classList.remove(thumbActiveClass);
      });
      if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
        for (var i = 0; i < thumbsToActivate; i += 1) {
          elementChildren(thumbsSwiper.slidesEl, "[data-swiper-slide-index=\"".concat(swiper.realIndex + i, "\"]")).forEach(function (slideEl) {
            slideEl.classList.add(thumbActiveClass);
          });
        }
      } else {
        for (var _i11 = 0; _i11 < thumbsToActivate; _i11 += 1) {
          if (thumbsSwiper.slides[swiper.realIndex + _i11]) {
            thumbsSwiper.slides[swiper.realIndex + _i11].classList.add(thumbActiveClass);
          }
        }
      }
      var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
      var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
      if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
        var currentThumbsIndex = thumbsSwiper.activeIndex;
        var newThumbsIndex;
        var direction;
        if (thumbsSwiper.params.loop) {
          var newThumbsSlide = thumbsSwiper.slides.filter(function (slideEl) {
            return slideEl.getAttribute('data-swiper-slide-index') === "".concat(swiper.realIndex);
          })[0];
          newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
          direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
        } else {
          newThumbsIndex = swiper.realIndex;
          direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
        }
        if (useOffset) {
          newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
        }
        if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      }
    }
    on('beforeInit', function () {
      var thumbs = swiper.params.thumbs;
      if (!thumbs || !thumbs.swiper) return;
      if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
        var _document = getDocument();
        var getThumbsElementAndInit = function getThumbsElementAndInit() {
          var thumbsElement = typeof thumbs.swiper === 'string' ? _document.querySelector(thumbs.swiper) : thumbs.swiper;
          if (thumbsElement && thumbsElement.swiper) {
            thumbs.swiper = thumbsElement.swiper;
            init();
            update(true);
          } else if (thumbsElement) {
            var eventName = "".concat(swiper.params.eventsPrefix, "init");
            var onThumbsSwiper = function onThumbsSwiper(e) {
              thumbs.swiper = e.detail[0];
              thumbsElement.removeEventListener(eventName, onThumbsSwiper);
              init();
              update(true);
              thumbs.swiper.update();
              swiper.update();
            };
            thumbsElement.addEventListener(eventName, onThumbsSwiper);
          }
          return thumbsElement;
        };
        var watchForThumbsToAppear = function watchForThumbsToAppear() {
          if (swiper.destroyed) return;
          var thumbsElement = getThumbsElementAndInit();
          if (!thumbsElement) {
            requestAnimationFrame(watchForThumbsToAppear);
          }
        };
        requestAnimationFrame(watchForThumbsToAppear);
      } else {
        init();
        update(true);
      }
    });
    on('slideChange update resize observerUpdate', function () {
      update();
    });
    on('setTransition', function (_s, duration) {
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      thumbsSwiper.setTransition(duration);
    });
    on('beforeDestroy', function () {
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      if (swiperCreated) {
        thumbsSwiper.destroy();
      }
    });
    Object.assign(swiper.thumbs, {
      init: init,
      update: update
    });
  }

  /**
   * Swiper 11.1.14
   * Most modern mobile touch slider and framework with hardware accelerated transitions
   * https://swiperjs.com
   *
   * Copyright 2014-2025 Vladimir Kharlampidi
   *
   * Released under the MIT License
   *
   * Released on: February 21, 2025
   */

  // Swiper Class
  var modules = [Navigation, Pagination, EffectFade, Scrollbar, Autoplay, Thumb];
  Swiper.use(modules);
  return Swiper;
}();