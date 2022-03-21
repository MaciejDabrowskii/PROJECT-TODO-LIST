/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    display: flex;\n    flex-direction: column;\n    flex: 0 0 auto;\n}\n.head {\n    width: 100%;\n    height: 100%;\n    background-color: rgb(97, 161, 216);\n}\n.logo {\n    height: 100%;\n    width: 40%;\n    font-size: 30px;\n}\n.body {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n.projectsDiv {\n    grid-column: 1 / 2;\n    height: 100%;\n    background-color: rgb(207, 196, 182);\n    display: grid;\n    grid-template-rows: 1fr 1fr 10fr 1fr;\n}\n.projectsDivHeader {\n    grid-row: 1 / 2;\n}\n.homeProjectDiv {\n    grid-row: 2 / 3;\n    background-color: rgb(176, 223, 223);\n}\n.projectsContainer {\n    grid-row: 3 / 4;\n    background-color: rgb(209, 223, 176);\n}\n.target {\n    border: 5px solid red;\n}\n.projectDiv {\n    display: flex;\n    justify-content: space-between;\n}\n.dropdown {\n    position: relative;\n    display: inline-block;\n}\n.dropdownContent {\n    display: block;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n  }\n\n\n.addProjectContainer {\n    grid-row: 4 / 5;\n    background-color: rgb(223, 176, 213);\n}\n\n.todosDiv {\n    grid-column: 2 / 3;\n    height: 100%;\n    background-color: rgb(216, 167, 139);\n    display: grid;\n    grid-template-rows: 1fr 0.5fr 10fr 1fr;\n}\n.todoDivHeader {\n    grid-row: 1 / 2;\n    background-color: rgb(176, 223, 223);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 2%;\n    font-size: 3vh;\n}\n.todoDataHeaderDiv {\n    grid-row: 2 / 3;\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr 4fr 1fr;\n    padding: 0.25% 0.5%;\n}\n.todoDataHeaderDiv > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.allTodosButton {\n    background-color: rgb(218, 149, 149);\n    align-self: center;\n    justify-self: end;\n    padding: 0.3%;\n    margin-right: 2%;\n    \n}\n.todosContainer {\n    grid-row: 3 / 4;\n    background-color: rgb(176, 223, 182);\n    padding: 0.25% 0.5%;\n}\n.todoDiv {\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr 4fr 0.5fr 0.25fr 0.25fr;\n    margin: 1% 0;\n}\n.moveTodoProjects{\n    position: relative;\n    display: inline-block;\n}\n.moveTodoDropdownHomeProject {\n    margin-bottom: 5%;\n}\n.moveTodoDropdownProjectDiv {\n    margin-bottom: 5%;\n}\n.moveTodoDropdownProjectDiv, .moveTodoDropdownHomeProject {\n    text-align: center;\n}\n.moveTodoDropdownProjectDiv:hover, .moveTodoDropdownHomeProject:hover {\n    border: 2px solid red;\n}\n.moveTodoProjectsDropdownContainer {\n    display: block;\n    position: absolute;\n    background-color: #f1f1f1;\n    /* min-width: 160px; */\n    right: 0;\n    top: 100%;\n    padding: 20px;\n    margin-right: 50px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n}\n.todoDiv > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.targetTodo {\n    border: 3px solid red;\n}\n.todoOptionsContainer {\n    display: grid;\n    grid-template-columns: 0.75fr 2fr 0.75fr 1fr 0.5fr 0.75fr 0.75fr 0.75fr 0.75fr 3fr 0.25fr 0.25fr;\n    grid-template-rows: 1fr 1fr;\n    grid-row: 4 / 5;\n    background-color: rgb(18, 116, 31);\n    padding: 5px;\n    justify-content: center;\n    align-items: center;\n}\n.addTODOButton {\n    grid-column: 1 / 13;\n    grid-row: 1 / 3;\n    width: 30%;\n    height: 80%;\n    align-self: center;\n    justify-self: center;\n}\n.todoOptionsContainer > label {\n    justify-self: center;\n}\n.todoCreateDivHeader {\n    grid-column: 1 / 13;\n    grid-row: 1 / 2;\n    justify-self: center;\n}\n.todoEditDivHeader {\n    grid-column: 1 / 13;\n    grid-row: 1 / 2;\n    justify-self: center;\n}\n.footer {\n    grid-row: 3 / 4;\n    display: flex;\n    align-items: center;\n    height: 4vh;\n    justify-content: center;\n    gap: 1%;\n}\n.gitIcon {\n    height: 3vh;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;AAClB;AACA;IACI,WAAW;IACX,YAAY;IACZ,mCAAmC;AACvC;AACA;IACI,YAAY;IACZ,UAAU;IACV,eAAe;AACnB;AACA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,oCAAoC;AACxC;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;IACf,oCAAoC;AACxC;AACA;IACI,eAAe;IACf,oCAAoC;AACxC;AACA;IACI,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,kBAAkB;IAClB,qBAAqB;AACzB;AACA;IACI,cAAc;IACd,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;IAChB,4CAA4C;IAC5C,UAAU;EACZ;;;AAGF;IACI,eAAe;IACf,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,sCAAsC;AAC1C;AACA;IACI,eAAe;IACf,oCAAoC;IACpC,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,eAAe;IACf,aAAa;IACb,8CAA8C;IAC9C,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,gBAAgB;;AAEpB;AACA;IACI,eAAe;IACf,oCAAoC;IACpC,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,8DAA8D;IAC9D,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,qBAAqB;AACzB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,cAAc;IACd,kBAAkB;IAClB,yBAAyB;IACzB,sBAAsB;IACtB,QAAQ;IACR,SAAS;IACT,aAAa;IACb,kBAAkB;IAClB,4CAA4C;IAC5C,UAAU;AACd;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,gGAAgG;IAChG,2BAA2B;IAC3B,eAAe;IACf,kCAAkC;IAClC,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,eAAe;IACf,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,mBAAmB;IACnB,eAAe;IACf,oBAAoB;AACxB;AACA;IACI,mBAAmB;IACnB,eAAe;IACf,oBAAoB;AACxB;AACA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,uBAAuB;IACvB,OAAO;AACX;AACA;IACI,WAAW;AACf","sourcesContent":["body {\n    display: flex;\n    flex-direction: column;\n    flex: 0 0 auto;\n}\n.head {\n    width: 100%;\n    height: 100%;\n    background-color: rgb(97, 161, 216);\n}\n.logo {\n    height: 100%;\n    width: 40%;\n    font-size: 30px;\n}\n.body {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n.projectsDiv {\n    grid-column: 1 / 2;\n    height: 100%;\n    background-color: rgb(207, 196, 182);\n    display: grid;\n    grid-template-rows: 1fr 1fr 10fr 1fr;\n}\n.projectsDivHeader {\n    grid-row: 1 / 2;\n}\n.homeProjectDiv {\n    grid-row: 2 / 3;\n    background-color: rgb(176, 223, 223);\n}\n.projectsContainer {\n    grid-row: 3 / 4;\n    background-color: rgb(209, 223, 176);\n}\n.target {\n    border: 5px solid red;\n}\n.projectDiv {\n    display: flex;\n    justify-content: space-between;\n}\n.dropdown {\n    position: relative;\n    display: inline-block;\n}\n.dropdownContent {\n    display: block;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n  }\n\n\n.addProjectContainer {\n    grid-row: 4 / 5;\n    background-color: rgb(223, 176, 213);\n}\n\n.todosDiv {\n    grid-column: 2 / 3;\n    height: 100%;\n    background-color: rgb(216, 167, 139);\n    display: grid;\n    grid-template-rows: 1fr 0.5fr 10fr 1fr;\n}\n.todoDivHeader {\n    grid-row: 1 / 2;\n    background-color: rgb(176, 223, 223);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 2%;\n    font-size: 3vh;\n}\n.todoDataHeaderDiv {\n    grid-row: 2 / 3;\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr 4fr 1fr;\n    padding: 0.25% 0.5%;\n}\n.todoDataHeaderDiv > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.allTodosButton {\n    background-color: rgb(218, 149, 149);\n    align-self: center;\n    justify-self: end;\n    padding: 0.3%;\n    margin-right: 2%;\n    \n}\n.todosContainer {\n    grid-row: 3 / 4;\n    background-color: rgb(176, 223, 182);\n    padding: 0.25% 0.5%;\n}\n.todoDiv {\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr 4fr 0.5fr 0.25fr 0.25fr;\n    margin: 1% 0;\n}\n.moveTodoProjects{\n    position: relative;\n    display: inline-block;\n}\n.moveTodoDropdownHomeProject {\n    margin-bottom: 5%;\n}\n.moveTodoDropdownProjectDiv {\n    margin-bottom: 5%;\n}\n.moveTodoDropdownProjectDiv, .moveTodoDropdownHomeProject {\n    text-align: center;\n}\n.moveTodoDropdownProjectDiv:hover, .moveTodoDropdownHomeProject:hover {\n    border: 2px solid red;\n}\n.moveTodoProjectsDropdownContainer {\n    display: block;\n    position: absolute;\n    background-color: #f1f1f1;\n    /* min-width: 160px; */\n    right: 0;\n    top: 100%;\n    padding: 20px;\n    margin-right: 50px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n}\n.todoDiv > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.targetTodo {\n    border: 3px solid red;\n}\n.todoOptionsContainer {\n    display: grid;\n    grid-template-columns: 0.75fr 2fr 0.75fr 1fr 0.5fr 0.75fr 0.75fr 0.75fr 0.75fr 3fr 0.25fr 0.25fr;\n    grid-template-rows: 1fr 1fr;\n    grid-row: 4 / 5;\n    background-color: rgb(18, 116, 31);\n    padding: 5px;\n    justify-content: center;\n    align-items: center;\n}\n.addTODOButton {\n    grid-column: 1 / 13;\n    grid-row: 1 / 3;\n    width: 30%;\n    height: 80%;\n    align-self: center;\n    justify-self: center;\n}\n.todoOptionsContainer > label {\n    justify-self: center;\n}\n.todoCreateDivHeader {\n    grid-column: 1 / 13;\n    grid-row: 1 / 2;\n    justify-self: center;\n}\n.todoEditDivHeader {\n    grid-column: 1 / 13;\n    grid-row: 1 / 2;\n    justify-self: center;\n}\n.footer {\n    grid-row: 3 / 4;\n    display: flex;\n    align-items: center;\n    height: 4vh;\n    justify-content: center;\n    gap: 1%;\n}\n.gitIcon {\n    height: 3vh;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom-functions/DOM-addProject-create-addBtn.js":
/*!***********************************************************!*\
  !*** ./src/dom-functions/DOM-addProject-create-addBtn.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createAddProjectBtn = () => {
    const addProjectContainer = document.querySelector('.addProjectContainer');
        addProjectContainer.innerHTML= "";
        const addProjectButton = document.createElement('button');
        addProjectButton.classList.add('addProjectButton');
        addProjectButton.innerText = "+ ADD";
        addProjectContainer.append(addProjectButton);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAddProjectBtn);

/***/ }),

/***/ "./src/dom-functions/DOM-addProject-swap-Btn-to-Form.js":
/*!**************************************************************!*\
  !*** ./src/dom-functions/DOM-addProject-swap-Btn-to-Form.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_add_project_form_buttons_events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/add-project-form-buttons-events.js */ "./src/functions/add-project-form-buttons-events.js");


const swapContents = () => {
    const addProjectContainer = document.querySelector('.addProjectContainer');
    addProjectContainer.innerHTML= "";
    const projectNameInputText = document.createElement('input');
    projectNameInputText.type = "text";
    projectNameInputText.id = "projectNameInputText";

    const projectNameInputLabel = document.createElement('Label');
    projectNameInputLabel.setAttribute("for","projectNameInputText");
    projectNameInputLabel.innerHTML = "Project name:";

    const projectNameConfirmBtn = document.createElement('button');
    projectNameConfirmBtn.classList.add("projectNameConfirmBtn");
    projectNameConfirmBtn.innerText= "V";
    const projectNameCancelBtn = document.createElement('button');
    projectNameCancelBtn.classList.add("projectNameCancelBtn");
    projectNameCancelBtn.innerText= "X";

    const validationMessageDiv = document.createElement('div');
    validationMessageDiv.classList.add('validationMessageDiv');


    addProjectContainer.append(projectNameInputLabel, projectNameInputText ,projectNameConfirmBtn, projectNameCancelBtn, validationMessageDiv);

    (0,_functions_add_project_form_buttons_events_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swapContents);

/***/ }),

/***/ "./src/dom-functions/DOM-addTodo-create-addBtn.js":
/*!********************************************************!*\
  !*** ./src/dom-functions/DOM-addTodo-create-addBtn.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createAddTODOtBtn = () => {
    const todoOptionsContainer = document.querySelector('.todoOptionsContainer');
    todoOptionsContainer.innerHTML= "";
        const addTODOButton = document.createElement('button');
        addTODOButton.classList.add('addTODOButton');
        addTODOButton.innerText = "+ ADD new ToDo";
        todoOptionsContainer.append(addTODOButton);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAddTODOtBtn);

/***/ }),

/***/ "./src/dom-functions/DOM-addTodo-swap-Btn-to-Form.js":
/*!***********************************************************!*\
  !*** ./src/dom-functions/DOM-addTodo-swap-Btn-to-Form.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_add_todo_form_events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/add-todo-form-events.js */ "./src/functions/add-todo-form-events.js");


const swaptodoOptionsContainerContents = () => {
    const todoOptionsContainer = document.querySelector('.todoOptionsContainer');
    todoOptionsContainer.innerHTML= "";

    const todoNameInputText = document.createElement('input');
    todoNameInputText.type = "text";
    todoNameInputText.id = "todoNameInputText";

    const todoNameInputLabel = document.createElement('Label');
    todoNameInputLabel.setAttribute("for","todoNameInputText");
    todoNameInputLabel.innerHTML = "ToDo name:";

    const todoDatePickerLabel = document.createElement('Label');
    todoDatePickerLabel.setAttribute("for","todoDatePickerInput");
    todoDatePickerLabel.innerHTML = "Date:";

    const todoDatePickerInput = document.createElement('input');
    todoDatePickerInput.type = "date";
    todoDatePickerInput.id = "todoDatePickerInput";

    const todoTimePickerLabel = document.createElement('Label');
    todoTimePickerLabel.setAttribute("for","todoTimePickerInput");
    todoTimePickerLabel.innerHTML = "Time:";

    const todoTimePickerInput = document.createElement('input');
    todoTimePickerInput.type = "time";
    todoTimePickerInput.id = "todoTimePickerInput";

    const todoPrioritySelectLabel = document.createElement('Label');
    todoPrioritySelectLabel.setAttribute("for","todoPrioritySelect");
    todoPrioritySelectLabel.innerHTML = "Priority:";

    const todoPrioritySelect = document.createElement('select');
    todoPrioritySelect.id = "todoPrioritySelect";

    let priorityArray = ['High', 'Medium', 'Low'];

    for (let i = 0; i < priorityArray.length; i++) {
        let priority = document.createElement("option");
        priority.value = priorityArray[i];
        priority.text = priorityArray[i];
        todoPrioritySelect.appendChild(priority);
    };
    
    const todoNotesInputLabel = document.createElement('Label');
    todoNotesInputLabel.setAttribute("for","todoNotesInputLabel");
    todoNotesInputLabel.innerHTML = "Notes:";

    const todoNotesInput = document.createElement('input');
    todoNotesInput.type = "textarea";
    todoNotesInput.id = "todoNotesInput";

    const todoCreateConfirmBtn = document.createElement('button');
    todoCreateConfirmBtn.classList.add("todoCreateConfirmBtn");
    todoCreateConfirmBtn.innerText= "V";

    const todoCreateCancelBtn = document.createElement('button');
    todoCreateCancelBtn.classList.add("todoCreateCancelBtn");
    todoCreateCancelBtn.innerText= "X";

    const todoCreateDivHeader = document.createElement('div');
    todoCreateDivHeader.classList.add('todoCreateDivHeader');
    todoCreateDivHeader.textContent = 'ADD NEW TODO';

    todoOptionsContainer.append(
        todoCreateDivHeader,
        todoNameInputLabel, 
        todoNameInputText ,
        todoDatePickerLabel,
        todoDatePickerInput,
        todoTimePickerLabel,
        todoTimePickerInput,
        todoPrioritySelectLabel,
        todoPrioritySelect,
        todoNotesInputLabel,
        todoNotesInput,
        todoCreateConfirmBtn,
        todoCreateCancelBtn
    );

    (0,_functions_add_todo_form_events_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swaptodoOptionsContainerContents);

/***/ }),

/***/ "./src/dom-functions/DOM-body.js":
/*!***************************************!*\
  !*** ./src/dom-functions/DOM-body.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_homeDiv_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/homeDiv-event.js */ "./src/functions/homeDiv-event.js");
/* harmony import */ var _DOM_window_listener_swap_todo_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM-window-listener-swap-todo-form.js */ "./src/dom-functions/DOM-window-listener-swap-todo-form.js");
/* harmony import */ var _DOM_window_listener_remove_editProject_dropdown_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM-window-listener-remove-editProject-dropdown.js */ "./src/dom-functions/DOM-window-listener-remove-editProject-dropdown.js");
/* harmony import */ var _DOM_window_listener_remove_moveTodo_dropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM-window-listener-remove-moveTodo-dropdown.js */ "./src/dom-functions/DOM-window-listener-remove-moveTodo-dropdown.js");




const createBody = () => {
    const body = document.querySelector('.body')

    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('projectsDiv');

    const homeProjectDiv = document.createElement('div');
    homeProjectDiv.classList.add('homeProjectDiv', 'target');
   
    const homeProjectDivTitle = document.createElement('div');
    homeProjectDivTitle.classList.add('homeProjectDivTitle')
    homeProjectDivTitle.innerText = "HOME";
    homeProjectDiv.appendChild(homeProjectDivTitle);

    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projectsContainer');

    const addProjectContainer = document.createElement('div');
    addProjectContainer.classList.add('addProjectContainer');

    const addProjectButton = document.createElement('button');
    addProjectButton.classList.add('addProjectButton');
    addProjectButton.innerText = "+ ADD";

    const projectsDivHeader = document.createElement('h2');
    projectsDivHeader.classList.add('projectsDivHeader');
    projectsDivHeader.innerText = "PROJECTS:";

    addProjectContainer.append(addProjectButton);

    (0,_functions_homeDiv_event_js__WEBPACK_IMPORTED_MODULE_0__["default"])(homeProjectDiv)

    projectsDiv.append(projectsDivHeader, homeProjectDiv, projectsContainer, addProjectContainer);

    const todosDiv = document.createElement('div');
    todosDiv.classList.add('todosDiv');

    const todoDivHeader = document.createElement('div');
    todoDivHeader.classList.add('todoDivHeader');
    todoDivHeader.innerText = "Todos:";

    const allTodosButton = document.createElement('div');
    allTodosButton.classList.add('allTodosButton');
    allTodosButton.innerText = "All Todos";

    todoDivHeader.append(allTodosButton);

    const todoDataHeaderDiv = document.createElement('div');
    todoDataHeaderDiv.classList.add('todoDataHeaderDiv');

    const todoNameDataHeader = document.createElement('div');
    todoNameDataHeader.classList.add('todoNameDataHeader');
    todoNameDataHeader.innerText = "NAME";

    const todoDateDataHeader = document.createElement('div');
    todoDateDataHeader.classList.add('todoDateDataHeader');
    todoDateDataHeader.innerText = "DATE";

    const todoTimeDataHeader = document.createElement('div');
    todoTimeDataHeader.classList.add('todoTimeDataHeader');
    todoTimeDataHeader.innerText = "TIME";

    const todoPriorityDataHeader = document.createElement('div');
    todoPriorityDataHeader.classList.add('todoPriorityDataHeader');
    todoPriorityDataHeader.innerText = "PRIORITY";

    const todoNoteDataHeader = document.createElement('div');
    todoNoteDataHeader.classList.add('todoNoteDataHeader');
    todoNoteDataHeader.innerText = "NOTE";

    const todoFunctionsDataHeader = document.createElement('div');
    todoFunctionsDataHeader.classList.add('todoFunctionsDataHeader');
    todoFunctionsDataHeader.innerText = "FUNCTIONS";

    todoDataHeaderDiv.append(todoNameDataHeader, todoDateDataHeader, todoTimeDataHeader, todoPriorityDataHeader, todoNoteDataHeader, todoFunctionsDataHeader);

    const todosContainer = document.createElement('div');
    todosContainer.classList.add('todosContainer');

    const todoOptionsContainer = document.createElement('div');
    todoOptionsContainer.classList.add('todoOptionsContainer');



    todosDiv.append(todoDivHeader, todoDataHeaderDiv, todosContainer, todoOptionsContainer);

    body.append(projectsDiv, todosDiv);
    window.addEventListener('click', (e) => {
        (0,_DOM_window_listener_swap_todo_form_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e);
        (0,_DOM_window_listener_remove_editProject_dropdown_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e);
        (0,_DOM_window_listener_remove_moveTodo_dropdown_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e);
    });

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBody);

/***/ }),

/***/ "./src/dom-functions/DOM-create-edit-project-dropdown-contents.js":
/*!************************************************************************!*\
  !*** ./src/dom-functions/DOM-create-edit-project-dropdown-contents.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const createEditProjectDropdownContents = () => {

    const dropdownContent = document.createElement('div');
    dropdownContent.classList.add('dropdownContent');

    const editProjectNameInput = document.createElement('input');
    editProjectNameInput.type = "text";
    editProjectNameInput.id = "editProjectName";

    const editProjectNameLabel = document.createElement('Label');
    editProjectNameLabel.setAttribute("for","editProjectName");
    editProjectNameLabel.innerHTML = "New project name:";

    const confirmNewNameButton = document.createElement('button');
    confirmNewNameButton.classList.add('confirmNewNameButton');
    confirmNewNameButton.textContent = 'OK';

    dropdownContent.append(editProjectNameLabel, editProjectNameInput, confirmNewNameButton);

    return [
        dropdownContent
    ];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEditProjectDropdownContents);

/***/ }),

/***/ "./src/dom-functions/DOM-editTodo-swap-to-Form.js":
/*!********************************************************!*\
  !*** ./src/dom-functions/DOM-editTodo-swap-to-Form.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_edit_todo_form_events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/edit-todo-form-events.js */ "./src/functions/edit-todo-form-events.js");


const editTodoContainerContents = (
    passedTargetProjectIndex,
    passedTodoIndex,
    todoNameDivContent,
    todoDateDivContent,
    todoTimeDivContent,
    todoNotesDivContent
) => {
    let  targetProjectIndex = passedTargetProjectIndex;
    let  todoIndex = passedTodoIndex;

    const todoOptionsContainer = document.querySelector('.todoOptionsContainer');
    todoOptionsContainer.innerHTML= "";

    const todoNameInputText = document.createElement('input');
    todoNameInputText.type = "text";
    todoNameInputText.id = "todoNameInputText";
    todoNameInputText.value = todoNameDivContent;

    const todoNameInputLabel = document.createElement('Label');
    todoNameInputLabel.setAttribute("for","todoNameInputText");
    todoNameInputLabel.innerHTML = "ToDo name:";

    const todoDatePickerLabel = document.createElement('Label');
    todoDatePickerLabel.setAttribute("for","todoDatePickerInput");
    todoDatePickerLabel.innerHTML = "Date:";

    const todoDatePickerInput = document.createElement('input');
    todoDatePickerInput.type = "date";
    todoDatePickerInput.id = "todoDatePickerInput";
    todoDatePickerInput.value = todoDateDivContent;


    const todoTimePickerLabel = document.createElement('Label');
    todoTimePickerLabel.setAttribute("for","todoTimePickerInput");
    todoTimePickerLabel.innerHTML = "Time:";

    const todoTimePickerInput = document.createElement('input');
    todoTimePickerInput.type = "time";
    todoTimePickerInput.id = "todoTimePickerInput";
    todoTimePickerInput.value = todoTimeDivContent;

    const todoPrioritySelectLabel = document.createElement('Label');
    todoPrioritySelectLabel.setAttribute("for","todoPrioritySelect");
    todoPrioritySelectLabel.innerHTML = "Priority:";

    const todoPrioritySelect = document.createElement('select');
    todoPrioritySelect.id = "todoPrioritySelect";

    let priorityArray = ['High', 'Medium', 'Low'];

    for (let i = 0; i < priorityArray.length; i++) {
        let priority = document.createElement("option");
        priority.value = priorityArray[i];
        priority.text = priorityArray[i];
        todoPrioritySelect.appendChild(priority);
    };
    
    const todoNotesInputLabel = document.createElement('Label');
    todoNotesInputLabel.setAttribute("for","todoNotesInputLabel");
    todoNotesInputLabel.innerHTML = "Notes:";

    const todoNotesInput = document.createElement('input');
    todoNotesInput.type = "textarea";
    todoNotesInput.id = "todoNotesInput";
    todoNotesInput.value = todoNotesDivContent;

    const todoEditConfirmBtn = document.createElement('button');
    todoEditConfirmBtn.classList.add("todoEditConfirmBtn");
    todoEditConfirmBtn.innerText= "V";

    const todoCreateCancelBtn = document.createElement('button');
    todoCreateCancelBtn.classList.add("todoCreateCancelBtn");
    todoCreateCancelBtn.innerText= "X";

    const todoCreateDivHeader = document.createElement('div');
    todoCreateDivHeader.classList.add('todoEditDivHeader');
    todoCreateDivHeader.textContent = 'EDIT TODO';

    todoOptionsContainer.append(
        todoCreateDivHeader,
        todoNameInputLabel, 
        todoNameInputText ,
        todoDatePickerLabel,
        todoDatePickerInput,
        todoTimePickerLabel,
        todoTimePickerInput,
        todoPrioritySelectLabel,
        todoPrioritySelect,
        todoNotesInputLabel,
        todoNotesInput,
        todoEditConfirmBtn,
        todoCreateCancelBtn
    );

    (0,_functions_edit_todo_form_events_js__WEBPACK_IMPORTED_MODULE_0__["default"])(targetProjectIndex, todoIndex);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTodoContainerContents);

/***/ }),

/***/ "./src/dom-functions/DOM-footer.js":
/*!*****************************************!*\
  !*** ./src/dom-functions/DOM-footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_gitLogo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/gitLogo.png */ "./src/icons/gitLogo.png");


const createFooter = () => {
    const footerDiv = document.querySelector('.footer')
    
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('nameDiv');
    nameDiv.innerText = 'Maciej Dabrowski'

    const gitLogoDiv = document.createElement('div');
    gitLogoDiv.classList.add('gitLogoDiv');
    const gitIcon = document.createElement('img');
    gitIcon.classList.add('gitIcon')
    gitIcon.src = _icons_gitLogo_png__WEBPACK_IMPORTED_MODULE_0__;

    gitLogoDiv.append(gitIcon);

    footerDiv.append(nameDiv, gitLogoDiv)
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);

/***/ }),

/***/ "./src/dom-functions/DOM-head.js":
/*!***************************************!*\
  !*** ./src/dom-functions/DOM-head.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createHead = () => {
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerText = "TODO - App to not forget";

    const notificationDateDiv = document.createElement('div');
    notificationDateDiv.classList.add('notificationDateDiv');

    const notificationDiv = document.createElement('div');
    notificationDiv.classList.add('notificationDiv');
    
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('dateDiv');

    notificationDateDiv.append(notificationDiv, dateDiv);

    const head = document.querySelector('.head');
    head.append(logo, notificationDateDiv);

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHead);

/***/ }),

/***/ "./src/dom-functions/DOM-prime-divs.js":
/*!*********************************************!*\
  !*** ./src/dom-functions/DOM-prime-divs.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const headerBodyFooter = () => {
    const mainDiv = document.body;

    const head = document.createElement('div');
    head.classList.add('head');

    const body = document.createElement('div');
    body.classList.add('body');

    const footer = document.createElement('div');
    footer.classList.add('footer');

    mainDiv.append(head, body, footer);

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerBodyFooter);

/***/ }),

/***/ "./src/dom-functions/DOM-refresh-TODOS-container.js":
/*!**********************************************************!*\
  !*** ./src/dom-functions/DOM-refresh-TODOS-container.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_project_menager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/project-menager.js */ "./src/functions/project-menager.js");
/* harmony import */ var _DOM_show_TODO_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM-show-TODO.js */ "./src/dom-functions/DOM-show-TODO.js");



const refreshTodosContainer = () => {
    document.querySelector('.todosContainer').innerHTML = "";
    let targetProjectName = document.querySelector('.target').firstChild.innerText;
    let targetProjectIndex = 0;
    if(targetProjectName === "HOME") {
        _functions_project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getHomeTodosArray().forEach((todo, index) => {
            (0,_DOM_show_TODO_js__WEBPACK_IMPORTED_MODULE_1__["default"])(todo, index);
        })
    }else {
        
        _functions_project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray().forEach((project, index) => {
            if (project.getName() === targetProjectName) {
                targetProjectIndex = index;
            };
        });
        _functions_project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray()[targetProjectIndex].getTodosArray().forEach((todo, index) => {
            (0,_DOM_show_TODO_js__WEBPACK_IMPORTED_MODULE_1__["default"])(todo, index);
        });
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refreshTodosContainer);

/***/ }),

/***/ "./src/dom-functions/DOM-show-TODO.js":
/*!********************************************!*\
  !*** ./src/dom-functions/DOM-show-TODO.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_todoDivsEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/todoDivsEvents */ "./src/functions/todoDivsEvents.js");


const domShowTodo = (todo, index) => {
    let todoIndex = index;
    const todosContainer = document.querySelector('.todosContainer');

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv',`${todo.getTodoPriority()}` );


    const todoNameDiv = document.createElement('div');
    todoNameDiv.classList.add('todoNameDiv');
    todoNameDiv.textContent = todo.getTodoName();

    const todoDateDiv = document.createElement('div');
    todoDateDiv.classList.add('todoDateDiv');
    todoDateDiv.textContent = todo.getTodoDate();

    const todoTimeDiv = document.createElement('div');
    todoTimeDiv.classList.add('todoTimeDiv');
    todoTimeDiv.textContent = todo.gettodoTime();

    const todoPriorityDiv = document.createElement('div');
    todoPriorityDiv.classList.add('todoTimeDiv');
    todoPriorityDiv.textContent = todo.getTodoPriority();

    const todoNotesDiv = document.createElement('div');
    todoNotesDiv.classList.add('todoTimeDiv');
    todoNotesDiv.textContent = todo.getTodoNotes();

    const moveTodoButton = document.createElement('button');
    moveTodoButton.classList.add('moveTodoButton');
    moveTodoButton.textContent = "Move";

    const editTodoButton = document.createElement('button');
    editTodoButton.classList.add('editTodoButton');
    editTodoButton.textContent = "E";

    const moveTodoDropdown = document.createElement('div');
    moveTodoDropdown.classList.add('moveTodoDropdown');

    moveTodoDropdown.append(moveTodoButton);

    const deleteTodoButton = document.createElement('button');
    deleteTodoButton.classList.add('deleteTodoButton');
    deleteTodoButton.textContent = "X";

    


    todoDiv.append(todoNameDiv, todoDateDiv, todoTimeDiv, todoPriorityDiv, todoNotesDiv, moveTodoDropdown, editTodoButton, deleteTodoButton);
    todosContainer.appendChild(todoDiv);
    (0,_functions_todoDivsEvents__WEBPACK_IMPORTED_MODULE_0__["default"])().todoTargetEvent(todoDiv);
    (0,_functions_todoDivsEvents__WEBPACK_IMPORTED_MODULE_0__["default"])().todoDeleteButtonEvent(deleteTodoButton, todoIndex);
    (0,_functions_todoDivsEvents__WEBPACK_IMPORTED_MODULE_0__["default"])().todoEditButtonEvent(editTodoButton, todoIndex, todo.getTodoName(), todo.getTodoDate(), todo.gettodoTime(), todo.getTodoNotes());
    (0,_functions_todoDivsEvents__WEBPACK_IMPORTED_MODULE_0__["default"])().todoMoveButtonEvent(moveTodoButton, todoIndex, todoDiv);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domShowTodo);

/***/ }),

/***/ "./src/dom-functions/DOM-show-move-TODO-dropdown.js":
/*!**********************************************************!*\
  !*** ./src/dom-functions/DOM-show-move-TODO-dropdown.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_project_menager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/project-menager.js */ "./src/functions/project-menager.js");
/* harmony import */ var _DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM-refresh-TODOS-container */ "./src/dom-functions/DOM-refresh-TODOS-container.js");



const moveTodoDropdownContents = (targetProjectName, todoIndex) => {
    
    const moveTodoDropdown = document.querySelector('.targetTodo').querySelector('.moveTodoDropdown');
    const moveTodoProjectsDropdownContainer = document.createElement('div');
    moveTodoProjectsDropdownContainer.classList.add('moveTodoProjectsDropdownContainer');
    const moveTodoProjects = document.createElement('div');
    moveTodoProjects.classList.add('moveTodoProjects');

    
    if (targetProjectName === "HOME") {
        _functions_project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray().forEach((project, index) => {
            
            const moveTodoDropdownProjectDiv = document.createElement('div');
            moveTodoDropdownProjectDiv.classList.add('moveTodoDropdownProjectDiv');
            moveTodoDropdownProjectDiv.textContent = project.getName();
            moveTodoDropdownProjectDiv.addEventListener('click', (e) => {
                
                let todoToMove = _functions_project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getHomeTodosArray().splice(todoIndex, 1);
                project.addToTodosArray(todoToMove[0]);              
                e.stopPropagation();
                (0,_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_1__["default"])();
            })
            
            moveTodoProjectsDropdownContainer.append(moveTodoDropdownProjectDiv);

        });
        
        moveTodoProjects.append(moveTodoProjectsDropdownContainer);
        moveTodoDropdown.append(moveTodoProjects);
    }
    else {

        let tragetProjectIndex = 0;
        _functions_project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray().forEach((project, index) => {
            if (targetProjectName == project.getName()) {
                tragetProjectIndex = index
            };
        });
        const moveTodoDropdownHomeProject = document.createElement('div');
        moveTodoDropdownHomeProject.classList.add('moveTodoDropdownHomeProject');
        moveTodoDropdownHomeProject.textContent = 'HOME';
        moveTodoDropdownHomeProject.addEventListener('click', (e) => {
            
            const todoToMove = _functions_project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray()[tragetProjectIndex].getTodosArray().splice(todoIndex, 1);
            
            _functions_project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].pushToHomeTodosArray(todoToMove[0]);
            e.stopPropagation();
            (0,_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_1__["default"])();
        });
        
        moveTodoProjectsDropdownContainer.append(moveTodoDropdownHomeProject);
        
        _functions_project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray().forEach((project, index) => {
            
            if (targetProjectName !== project.getName()) {

                const moveTodoDropdownProjectDiv = document.createElement('div');
                moveTodoDropdownProjectDiv.classList.add('moveTodoDropdownProjectDiv');
                moveTodoDropdownProjectDiv.textContent = project.getName();
                moveTodoDropdownProjectDiv.addEventListener('click', (e) => {

                    const todoToMove = _functions_project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray()[tragetProjectIndex].getTodosArray().splice(todoIndex, 1);

                    project.addToTodosArray(todoToMove[0]);
                    e.stopPropagation();
                    (0,_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_1__["default"])();

                })
                moveTodoProjectsDropdownContainer.append(moveTodoDropdownProjectDiv);
            };
        });
        moveTodoProjects.append(moveTodoProjectsDropdownContainer);
        moveTodoDropdown.append(moveTodoProjects);
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moveTodoDropdownContents);

/***/ }),

/***/ "./src/dom-functions/DOM-show-projects.js":
/*!************************************************!*\
  !*** ./src/dom-functions/DOM-show-projects.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_project_menager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/project-menager.js */ "./src/functions/project-menager.js");
/* harmony import */ var _functions_add_project_divs_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/add-project-divs-event */ "./src/functions/add-project-divs-event.js");
/* harmony import */ var _DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM-refresh-TODOS-container */ "./src/dom-functions/DOM-refresh-TODOS-container.js");



let showProjects = () => {   
    document.querySelector('.projectsContainer').innerHTML= "";
    document.querySelector('.homeProjectDiv').classList.add('target');
    (0,_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_2__["default"])();
        _functions_project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray().forEach((project, index) => {
            let projectDiv = document.createElement('div');
            projectDiv.classList.add('projectDiv');

            const projectName = document.createElement('div');
            projectName.classList.add('projectName');
            projectName.innerText = `${project.getName()}`;
        
            const dropdown = document.createElement('div');
            dropdown.classList.add('dropdown');

            const editProjectButton = document.createElement('button');
            editProjectButton.classList.add('editProjectButton');
            editProjectButton.textContent = 'E';
            
            dropdown.append(editProjectButton);

            const deleteProjectButton = document.createElement('button');
            deleteProjectButton.classList.add('deleteProjectButton');
            deleteProjectButton.textContent = 'X';
            deleteProjectButton.setAttribute('data-key', `${project.getName()}`)

            const projectButtonsContainer = document.createElement('div');
            projectButtonsContainer.classList.add('projectButtonsContainer');

            projectButtonsContainer.append(dropdown, deleteProjectButton);


            projectDiv.append(projectName, projectButtonsContainer);

            document.querySelector('.projectsContainer').append(projectDiv);
            (0,_functions_add_project_divs_event__WEBPACK_IMPORTED_MODULE_1__["default"])().deleteProjectButton(deleteProjectButton, index);
            (0,_functions_add_project_divs_event__WEBPACK_IMPORTED_MODULE_1__["default"])().editProjectButton(editProjectButton, index, dropdown);
            (0,_functions_add_project_divs_event__WEBPACK_IMPORTED_MODULE_1__["default"])().projectDivEvent(projectDiv);
        });

}; 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showProjects);

/***/ }),

/***/ "./src/dom-functions/DOM-window-listener-remove-editProject-dropdown.js":
/*!******************************************************************************!*\
  !*** ./src/dom-functions/DOM-window-listener-remove-editProject-dropdown.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM_show_projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM-show-projects.js */ "./src/dom-functions/DOM-show-projects.js");

function removeDropdown(event) {
        
    if (!!document.querySelector('.dropdownContent')){
        if (
            (!event.target.matches(`.editProjectButton`)) &&
            (!event.target.matches('.dropdownContent')) &&
            (!event.target.matches('#editProjectName')) &&
            (!event.target.matches('label')) &&
            (!event.target.matches('.confirmNewNameButton'))
           ) {  
               const dropdownContent = document.querySelector('.dropdownContent');
               dropdownContent.remove();
               (0,_DOM_show_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
             };
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeDropdown);

/***/ }),

/***/ "./src/dom-functions/DOM-window-listener-remove-moveTodo-dropdown.js":
/*!***************************************************************************!*\
  !*** ./src/dom-functions/DOM-window-listener-remove-moveTodo-dropdown.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function removeMoveTodoDropdown(event) {
        
    if (!!document.querySelector('.moveTodoProjects')){
        if (
            (!event.target.matches(`.moveTodoProjectsDropdownContainer`)) &&
            (!event.target.matches('.moveTodoDropdownHomeProject')) &&
            (!event.target.matches('.moveTodoDropdownProjectDiv')) &&
            (!event.target.matches('.moveTodoButton'))
           ) {  
               const moveTodoProjects = document.querySelector('.moveTodoProjects');
               moveTodoProjects.remove();
             };
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeMoveTodoDropdown);

/***/ }),

