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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst HomePage = ()=>{\n    const { 0: productList , 1: setProductList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.fetch('/api/avo').then((response)=>response.json()\n        ).then(({ data , length  })=>{\n            setProductList(data);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Products!\"\n            }, void 0, false, {\n                fileName: \"/Users/a309735/Documents/Personal/William/Platzi/shop-next/pages/index.jsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/a309735/Documents/Personal/William/Platzi/shop-next/pages/index.jsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined),\n            productList.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/Users/a309735/Documents/Personal/William/Platzi/shop-next/pages/index.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/a309735/Documents/Personal/William/Platzi/shop-next/pages/index.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, undefined)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/a309735/Documents/Personal/William/Platzi/shop-next/pages/index.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdEO0FBRWhELEtBQUssQ0FBQ0csUUFBUSxPQUFTLENBQUM7SUFDeEIsS0FBSyxNQUFFQyxXQUFXLE1BQUVDLGNBQWMsTUFBSUgsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFFakRELGdEQUFTLEtBQU8sQ0FBQztRQUNmSyxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFVLFdBQ3RCQyxJQUFJLEVBQUNDLFFBQVEsR0FBSUEsUUFBUSxDQUFDQyxJQUFJO1VBQzlCRixJQUFJLEVBQUUsQ0FBQ0csQ0FBQUEsSUFBSSxHQUFFQyxNQUFNLEdBQUMsR0FBSyxDQUFDO1lBQ3pCUCxjQUFjLENBQUNNLElBQUk7UUFDckIsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFFSCxNQUFNLDZFQUNIRSxDQUFHOzt3RkFDQ0MsQ0FBRTswQkFBQyxDQUFTOzs7Ozs7d0ZBQ1pDLENBQUU7Ozs7O1lBQ0ZYLFdBQVcsQ0FBQ1ksR0FBRyxFQUFDQyxPQUFPLCtFQUNyQkMsQ0FBRTswR0FDQUMsQ0FBRTtrQ0FBRUYsT0FBTyxDQUFDRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0IsQ0FBQztBQUVELGlFQUFlakIsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3AtbmV4dC8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG5jb25zdCBbcHJvZHVjdExpc3QsIHNldFByb2R1Y3RMaXN0XSA9IHVzZVN0YXRlKFtdKVxuXG51c2VFZmZlY3QoKCkgPT4ge1xuICB3aW5kb3cuZmV0Y2goJy9hcGkvYXZvJylcbiAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbigoe2RhdGEsIGxlbmd0aH0pID0+IHtcbiAgICBzZXRQcm9kdWN0TGlzdChkYXRhKVxuICB9KVxufSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8aDE+UHJvZHVjdHMhPC9oMT5cbiAgICAgICAgPGJyLz5cbiAgICAgICAge3Byb2R1Y3RMaXN0Lm1hcChwcm9kdWN0ID0+IChcbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+e3Byb2R1Y3QubmFtZX08L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZVBhZ2UiLCJwcm9kdWN0TGlzdCIsInNldFByb2R1Y3RMaXN0Iiwid2luZG93IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImxlbmd0aCIsImRpdiIsImgxIiwiYnIiLCJtYXAiLCJwcm9kdWN0IiwidWwiLCJsaSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();