"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/TopNav/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/TopNav/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TopNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction TopNav() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthContext), user = ref.user, signOut = ref.signOut;\n    var isWideVersion = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBreakpointValue)({\n        base: false,\n        md: true,\n        lg: true\n    });\n    var ref1 = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useDisclosure)(), onOpen = ref1.onOpen, isOpen = ref1.isOpen, onClose = ref1.onClose;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        zIndex: \"1000\",\n        position: \"fixed\",\n        style: {\n            width: \"100vw\"\n        },\n        align: \"center\",\n        mx: \"auto\",\n        bg: \"#eee\",\n        p: \"4\",\n        justify: \"space-between\",\n        flexDir: \"row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                flexDir: \"row\",\n                align: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: user && user._id ? \"/dashboard\" : \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                        cursor: \"pointer\",\n                        flexDir: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                src: \"https://e865-168-228-216-82.sa.ngrok.io/images/inconformedia.png\",\n                                w: \"45\",\n                                h: \"45\",\n                                mr: \"2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/0xrfsd/ambiente/uppernodes/src/components/TopNav/index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                                flexDir: \"column\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                    fontSize: \"2xl\",\n                                    fontWeight: \"bold\",\n                                    color: \"#333\",\n                                    children: \"uppernodes.com\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/0xrfsd/ambiente/uppernodes/src/components/TopNav/index.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/0xrfsd/ambiente/uppernodes/src/components/TopNav/index.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/0xrfsd/ambiente/uppernodes/src/components/TopNav/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/0xrfsd/ambiente/uppernodes/src/components/TopNav/index.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/0xrfsd/ambiente/uppernodes/src/components/TopNav/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                flexDir: \"row\",\n                align: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuButton, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                                boxShadow: \"rgba(0,0,0, 0.05) 0 0 10px\",\n                                bg: \"#eee\",\n                                borderRadius: \"5\",\n                                align: \"center\",\n                                justify: \"center\",\n                                p: \"2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                                        as: react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.RiMenu2Line,\n                                        color: \"#333\",\n                                        fontSize: \"18\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/0xrfsd/ambiente/uppernodes/src/components/TopNav/index.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                                        name: \"Ricardo Domene\",\n                                        fontFamily: \"sans-serif\",\n                                        bg: \"#333\",\n                                        size: \"sm\",\n                                        ml: \"3\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/0xrfsd/ambiente/uppernodes/src/components/TopNav/index.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/0xrfsd/ambiente/uppernodes/src/components/TopNav/index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/0xrfsd/ambiente/uppernodes/src/components/TopNav/index.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuList, {\n                            boxShadow: \"rgba(0,0,0,0.1) 0 0 10px\",\n                            mt: \"1\",\n                            zIndex: \"3\",\n                            bg: \"#fff\",\n                            border: \"1px solid #e0e0e0\",\n                            py: \"0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {\n                                    _focus: {\n                                        borderRadius: 5,\n                                        backgroundColor: \"#eee\",\n                                        opacity: 0.6\n                                    },\n                                    _hover: {\n                                        borderRadius: 5,\n                                        backgroundColor: \"#eee\",\n                                        opacity: 0.6\n                                    },\n                                    justifyContent: \"space-between\",\n                                    py: \"4\",\n                                    onClick: function() {\n                                        onOpen();\n                                    },\n                                    color: \"#333\",\n                                    fontSize: \"sm\",\n                                    children: user && user.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/0xrfsd/ambiente/uppernodes/src/components/TopNav/index.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {\n                                    _hover: {\n                                        borderRadius: 5,\n                                        backgroundColor: \"#eee\",\n                                        opacity: 0.6\n                                    },\n                                    justifyContent: \"space-between\",\n                                    py: \"4\",\n                                    onClick: function() {\n                                        signOut();\n                                    },\n                                    color: \"#333\",\n                                    fontSize: \"sm\",\n                                    children: [\n                                        \"Sair da sua conta\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                                            as: react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiLogOut,\n                                            fontSize: \"md\",\n                                            color: \"#facebook.400\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/0xrfsd/ambiente/uppernodes/src/components/TopNav/index.tsx\",\n                                            lineNumber: 130,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/0xrfsd/ambiente/uppernodes/src/components/TopNav/index.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/0xrfsd/ambiente/uppernodes/src/components/TopNav/index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/0xrfsd/ambiente/uppernodes/src/components/TopNav/index.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/0xrfsd/ambiente/uppernodes/src/components/TopNav/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/0xrfsd/ambiente/uppernodes/src/components/TopNav/index.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this));\n};\n_s(TopNav, \"bxqGCwq8nfk4O2ymfOt3ZC62Q84=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBreakpointValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useDisclosure\n    ];\n});\n_c = TopNav;\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUI3QixNQUFNOztRQUdOUixnRUFBa0I7UUFNSkMsMkRBQWE7OztLQVQzQk8sTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ub3BOYXYvaW5kZXgudHN4PzdjYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXZhdGFyLFxuICBGbGV4LFxuICBJY29uLFxuICBJbWFnZSxcbiAgTWVudSxcbiAgTWVudUJ1dHRvbixcbiAgTWVudUl0ZW0sXG4gIE1lbnVMaXN0LFxuICBUZXh0LFxuICB1c2VCcmVha3BvaW50VmFsdWUsXG4gIHVzZURpc2Nsb3N1cmUsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmlMaXN0UGx1cywgQmlMb2dPdXQsIEJpVXNlclBsdXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcbmltcG9ydCB7XG4gIFJpTWVudTJMaW5lLFxuICBSaU1lbnVMaW5lLFxuICBSaU5vdGlmaWNhdGlvbjJMaW5lLFxuICBSaVNlYXJjaDJMaW5lLFxufSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL0F1dGhDb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvcE5hdigpIHtcbiAgY29uc3QgeyB1c2VyLCBzaWduT3V0IH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcblxuICBjb25zdCBpc1dpZGVWZXJzaW9uID0gdXNlQnJlYWtwb2ludFZhbHVlKHtcbiAgICBiYXNlOiBmYWxzZSxcbiAgICBtZDogdHJ1ZSxcbiAgICBsZzogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3QgeyBvbk9wZW4sIGlzT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXhcbiAgICAgIHpJbmRleD1cIjEwMDBcIlxuICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDB2d1wiIH19XG4gICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICBteD1cImF1dG9cIlxuICAgICAgYmc9XCIjZWVlXCJcbiAgICAgIHA9XCI0XCJcbiAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgIGZsZXhEaXI9XCJyb3dcIlxuICAgID5cbiAgICAgIDxGbGV4IGZsZXhEaXI9XCJyb3dcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8TGluayBocmVmPXt1c2VyICYmIHVzZXIuX2lkID8gXCIvZGFzaGJvYXJkXCIgOiBcIi9cIn0+XG4gICAgICAgICAgPEZsZXggY3Vyc29yPVwicG9pbnRlclwiIGZsZXhEaXI9XCJyb3dcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2U4NjUtMTY4LTIyOC0yMTYtODIuc2Eubmdyb2suaW8vaW1hZ2VzL2luY29uZm9ybWVkaWEucG5nXCJcbiAgICAgICAgICAgICAgdz1cIjQ1XCJcbiAgICAgICAgICAgICAgaD1cIjQ1XCJcbiAgICAgICAgICAgICAgbXI9XCIyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RmxleCBmbGV4RGlyPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMnhsXCIgZm9udFdlaWdodD1cImJvbGRcIiBjb2xvcj1cIiMzMzNcIj5cbiAgICAgICAgICAgICAgICB1cHBlcm5vZGVzLmNvbVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0ZsZXg+XG4gICAgICA8RmxleCBmbGV4RGlyPVwicm93XCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPE1lbnU+XG4gICAgICAgICAgPE1lbnVCdXR0b24+XG4gICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICBib3hTaGFkb3c9XCJyZ2JhKDAsMCwwLCAwLjA1KSAwIDAgMTBweFwiXG4gICAgICAgICAgICAgIGJnPVwiI2VlZVwiXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjVcIlxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBwPVwiMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uIGFzPXtSaU1lbnUyTGluZX0gY29sb3I9XCIjMzMzXCIgZm9udFNpemU9XCIxOFwiIC8+XG4gICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICBuYW1lPVwiUmljYXJkbyBEb21lbmVcIlxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJzYW5zLXNlcmlmXCJcbiAgICAgICAgICAgICAgICBiZz1cIiMzMzNcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgbWw9XCIzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8L01lbnVCdXR0b24+XG4gICAgICAgICAgPE1lbnVMaXN0XG4gICAgICAgICAgICBib3hTaGFkb3c9XCJyZ2JhKDAsMCwwLDAuMSkgMCAwIDEwcHhcIlxuICAgICAgICAgICAgbXQ9XCIxXCJcbiAgICAgICAgICAgIHpJbmRleD1cIjNcIlxuICAgICAgICAgICAgYmc9XCIjZmZmXCJcbiAgICAgICAgICAgIGJvcmRlcj1cIjFweCBzb2xpZCAjZTBlMGUwXCJcbiAgICAgICAgICAgIHB5PVwiMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgIF9mb2N1cz17e1xuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2VlZVwiLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZWVlXCIsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICBweT1cIjRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgb25PcGVuKCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNvbG9yPVwiIzMzM1wiXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwic21cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dXNlciAmJiB1c2VyLm5hbWV9XG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2VlZVwiLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgcHk9XCI0XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNpZ25PdXQoKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY29sb3I9XCIjMzMzXCJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCJzbVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNhaXIgZGEgc3VhIGNvbnRhXG4gICAgICAgICAgICAgIDxJY29uIGFzPXtCaUxvZ091dH0gZm9udFNpemU9XCJtZFwiIGNvbG9yPVwiI2ZhY2Vib29rLjQwMFwiIC8+XG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgIDwvTWVudUxpc3Q+XG4gICAgICAgIDwvTWVudT5cbiAgICAgIDwvRmxleD5cbiAgICA8L0ZsZXg+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQXZhdGFyIiwiRmxleCIsIkljb24iLCJJbWFnZSIsIk1lbnUiLCJNZW51QnV0dG9uIiwiTWVudUl0ZW0iLCJNZW51TGlzdCIsIlRleHQiLCJ1c2VCcmVha3BvaW50VmFsdWUiLCJ1c2VEaXNjbG9zdXJlIiwiTGluayIsIlJlYWN0IiwidXNlQ29udGV4dCIsIkJpTG9nT3V0IiwiUmlNZW51MkxpbmUiLCJBdXRoQ29udGV4dCIsIlRvcE5hdiIsInVzZXIiLCJzaWduT3V0IiwiaXNXaWRlVmVyc2lvbiIsImJhc2UiLCJtZCIsImxnIiwib25PcGVuIiwiaXNPcGVuIiwib25DbG9zZSIsInpJbmRleCIsInBvc2l0aW9uIiwic3R5bGUiLCJ3aWR0aCIsImFsaWduIiwibXgiLCJiZyIsInAiLCJqdXN0aWZ5IiwiZmxleERpciIsImhyZWYiLCJfaWQiLCJjdXJzb3IiLCJzcmMiLCJ3IiwiaCIsIm1yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJhcyIsIm5hbWUiLCJmb250RmFtaWx5Iiwic2l6ZSIsIm1sIiwibXQiLCJib3JkZXIiLCJweSIsIl9mb2N1cyIsImJhY2tncm91bmRDb2xvciIsIm9wYWNpdHkiLCJfaG92ZXIiLCJqdXN0aWZ5Q29udGVudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TopNav/index.tsx\n");

/***/ })

});