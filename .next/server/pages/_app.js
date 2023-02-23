"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/global.tsx":
/*!************************!*\
  !*** ./src/global.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Global = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)([\":root{--font-family:'Poppins',sans-serif;}*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font-family);}html{font-size:62.5%;}body{overflow-x:hidden;}\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Global);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2xvYmFsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1DLE1BQU0sR0FBR0Qsb0VBQUgseUtBQVo7QUFxQkEsaUVBQWVDLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3B1bGFyaXR5LXJlc2VhcmNoLWFwcC8uL3NyYy9nbG9iYWwudHN4PzVkYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IEdsb2JhbCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIDpyb290IHtcclxuICAgIC0tZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gICoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xyXG4gIH1cclxuXHJcbiAgaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDYyLjUlO1xyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwiR2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/global.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ \"./src/global.tsx\");\n/* harmony import */ var _ui_context_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/context/auth */ \"./src/ui/context/auth.tsx\");\n/* harmony import */ var _ui_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/main */ \"./src/ui/main/index.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"C:\\\\freelas\\\\popularity-research-app\\\\src\\\\pages\\\\_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ChakraProvider, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ui_context_auth__WEBPACK_IMPORTED_MODULE_2__.AuthStore, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_global__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ui_main__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQSxNQUFNSSxHQUFHLEdBQUcsQ0FBQztFQUFFQyxTQUFGO0VBQWFDO0FBQWIsQ0FBRCxLQUF3QztFQUNsRCxvQkFDRTtJQUFBLHVCQUNFLDhEQUFDLDREQUFEO01BQUEsdUJBQ0UsOERBQUMsdURBQUQ7UUFBQSx3QkFDRSw4REFBQywrQ0FBRDtVQUFBO1VBQUE7VUFBQTtRQUFBLGFBREYsZUFFRSw4REFBQyxnREFBRDtVQUFBLHVCQUNFLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQURGO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFGRjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREYsaUJBREY7QUFZRCxDQWJEOztBQWVBLGlFQUFlRixHQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3B1bGFyaXR5LXJlc2VhcmNoLWFwcC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IEdsb2JhbCBmcm9tICcuLi9nbG9iYWwnXHJcbmltcG9ydCB7IEF1dGhTdG9yZSB9IGZyb20gJy4uL3VpL2NvbnRleHQvYXV0aCdcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vdWkvbWFpbidcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDaGFrcmFQcm92aWRlcj5cclxuICAgICAgICA8QXV0aFN0b3JlPlxyXG4gICAgICAgICAgPEdsb2JhbCAvPlxyXG4gICAgICAgICAgPE1haW4+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgIDwvTWFpbj5cclxuICAgICAgICA8L0F1dGhTdG9yZT5cclxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcbiJdLCJuYW1lcyI6WyJDaGFrcmFQcm92aWRlciIsIkdsb2JhbCIsIkF1dGhTdG9yZSIsIk1haW4iLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/ui/context/auth.tsx":
/*!*********************************!*\
  !*** ./src/ui/context/auth.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthStore\": () => (/* binding */ AuthStore),\n/* harmony export */   \"useAuthContext\": () => (/* binding */ useAuthContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"C:\\\\freelas\\\\popularity-research-app\\\\src\\\\ui\\\\context\\\\auth.tsx\";\n\n/* eslint-disable @typescript-eslint/consistent-type-assertions */\n\n\nconst AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});\nconst AuthStore = ({\n  children\n}) => {\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const {\n    0: token,\n    1: setToken\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n\n  const setData = (user, token) => {\n    setUser(user);\n    setToken(token);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AuthContext.Provider, {\n    value: {\n      setData,\n      user,\n      token\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, undefined);\n};\nconst useAuthContext = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AuthContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvY29udGV4dC9hdXRoLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQVNPLE1BQU1HLFdBQVcsZ0JBQUdILG9EQUFhLENBQVcsRUFBWCxDQUFqQztBQUVBLE1BQU1JLFNBQVMsR0FBRyxDQUFDO0VBQUVDO0FBQUYsQ0FBRCxLQUF1QjtFQUM5QyxNQUFNO0lBQUEsR0FBQ0MsSUFBRDtJQUFBLEdBQU9DO0VBQVAsSUFBa0JMLCtDQUFRLENBQWMsSUFBZCxDQUFoQztFQUNBLE1BQU07SUFBQSxHQUFDTSxLQUFEO0lBQUEsR0FBUUM7RUFBUixJQUFvQlAsK0NBQVEsQ0FBUyxFQUFULENBQWxDOztFQUVBLE1BQU1RLE9BQU8sR0FBRyxDQUFDSixJQUFELEVBQWFFLEtBQWIsS0FBK0I7SUFDN0NELE9BQU8sQ0FBQ0QsSUFBRCxDQUFQO0lBQ0FHLFFBQVEsQ0FBQ0QsS0FBRCxDQUFSO0VBQ0QsQ0FIRDs7RUFLQSxvQkFDRSw4REFBQyxXQUFELENBQWEsUUFBYjtJQUNFLEtBQUssRUFBRTtNQUFFRSxPQUFGO01BQVdKLElBQVg7TUFBaUJFO0lBQWpCLENBRFQ7SUFBQSxVQUdHSDtFQUhIO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFERjtBQU9ELENBaEJNO0FBa0JBLE1BQU1NLGNBQWMsR0FBRyxNQUFNVixpREFBVSxDQUFDRSxXQUFELENBQXZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9wdWxhcml0eS1yZXNlYXJjaC1hcHAvLi9zcmMvdWkvY29udGV4dC9hdXRoLnRzeD85N2UyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9jb25zaXN0ZW50LXR5cGUtYXNzZXJ0aW9ucyAqL1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMvdXNlcidcclxuXHJcbmludGVyZmFjZSBDb250cmFjdCB7XHJcbiAgdXNlcjogVXNlciB8IG51bGxcclxuICB0b2tlbjogc3RyaW5nXHJcbiAgc2V0RGF0YTogKHVzZXI6IFVzZXIsIHRva2VuOiBzdHJpbmcpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxDb250cmFjdD4oe30gYXMgQ29udHJhY3QpXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFN0b3JlID0gKHsgY2hpbGRyZW4gfTogYW55KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKVxyXG5cclxuICBjb25zdCBzZXREYXRhID0gKHVzZXI6IFVzZXIsIHRva2VuOiBzdHJpbmcpID0+IHtcclxuICAgIHNldFVzZXIodXNlcilcclxuICAgIHNldFRva2VuKHRva2VuKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17eyBzZXREYXRhLCB1c2VyLCB0b2tlbiB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGhDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJBdXRoQ29udGV4dCIsIkF1dGhTdG9yZSIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJ0b2tlbiIsInNldFRva2VuIiwic2V0RGF0YSIsInVzZUF1dGhDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ui/context/auth.tsx\n");

/***/ }),

/***/ "./src/ui/main/index.tsx":
/*!*******************************!*\
  !*** ./src/ui/main/index.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styled */ \"./src/ui/main/styled.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"C:\\\\freelas\\\\popularity-research-app\\\\src\\\\ui\\\\main\\\\index.tsx\";\n\n\n\n\nconst Main = ({\n  children\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_0__.Header, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n        src: \"/images/favicon.svg\",\n        alt: \"Outside\",\n        \"aria-label\": \"Logo da empresa\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), children]\n  }, void 0, true);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvbWFpbi9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUVBLE1BQU1DLElBQUksR0FBRyxDQUFDO0VBQUVDO0FBQUYsQ0FBRCxLQUF1QjtFQUNsQyxvQkFDRTtJQUFBLHdCQUNFLDhEQUFDLDJDQUFEO01BQUEsdUJBQ0U7UUFBSyxHQUFHLEVBQUMscUJBQVQ7UUFBK0IsR0FBRyxFQUFDLFNBQW5DO1FBQTZDLGNBQVc7TUFBeEQ7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFERixFQUlHQSxRQUpIO0VBQUEsZ0JBREY7QUFRRCxDQVREOztBQVdBLGlFQUFlRCxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9wdWxhcml0eS1yZXNlYXJjaC1hcHAvLi9zcmMvdWkvbWFpbi9pbmRleC50c3g/MzNkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVkJ1xyXG5cclxuY29uc3QgTWFpbiA9ICh7IGNoaWxkcmVuIH06IGFueSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Uy5IZWFkZXI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2Zhdmljb24uc3ZnXCIgYWx0PVwiT3V0c2lkZVwiIGFyaWEtbGFiZWw9J0xvZ28gZGEgZW1wcmVzYScgLz5cclxuICAgICAgPC9TLkhlYWRlcj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluXHJcbiJdLCJuYW1lcyI6WyJTIiwiTWFpbiIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ui/main/index.tsx\n");

/***/ }),

/***/ "./src/ui/main/styled.ts":
/*!*******************************!*\
  !*** ./src/ui/main/styled.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default().header.withConfig({\n  displayName: \"styled__Header\",\n  componentId: \"sc-jgqhlc-0\"\n})([\"padding:3rem;img{width:4rem;height:4rem;}\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvbWFpbi9zdHlsZWQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxNQUFNLEdBQUdELDBFQUFIO0VBQUE7RUFBQTtBQUFBLGlEQUFaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9wdWxhcml0eS1yZXNlYXJjaC1hcHAvLi9zcmMvdWkvbWFpbi9zdHlsZWQudHM/NGMzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgcGFkZGluZzogM3JlbTtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDRyZW07XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgfVxyXG5gXHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJIZWFkZXIiLCJoZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ui/main/styled.ts\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();