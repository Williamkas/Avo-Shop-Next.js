"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Layout */ \"./components/Layout/Layout.jsx\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar HomePage = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), productList = ref[0], setProductList = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.fetch('/api/avo').then(function(response) {\n            return response.json();\n        }).then(function(param) {\n            var data = param.data, length = param.length;\n            setProductList(data);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Products!\"\n                }, void 0, false, {\n                    fileName: \"/Users/a309735/Documents/Personal/William/Platzi/shop-next/pages/index.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/a309735/Documents/Personal/William/Platzi/shop-next/pages/index.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this),\n                productList.map(function(product) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: product.name\n                        }, void 0, false, {\n                            fileName: \"/Users/a309735/Documents/Personal/William/Platzi/shop-next/pages/index.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"/Users/a309735/Documents/Personal/William/Platzi/shop-next/pages/index.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/a309735/Documents/Personal/William/Platzi/shop-next/pages/index.jsx\",\n            lineNumber: 17,\n            columnNumber: 8\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/a309735/Documents/Personal/William/Platzi/shop-next/pages/index.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this));\n};\n_s(HomePage, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnRDtBQUNBOzs7QUFFaEQsR0FBSyxDQUFDSSxRQUFRLEdBQUcsUUFDakIsR0FEdUIsQ0FBQzs7O0lBQ3hCLEdBQUssQ0FBaUNGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBMUNHLFdBQVcsR0FBb0JILEdBQVksS0FBOUJJLGNBQWMsR0FBSUosR0FBWTtJQUVsREQsZ0RBQVMsQ0FBQyxRQUNWLEdBRGdCLENBQUM7UUFDZk0sTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBVSxXQUN0QkMsSUFBSSxDQUFDQyxRQUFRLENBQVJBLFFBQVE7WUFBSUEsTUFBTSxDQUFOQSxRQUFRLENBQUNDLElBQUk7V0FDOUJGLElBQUksQ0FBQyxRQUFRRyxRQUFZLENBQUM7Z0JBQW5CQyxJQUFJLFNBQUpBLElBQUksRUFBRUQsTUFBTSxTQUFOQSxNQUFNO1lBQ2xCTixjQUFjLENBQUNPLElBQUk7UUFDckIsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFFSCxNQUFNLDZFQUNIVixpRUFBTTs4RkFDSFcsQ0FBRzs7NEZBQ0ZDLENBQUU7OEJBQUMsQ0FBUzs7Ozs7OzRGQUNaQyxDQUFFOzs7OztnQkFDRlgsV0FBVyxDQUFDWSxHQUFHLENBQUNDLFFBQVEsQ0FBUkEsT0FBTztrQ0FDdEIsTUFDVCxDQUFDLDhEQURTQyxDQUFFOzhHQUNBQyxDQUFFO3NDQUFFRixPQUFPLENBQUNHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdCLENBQUM7R0F4QktqQixRQUFRO0tBQVJBLFFBQVE7QUEwQmQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQnO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbmNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0UHJvZHVjdExpc3RdID0gdXNlU3RhdGUoW10pXG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIHdpbmRvdy5mZXRjaCgnL2FwaS9hdm8nKVxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC50aGVuKCh7ZGF0YSwgbGVuZ3RofSkgPT4ge1xuICAgIHNldFByb2R1Y3RMaXN0KGRhdGEpXG4gIH0pXG59LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlByb2R1Y3RzITwvaDE+XG4gICAgICAgIDxici8+XG4gICAgICAgIHtwcm9kdWN0TGlzdC5tYXAocHJvZHVjdCA9PiAoXG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPntwcm9kdWN0Lm5hbWV9PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICApKX1cbiAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxheW91dCIsIkhvbWVQYWdlIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsIndpbmRvdyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImxlbmd0aCIsImRhdGEiLCJkaXYiLCJoMSIsImJyIiwibWFwIiwicHJvZHVjdCIsInVsIiwibGkiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});