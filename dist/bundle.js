/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/postcss-loader/src/index.js):\\n/home/lucas/odin/js/todo/postcss.config.js:5\\n      'cssnano': {},\\n               ^\\n\\nSyntaxError: Unexpected token ':'\\n    at new Script (vm.js:88:7)\\n    at NativeCompileCache._moduleCompile (/home/lucas/odin/js/todo/node_modules/v8-compile-cache/v8-compile-cache.js:242:18)\\n    at Module._compile (/home/lucas/odin/js/todo/node_modules/v8-compile-cache/v8-compile-cache.js:186:36)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1157:10)\\n    at Module.load (internal/modules/cjs/loader.js:985:32)\\n    at Function.Module._load (internal/modules/cjs/loader.js:878:14)\\n    at Module.require (internal/modules/cjs/loader.js:1025:19)\\n    at require (/home/lucas/odin/js/todo/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\\n    at module.exports (/home/lucas/odin/js/todo/node_modules/import-fresh/index.js:28:9)\\n    at loadJs (/home/lucas/odin/js/todo/node_modules/cosmiconfig/dist/loaders.js:9:18)\\n    at Explorer.loadFileContent (/home/lucas/odin/js/todo/node_modules/cosmiconfig/dist/createExplorer.js:230:12)\\n    at /home/lucas/odin/js/todo/node_modules/cosmiconfig/dist/createExplorer.js:252:21\\n    at /home/lucas/odin/js/todo/node_modules/webpack/lib/NormalModule.js:316:20\\n    at /home/lucas/odin/js/todo/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /home/lucas/odin/js/todo/node_modules/loader-runner/lib/LoaderRunner.js:233:18\\n    at context.callback (/home/lucas/odin/js/todo/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\\n    at /home/lucas/odin/js/todo/node_modules/postcss-loader/src/index.js:208:9\");\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });