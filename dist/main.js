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

    addProjectContainer.append(projectNameInputLabel, projectNameInputText ,projectNameConfirmBtn, projectNameCancelBtn);

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
            const projectNameInputText = document.getElementById('projectNameInputText').value;
            const project = (0,_project_creator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(projectNameInputText);
            _project_menager_js__WEBPACK_IMPORTED_MODULE_2__["default"].pushToProjectsArray(project);      
            (0,_dom_functions_DOM_addProject_create_addBtn_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
            (0,_add_project_button_event_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
            (0,_dom_functions_DOM_show_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"])(); 
        })
    })();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnlCO0FBQ3dDO0FBQ1o7QUFDQTtBQUNJO0FBQ21CO0FBQ0M7QUFDUDtBQUNqRDs7QUFFckIsNEVBQWdCO0FBQ2hCLHNFQUFVO0FBQ1Ysc0VBQVU7QUFDVix3RUFBWTtBQUNaLGtGQUFxQjtBQUNyQix1RkFBaUI7QUFDakIsK0VBQWtCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1hZGRQcm9qZWN0LWNyZWF0ZS1hZGRCdG4uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00tYWRkUHJvamVjdC1zd2FwLUJ0bi10by1Gb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFRvZG8tY3JlYXRlLWFkZEJ0bi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1hZGRUb2RvLXN3YXAtQnRuLXRvLUZvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00tYm9keS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1jcmVhdGUtZWRpdC1wcm9qZWN0LWRyb3Bkb3duLWNvbnRlbnRzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLWVkaXRUb2RvLXN3YXAtdG8tRm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00taGVhZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1wcmltZS1kaXZzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLXJlZnJlc2gtVE9ET1MtY29udGFpbmVyLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLXNob3ctVE9ETy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1zaG93LW1vdmUtVE9ETy1kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1zaG93LXByb2plY3RzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLXdpbmRvdy1saXN0ZW5lci1yZW1vdmUtZWRpdFByb2plY3QtZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00td2luZG93LWxpc3RlbmVyLXJlbW92ZS1tb3ZlVG9kby1kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS13aW5kb3ctbGlzdGVuZXItc3dhcC10b2RvLWZvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL1RPRE8tY3JlYXRvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvYWRkLXByb2plY3QtYnV0dG9uLWV2ZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9hZGQtcHJvamVjdC1kaXZzLWV2ZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9hZGQtcHJvamVjdC1mb3JtLWJ1dHRvbnMtZXZlbnRzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9hZGQtdG9kby1idXR0b24tZXZlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2FkZC10b2RvLWZvcm0tZXZlbnRzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9jcmVhdGUtbmV3LXRvZG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2VkaXQtdG9kby1mb3JtLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvaG9tZURpdi1ldmVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvcHJvamVjdC1jcmVhdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9wcm9qZWN0LW1lbmFnZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL3RvZG9EaXZzRXZlbnRzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG59XFxuLmhlYWQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDE2MSwgMjE2KTtcXG59XFxuLmxvZ28ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuLmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG4ucHJvamVjdHNEaXYge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMTk2LCAxODIpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMTBmciAxZnI7XFxufVxcbi5wcm9qZWN0c0RpdkhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuLmhvbWVQcm9qZWN0RGl2IHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc2LCAyMjMsIDIyMyk7XFxufVxcbi5wcm9qZWN0c0NvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjIzLCAxNzYpO1xcbn1cXG4udGFyZ2V0IHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xcbn1cXG4ucHJvamVjdERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmRyb3Bkb3duIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5kcm9wZG93bkNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG5cXG5cXG4uYWRkUHJvamVjdENvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMTc2LCAyMTMpO1xcbn1cXG5cXG4udG9kb3NEaXYge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMTY3LCAxMzkpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjVmciAxMGZyIDFmcjtcXG59XFxuLnRvZG9EaXZIZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzYsIDIyMywgMjIzKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuLnRvZG9EYXRhSGVhZGVyRGl2IHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyIDFmciA0ZnIgMWZyO1xcbiAgICBwYWRkaW5nOiAwLjI1JSAwLjUlO1xcbn1cXG4udG9kb0RhdGFIZWFkZXJEaXYgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFsbFRvZG9zQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMTQ5LCAxNDkpO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBwYWRkaW5nOiAwLjMlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xcbiAgICBcXG59XFxuLnRvZG9zQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc2LCAyMjMsIDE4Mik7XFxuICAgIHBhZGRpbmc6IDAuMjUlIDAuNSU7XFxufVxcbi50b2RvRGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmciAxZnIgNGZyIDAuNWZyIDAuMjVmciAwLjI1ZnI7XFxuICAgIG1hcmdpbjogMSUgMDtcXG59XFxuLm1vdmVUb2RvUHJvamVjdHN7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4ubW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxufVxcbi5tb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbn1cXG4ubW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYsIC5tb3ZlVG9kb0Ryb3Bkb3duSG9tZVByb2plY3Qge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdjpob3ZlciwgLm1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdDpob3ZlciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG59XFxuLm1vdmVUb2RvUHJvamVjdHNEcm9wZG93bkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIC8qIG1pbi13aWR0aDogMTYwcHg7ICovXFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcbi50b2RvRGl2ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXJnZXRUb2RvIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xcbn1cXG4udG9kb09wdGlvbnNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNzVmciAyZnIgMC43NWZyIDFmciAwLjVmciAwLjc1ZnIgMC43NWZyIDAuNzVmciAwLjc1ZnIgM2ZyIDAuMjVmciAwLjI1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDExNiwgMzEpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYWRkVE9ET0J1dHRvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMTM7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi50b2RvT3B0aW9uc0NvbnRhaW5lciA+IGxhYmVsIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi50b2RvQ3JlYXRlRGl2SGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAxMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLnRvZG9FZGl0RGl2SGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAxMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmZvb3RlciB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA0dmg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDElO1xcbn1cXG4uZ2l0SWNvbiB7XFxuICAgIGhlaWdodDogM3ZoO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksZUFBZTtJQUNmLG9DQUFvQztBQUN4QztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsNENBQTRDO0lBQzVDLFVBQVU7RUFDWjs7O0FBR0Y7SUFDSSxlQUFlO0lBQ2Ysb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOERBQThEO0lBQzlELFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixTQUFTO0lBQ1QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw0Q0FBNEM7SUFDNUMsVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0dBQWdHO0lBQ2hHLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsT0FBTztBQUNYO0FBQ0E7SUFDSSxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbn1cXG4uaGVhZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgMTYxLCAyMTYpO1xcbn1cXG4ubG9nbyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4uYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcbi5wcm9qZWN0c0RpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAxOTYsIDE4Mik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxMGZyIDFmcjtcXG59XFxuLnByb2plY3RzRGl2SGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG4uaG9tZVByb2plY3REaXYge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzYsIDIyMywgMjIzKTtcXG59XFxuLnByb2plY3RzQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAyMjMsIDE3Nik7XFxufVxcbi50YXJnZXQge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XFxufVxcbi5wcm9qZWN0RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZHJvcGRvd24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmRyb3Bkb3duQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIG1pbi13aWR0aDogMTYwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcblxcbi5hZGRQcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAxNzYsIDIxMyk7XFxufVxcblxcbi50b2Rvc0RpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAxNjcsIDEzOSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDAuNWZyIDEwZnIgMWZyO1xcbn1cXG4udG9kb0RpdkhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgMjIzLCAyMjMpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMiU7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG4udG9kb0RhdGFIZWFkZXJEaXYge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnIgMWZyIDRmciAxZnI7XFxuICAgIHBhZGRpbmc6IDAuMjUlIDAuNSU7XFxufVxcbi50b2RvRGF0YUhlYWRlckRpdiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYWxsVG9kb3NCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxNDksIDE0OSk7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIHBhZGRpbmc6IDAuMyU7XFxuICAgIG1hcmdpbi1yaWdodDogMiU7XFxuICAgIFxcbn1cXG4udG9kb3NDb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzYsIDIyMywgMTgyKTtcXG4gICAgcGFkZGluZzogMC4yNSUgMC41JTtcXG59XFxuLnRvZG9EaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyIDFmciA0ZnIgMC41ZnIgMC4yNWZyIDAuMjVmcjtcXG4gICAgbWFyZ2luOiAxJSAwO1xcbn1cXG4ubW92ZVRvZG9Qcm9qZWN0c3tcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5tb3ZlVG9kb0Ryb3Bkb3duSG9tZVByb2plY3Qge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG59XFxuLm1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxufVxcbi5tb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdiwgLm1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2OmhvdmVyLCAubW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbn1cXG4ubW92ZVRvZG9Qcm9qZWN0c0Ryb3Bkb3duQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gICAgLyogbWluLXdpZHRoOiAxNjBweDsgKi9cXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuLnRvZG9EaXYgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhcmdldFRvZG8ge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxufVxcbi50b2RvT3B0aW9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43NWZyIDJmciAwLjc1ZnIgMWZyIDAuNWZyIDAuNzVmciAwLjc1ZnIgMC43NWZyIDAuNzVmciAzZnIgMC4yNWZyIDAuMjVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTE2LCAzMSk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hZGRUT0RPQnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAxMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLnRvZG9PcHRpb25zQ29udGFpbmVyID4gbGFiZWwge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLnRvZG9DcmVhdGVEaXZIZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDEzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4udG9kb0VkaXREaXZIZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDEzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uZm9vdGVyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDR2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMSU7XFxufVxcbi5naXRJY29uIHtcXG4gICAgaGVpZ2h0OiAzdmg7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY3JlYXRlQWRkUHJvamVjdEJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RDb250YWluZXInKTtcbiAgICAgICAgYWRkUHJvamVjdENvbnRhaW5lci5pbm5lckhUTUw9IFwiXCI7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRQcm9qZWN0QnV0dG9uJyk7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gXCIrIEFERFwiO1xuICAgICAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZChhZGRQcm9qZWN0QnV0dG9uKTtcbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGRQcm9qZWN0QnRuIiwiaW1wb3J0IGFkZEV2ZW50RnVuY3Rpb250c1RvRm9ybSBmcm9tICcuLi9mdW5jdGlvbnMvYWRkLXByb2plY3QtZm9ybS1idXR0b25zLWV2ZW50cy5qcyc7XG5cbmNvbnN0IHN3YXBDb250ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RDb250YWluZXInKTtcbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTD0gXCJcIjtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdE5hbWVJbnB1dFRleHQudHlwZSA9IFwidGV4dFwiO1xuICAgIHByb2plY3ROYW1lSW5wdXRUZXh0LmlkID0gXCJwcm9qZWN0TmFtZUlucHV0VGV4dFwiO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICBwcm9qZWN0TmFtZUlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJwcm9qZWN0TmFtZUlucHV0VGV4dFwiKTtcbiAgICBwcm9qZWN0TmFtZUlucHV0TGFiZWwuaW5uZXJIVE1MID0gXCJQcm9qZWN0IG5hbWU6XCI7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZUNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0TmFtZUNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3ROYW1lQ29uZmlybUJ0blwiKTtcbiAgICBwcm9qZWN0TmFtZUNvbmZpcm1CdG4uaW5uZXJUZXh0PSBcIlZcIjtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3ROYW1lQ2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TmFtZUNhbmNlbEJ0blwiKTtcbiAgICBwcm9qZWN0TmFtZUNhbmNlbEJ0bi5pbm5lclRleHQ9IFwiWFwiO1xuXG4gICAgYWRkUHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdE5hbWVJbnB1dExhYmVsLCBwcm9qZWN0TmFtZUlucHV0VGV4dCAscHJvamVjdE5hbWVDb25maXJtQnRuLCBwcm9qZWN0TmFtZUNhbmNlbEJ0bik7XG5cbiAgICBhZGRFdmVudEZ1bmN0aW9udHNUb0Zvcm0oKVxufTtcbmV4cG9ydCBkZWZhdWx0IHN3YXBDb250ZW50cyIsImNvbnN0IGNyZWF0ZUFkZFRPRE90QnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9PcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9PcHRpb25zQ29udGFpbmVyJyk7XG4gICAgdG9kb09wdGlvbnNDb250YWluZXIuaW5uZXJIVE1MPSBcIlwiO1xuICAgICAgICBjb25zdCBhZGRUT0RPQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZFRPRE9CdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkVE9ET0J1dHRvbicpO1xuICAgICAgICBhZGRUT0RPQnV0dG9uLmlubmVyVGV4dCA9IFwiKyBBREQgbmV3IFRvRG9cIjtcbiAgICAgICAgdG9kb09wdGlvbnNDb250YWluZXIuYXBwZW5kKGFkZFRPRE9CdXR0b24pO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkZFRPRE90QnRuIiwiaW1wb3J0IG5ld1RvZG9CdXR0b25zRXZlbnRzIGZyb20gJy4uL2Z1bmN0aW9ucy9hZGQtdG9kby1mb3JtLWV2ZW50cy5qcyc7XG5cbmNvbnN0IHN3YXB0b2RvT3B0aW9uc0NvbnRhaW5lckNvbnRlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9PcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9PcHRpb25zQ29udGFpbmVyJyk7XG4gICAgdG9kb09wdGlvbnNDb250YWluZXIuaW5uZXJIVE1MPSBcIlwiO1xuXG4gICAgY29uc3QgdG9kb05hbWVJbnB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9OYW1lSW5wdXRUZXh0LnR5cGUgPSBcInRleHRcIjtcbiAgICB0b2RvTmFtZUlucHV0VGV4dC5pZCA9IFwidG9kb05hbWVJbnB1dFRleHRcIjtcblxuICAgIGNvbnN0IHRvZG9OYW1lSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xhYmVsJyk7XG4gICAgdG9kb05hbWVJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb05hbWVJbnB1dFRleHRcIik7XG4gICAgdG9kb05hbWVJbnB1dExhYmVsLmlubmVySFRNTCA9IFwiVG9EbyBuYW1lOlwiO1xuXG4gICAgY29uc3QgdG9kb0RhdGVQaWNrZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xhYmVsJyk7XG4gICAgdG9kb0RhdGVQaWNrZXJMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInRvZG9EYXRlUGlja2VySW5wdXRcIik7XG4gICAgdG9kb0RhdGVQaWNrZXJMYWJlbC5pbm5lckhUTUwgPSBcIkRhdGU6XCI7XG5cbiAgICBjb25zdCB0b2RvRGF0ZVBpY2tlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvRGF0ZVBpY2tlcklucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICB0b2RvRGF0ZVBpY2tlcklucHV0LmlkID0gXCJ0b2RvRGF0ZVBpY2tlcklucHV0XCI7XG5cbiAgICBjb25zdCB0b2RvVGltZVBpY2tlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvVGltZVBpY2tlckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb1RpbWVQaWNrZXJJbnB1dFwiKTtcbiAgICB0b2RvVGltZVBpY2tlckxhYmVsLmlubmVySFRNTCA9IFwiVGltZTpcIjtcblxuICAgIGNvbnN0IHRvZG9UaW1lUGlja2VySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9UaW1lUGlja2VySW5wdXQudHlwZSA9IFwidGltZVwiO1xuICAgIHRvZG9UaW1lUGlja2VySW5wdXQuaWQgPSBcInRvZG9UaW1lUGlja2VySW5wdXRcIjtcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eVNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvUHJpb3JpdHlTZWxlY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInRvZG9Qcmlvcml0eVNlbGVjdFwiKTtcbiAgICB0b2RvUHJpb3JpdHlTZWxlY3RMYWJlbC5pbm5lckhUTUwgPSBcIlByaW9yaXR5OlwiO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgdG9kb1ByaW9yaXR5U2VsZWN0LmlkID0gXCJ0b2RvUHJpb3JpdHlTZWxlY3RcIjtcblxuICAgIGxldCBwcmlvcml0eUFycmF5ID0gWydIaWdoJywgJ01lZGl1bScsICdMb3cnXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpb3JpdHlBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBwcmlvcml0eS52YWx1ZSA9IHByaW9yaXR5QXJyYXlbaV07XG4gICAgICAgIHByaW9yaXR5LnRleHQgPSBwcmlvcml0eUFycmF5W2ldO1xuICAgICAgICB0b2RvUHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgdG9kb05vdGVzSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xhYmVsJyk7XG4gICAgdG9kb05vdGVzSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInRvZG9Ob3Rlc0lucHV0TGFiZWxcIik7XG4gICAgdG9kb05vdGVzSW5wdXRMYWJlbC5pbm5lckhUTUwgPSBcIk5vdGVzOlwiO1xuXG4gICAgY29uc3QgdG9kb05vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9Ob3Rlc0lucHV0LnR5cGUgPSBcInRleHRhcmVhXCI7XG4gICAgdG9kb05vdGVzSW5wdXQuaWQgPSBcInRvZG9Ob3Rlc0lucHV0XCI7XG5cbiAgICBjb25zdCB0b2RvQ3JlYXRlQ29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZG9DcmVhdGVDb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvQ3JlYXRlQ29uZmlybUJ0blwiKTtcbiAgICB0b2RvQ3JlYXRlQ29uZmlybUJ0bi5pbm5lclRleHQ9IFwiVlwiO1xuXG4gICAgY29uc3QgdG9kb0NyZWF0ZUNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZG9DcmVhdGVDYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcInRvZG9DcmVhdGVDYW5jZWxCdG5cIik7XG4gICAgdG9kb0NyZWF0ZUNhbmNlbEJ0bi5pbm5lclRleHQ9IFwiWFwiO1xuXG4gICAgY29uc3QgdG9kb0NyZWF0ZURpdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9DcmVhdGVEaXZIZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kb0NyZWF0ZURpdkhlYWRlcicpO1xuICAgIHRvZG9DcmVhdGVEaXZIZWFkZXIudGV4dENvbnRlbnQgPSAnQUREIE5FVyBUT0RPJztcblxuICAgIHRvZG9PcHRpb25zQ29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgdG9kb0NyZWF0ZURpdkhlYWRlcixcbiAgICAgICAgdG9kb05hbWVJbnB1dExhYmVsLCBcbiAgICAgICAgdG9kb05hbWVJbnB1dFRleHQgLFxuICAgICAgICB0b2RvRGF0ZVBpY2tlckxhYmVsLFxuICAgICAgICB0b2RvRGF0ZVBpY2tlcklucHV0LFxuICAgICAgICB0b2RvVGltZVBpY2tlckxhYmVsLFxuICAgICAgICB0b2RvVGltZVBpY2tlcklucHV0LFxuICAgICAgICB0b2RvUHJpb3JpdHlTZWxlY3RMYWJlbCxcbiAgICAgICAgdG9kb1ByaW9yaXR5U2VsZWN0LFxuICAgICAgICB0b2RvTm90ZXNJbnB1dExhYmVsLFxuICAgICAgICB0b2RvTm90ZXNJbnB1dCxcbiAgICAgICAgdG9kb0NyZWF0ZUNvbmZpcm1CdG4sXG4gICAgICAgIHRvZG9DcmVhdGVDYW5jZWxCdG5cbiAgICApO1xuXG4gICAgbmV3VG9kb0J1dHRvbnNFdmVudHMoKTtcbn07XG5leHBvcnQgZGVmYXVsdCBzd2FwdG9kb09wdGlvbnNDb250YWluZXJDb250ZW50cyIsImltcG9ydCBzaG93VG9kb3NGcm9tSG9tZVByb2plY3QgZnJvbSBcIi4uL2Z1bmN0aW9ucy9ob21lRGl2LWV2ZW50LmpzXCI7XG5pbXBvcnQgc3dhcEVkaXRPckFkZFRvZG9Gb3JtVG9CdXR0b24gZnJvbSBcIi4vRE9NLXdpbmRvdy1saXN0ZW5lci1zd2FwLXRvZG8tZm9ybS5qc1wiO1xuaW1wb3J0IHJlbW92ZURyb3Bkb3duIGZyb20gXCIuL0RPTS13aW5kb3ctbGlzdGVuZXItcmVtb3ZlLWVkaXRQcm9qZWN0LWRyb3Bkb3duLmpzXCI7XG5pbXBvcnQgcmVtb3ZlTW92ZVRvZG9Ecm9wZG93biBmcm9tIFwiLi9ET00td2luZG93LWxpc3RlbmVyLXJlbW92ZS1tb3ZlVG9kby1kcm9wZG93bi5qc1wiXG5jb25zdCBjcmVhdGVCb2R5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keScpXG5cbiAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzRGl2Jyk7XG5cbiAgICBjb25zdCBob21lUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2hvbWVQcm9qZWN0RGl2JywgJ3RhcmdldCcpO1xuICAgXG4gICAgY29uc3QgaG9tZVByb2plY3REaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVQcm9qZWN0RGl2VGl0bGUuY2xhc3NMaXN0LmFkZCgnaG9tZVByb2plY3REaXZUaXRsZScpXG4gICAgaG9tZVByb2plY3REaXZUaXRsZS5pbm5lclRleHQgPSBcIkhPTUVcIjtcbiAgICBob21lUHJvamVjdERpdi5hcHBlbmRDaGlsZChob21lUHJvamVjdERpdlRpdGxlKTtcblxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNDb250YWluZXInKTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2plY3RDb250YWluZXInKTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2plY3RCdXR0b24nKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9IFwiKyBBRERcIjtcblxuICAgIGNvbnN0IHByb2plY3RzRGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwcm9qZWN0c0RpdkhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c0RpdkhlYWRlcicpO1xuICAgIHByb2plY3RzRGl2SGVhZGVyLmlubmVyVGV4dCA9IFwiUFJPSkVDVFM6XCI7XG5cbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZChhZGRQcm9qZWN0QnV0dG9uKTtcblxuICAgIHNob3dUb2Rvc0Zyb21Ib21lUHJvamVjdChob21lUHJvamVjdERpdilcblxuICAgIHByb2plY3RzRGl2LmFwcGVuZChwcm9qZWN0c0RpdkhlYWRlciwgaG9tZVByb2plY3REaXYsIHByb2plY3RzQ29udGFpbmVyLCBhZGRQcm9qZWN0Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRvZG9zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb3NEaXYuY2xhc3NMaXN0LmFkZCgndG9kb3NEaXYnKTtcblxuICAgIGNvbnN0IHRvZG9EaXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGl2SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9EaXZIZWFkZXInKTtcbiAgICB0b2RvRGl2SGVhZGVyLmlubmVyVGV4dCA9IFwiVG9kb3M6XCI7XG5cbiAgICBjb25zdCBhbGxUb2Rvc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFsbFRvZG9zQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FsbFRvZG9zQnV0dG9uJyk7XG4gICAgYWxsVG9kb3NCdXR0b24uaW5uZXJUZXh0ID0gXCJBbGwgVG9kb3NcIjtcblxuICAgIHRvZG9EaXZIZWFkZXIuYXBwZW5kKGFsbFRvZG9zQnV0dG9uKTtcblxuICAgIGNvbnN0IHRvZG9EYXRhSGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0RhdGFIZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGFIZWFkZXJEaXYnKTtcblxuICAgIGNvbnN0IHRvZG9OYW1lRGF0YUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9OYW1lRGF0YUhlYWRlci5jbGFzc0xpc3QuYWRkKCd0b2RvTmFtZURhdGFIZWFkZXInKTtcbiAgICB0b2RvTmFtZURhdGFIZWFkZXIuaW5uZXJUZXh0ID0gXCJOQU1FXCI7XG5cbiAgICBjb25zdCB0b2RvRGF0ZURhdGFIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGF0ZURhdGFIZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGVEYXRhSGVhZGVyJyk7XG4gICAgdG9kb0RhdGVEYXRhSGVhZGVyLmlubmVyVGV4dCA9IFwiREFURVwiO1xuXG4gICAgY29uc3QgdG9kb1RpbWVEYXRhSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb1RpbWVEYXRhSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9UaW1lRGF0YUhlYWRlcicpO1xuICAgIHRvZG9UaW1lRGF0YUhlYWRlci5pbm5lclRleHQgPSBcIlRJTUVcIjtcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eURhdGFIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvUHJpb3JpdHlEYXRhSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9Qcmlvcml0eURhdGFIZWFkZXInKTtcbiAgICB0b2RvUHJpb3JpdHlEYXRhSGVhZGVyLmlubmVyVGV4dCA9IFwiUFJJT1JJVFlcIjtcblxuICAgIGNvbnN0IHRvZG9Ob3RlRGF0YUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Ob3RlRGF0YUhlYWRlci5jbGFzc0xpc3QuYWRkKCd0b2RvTm90ZURhdGFIZWFkZXInKTtcbiAgICB0b2RvTm90ZURhdGFIZWFkZXIuaW5uZXJUZXh0ID0gXCJOT1RFXCI7XG5cbiAgICBjb25zdCB0b2RvRnVuY3Rpb25zRGF0YUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9GdW5jdGlvbnNEYXRhSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9GdW5jdGlvbnNEYXRhSGVhZGVyJyk7XG4gICAgdG9kb0Z1bmN0aW9uc0RhdGFIZWFkZXIuaW5uZXJUZXh0ID0gXCJGVU5DVElPTlNcIjtcblxuICAgIHRvZG9EYXRhSGVhZGVyRGl2LmFwcGVuZCh0b2RvTmFtZURhdGFIZWFkZXIsIHRvZG9EYXRlRGF0YUhlYWRlciwgdG9kb1RpbWVEYXRhSGVhZGVyLCB0b2RvUHJpb3JpdHlEYXRhSGVhZGVyLCB0b2RvTm90ZURhdGFIZWFkZXIsIHRvZG9GdW5jdGlvbnNEYXRhSGVhZGVyKTtcblxuICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb3NDb250YWluZXInKTtcblxuICAgIGNvbnN0IHRvZG9PcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb09wdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb09wdGlvbnNDb250YWluZXInKTtcblxuXG5cbiAgICB0b2Rvc0Rpdi5hcHBlbmQodG9kb0RpdkhlYWRlciwgdG9kb0RhdGFIZWFkZXJEaXYsIHRvZG9zQ29udGFpbmVyLCB0b2RvT3B0aW9uc0NvbnRhaW5lcik7XG5cbiAgICBib2R5LmFwcGVuZChwcm9qZWN0c0RpdiwgdG9kb3NEaXYpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHN3YXBFZGl0T3JBZGRUb2RvRm9ybVRvQnV0dG9uKGUpO1xuICAgICAgICByZW1vdmVEcm9wZG93bihlKTtcbiAgICAgICAgcmVtb3ZlTW92ZVRvZG9Ecm9wZG93bihlKTtcbiAgICB9KTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQm9keSIsIlxuY29uc3QgY3JlYXRlRWRpdFByb2plY3REcm9wZG93bkNvbnRlbnRzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJvcGRvd25Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duQ29udGVudCcpO1xuXG4gICAgY29uc3QgZWRpdFByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVkaXRQcm9qZWN0TmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBlZGl0UHJvamVjdE5hbWVJbnB1dC5pZCA9IFwiZWRpdFByb2plY3ROYW1lXCI7XG5cbiAgICBjb25zdCBlZGl0UHJvamVjdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xhYmVsJyk7XG4gICAgZWRpdFByb2plY3ROYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJlZGl0UHJvamVjdE5hbWVcIik7XG4gICAgZWRpdFByb2plY3ROYW1lTGFiZWwuaW5uZXJIVE1MID0gXCJOZXcgcHJvamVjdCBuYW1lOlwiO1xuXG4gICAgY29uc3QgY29uZmlybU5ld05hbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25maXJtTmV3TmFtZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb25maXJtTmV3TmFtZUJ1dHRvbicpO1xuICAgIGNvbmZpcm1OZXdOYW1lQnV0dG9uLnRleHRDb250ZW50ID0gJ09LJztcblxuICAgIGRyb3Bkb3duQ29udGVudC5hcHBlbmQoZWRpdFByb2plY3ROYW1lTGFiZWwsIGVkaXRQcm9qZWN0TmFtZUlucHV0LCBjb25maXJtTmV3TmFtZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gW1xuICAgICAgICBkcm9wZG93bkNvbnRlbnRcbiAgICBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWRpdFByb2plY3REcm9wZG93bkNvbnRlbnRzIiwiaW1wb3J0IGVkaXRUb2RvQnV0dG9uc0V2ZW50cyBmcm9tICcuLi9mdW5jdGlvbnMvZWRpdC10b2RvLWZvcm0tZXZlbnRzLmpzJztcblxuY29uc3QgZWRpdFRvZG9Db250YWluZXJDb250ZW50cyA9IChcbiAgICBwYXNzZWRUYXJnZXRQcm9qZWN0SW5kZXgsXG4gICAgcGFzc2VkVG9kb0luZGV4LFxuICAgIHRvZG9OYW1lRGl2Q29udGVudCxcbiAgICB0b2RvRGF0ZURpdkNvbnRlbnQsXG4gICAgdG9kb1RpbWVEaXZDb250ZW50LFxuICAgIHRvZG9Ob3Rlc0RpdkNvbnRlbnRcbikgPT4ge1xuICAgIGxldCAgdGFyZ2V0UHJvamVjdEluZGV4ID0gcGFzc2VkVGFyZ2V0UHJvamVjdEluZGV4O1xuICAgIGxldCAgdG9kb0luZGV4ID0gcGFzc2VkVG9kb0luZGV4O1xuXG4gICAgY29uc3QgdG9kb09wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb09wdGlvbnNDb250YWluZXInKTtcbiAgICB0b2RvT3B0aW9uc0NvbnRhaW5lci5pbm5lckhUTUw9IFwiXCI7XG5cbiAgICBjb25zdCB0b2RvTmFtZUlucHV0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb05hbWVJbnB1dFRleHQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRvZG9OYW1lSW5wdXRUZXh0LmlkID0gXCJ0b2RvTmFtZUlucHV0VGV4dFwiO1xuICAgIHRvZG9OYW1lSW5wdXRUZXh0LnZhbHVlID0gdG9kb05hbWVEaXZDb250ZW50O1xuXG4gICAgY29uc3QgdG9kb05hbWVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvTmFtZUlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJ0b2RvTmFtZUlucHV0VGV4dFwiKTtcbiAgICB0b2RvTmFtZUlucHV0TGFiZWwuaW5uZXJIVE1MID0gXCJUb0RvIG5hbWU6XCI7XG5cbiAgICBjb25zdCB0b2RvRGF0ZVBpY2tlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvRGF0ZVBpY2tlckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb0RhdGVQaWNrZXJJbnB1dFwiKTtcbiAgICB0b2RvRGF0ZVBpY2tlckxhYmVsLmlubmVySFRNTCA9IFwiRGF0ZTpcIjtcblxuICAgIGNvbnN0IHRvZG9EYXRlUGlja2VySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9EYXRlUGlja2VySW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIHRvZG9EYXRlUGlja2VySW5wdXQuaWQgPSBcInRvZG9EYXRlUGlja2VySW5wdXRcIjtcbiAgICB0b2RvRGF0ZVBpY2tlcklucHV0LnZhbHVlID0gdG9kb0RhdGVEaXZDb250ZW50O1xuXG5cbiAgICBjb25zdCB0b2RvVGltZVBpY2tlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvVGltZVBpY2tlckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb1RpbWVQaWNrZXJJbnB1dFwiKTtcbiAgICB0b2RvVGltZVBpY2tlckxhYmVsLmlubmVySFRNTCA9IFwiVGltZTpcIjtcblxuICAgIGNvbnN0IHRvZG9UaW1lUGlja2VySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9UaW1lUGlja2VySW5wdXQudHlwZSA9IFwidGltZVwiO1xuICAgIHRvZG9UaW1lUGlja2VySW5wdXQuaWQgPSBcInRvZG9UaW1lUGlja2VySW5wdXRcIjtcbiAgICB0b2RvVGltZVBpY2tlcklucHV0LnZhbHVlID0gdG9kb1RpbWVEaXZDb250ZW50O1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5U2VsZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMYWJlbCcpO1xuICAgIHRvZG9Qcmlvcml0eVNlbGVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb1ByaW9yaXR5U2VsZWN0XCIpO1xuICAgIHRvZG9Qcmlvcml0eVNlbGVjdExhYmVsLmlubmVySFRNTCA9IFwiUHJpb3JpdHk6XCI7XG5cbiAgICBjb25zdCB0b2RvUHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICB0b2RvUHJpb3JpdHlTZWxlY3QuaWQgPSBcInRvZG9Qcmlvcml0eVNlbGVjdFwiO1xuXG4gICAgbGV0IHByaW9yaXR5QXJyYXkgPSBbJ0hpZ2gnLCAnTWVkaXVtJywgJ0xvdyddO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmlvcml0eUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHByaW9yaXR5LnZhbHVlID0gcHJpb3JpdHlBcnJheVtpXTtcbiAgICAgICAgcHJpb3JpdHkudGV4dCA9IHByaW9yaXR5QXJyYXlbaV07XG4gICAgICAgIHRvZG9Qcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCB0b2RvTm90ZXNJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvTm90ZXNJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb05vdGVzSW5wdXRMYWJlbFwiKTtcbiAgICB0b2RvTm90ZXNJbnB1dExhYmVsLmlubmVySFRNTCA9IFwiTm90ZXM6XCI7XG5cbiAgICBjb25zdCB0b2RvTm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb05vdGVzSW5wdXQudHlwZSA9IFwidGV4dGFyZWFcIjtcbiAgICB0b2RvTm90ZXNJbnB1dC5pZCA9IFwidG9kb05vdGVzSW5wdXRcIjtcbiAgICB0b2RvTm90ZXNJbnB1dC52YWx1ZSA9IHRvZG9Ob3Rlc0RpdkNvbnRlbnQ7XG5cbiAgICBjb25zdCB0b2RvRWRpdENvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvRWRpdENvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZChcInRvZG9FZGl0Q29uZmlybUJ0blwiKTtcbiAgICB0b2RvRWRpdENvbmZpcm1CdG4uaW5uZXJUZXh0PSBcIlZcIjtcblxuICAgIGNvbnN0IHRvZG9DcmVhdGVDYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvQ3JlYXRlQ2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvQ3JlYXRlQ2FuY2VsQnRuXCIpO1xuICAgIHRvZG9DcmVhdGVDYW5jZWxCdG4uaW5uZXJUZXh0PSBcIlhcIjtcblxuICAgIGNvbnN0IHRvZG9DcmVhdGVEaXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvQ3JlYXRlRGl2SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9FZGl0RGl2SGVhZGVyJyk7XG4gICAgdG9kb0NyZWF0ZURpdkhlYWRlci50ZXh0Q29udGVudCA9ICdFRElUIFRPRE8nO1xuXG4gICAgdG9kb09wdGlvbnNDb250YWluZXIuYXBwZW5kKFxuICAgICAgICB0b2RvQ3JlYXRlRGl2SGVhZGVyLFxuICAgICAgICB0b2RvTmFtZUlucHV0TGFiZWwsIFxuICAgICAgICB0b2RvTmFtZUlucHV0VGV4dCAsXG4gICAgICAgIHRvZG9EYXRlUGlja2VyTGFiZWwsXG4gICAgICAgIHRvZG9EYXRlUGlja2VySW5wdXQsXG4gICAgICAgIHRvZG9UaW1lUGlja2VyTGFiZWwsXG4gICAgICAgIHRvZG9UaW1lUGlja2VySW5wdXQsXG4gICAgICAgIHRvZG9Qcmlvcml0eVNlbGVjdExhYmVsLFxuICAgICAgICB0b2RvUHJpb3JpdHlTZWxlY3QsXG4gICAgICAgIHRvZG9Ob3Rlc0lucHV0TGFiZWwsXG4gICAgICAgIHRvZG9Ob3Rlc0lucHV0LFxuICAgICAgICB0b2RvRWRpdENvbmZpcm1CdG4sXG4gICAgICAgIHRvZG9DcmVhdGVDYW5jZWxCdG5cbiAgICApO1xuXG4gICAgZWRpdFRvZG9CdXR0b25zRXZlbnRzKHRhcmdldFByb2plY3RJbmRleCwgdG9kb0luZGV4KTtcbn07XG5leHBvcnQgZGVmYXVsdCBlZGl0VG9kb0NvbnRhaW5lckNvbnRlbnRzIiwiaW1wb3J0IGdpdExvZ28gZnJvbSAnLi4vaWNvbnMvZ2l0TG9nby5wbmcnO1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpXG4gICAgXG4gICAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVEaXYuY2xhc3NMaXN0LmFkZCgnbmFtZURpdicpO1xuICAgIG5hbWVEaXYuaW5uZXJUZXh0ID0gJ01hY2llaiBEYWJyb3dza2knXG5cbiAgICBjb25zdCBnaXRMb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2l0TG9nb0Rpdi5jbGFzc0xpc3QuYWRkKCdnaXRMb2dvRGl2Jyk7XG4gICAgY29uc3QgZ2l0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGdpdEljb24uY2xhc3NMaXN0LmFkZCgnZ2l0SWNvbicpXG4gICAgZ2l0SWNvbi5zcmMgPSBnaXRMb2dvO1xuXG4gICAgZ2l0TG9nb0Rpdi5hcHBlbmQoZ2l0SWNvbik7XG5cbiAgICBmb290ZXJEaXYuYXBwZW5kKG5hbWVEaXYsIGdpdExvZ29EaXYpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXIiLCJjb25zdCBjcmVhdGVIZWFkID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICBsb2dvLmlubmVyVGV4dCA9IFwiVE9ETyAtIEFwcCB0byBub3QgZm9yZ2V0XCI7XG5cbiAgICBjb25zdCBub3RpZmljYXRpb25EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm90aWZpY2F0aW9uRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdub3RpZmljYXRpb25EYXRlRGl2Jyk7XG5cbiAgICBjb25zdCBub3RpZmljYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3RpZmljYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnbm90aWZpY2F0aW9uRGl2Jyk7XG4gICAgXG4gICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZGF0ZURpdicpO1xuXG4gICAgbm90aWZpY2F0aW9uRGF0ZURpdi5hcHBlbmQobm90aWZpY2F0aW9uRGl2LCBkYXRlRGl2KTtcblxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZCcpO1xuICAgIGhlYWQuYXBwZW5kKGxvZ28sIG5vdGlmaWNhdGlvbkRhdGVEaXYpO1xuXG59O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZCIsImNvbnN0IGhlYWRlckJvZHlGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmJvZHk7XG5cbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZC5jbGFzc0xpc3QuYWRkKCdoZWFkJyk7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5Jyk7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgICBtYWluRGl2LmFwcGVuZChoZWFkLCBib2R5LCBmb290ZXIpO1xuXG59O1xuZXhwb3J0IGRlZmF1bHQgaGVhZGVyQm9keUZvb3RlciIsImltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi4vZnVuY3Rpb25zL3Byb2plY3QtbWVuYWdlci5qc1wiO1xuaW1wb3J0IGRvbVNob3dUb2RvIGZyb20gXCIuL0RPTS1zaG93LVRPRE8uanNcIjtcblxuY29uc3QgcmVmcmVzaFRvZG9zQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc0NvbnRhaW5lcicpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGV0IHRhcmdldFByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldCcpLmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgIGxldCB0YXJnZXRQcm9qZWN0SW5kZXggPSAwO1xuICAgIGlmKHRhcmdldFByb2plY3ROYW1lID09PSBcIkhPTUVcIikge1xuICAgICAgICBwcm9qZWN0TWVuYWdlci5nZXRIb21lVG9kb3NBcnJheSgpLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBkb21TaG93VG9kbyh0b2RvLCBpbmRleCk7XG4gICAgICAgIH0pXG4gICAgfWVsc2Uge1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgPT09IHRhcmdldFByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0UHJvamVjdEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpW3RhcmdldFByb2plY3RJbmRleF0uZ2V0VG9kb3NBcnJheSgpLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBkb21TaG93VG9kbyh0b2RvLCBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCByZWZyZXNoVG9kb3NDb250YWluZXIiLCJpbXBvcnQgdG9kb0RpdnNFdmVudHMgZnJvbSBcIi4uL2Z1bmN0aW9ucy90b2RvRGl2c0V2ZW50c1wiO1xuXG5jb25zdCBkb21TaG93VG9kbyA9ICh0b2RvLCBpbmRleCkgPT4ge1xuICAgIGxldCB0b2RvSW5kZXggPSBpbmRleDtcbiAgICBjb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc0NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgndG9kb0RpdicsYCR7dG9kby5nZXRUb2RvUHJpb3JpdHkoKX1gICk7XG5cblxuICAgIGNvbnN0IHRvZG9OYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb05hbWVEaXYuY2xhc3NMaXN0LmFkZCgndG9kb05hbWVEaXYnKTtcbiAgICB0b2RvTmFtZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VG9kb05hbWUoKTtcblxuICAgIGNvbnN0IHRvZG9EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0RhdGVEaXYuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGVEaXYnKTtcbiAgICB0b2RvRGF0ZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VG9kb0RhdGUoKTtcblxuICAgIGNvbnN0IHRvZG9UaW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb1RpbWVEaXYuY2xhc3NMaXN0LmFkZCgndG9kb1RpbWVEaXYnKTtcbiAgICB0b2RvVGltZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZ2V0dG9kb1RpbWUoKTtcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Qcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvVGltZURpdicpO1xuICAgIHRvZG9Qcmlvcml0eURpdi50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VG9kb1ByaW9yaXR5KCk7XG5cbiAgICBjb25zdCB0b2RvTm90ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvTm90ZXNEaXYuY2xhc3NMaXN0LmFkZCgndG9kb1RpbWVEaXYnKTtcbiAgICB0b2RvTm90ZXNEaXYudGV4dENvbnRlbnQgPSB0b2RvLmdldFRvZG9Ob3RlcygpO1xuXG4gICAgY29uc3QgbW92ZVRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtb3ZlVG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdtb3ZlVG9kb0J1dHRvbicpO1xuICAgIG1vdmVUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gXCJNb3ZlXCI7XG5cbiAgICBjb25zdCBlZGl0VG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRUb2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRUb2RvQnV0dG9uJyk7XG4gICAgZWRpdFRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIkVcIjtcblxuICAgIGNvbnN0IG1vdmVUb2RvRHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb3ZlVG9kb0Ryb3Bkb3duLmNsYXNzTGlzdC5hZGQoJ21vdmVUb2RvRHJvcGRvd24nKTtcblxuICAgIG1vdmVUb2RvRHJvcGRvd24uYXBwZW5kKG1vdmVUb2RvQnV0dG9uKTtcblxuICAgIGNvbnN0IGRlbGV0ZVRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVUb2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVRvZG9CdXR0b24nKTtcbiAgICBkZWxldGVUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XG5cbiAgICBcblxuXG4gICAgdG9kb0Rpdi5hcHBlbmQodG9kb05hbWVEaXYsIHRvZG9EYXRlRGl2LCB0b2RvVGltZURpdiwgdG9kb1ByaW9yaXR5RGl2LCB0b2RvTm90ZXNEaXYsIG1vdmVUb2RvRHJvcGRvd24sIGVkaXRUb2RvQnV0dG9uLCBkZWxldGVUb2RvQnV0dG9uKTtcbiAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcbiAgICB0b2RvRGl2c0V2ZW50cygpLnRvZG9UYXJnZXRFdmVudCh0b2RvRGl2KTtcbiAgICB0b2RvRGl2c0V2ZW50cygpLnRvZG9EZWxldGVCdXR0b25FdmVudChkZWxldGVUb2RvQnV0dG9uLCB0b2RvSW5kZXgpO1xuICAgIHRvZG9EaXZzRXZlbnRzKCkudG9kb0VkaXRCdXR0b25FdmVudChlZGl0VG9kb0J1dHRvbiwgdG9kb0luZGV4LCB0b2RvLmdldFRvZG9OYW1lKCksIHRvZG8uZ2V0VG9kb0RhdGUoKSwgdG9kby5nZXR0b2RvVGltZSgpLCB0b2RvLmdldFRvZG9Ob3RlcygpKTtcbiAgICB0b2RvRGl2c0V2ZW50cygpLnRvZG9Nb3ZlQnV0dG9uRXZlbnQobW92ZVRvZG9CdXR0b24sIHRvZG9JbmRleCwgdG9kb0Rpdik7XG59O1xuZXhwb3J0IGRlZmF1bHQgZG9tU2hvd1RvZG8iLCJpbXBvcnQgcHJvamVjdE1lbmFnZXIgZnJvbSBcIi4uL2Z1bmN0aW9ucy9wcm9qZWN0LW1lbmFnZXIuanNcIjtcbmltcG9ydCByZWZyZXNoVG9kb3NDb250YWluZXIgZnJvbSBcIi4vRE9NLXJlZnJlc2gtVE9ET1MtY29udGFpbmVyXCI7XG5cbmNvbnN0IG1vdmVUb2RvRHJvcGRvd25Db250ZW50cyA9ICh0YXJnZXRQcm9qZWN0TmFtZSwgdG9kb0luZGV4KSA9PiB7XG4gICAgXG4gICAgY29uc3QgbW92ZVRvZG9Ecm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXRUb2RvJykucXVlcnlTZWxlY3RvcignLm1vdmVUb2RvRHJvcGRvd24nKTtcbiAgICBjb25zdCBtb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW92ZVRvZG9Qcm9qZWN0c0Ryb3Bkb3duQ29udGFpbmVyJyk7XG4gICAgY29uc3QgbW92ZVRvZG9Qcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vdmVUb2RvUHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnbW92ZVRvZG9Qcm9qZWN0cycpO1xuXG4gICAgXG4gICAgaWYgKHRhcmdldFByb2plY3ROYW1lID09PSBcIkhPTUVcIikge1xuICAgICAgICBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KCkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ21vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2Jyk7XG4gICAgICAgICAgICBtb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgbW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCB0b2RvVG9Nb3ZlID0gcHJvamVjdE1lbmFnZXIuZ2V0SG9tZVRvZG9zQXJyYXkoKS5zcGxpY2UodG9kb0luZGV4LCAxKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmFkZFRvVG9kb3NBcnJheSh0b2RvVG9Nb3ZlWzBdKTsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmVmcmVzaFRvZG9zQ29udGFpbmVyKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBtb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXIuYXBwZW5kKG1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2KTtcblxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIG1vdmVUb2RvUHJvamVjdHMuYXBwZW5kKG1vdmVUb2RvUHJvamVjdHNEcm9wZG93bkNvbnRhaW5lcik7XG4gICAgICAgIG1vdmVUb2RvRHJvcGRvd24uYXBwZW5kKG1vdmVUb2RvUHJvamVjdHMpO1xuICAgIH1cbiAgICBlbHNlIHtcblxuICAgICAgICBsZXQgdHJhZ2V0UHJvamVjdEluZGV4ID0gMDtcbiAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0UHJvamVjdE5hbWUgPT0gcHJvamVjdC5nZXROYW1lKCkpIHtcbiAgICAgICAgICAgICAgICB0cmFnZXRQcm9qZWN0SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb3ZlVG9kb0Ryb3Bkb3duSG9tZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnbW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0Jyk7XG4gICAgICAgIG1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdC50ZXh0Q29udGVudCA9ICdIT01FJztcbiAgICAgICAgbW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdG9kb1RvTW92ZSA9IHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKVt0cmFnZXRQcm9qZWN0SW5kZXhdLmdldFRvZG9zQXJyYXkoKS5zcGxpY2UodG9kb0luZGV4LCAxKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIucHVzaFRvSG9tZVRvZG9zQXJyYXkodG9kb1RvTW92ZVswXSk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmVmcmVzaFRvZG9zQ29udGFpbmVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgbW92ZVRvZG9Qcm9qZWN0c0Ryb3Bkb3duQ29udGFpbmVyLmFwcGVuZChtb3ZlVG9kb0Ryb3Bkb3duSG9tZVByb2plY3QpO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0YXJnZXRQcm9qZWN0TmFtZSAhPT0gcHJvamVjdC5nZXROYW1lKCkpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnbW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYnKTtcbiAgICAgICAgICAgICAgICBtb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgICAgIG1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVG9Nb3ZlID0gcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpW3RyYWdldFByb2plY3RJbmRleF0uZ2V0VG9kb3NBcnJheSgpLnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuYWRkVG9Ub2Rvc0FycmF5KHRvZG9Ub01vdmVbMF0pO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICByZWZyZXNoVG9kb3NDb250YWluZXIoKTtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbW92ZVRvZG9Qcm9qZWN0c0Ryb3Bkb3duQ29udGFpbmVyLmFwcGVuZChtb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgbW92ZVRvZG9Qcm9qZWN0cy5hcHBlbmQobW92ZVRvZG9Qcm9qZWN0c0Ryb3Bkb3duQ29udGFpbmVyKTtcbiAgICAgICAgbW92ZVRvZG9Ecm9wZG93bi5hcHBlbmQobW92ZVRvZG9Qcm9qZWN0cyk7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vdmVUb2RvRHJvcGRvd25Db250ZW50cyIsImltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi4vZnVuY3Rpb25zL3Byb2plY3QtbWVuYWdlci5qc1wiO1xuaW1wb3J0IGFkZFByb2plY3REaXZFdmVudCBmcm9tIFwiLi4vZnVuY3Rpb25zL2FkZC1wcm9qZWN0LWRpdnMtZXZlbnRcIjtcbmltcG9ydCByZWZyZXNoVG9kb3NDb250YWluZXIgZnJvbSBcIi4vRE9NLXJlZnJlc2gtVE9ET1MtY29udGFpbmVyXCI7XG5sZXQgc2hvd1Byb2plY3RzID0gKCkgPT4geyAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c0NvbnRhaW5lcicpLmlubmVySFRNTD0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZVByb2plY3REaXYnKS5jbGFzc0xpc3QuYWRkKCd0YXJnZXQnKTtcbiAgICByZWZyZXNoVG9kb3NDb250YWluZXIoKTtcbiAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0RGl2Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmFtZScpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gYCR7cHJvamVjdC5nZXROYW1lKCl9YDtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24nKTtcblxuICAgICAgICAgICAgY29uc3QgZWRpdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRQcm9qZWN0QnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZHJvcGRvd24uYXBwZW5kKGVkaXRQcm9qZWN0QnV0dG9uKTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVQcm9qZWN0QnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgYCR7cHJvamVjdC5nZXROYW1lKCl9YClcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RCdXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RCdXR0b25zQ29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIHByb2plY3RCdXR0b25zQ29udGFpbmVyLmFwcGVuZChkcm9wZG93biwgZGVsZXRlUHJvamVjdEJ1dHRvbik7XG5cblxuICAgICAgICAgICAgcHJvamVjdERpdi5hcHBlbmQocHJvamVjdE5hbWUsIHByb2plY3RCdXR0b25zQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzQ29udGFpbmVyJykuYXBwZW5kKHByb2plY3REaXYpO1xuICAgICAgICAgICAgYWRkUHJvamVjdERpdkV2ZW50KCkuZGVsZXRlUHJvamVjdEJ1dHRvbihkZWxldGVQcm9qZWN0QnV0dG9uLCBpbmRleCk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0RGl2RXZlbnQoKS5lZGl0UHJvamVjdEJ1dHRvbihlZGl0UHJvamVjdEJ1dHRvbiwgaW5kZXgsIGRyb3Bkb3duKTtcbiAgICAgICAgICAgIGFkZFByb2plY3REaXZFdmVudCgpLnByb2plY3REaXZFdmVudChwcm9qZWN0RGl2KTtcbiAgICAgICAgfSk7XG5cbn07IFxuXG5leHBvcnQgZGVmYXVsdCBzaG93UHJvamVjdHMiLCJpbXBvcnQgc2hvd1Byb2plY3RzIGZyb20gXCIuL0RPTS1zaG93LXByb2plY3RzLmpzXCJcbmZ1bmN0aW9uIHJlbW92ZURyb3Bkb3duKGV2ZW50KSB7XG4gICAgICAgIFxuICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bkNvbnRlbnQnKSl7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoYC5lZGl0UHJvamVjdEJ1dHRvbmApKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmRyb3Bkb3duQ29udGVudCcpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnI2VkaXRQcm9qZWN0TmFtZScpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnbGFiZWwnKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5jb25maXJtTmV3TmFtZUJ1dHRvbicpKVxuICAgICAgICAgICApIHsgIFxuICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duQ29udGVudCcpO1xuICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgc2hvd1Byb2plY3RzKCk7XG4gICAgICAgICAgICAgfTtcbiAgICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IHJlbW92ZURyb3Bkb3duIiwiZnVuY3Rpb24gcmVtb3ZlTW92ZVRvZG9Ecm9wZG93bihldmVudCkge1xuICAgICAgICBcbiAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92ZVRvZG9Qcm9qZWN0cycpKXtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcyhgLm1vdmVUb2RvUHJvamVjdHNEcm9wZG93bkNvbnRhaW5lcmApKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLm1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdCcpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLm1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2JykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcubW92ZVRvZG9CdXR0b24nKSlcbiAgICAgICAgICAgKSB7ICBcbiAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUb2RvUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92ZVRvZG9Qcm9qZWN0cycpO1xuICAgICAgICAgICAgICAgbW92ZVRvZG9Qcm9qZWN0cy5yZW1vdmUoKTtcbiAgICAgICAgICAgICB9O1xuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlTW92ZVRvZG9Ecm9wZG93biIsImltcG9ydCBjcmVhdGVBZGRUT0RPdEJ0biBmcm9tIFwiLi9ET00tYWRkVG9kby1jcmVhdGUtYWRkQnRuLmpzXCI7XG5pbXBvcnQgYWRkVE9ET0J1dHRvbkV2ZW50IGZyb20gXCIuLi9mdW5jdGlvbnMvYWRkLXRvZG8tYnV0dG9uLWV2ZW50LmpzXCI7XG5mdW5jdGlvbiBzd2FwRWRpdE9yQWRkVG9kb0Zvcm1Ub0J1dHRvbihldmVudCkge1xuICAgICAgICBcbiAgICBpZiAoKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmFkZFRPRE9CdXR0b24nKSAmJiAhZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5lZGl0VG9kb0J1dHRvbicpKSAmJiAoKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9DcmVhdGVEaXZIZWFkZXInKSkgfHwgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9FZGl0RGl2SGVhZGVyJykpKSl7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy50b2RvT3B0aW9uc0NvbnRhaW5lcicpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLnRvZG9DcmVhdGVEaXZIZWFkZXInKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJ2xhYmVsJykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcjdG9kb05hbWVJbnB1dFRleHQnKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJyN0b2RvRGF0ZVBpY2tlcklucHV0JykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcjdG9kb1RpbWVQaWNrZXJJbnB1dCcpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnI3RvZG9Qcmlvcml0eVNlbGVjdCcpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnb3B0aW9uJykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcjdG9kb05vdGVzSW5wdXQnKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy50b2RvQ3JlYXRlQ29uZmlybUJ0bicpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLnRvZG9DcmVhdGVDYW5jZWxCdG4nKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy50b2RvRWRpdERpdkhlYWRlcicpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLnRvZG9FZGl0Q29uZmlybUJ0bicpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmFkZFRPRE9CdXR0b24nKSlcblxuICAgICAgICAgICApIHsgXG4gICAgICAgICAgICAgICAgY3JlYXRlQWRkVE9ET3RCdG4oKTtcbiAgICAgICAgICAgICAgICBhZGRUT0RPQnV0dG9uRXZlbnQoKTtcbiAgICAgICAgICAgICB9OyBcbiAgICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IHN3YXBFZGl0T3JBZGRUb2RvRm9ybVRvQnV0dG9uXG4iLCJjb25zdCB0b2RvVGFzayA9IChuYW1lLCBkYXRlLCB0aW1lLCBwcmlvcml0eSwgbm90ZXMpID0+IHtcbiAgICBsZXQgdG9kb05hbWUgPSBuYW1lO1xuICAgIGxldCB0b2RvRGF0ZSA9IGRhdGU7XG4gICAgbGV0IHRvZG9UaW1lID0gdGltZTtcbiAgICBsZXQgdG9kb1ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgbGV0IHRvZG9Ob3RlcyA9IG5vdGVzO1xuICAgIGxldCB0b2RvU3RhdHVzID0gZmFsc2U7XG4gICAgXG4gICAgLy8gR2V0IGZ1bmN0aW9ucyByZXR1cm5pbmcgdmFyaWFibGUgY29udGVudHNcbiAgICBjb25zdCBnZXRUb2RvTmFtZSA9ICgpID0+IHRvZG9OYW1lO1xuICAgIGNvbnN0IGdldFRvZG9EYXRlID0gKCkgPT4gdG9kb0RhdGU7XG4gICAgY29uc3QgZ2V0dG9kb1RpbWUgPSAoKSA9PiB0b2RvVGltZTtcbiAgICBjb25zdCBnZXRUb2RvUHJpb3JpdHkgPSAoKSA9PiB0b2RvUHJpb3JpdHk7XG4gICAgY29uc3QgZ2V0VG9kb05vdGVzID0gKCkgPT4gdG9kb05vdGVzO1xuICAgIGNvbnN0IGdldFRvZG9TdGF0dXMgPSAoKSA9PiB0b2RvU3RhdHVzO1xuICAgIFxuICAgIC8vIFNldCBmdW5jdGlvbnMgdG8gZWRpdCB2YXJpYWJsZSBjb250ZW50c1xuICAgIGNvbnN0IHNldFRvZG9OYW1lID0gKHN0cmluZykgPT4ge1xuICAgICAgICB0b2RvTmFtZSA9IHN0cmluZ1xuICAgIH07XG4gICAgY29uc3Qgc2V0VG9kb0RhdGUgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIHRvZG9EYXRlID0gc3RyaW5nXG4gICAgfTtcbiAgICBjb25zdCBzZXRUb2RvVGltZSA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgdG9kb1RpbWUgPSBzdHJpbmc7XG4gICAgfTtcbiAgICBjb25zdCBzZXRUb2RvUHJpb3JpdHkgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIHRvZG9Qcmlvcml0eSA9IHN0cmluZztcbiAgICB9O1xuICAgIGNvbnN0IHNldFRvZG9Ob3RlcyA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgdG9kb05vdGVzID0gc3RyaW5nO1xuICAgIH07XG4gICAgY29uc3Qgc2V0VG9kb1N0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRvZG9TdGF0dXMgPyB0b2RvU3RhdHVzID0gZmFsc2UgOiB0b2RvU3RhdHVzID0gdHJ1ZTtcbiAgICB9ICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFRvZG9OYW1lLFxuICAgICAgICBnZXRUb2RvRGF0ZSxcbiAgICAgICAgZ2V0dG9kb1RpbWUsXG4gICAgICAgIGdldFRvZG9Qcmlvcml0eSxcbiAgICAgICAgZ2V0VG9kb05vdGVzLFxuICAgICAgICBnZXRUb2RvU3RhdHVzLFxuICAgICAgICBzZXRUb2RvTmFtZSxcbiAgICAgICAgc2V0VG9kb0RhdGUsXG4gICAgICAgIHNldFRvZG9UaW1lLFxuICAgICAgICBzZXRUb2RvUHJpb3JpdHksXG4gICAgICAgIHNldFRvZG9Ob3RlcyxcbiAgICAgICAgc2V0VG9kb1N0YXR1cyxcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgdG9kb1Rhc2s7IiwiaW1wb3J0IHN3YXBDb250ZW50cyBmcm9tICcuLi9kb20tZnVuY3Rpb25zL0RPTS1hZGRQcm9qZWN0LXN3YXAtQnRuLXRvLUZvcm0uanMnO1xuY29uc3QgYWRkUHJvamVjdEJ1dHRvbkV2ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdEJ1dHRvbicpO1xuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2FwQ29udGVudHMpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGFkZFByb2plY3RCdXR0b25FdmVudCIsImltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi9wcm9qZWN0LW1lbmFnZXIuanNcIjtcbmltcG9ydCBwcm9qZWN0Q3JlYXRvciBmcm9tIFwiLi9wcm9qZWN0LWNyZWF0b3IuanNcIjtcbmltcG9ydCB0b2RvVGFzayBmcm9tIFwiLi9UT0RPLWNyZWF0b3IuanNcIjtcbmltcG9ydCBjcmVhdGVBZGRUT0RPdEJ0biBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tYWRkVG9kby1jcmVhdGUtYWRkQnRuLmpzXCI7XG5pbXBvcnQgYWRkVE9ET0J1dHRvbkV2ZW50IGZyb20gXCIuL2FkZC10b2RvLWJ1dHRvbi1ldmVudC5qc1wiO1xuaW1wb3J0IGRvbVNob3dUb2RvIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1zaG93LVRPRE8uanNcIjtcbmltcG9ydCByZWZyZXNoVG9kb3NDb250YWluZXIgZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLXJlZnJlc2gtVE9ET1MtY29udGFpbmVyXCJcbmltcG9ydCBzaG93UHJvamVjdHMgZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLXNob3ctcHJvamVjdHMuanNcIlxuaW1wb3J0IGNyZWF0ZUVkaXRQcm9qZWN0RHJvcGRvd25Db250ZW50cyBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tY3JlYXRlLWVkaXQtcHJvamVjdC1kcm9wZG93bi1jb250ZW50cy5qc1wiXG5cblxuXG5jb25zdCBhZGRQcm9qZWN0RGl2RXZlbnQgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gKGRlbGV0ZUJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xuXG4gICAgICAgICAgICBwcm9qZWN0TWVuYWdlci5yZW1vdmVQcm9qZWN0KGluZGV4KTtcbiAgICAgICAgICAgIHNob3dQcm9qZWN0cygpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG5cbiAgICBjb25zdCBlZGl0UHJvamVjdEJ1dHRvbiA9IChlZGl0QnV0dG9uLCBpbmRleCwgZHJvcGRvd24pID0+IHtcbiAgICAgICAgXG4gICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bkNvbnRlbnQnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bkNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgZHJvcGRvd24uYXBwZW5kKC4uLmNyZWF0ZUVkaXRQcm9qZWN0RHJvcGRvd25Db250ZW50cygpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlZGl0UHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0UHJvamVjdE5hbWUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtTmV3TmFtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtTmV3TmFtZUJ1dHRvbicpO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1OZXdOYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KClbaW5kZXhdLmVkaXRQcm9qZWN0TmFtZShlZGl0UHJvamVjdE5hbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNob3dQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkcm9wZG93bi5hcHBlbmQoLi4uY3JlYXRlRWRpdFByb2plY3REcm9wZG93bkNvbnRlbnRzKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRQcm9qZWN0TmFtZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1OZXdOYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm1OZXdOYW1lQnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgY29uZmlybU5ld05hbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKVtpbmRleF0uZWRpdFByb2plY3ROYW1lKGVkaXRQcm9qZWN0TmFtZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1Byb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgcHJvamVjdERpdkV2ZW50ID0gKHByb2plY3REaXYsKSA9PiB7XG4gICAgICAgIGNvbnN0IGhvbWVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVQcm9qZWN0RGl2Jyk7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzQXJyYXkgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3REaXYnKV07XG4gICAgICAgICAgICBwcm9qZWN0c0FycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmdldCcpOyBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaG9tZVByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgndGFyZ2V0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3RhcmdldCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZWZyZXNoVG9kb3NDb250YWluZXIoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLFxuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLFxuICAgICAgICBwcm9qZWN0RGl2RXZlbnQsXG4gICAgfVxuXG5cbn07XG5leHBvcnQgZGVmYXVsdCBhZGRQcm9qZWN0RGl2RXZlbnRcblxuIiwiaW1wb3J0IGFkZFByb2plY3RCdXR0b25FdmVudCBmcm9tIFwiLi9hZGQtcHJvamVjdC1idXR0b24tZXZlbnQuanNcIjtcbmltcG9ydCBjcmVhdGVBZGRQcm9qZWN0QnRuIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1hZGRQcm9qZWN0LWNyZWF0ZS1hZGRCdG4uanNcIjtcbmltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi9wcm9qZWN0LW1lbmFnZXIuanNcIjtcbmltcG9ydCBwcm9qZWN0Q3JlYXRvciBmcm9tIFwiLi9wcm9qZWN0LWNyZWF0b3IuanNcIjtcbmltcG9ydCBzaG93UHJvamVjdHMgZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLXNob3ctcHJvamVjdHMuanNcIjtcbmltcG9ydCBkb21TaG93VG9kbyBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tc2hvdy1UT0RPLmpzXCI7XG5cbmNvbnN0IGFkZEV2ZW50RnVuY3Rpb250c1RvRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBkZWNsaW5lQnRuRnVuY3Rpb24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZUNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TmFtZUNhbmNlbEJ0bicpO1xuICAgICAgICBwcm9qZWN0TmFtZUNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZUFkZFByb2plY3RCdG4oKTtcbiAgICAgICAgICAgIGFkZFByb2plY3RCdXR0b25FdmVudCgpO1xuICAgICAgICB9KVxuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjb25maXJtQnRuID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVDb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3ROYW1lQ29uZmlybUJ0bicpO1xuICAgICAgICBwcm9qZWN0TmFtZUNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZUlucHV0VGV4dCcpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RDcmVhdG9yKHByb2plY3ROYW1lSW5wdXRUZXh0KTtcbiAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLnB1c2hUb1Byb2plY3RzQXJyYXkocHJvamVjdCk7ICAgICAgXG4gICAgICAgICAgICBjcmVhdGVBZGRQcm9qZWN0QnRuKCk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0QnV0dG9uRXZlbnQoKTtcbiAgICAgICAgICAgIHNob3dQcm9qZWN0cygpOyBcbiAgICAgICAgfSlcbiAgICB9KSgpO1xuXG59O1xuZXhwb3J0IGRlZmF1bHQgYWRkRXZlbnRGdW5jdGlvbnRzVG9Gb3JtIiwiaW1wb3J0IHN3YXB0b2RvT3B0aW9uc0NvbnRhaW5lckNvbnRlbnRzIGZyb20gJy4uL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFRvZG8tc3dhcC1CdG4tdG8tRm9ybS5qcyc7XG5pbXBvcnQgc3dhcEVkaXRPckFkZFRvZG9Gb3JtVG9CdXR0b24gZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLXdpbmRvdy1saXN0ZW5lci1zd2FwLXRvZG8tZm9ybS5qc1wiXG5jb25zdCBhZGRUT0RPQnV0dG9uRXZlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkVE9ET0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUT0RPQnV0dG9uJyk7XG4gICAgYWRkVE9ET0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3YXB0b2RvT3B0aW9uc0NvbnRhaW5lckNvbnRlbnRzKTtcbn07XG5leHBvcnQgZGVmYXVsdCBhZGRUT0RPQnV0dG9uRXZlbnQiLCJpbXBvcnQgcHJvamVjdE1lbmFnZXIgZnJvbSBcIi4vcHJvamVjdC1tZW5hZ2VyLmpzXCI7XG5pbXBvcnQgcHJvamVjdENyZWF0b3IgZnJvbSBcIi4vcHJvamVjdC1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgdG9kb1Rhc2sgZnJvbSBcIi4vVE9ETy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgY3JlYXRlQWRkVE9ET3RCdG4gZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFRvZG8tY3JlYXRlLWFkZEJ0bi5qc1wiO1xuaW1wb3J0IGFkZFRPRE9CdXR0b25FdmVudCBmcm9tIFwiLi9hZGQtdG9kby1idXR0b24tZXZlbnQuanNcIjtcbmltcG9ydCBuZXdUb2RvIGZyb20gXCIuL2NyZWF0ZS1uZXctdG9kby5qc1wiO1xuaW1wb3J0IHJlZnJlc2hUb2Rvc0NvbnRhaW5lciBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tcmVmcmVzaC1UT0RPUy1jb250YWluZXJcIjtcbmNvbnN0IG5ld1RvZG9CdXR0b25zRXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlY2xpbmVCdG5GdW5jdGlvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9DcmVhdGVDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0NyZWF0ZUNhbmNlbEJ0bicpO1xuICAgICAgICB0b2RvQ3JlYXRlQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY3JlYXRlQWRkVE9ET3RCdG4oKTtcbiAgICAgICAgICAgIGFkZFRPRE9CdXR0b25FdmVudCgpO1xuICAgICAgICB9KVxuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjb25maXJtQnRuID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0NyZWF0ZUNvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0NyZWF0ZUNvbmZpcm1CdG4nKTtcbiAgICAgICAgdG9kb0NyZWF0ZUNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjcmVhdGVUb2RvID0gbmV3VG9kbygpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0JykuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICAgICAgICBpZiAocHJvamVjdE5hbWUgPT09IFwiSE9NRVwiKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIucHVzaFRvSG9tZVRvZG9zQXJyYXkoY3JlYXRlVG9kbyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0c0FycmF5ID0gcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpO1xuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0SW5kZXg7IFxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpW2ldLmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpIHByb2plY3RJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KClbcHJvamVjdEluZGV4XTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmFkZFRvVG9kb3NBcnJheShjcmVhdGVUb2RvKTsgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjcmVhdGVBZGRUT0RPdEJ0bigpO1xuICAgICAgICAgICAgYWRkVE9ET0J1dHRvbkV2ZW50KCk7XG4gICAgICAgICAgICByZWZyZXNoVG9kb3NDb250YWluZXIoKTtcbiAgICAgICAgfSlcbiAgICB9KSgpO1xuXG59O1xuZXhwb3J0IGRlZmF1bHQgbmV3VG9kb0J1dHRvbnNFdmVudHMiLCJpbXBvcnQgdG9kb1Rhc2sgZnJvbSBcIi4vVE9ETy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgcHJvamVjdE1lbmFnZXIgZnJvbSBcIi4vcHJvamVjdC1tZW5hZ2VyLmpzXCI7XG5jb25zdCBuZXdUb2RvID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb05hbWVJbnB1dFRleHQnKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EYXRlUGlja2VySW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9UaW1lUGlja2VySW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUHJpb3JpdHlTZWxlY3QnKS52YWx1ZTtcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTm90ZXNJbnB1dCcpLnZhbHVlO1xuICAgIGxldCB0b2RvID0gdG9kb1Rhc2sobmFtZSwgZGF0ZSwgdGltZSwgcHJpb3JpdHksIG5vdGVzKTtcbiAgICByZXR1cm4gdG9kb1xufVxuZXhwb3J0IGRlZmF1bHQgbmV3VG9kbyIsImltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi9wcm9qZWN0LW1lbmFnZXIuanNcIjtcbmltcG9ydCBjcmVhdGVBZGRUT0RPdEJ0biBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tYWRkVG9kby1jcmVhdGUtYWRkQnRuLmpzXCI7XG5pbXBvcnQgYWRkVE9ET0J1dHRvbkV2ZW50IGZyb20gXCIuL2FkZC10b2RvLWJ1dHRvbi1ldmVudC5qc1wiO1xuaW1wb3J0IHJlZnJlc2hUb2Rvc0NvbnRhaW5lciBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tcmVmcmVzaC1UT0RPUy1jb250YWluZXJcIjtcbmNvbnN0IGVkaXRUb2RvQnV0dG9uc0V2ZW50cyA9ICh0YXJnZXRQcm9qZWN0SW5kZXgsIHRvZG9JbmRleCwpID0+IHtcbiAgICBjb25zdCBkZWNsaW5lQnRuRnVuY3Rpb24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvQ3JlYXRlQ2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9DcmVhdGVDYW5jZWxCdG4nKTtcbiAgICAgICAgdG9kb0NyZWF0ZUNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZUFkZFRPRE90QnRuKCk7XG4gICAgICAgICAgICBhZGRUT0RPQnV0dG9uRXZlbnQoKTtcbiAgICAgICAgfSlcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgY29uZmlybUJ0biA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9FZGl0Q29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvRWRpdENvbmZpcm1CdG4nKTtcbiAgICAgICAgdG9kb0VkaXRDb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgdGFyZ2V0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0JykuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0YXJnZXRQcm9qZWN0TmFtZSA9PT0gXCJIT01FXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBob21lVG9kbyA9IHByb2plY3RNZW5hZ2VyLmdldEhvbWVUb2Rvc0FycmF5KClbdG9kb0luZGV4XTtcbiAgICAgICAgICAgICAgICBob21lVG9kby5zZXRUb2RvTmFtZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb05hbWVJbnB1dFRleHQnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaG9tZVRvZG8uc2V0VG9kb0RhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EYXRlUGlja2VySW5wdXQnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaG9tZVRvZG8uc2V0VG9kb1RpbWUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9UaW1lUGlja2VySW5wdXQnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaG9tZVRvZG8uc2V0VG9kb1ByaW9yaXR5KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUHJpb3JpdHlTZWxlY3QnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaG9tZVRvZG8uc2V0VG9kb05vdGVzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTm90ZXNJbnB1dCcpLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGNyZWF0ZUFkZFRPRE90QnRuKCk7XG4gICAgICAgICAgICAgICAgYWRkVE9ET0J1dHRvbkV2ZW50KCk7XG4gICAgICAgICAgICAgICAgcmVmcmVzaFRvZG9zQ29udGFpbmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNleyAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kbyA9IHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKVt0YXJnZXRQcm9qZWN0SW5kZXhdLmdldFRvZG9zQXJyYXkoKVt0b2RvSW5kZXhdO1xuICAgICAgICAgICAgICAgIHRvZG8uc2V0VG9kb05hbWUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9OYW1lSW5wdXRUZXh0JykudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRvZG8uc2V0VG9kb0RhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EYXRlUGlja2VySW5wdXQnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdG9kby5zZXRUb2RvVGltZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1RpbWVQaWNrZXJJbnB1dCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0b2RvLnNldFRvZG9Qcmlvcml0eShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1ByaW9yaXR5U2VsZWN0JykudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRvZG8uc2V0VG9kb05vdGVzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTm90ZXNJbnB1dCcpLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGNyZWF0ZUFkZFRPRE90QnRuKCk7XG4gICAgICAgICAgICAgICAgYWRkVE9ET0J1dHRvbkV2ZW50KCk7XG4gICAgICAgICAgICAgICAgcmVmcmVzaFRvZG9zQ29udGFpbmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSkoKTtcblxufTtcbmV4cG9ydCBkZWZhdWx0IGVkaXRUb2RvQnV0dG9uc0V2ZW50cyIsImltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi9wcm9qZWN0LW1lbmFnZXIuanNcIjtcbmltcG9ydCBkb21TaG93VG9kbyBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tc2hvdy1UT0RPLmpzXCI7XG5pbXBvcnQgcmVmcmVzaFRvZG9zQ29udGFpbmVyIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1yZWZyZXNoLVRPRE9TLWNvbnRhaW5lci5qc1wiO1xuY29uc3Qgc2hvd1RvZG9zRnJvbUhvbWVQcm9qZWN0ID0gKGhvbWVQcm9qZWN0RGl2KSA9PiB7XG4gICAgaG9tZVByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0RGl2JykuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCd0YXJnZXQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGhvbWVQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3RhcmdldCcpO1xuXG4gICAgICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuICAgICAgICBcbiAgICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBzaG93VG9kb3NGcm9tSG9tZVByb2plY3QiLCJjb25zdCBwcm9qZWN0Q3JlYXRvciA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHByb2plY3ROYW1lID0gbmFtZTtcbiAgICBsZXQgdG9kb3NBcnJheSA9IFtdO1xuICAgIFxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBwcm9qZWN0TmFtZTtcbiAgICBjb25zdCBnZXRUb2Rvc0FycmF5ID0gKCkgPT4gdG9kb3NBcnJheTtcbiAgICBjb25zdCBlZGl0UHJvamVjdE5hbWUgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIHByb2plY3ROYW1lID0gc3RyaW5nO1xuICAgIH1cbiAgICBjb25zdCBhZGRUb1RvZG9zQXJyYXkgPSAoaXRlbSkgPT4ge1xuICAgICAgICB0b2Rvc0FycmF5LnB1c2goaXRlbSk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVUT0RPID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHRvZG9zQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgY29uc3QgZmxhdFRvZG9zQXJyYXkgPSAoKSA9PiB7XG4gICAgICAgIHRvZG9zQXJyYXkgPSB0b2Rvc0FycmF5LmZsYXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TmFtZSxcbiAgICAgICAgZ2V0VG9kb3NBcnJheSxcbiAgICAgICAgZWRpdFByb2plY3ROYW1lLFxuICAgICAgICBhZGRUb1RvZG9zQXJyYXksXG4gICAgICAgIHJlbW92ZVRPRE8sXG4gICAgICAgIGZsYXRUb2Rvc0FycmF5LFxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RDcmVhdG9yOyIsImNvbnN0IHByb2plY3RNZW5hZ2VyID0gKCgpID0+IHtcbiAgICBsZXQgcHJvamVjdHNBcnJheSA9IFtdO1xuICAgIGxldCBob21lVG9kb3NBcnJheSA9IFtdO1xuICAgIFxuICAgIGNvbnN0IGdldFByb2plY3RzQXJyYXkgPSAoKSA9PiBwcm9qZWN0c0FycmF5O1xuICAgIGNvbnN0IGdldEhvbWVUb2Rvc0FycmF5ID0gKCkgPT4gaG9tZVRvZG9zQXJyYXk7XG4gICAgY29uc3QgcHVzaFRvSG9tZVRvZG9zQXJyYXkgPSAodG9kbykgPT4ge1xuICAgICAgICBob21lVG9kb3NBcnJheS5wdXNoKHRvZG8pO1xuICAgIH07XG4gICAgY29uc3QgcHVzaFRvUHJvamVjdHNBcnJheSA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RzQXJyYXkucHVzaChwcm9qZWN0KTtcbiAgICB9O1xuICAgIGNvbnN0IGdldEFsbFRvZG9zRnJvbVByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWxsVG9kb3MgPVtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgYWxsVG9kb3MucHVzaChwcm9qZWN0c0FycmF5W2ldLmdldFRvZG9zQXJyYXkpXG4gICAgICAgIH07XG4gICAgICAgIGFsbFRvZG9zLnB1c2goaG9tZVRvZG9zQXJyYXkpXG4gICAgICAgIHJldHVybiBhbGxUb2Rvcy5mbGF0KClcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgcHJvamVjdHNBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlSG9tZVRPRE8gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgaG9tZVRvZG9zQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICAgIGNvbnN0IG1vdmVUT0RPRnJvbUhvbWVUb1Byb2plY3QgPSAodG9kb0luZGV4LCBwcm9qZWN0SW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHRlbXAgPSBob21lVG9kb3NBcnJheS5zcGxpY2UodG9kb0luZGV4LCAxKTtcbiAgICAgICAgcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLmFkZFRvVG9kb3NBcnJheSh0ZW1wKTtcbiAgICAgICAgcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLmZsYXRUb2Rvc0FycmF5KCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFByb2plY3RzQXJyYXksXG4gICAgICAgIGdldEFsbFRvZG9zRnJvbVByb2plY3RzLFxuICAgICAgICBnZXRIb21lVG9kb3NBcnJheSxcbiAgICAgICAgcHVzaFRvUHJvamVjdHNBcnJheSxcbiAgICAgICAgcHVzaFRvSG9tZVRvZG9zQXJyYXksXG4gICAgICAgIHJlbW92ZVByb2plY3QsXG4gICAgICAgIHJlbW92ZUhvbWVUT0RPLFxuICAgICAgICBtb3ZlVE9ET0Zyb21Ib21lVG9Qcm9qZWN0LFxuICAgIH1cbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TWVuYWdlciIsImltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi9wcm9qZWN0LW1lbmFnZXIuanNcIjtcbmltcG9ydCByZWZyZXNoVG9kb3NDb250YWluZXIgZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLXJlZnJlc2gtVE9ET1MtY29udGFpbmVyXCI7IFxuaW1wb3J0IGVkaXRUb2RvQ29udGFpbmVyQ29udGVudHMgZnJvbSAnLi4vZG9tLWZ1bmN0aW9ucy9ET00tZWRpdFRvZG8tc3dhcC10by1Gb3JtJztcbmltcG9ydCBjcmVhdGVBZGRUT0RPdEJ0biBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tYWRkVG9kby1jcmVhdGUtYWRkQnRuLmpzXCI7XG5pbXBvcnQgYWRkVE9ET0J1dHRvbkV2ZW50IGZyb20gXCIuL2FkZC10b2RvLWJ1dHRvbi1ldmVudC5qc1wiO1xuaW1wb3J0IG1vdmVUb2RvRHJvcGRvd25Db250ZW50cyBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tc2hvdy1tb3ZlLVRPRE8tZHJvcGRvd24uanNcIjtcblxuY29uc3QgdG9kb0RpdnNFdmVudHMgPSAoKSA9PiB7XG5cbiAgICBsZXQgdGFyZ2V0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0JykuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgXG4gICAgY29uc3QgdG9kb0RlbGV0ZUJ1dHRvbkV2ZW50ID0gKGRlbGV0ZUJ1dHRvbiwgdG9kb0luZGV4KSA9PiB7XG4gICAgICAgIGxldCB0YXJnZXRQcm9qZWN0SW5kZXggPSAwO1xuICAgICAgICBpZiAodGFyZ2V0UHJvamVjdE5hbWUgPT09IFwiSE9NRVwiKSB7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgY3JlYXRlQWRkVE9ET3RCdG4oKTtcbiAgICAgICAgICAgICAgICBhZGRUT0RPQnV0dG9uRXZlbnQoKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWVuYWdlci5yZW1vdmVIb21lVE9ETyh0b2RvSW5kZXgpO1xuICAgICAgICAgICAgICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7ICAgIFxuICAgICAgICAgICAgfSk7ICAgIFxuICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSA9PT0gdGFyZ2V0UHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0UHJvamVjdEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xuICAgICAgICAgICAgICAgIGNyZWF0ZUFkZFRPRE90QnRuKCk7XG4gICAgICAgICAgICAgICAgYWRkVE9ET0J1dHRvbkV2ZW50KCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpW3RhcmdldFByb2plY3RJbmRleF0ucmVtb3ZlVE9ETyh0b2RvSW5kZXgpO1xuICAgICAgICAgICAgICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgdG9kb0VkaXRCdXR0b25FdmVudCA9IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEJ1dHRvbiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nVG9kb05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ1RvZG9EYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdUb2RvVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nVG9kb05vdGVzLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgPT4ge1xuICAgICAgICBsZXQgdGFyZ2V0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0JykuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICAgIGxldCB0YXJnZXRQcm9qZWN0SW5kZXggPSAwO1xuICAgICAgICBsZXQgdG9kb05hbWVEaXZDb250ZW50ID0gc3RyaW5nVG9kb05hbWU7XG4gICAgICAgIGxldCB0b2RvRGF0ZURpdkNvbnRlbnQgPSBzdHJpbmdUb2RvRGF0ZTtcbiAgICAgICAgbGV0IHRvZG9UaW1lRGl2Q29udGVudCA9IHN0cmluZ1RvZG9UaW1lO1xuICAgICAgICBsZXQgdG9kb05vdGVzRGl2Q29udGVudCA9IHN0cmluZ1RvZG9Ob3RlcztcbiAgICAgICAgbGV0IHBhc3NlZFRvZG9JbmRleCA9IHRvZG9JbmRleDtcbiAgICAgICAgaWYgKHRhcmdldFByb2plY3ROYW1lID09PSBcIkhPTUVcIikge1xuICAgICAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZWRpdFRvZG9Db250YWluZXJDb250ZW50cyh0YXJnZXRQcm9qZWN0SW5kZXgsIHBhc3NlZFRvZG9JbmRleCwgdG9kb05hbWVEaXZDb250ZW50LCB0b2RvRGF0ZURpdkNvbnRlbnQsIHRvZG9UaW1lRGl2Q29udGVudCwgdG9kb05vdGVzRGl2Q29udGVudCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSA9PT0gdGFyZ2V0UHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0UHJvamVjdEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZWRpdFRvZG9Db250YWluZXJDb250ZW50cyh0YXJnZXRQcm9qZWN0SW5kZXgsIHBhc3NlZFRvZG9JbmRleCwgdG9kb05hbWVEaXZDb250ZW50LCB0b2RvRGF0ZURpdkNvbnRlbnQsIHRvZG9UaW1lRGl2Q29udGVudCwgdG9kb05vdGVzRGl2Q29udGVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTsgICAgXG4gICAgfTtcblxuICAgIGNvbnN0IHRvZG9Nb3ZlQnV0dG9uRXZlbnQgPSAobW92ZUJ1dHRvbiwgdG9kb0luZGV4LCB0b2RvRGl2ICkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhbGxUb2RvcyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2RvRGl2JyldO1xuICAgICAgICAgICAgICAgIGFsbFRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCd0YXJnZXRUb2RvJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXJnZXRUb2RvJyk7XG5cbiAgICAgICAgICAgICAgICBpZighIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZlVG9kb1Byb2plY3RzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvZG9Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZlVG9kb1Byb2plY3RzJyk7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUb2RvUHJvamVjdHMucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUb2RvRHJvcGRvd25Db250ZW50cyh0YXJnZXRQcm9qZWN0TmFtZSwgdG9kb0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsbFRvZG9zID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG9EaXYnKV07XG4gICAgICAgICAgICAgICAgICAgIGFsbFRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgndGFyZ2V0VG9kbycpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXJnZXRUb2RvJyk7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUb2RvRHJvcGRvd25Db250ZW50cyh0YXJnZXRQcm9qZWN0TmFtZSwgdG9kb0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCB0b2RvVGFyZ2V0RXZlbnQgPSAodG9kb0RpdikgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgIHRvZG9EaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWxsVG9kb3MgPSBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9kb0RpdicpXTtcbiAgICAgICAgICAgIGFsbFRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmdldFRvZG8nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXJnZXRUb2RvJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvZG9EZWxldGVCdXR0b25FdmVudCxcbiAgICAgICAgdG9kb0VkaXRCdXR0b25FdmVudCxcbiAgICAgICAgdG9kb01vdmVCdXR0b25FdmVudCxcbiAgICAgICAgdG9kb1RhcmdldEV2ZW50XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kb0RpdnNFdmVudHNcblxuXG5cbjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBfIGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBoZWFkZXJCb2R5Rm9vdGVyIGZyb20gJy4vZG9tLWZ1bmN0aW9ucy9ET00tcHJpbWUtZGl2cy5qcyc7XG5pbXBvcnQgY3JlYXRlSGVhZCBmcm9tICcuL2RvbS1mdW5jdGlvbnMvRE9NLWhlYWQuanMnO1xuaW1wb3J0IGNyZWF0ZUJvZHkgZnJvbSAnLi9kb20tZnVuY3Rpb25zL0RPTS1ib2R5LmpzJztcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSAnLi9kb20tZnVuY3Rpb25zL0RPTS1mb290ZXIuanMnO1xuaW1wb3J0IGFkZFByb2plY3RCdXR0b25FdmVudCBmcm9tICcuL2Z1bmN0aW9ucy9hZGQtcHJvamVjdC1idXR0b24tZXZlbnQuanMnO1xuaW1wb3J0IGNyZWF0ZUFkZFRPRE90QnRuIGZyb20gJy4vZG9tLWZ1bmN0aW9ucy9ET00tYWRkVG9kby1jcmVhdGUtYWRkQnRuLmpzJztcbmltcG9ydCBhZGRUT0RPQnV0dG9uRXZlbnQgZnJvbSAnLi9mdW5jdGlvbnMvYWRkLXRvZG8tYnV0dG9uLWV2ZW50LmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5oZWFkZXJCb2R5Rm9vdGVyKCk7XG5jcmVhdGVIZWFkKCk7XG5jcmVhdGVCb2R5KCk7XG5jcmVhdGVGb290ZXIoKTtcbmFkZFByb2plY3RCdXR0b25FdmVudCgpO1xuY3JlYXRlQWRkVE9ET3RCdG4oKTtcbmFkZFRPRE9CdXR0b25FdmVudCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==