/***/ "./src/dom-functions/DOM-window-listener-swap-todo-form.js":
/*!*****************************************************************!*\
  !*** ./src/dom-functions/DOM-window-listener-swap-todo-form.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM_addTodo_create_addBtn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM-addTodo-create-addBtn.js */ "./src/dom-functions/DOM-addTodo-create-addBtn.js");
/* harmony import */ var _functions_add_todo_button_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/add-todo-button-event.js */ "./src/functions/add-todo-button-event.js");


function swapEditOrAddTodoFormToButton(event) {
        
    if ((!event.target.matches('.addTODOButton') && !event.target.matches('.editTodoButton')) && ((!!document.querySelector('.todoCreateDivHeader')) || (!!document.querySelector('.todoEditDivHeader')))){
        if (
            (!event.target.matches('.todoOptionsContainer')) &&
            (!event.target.matches('.todoCreateDivHeader')) &&
            (!event.target.matches('label')) &&
            (!event.target.matches('#todoNameInputText')) &&
            (!event.target.matches('#todoDatePickerInput')) &&
            (!event.target.matches('#todoTimePickerInput')) &&
            (!event.target.matches('#todoPrioritySelect')) &&
            (!event.target.matches('option')) &&
            (!event.target.matches('#todoNotesInput')) &&
            (!event.target.matches('.todoCreateConfirmBtn')) &&
            (!event.target.matches('.todoCreateCancelBtn')) &&
            (!event.target.matches('.todoEditDivHeader')) &&
            (!event.target.matches('.todoEditConfirmBtn')) &&
            (!event.target.matches('.addTODOButton'))

           ) { 
                (0,_DOM_addTodo_create_addBtn_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
                (0,_functions_add_todo_button_event_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
             }; 
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swapEditOrAddTodoFormToButton);


/***/ }),

/***/ "./src/functions/TODO-creator.js":
/*!***************************************!*\
  !*** ./src/functions/TODO-creator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const todoTask = (name, date, time, priority, notes) => {
    let todoName = name;
    let todoDate = date;
    let todoTime = time;
    let todoPriority = priority;
    let todoNotes = notes;
    let todoStatus = false;
    
    // Get functions returning variable contents
    const getTodoName = () => todoName;
    const getTodoDate = () => todoDate;
    const gettodoTime = () => todoTime;
    const getTodoPriority = () => todoPriority;
    const getTodoNotes = () => todoNotes;
    const getTodoStatus = () => todoStatus;
    
    // Set functions to edit variable contents
    const setTodoName = (string) => {
        todoName = string
    };
    const setTodoDate = (string) => {
        todoDate = string
    };
    const setTodoTime = (string) => {
        todoTime = string;
    };
    const setTodoPriority = (string) => {
        todoPriority = string;
    };
    const setTodoNotes = (string) => {
        todoNotes = string;
    };
    const setTodoStatus = () => {
        return todoStatus ? todoStatus = false : todoStatus = true;
    }  

    return {
        getTodoName,
        getTodoDate,
        gettodoTime,
        getTodoPriority,
        getTodoNotes,
        getTodoStatus,
        setTodoName,
        setTodoDate,
        setTodoTime,
        setTodoPriority,
        setTodoNotes,
        setTodoStatus,
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoTask);

/***/ }),

/***/ "./src/functions/add-project-button-event.js":
/*!***************************************************!*\
  !*** ./src/functions/add-project-button-event.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_functions_DOM_addProject_swap_Btn_to_Form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-functions/DOM-addProject-swap-Btn-to-Form.js */ "./src/dom-functions/DOM-addProject-swap-Btn-to-Form.js");

const addProjectButtonEvent = () => {
    const addProjectButton = document.querySelector('.addProjectButton');
    addProjectButton.addEventListener('click', _dom_functions_DOM_addProject_swap_Btn_to_Form_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addProjectButtonEvent);

/***/ }),

/***/ "./src/functions/add-project-divs-event.js":
/*!*************************************************!*\
  !*** ./src/functions/add-project-divs-event.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_menager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-menager.js */ "./src/functions/project-menager.js");
/* harmony import */ var _project_creator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-creator.js */ "./src/functions/project-creator.js");
/* harmony import */ var _TODO_creator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TODO-creator.js */ "./src/functions/TODO-creator.js");
/* harmony import */ var _dom_functions_DOM_addTodo_create_addBtn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-functions/DOM-addTodo-create-addBtn.js */ "./src/dom-functions/DOM-addTodo-create-addBtn.js");
/* harmony import */ var _add_todo_button_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-todo-button-event.js */ "./src/functions/add-todo-button-event.js");
/* harmony import */ var _dom_functions_DOM_show_TODO_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-functions/DOM-show-TODO.js */ "./src/dom-functions/DOM-show-TODO.js");
/* harmony import */ var _dom_functions_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-functions/DOM-refresh-TODOS-container */ "./src/dom-functions/DOM-refresh-TODOS-container.js");
/* harmony import */ var _dom_functions_DOM_show_projects_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dom-functions/DOM-show-projects.js */ "./src/dom-functions/DOM-show-projects.js");
/* harmony import */ var _dom_functions_DOM_create_edit_project_dropdown_contents_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dom-functions/DOM-create-edit-project-dropdown-contents.js */ "./src/dom-functions/DOM-create-edit-project-dropdown-contents.js");












const addProjectDivEvent = () => {

    const deleteProjectButton = (deleteButton, index) => {
        deleteButton.addEventListener('click', (e) =>{

            _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeProject(index);
            (0,_dom_functions_DOM_show_projects_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
            e.stopPropagation();
        });
    };



    const editProjectButton = (editButton, index, dropdown) => {
        
        editButton.addEventListener('click', (e) =>{
            
            if (!!document.querySelector('.dropdownContent')) {
                const dropdownContent = document.querySelector('.dropdownContent');
                dropdownContent.remove();
                dropdown.append(...(0,_dom_functions_DOM_create_edit_project_dropdown_contents_js__WEBPACK_IMPORTED_MODULE_8__["default"])());
                const editProjectNameInput = document.getElementById('editProjectName');
                const confirmNewNameButton = document.querySelector('.confirmNewNameButton');
                confirmNewNameButton.addEventListener('click', (e) =>{
                    _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray()[index].editProjectName(editProjectNameInput.value);
                    (0,_dom_functions_DOM_show_projects_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
                    e.stopPropagation();
                });
            } else {
                dropdown.append(...(0,_dom_functions_DOM_create_edit_project_dropdown_contents_js__WEBPACK_IMPORTED_MODULE_8__["default"])());
                const editProjectNameInput = document.getElementById('editProjectName');
                const confirmNewNameButton = document.querySelector('.confirmNewNameButton');
                confirmNewNameButton.addEventListener('click', (e) =>{
                    _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray()[index].editProjectName(editProjectNameInput.value);
                    (0,_dom_functions_DOM_show_projects_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
                    e.stopPropagation();
                });
            }
            e.stopPropagation()
        });
    };
    
    const projectDivEvent = (projectDiv,) => {
        const homeProject = document.querySelector('.homeProjectDiv');
        
        projectDiv.addEventListener('click', (e) => {
            const projectsArray = [...document.querySelectorAll('.projectDiv')];
            projectsArray.forEach((item) => {
                item.classList.remove('target'); 
            });
            homeProject.classList.remove('target');
            projectDiv.classList.add('target');
            
            (0,_dom_functions_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_6__["default"])();
            e.stopPropagation();
        })

    }


    return {
        editProjectButton,
        deleteProjectButton,
        projectDivEvent,
    }


};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addProjectDivEvent);



/***/ }),

/***/ "./src/functions/add-project-form-buttons-events.js":
/*!**********************************************************!*\
  !*** ./src/functions/add-project-form-buttons-events.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_project_button_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-project-button-event.js */ "./src/functions/add-project-button-event.js");
/* harmony import */ var _dom_functions_DOM_addProject_create_addBtn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-functions/DOM-addProject-create-addBtn.js */ "./src/dom-functions/DOM-addProject-create-addBtn.js");
/* harmony import */ var _project_menager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-menager.js */ "./src/functions/project-menager.js");
/* harmony import */ var _project_creator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-creator.js */ "./src/functions/project-creator.js");
/* harmony import */ var _dom_functions_DOM_show_projects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-functions/DOM-show-projects.js */ "./src/dom-functions/DOM-show-projects.js");
/* harmony import */ var _dom_functions_DOM_show_TODO_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-functions/DOM-show-TODO.js */ "./src/dom-functions/DOM-show-TODO.js");







const addEventFunctiontsToForm = () => {
    
    const declineBtnFunction = (() => {
        const projectNameCancelBtn = document.querySelector('.projectNameCancelBtn');
        projectNameCancelBtn.addEventListener('click', () => {
            (0,_dom_functions_DOM_addProject_create_addBtn_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
            (0,_add_project_button_event_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
        })
    })();

    const confirmBtn = (() => {
        const projectNameConfirmBtn = document.querySelector('.projectNameConfirmBtn');
        projectNameConfirmBtn.addEventListener('click', () => {
            const validationMessageDiv = document.querySelector('.validationMessageDiv');
            const projectNameInputText = document.getElementById('projectNameInputText').value;
            const project = (0,_project_creator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(projectNameInputText);
            const projectNamesArray = [];
            _project_menager_js__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectsArray().forEach((project) => {
                projectNamesArray.push(project.getName());
                console.log(projectNamesArray);
            });
            if (projectNamesArray.includes(projectNameInputText)) {
                validationMessageDiv.innerText = "This name already exists!";
                validationMessageDiv.classList.add('projectNameError');
            } else if(projectNameInputText.length === 0) {
                validationMessageDiv.innerText = "Name must be at least 1 character long";
                validationMessageDiv.classList.add('projectNameError');
            }
            else {
            _project_menager_js__WEBPACK_IMPORTED_MODULE_2__["default"].pushToProjectsArray(project);      
            (0,_dom_functions_DOM_addProject_create_addBtn_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
            (0,_add_project_button_event_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
            (0,_dom_functions_DOM_show_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"])(); 
            }
        })
    })();

    // const projectNameValidation = (() => {
    //     const projectNameInputText = document.getElementById('projectNameInputText');
    //     const validationMessageDiv = document.querySelector('validationMessageDiv');
    //     const projectNamesArray = [];
    //     projectMenager.getProjectsArray().forEach((project) => {
    //         projectNamesArray.push(project.getName());
    //         console.log(projectNamesArray);
    //     });
    //     projectNameInputText.addEventListener('keydown', () => {
    //         projectNamesArray.forEach((name) => {
    //             if(name === projectNameInputText.value) {
    //                 validationMessageDiv.innerText = "This name already exists!";
    //                 validationMessageDiv.classList.add('projectNameError');
    //             }
    //             else {
    //                 validationMessageDiv.innerText = "This name already exists!";
    //                 validationMessageDiv.classList.remov('projectNameError');
    //                 validationMessageDiv.classList.add('projectNameOk');
    //                 confirmBtn();
    //             }
    //         })
    //     })
    // })();

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEventFunctiontsToForm);

/***/ }),

/***/ "./src/functions/add-todo-button-event.js":
/*!************************************************!*\
  !*** ./src/functions/add-todo-button-event.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_functions_DOM_addTodo_swap_Btn_to_Form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-functions/DOM-addTodo-swap-Btn-to-Form.js */ "./src/dom-functions/DOM-addTodo-swap-Btn-to-Form.js");
/* harmony import */ var _dom_functions_DOM_window_listener_swap_todo_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-functions/DOM-window-listener-swap-todo-form.js */ "./src/dom-functions/DOM-window-listener-swap-todo-form.js");


const addTODOButtonEvent = () => {
    const addTODOButton = document.querySelector('.addTODOButton');
    addTODOButton.addEventListener('click', _dom_functions_DOM_addTodo_swap_Btn_to_Form_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTODOButtonEvent);

/***/ }),

/***/ "./src/functions/add-todo-form-events.js":
/*!***********************************************!*\
  !*** ./src/functions/add-todo-form-events.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_menager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-menager.js */ "./src/functions/project-menager.js");
/* harmony import */ var _project_creator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-creator.js */ "./src/functions/project-creator.js");
/* harmony import */ var _TODO_creator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TODO-creator.js */ "./src/functions/TODO-creator.js");
/* harmony import */ var _dom_functions_DOM_addTodo_create_addBtn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-functions/DOM-addTodo-create-addBtn.js */ "./src/dom-functions/DOM-addTodo-create-addBtn.js");
/* harmony import */ var _add_todo_button_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-todo-button-event.js */ "./src/functions/add-todo-button-event.js");
/* harmony import */ var _create_new_todo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-new-todo.js */ "./src/functions/create-new-todo.js");
/* harmony import */ var _dom_functions_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-functions/DOM-refresh-TODOS-container */ "./src/dom-functions/DOM-refresh-TODOS-container.js");







const newTodoButtonsEvents = () => {
    const declineBtnFunction = (() => {
        const todoCreateCancelBtn = document.querySelector('.todoCreateCancelBtn');
        todoCreateCancelBtn.addEventListener('click', () => {
            (0,_dom_functions_DOM_addTodo_create_addBtn_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
            (0,_add_todo_button_event_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
        })
    })();

    const confirmBtn = (() => {
        const todoCreateConfirmBtn = document.querySelector('.todoCreateConfirmBtn');
        todoCreateConfirmBtn.addEventListener('click', () => {
            const createTodo = (0,_create_new_todo_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
            const projectName = document.querySelector('.target').firstChild.innerText;
            if (projectName === "HOME") {
                _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].pushToHomeTodosArray(createTodo);
            } else {
                let projectsArray = _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray();
                let projectIndex; 
                for(let i = 0; i < projectsArray.length; i++ ) {
                    if (_project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray()[i].getName() === projectName) projectIndex = i;
                }
                const project = _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray()[projectIndex];
                project.addToTodosArray(createTodo); 
            };
            
            (0,_dom_functions_DOM_addTodo_create_addBtn_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
            (0,_add_todo_button_event_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
            (0,_dom_functions_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_6__["default"])();
        })
    })();

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTodoButtonsEvents);

/***/ }),

/***/ "./src/functions/create-new-todo.js":
/*!******************************************!*\
  !*** ./src/functions/create-new-todo.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TODO_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TODO-creator.js */ "./src/functions/TODO-creator.js");
/* harmony import */ var _project_menager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-menager.js */ "./src/functions/project-menager.js");


const newTodo = () => {
    const name = document.getElementById('todoNameInputText').value;
    const date = document.getElementById('todoDatePickerInput').value;
    const time = document.getElementById('todoTimePickerInput').value;
    const priority = document.getElementById('todoPrioritySelect').value;
    const notes = document.getElementById('todoNotesInput').value;
    let todo = (0,_TODO_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name, date, time, priority, notes);
    return todo
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTodo);

/***/ }),

/***/ "./src/functions/edit-todo-form-events.js":
/*!************************************************!*\
  !*** ./src/functions/edit-todo-form-events.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_menager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-menager.js */ "./src/functions/project-menager.js");
/* harmony import */ var _dom_functions_DOM_addTodo_create_addBtn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-functions/DOM-addTodo-create-addBtn.js */ "./src/dom-functions/DOM-addTodo-create-addBtn.js");
/* harmony import */ var _add_todo_button_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-todo-button-event.js */ "./src/functions/add-todo-button-event.js");
/* harmony import */ var _dom_functions_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-functions/DOM-refresh-TODOS-container */ "./src/dom-functions/DOM-refresh-TODOS-container.js");




const editTodoButtonsEvents = (targetProjectIndex, todoIndex,) => {
    const declineBtnFunction = (() => {
        const todoCreateCancelBtn = document.querySelector('.todoCreateCancelBtn');
        todoCreateCancelBtn.addEventListener('click', () => {
            (0,_dom_functions_DOM_addTodo_create_addBtn_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
            (0,_add_todo_button_event_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        })
    })();

    const confirmBtn = (() => {
        const todoEditConfirmBtn = document.querySelector('.todoEditConfirmBtn');
        todoEditConfirmBtn.addEventListener('click', () => {

            let targetProjectName = document.querySelector('.target').firstChild.innerText;
            
            if (targetProjectName === "HOME") {
                const homeTodo = _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getHomeTodosArray()[todoIndex];
                homeTodo.setTodoName(document.getElementById('todoNameInputText').value);
                homeTodo.setTodoDate(document.getElementById('todoDatePickerInput').value);
                homeTodo.setTodoTime(document.getElementById('todoTimePickerInput').value);
                homeTodo.setTodoPriority(document.getElementById('todoPrioritySelect').value);
                homeTodo.setTodoNotes(document.getElementById('todoNotesInput').value);

                (0,_dom_functions_DOM_addTodo_create_addBtn_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
                (0,_add_todo_button_event_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
                (0,_dom_functions_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_3__["default"])();
            }
            else{           
                const todo = _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray()[targetProjectIndex].getTodosArray()[todoIndex];
                todo.setTodoName(document.getElementById('todoNameInputText').value);
                todo.setTodoDate(document.getElementById('todoDatePickerInput').value);
                todo.setTodoTime(document.getElementById('todoTimePickerInput').value);
                todo.setTodoPriority(document.getElementById('todoPrioritySelect').value);
                todo.setTodoNotes(document.getElementById('todoNotesInput').value);

                (0,_dom_functions_DOM_addTodo_create_addBtn_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
                (0,_add_todo_button_event_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
                (0,_dom_functions_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_3__["default"])();
            }
        })
    })();

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTodoButtonsEvents);

/***/ }),

/***/ "./src/functions/homeDiv-event.js":
/*!****************************************!*\
  !*** ./src/functions/homeDiv-event.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_menager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-menager.js */ "./src/functions/project-menager.js");
/* harmony import */ var _dom_functions_DOM_show_TODO_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-functions/DOM-show-TODO.js */ "./src/dom-functions/DOM-show-TODO.js");
/* harmony import */ var _dom_functions_DOM_refresh_TODOS_container_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-functions/DOM-refresh-TODOS-container.js */ "./src/dom-functions/DOM-refresh-TODOS-container.js");



const showTodosFromHomeProject = (homeProjectDiv) => {
    homeProjectDiv.addEventListener('click', () => {
        document.querySelectorAll('.projectDiv').forEach((project) => {
            project.classList.remove('target');
        });
        homeProjectDiv.classList.add('target');

        (0,_dom_functions_DOM_refresh_TODOS_container_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showTodosFromHomeProject);

/***/ }),

/***/ "./src/functions/project-creator.js":
/*!******************************************!*\
  !*** ./src/functions/project-creator.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectCreator = (name) => {
    let projectName = name;
    let todosArray = [];
    
    const getName = () => projectName;
    const getTodosArray = () => todosArray;
    const editProjectName = (string) => {
        projectName = string;
    }
    const addToTodosArray = (item) => {
        todosArray.push(item);
    };
    const removeTODO = (index) => {
        todosArray.splice(index, 1);
    }
    const flatTodosArray = () => {
        todosArray = todosArray.flat();
    }
    return {
        getName,
        getTodosArray,
        editProjectName,
        addToTodosArray,
        removeTODO,
        flatTodosArray,
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectCreator);

/***/ }),

