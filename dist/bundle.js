(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Paragraph"] = factory();
	else
		root["Paragraph"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".ce-paragraph {\\n    line-height: 1.6em;\\n    outline: none;\\n}\\n.ce-paragraph--right {\\n    text-align: right;\\n}\\n.ce-paragraph--center {\\n    text-align: center;\\n}\\n.ce-paragraph--left {\\n    text-align: left;\\n}\\n\\n.ce-paragraph[data-placeholder]:empty::before{\\n  content: attr(data-placeholder);\\n  color: #707684;\\n  font-weight: normal;\\n  opacity: 0;\\n}\\n\\n/** Show placeholder at the first paragraph if Editor is empty */\\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\\n  opacity: 1;\\n}\\n\\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\\n  opacity: 0;\\n}\\n\\n.ce-paragraph p:first-of-type{\\n    margin-top: 0;\\n}\\n\\n.ce-paragraph p:last-of-type{\\n    margin-bottom: 0;\\n}\\n\\n\\n.svg-icon {\\n    width: 1em;\\n    height: 1em;\\n}\\n\\n.svg-icon path,\\n.svg-icon polygon,\\n.svg-icon rect {\\n    fill: #4691f6;\\n}\\n\\n.svg-icon circle {\\n    stroke: #4691f6;\\n    stroke-width: 1;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://Paragraph/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://Paragraph/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Paragraph/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://Paragraph/./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * Build styles\n */\n__webpack_require__(/*! ./index.css */ \"./src/index.css\").toString();\n\nvar Paragraph = /*#__PURE__*/function () {\n  _createClass(Paragraph, null, [{\n    key: \"DEFAULT_PLACEHOLDER\",\n\n    /**\n     * Default placeholder for Paragraph Tool\n     *\n     * @return {string}\n     * @constructor\n     */\n    get: function get() {\n      return '';\n    }\n    /**\n     * Allowed paragraph alignments\n     *\n     * @public\n     * @returns {{left: string, center: string}}\n     */\n\n  }, {\n    key: \"ALIGNMENTS\",\n    get: function get() {\n      return {\n        left: 'left',\n        center: 'center',\n        right: 'right'\n      };\n    }\n    /**\n     * Default paragraph alignment\n     *\n     * @public\n     * @returns {string}\n     */\n\n  }, {\n    key: \"DEFAULT_ALIGNMENT\",\n    get: function get() {\n      return Paragraph.ALIGNMENTS.left;\n    }\n    /**\n     * Render plugin`s main Element and fill it with saved data\n     *\n     * @param {object} params - constructor params\n     * @param {ParagraphData} params.data - previously saved data\n     * @param {ParagraphConfig} params.config - user config for Tool\n     * @param {object} params.api - editor.js api\n     */\n\n  }]);\n\n  function Paragraph(_ref) {\n    var data = _ref.data,\n        config = _ref.config,\n        api = _ref.api;\n\n    _classCallCheck(this, Paragraph);\n\n    this.api = api;\n    this.config = config;\n    this._CSS = {\n      block: this.api.styles.block,\n      wrapper: 'ce-paragraph',\n      alignment: {\n        left: 'ce-paragraph--left',\n        center: 'ce-paragraph--center',\n        right: 'ce-paragraph--right'\n      }\n    };\n    this.CSS = {\n      baseClass: this.api.styles.block,\n      loading: this.api.styles.loader,\n      input: this.api.styles.input,\n      settingsButton: this.api.styles.settingsButton,\n      settingsButtonActive: this.api.styles.settingsButtonActive\n    };\n    this.settings = [{\n      name: 'left',\n      icon: \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"Layer\\\" enable-background=\\\"new 0 0 64 64\\\" height=\\\"20\\\" viewBox=\\\"0 0 64 64\\\" width=\\\"20\\\"><path d=\\\"m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z\\\"/><path d=\\\"m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z\\\"/><path d=\\\"m10 23h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z\\\"/><path d=\\\"m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z\\\"/><path d=\\\"m10 45h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z\\\"/></svg>\"\n    }, {\n      name: 'center',\n      icon: \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"Layer\\\" enable-background=\\\"new 0 0 64 64\\\" height=\\\"20\\\" viewBox=\\\"0 0 64 64\\\" width=\\\"20\\\"><path d=\\\"m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z\\\"/><path d=\\\"m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z\\\"/><path d=\\\"m46 23c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z\\\"/><path d=\\\"m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z\\\"/><path d=\\\"m46 45c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z\\\"/></svg>\"\n    }, {\n      name: 'right',\n      icon: \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"Layer\\\" enable-background=\\\"new 0 0 64 64\\\" height=\\\"20\\\" viewBox=\\\"0 0 64 64\\\" width=\\\"20\\\"><path d=\\\"m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z\\\"/><path d=\\\"m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z\\\"/><path d=\\\"m54 19h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28c1.104 0 2-.896 2-2s-.896-2-2-2z\\\"/><path d=\\\"m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z\\\"/><path d=\\\"m54 41h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28c1.104 0 2-.896 2-2s-.896-2-2-2z\\\"/></svg>\"\n    }];\n    this.onKeyUp = this.onKeyUp.bind(this);\n    /**\n     * Placeholder for paragraph if it is first Block\n     * @type {string}\n     */\n\n    this._placeholder = config.placeholder ? config.placeholder : Paragraph.DEFAULT_PLACEHOLDER;\n    this.data = {\n      text: data.text || '',\n      alignment: data.alignment || config.defaultAlignment || Paragraph.DEFAULT_ALIGNMENT\n    };\n    this._element = this.drawView();\n    this._preserveBlank = config.preserveBlank !== undefined ? config.preserveBlank : false;\n  }\n  /**\n   * Check if text content is empty and set empty string to inner html.\n   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements\n   *\n   * @param {KeyboardEvent} e - key up event\n   */\n\n\n  _createClass(Paragraph, [{\n    key: \"onKeyUp\",\n    value: function onKeyUp(e) {\n      if (e.code !== 'Backspace' && e.code !== 'Delete') {\n        return;\n      }\n\n      var textContent = this._element.textContent;\n\n      if (textContent === '') {\n        this._element.innerHTML = '';\n      }\n    }\n    /**\n     * Create Tool's view\n     * @return {HTMLElement}\n     * @private\n     */\n\n  }, {\n    key: \"drawView\",\n    value: function drawView() {\n      var div = document.createElement('DIV');\n      div.classList.add(this._CSS.wrapper, this._CSS.block, this._CSS.alignment[this.data.alignment]);\n      div.contentEditable = true;\n      div.dataset.placeholder = this.api.i18n.t(this._placeholder);\n      div.innerHTML = this.data.text;\n      div.addEventListener('keyup', this.onKeyUp);\n      return div;\n    }\n    /**\n     * Return Tool's view\n     * @returns {HTMLDivElement}\n     * @public\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      return this._element;\n    }\n    /**\n     * Method that specified how to merge two Text blocks.\n     * Called by Editor.js by backspace at the beginning of the Block\n     * @param {ParagraphData} data\n     * @public\n     */\n\n  }, {\n    key: \"merge\",\n    value: function merge(data) {\n      var newData = {\n        text: this.data.text += data.text,\n        alignment: this.data.alignment\n      };\n      this._element.innerHTML = this.data.text;\n      this.data = newData;\n    }\n    /**\n     * Validate Paragraph block data:\n     * - check for emptiness\n     *\n     * @param {ParagraphData} savedData — data received after saving\n     * @returns {boolean} false if saved data is not correct, otherwise true\n     * @public\n     */\n\n  }, {\n    key: \"validate\",\n    value: function validate(savedData) {\n      if (savedData.text.trim() === '' && !this._preserveBlank) {\n        return false;\n      }\n\n      return true;\n    }\n    /**\n     * Extract Tool's data from the view\n     * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view\n     * @returns {ParagraphData} - saved data\n     * @public\n     */\n\n  }, {\n    key: \"save\",\n    value: function save(toolsContent) {\n      return Object.assign(this.data, {\n        text: toolsContent.innerHTML\n      });\n    }\n    /**\n     * On paste callback fired from Editor.\n     *\n     * @param {PasteEvent} event - event with pasted data\n     */\n\n  }, {\n    key: \"onPaste\",\n    value: function onPaste(event) {\n      var data = {\n        text: event.detail.data.innerHTML,\n        alignment: this.config.defaultAlignment || Paragraph.DEFAULT_ALIGNMENT\n      };\n      this.data = data;\n    }\n    /**\n     * Enable Conversion Toolbar. Paragraph can be converted to/from other tools\n     */\n\n  }, {\n    key: \"renderSettings\",\n\n    /**\n     *\n     * @returns {HTMLDivElement}\n     */\n    value: function renderSettings() {\n      var _this = this;\n\n      var wrapper = document.createElement('div');\n      this.settings.map(function (tune) {\n        /**\n         * buttonのdomを作成して、alignのtoggleをactiveに設定する\n         * @type {HTMLDivElement}\n         */\n        var button = document.createElement('div');\n        button.classList.add('cdx-settings-button');\n        button.innerHTML = tune.icon;\n        button.classList.toggle(_this.CSS.settingsButtonActive, tune.name === _this.data.alignment);\n        wrapper.appendChild(button);\n        return button;\n      }).forEach(function (element, index, elements) {\n        element.addEventListener('click', function () {\n          _this._toggleTune(_this.settings[index].name);\n\n          elements.forEach(function (el, i) {\n            var name = _this.settings[i].name;\n            el.classList.toggle(_this.CSS.settingsButtonActive, name === _this.data.alignment); //paragraphのdivにalignmentのclassをつける。\n\n            _this._element.classList.toggle(_this._CSS.alignment[name], name === _this.data.alignment);\n          });\n        });\n      });\n      return wrapper;\n    }\n    /**\n     * @private\n     * Click on the Settings Button\n     * @param {string} tune — tune name from this.settings\n     */\n\n  }, {\n    key: \"_toggleTune\",\n    value: function _toggleTune(tune) {\n      this.data.alignment = tune;\n    }\n    /**\n     * Icon and title for displaying at the Toolbox\n     *\n     * @return {{icon: string, title: string}}\n     */\n\n  }], [{\n    key: \"conversionConfig\",\n    get: function get() {\n      return {\n        \"export\": 'text',\n        // to convert Paragraph to other block, use 'text' property of saved data\n        \"import\": 'text' // to covert other block's exported string to Paragraph, fill 'text' property of tool data\n\n      };\n    }\n    /**\n     * Sanitizer rules\n     */\n\n  }, {\n    key: \"sanitize\",\n    get: function get() {\n      return {\n        text: {\n          br: true\n        },\n        alignment: {}\n      };\n    }\n    /**\n     * Used by Editor paste handling API.\n     * Provides configuration to handle P tags.\n     *\n     * @returns {{tags: string[]}}\n     */\n\n  }, {\n    key: \"pasteConfig\",\n    get: function get() {\n      return {\n        tags: ['P']\n      };\n    }\n  }, {\n    key: \"toolbox\",\n    get: function get() {\n      return {\n        icon: __webpack_require__(/*! ./toolbox-icon.svg */ \"./src/toolbox-icon.svg\")[\"default\"],\n        title: 'Text'\n      };\n    }\n  }]);\n\n  return Paragraph;\n}();\n\nmodule.exports = Paragraph;\n\n//# sourceURL=webpack://Paragraph/./src/index.js?");

/***/ }),

/***/ "./src/toolbox-icon.svg":
/*!******************************!*\
  !*** ./src/toolbox-icon.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0.2 -0.3 9 11.4\\\" width=\\\"12\\\" height=\\\"14\\\">\\n  <path d=\\\"M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z\\\"/>\\n</svg>\\n\");\n\n//# sourceURL=webpack://Paragraph/./src/toolbox-icon.svg?");

/***/ })

/******/ });
});