/***/ "./src/functions/project-menager.js":
/*!******************************************!*\
  !*** ./src/functions/project-menager.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectMenager = (() => {
    let projectsArray = [];
    let homeTodosArray = [];
    
    const getProjectsArray = () => projectsArray;
    const getHomeTodosArray = () => homeTodosArray;
    const pushToHomeTodosArray = (todo) => {
        homeTodosArray.push(todo);
    };
    const pushToProjectsArray = (project) => {
        projectsArray.push(project);
    };
    const getAllTodosFromProjects = () => {
        let allTodos =[];
        for (let i = 0; i < projectsArray.length; i++) {
           allTodos.push(projectsArray[i].getTodosArray)
        };
        allTodos.push(homeTodosArray)
        return allTodos.flat()
    };
    const removeProject = (index) => {
        projectsArray.splice(index, 1);
    };
    const removeHomeTODO = (index) => {
        homeTodosArray.splice(index, 1);
    };
    const moveTODOFromHomeToProject = (todoIndex, projectIndex) => {
        let temp = homeTodosArray.splice(todoIndex, 1);
        projectsArray[projectIndex].addToTodosArray(temp);
        projectsArray[projectIndex].flatTodosArray();
    };

    return {
        getProjectsArray,
        getAllTodosFromProjects,
        getHomeTodosArray,
        pushToProjectsArray,
        pushToHomeTodosArray,
        removeProject,
        removeHomeTODO,
        moveTODOFromHomeToProject,
    }
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectMenager);

/***/ }),

/***/ "./src/functions/todoDivsEvents.js":
/*!*****************************************!*\
  !*** ./src/functions/todoDivsEvents.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_menager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-menager.js */ "./src/functions/project-menager.js");
/* harmony import */ var _dom_functions_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-functions/DOM-refresh-TODOS-container */ "./src/dom-functions/DOM-refresh-TODOS-container.js");
/* harmony import */ var _dom_functions_DOM_editTodo_swap_to_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-functions/DOM-editTodo-swap-to-Form */ "./src/dom-functions/DOM-editTodo-swap-to-Form.js");
/* harmony import */ var _dom_functions_DOM_addTodo_create_addBtn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-functions/DOM-addTodo-create-addBtn.js */ "./src/dom-functions/DOM-addTodo-create-addBtn.js");
/* harmony import */ var _add_todo_button_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-todo-button-event.js */ "./src/functions/add-todo-button-event.js");
/* harmony import */ var _dom_functions_DOM_show_move_TODO_dropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-functions/DOM-show-move-TODO-dropdown.js */ "./src/dom-functions/DOM-show-move-TODO-dropdown.js");

 





const todoDivsEvents = () => {

    let targetProjectName = document.querySelector('.target').firstChild.innerText;
    
    const todoDeleteButtonEvent = (deleteButton, todoIndex) => {
        let targetProjectIndex = 0;
        if (targetProjectName === "HOME") {
            deleteButton.addEventListener('click', (e) =>{
                (0,_dom_functions_DOM_addTodo_create_addBtn_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
                (0,_add_todo_button_event_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
                _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeHomeTODO(todoIndex);
                (0,_dom_functions_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_1__["default"])();
                e.stopPropagation();    
            });    
        
        } else {
            _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray().forEach((project, index) => {
                if (project.getName() === targetProjectName) {
                    targetProjectIndex = index;
                };
            });
            deleteButton.addEventListener('click', (e) =>{
                (0,_dom_functions_DOM_addTodo_create_addBtn_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
                (0,_add_todo_button_event_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
                _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray()[targetProjectIndex].removeTODO(todoIndex);
                (0,_dom_functions_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_1__["default"])();
                e.stopPropagation();
            });
        };
    };

    const todoEditButtonEvent = (
                                editButton, 
                                todoIndex,
                                stringTodoName,
                                stringTodoDate,
                                stringTodoTime,
                                stringTodoNotes,

                                ) => {
        let targetProjectName = document.querySelector('.target').firstChild.innerText;
        let targetProjectIndex = 0;
        let todoNameDivContent = stringTodoName;
        let todoDateDivContent = stringTodoDate;
        let todoTimeDivContent = stringTodoTime;
        let todoNotesDivContent = stringTodoNotes;
        let passedTodoIndex = todoIndex;
        if (targetProjectName === "HOME") {
            editButton.addEventListener('click', (e) => {
                (0,_dom_functions_DOM_editTodo_swap_to_Form__WEBPACK_IMPORTED_MODULE_2__["default"])(targetProjectIndex, passedTodoIndex, todoNameDivContent, todoDateDivContent, todoTimeDivContent, todoNotesDivContent);
            })

       } else {
            _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray().forEach((project, index) => {
                if (project.getName() === targetProjectName) {
                    targetProjectIndex = index;
                };
            });
            editButton.addEventListener('click', (e) => {
                (0,_dom_functions_DOM_editTodo_swap_to_Form__WEBPACK_IMPORTED_MODULE_2__["default"])(targetProjectIndex, passedTodoIndex, todoNameDivContent, todoDateDivContent, todoTimeDivContent, todoNotesDivContent);
            });
        };    
    };

    const todoMoveButtonEvent = (moveButton, todoIndex, todoDiv ) => {
        if (_project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray().length > 0) {
            moveButton.addEventListener('click', (e) =>{

                const allTodos = [...document.getElementsByClassName('todoDiv')];
                allTodos.forEach((todo) => {
                    todo.classList.remove('targetTodo');
                });
                todoDiv.classList.add('targetTodo');

                if(!!document.querySelector('.moveTodoProjects')) {
                    const moveTodoProjects = document.querySelector('.moveTodoProjects');
                    moveTodoProjects.remove();
                    (0,_dom_functions_DOM_show_move_TODO_dropdown_js__WEBPACK_IMPORTED_MODULE_5__["default"])(targetProjectName, todoIndex);
                    e.stopPropagation();
                }else {
                    const allTodos = [...document.getElementsByClassName('todoDiv')];
                    allTodos.forEach((todo) => {
                        todo.classList.remove('targetTodo');
                    });
                    todoDiv.classList.add('targetTodo');
                    (0,_dom_functions_DOM_show_move_TODO_dropdown_js__WEBPACK_IMPORTED_MODULE_5__["default"])(targetProjectName, todoIndex);
                    e.stopPropagation();
                };
            });
        };
    };
    
    const todoTargetEvent = (todoDiv) => {
            
        todoDiv.addEventListener('click', (e) => {
            const allTodos = [...document.getElementsByClassName('todoDiv')];
            allTodos.forEach((todo) => {
                todo.classList.remove('targetTodo');
            });
            todoDiv.classList.add('targetTodo');
        });
    }

    return {
        todoDeleteButtonEvent,
        todoEditButtonEvent,
        todoMoveButtonEvent,
        todoTargetEvent
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoDivsEvents);

/***/ }),

/***/ "./src/icons/gitLogo.png":
/*!*******************************!*\
  !*** ./src/icons/gitLogo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b039b2d83982c8256af3.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_functions_DOM_prime_divs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-functions/DOM-prime-divs.js */ "./src/dom-functions/DOM-prime-divs.js");
/* harmony import */ var _dom_functions_DOM_head_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-functions/DOM-head.js */ "./src/dom-functions/DOM-head.js");
/* harmony import */ var _dom_functions_DOM_body_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-functions/DOM-body.js */ "./src/dom-functions/DOM-body.js");
/* harmony import */ var _dom_functions_DOM_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-functions/DOM-footer.js */ "./src/dom-functions/DOM-footer.js");
/* harmony import */ var _functions_add_project_button_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/add-project-button-event.js */ "./src/functions/add-project-button-event.js");
/* harmony import */ var _dom_functions_DOM_addTodo_create_addBtn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom-functions/DOM-addTodo-create-addBtn.js */ "./src/dom-functions/DOM-addTodo-create-addBtn.js");
/* harmony import */ var _functions_add_todo_button_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/add-todo-button-event.js */ "./src/functions/add-todo-button-event.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./src/style.css");










(0,_dom_functions_DOM_prime_divs_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_dom_functions_DOM_head_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_dom_functions_DOM_body_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_dom_functions_DOM_footer_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_functions_add_project_button_event_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_dom_functions_DOM_addTodo_create_addBtn_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_functions_add_todo_button_event_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztVQ3RIN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmeUI7QUFDd0M7QUFDWjtBQUNBO0FBQ0k7QUFDbUI7QUFDQztBQUNQO0FBQ2pEOztBQUVyQiw0RUFBZ0I7QUFDaEIsc0VBQVU7QUFDVixzRUFBVTtBQUNWLHdFQUFZO0FBQ1osa0ZBQXFCO0FBQ3JCLHVGQUFpQjtBQUNqQiwrRUFBa0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFByb2plY3QtY3JlYXRlLWFkZEJ0bi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1hZGRQcm9qZWN0LXN3YXAtQnRuLXRvLUZvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00tYWRkVG9kby1jcmVhdGUtYWRkQnRuLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFRvZG8tc3dhcC1CdG4tdG8tRm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1ib2R5LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLWNyZWF0ZS1lZGl0LXByb2plY3QtZHJvcGRvd24tY29udGVudHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00tZWRpdFRvZG8tc3dhcC10by1Gb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLWZvb3Rlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1oZWFkLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLXByaW1lLWRpdnMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00tcmVmcmVzaC1UT0RPUy1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00tc2hvdy1UT0RPLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLXNob3ctbW92ZS1UT0RPLWRyb3Bkb3duLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLXNob3ctcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00td2luZG93LWxpc3RlbmVyLXJlbW92ZS1lZGl0UHJvamVjdC1kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS13aW5kb3ctbGlzdGVuZXItcmVtb3ZlLW1vdmVUb2RvLWRyb3Bkb3duLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLXdpbmRvdy1saXN0ZW5lci1zd2FwLXRvZG8tZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvVE9ETy1jcmVhdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9hZGQtcHJvamVjdC1idXR0b24tZXZlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2FkZC1wcm9qZWN0LWRpdnMtZXZlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2FkZC1wcm9qZWN0LWZvcm0tYnV0dG9ucy1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2FkZC10b2RvLWJ1dHRvbi1ldmVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvYWRkLXRvZG8tZm9ybS1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZS1uZXctdG9kby5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvZWRpdC10b2RvLWZvcm0tZXZlbnRzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9ob21lRGl2LWV2ZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9wcm9qZWN0LWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL3Byb2plY3QtbWVuYWdlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvdG9kb0RpdnNFdmVudHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbn1cXG4uaGVhZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgMTYxLCAyMTYpO1xcbn1cXG4ubG9nbyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4uYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcbi5wcm9qZWN0c0RpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAxOTYsIDE4Mik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxMGZyIDFmcjtcXG59XFxuLnByb2plY3RzRGl2SGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG4uaG9tZVByb2plY3REaXYge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzYsIDIyMywgMjIzKTtcXG59XFxuLnByb2plY3RzQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAyMjMsIDE3Nik7XFxufVxcbi50YXJnZXQge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XFxufVxcbi5wcm9qZWN0RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZHJvcGRvd24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmRyb3Bkb3duQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIG1pbi13aWR0aDogMTYwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcblxcbi5hZGRQcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAxNzYsIDIxMyk7XFxufVxcblxcbi50b2Rvc0RpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAxNjcsIDEzOSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDAuNWZyIDEwZnIgMWZyO1xcbn1cXG4udG9kb0RpdkhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgMjIzLCAyMjMpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMiU7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG4udG9kb0RhdGFIZWFkZXJEaXYge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnIgMWZyIDRmciAxZnI7XFxuICAgIHBhZGRpbmc6IDAuMjUlIDAuNSU7XFxufVxcbi50b2RvRGF0YUhlYWRlckRpdiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYWxsVG9kb3NCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxNDksIDE0OSk7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIHBhZGRpbmc6IDAuMyU7XFxuICAgIG1hcmdpbi1yaWdodDogMiU7XFxuICAgIFxcbn1cXG4udG9kb3NDb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzYsIDIyMywgMTgyKTtcXG4gICAgcGFkZGluZzogMC4yNSUgMC41JTtcXG59XFxuLnRvZG9EaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyIDFmciA0ZnIgMC41ZnIgMC4yNWZyIDAuMjVmcjtcXG4gICAgbWFyZ2luOiAxJSAwO1xcbn1cXG4ubW92ZVRvZG9Qcm9qZWN0c3tcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5tb3ZlVG9kb0Ryb3Bkb3duSG9tZVByb2plY3Qge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG59XFxuLm1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxufVxcbi5tb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdiwgLm1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2OmhvdmVyLCAubW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbn1cXG4ubW92ZVRvZG9Qcm9qZWN0c0Ryb3Bkb3duQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gICAgLyogbWluLXdpZHRoOiAxNjBweDsgKi9cXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuLnRvZG9EaXYgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhcmdldFRvZG8ge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxufVxcbi50b2RvT3B0aW9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43NWZyIDJmciAwLjc1ZnIgMWZyIDAuNWZyIDAuNzVmciAwLjc1ZnIgMC43NWZyIDAuNzVmciAzZnIgMC4yNWZyIDAuMjVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTE2LCAzMSk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hZGRUT0RPQnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAxMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLnRvZG9PcHRpb25zQ29udGFpbmVyID4gbGFiZWwge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLnRvZG9DcmVhdGVEaXZIZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDEzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4udG9kb0VkaXREaXZIZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDEzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uZm9vdGVyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDR2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMSU7XFxufVxcbi5naXRJY29uIHtcXG4gICAgaGVpZ2h0OiAzdmg7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsVUFBVTtFQUNaOzs7QUFHRjtJQUNJLGVBQWU7SUFDZixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2Isc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLDhDQUE4QztJQUM5QyxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4REFBOEQ7SUFDOUQsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDRDQUE0QztJQUM1QyxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYixnR0FBZ0c7SUFDaEcsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixPQUFPO0FBQ1g7QUFDQTtJQUNJLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMCAwIGF1dG87XFxufVxcbi5oZWFkIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCAxNjEsIDIxNik7XFxufVxcbi5sb2dvIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcbi5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuLnByb2plY3RzRGl2IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDE5NiwgMTgyKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDEwZnIgMWZyO1xcbn1cXG4ucHJvamVjdHNEaXZIZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcbi5ob21lUHJvamVjdERpdiB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgMjIzLCAyMjMpO1xcbn1cXG4ucHJvamVjdHNDb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDIyMywgMTc2KTtcXG59XFxuLnRhcmdldCB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcXG59XFxuLnByb2plY3REaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5kcm9wZG93biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZHJvcGRvd25Db250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gICAgbWluLXdpZHRoOiAxNjBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuXFxuXFxuLmFkZFByb2plY3RDb250YWluZXIge1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDE3NiwgMjEzKTtcXG59XFxuXFxuLnRvZG9zRGl2IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDE2NywgMTM5KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMC41ZnIgMTBmciAxZnI7XFxufVxcbi50b2RvRGl2SGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc2LCAyMjMsIDIyMyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcbi50b2RvRGF0YUhlYWRlckRpdiB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmciAxZnIgNGZyIDFmcjtcXG4gICAgcGFkZGluZzogMC4yNSUgMC41JTtcXG59XFxuLnRvZG9EYXRhSGVhZGVyRGl2ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hbGxUb2Rvc0J1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDE0OSwgMTQ5KTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgcGFkZGluZzogMC4zJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcXG4gICAgXFxufVxcbi50b2Rvc0NvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgMjIzLCAxODIpO1xcbiAgICBwYWRkaW5nOiAwLjI1JSAwLjUlO1xcbn1cXG4udG9kb0RpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnIgMWZyIDRmciAwLjVmciAwLjI1ZnIgMC4yNWZyO1xcbiAgICBtYXJnaW46IDElIDA7XFxufVxcbi5tb3ZlVG9kb1Byb2plY3Rze1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLm1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbn1cXG4ubW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG59XFxuLm1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2LCAubW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW92ZVRvZG9Ecm9wZG93blByb2plY3REaXY6aG92ZXIsIC5tb3ZlVG9kb0Ryb3Bkb3duSG9tZVByb2plY3Q6aG92ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcbi5tb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgICAvKiBtaW4td2lkdGg6IDE2MHB4OyAqL1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG4udG9kb0RpdiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFyZ2V0VG9kbyB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcXG59XFxuLnRvZG9PcHRpb25zQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjc1ZnIgMmZyIDAuNzVmciAxZnIgMC41ZnIgMC43NWZyIDAuNzVmciAwLjc1ZnIgMC43NWZyIDNmciAwLjI1ZnIgMC4yNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAxMTYsIDMxKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFkZFRPRE9CdXR0b24ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDEzO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4udG9kb09wdGlvbnNDb250YWluZXIgPiBsYWJlbCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4udG9kb0NyZWF0ZURpdkhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMTM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi50b2RvRWRpdERpdkhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMTM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5mb290ZXIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNHZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxJTtcXG59XFxuLmdpdEljb24ge1xcbiAgICBoZWlnaHQ6IDN2aDtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjcmVhdGVBZGRQcm9qZWN0QnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdENvbnRhaW5lcicpO1xuICAgICAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTD0gXCJcIjtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2plY3RCdXR0b24nKTtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSBcIisgQUREXCI7XG4gICAgICAgIGFkZFByb2plY3RDb250YWluZXIuYXBwZW5kKGFkZFByb2plY3RCdXR0b24pO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkZFByb2plY3RCdG4iLCJpbXBvcnQgYWRkRXZlbnRGdW5jdGlvbnRzVG9Gb3JtIGZyb20gJy4uL2Z1bmN0aW9ucy9hZGQtcHJvamVjdC1mb3JtLWJ1dHRvbnMtZXZlbnRzLmpzJztcblxuY29uc3Qgc3dhcENvbnRlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdENvbnRhaW5lcicpO1xuICAgIGFkZFByb2plY3RDb250YWluZXIuaW5uZXJIVE1MPSBcIlwiO1xuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0TmFtZUlucHV0VGV4dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgcHJvamVjdE5hbWVJbnB1dFRleHQuaWQgPSBcInByb2plY3ROYW1lSW5wdXRUZXh0XCI7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMYWJlbCcpO1xuICAgIHByb2plY3ROYW1lSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInByb2plY3ROYW1lSW5wdXRUZXh0XCIpO1xuICAgIHByb2plY3ROYW1lSW5wdXRMYWJlbC5pbm5lckhUTUwgPSBcIlByb2plY3QgbmFtZTpcIjtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lQ29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3ROYW1lQ29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdE5hbWVDb25maXJtQnRuXCIpO1xuICAgIHByb2plY3ROYW1lQ29uZmlybUJ0bi5pbm5lclRleHQ9IFwiVlwiO1xuICAgIGNvbnN0IHByb2plY3ROYW1lQ2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdE5hbWVDYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3ROYW1lQ2FuY2VsQnRuXCIpO1xuICAgIHByb2plY3ROYW1lQ2FuY2VsQnRuLmlubmVyVGV4dD0gXCJYXCI7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uTWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhbGlkYXRpb25NZXNzYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ3ZhbGlkYXRpb25NZXNzYWdlRGl2Jyk7XG5cblxuICAgIGFkZFByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lSW5wdXRMYWJlbCwgcHJvamVjdE5hbWVJbnB1dFRleHQgLHByb2plY3ROYW1lQ29uZmlybUJ0biwgcHJvamVjdE5hbWVDYW5jZWxCdG4sIHZhbGlkYXRpb25NZXNzYWdlRGl2KTtcblxuICAgIGFkZEV2ZW50RnVuY3Rpb250c1RvRm9ybSgpXG59O1xuZXhwb3J0IGRlZmF1bHQgc3dhcENvbnRlbnRzIiwiY29uc3QgY3JlYXRlQWRkVE9ET3RCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kb09wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb09wdGlvbnNDb250YWluZXInKTtcbiAgICB0b2RvT3B0aW9uc0NvbnRhaW5lci5pbm5lckhUTUw9IFwiXCI7XG4gICAgICAgIGNvbnN0IGFkZFRPRE9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkVE9ET0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRUT0RPQnV0dG9uJyk7XG4gICAgICAgIGFkZFRPRE9CdXR0b24uaW5uZXJUZXh0ID0gXCIrIEFERCBuZXcgVG9Eb1wiO1xuICAgICAgICB0b2RvT3B0aW9uc0NvbnRhaW5lci5hcHBlbmQoYWRkVE9ET0J1dHRvbik7XG59O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRkVE9ET3RCdG4iLCJpbXBvcnQgbmV3VG9kb0J1dHRvbnNFdmVudHMgZnJvbSAnLi4vZnVuY3Rpb25zL2FkZC10b2RvLWZvcm0tZXZlbnRzLmpzJztcblxuY29uc3Qgc3dhcHRvZG9PcHRpb25zQ29udGFpbmVyQ29udGVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kb09wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb09wdGlvbnNDb250YWluZXInKTtcbiAgICB0b2RvT3B0aW9uc0NvbnRhaW5lci5pbm5lckhUTUw9IFwiXCI7XG5cbiAgICBjb25zdCB0b2RvTmFtZUlucHV0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb05hbWVJbnB1dFRleHQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRvZG9OYW1lSW5wdXRUZXh0LmlkID0gXCJ0b2RvTmFtZUlucHV0VGV4dFwiO1xuXG4gICAgY29uc3QgdG9kb05hbWVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvTmFtZUlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJ0b2RvTmFtZUlucHV0VGV4dFwiKTtcbiAgICB0b2RvTmFtZUlucHV0TGFiZWwuaW5uZXJIVE1MID0gXCJUb0RvIG5hbWU6XCI7XG5cbiAgICBjb25zdCB0b2RvRGF0ZVBpY2tlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvRGF0ZVBpY2tlckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb0RhdGVQaWNrZXJJbnB1dFwiKTtcbiAgICB0b2RvRGF0ZVBpY2tlckxhYmVsLmlubmVySFRNTCA9IFwiRGF0ZTpcIjtcblxuICAgIGNvbnN0IHRvZG9EYXRlUGlja2VySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9EYXRlUGlja2VySW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIHRvZG9EYXRlUGlja2VySW5wdXQuaWQgPSBcInRvZG9EYXRlUGlja2VySW5wdXRcIjtcblxuICAgIGNvbnN0IHRvZG9UaW1lUGlja2VyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMYWJlbCcpO1xuICAgIHRvZG9UaW1lUGlja2VyTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJ0b2RvVGltZVBpY2tlcklucHV0XCIpO1xuICAgIHRvZG9UaW1lUGlja2VyTGFiZWwuaW5uZXJIVE1MID0gXCJUaW1lOlwiO1xuXG4gICAgY29uc3QgdG9kb1RpbWVQaWNrZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb1RpbWVQaWNrZXJJbnB1dC50eXBlID0gXCJ0aW1lXCI7XG4gICAgdG9kb1RpbWVQaWNrZXJJbnB1dC5pZCA9IFwidG9kb1RpbWVQaWNrZXJJbnB1dFwiO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5U2VsZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMYWJlbCcpO1xuICAgIHRvZG9Qcmlvcml0eVNlbGVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb1ByaW9yaXR5U2VsZWN0XCIpO1xuICAgIHRvZG9Qcmlvcml0eVNlbGVjdExhYmVsLmlubmVySFRNTCA9IFwiUHJpb3JpdHk6XCI7XG5cbiAgICBjb25zdCB0b2RvUHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICB0b2RvUHJpb3JpdHlTZWxlY3QuaWQgPSBcInRvZG9Qcmlvcml0eVNlbGVjdFwiO1xuXG4gICAgbGV0IHByaW9yaXR5QXJyYXkgPSBbJ0hpZ2gnLCAnTWVkaXVtJywgJ0xvdyddO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmlvcml0eUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHByaW9yaXR5LnZhbHVlID0gcHJpb3JpdHlBcnJheVtpXTtcbiAgICAgICAgcHJpb3JpdHkudGV4dCA9IHByaW9yaXR5QXJyYXlbaV07XG4gICAgICAgIHRvZG9Qcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCB0b2RvTm90ZXNJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvTm90ZXNJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb05vdGVzSW5wdXRMYWJlbFwiKTtcbiAgICB0b2RvTm90ZXNJbnB1dExhYmVsLmlubmVySFRNTCA9IFwiTm90ZXM6XCI7XG5cbiAgICBjb25zdCB0b2RvTm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb05vdGVzSW5wdXQudHlwZSA9IFwidGV4dGFyZWFcIjtcbiAgICB0b2RvTm90ZXNJbnB1dC5pZCA9IFwidG9kb05vdGVzSW5wdXRcIjtcblxuICAgIGNvbnN0IHRvZG9DcmVhdGVDb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb0NyZWF0ZUNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZChcInRvZG9DcmVhdGVDb25maXJtQnRuXCIpO1xuICAgIHRvZG9DcmVhdGVDb25maXJtQnRuLmlubmVyVGV4dD0gXCJWXCI7XG5cbiAgICBjb25zdCB0b2RvQ3JlYXRlQ2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb0NyZWF0ZUNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwidG9kb0NyZWF0ZUNhbmNlbEJ0blwiKTtcbiAgICB0b2RvQ3JlYXRlQ2FuY2VsQnRuLmlubmVyVGV4dD0gXCJYXCI7XG5cbiAgICBjb25zdCB0b2RvQ3JlYXRlRGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0NyZWF0ZURpdkhlYWRlci5jbGFzc0xpc3QuYWRkKCd0b2RvQ3JlYXRlRGl2SGVhZGVyJyk7XG4gICAgdG9kb0NyZWF0ZURpdkhlYWRlci50ZXh0Q29udGVudCA9ICdBREQgTkVXIFRPRE8nO1xuXG4gICAgdG9kb09wdGlvbnNDb250YWluZXIuYXBwZW5kKFxuICAgICAgICB0b2RvQ3JlYXRlRGl2SGVhZGVyLFxuICAgICAgICB0b2RvTmFtZUlucHV0TGFiZWwsIFxuICAgICAgICB0b2RvTmFtZUlucHV0VGV4dCAsXG4gICAgICAgIHRvZG9EYXRlUGlja2VyTGFiZWwsXG4gICAgICAgIHRvZG9EYXRlUGlja2VySW5wdXQsXG4gICAgICAgIHRvZG9UaW1lUGlja2VyTGFiZWwsXG4gICAgICAgIHRvZG9UaW1lUGlja2VySW5wdXQsXG4gICAgICAgIHRvZG9Qcmlvcml0eVNlbGVjdExhYmVsLFxuICAgICAgICB0b2RvUHJpb3JpdHlTZWxlY3QsXG4gICAgICAgIHRvZG9Ob3Rlc0lucHV0TGFiZWwsXG4gICAgICAgIHRvZG9Ob3Rlc0lucHV0LFxuICAgICAgICB0b2RvQ3JlYXRlQ29uZmlybUJ0bixcbiAgICAgICAgdG9kb0NyZWF0ZUNhbmNlbEJ0blxuICAgICk7XG5cbiAgICBuZXdUb2RvQnV0dG9uc0V2ZW50cygpO1xufTtcbmV4cG9ydCBkZWZhdWx0IHN3YXB0b2RvT3B0aW9uc0NvbnRhaW5lckNvbnRlbnRzIiwiaW1wb3J0IHNob3dUb2Rvc0Zyb21Ib21lUHJvamVjdCBmcm9tIFwiLi4vZnVuY3Rpb25zL2hvbWVEaXYtZXZlbnQuanNcIjtcbmltcG9ydCBzd2FwRWRpdE9yQWRkVG9kb0Zvcm1Ub0J1dHRvbiBmcm9tIFwiLi9ET00td2luZG93LWxpc3RlbmVyLXN3YXAtdG9kby1mb3JtLmpzXCI7XG5pbXBvcnQgcmVtb3ZlRHJvcGRvd24gZnJvbSBcIi4vRE9NLXdpbmRvdy1saXN0ZW5lci1yZW1vdmUtZWRpdFByb2plY3QtZHJvcGRvd24uanNcIjtcbmltcG9ydCByZW1vdmVNb3ZlVG9kb0Ryb3Bkb3duIGZyb20gXCIuL0RPTS13aW5kb3ctbGlzdGVuZXItcmVtb3ZlLW1vdmVUb2RvLWRyb3Bkb3duLmpzXCJcbmNvbnN0IGNyZWF0ZUJvZHkgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5JylcblxuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNEaXYnKTtcblxuICAgIGNvbnN0IGhvbWVQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZVByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnaG9tZVByb2plY3REaXYnLCAndGFyZ2V0Jyk7XG4gICBcbiAgICBjb25zdCBob21lUHJvamVjdERpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZVByb2plY3REaXZUaXRsZS5jbGFzc0xpc3QuYWRkKCdob21lUHJvamVjdERpdlRpdGxlJylcbiAgICBob21lUHJvamVjdERpdlRpdGxlLmlubmVyVGV4dCA9IFwiSE9NRVwiO1xuICAgIGhvbWVQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGhvbWVQcm9qZWN0RGl2VGl0bGUpO1xuXG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c0NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZFByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdENvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdEJ1dHRvbicpO1xuICAgIGFkZFByb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gXCIrIEFERFwiO1xuXG4gICAgY29uc3QgcHJvamVjdHNEaXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHByb2plY3RzRGl2SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzRGl2SGVhZGVyJyk7XG4gICAgcHJvamVjdHNEaXZIZWFkZXIuaW5uZXJUZXh0ID0gXCJQUk9KRUNUUzpcIjtcblxuICAgIGFkZFByb2plY3RDb250YWluZXIuYXBwZW5kKGFkZFByb2plY3RCdXR0b24pO1xuXG4gICAgc2hvd1RvZG9zRnJvbUhvbWVQcm9qZWN0KGhvbWVQcm9qZWN0RGl2KVxuXG4gICAgcHJvamVjdHNEaXYuYXBwZW5kKHByb2plY3RzRGl2SGVhZGVyLCBob21lUHJvamVjdERpdiwgcHJvamVjdHNDb250YWluZXIsIGFkZFByb2plY3RDb250YWluZXIpO1xuXG4gICAgY29uc3QgdG9kb3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2Rvc0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2Rvc0RpdicpO1xuXG4gICAgY29uc3QgdG9kb0RpdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9EaXZIZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kb0RpdkhlYWRlcicpO1xuICAgIHRvZG9EaXZIZWFkZXIuaW5uZXJUZXh0ID0gXCJUb2RvczpcIjtcblxuICAgIGNvbnN0IGFsbFRvZG9zQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWxsVG9kb3NCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWxsVG9kb3NCdXR0b24nKTtcbiAgICBhbGxUb2Rvc0J1dHRvbi5pbm5lclRleHQgPSBcIkFsbCBUb2Rvc1wiO1xuXG4gICAgdG9kb0RpdkhlYWRlci5hcHBlbmQoYWxsVG9kb3NCdXR0b24pO1xuXG4gICAgY29uc3QgdG9kb0RhdGFIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGF0YUhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0YUhlYWRlckRpdicpO1xuXG4gICAgY29uc3QgdG9kb05hbWVEYXRhSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb05hbWVEYXRhSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9OYW1lRGF0YUhlYWRlcicpO1xuICAgIHRvZG9OYW1lRGF0YUhlYWRlci5pbm5lclRleHQgPSBcIk5BTUVcIjtcblxuICAgIGNvbnN0IHRvZG9EYXRlRGF0YUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9EYXRlRGF0YUhlYWRlci5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0ZURhdGFIZWFkZXInKTtcbiAgICB0b2RvRGF0ZURhdGFIZWFkZXIuaW5uZXJUZXh0ID0gXCJEQVRFXCI7XG5cbiAgICBjb25zdCB0b2RvVGltZURhdGFIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvVGltZURhdGFIZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kb1RpbWVEYXRhSGVhZGVyJyk7XG4gICAgdG9kb1RpbWVEYXRhSGVhZGVyLmlubmVyVGV4dCA9IFwiVElNRVwiO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5RGF0YUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Qcmlvcml0eURhdGFIZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kb1ByaW9yaXR5RGF0YUhlYWRlcicpO1xuICAgIHRvZG9Qcmlvcml0eURhdGFIZWFkZXIuaW5uZXJUZXh0ID0gXCJQUklPUklUWVwiO1xuXG4gICAgY29uc3QgdG9kb05vdGVEYXRhSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb05vdGVEYXRhSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9Ob3RlRGF0YUhlYWRlcicpO1xuICAgIHRvZG9Ob3RlRGF0YUhlYWRlci5pbm5lclRleHQgPSBcIk5PVEVcIjtcblxuICAgIGNvbnN0IHRvZG9GdW5jdGlvbnNEYXRhSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0Z1bmN0aW9uc0RhdGFIZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kb0Z1bmN0aW9uc0RhdGFIZWFkZXInKTtcbiAgICB0b2RvRnVuY3Rpb25zRGF0YUhlYWRlci5pbm5lclRleHQgPSBcIkZVTkNUSU9OU1wiO1xuXG4gICAgdG9kb0RhdGFIZWFkZXJEaXYuYXBwZW5kKHRvZG9OYW1lRGF0YUhlYWRlciwgdG9kb0RhdGVEYXRhSGVhZGVyLCB0b2RvVGltZURhdGFIZWFkZXIsIHRvZG9Qcmlvcml0eURhdGFIZWFkZXIsIHRvZG9Ob3RlRGF0YUhlYWRlciwgdG9kb0Z1bmN0aW9uc0RhdGFIZWFkZXIpO1xuXG4gICAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2Rvc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2Rvc0NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgdG9kb09wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvT3B0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvT3B0aW9uc0NvbnRhaW5lcicpO1xuXG5cblxuICAgIHRvZG9zRGl2LmFwcGVuZCh0b2RvRGl2SGVhZGVyLCB0b2RvRGF0YUhlYWRlckRpdiwgdG9kb3NDb250YWluZXIsIHRvZG9PcHRpb25zQ29udGFpbmVyKTtcblxuICAgIGJvZHkuYXBwZW5kKHByb2plY3RzRGl2LCB0b2Rvc0Rpdik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgc3dhcEVkaXRPckFkZFRvZG9Gb3JtVG9CdXR0b24oZSk7XG4gICAgICAgIHJlbW92ZURyb3Bkb3duKGUpO1xuICAgICAgICByZW1vdmVNb3ZlVG9kb0Ryb3Bkb3duKGUpO1xuICAgIH0pO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCb2R5IiwiXG5jb25zdCBjcmVhdGVFZGl0UHJvamVjdERyb3Bkb3duQ29udGVudHMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkcm9wZG93bkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25Db250ZW50Jyk7XG5cbiAgICBjb25zdCBlZGl0UHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZWRpdFByb2plY3ROYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGVkaXRQcm9qZWN0TmFtZUlucHV0LmlkID0gXCJlZGl0UHJvamVjdE5hbWVcIjtcblxuICAgIGNvbnN0IGVkaXRQcm9qZWN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICBlZGl0UHJvamVjdE5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcImVkaXRQcm9qZWN0TmFtZVwiKTtcbiAgICBlZGl0UHJvamVjdE5hbWVMYWJlbC5pbm5lckhUTUwgPSBcIk5ldyBwcm9qZWN0IG5hbWU6XCI7XG5cbiAgICBjb25zdCBjb25maXJtTmV3TmFtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbmZpcm1OZXdOYW1lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbmZpcm1OZXdOYW1lQnV0dG9uJyk7XG4gICAgY29uZmlybU5ld05hbWVCdXR0b24udGV4dENvbnRlbnQgPSAnT0snO1xuXG4gICAgZHJvcGRvd25Db250ZW50LmFwcGVuZChlZGl0UHJvamVjdE5hbWVMYWJlbCwgZWRpdFByb2plY3ROYW1lSW5wdXQsIGNvbmZpcm1OZXdOYW1lQnV0dG9uKTtcblxuICAgIHJldHVybiBbXG4gICAgICAgIGRyb3Bkb3duQ29udGVudFxuICAgIF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFZGl0UHJvamVjdERyb3Bkb3duQ29udGVudHMiLCJpbXBvcnQgZWRpdFRvZG9CdXR0b25zRXZlbnRzIGZyb20gJy4uL2Z1bmN0aW9ucy9lZGl0LXRvZG8tZm9ybS1ldmVudHMuanMnO1xuXG5jb25zdCBlZGl0VG9kb0NvbnRhaW5lckNvbnRlbnRzID0gKFxuICAgIHBhc3NlZFRhcmdldFByb2plY3RJbmRleCxcbiAgICBwYXNzZWRUb2RvSW5kZXgsXG4gICAgdG9kb05hbWVEaXZDb250ZW50LFxuICAgIHRvZG9EYXRlRGl2Q29udGVudCxcbiAgICB0b2RvVGltZURpdkNvbnRlbnQsXG4gICAgdG9kb05vdGVzRGl2Q29udGVudFxuKSA9PiB7XG4gICAgbGV0ICB0YXJnZXRQcm9qZWN0SW5kZXggPSBwYXNzZWRUYXJnZXRQcm9qZWN0SW5kZXg7XG4gICAgbGV0ICB0b2RvSW5kZXggPSBwYXNzZWRUb2RvSW5kZXg7XG5cbiAgICBjb25zdCB0b2RvT3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvT3B0aW9uc0NvbnRhaW5lcicpO1xuICAgIHRvZG9PcHRpb25zQ29udGFpbmVyLmlubmVySFRNTD0gXCJcIjtcblxuICAgIGNvbnN0IHRvZG9OYW1lSW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvTmFtZUlucHV0VGV4dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdG9kb05hbWVJbnB1dFRleHQuaWQgPSBcInRvZG9OYW1lSW5wdXRUZXh0XCI7XG4gICAgdG9kb05hbWVJbnB1dFRleHQudmFsdWUgPSB0b2RvTmFtZURpdkNvbnRlbnQ7XG5cbiAgICBjb25zdCB0b2RvTmFtZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMYWJlbCcpO1xuICAgIHRvZG9OYW1lSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInRvZG9OYW1lSW5wdXRUZXh0XCIpO1xuICAgIHRvZG9OYW1lSW5wdXRMYWJlbC5pbm5lckhUTUwgPSBcIlRvRG8gbmFtZTpcIjtcblxuICAgIGNvbnN0IHRvZG9EYXRlUGlja2VyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMYWJlbCcpO1xuICAgIHRvZG9EYXRlUGlja2VyTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJ0b2RvRGF0ZVBpY2tlcklucHV0XCIpO1xuICAgIHRvZG9EYXRlUGlja2VyTGFiZWwuaW5uZXJIVE1MID0gXCJEYXRlOlwiO1xuXG4gICAgY29uc3QgdG9kb0RhdGVQaWNrZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0RhdGVQaWNrZXJJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgdG9kb0RhdGVQaWNrZXJJbnB1dC5pZCA9IFwidG9kb0RhdGVQaWNrZXJJbnB1dFwiO1xuICAgIHRvZG9EYXRlUGlja2VySW5wdXQudmFsdWUgPSB0b2RvRGF0ZURpdkNvbnRlbnQ7XG5cblxuICAgIGNvbnN0IHRvZG9UaW1lUGlja2VyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMYWJlbCcpO1xuICAgIHRvZG9UaW1lUGlja2VyTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJ0b2RvVGltZVBpY2tlcklucHV0XCIpO1xuICAgIHRvZG9UaW1lUGlja2VyTGFiZWwuaW5uZXJIVE1MID0gXCJUaW1lOlwiO1xuXG4gICAgY29uc3QgdG9kb1RpbWVQaWNrZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb1RpbWVQaWNrZXJJbnB1dC50eXBlID0gXCJ0aW1lXCI7XG4gICAgdG9kb1RpbWVQaWNrZXJJbnB1dC5pZCA9IFwidG9kb1RpbWVQaWNrZXJJbnB1dFwiO1xuICAgIHRvZG9UaW1lUGlja2VySW5wdXQudmFsdWUgPSB0b2RvVGltZURpdkNvbnRlbnQ7XG5cbiAgICBjb25zdCB0b2RvUHJpb3JpdHlTZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xhYmVsJyk7XG4gICAgdG9kb1ByaW9yaXR5U2VsZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJ0b2RvUHJpb3JpdHlTZWxlY3RcIik7XG4gICAgdG9kb1ByaW9yaXR5U2VsZWN0TGFiZWwuaW5uZXJIVE1MID0gXCJQcmlvcml0eTpcIjtcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHRvZG9Qcmlvcml0eVNlbGVjdC5pZCA9IFwidG9kb1ByaW9yaXR5U2VsZWN0XCI7XG5cbiAgICBsZXQgcHJpb3JpdHlBcnJheSA9IFsnSGlnaCcsICdNZWRpdW0nLCAnTG93J107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW9yaXR5QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgcHJpb3JpdHkudmFsdWUgPSBwcmlvcml0eUFycmF5W2ldO1xuICAgICAgICBwcmlvcml0eS50ZXh0ID0gcHJpb3JpdHlBcnJheVtpXTtcbiAgICAgICAgdG9kb1ByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHRvZG9Ob3Rlc0lucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMYWJlbCcpO1xuICAgIHRvZG9Ob3Rlc0lucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJ0b2RvTm90ZXNJbnB1dExhYmVsXCIpO1xuICAgIHRvZG9Ob3Rlc0lucHV0TGFiZWwuaW5uZXJIVE1MID0gXCJOb3RlczpcIjtcblxuICAgIGNvbnN0IHRvZG9Ob3Rlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvTm90ZXNJbnB1dC50eXBlID0gXCJ0ZXh0YXJlYVwiO1xuICAgIHRvZG9Ob3Rlc0lucHV0LmlkID0gXCJ0b2RvTm90ZXNJbnB1dFwiO1xuICAgIHRvZG9Ob3Rlc0lucHV0LnZhbHVlID0gdG9kb05vdGVzRGl2Q29udGVudDtcblxuICAgIGNvbnN0IHRvZG9FZGl0Q29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZG9FZGl0Q29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKFwidG9kb0VkaXRDb25maXJtQnRuXCIpO1xuICAgIHRvZG9FZGl0Q29uZmlybUJ0bi5pbm5lclRleHQ9IFwiVlwiO1xuXG4gICAgY29uc3QgdG9kb0NyZWF0ZUNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZG9DcmVhdGVDYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcInRvZG9DcmVhdGVDYW5jZWxCdG5cIik7XG4gICAgdG9kb0NyZWF0ZUNhbmNlbEJ0bi5pbm5lclRleHQ9IFwiWFwiO1xuXG4gICAgY29uc3QgdG9kb0NyZWF0ZURpdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9DcmVhdGVEaXZIZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kb0VkaXREaXZIZWFkZXInKTtcbiAgICB0b2RvQ3JlYXRlRGl2SGVhZGVyLnRleHRDb250ZW50ID0gJ0VESVQgVE9ETyc7XG5cbiAgICB0b2RvT3B0aW9uc0NvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgIHRvZG9DcmVhdGVEaXZIZWFkZXIsXG4gICAgICAgIHRvZG9OYW1lSW5wdXRMYWJlbCwgXG4gICAgICAgIHRvZG9OYW1lSW5wdXRUZXh0ICxcbiAgICAgICAgdG9kb0RhdGVQaWNrZXJMYWJlbCxcbiAgICAgICAgdG9kb0RhdGVQaWNrZXJJbnB1dCxcbiAgICAgICAgdG9kb1RpbWVQaWNrZXJMYWJlbCxcbiAgICAgICAgdG9kb1RpbWVQaWNrZXJJbnB1dCxcbiAgICAgICAgdG9kb1ByaW9yaXR5U2VsZWN0TGFiZWwsXG4gICAgICAgIHRvZG9Qcmlvcml0eVNlbGVjdCxcbiAgICAgICAgdG9kb05vdGVzSW5wdXRMYWJlbCxcbiAgICAgICAgdG9kb05vdGVzSW5wdXQsXG4gICAgICAgIHRvZG9FZGl0Q29uZmlybUJ0bixcbiAgICAgICAgdG9kb0NyZWF0ZUNhbmNlbEJ0blxuICAgICk7XG5cbiAgICBlZGl0VG9kb0J1dHRvbnNFdmVudHModGFyZ2V0UHJvamVjdEluZGV4LCB0b2RvSW5kZXgpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGVkaXRUb2RvQ29udGFpbmVyQ29udGVudHMiLCJpbXBvcnQgZ2l0TG9nbyBmcm9tICcuLi9pY29ucy9naXRMb2dvLnBuZyc7XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJylcbiAgICBcbiAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKCduYW1lRGl2Jyk7XG4gICAgbmFtZURpdi5pbm5lclRleHQgPSAnTWFjaWVqIERhYnJvd3NraSdcblxuICAgIGNvbnN0IGdpdExvZ29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnaXRMb2dvRGl2LmNsYXNzTGlzdC5hZGQoJ2dpdExvZ29EaXYnKTtcbiAgICBjb25zdCBnaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZ2l0SWNvbi5jbGFzc0xpc3QuYWRkKCdnaXRJY29uJylcbiAgICBnaXRJY29uLnNyYyA9IGdpdExvZ287XG5cbiAgICBnaXRMb2dvRGl2LmFwcGVuZChnaXRJY29uKTtcblxuICAgIGZvb3RlckRpdi5hcHBlbmQobmFtZURpdiwgZ2l0TG9nb0Rpdilcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlciIsImNvbnN0IGNyZWF0ZUhlYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIGxvZ28uaW5uZXJUZXh0ID0gXCJUT0RPIC0gQXBwIHRvIG5vdCBmb3JnZXRcIjtcblxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbkRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3RpZmljYXRpb25EYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ25vdGlmaWNhdGlvbkRhdGVEaXYnKTtcblxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vdGlmaWNhdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdub3RpZmljYXRpb25EaXYnKTtcbiAgICBcbiAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdkYXRlRGl2Jyk7XG5cbiAgICBub3RpZmljYXRpb25EYXRlRGl2LmFwcGVuZChub3RpZmljYXRpb25EaXYsIGRhdGVEaXYpO1xuXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkJyk7XG4gICAgaGVhZC5hcHBlbmQobG9nbywgbm90aWZpY2F0aW9uRGF0ZURpdik7XG5cbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkIiwiY29uc3QgaGVhZGVyQm9keUZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuYm9keTtcblxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkLmNsYXNzTGlzdC5hZGQoJ2hlYWQnKTtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHknKTtcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICAgIG1haW5EaXYuYXBwZW5kKGhlYWQsIGJvZHksIGZvb3Rlcik7XG5cbn07XG5leHBvcnQgZGVmYXVsdCBoZWFkZXJCb2R5Rm9vdGVyIiwiaW1wb3J0IHByb2plY3RNZW5hZ2VyIGZyb20gXCIuLi9mdW5jdGlvbnMvcHJvamVjdC1tZW5hZ2VyLmpzXCI7XG5pbXBvcnQgZG9tU2hvd1RvZG8gZnJvbSBcIi4vRE9NLXNob3ctVE9ETy5qc1wiO1xuXG5jb25zdCByZWZyZXNoVG9kb3NDb250YWluZXIgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zQ29udGFpbmVyJykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBsZXQgdGFyZ2V0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0JykuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgbGV0IHRhcmdldFByb2plY3RJbmRleCA9IDA7XG4gICAgaWYodGFyZ2V0UHJvamVjdE5hbWUgPT09IFwiSE9NRVwiKSB7XG4gICAgICAgIHByb2plY3RNZW5hZ2VyLmdldEhvbWVUb2Rvc0FycmF5KCkuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGRvbVNob3dUb2RvKHRvZG8sIGluZGV4KTtcbiAgICAgICAgfSlcbiAgICB9ZWxzZSB7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KCkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSA9PT0gdGFyZ2V0UHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRQcm9qZWN0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KClbdGFyZ2V0UHJvamVjdEluZGV4XS5nZXRUb2Rvc0FycmF5KCkuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGRvbVNob3dUb2RvKHRvZG8sIGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IHJlZnJlc2hUb2Rvc0NvbnRhaW5lciIsImltcG9ydCB0b2RvRGl2c0V2ZW50cyBmcm9tIFwiLi4vZnVuY3Rpb25zL3RvZG9EaXZzRXZlbnRzXCI7XG5cbmNvbnN0IGRvbVNob3dUb2RvID0gKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgbGV0IHRvZG9JbmRleCA9IGluZGV4O1xuICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvRGl2JyxgJHt0b2RvLmdldFRvZG9Qcmlvcml0eSgpfWAgKTtcblxuXG4gICAgY29uc3QgdG9kb05hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvTmFtZURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvTmFtZURpdicpO1xuICAgIHRvZG9OYW1lRGl2LnRleHRDb250ZW50ID0gdG9kby5nZXRUb2RvTmFtZSgpO1xuXG4gICAgY29uc3QgdG9kb0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0ZURpdicpO1xuICAgIHRvZG9EYXRlRGl2LnRleHRDb250ZW50ID0gdG9kby5nZXRUb2RvRGF0ZSgpO1xuXG4gICAgY29uc3QgdG9kb1RpbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvVGltZURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvVGltZURpdicpO1xuICAgIHRvZG9UaW1lRGl2LnRleHRDb250ZW50ID0gdG9kby5nZXR0b2RvVGltZSgpO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9UaW1lRGl2Jyk7XG4gICAgdG9kb1ByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gdG9kby5nZXRUb2RvUHJpb3JpdHkoKTtcblxuICAgIGNvbnN0IHRvZG9Ob3Rlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Ob3Rlc0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvVGltZURpdicpO1xuICAgIHRvZG9Ob3Rlc0Rpdi50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VG9kb05vdGVzKCk7XG5cbiAgICBjb25zdCBtb3ZlVG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1vdmVUb2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21vdmVUb2RvQnV0dG9uJyk7XG4gICAgbW92ZVRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIk1vdmVcIjtcblxuICAgIGNvbnN0IGVkaXRUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdFRvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdFRvZG9CdXR0b24nKTtcbiAgICBlZGl0VG9kb0J1dHRvbi50ZXh0Q29udGVudCA9IFwiRVwiO1xuXG4gICAgY29uc3QgbW92ZVRvZG9Ecm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vdmVUb2RvRHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnbW92ZVRvZG9Ecm9wZG93bicpO1xuXG4gICAgbW92ZVRvZG9Ecm9wZG93bi5hcHBlbmQobW92ZVRvZG9CdXR0b24pO1xuXG4gICAgY29uc3QgZGVsZXRlVG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVRvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlVG9kb0J1dHRvbicpO1xuICAgIGRlbGV0ZVRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICAgIFxuXG5cbiAgICB0b2RvRGl2LmFwcGVuZCh0b2RvTmFtZURpdiwgdG9kb0RhdGVEaXYsIHRvZG9UaW1lRGl2LCB0b2RvUHJpb3JpdHlEaXYsIHRvZG9Ob3Rlc0RpdiwgbW92ZVRvZG9Ecm9wZG93biwgZWRpdFRvZG9CdXR0b24sIGRlbGV0ZVRvZG9CdXR0b24pO1xuICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuICAgIHRvZG9EaXZzRXZlbnRzKCkudG9kb1RhcmdldEV2ZW50KHRvZG9EaXYpO1xuICAgIHRvZG9EaXZzRXZlbnRzKCkudG9kb0RlbGV0ZUJ1dHRvbkV2ZW50KGRlbGV0ZVRvZG9CdXR0b24sIHRvZG9JbmRleCk7XG4gICAgdG9kb0RpdnNFdmVudHMoKS50b2RvRWRpdEJ1dHRvbkV2ZW50KGVkaXRUb2RvQnV0dG9uLCB0b2RvSW5kZXgsIHRvZG8uZ2V0VG9kb05hbWUoKSwgdG9kby5nZXRUb2RvRGF0ZSgpLCB0b2RvLmdldHRvZG9UaW1lKCksIHRvZG8uZ2V0VG9kb05vdGVzKCkpO1xuICAgIHRvZG9EaXZzRXZlbnRzKCkudG9kb01vdmVCdXR0b25FdmVudChtb3ZlVG9kb0J1dHRvbiwgdG9kb0luZGV4LCB0b2RvRGl2KTtcbn07XG5leHBvcnQgZGVmYXVsdCBkb21TaG93VG9kbyIsImltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi4vZnVuY3Rpb25zL3Byb2plY3QtbWVuYWdlci5qc1wiO1xuaW1wb3J0IHJlZnJlc2hUb2Rvc0NvbnRhaW5lciBmcm9tIFwiLi9ET00tcmVmcmVzaC1UT0RPUy1jb250YWluZXJcIjtcblxuY29uc3QgbW92ZVRvZG9Ecm9wZG93bkNvbnRlbnRzID0gKHRhcmdldFByb2plY3ROYW1lLCB0b2RvSW5kZXgpID0+IHtcbiAgICBcbiAgICBjb25zdCBtb3ZlVG9kb0Ryb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldFRvZG8nKS5xdWVyeVNlbGVjdG9yKCcubW92ZVRvZG9Ecm9wZG93bicpO1xuICAgIGNvbnN0IG1vdmVUb2RvUHJvamVjdHNEcm9wZG93bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vdmVUb2RvUHJvamVjdHNEcm9wZG93bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXInKTtcbiAgICBjb25zdCBtb3ZlVG9kb1Byb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW92ZVRvZG9Qcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdtb3ZlVG9kb1Byb2plY3RzJyk7XG5cbiAgICBcbiAgICBpZiAodGFyZ2V0UHJvamVjdE5hbWUgPT09IFwiSE9NRVwiKSB7XG4gICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBtb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnbW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYnKTtcbiAgICAgICAgICAgIG1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgICAgICAgICBtb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHRvZG9Ub01vdmUgPSBwcm9qZWN0TWVuYWdlci5nZXRIb21lVG9kb3NBcnJheSgpLnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHByb2plY3QuYWRkVG9Ub2Rvc0FycmF5KHRvZG9Ub01vdmVbMF0pOyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICByZWZyZXNoVG9kb3NDb250YWluZXIoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1vdmVUb2RvUHJvamVjdHNEcm9wZG93bkNvbnRhaW5lci5hcHBlbmQobW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgbW92ZVRvZG9Qcm9qZWN0cy5hcHBlbmQobW92ZVRvZG9Qcm9qZWN0c0Ryb3Bkb3duQ29udGFpbmVyKTtcbiAgICAgICAgbW92ZVRvZG9Ecm9wZG93bi5hcHBlbmQobW92ZVRvZG9Qcm9qZWN0cyk7XG4gICAgfVxuICAgIGVsc2Uge1xuXG4gICAgICAgIGxldCB0cmFnZXRQcm9qZWN0SW5kZXggPSAwO1xuICAgICAgICBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KCkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRQcm9qZWN0TmFtZSA9PSBwcm9qZWN0LmdldE5hbWUoKSkge1xuICAgICAgICAgICAgICAgIHRyYWdldFByb2plY3RJbmRleCA9IGluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdtb3ZlVG9kb0Ryb3Bkb3duSG9tZVByb2plY3QnKTtcbiAgICAgICAgbW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0LnRleHRDb250ZW50ID0gJ0hPTUUnO1xuICAgICAgICBtb3ZlVG9kb0Ryb3Bkb3duSG9tZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0b2RvVG9Nb3ZlID0gcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpW3RyYWdldFByb2plY3RJbmRleF0uZ2V0VG9kb3NBcnJheSgpLnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwcm9qZWN0TWVuYWdlci5wdXNoVG9Ib21lVG9kb3NBcnJheSh0b2RvVG9Nb3ZlWzBdKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICByZWZyZXNoVG9kb3NDb250YWluZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBtb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXIuYXBwZW5kKG1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdCk7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KCkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRhcmdldFByb2plY3ROYW1lICE9PSBwcm9qZWN0LmdldE5hbWUoKSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBtb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdtb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdicpO1xuICAgICAgICAgICAgICAgIG1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgICAgICAgICAgICAgbW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Ub01vdmUgPSBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KClbdHJhZ2V0UHJvamVjdEluZGV4XS5nZXRUb2Rvc0FycmF5KCkuc3BsaWNlKHRvZG9JbmRleCwgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5hZGRUb1RvZG9zQXJyYXkodG9kb1RvTW92ZVswXSk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBtb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXIuYXBwZW5kKG1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBtb3ZlVG9kb1Byb2plY3RzLmFwcGVuZChtb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXIpO1xuICAgICAgICBtb3ZlVG9kb0Ryb3Bkb3duLmFwcGVuZChtb3ZlVG9kb1Byb2plY3RzKTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbW92ZVRvZG9Ecm9wZG93bkNvbnRlbnRzIiwiaW1wb3J0IHByb2plY3RNZW5hZ2VyIGZyb20gXCIuLi9mdW5jdGlvbnMvcHJvamVjdC1tZW5hZ2VyLmpzXCI7XG5pbXBvcnQgYWRkUHJvamVjdERpdkV2ZW50IGZyb20gXCIuLi9mdW5jdGlvbnMvYWRkLXByb2plY3QtZGl2cy1ldmVudFwiO1xuaW1wb3J0IHJlZnJlc2hUb2Rvc0NvbnRhaW5lciBmcm9tIFwiLi9ET00tcmVmcmVzaC1UT0RPUy1jb250YWluZXJcIjtcbmxldCBzaG93UHJvamVjdHMgPSAoKSA9PiB7ICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzQ29udGFpbmVyJykuaW5uZXJIVE1MPSBcIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lUHJvamVjdERpdicpLmNsYXNzTGlzdC5hZGQoJ3RhcmdldCcpO1xuICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuICAgICAgICBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KCkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3REaXYnKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3ROYW1lJyk7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5pbm5lclRleHQgPSBgJHtwcm9qZWN0LmdldE5hbWUoKX1gO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bicpO1xuXG4gICAgICAgICAgICBjb25zdCBlZGl0UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZWRpdFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdFByb2plY3RCdXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0UnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkcm9wZG93bi5hcHBlbmQoZWRpdFByb2plY3RCdXR0b24pO1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVByb2plY3RCdXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBgJHtwcm9qZWN0LmdldE5hbWUoKX1gKVxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdEJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdEJ1dHRvbnNDb250YWluZXInKTtcblxuICAgICAgICAgICAgcHJvamVjdEJ1dHRvbnNDb250YWluZXIuYXBwZW5kKGRyb3Bkb3duLCBkZWxldGVQcm9qZWN0QnV0dG9uKTtcblxuXG4gICAgICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZChwcm9qZWN0TmFtZSwgcHJvamVjdEJ1dHRvbnNDb250YWluZXIpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNDb250YWluZXInKS5hcHBlbmQocHJvamVjdERpdik7XG4gICAgICAgICAgICBhZGRQcm9qZWN0RGl2RXZlbnQoKS5kZWxldGVQcm9qZWN0QnV0dG9uKGRlbGV0ZVByb2plY3RCdXR0b24sIGluZGV4KTtcbiAgICAgICAgICAgIGFkZFByb2plY3REaXZFdmVudCgpLmVkaXRQcm9qZWN0QnV0dG9uKGVkaXRQcm9qZWN0QnV0dG9uLCBpbmRleCwgZHJvcGRvd24pO1xuICAgICAgICAgICAgYWRkUHJvamVjdERpdkV2ZW50KCkucHJvamVjdERpdkV2ZW50KHByb2plY3REaXYpO1xuICAgICAgICB9KTtcblxufTsgXG5cbmV4cG9ydCBkZWZhdWx0IHNob3dQcm9qZWN0cyIsImltcG9ydCBzaG93UHJvamVjdHMgZnJvbSBcIi4vRE9NLXNob3ctcHJvamVjdHMuanNcIlxuZnVuY3Rpb24gcmVtb3ZlRHJvcGRvd24oZXZlbnQpIHtcbiAgICAgICAgXG4gICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duQ29udGVudCcpKXtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcyhgLmVkaXRQcm9qZWN0QnV0dG9uYCkpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuZHJvcGRvd25Db250ZW50JykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcjZWRpdFByb2plY3ROYW1lJykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCdsYWJlbCcpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmNvbmZpcm1OZXdOYW1lQnV0dG9uJykpXG4gICAgICAgICAgICkgeyAgXG4gICAgICAgICAgICAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25Db250ZW50Jyk7XG4gICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICBzaG93UHJvamVjdHMoKTtcbiAgICAgICAgICAgICB9O1xuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlRHJvcGRvd24iLCJmdW5jdGlvbiByZW1vdmVNb3ZlVG9kb0Ryb3Bkb3duKGV2ZW50KSB7XG4gICAgICAgIFxuICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZlVG9kb1Byb2plY3RzJykpe1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKGAubW92ZVRvZG9Qcm9qZWN0c0Ryb3Bkb3duQ29udGFpbmVyYCkpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcubW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0JykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcubW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYnKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5tb3ZlVG9kb0J1dHRvbicpKVxuICAgICAgICAgICApIHsgIFxuICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvZG9Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZlVG9kb1Byb2plY3RzJyk7XG4gICAgICAgICAgICAgICBtb3ZlVG9kb1Byb2plY3RzLnJlbW92ZSgpO1xuICAgICAgICAgICAgIH07XG4gICAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCByZW1vdmVNb3ZlVG9kb0Ryb3Bkb3duIiwiaW1wb3J0IGNyZWF0ZUFkZFRPRE90QnRuIGZyb20gXCIuL0RPTS1hZGRUb2RvLWNyZWF0ZS1hZGRCdG4uanNcIjtcbmltcG9ydCBhZGRUT0RPQnV0dG9uRXZlbnQgZnJvbSBcIi4uL2Z1bmN0aW9ucy9hZGQtdG9kby1idXR0b24tZXZlbnQuanNcIjtcbmZ1bmN0aW9uIHN3YXBFZGl0T3JBZGRUb2RvRm9ybVRvQnV0dG9uKGV2ZW50KSB7XG4gICAgICAgIFxuICAgIGlmICgoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuYWRkVE9ET0J1dHRvbicpICYmICFldmVudC50YXJnZXQubWF0Y2hlcygnLmVkaXRUb2RvQnV0dG9uJykpICYmICgoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0NyZWF0ZURpdkhlYWRlcicpKSB8fCAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0VkaXREaXZIZWFkZXInKSkpKXtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLnRvZG9PcHRpb25zQ29udGFpbmVyJykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcudG9kb0NyZWF0ZURpdkhlYWRlcicpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnbGFiZWwnKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJyN0b2RvTmFtZUlucHV0VGV4dCcpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnI3RvZG9EYXRlUGlja2VySW5wdXQnKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJyN0b2RvVGltZVBpY2tlcklucHV0JykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcjdG9kb1ByaW9yaXR5U2VsZWN0JykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCdvcHRpb24nKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJyN0b2RvTm90ZXNJbnB1dCcpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLnRvZG9DcmVhdGVDb25maXJtQnRuJykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcudG9kb0NyZWF0ZUNhbmNlbEJ0bicpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLnRvZG9FZGl0RGl2SGVhZGVyJykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcudG9kb0VkaXRDb25maXJtQnRuJykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuYWRkVE9ET0J1dHRvbicpKVxuXG4gICAgICAgICAgICkgeyBcbiAgICAgICAgICAgICAgICBjcmVhdGVBZGRUT0RPdEJ0bigpO1xuICAgICAgICAgICAgICAgIGFkZFRPRE9CdXR0b25FdmVudCgpO1xuICAgICAgICAgICAgIH07IFxuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgc3dhcEVkaXRPckFkZFRvZG9Gb3JtVG9CdXR0b25cbiIsImNvbnN0IHRvZG9UYXNrID0gKG5hbWUsIGRhdGUsIHRpbWUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuICAgIGxldCB0b2RvTmFtZSA9IG5hbWU7XG4gICAgbGV0IHRvZG9EYXRlID0gZGF0ZTtcbiAgICBsZXQgdG9kb1RpbWUgPSB0aW1lO1xuICAgIGxldCB0b2RvUHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBsZXQgdG9kb05vdGVzID0gbm90ZXM7XG4gICAgbGV0IHRvZG9TdGF0dXMgPSBmYWxzZTtcbiAgICBcbiAgICAvLyBHZXQgZnVuY3Rpb25zIHJldHVybmluZyB2YXJpYWJsZSBjb250ZW50c1xuICAgIGNvbnN0IGdldFRvZG9OYW1lID0gKCkgPT4gdG9kb05hbWU7XG4gICAgY29uc3QgZ2V0VG9kb0RhdGUgPSAoKSA9PiB0b2RvRGF0ZTtcbiAgICBjb25zdCBnZXR0b2RvVGltZSA9ICgpID0+IHRvZG9UaW1lO1xuICAgIGNvbnN0IGdldFRvZG9Qcmlvcml0eSA9ICgpID0+IHRvZG9Qcmlvcml0eTtcbiAgICBjb25zdCBnZXRUb2RvTm90ZXMgPSAoKSA9PiB0b2RvTm90ZXM7XG4gICAgY29uc3QgZ2V0VG9kb1N0YXR1cyA9ICgpID0+IHRvZG9TdGF0dXM7XG4gICAgXG4gICAgLy8gU2V0IGZ1bmN0aW9ucyB0byBlZGl0IHZhcmlhYmxlIGNvbnRlbnRzXG4gICAgY29uc3Qgc2V0VG9kb05hbWUgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIHRvZG9OYW1lID0gc3RyaW5nXG4gICAgfTtcbiAgICBjb25zdCBzZXRUb2RvRGF0ZSA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgdG9kb0RhdGUgPSBzdHJpbmdcbiAgICB9O1xuICAgIGNvbnN0IHNldFRvZG9UaW1lID0gKHN0cmluZykgPT4ge1xuICAgICAgICB0b2RvVGltZSA9IHN0cmluZztcbiAgICB9O1xuICAgIGNvbnN0IHNldFRvZG9Qcmlvcml0eSA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgdG9kb1ByaW9yaXR5ID0gc3RyaW5nO1xuICAgIH07XG4gICAgY29uc3Qgc2V0VG9kb05vdGVzID0gKHN0cmluZykgPT4ge1xuICAgICAgICB0b2RvTm90ZXMgPSBzdHJpbmc7XG4gICAgfTtcbiAgICBjb25zdCBzZXRUb2RvU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdG9kb1N0YXR1cyA/IHRvZG9TdGF0dXMgPSBmYWxzZSA6IHRvZG9TdGF0dXMgPSB0cnVlO1xuICAgIH0gIFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0VG9kb05hbWUsXG4gICAgICAgIGdldFRvZG9EYXRlLFxuICAgICAgICBnZXR0b2RvVGltZSxcbiAgICAgICAgZ2V0VG9kb1ByaW9yaXR5LFxuICAgICAgICBnZXRUb2RvTm90ZXMsXG4gICAgICAgIGdldFRvZG9TdGF0dXMsXG4gICAgICAgIHNldFRvZG9OYW1lLFxuICAgICAgICBzZXRUb2RvRGF0ZSxcbiAgICAgICAgc2V0VG9kb1RpbWUsXG4gICAgICAgIHNldFRvZG9Qcmlvcml0eSxcbiAgICAgICAgc2V0VG9kb05vdGVzLFxuICAgICAgICBzZXRUb2RvU3RhdHVzLFxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCB0b2RvVGFzazsiLCJpbXBvcnQgc3dhcENvbnRlbnRzIGZyb20gJy4uL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFByb2plY3Qtc3dhcC1CdG4tdG8tRm9ybS5qcyc7XG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uRXZlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0QnV0dG9uJyk7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3YXBDb250ZW50cyk7XG59O1xuZXhwb3J0IGRlZmF1bHQgYWRkUHJvamVjdEJ1dHRvbkV2ZW50IiwiaW1wb3J0IHByb2plY3RNZW5hZ2VyIGZyb20gXCIuL3Byb2plY3QtbWVuYWdlci5qc1wiO1xuaW1wb3J0IHByb2plY3RDcmVhdG9yIGZyb20gXCIuL3Byb2plY3QtY3JlYXRvci5qc1wiO1xuaW1wb3J0IHRvZG9UYXNrIGZyb20gXCIuL1RPRE8tY3JlYXRvci5qc1wiO1xuaW1wb3J0IGNyZWF0ZUFkZFRPRE90QnRuIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1hZGRUb2RvLWNyZWF0ZS1hZGRCdG4uanNcIjtcbmltcG9ydCBhZGRUT0RPQnV0dG9uRXZlbnQgZnJvbSBcIi4vYWRkLXRvZG8tYnV0dG9uLWV2ZW50LmpzXCI7XG5pbXBvcnQgZG9tU2hvd1RvZG8gZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLXNob3ctVE9ETy5qc1wiO1xuaW1wb3J0IHJlZnJlc2hUb2Rvc0NvbnRhaW5lciBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tcmVmcmVzaC1UT0RPUy1jb250YWluZXJcIlxuaW1wb3J0IHNob3dQcm9qZWN0cyBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tc2hvdy1wcm9qZWN0cy5qc1wiXG5pbXBvcnQgY3JlYXRlRWRpdFByb2plY3REcm9wZG93bkNvbnRlbnRzIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1jcmVhdGUtZWRpdC1wcm9qZWN0LWRyb3Bkb3duLWNvbnRlbnRzLmpzXCJcblxuXG5cbmNvbnN0IGFkZFByb2plY3REaXZFdmVudCA9ICgpID0+IHtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSAoZGVsZXRlQnV0dG9uLCBpbmRleCkgPT4ge1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XG5cbiAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLnJlbW92ZVByb2plY3QoaW5kZXgpO1xuICAgICAgICAgICAgc2hvd1Byb2plY3RzKCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG5cblxuICAgIGNvbnN0IGVkaXRQcm9qZWN0QnV0dG9uID0gKGVkaXRCdXR0b24sIGluZGV4LCBkcm9wZG93bikgPT4ge1xuICAgICAgICBcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duQ29udGVudCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duQ29udGVudCcpO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBkcm9wZG93bi5hcHBlbmQoLi4uY3JlYXRlRWRpdFByb2plY3REcm9wZG93bkNvbnRlbnRzKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRQcm9qZWN0TmFtZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1OZXdOYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm1OZXdOYW1lQnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgY29uZmlybU5ld05hbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKVtpbmRleF0uZWRpdFByb2plY3ROYW1lKGVkaXRQcm9qZWN0TmFtZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1Byb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duLmFwcGVuZCguLi5jcmVhdGVFZGl0UHJvamVjdERyb3Bkb3duQ29udGVudHMoKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdFByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFByb2plY3ROYW1lJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlybU5ld05hbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybU5ld05hbWVCdXR0b24nKTtcbiAgICAgICAgICAgICAgICBjb25maXJtTmV3TmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpW2luZGV4XS5lZGl0UHJvamVjdE5hbWUoZWRpdFByb2plY3ROYW1lSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzaG93UHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0RGl2RXZlbnQgPSAocHJvamVjdERpdiwpID0+IHtcbiAgICAgICAgY29uc3QgaG9tZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZVByb2plY3REaXYnKTtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNBcnJheSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdERpdicpXTtcbiAgICAgICAgICAgIHByb2plY3RzQXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgndGFyZ2V0Jyk7IFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBob21lUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCd0YXJnZXQnKTtcbiAgICAgICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgndGFyZ2V0Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWRpdFByb2plY3RCdXR0b24sXG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24sXG4gICAgICAgIHByb2plY3REaXZFdmVudCxcbiAgICB9XG5cblxufTtcbmV4cG9ydCBkZWZhdWx0IGFkZFByb2plY3REaXZFdmVudFxuXG4iLCJpbXBvcnQgYWRkUHJvamVjdEJ1dHRvbkV2ZW50IGZyb20gXCIuL2FkZC1wcm9qZWN0LWJ1dHRvbi1ldmVudC5qc1wiO1xuaW1wb3J0IGNyZWF0ZUFkZFByb2plY3RCdG4gZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFByb2plY3QtY3JlYXRlLWFkZEJ0bi5qc1wiO1xuaW1wb3J0IHByb2plY3RNZW5hZ2VyIGZyb20gXCIuL3Byb2plY3QtbWVuYWdlci5qc1wiO1xuaW1wb3J0IHByb2plY3RDcmVhdG9yIGZyb20gXCIuL3Byb2plY3QtY3JlYXRvci5qc1wiO1xuaW1wb3J0IHNob3dQcm9qZWN0cyBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tc2hvdy1wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IGRvbVNob3dUb2RvIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1zaG93LVRPRE8uanNcIjtcblxuY29uc3QgYWRkRXZlbnRGdW5jdGlvbnRzVG9Gb3JtID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGRlY2xpbmVCdG5GdW5jdGlvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lQ2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3ROYW1lQ2FuY2VsQnRuJyk7XG4gICAgICAgIHByb2plY3ROYW1lQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY3JlYXRlQWRkUHJvamVjdEJ0bigpO1xuICAgICAgICAgICAgYWRkUHJvamVjdEJ1dHRvbkV2ZW50KCk7XG4gICAgICAgIH0pXG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZUNvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdE5hbWVDb25maXJtQnRuJyk7XG4gICAgICAgIHByb2plY3ROYW1lQ29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25NZXNzYWdlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZhbGlkYXRpb25NZXNzYWdlRGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZUlucHV0VGV4dCcpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RDcmVhdG9yKHByb2plY3ROYW1lSW5wdXRUZXh0KTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lc0FycmF5ID0gW107XG4gICAgICAgICAgICBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lc0FycmF5LnB1c2gocHJvamVjdC5nZXROYW1lKCkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lc0FycmF5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHByb2plY3ROYW1lc0FycmF5LmluY2x1ZGVzKHByb2plY3ROYW1lSW5wdXRUZXh0KSkge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlRGl2LmlubmVyVGV4dCA9IFwiVGhpcyBuYW1lIGFscmVhZHkgZXhpc3RzIVwiO1xuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3ROYW1lRXJyb3InKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihwcm9qZWN0TmFtZUlucHV0VGV4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZURpdi5pbm5lclRleHQgPSBcIk5hbWUgbXVzdCBiZSBhdCBsZWFzdCAxIGNoYXJhY3RlciBsb25nXCI7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2VEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWVFcnJvcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0TWVuYWdlci5wdXNoVG9Qcm9qZWN0c0FycmF5KHByb2plY3QpOyAgICAgIFxuICAgICAgICAgICAgY3JlYXRlQWRkUHJvamVjdEJ0bigpO1xuICAgICAgICAgICAgYWRkUHJvamVjdEJ1dHRvbkV2ZW50KCk7XG4gICAgICAgICAgICBzaG93UHJvamVjdHMoKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSkoKTtcblxuICAgIC8vIGNvbnN0IHByb2plY3ROYW1lVmFsaWRhdGlvbiA9ICgoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lSW5wdXRUZXh0Jyk7XG4gICAgLy8gICAgIGNvbnN0IHZhbGlkYXRpb25NZXNzYWdlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndmFsaWRhdGlvbk1lc3NhZ2VEaXYnKTtcbiAgICAvLyAgICAgY29uc3QgcHJvamVjdE5hbWVzQXJyYXkgPSBbXTtcbiAgICAvLyAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAvLyAgICAgICAgIHByb2plY3ROYW1lc0FycmF5LnB1c2gocHJvamVjdC5nZXROYW1lKCkpO1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdE5hbWVzQXJyYXkpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgICAgcHJvamVjdE5hbWVJbnB1dFRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICgpID0+IHtcbiAgICAvLyAgICAgICAgIHByb2plY3ROYW1lc0FycmF5LmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAvLyAgICAgICAgICAgICBpZihuYW1lID09PSBwcm9qZWN0TmFtZUlucHV0VGV4dC52YWx1ZSkge1xuICAgIC8vICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZURpdi5pbm5lclRleHQgPSBcIlRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cyFcIjtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2VEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWVFcnJvcicpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2VEaXYuaW5uZXJUZXh0ID0gXCJUaGlzIG5hbWUgYWxyZWFkeSBleGlzdHMhXCI7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlRGl2LmNsYXNzTGlzdC5yZW1vdigncHJvamVjdE5hbWVFcnJvcicpO1xuICAgIC8vICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZURpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmFtZU9rJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbmZpcm1CdG4oKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICB9KVxuICAgIC8vIH0pKCk7XG5cbn07XG5leHBvcnQgZGVmYXVsdCBhZGRFdmVudEZ1bmN0aW9udHNUb0Zvcm0iLCJpbXBvcnQgc3dhcHRvZG9PcHRpb25zQ29udGFpbmVyQ29udGVudHMgZnJvbSAnLi4vZG9tLWZ1bmN0aW9ucy9ET00tYWRkVG9kby1zd2FwLUJ0bi10by1Gb3JtLmpzJztcbmltcG9ydCBzd2FwRWRpdE9yQWRkVG9kb0Zvcm1Ub0J1dHRvbiBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00td2luZG93LWxpc3RlbmVyLXN3YXAtdG9kby1mb3JtLmpzXCJcbmNvbnN0IGFkZFRPRE9CdXR0b25FdmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRUT0RPQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRPRE9CdXR0b24nKTtcbiAgICBhZGRUT0RPQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dhcHRvZG9PcHRpb25zQ29udGFpbmVyQ29udGVudHMpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGFkZFRPRE9CdXR0b25FdmVudCIsImltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi9wcm9qZWN0LW1lbmFnZXIuanNcIjtcbmltcG9ydCBwcm9qZWN0Q3JlYXRvciBmcm9tIFwiLi9wcm9qZWN0LWNyZWF0b3IuanNcIjtcbmltcG9ydCB0b2RvVGFzayBmcm9tIFwiLi9UT0RPLWNyZWF0b3IuanNcIjtcbmltcG9ydCBjcmVhdGVBZGRUT0RPdEJ0biBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tYWRkVG9kby1jcmVhdGUtYWRkQnRuLmpzXCI7XG5pbXBvcnQgYWRkVE9ET0J1dHRvbkV2ZW50IGZyb20gXCIuL2FkZC10b2RvLWJ1dHRvbi1ldmVudC5qc1wiO1xuaW1wb3J0IG5ld1RvZG8gZnJvbSBcIi4vY3JlYXRlLW5ldy10b2RvLmpzXCI7XG5pbXBvcnQgcmVmcmVzaFRvZG9zQ29udGFpbmVyIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1yZWZyZXNoLVRPRE9TLWNvbnRhaW5lclwiO1xuY29uc3QgbmV3VG9kb0J1dHRvbnNFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGVjbGluZUJ0bkZ1bmN0aW9uID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0NyZWF0ZUNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ3JlYXRlQ2FuY2VsQnRuJyk7XG4gICAgICAgIHRvZG9DcmVhdGVDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjcmVhdGVBZGRUT0RPdEJ0bigpO1xuICAgICAgICAgICAgYWRkVE9ET0J1dHRvbkV2ZW50KCk7XG4gICAgICAgIH0pXG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvQ3JlYXRlQ29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ3JlYXRlQ29uZmlybUJ0bicpO1xuICAgICAgICB0b2RvQ3JlYXRlQ29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVRvZG8gPSBuZXdUb2RvKCk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXQnKS5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gXCJIT01FXCIpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWVuYWdlci5wdXNoVG9Ib21lVG9kb3NBcnJheShjcmVhdGVUb2RvKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RzQXJyYXkgPSBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KCk7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RJbmRleDsgXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KClbaV0uZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSkgcHJvamVjdEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKVtwcm9qZWN0SW5kZXhdO1xuICAgICAgICAgICAgICAgIHByb2plY3QuYWRkVG9Ub2Rvc0FycmF5KGNyZWF0ZVRvZG8pOyBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNyZWF0ZUFkZFRPRE90QnRuKCk7XG4gICAgICAgICAgICBhZGRUT0RPQnV0dG9uRXZlbnQoKTtcbiAgICAgICAgICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuICAgICAgICB9KVxuICAgIH0pKCk7XG5cbn07XG5leHBvcnQgZGVmYXVsdCBuZXdUb2RvQnV0dG9uc0V2ZW50cyIsImltcG9ydCB0b2RvVGFzayBmcm9tIFwiLi9UT0RPLWNyZWF0b3IuanNcIjtcbmltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi9wcm9qZWN0LW1lbmFnZXIuanNcIjtcbmNvbnN0IG5ld1RvZG8gPSAoKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTmFtZUlucHV0VGV4dCcpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0RhdGVQaWNrZXJJbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1RpbWVQaWNrZXJJbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Qcmlvcml0eVNlbGVjdCcpLnZhbHVlO1xuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Ob3Rlc0lucHV0JykudmFsdWU7XG4gICAgbGV0IHRvZG8gPSB0b2RvVGFzayhuYW1lLCBkYXRlLCB0aW1lLCBwcmlvcml0eSwgbm90ZXMpO1xuICAgIHJldHVybiB0b2RvXG59XG5leHBvcnQgZGVmYXVsdCBuZXdUb2RvIiwiaW1wb3J0IHByb2plY3RNZW5hZ2VyIGZyb20gXCIuL3Byb2plY3QtbWVuYWdlci5qc1wiO1xuaW1wb3J0IGNyZWF0ZUFkZFRPRE90QnRuIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1hZGRUb2RvLWNyZWF0ZS1hZGRCdG4uanNcIjtcbmltcG9ydCBhZGRUT0RPQnV0dG9uRXZlbnQgZnJvbSBcIi4vYWRkLXRvZG8tYnV0dG9uLWV2ZW50LmpzXCI7XG5pbXBvcnQgcmVmcmVzaFRvZG9zQ29udGFpbmVyIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1yZWZyZXNoLVRPRE9TLWNvbnRhaW5lclwiO1xuY29uc3QgZWRpdFRvZG9CdXR0b25zRXZlbnRzID0gKHRhcmdldFByb2plY3RJbmRleCwgdG9kb0luZGV4LCkgPT4ge1xuICAgIGNvbnN0IGRlY2xpbmVCdG5GdW5jdGlvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9DcmVhdGVDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0NyZWF0ZUNhbmNlbEJ0bicpO1xuICAgICAgICB0b2RvQ3JlYXRlQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY3JlYXRlQWRkVE9ET3RCdG4oKTtcbiAgICAgICAgICAgIGFkZFRPRE9CdXR0b25FdmVudCgpO1xuICAgICAgICB9KVxuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjb25maXJtQnRuID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0VkaXRDb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9FZGl0Q29uZmlybUJ0bicpO1xuICAgICAgICB0b2RvRWRpdENvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCB0YXJnZXRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXQnKS5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRhcmdldFByb2plY3ROYW1lID09PSBcIkhPTUVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhvbWVUb2RvID0gcHJvamVjdE1lbmFnZXIuZ2V0SG9tZVRvZG9zQXJyYXkoKVt0b2RvSW5kZXhdO1xuICAgICAgICAgICAgICAgIGhvbWVUb2RvLnNldFRvZG9OYW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTmFtZUlucHV0VGV4dCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBob21lVG9kby5zZXRUb2RvRGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0RhdGVQaWNrZXJJbnB1dCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBob21lVG9kby5zZXRUb2RvVGltZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1RpbWVQaWNrZXJJbnB1dCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBob21lVG9kby5zZXRUb2RvUHJpb3JpdHkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Qcmlvcml0eVNlbGVjdCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBob21lVG9kby5zZXRUb2RvTm90ZXMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Ob3Rlc0lucHV0JykudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgY3JlYXRlQWRkVE9ET3RCdG4oKTtcbiAgICAgICAgICAgICAgICBhZGRUT0RPQnV0dG9uRXZlbnQoKTtcbiAgICAgICAgICAgICAgICByZWZyZXNoVG9kb3NDb250YWluZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvID0gcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpW3RhcmdldFByb2plY3RJbmRleF0uZ2V0VG9kb3NBcnJheSgpW3RvZG9JbmRleF07XG4gICAgICAgICAgICAgICAgdG9kby5zZXRUb2RvTmFtZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb05hbWVJbnB1dFRleHQnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdG9kby5zZXRUb2RvRGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0RhdGVQaWNrZXJJbnB1dCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0b2RvLnNldFRvZG9UaW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGltZVBpY2tlcklucHV0JykudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRvZG8uc2V0VG9kb1ByaW9yaXR5KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUHJpb3JpdHlTZWxlY3QnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdG9kby5zZXRUb2RvTm90ZXMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Ob3Rlc0lucHV0JykudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgY3JlYXRlQWRkVE9ET3RCdG4oKTtcbiAgICAgICAgICAgICAgICBhZGRUT0RPQnV0dG9uRXZlbnQoKTtcbiAgICAgICAgICAgICAgICByZWZyZXNoVG9kb3NDb250YWluZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KSgpO1xuXG59O1xuZXhwb3J0IGRlZmF1bHQgZWRpdFRvZG9CdXR0b25zRXZlbnRzIiwiaW1wb3J0IHByb2plY3RNZW5hZ2VyIGZyb20gXCIuL3Byb2plY3QtbWVuYWdlci5qc1wiO1xuaW1wb3J0IGRvbVNob3dUb2RvIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1zaG93LVRPRE8uanNcIjtcbmltcG9ydCByZWZyZXNoVG9kb3NDb250YWluZXIgZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLXJlZnJlc2gtVE9ET1MtY29udGFpbmVyLmpzXCI7XG5jb25zdCBzaG93VG9kb3NGcm9tSG9tZVByb2plY3QgPSAoaG9tZVByb2plY3REaXYpID0+IHtcbiAgICBob21lUHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3REaXYnKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmdldCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgaG9tZVByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgndGFyZ2V0Jyk7XG5cbiAgICAgICAgcmVmcmVzaFRvZG9zQ29udGFpbmVyKCk7XG4gICAgICAgIFxuICAgIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHNob3dUb2Rvc0Zyb21Ib21lUHJvamVjdCIsImNvbnN0IHByb2plY3RDcmVhdG9yID0gKG5hbWUpID0+IHtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBuYW1lO1xuICAgIGxldCB0b2Rvc0FycmF5ID0gW107XG4gICAgXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHByb2plY3ROYW1lO1xuICAgIGNvbnN0IGdldFRvZG9zQXJyYXkgPSAoKSA9PiB0b2Rvc0FycmF5O1xuICAgIGNvbnN0IGVkaXRQcm9qZWN0TmFtZSA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgcHJvamVjdE5hbWUgPSBzdHJpbmc7XG4gICAgfVxuICAgIGNvbnN0IGFkZFRvVG9kb3NBcnJheSA9IChpdGVtKSA9PiB7XG4gICAgICAgIHRvZG9zQXJyYXkucHVzaChpdGVtKTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVRPRE8gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgdG9kb3NBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBjb25zdCBmbGF0VG9kb3NBcnJheSA9ICgpID0+IHtcbiAgICAgICAgdG9kb3NBcnJheSA9IHRvZG9zQXJyYXkuZmxhdCgpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXROYW1lLFxuICAgICAgICBnZXRUb2Rvc0FycmF5LFxuICAgICAgICBlZGl0UHJvamVjdE5hbWUsXG4gICAgICAgIGFkZFRvVG9kb3NBcnJheSxcbiAgICAgICAgcmVtb3ZlVE9ETyxcbiAgICAgICAgZmxhdFRvZG9zQXJyYXksXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdENyZWF0b3I7IiwiY29uc3QgcHJvamVjdE1lbmFnZXIgPSAoKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0c0FycmF5ID0gW107XG4gICAgbGV0IGhvbWVUb2Rvc0FycmF5ID0gW107XG4gICAgXG4gICAgY29uc3QgZ2V0UHJvamVjdHNBcnJheSA9ICgpID0+IHByb2plY3RzQXJyYXk7XG4gICAgY29uc3QgZ2V0SG9tZVRvZG9zQXJyYXkgPSAoKSA9PiBob21lVG9kb3NBcnJheTtcbiAgICBjb25zdCBwdXNoVG9Ib21lVG9kb3NBcnJheSA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGhvbWVUb2Rvc0FycmF5LnB1c2godG9kbyk7XG4gICAgfTtcbiAgICBjb25zdCBwdXNoVG9Qcm9qZWN0c0FycmF5ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdHNBcnJheS5wdXNoKHByb2plY3QpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0QWxsVG9kb3NGcm9tUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBhbGxUb2RvcyA9W107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICBhbGxUb2Rvcy5wdXNoKHByb2plY3RzQXJyYXlbaV0uZ2V0VG9kb3NBcnJheSlcbiAgICAgICAgfTtcbiAgICAgICAgYWxsVG9kb3MucHVzaChob21lVG9kb3NBcnJheSlcbiAgICAgICAgcmV0dXJuIGFsbFRvZG9zLmZsYXQoKVxuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgICAgICBwcm9qZWN0c0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVIb21lVE9ETyA9IChpbmRleCkgPT4ge1xuICAgICAgICBob21lVG9kb3NBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gICAgY29uc3QgbW92ZVRPRE9Gcm9tSG9tZVRvUHJvamVjdCA9ICh0b2RvSW5kZXgsIHByb2plY3RJbmRleCkgPT4ge1xuICAgICAgICBsZXQgdGVtcCA9IGhvbWVUb2Rvc0FycmF5LnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuICAgICAgICBwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0uYWRkVG9Ub2Rvc0FycmF5KHRlbXApO1xuICAgICAgICBwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0uZmxhdFRvZG9zQXJyYXkoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UHJvamVjdHNBcnJheSxcbiAgICAgICAgZ2V0QWxsVG9kb3NGcm9tUHJvamVjdHMsXG4gICAgICAgIGdldEhvbWVUb2Rvc0FycmF5LFxuICAgICAgICBwdXNoVG9Qcm9qZWN0c0FycmF5LFxuICAgICAgICBwdXNoVG9Ib21lVG9kb3NBcnJheSxcbiAgICAgICAgcmVtb3ZlUHJvamVjdCxcbiAgICAgICAgcmVtb3ZlSG9tZVRPRE8sXG4gICAgICAgIG1vdmVUT0RPRnJvbUhvbWVUb1Byb2plY3QsXG4gICAgfVxufSkoKTtcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RNZW5hZ2VyIiwiaW1wb3J0IHByb2plY3RNZW5hZ2VyIGZyb20gXCIuL3Byb2plY3QtbWVuYWdlci5qc1wiO1xuaW1wb3J0IHJlZnJlc2hUb2Rvc0NvbnRhaW5lciBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tcmVmcmVzaC1UT0RPUy1jb250YWluZXJcIjsgXG5pbXBvcnQgZWRpdFRvZG9Db250YWluZXJDb250ZW50cyBmcm9tICcuLi9kb20tZnVuY3Rpb25zL0RPTS1lZGl0VG9kby1zd2FwLXRvLUZvcm0nO1xuaW1wb3J0IGNyZWF0ZUFkZFRPRE90QnRuIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1hZGRUb2RvLWNyZWF0ZS1hZGRCdG4uanNcIjtcbmltcG9ydCBhZGRUT0RPQnV0dG9uRXZlbnQgZnJvbSBcIi4vYWRkLXRvZG8tYnV0dG9uLWV2ZW50LmpzXCI7XG5pbXBvcnQgbW92ZVRvZG9Ecm9wZG93bkNvbnRlbnRzIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1zaG93LW1vdmUtVE9ETy1kcm9wZG93bi5qc1wiO1xuXG5jb25zdCB0b2RvRGl2c0V2ZW50cyA9ICgpID0+IHtcblxuICAgIGxldCB0YXJnZXRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXQnKS5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICBcbiAgICBjb25zdCB0b2RvRGVsZXRlQnV0dG9uRXZlbnQgPSAoZGVsZXRlQnV0dG9uLCB0b2RvSW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHRhcmdldFByb2plY3RJbmRleCA9IDA7XG4gICAgICAgIGlmICh0YXJnZXRQcm9qZWN0TmFtZSA9PT0gXCJIT01FXCIpIHtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcbiAgICAgICAgICAgICAgICBjcmVhdGVBZGRUT0RPdEJ0bigpO1xuICAgICAgICAgICAgICAgIGFkZFRPRE9CdXR0b25FdmVudCgpO1xuICAgICAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLnJlbW92ZUhvbWVUT0RPKHRvZG9JbmRleCk7XG4gICAgICAgICAgICAgICAgcmVmcmVzaFRvZG9zQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgICAgXG4gICAgICAgICAgICB9KTsgICAgXG4gICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpID09PSB0YXJnZXRQcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRQcm9qZWN0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgY3JlYXRlQWRkVE9ET3RCdG4oKTtcbiAgICAgICAgICAgICAgICBhZGRUT0RPQnV0dG9uRXZlbnQoKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KClbdGFyZ2V0UHJvamVjdEluZGV4XS5yZW1vdmVUT0RPKHRvZG9JbmRleCk7XG4gICAgICAgICAgICAgICAgcmVmcmVzaFRvZG9zQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCB0b2RvRWRpdEJ1dHRvbkV2ZW50ID0gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0QnV0dG9uLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdUb2RvTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nVG9kb0RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ1RvZG9UaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdUb2RvTm90ZXMsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgIGxldCB0YXJnZXRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXQnKS5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgICAgbGV0IHRhcmdldFByb2plY3RJbmRleCA9IDA7XG4gICAgICAgIGxldCB0b2RvTmFtZURpdkNvbnRlbnQgPSBzdHJpbmdUb2RvTmFtZTtcbiAgICAgICAgbGV0IHRvZG9EYXRlRGl2Q29udGVudCA9IHN0cmluZ1RvZG9EYXRlO1xuICAgICAgICBsZXQgdG9kb1RpbWVEaXZDb250ZW50ID0gc3RyaW5nVG9kb1RpbWU7XG4gICAgICAgIGxldCB0b2RvTm90ZXNEaXZDb250ZW50ID0gc3RyaW5nVG9kb05vdGVzO1xuICAgICAgICBsZXQgcGFzc2VkVG9kb0luZGV4ID0gdG9kb0luZGV4O1xuICAgICAgICBpZiAodGFyZ2V0UHJvamVjdE5hbWUgPT09IFwiSE9NRVwiKSB7XG4gICAgICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlZGl0VG9kb0NvbnRhaW5lckNvbnRlbnRzKHRhcmdldFByb2plY3RJbmRleCwgcGFzc2VkVG9kb0luZGV4LCB0b2RvTmFtZURpdkNvbnRlbnQsIHRvZG9EYXRlRGl2Q29udGVudCwgdG9kb1RpbWVEaXZDb250ZW50LCB0b2RvTm90ZXNEaXZDb250ZW50KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpID09PSB0YXJnZXRQcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRQcm9qZWN0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlZGl0VG9kb0NvbnRhaW5lckNvbnRlbnRzKHRhcmdldFByb2plY3RJbmRleCwgcGFzc2VkVG9kb0luZGV4LCB0b2RvTmFtZURpdkNvbnRlbnQsIHRvZG9EYXRlRGl2Q29udGVudCwgdG9kb1RpbWVEaXZDb250ZW50LCB0b2RvTm90ZXNEaXZDb250ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9OyAgICBcbiAgICB9O1xuXG4gICAgY29uc3QgdG9kb01vdmVCdXR0b25FdmVudCA9IChtb3ZlQnV0dG9uLCB0b2RvSW5kZXgsIHRvZG9EaXYgKSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFsbFRvZG9zID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG9EaXYnKV07XG4gICAgICAgICAgICAgICAgYWxsVG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmdldFRvZG8nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RhcmdldFRvZG8nKTtcblxuICAgICAgICAgICAgICAgIGlmKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmVUb2RvUHJvamVjdHMnKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG9kb1Byb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmVUb2RvUHJvamVjdHMnKTtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvZG9Qcm9qZWN0cy5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvZG9Ecm9wZG93bkNvbnRlbnRzKHRhcmdldFByb2plY3ROYW1lLCB0b2RvSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxsVG9kb3MgPSBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9kb0RpdicpXTtcbiAgICAgICAgICAgICAgICAgICAgYWxsVG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCd0YXJnZXRUb2RvJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RhcmdldFRvZG8nKTtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvZG9Ecm9wZG93bkNvbnRlbnRzKHRhcmdldFByb2plY3ROYW1lLCB0b2RvSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHRvZG9UYXJnZXRFdmVudCA9ICh0b2RvRGl2KSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgdG9kb0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbGxUb2RvcyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2RvRGl2JyldO1xuICAgICAgICAgICAgYWxsVG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgndGFyZ2V0VG9kbycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RhcmdldFRvZG8nKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9kb0RlbGV0ZUJ1dHRvbkV2ZW50LFxuICAgICAgICB0b2RvRWRpdEJ1dHRvbkV2ZW50LFxuICAgICAgICB0b2RvTW92ZUJ1dHRvbkV2ZW50LFxuICAgICAgICB0b2RvVGFyZ2V0RXZlbnRcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b2RvRGl2c0V2ZW50c1xuXG5cblxuOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IF8gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IGhlYWRlckJvZHlGb290ZXIgZnJvbSAnLi9kb20tZnVuY3Rpb25zL0RPTS1wcmltZS1kaXZzLmpzJztcbmltcG9ydCBjcmVhdGVIZWFkIGZyb20gJy4vZG9tLWZ1bmN0aW9ucy9ET00taGVhZC5qcyc7XG5pbXBvcnQgY3JlYXRlQm9keSBmcm9tICcuL2RvbS1mdW5jdGlvbnMvRE9NLWJvZHkuanMnO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tICcuL2RvbS1mdW5jdGlvbnMvRE9NLWZvb3Rlci5qcyc7XG5pbXBvcnQgYWRkUHJvamVjdEJ1dHRvbkV2ZW50IGZyb20gJy4vZnVuY3Rpb25zL2FkZC1wcm9qZWN0LWJ1dHRvbi1ldmVudC5qcyc7XG5pbXBvcnQgY3JlYXRlQWRkVE9ET3RCdG4gZnJvbSAnLi9kb20tZnVuY3Rpb25zL0RPTS1hZGRUb2RvLWNyZWF0ZS1hZGRCdG4uanMnO1xuaW1wb3J0IGFkZFRPRE9CdXR0b25FdmVudCBmcm9tICcuL2Z1bmN0aW9ucy9hZGQtdG9kby1idXR0b24tZXZlbnQuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmhlYWRlckJvZHlGb290ZXIoKTtcbmNyZWF0ZUhlYWQoKTtcbmNyZWF0ZUJvZHkoKTtcbmNyZWF0ZUZvb3RlcigpO1xuYWRkUHJvamVjdEJ1dHRvbkV2ZW50KCk7XG5jcmVhdGVBZGRUT0RPdEJ0bigpO1xuYWRkVE9ET0J1dHRvbkV2ZW50KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9