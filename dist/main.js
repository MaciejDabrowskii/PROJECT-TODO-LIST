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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/elements.woff */ "./fonts/elements.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/text.woff */ "./fonts/text.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n@font-face {\n    font-family: 'elements';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\n    font-weight: 400;\n    font-style: normal;\n  }\n\n@font-face {\n    font-family: 'text';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n    font-weight: 400;\n    font-style: normal;\n  }\n\n:root {\n    /* colors */\n    --background-color: #bae6fd;\n    --target-color: #3b82f6;\n    --porojects-divs-background: #38bdf8;\n    --low-priority-color: #bbf7d0;\n    --medium-priority-color: #fef08a;\n    --high-priority-color: #fda4af;\n    --outdated-color: #e5e7eb;\n    --separator-red: #e11d48;\n    font-family: 'elements';\n}\nbody {\n    display: grid;\n    grid-template-rows: 1fr 12fr 0.3fr;\n    background-color: var(--background-color);\n}\n.head {\n    width: 100%;\n    height: 11vh;\n    background-color: var(--target-color);\n    font-family: 'elements';\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 1vh;\n}\n.logo {\n    height: 100%;\n    width: 40%;\n    font-size: 5vh;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.body {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n.projectsDiv {\n    grid-column: 1 / 2;\n    height: 100%;\n    /* background-color: rgb(207, 196, 182); */\n    border-right: 1vh solid var(--separator-red);\n    padding-right: 2vh;\n    display: grid;\n    grid-template-rows: 1fr 1fr 10fr 1fr;\n}\n.projectsDivHeader {\n    grid-row: 1 / 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--target-color);\n    font-family: 'elements';\n    font-size: 3vh;\n    letter-spacing: 0.3vh;\n}\n.homeProjectDiv {\n    grid-row: 2 / 3;\n    background-color: var(--low-priority-color);\n    border-radius: 1vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 3vh;\n    color: var(--target-color);\n}\n.projectsContainer {\n    grid-row: 3 / 4;\n    /* background-color: rgb(209, 223, 176); */\n}\n.target {\n    border: 0.6vh solid var(--target-color);\n}\n.projectDiv {\n    display: flex;\n    justify-content: space-between;\n    height: 3vh;\n    background-color: var(--porojects-divs-background);\n    font-family: 'elements';\n    font-size: 2.5vh;\n    letter-spacing: 0.1vh;\n    color: white;\n    padding: 1vh;\n    margin: 1vh 0 1vh 0;\n    border-radius: 1vh;\n}\n.editTodoButton, .deleteTodoButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 3.5vh;\n    height: 3.5vh;\n    border-radius: 1vh;\n    border: none;\n    background-color: white;\n    font-size: 2vh;\n    color: var(--target-color);\n}\n.moveTodoButton {\n    border-radius: 1vh;\n    border: none;\n    background-color: white;\n    font-size: 2vh;\n    font-family: 'elements';\n    color: var(--target-color);\n}\n.projectButtonsContainer {\n    display: flex;\n    gap: 1vh;\n    justify-content: center;\n    align-items: center;\n}\n.editProjectButton {\n    width: 3vh;\n    height: 2.9vh;\n    background-color: white;\n    border: 1px; \n    border-radius: 1vh;\n    font-size: 2vh;\n    color: var(--target-color);\n}\n.deleteProjectButton {\n    width: 3vh;\n    height: 3vh;\n    background-color: white;\n    border: 1px; \n    border-radius: 1vh;\n    font-size: 2vh;\n    color: var(--target-color);\n}\n.dropdown {\n    position: relative;\n    display: inline-block;\n    bottom: 0.2vh;\n\n}\n.dropdownContent {\n    display: block;\n    position: absolute;\n    background-color: #f1f1f1;\n    width: 27vh;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n    border-radius: 1vh;\n    padding: 1vh 1vh 1.5vh 1vh;\n    font-size: 1.9vh;\n    background-color: var(--target-color);\n    margin-top: 0.3vh;\n    text-align: center;\n}\n#editProjectName {\n    border: none;\n    border-radius: 0.5vh;\n    margin-top: 0.6vh;\n    font-family: 'elements';\n    transition: 0.1s;\n    margin-right: 0.4vh;\n}\n#editProjectName:focus {\n    outline: none;\n    border: 0.3vh solid var(--high-priority-color);\n    color: var(--target-color);\n    caret-color: var(--high-priority-color);\n}\n.confirmNewNameButton {\n    background-color: white;\n    border: 1px;\n    border-radius: 0.7vh;\n    font-size: 1.7vh;\n    color: var(--target-color);\n    font-weight: bold;\n}\n\n\n.addProjectContainer {\n    grid-row: 4 / 5;\n    background-color: var(--low-priority-color);\n    border: 0.6vh solid var(--target-color);\n    border-radius: 2vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--target-color);\n    gap: 0.5vh;\n    font-size: 2.5vh;\n}\n\n.addProjectButton {\n    width: 25vh;\n    height: 5vh;\n    border: 0.4vh solid var(--target-color);\n    background-color: var(--medium-priority-color);\n    border-radius: 2vh;\n    font-family: 'elements';\n    color: var(--target-color);\n    font-size: 3vh;\n}\n\n#projectNameInputText {\n    border: none;\n    border-radius: 1vh;\n    font-family: 'elements';\n    transition: 0.1s;\n    width: 23vh;\n    height: 3vh;\n    color: var(--target-color);\n    transition: 0.3s;\n}\n#projectNameInputText:focus {\n    font-size: 2vh;\n    outline: none;\n    border: 0.5vh solid var(--high-priority-color);\n    color: var(--target-color);\n    caret-color: var(--high-priority-color);\n}\n.projectNameConfirmBtn, .projectNameCancelBtn{\n    height: 3vh;\n    width: 3vh;\n    background-color: white;\n    border: 0.3vh solid var(--target-color);\n    border-radius: 1vh;\n    color: var(--target-color);\n    font-weight: bold;\n}\n.todosDiv {\n    grid-column: 2 / 3;\n    height: 100%;\n    /* background-color: rgb(216, 167, 139); */\n    display: grid;\n    grid-template-rows: 1fr 0.5fr 10fr 1fr;\n    margin: 0 3vh 0 3vh;\n    color: var(--target-color);\n    border-radius: 1vh;\n}\n.todoDivHeader {\n    grid-row: 1 / 2;\n    /* background-color: rgb(176, 223, 223); */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 3.5vh;\n    color: var(--target-color);\n    font-family: 'elements';\n}\n.todoDataHeaderDiv {\n    grid-row: 2 / 3;\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr 4fr 1fr;\n    padding: 0.25% 0.5%;\n    font-size: 2.5vh;\n    color: var(--target-color);\n    font-family: 'elements';\n    border-bottom: 1vh solid var(--separator-red);\n}\n.todoDataHeaderDiv > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.allTodosButton {\n    background-color: var(--low-priority-color);\n    align-self: center;\n    justify-self: end;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0.3%;\n    margin-right: 2%;\n    \n}\n.todosContainer {\n    grid-row: 3 / 4;\n    margin-top: 1.5vh;\n    /* background-color: var(--porojects-divs-background); */\n}\n.todoDiv {\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr 4fr 0.5fr 0.25fr 0.25fr;\n    margin: 1% 0;\n    height: 5vh;\n    align-items: center;\n    border-radius: 1vh;\n}\n.High {\n    background-color: var(--high-priority-color);\n}\n.Medium {\n    background-color: var(--medium-priority-color);\n}\n.Low {\n    background-color: var(--low-priority-color);\n}\n.moveTodoProjects{\n    position: relative;\n    display: inline-block;\n}\n.moveTodoDropdownHomeProject {\n    margin-bottom: 5%;\n}\n.moveTodoDropdownProjectDiv {\n    margin-bottom: 5%;\n}\n.moveTodoDropdownProjectDiv, .moveTodoDropdownHomeProject {\n    text-align: center;\n}\n.moveTodoDropdownProjectDiv:hover, .moveTodoDropdownHomeProject:hover {\n    border: 2px solid red;\n}\n.moveTodoProjectsDropdownContainer {\n    display: block;\n    position: absolute;\n    background-color: #f1f1f1;\n    right: 0;\n    top: 100%;\n    padding: 20px;\n    margin-right: 50px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n}\n.todoDiv > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.targetTodo {\n    border: 0.6vh solid var(--target-color);\n}\n.todoOptionsContainer {\n    display: grid;\n    grid-template-columns: 0.75fr 2fr 0.5fr 1.2fr 0.5fr 0.75fr 0.75fr 0.75fr 0.5fr 3fr 0.25fr 0.25fr;\n    grid-template-rows: 1fr 1.5fr;\n    grid-row: 4 / 5;\n    background-color: var(--low-priority-color);\n    padding: 5px;\n    justify-content: center;\n    align-items: center;\n    border: 1vh solid var(--target-color);\n    border-radius: 2vh;\n    gap: 0.5vh;\n}\n.todoOptionsContainer > input[type=text], input[type=textarea], input[type=date], input[type=time], select {\n    border: none;\n    height: 3vh;\n    border-radius: 1vh;\n    font-family: 'elements';\n    color: var(--target-color);\n    background-color: white;\n    padding: 0 1vh;\n    transition: 0.3s;\n}\n.todoOptionsContainer > input[type=text]:focus, input[type=textarea]:focus, input[type=date]:focus, input[type=time]:focus {\n    outline: none;\n    border: 0.5vh solid var(--high-priority-color);\n    color: var(--target-color);\n    caret-color: var(--high-priority-color);\n}\n.todoCreateConfirmBtn, .todoCreateCancelBtn, .todoEditConfirmBtn {\n    width: 3.5vh;\n    height: 3vh;\n    background-color: white;\n    border: 0.4vh solid var(--target-color);\n    border-radius: 1vh;\n    color: var(--target-color);\n    font-size: 1.6vh;\n    font-weight: bold;\n}\n.addTODOButton {\n    grid-column: 1 / 13;\n    grid-row: 1 / 3;\n    width: 30%;\n    height: 80%;\n    align-self: center;\n    justify-self: center;\n    width: 38vh;\n    height: 7vh;\n    border: 0.7vh solid var(--target-color);\n    background-color: var(--medium-priority-color);\n    border-radius: 2vh;\n    font-family: 'elements';\n    color: var(--target-color);\n    font-size: 3vh;\n}\n.confirmAndDropdown {\n    position: relative;\n    display: inline-block;\n}\n\n.todoDataError {\n    position: absolute;\n    display: block;\n    z-index: 1;\n    width: max-content;\n    right: 0.5vh;\n    bottom: 3.3vh;\n    background-color: var(--medium-priority-color);\n    color: var(--separator-red);\n    margin-bottom: 0.3vh;\n    border: solid;\n    padding: 0.5vh 3vh;\n    border-radius: 1vh;\n\n}\n.todoOptionsContainer > label {\n    justify-self: center;\n}\n.todoCreateDivHeader {\n    grid-column: 1 / 13;\n    grid-row: 1 / 2;\n    justify-self: center;\n    border-bottom: 0.5vh solid var(--separator-red);\n}\n.todoEditDivHeader {\n    grid-column: 1 / 13;\n    grid-row: 1 / 2;\n    justify-self: center;\n}\n.footer {\n    grid-row: 3 / 4;\n    display: flex;\n    align-items: center;\n    height: 4vh;\n    justify-content: center;\n    gap: 1%;\n}\n.gitIcon {\n    height: 3vh;\n}\n.outdatedTodo{\n    text-decoration: line-through;\n    background-color: gray;\n}\n.gitIcon {\n    transition: transform .4s ease-in-out;\n}\n.gitIcon:hover {\n    color: var(--separator-red);\n    transform: rotate(360deg) scale(1.2);\n}\n\n.todoCreateConfirmBtn, .todoCreateCancelBtn, .todoEditConfirmBtn,\n .addProjectButton, .addTODOButton, .moveTodoButton, .editTodoButton,\n .deleteTodoButton, .editProjectButton, .deleteProjectButton, .confirmNewNameButton, \n .projectNameConfirmBtn, .projectNameCancelBtn, .gitIcon {\n    cursor:pointer;\n }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\n@font-face {\n    font-family: 'elements';\n    src: url('../fonts/elements.woff') format('woff');\n    font-weight: 400;\n    font-style: normal;\n  }\n\n@font-face {\n    font-family: 'text';\n    src: url('../fonts/text.woff') format('woff');\n    font-weight: 400;\n    font-style: normal;\n  }\n\n:root {\n    /* colors */\n    --background-color: #bae6fd;\n    --target-color: #3b82f6;\n    --porojects-divs-background: #38bdf8;\n    --low-priority-color: #bbf7d0;\n    --medium-priority-color: #fef08a;\n    --high-priority-color: #fda4af;\n    --outdated-color: #e5e7eb;\n    --separator-red: #e11d48;\n    font-family: 'elements';\n}\nbody {\n    display: grid;\n    grid-template-rows: 1fr 12fr 0.3fr;\n    background-color: var(--background-color);\n}\n.head {\n    width: 100%;\n    height: 11vh;\n    background-color: var(--target-color);\n    font-family: 'elements';\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 1vh;\n}\n.logo {\n    height: 100%;\n    width: 40%;\n    font-size: 5vh;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.body {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n.projectsDiv {\n    grid-column: 1 / 2;\n    height: 100%;\n    /* background-color: rgb(207, 196, 182); */\n    border-right: 1vh solid var(--separator-red);\n    padding-right: 2vh;\n    display: grid;\n    grid-template-rows: 1fr 1fr 10fr 1fr;\n}\n.projectsDivHeader {\n    grid-row: 1 / 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--target-color);\n    font-family: 'elements';\n    font-size: 3vh;\n    letter-spacing: 0.3vh;\n}\n.homeProjectDiv {\n    grid-row: 2 / 3;\n    background-color: var(--low-priority-color);\n    border-radius: 1vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 3vh;\n    color: var(--target-color);\n}\n.projectsContainer {\n    grid-row: 3 / 4;\n    /* background-color: rgb(209, 223, 176); */\n}\n.target {\n    border: 0.6vh solid var(--target-color);\n}\n.projectDiv {\n    display: flex;\n    justify-content: space-between;\n    height: 3vh;\n    background-color: var(--porojects-divs-background);\n    font-family: 'elements';\n    font-size: 2.5vh;\n    letter-spacing: 0.1vh;\n    color: white;\n    padding: 1vh;\n    margin: 1vh 0 1vh 0;\n    border-radius: 1vh;\n}\n.editTodoButton, .deleteTodoButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 3.5vh;\n    height: 3.5vh;\n    border-radius: 1vh;\n    border: none;\n    background-color: white;\n    font-size: 2vh;\n    color: var(--target-color);\n}\n.moveTodoButton {\n    border-radius: 1vh;\n    border: none;\n    background-color: white;\n    font-size: 2vh;\n    font-family: 'elements';\n    color: var(--target-color);\n}\n.projectButtonsContainer {\n    display: flex;\n    gap: 1vh;\n    justify-content: center;\n    align-items: center;\n}\n.editProjectButton {\n    width: 3vh;\n    height: 2.9vh;\n    background-color: white;\n    border: 1px; \n    border-radius: 1vh;\n    font-size: 2vh;\n    color: var(--target-color);\n}\n.deleteProjectButton {\n    width: 3vh;\n    height: 3vh;\n    background-color: white;\n    border: 1px; \n    border-radius: 1vh;\n    font-size: 2vh;\n    color: var(--target-color);\n}\n.dropdown {\n    position: relative;\n    display: inline-block;\n    bottom: 0.2vh;\n\n}\n.dropdownContent {\n    display: block;\n    position: absolute;\n    background-color: #f1f1f1;\n    width: 27vh;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n    border-radius: 1vh;\n    padding: 1vh 1vh 1.5vh 1vh;\n    font-size: 1.9vh;\n    background-color: var(--target-color);\n    margin-top: 0.3vh;\n    text-align: center;\n}\n#editProjectName {\n    border: none;\n    border-radius: 0.5vh;\n    margin-top: 0.6vh;\n    font-family: 'elements';\n    transition: 0.1s;\n    margin-right: 0.4vh;\n}\n#editProjectName:focus {\n    outline: none;\n    border: 0.3vh solid var(--high-priority-color);\n    color: var(--target-color);\n    caret-color: var(--high-priority-color);\n}\n.confirmNewNameButton {\n    background-color: white;\n    border: 1px;\n    border-radius: 0.7vh;\n    font-size: 1.7vh;\n    color: var(--target-color);\n    font-weight: bold;\n}\n\n\n.addProjectContainer {\n    grid-row: 4 / 5;\n    background-color: var(--low-priority-color);\n    border: 0.6vh solid var(--target-color);\n    border-radius: 2vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--target-color);\n    gap: 0.5vh;\n    font-size: 2.5vh;\n}\n\n.addProjectButton {\n    width: 25vh;\n    height: 5vh;\n    border: 0.4vh solid var(--target-color);\n    background-color: var(--medium-priority-color);\n    border-radius: 2vh;\n    font-family: 'elements';\n    color: var(--target-color);\n    font-size: 3vh;\n}\n\n#projectNameInputText {\n    border: none;\n    border-radius: 1vh;\n    font-family: 'elements';\n    transition: 0.1s;\n    width: 23vh;\n    height: 3vh;\n    color: var(--target-color);\n    transition: 0.3s;\n}\n#projectNameInputText:focus {\n    font-size: 2vh;\n    outline: none;\n    border: 0.5vh solid var(--high-priority-color);\n    color: var(--target-color);\n    caret-color: var(--high-priority-color);\n}\n.projectNameConfirmBtn, .projectNameCancelBtn{\n    height: 3vh;\n    width: 3vh;\n    background-color: white;\n    border: 0.3vh solid var(--target-color);\n    border-radius: 1vh;\n    color: var(--target-color);\n    font-weight: bold;\n}\n.todosDiv {\n    grid-column: 2 / 3;\n    height: 100%;\n    /* background-color: rgb(216, 167, 139); */\n    display: grid;\n    grid-template-rows: 1fr 0.5fr 10fr 1fr;\n    margin: 0 3vh 0 3vh;\n    color: var(--target-color);\n    border-radius: 1vh;\n}\n.todoDivHeader {\n    grid-row: 1 / 2;\n    /* background-color: rgb(176, 223, 223); */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 3.5vh;\n    color: var(--target-color);\n    font-family: 'elements';\n}\n.todoDataHeaderDiv {\n    grid-row: 2 / 3;\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr 4fr 1fr;\n    padding: 0.25% 0.5%;\n    font-size: 2.5vh;\n    color: var(--target-color);\n    font-family: 'elements';\n    border-bottom: 1vh solid var(--separator-red);\n}\n.todoDataHeaderDiv > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.allTodosButton {\n    background-color: var(--low-priority-color);\n    align-self: center;\n    justify-self: end;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0.3%;\n    margin-right: 2%;\n    \n}\n.todosContainer {\n    grid-row: 3 / 4;\n    margin-top: 1.5vh;\n    /* background-color: var(--porojects-divs-background); */\n}\n.todoDiv {\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr 4fr 0.5fr 0.25fr 0.25fr;\n    margin: 1% 0;\n    height: 5vh;\n    align-items: center;\n    border-radius: 1vh;\n}\n.High {\n    background-color: var(--high-priority-color);\n}\n.Medium {\n    background-color: var(--medium-priority-color);\n}\n.Low {\n    background-color: var(--low-priority-color);\n}\n.moveTodoProjects{\n    position: relative;\n    display: inline-block;\n}\n.moveTodoDropdownHomeProject {\n    margin-bottom: 5%;\n}\n.moveTodoDropdownProjectDiv {\n    margin-bottom: 5%;\n}\n.moveTodoDropdownProjectDiv, .moveTodoDropdownHomeProject {\n    text-align: center;\n}\n.moveTodoDropdownProjectDiv:hover, .moveTodoDropdownHomeProject:hover {\n    border: 2px solid red;\n}\n.moveTodoProjectsDropdownContainer {\n    display: block;\n    position: absolute;\n    background-color: #f1f1f1;\n    right: 0;\n    top: 100%;\n    padding: 20px;\n    margin-right: 50px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n}\n.todoDiv > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.targetTodo {\n    border: 0.6vh solid var(--target-color);\n}\n.todoOptionsContainer {\n    display: grid;\n    grid-template-columns: 0.75fr 2fr 0.5fr 1.2fr 0.5fr 0.75fr 0.75fr 0.75fr 0.5fr 3fr 0.25fr 0.25fr;\n    grid-template-rows: 1fr 1.5fr;\n    grid-row: 4 / 5;\n    background-color: var(--low-priority-color);\n    padding: 5px;\n    justify-content: center;\n    align-items: center;\n    border: 1vh solid var(--target-color);\n    border-radius: 2vh;\n    gap: 0.5vh;\n}\n.todoOptionsContainer > input[type=text], input[type=textarea], input[type=date], input[type=time], select {\n    border: none;\n    height: 3vh;\n    border-radius: 1vh;\n    font-family: 'elements';\n    color: var(--target-color);\n    background-color: white;\n    padding: 0 1vh;\n    transition: 0.3s;\n}\n.todoOptionsContainer > input[type=text]:focus, input[type=textarea]:focus, input[type=date]:focus, input[type=time]:focus {\n    outline: none;\n    border: 0.5vh solid var(--high-priority-color);\n    color: var(--target-color);\n    caret-color: var(--high-priority-color);\n}\n.todoCreateConfirmBtn, .todoCreateCancelBtn, .todoEditConfirmBtn {\n    width: 3.5vh;\n    height: 3vh;\n    background-color: white;\n    border: 0.4vh solid var(--target-color);\n    border-radius: 1vh;\n    color: var(--target-color);\n    font-size: 1.6vh;\n    font-weight: bold;\n}\n.addTODOButton {\n    grid-column: 1 / 13;\n    grid-row: 1 / 3;\n    width: 30%;\n    height: 80%;\n    align-self: center;\n    justify-self: center;\n    width: 38vh;\n    height: 7vh;\n    border: 0.7vh solid var(--target-color);\n    background-color: var(--medium-priority-color);\n    border-radius: 2vh;\n    font-family: 'elements';\n    color: var(--target-color);\n    font-size: 3vh;\n}\n.confirmAndDropdown {\n    position: relative;\n    display: inline-block;\n}\n\n.todoDataError {\n    position: absolute;\n    display: block;\n    z-index: 1;\n    width: max-content;\n    right: 0.5vh;\n    bottom: 3.3vh;\n    background-color: var(--medium-priority-color);\n    color: var(--separator-red);\n    margin-bottom: 0.3vh;\n    border: solid;\n    padding: 0.5vh 3vh;\n    border-radius: 1vh;\n\n}\n.todoOptionsContainer > label {\n    justify-self: center;\n}\n.todoCreateDivHeader {\n    grid-column: 1 / 13;\n    grid-row: 1 / 2;\n    justify-self: center;\n    border-bottom: 0.5vh solid var(--separator-red);\n}\n.todoEditDivHeader {\n    grid-column: 1 / 13;\n    grid-row: 1 / 2;\n    justify-self: center;\n}\n.footer {\n    grid-row: 3 / 4;\n    display: flex;\n    align-items: center;\n    height: 4vh;\n    justify-content: center;\n    gap: 1%;\n}\n.gitIcon {\n    height: 3vh;\n}\n.outdatedTodo{\n    text-decoration: line-through;\n    background-color: gray;\n}\n.gitIcon {\n    transition: transform .4s ease-in-out;\n}\n.gitIcon:hover {\n    color: var(--separator-red);\n    transform: rotate(360deg) scale(1.2);\n}\n\n.todoCreateConfirmBtn, .todoCreateCancelBtn, .todoEditConfirmBtn,\n .addProjectButton, .addTODOButton, .moveTodoButton, .editTodoButton,\n .deleteTodoButton, .editProjectButton, .deleteProjectButton, .confirmNewNameButton, \n .projectNameConfirmBtn, .projectNameCancelBtn, .gitIcon {\n    cursor:pointer;\n }"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

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
    projectNameConfirmBtn.innerText= "✓";
    const projectNameCancelBtn = document.createElement('button');
    projectNameCancelBtn.classList.add("projectNameCancelBtn");
    projectNameCancelBtn.innerText= "✕";

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

    const confirmAndDropdown = document.createElement('div');
    confirmAndDropdown.classList.add('confirmAndDropdown');


    const todoCreateConfirmBtn = document.createElement('button');
    todoCreateConfirmBtn.classList.add("todoCreateConfirmBtn");
    todoCreateConfirmBtn.innerText= "✓";

    const todoCreateCancelBtn = document.createElement('button');
    todoCreateCancelBtn.classList.add("todoCreateCancelBtn");
    todoCreateCancelBtn.innerText= "✕";

    const todoCreateDivHeader = document.createElement('div');
    todoCreateDivHeader.classList.add('todoCreateDivHeader');
    todoCreateDivHeader.textContent = 'ADD NEW TODO';

    confirmAndDropdown.append(todoCreateConfirmBtn);

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
        confirmAndDropdown,
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
    todoDivHeader.innerText = "YOUR PLANNED TASKS";


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
    confirmNewNameButton.textContent = '✓';

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

    const confirmAndDropdown = document.createElement('div');
    confirmAndDropdown.classList.add('confirmAndDropdown');

    confirmAndDropdown.append(todoEditConfirmBtn);

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
        confirmAndDropdown,
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

    footerDiv.append(nameDiv, gitLogoDiv);

    document.querySelector('.gitIcon').addEventListener('click', () => {
        window.open('https://github.com/MaciejDabrowskii', '_blank').focus();
    });
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
/* harmony import */ var _functions_check_todo_outdated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/check-todo-outdated */ "./src/functions/check-todo-outdated.js");



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
    editTodoButton.textContent = "✎";

    const moveTodoDropdown = document.createElement('div');
    moveTodoDropdown.classList.add('moveTodoDropdown');

    moveTodoDropdown.append(moveTodoButton);

    const deleteTodoButton = document.createElement('button');
    deleteTodoButton.classList.add('deleteTodoButton');
    deleteTodoButton.textContent = "✕";

    


    todoDiv.append(todoNameDiv, todoDateDiv, todoTimeDiv, todoPriorityDiv, todoNotesDiv, moveTodoDropdown, editTodoButton, deleteTodoButton);
    (0,_functions_check_todo_outdated__WEBPACK_IMPORTED_MODULE_1__["default"])(todoDateDiv, todoDiv, todoTimeDiv);
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
/* harmony import */ var _functions_local_storage_menager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/local-storage-menager.js */ "./src/functions/local-storage-menager.js");




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
                (0,_functions_local_storage_menager_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
            (0,_functions_local_storage_menager_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
                    (0,_functions_local_storage_menager_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

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
            editProjectButton.textContent = '✎';
            
            dropdown.append(editProjectButton);

            const deleteProjectButton = document.createElement('button');
            deleteProjectButton.classList.add('deleteProjectButton');
            deleteProjectButton.textContent = '✕';
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
            (!event.target.matches('.todoDataError')) &&
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
/* harmony import */ var _local_storage_menager_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./local-storage-menager.js */ "./src/functions/local-storage-menager.js");













const addProjectDivEvent = () => {

    const deleteProjectButton = (deleteButton, index) => {
        deleteButton.addEventListener('click', (e) =>{

            _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeProject(index);
            (0,_dom_functions_DOM_show_projects_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
            e.stopPropagation();
            (0,_local_storage_menager_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
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
                    const projectNamesArray = [];
                    _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray().forEach((project) => {
                        projectNamesArray.push(project.getName());
                    });
                    if (projectNamesArray.includes(editProjectNameInput.value)){
                        if (!document.querySelector('.editProjectErrorDiv')) {
                            const dropdownContent = document.querySelector('.dropdownContent');
                            const editProjectErrorDiv = document.createElement('div');
                            editProjectErrorDiv.classList.add('editProjectErrorDiv');
                            editProjectErrorDiv.innerText = "This name exist!";
                            dropdownContent.append(editProjectErrorDiv);
                        }
                    }
                    else {
                    _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray()[index].editProjectName(editProjectNameInput.value);
                    (0,_dom_functions_DOM_show_projects_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
                    e.stopPropagation();
                    (0,_local_storage_menager_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
                    };
                });
            } else {
                dropdown.append(...(0,_dom_functions_DOM_create_edit_project_dropdown_contents_js__WEBPACK_IMPORTED_MODULE_8__["default"])());
                const editProjectNameInput = document.getElementById('editProjectName');
                const confirmNewNameButton = document.querySelector('.confirmNewNameButton');
                confirmNewNameButton.addEventListener('click', (e) =>{
                    const projectNamesArray = [];
                    _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray().forEach((project) => {
                        projectNamesArray.push(project.getName());
                    });
                    if (projectNamesArray.includes(editProjectNameInput.value)){
                        if (!document.querySelector('.editProjectErrorDiv')) {
                            const dropdownContent = document.querySelector('.dropdownContent');
                            const editProjectErrorDiv = document.createElement('div');
                            editProjectErrorDiv.classList.add('editProjectErrorDiv');
                            editProjectErrorDiv.innerText = "This name exist!";
                            dropdownContent.append(editProjectErrorDiv);
                        }
                        else if (document.querySelector('.editProjectErrorDiv').innerText === "New name min. 1 char") {
                            document.querySelector('.editProjectErrorDiv').innerText = "This name exist!";
                        }
                    }
                    else if(editProjectNameInput.value.length === 0) {
                        if (!document.querySelector('.editProjectErrorDiv')) {
                            const dropdownContent = document.querySelector('.dropdownContent');
                            const editProjectErrorDiv = document.createElement('div');
                            editProjectErrorDiv.classList.add('editProjectErrorDiv');
                            editProjectErrorDiv.innerText = "New name min. 1 char";
                            dropdownContent.append(editProjectErrorDiv);
                        }
                        else if (document.querySelector('.editProjectErrorDiv').innerText === "This name exist!") {
                            document.querySelector('.editProjectErrorDiv').innerText = "New name min. 1 char";
                        }
                    }
                    else {
                    _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray()[index].editProjectName(editProjectNameInput.value);
                    (0,_dom_functions_DOM_show_projects_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
                    e.stopPropagation();
                    (0,_local_storage_menager_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
                    };
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
/* harmony import */ var _local_storage_menager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-storage-menager.js */ "./src/functions/local-storage-menager.js");







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
            (0,_local_storage_menager_js__WEBPACK_IMPORTED_MODULE_5__["default"])()
            }
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
/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/esm */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _local_storage_menager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./local-storage-menager.js */ "./src/functions/local-storage-menager.js");









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
            const name = document.getElementById('todoNameInputText');
            const date = document.getElementById('todoDatePickerInput');
            const time = document.getElementById('todoTimePickerInput'); 
            const confirmAndDropdown = document.querySelector('.confirmAndDropdown');
        
            const checkDate = () => {
                const today = (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(), 'yyyy-MM-dd');
                const selectedDate = date.value;
                if (selectedDate < today) return true;   
            }
            const checkTime = () => {
                const today = new Date();
                const todayFormated = (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(), 'yyyy-MM-dd');
                const selectedDate = date.value;
                const selectedTime = time.value;
                const timeNow = `${today.getHours()}:${today.getMinutes()}`;
                if ((todayFormated === selectedDate) && (selectedTime < timeNow)) return true
            }
        
            if (name.value.length === 0) {
               if (!!document.querySelector('.todoDataError')){
                    document.querySelector('.todoDataError').remove();
                    name.classList.add('invalid');
                    const todoDataError = document.createElement('div');
                    todoDataError.classList.add('todoDataError');
                    todoDataError.innerText = "Name must be at least 1 character long";
                    confirmAndDropdown.append(todoDataError);
               }
               else {
                    name.classList.add('invalid');
                    const todoDataError = document.createElement('div');
                    todoDataError.classList.add('todoDataError');
                    todoDataError.innerText = "Name must be at least 1 character long";
                    confirmAndDropdown.append(todoDataError);
               }
            }
            else if (date.value.length === 0 || checkDate()) {
                if (!!document.querySelector('.todoDataError')){
                    document.querySelector('.todoDataError').remove();
                    name.classList.remove('invalid');
                    const todoDataError = document.createElement('div');
                    todoDataError.classList.add('todoDataError');
                    todoDataError.innerText = "Date requred and must be set in the future";
                    confirmAndDropdown.append(todoDataError);
                }
                else {
                    name.classList.remove('invalid');
                    const todoDataError = document.createElement('div');
                    todoDataError.classList.add('todoDataError');
                    todoDataError.innerText = "Date requred and must be set in the future";
                    confirmAndDropdown.append(todoDataError);
                }
            }
            else if (time.value.length === 0 || checkTime()) {
                if (!!document.querySelector('.todoDataError')){
                    document.querySelector('.todoDataError').remove();
                    name.classList.remove('invalid');
                    const todoDataError = document.createElement('div');
                    todoDataError.classList.add('todoDataError');
                    todoDataError.innerText = "Time is requried and must be set in the future";
                    confirmAndDropdown.append(todoDataError);
                }
                else {
                    name.classList.remove('invalid');
                    const todoDataError = document.createElement('div');
                    todoDataError.classList.add('todoDataError');
                    todoDataError.innerText = "Time is requried and must be set in the future";
                    confirmAndDropdown.append(todoDataError);
                }
            }
            else {
                const createTodo = (0,_create_new_todo_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
                const projectName = document.querySelector('.target').firstChild.innerText;
                if (projectName === "HOME") {
                    _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].pushToHomeTodosArray(createTodo);

                    (0,_local_storage_menager_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
                    
                } else {
                    let projectsArray = _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray();
                    let projectIndex; 
                    for(let i = 0; i < projectsArray.length; i++ ) {
                        if (_project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray()[i].getName() === projectName) projectIndex = i;
                    }
                    const project = _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray()[projectIndex];
                    project.addToTodosArray(createTodo); 
                    (0,_local_storage_menager_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
                };
                (0,_dom_functions_DOM_addTodo_create_addBtn_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
                (0,_add_todo_button_event_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
                (0,_dom_functions_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_6__["default"])();
            };
        })
    })();

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTodoButtonsEvents);

/***/ }),

/***/ "./src/functions/check-todo-outdated.js":
/*!**********************************************!*\
  !*** ./src/functions/check-todo-outdated.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/esm */ "./node_modules/date-fns/esm/format/index.js");


const checkTodoOutdate = (date, todoDiv, time ) => {

    const checkDate = () => {
        const today = (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(), 'yyyy-MM-dd');
        const selectedDate = date.textContent;
        if (selectedDate < today) return true;   
    };

    const checkTime = () => {
        const todayDate = new Date();
        const timeNow = `${todayDate.getHours()}:${todayDate.getMinutes()}`;
        const today = (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(), 'yyyy-MM-dd');
        const selectedDate = date.textContent;
        if (selectedDate <= today && time.textContent < timeNow) return true
    };

    if (checkDate() || checkTime()) {
        todoDiv.classList.add('outdatedTodo');
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTodoOutdate);

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
/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/esm */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _local_storage_menager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage-menager.js */ "./src/functions/local-storage-menager.js");






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
            
            const name = document.getElementById('todoNameInputText');
            const date = document.getElementById('todoDatePickerInput');
            const time = document.getElementById('todoTimePickerInput'); 
            const confirmAndDropdown = document.querySelector('.confirmAndDropdown');
        
            const checkDate = () => {
                const today = (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), 'yyyy-MM-dd');
                const selectedDate = date.value;
                if (selectedDate < today) return true;   
            }
        
            if (name.value.length === 0) {
               if (!!document.querySelector('.todoDataError')){
                    document.querySelector('.todoDataError').remove();
                    name.classList.add('invalid');
                    const todoDataError = document.createElement('div');
                    todoDataError.classList.add('todoDataError');
                    todoDataError.innerText = "Name must be at least 1 character long";
                    confirmAndDropdown.append(todoDataError);
               }
               else {
                    name.classList.add('invalid');
                    const todoDataError = document.createElement('div');
                    todoDataError.classList.add('todoDataError');
                    todoDataError.innerText = "Name must be at least 1 character long";
                    confirmAndDropdown.append(todoDataError);
               }
            }
            else if (date.value.length === 0 || checkDate()) {
                if (!!document.querySelector('.todoDataError')){
                    document.querySelector('.todoDataError').remove();
                    name.classList.remove('invalid');
                    const todoDataError = document.createElement('div');
                    todoDataError.classList.add('todoDataError');
                    todoDataError.innerText = "Date requred and must be set in the future";
                    confirmAndDropdown.append(todoDataError);
                }
                else {
                    name.classList.remove('invalid');
                    const todoDataError = document.createElement('div');
                    todoDataError.classList.add('todoDataError');
                    todoDataError.innerText = "Date requred and must be set in the future";
                    confirmAndDropdown.append(todoDataError);
                }
            }
            else if (time.value.length === 0) {
                if (!!document.querySelector('.todoDataError')){
                    document.querySelector('.todoDataError').remove();
                    name.classList.remove('invalid');
                    const todoDataError = document.createElement('div');
                    todoDataError.classList.add('todoDataError');
                    todoDataError.innerText = "Time must be set";
                    confirmAndDropdown.append(todoDataError);
                }
                else {
                    name.classList.remove('invalid');
                    const todoDataError = document.createElement('div');
                    todoDataError.classList.add('todoDataError');
                    todoDataError.innerText = "Time must be set";
                    confirmAndDropdown.append(todoDataError);
                }
            }
            else {

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
                    (0,_local_storage_menager_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
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
                    (0,_local_storage_menager_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
                }
            }
        })
    })();

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTodoButtonsEvents);

/***/ }),

/***/ "./src/functions/get-data-from-local-storage.js":
/*!******************************************************!*\
  !*** ./src/functions/get-data-from-local-storage.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_menager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-menager.js */ "./src/functions/project-menager.js");
/* harmony import */ var _TODO_creator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TODO-creator.js */ "./src/functions/TODO-creator.js");
/* harmony import */ var _project_creator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-creator.js */ "./src/functions/project-creator.js");




const getDataFromLocalStorage = () => {
    
    if(localStorage.getItem("homeTodos") !== null){
        let homeTodosArray = JSON.parse(localStorage.getItem("homeTodos"));
        homeTodosArray.forEach((task) => {
            let todo = (0,_TODO_creator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(task.name, task.date, task.time, task.priority, task.notes);
            _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].pushToHomeTodosArray(todo);
        });
    };
    
    if(localStorage.getItem("projectNames") !== null) {
        let projectNamesArray = JSON.parse(localStorage.getItem("projectNames"));
        projectNamesArray.forEach((project) => {
            _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].pushToProjectsArray((0,_project_creator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(project));
        });
    };

    _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray().forEach((project) => {
        
        let projectName = project.getName();

        if(JSON.parse(localStorage.getItem(`${projectName}`)) !== null) {
            let todosArray = JSON.parse(localStorage.getItem(`${projectName}`));
            todosArray.forEach((task) => {
                let todo = (0,_TODO_creator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(task.name, task.date, task.time, task.priority, task.notes);
                project.addToTodosArray(todo);
            });
        };
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDataFromLocalStorage);

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

/***/ "./src/functions/local-storage-menager.js":
/*!************************************************!*\
  !*** ./src/functions/local-storage-menager.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_menager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-menager.js */ "./src/functions/project-menager.js");


const updateLocalStorage = () => {
    
    localStorage.clear();

    let homeTodos = [];
    _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getHomeTodosArray().forEach((todo) => {
        let task = new Object();
        task.name = todo.getTodoName();
        task.date = todo.getTodoDate();
        task.time = todo.gettodoTime();
        task.priority = todo.getTodoPriority();
        task.notes = todo.getTodoNotes();
        homeTodos.push(task);
    });
    localStorage.setItem("homeTodos", JSON.stringify(homeTodos));

    let projectsArray = []
    _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray().forEach((project) => {
        let projectName = project.getName();
        projectsArray.push(projectName);
    });
    localStorage.setItem("projectNames", JSON.stringify(projectsArray));

    
    _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray().forEach((project) => {
        let projectName = project.getName();
        let todosArray = [];
       
        project.getTodosArray().forEach((todo) => {
            let task = new Object();
            task.name = todo.getTodoName();
            task.date = todo.getTodoDate();
            task.time = todo.gettodoTime();
            task.priority = todo.getTodoPriority();
            task.notes = todo.getTodoNotes();
            todosArray.push(task);          
        });        
        localStorage.setItem(`${projectName}`, JSON.stringify(todosArray));
    });


}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLocalStorage);

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
    const setProjectsArray = (data) => {
        projectsArray = data;
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
        setProjectsArray,
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
/* harmony import */ var _local_storage_menager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./local-storage-menager.js */ "./src/functions/local-storage-menager.js");

 





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
                (0,_local_storage_menager_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
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
                (0,_local_storage_menager_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
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

/***/ "./fonts/elements.woff":
/*!*****************************!*\
  !*** ./fonts/elements.woff ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "518cfa7bcb2dbfab24b0.woff";

/***/ }),

/***/ "./fonts/text.woff":
/*!*************************!*\
  !*** ./fonts/text.woff ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1176967143370b4a6671.woff";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _functions_get_data_from_local_storage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functions/get-data-from-local-storage.js */ "./src/functions/get-data-from-local-storage.js");
/* harmony import */ var _dom_functions_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom-functions/DOM-refresh-TODOS-container */ "./src/dom-functions/DOM-refresh-TODOS-container.js");
/* harmony import */ var _dom_functions_DOM_show_projects_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom-functions/DOM-show-projects.js */ "./src/dom-functions/DOM-show-projects.js");















(0,_dom_functions_DOM_prime_divs_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_dom_functions_DOM_head_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_dom_functions_DOM_body_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_dom_functions_DOM_footer_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_functions_add_project_button_event_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_dom_functions_DOM_addTodo_create_addBtn_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_functions_add_todo_button_event_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
(0,_functions_get_data_from_local_storage_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
(0,_dom_functions_DOM_show_projects_js__WEBPACK_IMPORTED_MODULE_10__["default"])();
(0,_dom_functions_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_9__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxjQUFjLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFN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QWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFLHdCQUF3Qiw0Q0FBNEM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0k7QUFDbUI7QUFDQztBQUNQO0FBQ2pEO0FBQzREO0FBQ0Q7QUFDaEI7Ozs7QUFJaEUsNEVBQWdCO0FBQ2hCLHNFQUFVO0FBQ1Ysc0VBQVU7QUFDVix3RUFBWTtBQUNaLGtGQUFxQjtBQUNyQix1RkFBaUI7QUFDakIsK0VBQWtCO0FBQ2xCLHFGQUF1QjtBQUN2QixnRkFBWTtBQUNaLHNGQUFxQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1hZGRQcm9qZWN0LWNyZWF0ZS1hZGRCdG4uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00tYWRkUHJvamVjdC1zd2FwLUJ0bi10by1Gb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFRvZG8tY3JlYXRlLWFkZEJ0bi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1hZGRUb2RvLXN3YXAtQnRuLXRvLUZvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00tYm9keS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1jcmVhdGUtZWRpdC1wcm9qZWN0LWRyb3Bkb3duLWNvbnRlbnRzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLWVkaXRUb2RvLXN3YXAtdG8tRm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00taGVhZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1wcmltZS1kaXZzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLXJlZnJlc2gtVE9ET1MtY29udGFpbmVyLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLXNob3ctVE9ETy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1zaG93LW1vdmUtVE9ETy1kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1zaG93LXByb2plY3RzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLXdpbmRvdy1saXN0ZW5lci1yZW1vdmUtZWRpdFByb2plY3QtZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00td2luZG93LWxpc3RlbmVyLXJlbW92ZS1tb3ZlVG9kby1kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS13aW5kb3ctbGlzdGVuZXItc3dhcC10b2RvLWZvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL1RPRE8tY3JlYXRvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvYWRkLXByb2plY3QtYnV0dG9uLWV2ZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9hZGQtcHJvamVjdC1kaXZzLWV2ZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9hZGQtcHJvamVjdC1mb3JtLWJ1dHRvbnMtZXZlbnRzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9hZGQtdG9kby1idXR0b24tZXZlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2FkZC10b2RvLWZvcm0tZXZlbnRzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9jaGVjay10b2RvLW91dGRhdGVkLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9jcmVhdGUtbmV3LXRvZG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2VkaXQtdG9kby1mb3JtLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvZ2V0LWRhdGEtZnJvbS1sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9ob21lRGl2LWV2ZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9sb2NhbC1zdG9yYWdlLW1lbmFnZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL3Byb2plY3QtY3JlYXRvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvcHJvamVjdC1tZW5hZ2VyLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy90b2RvRGl2c0V2ZW50cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2VsZW1lbnRzLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy90ZXh0LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICd0ZXh0JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuOnJvb3Qge1xcbiAgICAvKiBjb2xvcnMgKi9cXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjYmFlNmZkO1xcbiAgICAtLXRhcmdldC1jb2xvcjogIzNiODJmNjtcXG4gICAgLS1wb3JvamVjdHMtZGl2cy1iYWNrZ3JvdW5kOiAjMzhiZGY4O1xcbiAgICAtLWxvdy1wcmlvcml0eS1jb2xvcjogI2JiZjdkMDtcXG4gICAgLS1tZWRpdW0tcHJpb3JpdHktY29sb3I6ICNmZWYwOGE7XFxuICAgIC0taGlnaC1wcmlvcml0eS1jb2xvcjogI2ZkYTRhZjtcXG4gICAgLS1vdXRkYXRlZC1jb2xvcjogI2U1ZTdlYjtcXG4gICAgLS1zZXBhcmF0b3ItcmVkOiAjZTExZDQ4O1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG59XFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEyZnIgMC4zZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG4uaGVhZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDExdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG4ubG9nbyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgZm9udC1zaXplOiA1dmg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuLnByb2plY3RzRGl2IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDE5NiwgMTgyKTsgKi9cXG4gICAgYm9yZGVyLXJpZ2h0OiAxdmggc29saWQgdmFyKC0tc2VwYXJhdG9yLXJlZCk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJ2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDEwZnIgMWZyO1xcbn1cXG4ucHJvamVjdHNEaXZIZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zdmg7XFxufVxcbi5ob21lUHJvamVjdERpdiB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbn1cXG4ucHJvamVjdHNDb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDIyMywgMTc2KTsgKi9cXG59XFxuLnRhcmdldCB7XFxuICAgIGJvcmRlcjogMC42dmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG59XFxuLnByb2plY3REaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3JvamVjdHMtZGl2cy1iYWNrZ3JvdW5kKTtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIGZvbnQtc2l6ZTogMi41dmg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjF2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxdmg7XFxuICAgIG1hcmdpbjogMXZoIDAgMXZoIDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG59XFxuLmVkaXRUb2RvQnV0dG9uLCAuZGVsZXRlVG9kb0J1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMy41dmg7XFxuICAgIGhlaWdodDogMy41dmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbn1cXG4ubW92ZVRvZG9CdXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxufVxcbi5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmVkaXRQcm9qZWN0QnV0dG9uIHtcXG4gICAgd2lkdGg6IDN2aDtcXG4gICAgaGVpZ2h0OiAyLjl2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4OyBcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxufVxcbi5kZWxldGVQcm9qZWN0QnV0dG9uIHtcXG4gICAgd2lkdGg6IDN2aDtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbn1cXG4uZHJvcGRvd24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYm90dG9tOiAwLjJ2aDtcXG5cXG59XFxuLmRyb3Bkb3duQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIHdpZHRoOiAyN3ZoO1xcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBwYWRkaW5nOiAxdmggMXZoIDEuNXZoIDF2aDtcXG4gICAgZm9udC1zaXplOiAxLjl2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgbWFyZ2luLXRvcDogMC4zdmg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2VkaXRQcm9qZWN0TmFtZSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41dmg7XFxuICAgIG1hcmdpbi10b3A6IDAuNnZoO1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjR2aDtcXG59XFxuI2VkaXRQcm9qZWN0TmFtZTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMC4zdmggc29saWQgdmFyKC0taGlnaC1wcmlvcml0eS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBjYXJldC1jb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eS1jb2xvcik7XFxufVxcbi5jb25maXJtTmV3TmFtZUJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43dmg7XFxuICAgIGZvbnQtc2l6ZTogMS43dmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuXFxuLmFkZFByb2plY3RDb250YWluZXIge1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eS1jb2xvcik7XFxuICAgIGJvcmRlcjogMC42dmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGdhcDogMC41dmg7XFxuICAgIGZvbnQtc2l6ZTogMi41dmg7XFxufVxcblxcbi5hZGRQcm9qZWN0QnV0dG9uIHtcXG4gICAgd2lkdGg6IDI1dmg7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBib3JkZXI6IDAuNHZoIHNvbGlkIHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJ2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI3Byb2plY3ROYW1lSW5wdXRUZXh0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgICB3aWR0aDogMjN2aDtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4jcHJvamVjdE5hbWVJbnB1dFRleHQ6Zm9jdXMge1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAwLjV2aCBzb2xpZCB2YXIoLS1oaWdoLXByaW9yaXR5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGNhcmV0LWNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5LWNvbG9yKTtcXG59XFxuLnByb2plY3ROYW1lQ29uZmlybUJ0biwgLnByb2plY3ROYW1lQ2FuY2VsQnRue1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgd2lkdGg6IDN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMC4zdmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi50b2Rvc0RpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAxNjcsIDEzOSk7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDAuNWZyIDEwZnIgMWZyO1xcbiAgICBtYXJnaW46IDAgM3ZoIDAgM3ZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbn1cXG4udG9kb0RpdkhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgMjIzLCAyMjMpOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzLjV2aDtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbn1cXG4udG9kb0RhdGFIZWFkZXJEaXYge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnIgMWZyIDRmciAxZnI7XFxuICAgIHBhZGRpbmc6IDAuMjUlIDAuNSU7XFxuICAgIGZvbnQtc2l6ZTogMi41dmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXZoIHNvbGlkIHZhcigtLXNlcGFyYXRvci1yZWQpO1xcbn1cXG4udG9kb0RhdGFIZWFkZXJEaXYgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFsbFRvZG9zQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LWNvbG9yKTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuMyU7XFxuICAgIG1hcmdpbi1yaWdodDogMiU7XFxuICAgIFxcbn1cXG4udG9kb3NDb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIG1hcmdpbi10b3A6IDEuNXZoO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3JvamVjdHMtZGl2cy1iYWNrZ3JvdW5kKTsgKi9cXG59XFxuLnRvZG9EaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyIDFmciA0ZnIgMC41ZnIgMC4yNWZyIDAuMjVmcjtcXG4gICAgbWFyZ2luOiAxJSAwO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbn1cXG4uSGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xcbn1cXG4uTWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yKTtcXG59XFxuLkxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eS1jb2xvcik7XFxufVxcbi5tb3ZlVG9kb1Byb2plY3Rze1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLm1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbn1cXG4ubW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG59XFxuLm1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2LCAubW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW92ZVRvZG9Ecm9wZG93blByb2plY3REaXY6aG92ZXIsIC5tb3ZlVG9kb0Ryb3Bkb3duSG9tZVByb2plY3Q6aG92ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcbi5tb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG4udG9kb0RpdiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFyZ2V0VG9kbyB7XFxuICAgIGJvcmRlcjogMC42dmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG59XFxuLnRvZG9PcHRpb25zQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjc1ZnIgMmZyIDAuNWZyIDEuMmZyIDAuNWZyIDAuNzVmciAwLjc1ZnIgMC43NWZyIDAuNWZyIDNmciAwLjI1ZnIgMC4yNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxLjVmcjtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHktY29sb3IpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDF2aCBzb2xpZCB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAydmg7XFxuICAgIGdhcDogMC41dmg7XFxufVxcbi50b2RvT3B0aW9uc0NvbnRhaW5lciA+IGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9dGV4dGFyZWFdLCBpbnB1dFt0eXBlPWRhdGVdLCBpbnB1dFt0eXBlPXRpbWVdLCBzZWxlY3Qge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAgMXZoO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4udG9kb09wdGlvbnNDb250YWluZXIgPiBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXRleHRhcmVhXTpmb2N1cywgaW5wdXRbdHlwZT1kYXRlXTpmb2N1cywgaW5wdXRbdHlwZT10aW1lXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMC41dmggc29saWQgdmFyKC0taGlnaC1wcmlvcml0eS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBjYXJldC1jb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eS1jb2xvcik7XFxufVxcbi50b2RvQ3JlYXRlQ29uZmlybUJ0biwgLnRvZG9DcmVhdGVDYW5jZWxCdG4sIC50b2RvRWRpdENvbmZpcm1CdG4ge1xcbiAgICB3aWR0aDogMy41dmg7XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAwLjR2aCBzb2xpZCB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuNnZoO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmFkZFRPRE9CdXR0b24ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDEzO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMzh2aDtcXG4gICAgaGVpZ2h0OiA3dmg7XFxuICAgIGJvcmRlcjogMC43dmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnZoO1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG4uY29uZmlybUFuZERyb3Bkb3duIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi50b2RvRGF0YUVycm9yIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICByaWdodDogMC41dmg7XFxuICAgIGJvdHRvbTogMy4zdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZXBhcmF0b3ItcmVkKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zdmg7XFxuICAgIGJvcmRlcjogc29saWQ7XFxuICAgIHBhZGRpbmc6IDAuNXZoIDN2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcblxcbn1cXG4udG9kb09wdGlvbnNDb250YWluZXIgPiBsYWJlbCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4udG9kb0NyZWF0ZURpdkhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMTM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNXZoIHNvbGlkIHZhcigtLXNlcGFyYXRvci1yZWQpO1xcbn1cXG4udG9kb0VkaXREaXZIZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDEzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uZm9vdGVyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDR2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMSU7XFxufVxcbi5naXRJY29uIHtcXG4gICAgaGVpZ2h0OiAzdmg7XFxufVxcbi5vdXRkYXRlZFRvZG97XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4uZ2l0SWNvbiB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcbi5naXRJY29uOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXNlcGFyYXRvci1yZWQpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxufVxcblxcbi50b2RvQ3JlYXRlQ29uZmlybUJ0biwgLnRvZG9DcmVhdGVDYW5jZWxCdG4sIC50b2RvRWRpdENvbmZpcm1CdG4sXFxuIC5hZGRQcm9qZWN0QnV0dG9uLCAuYWRkVE9ET0J1dHRvbiwgLm1vdmVUb2RvQnV0dG9uLCAuZWRpdFRvZG9CdXR0b24sXFxuIC5kZWxldGVUb2RvQnV0dG9uLCAuZWRpdFByb2plY3RCdXR0b24sIC5kZWxldGVQcm9qZWN0QnV0dG9uLCAuY29uZmlybU5ld05hbWVCdXR0b24sIFxcbiAucHJvamVjdE5hbWVDb25maXJtQnRuLCAucHJvamVjdE5hbWVDYW5jZWxCdG4sIC5naXRJY29uIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QiwyREFBaUQ7SUFDakQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNw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QGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvZWxlbWVudHMud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAndGV4dCc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy90ZXh0LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcblxcbjpyb290IHtcXG4gICAgLyogY29sb3JzICovXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2JhZTZmZDtcXG4gICAgLS10YXJnZXQtY29sb3I6ICMzYjgyZjY7XFxuICAgIC0tcG9yb2plY3RzLWRpdnMtYmFja2dyb3VuZDogIzM4YmRmODtcXG4gICAgLS1sb3ctcHJpb3JpdHktY29sb3I6ICNiYmY3ZDA7XFxuICAgIC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yOiAjZmVmMDhhO1xcbiAgICAtLWhpZ2gtcHJpb3JpdHktY29sb3I6ICNmZGE0YWY7XFxuICAgIC0tb3V0ZGF0ZWQtY29sb3I6ICNlNWU3ZWI7XFxuICAgIC0tc2VwYXJhdG9yLXJlZDogI2UxMWQ0ODtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxufVxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMmZyIDAuM2ZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuLmhlYWQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcXG59XFxuLmxvZ28ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGZvbnQtc2l6ZTogNXZoO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcbi5wcm9qZWN0c0RpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAxOTYsIDE4Mik7ICovXFxuICAgIGJvcmRlci1yaWdodDogMXZoIHNvbGlkIHZhcigtLXNlcGFyYXRvci1yZWQpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAydmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxMGZyIDFmcjtcXG59XFxuLnByb2plY3RzRGl2SGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3ZoO1xcbn1cXG4uaG9tZVByb2plY3REaXYge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG59XFxuLnByb2plY3RzQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAyMjMsIDE3Nik7ICovXFxufVxcbi50YXJnZXQge1xcbiAgICBib3JkZXI6IDAuNnZoIHNvbGlkIHZhcigtLXRhcmdldC1jb2xvcik7XFxufVxcbi5wcm9qZWN0RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9yb2plY3RzLWRpdnMtYmFja2dyb3VuZCk7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICBmb250LXNpemU6IDIuNXZoO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xdmg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICBtYXJnaW46IDF2aCAwIDF2aCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxufVxcbi5lZGl0VG9kb0J1dHRvbiwgLmRlbGV0ZVRvZG9CdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDMuNXZoO1xcbiAgICBoZWlnaHQ6IDMuNXZoO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG59XFxuLm1vdmVUb2RvQnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbn1cXG4ucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDF2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5lZGl0UHJvamVjdEJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzdmg7XFxuICAgIGhlaWdodDogMi45dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbn1cXG4uZGVsZXRlUHJvamVjdEJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzdmg7XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHg7IFxcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG59XFxuLmRyb3Bkb3duIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJvdHRvbTogMC4ydmg7XFxuXFxufVxcbi5kcm9wZG93bkNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgICB3aWR0aDogMjd2aDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgcGFkZGluZzogMXZoIDF2aCAxLjV2aCAxdmg7XFxuICAgIGZvbnQtc2l6ZTogMS45dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIG1hcmdpbi10b3A6IDAuM3ZoO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNlZGl0UHJvamVjdE5hbWUge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXZoO1xcbiAgICBtYXJnaW4tdG9wOiAwLjZ2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICAgIG1hcmdpbi1yaWdodDogMC40dmg7XFxufVxcbiNlZGl0UHJvamVjdE5hbWU6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDAuM3ZoIHNvbGlkIHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgY2FyZXQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xcbn1cXG4uY29uZmlybU5ld05hbWVCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3ZoO1xcbiAgICBmb250LXNpemU6IDEuN3ZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcblxcbi5hZGRQcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHktY29sb3IpO1xcbiAgICBib3JkZXI6IDAuNnZoIHNvbGlkIHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJ2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBnYXA6IDAuNXZoO1xcbiAgICBmb250LXNpemU6IDIuNXZoO1xcbn1cXG5cXG4uYWRkUHJvamVjdEJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyNXZoO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYm9yZGVyOiAwLjR2aCBzb2xpZCB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tcHJpb3JpdHktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAydmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0TmFtZUlucHV0VGV4dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXG4gICAgd2lkdGg6IDIzdmg7XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuI3Byb2plY3ROYW1lSW5wdXRUZXh0OmZvY3VzIHtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMC41dmggc29saWQgdmFyKC0taGlnaC1wcmlvcml0eS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBjYXJldC1jb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eS1jb2xvcik7XFxufVxcbi5wcm9qZWN0TmFtZUNvbmZpcm1CdG4sIC5wcm9qZWN0TmFtZUNhbmNlbEJ0bntcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIHdpZHRoOiAzdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDAuM3ZoIHNvbGlkIHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4udG9kb3NEaXYge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMTY3LCAxMzkpOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjVmciAxMGZyIDFmcjtcXG4gICAgbWFyZ2luOiAwIDN2aCAwIDN2aDtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG59XFxuLnRvZG9EaXZIZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzYsIDIyMywgMjIzKTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMy41dmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG59XFxuLnRvZG9EYXRhSGVhZGVyRGl2IHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyIDFmciA0ZnIgMWZyO1xcbiAgICBwYWRkaW5nOiAwLjI1JSAwLjUlO1xcbiAgICBmb250LXNpemU6IDIuNXZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIGJvcmRlci1ib3R0b206IDF2aCBzb2xpZCB2YXIoLS1zZXBhcmF0b3ItcmVkKTtcXG59XFxuLnRvZG9EYXRhSGVhZGVyRGl2ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hbGxUb2Rvc0J1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eS1jb2xvcik7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjMlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xcbiAgICBcXG59XFxuLnRvZG9zQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBtYXJnaW4tdG9wOiAxLjV2aDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9yb2plY3RzLWRpdnMtYmFja2dyb3VuZCk7ICovXFxufVxcbi50b2RvRGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmciAxZnIgNGZyIDAuNWZyIDAuMjVmciAwLjI1ZnI7XFxuICAgIG1hcmdpbjogMSUgMDtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG59XFxuLkhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5LWNvbG9yKTtcXG59XFxuLk1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eS1jb2xvcik7XFxufVxcbi5Mb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHktY29sb3IpO1xcbn1cXG4ubW92ZVRvZG9Qcm9qZWN0c3tcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5tb3ZlVG9kb0Ryb3Bkb3duSG9tZVByb2plY3Qge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG59XFxuLm1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxufVxcbi5tb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdiwgLm1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2OmhvdmVyLCAubW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbn1cXG4ubW92ZVRvZG9Qcm9qZWN0c0Ryb3Bkb3duQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuLnRvZG9EaXYgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhcmdldFRvZG8ge1xcbiAgICBib3JkZXI6IDAuNnZoIHNvbGlkIHZhcigtLXRhcmdldC1jb2xvcik7XFxufVxcbi50b2RvT3B0aW9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43NWZyIDJmciAwLjVmciAxLjJmciAwLjVmciAwLjc1ZnIgMC43NWZyIDAuNzVmciAwLjVmciAzZnIgMC4yNWZyIDAuMjVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMS41ZnI7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LWNvbG9yKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxdmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnZoO1xcbiAgICBnYXA6IDAuNXZoO1xcbn1cXG4udG9kb09wdGlvbnNDb250YWluZXIgPiBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXRleHRhcmVhXSwgaW5wdXRbdHlwZT1kYXRlXSwgaW5wdXRbdHlwZT10aW1lXSwgc2VsZWN0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwIDF2aDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLnRvZG9PcHRpb25zQ29udGFpbmVyID4gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT10ZXh0YXJlYV06Zm9jdXMsIGlucHV0W3R5cGU9ZGF0ZV06Zm9jdXMsIGlucHV0W3R5cGU9dGltZV06Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDAuNXZoIHNvbGlkIHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgY2FyZXQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xcbn1cXG4udG9kb0NyZWF0ZUNvbmZpcm1CdG4sIC50b2RvQ3JlYXRlQ2FuY2VsQnRuLCAudG9kb0VkaXRDb25maXJtQnRuIHtcXG4gICAgd2lkdGg6IDMuNXZoO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMC40dmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjZ2aDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5hZGRUT0RPQnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAxMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDM4dmg7XFxuICAgIGhlaWdodDogN3ZoO1xcbiAgICBib3JkZXI6IDAuN3ZoIHNvbGlkIHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJ2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuLmNvbmZpcm1BbmREcm9wZG93biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udG9kb0RhdGFFcnJvciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgcmlnaHQ6IDAuNXZoO1xcbiAgICBib3R0b206IDMuM3ZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tcHJpb3JpdHktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2VwYXJhdG9yLXJlZCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM3ZoO1xcbiAgICBib3JkZXI6IHNvbGlkO1xcbiAgICBwYWRkaW5nOiAwLjV2aCAzdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG5cXG59XFxuLnRvZG9PcHRpb25zQ29udGFpbmVyID4gbGFiZWwge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLnRvZG9DcmVhdGVEaXZIZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDEzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjV2aCBzb2xpZCB2YXIoLS1zZXBhcmF0b3ItcmVkKTtcXG59XFxuLnRvZG9FZGl0RGl2SGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAxMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmZvb3RlciB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA0dmg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDElO1xcbn1cXG4uZ2l0SWNvbiB7XFxuICAgIGhlaWdodDogM3ZoO1xcbn1cXG4ub3V0ZGF0ZWRUb2Rve1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuLmdpdEljb24ge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG4uZ2l0SWNvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1zZXBhcmF0b3ItcmVkKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cXG5cXG4udG9kb0NyZWF0ZUNvbmZpcm1CdG4sIC50b2RvQ3JlYXRlQ2FuY2VsQnRuLCAudG9kb0VkaXRDb25maXJtQnRuLFxcbiAuYWRkUHJvamVjdEJ1dHRvbiwgLmFkZFRPRE9CdXR0b24sIC5tb3ZlVG9kb0J1dHRvbiwgLmVkaXRUb2RvQnV0dG9uLFxcbiAuZGVsZXRlVG9kb0J1dHRvbiwgLmVkaXRQcm9qZWN0QnV0dG9uLCAuZGVsZXRlUHJvamVjdEJ1dHRvbiwgLmNvbmZpcm1OZXdOYW1lQnV0dG9uLCBcXG4gLnByb2plY3ROYW1lQ29uZmlybUJ0biwgLnByb2plY3ROYW1lQ2FuY2VsQnRuLCAuZ2l0SWNvbiB7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgZGlydHlPcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nOyAvLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIG5vdyByZXF1aXJlZCBmb3IgdGhlIHNha2Ugb2YgZXhwbGljaXRuZXNzLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSlcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpLCBcInl5eXktTU0tZGQnVCdISDptbTpzcy5TU1N4eHhcIilcbiAqICAgYGBgXG4gKlxuICogLSBOZXcgZm9ybWF0IHN0cmluZyBBUEkgZm9yIGBmb3JtYXRgIGZ1bmN0aW9uXG4gKiAgIHdoaWNoIGlzIGJhc2VkIG9uIFtVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzVdKGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGUpLlxuICogICBTZWUgW3RoaXMgcG9zdF0oaHR0cHM6Ly9ibG9nLmRhdGUtZm5zLm9yZy9wb3N0L3VuaWNvZGUtdG9rZW5zLWluLWRhdGUtZm5zLXYyLXNyZWF0eWtpOTFqZykgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiAtIENoYXJhY3RlcnMgYXJlIG5vdyBlc2NhcGVkIHVzaW5nIHNpbmdsZSBxdW90ZSBzeW1ib2xzIChgJ2ApIGluc3RlYWQgb2Ygc3F1YXJlIGJyYWNrZXRzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZywgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBOb3cgYGlzVmFsaWRgIGRvZXNuJ3QgdGhyb3cgYW4gZXhjZXB0aW9uXG4gKiAgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqICAgSW5zdGVhZCwgYXJndW1lbnQgaXMgY29udmVydGVkIGJlZm9yZWhhbmQgdXNpbmcgYHRvRGF0ZWAuXG4gKlxuICogICBFeGFtcGxlczpcbiAqXG4gKiAgIHwgYGlzVmFsaWRgIGFyZ3VtZW50ICAgICAgICB8IEJlZm9yZSB2Mi4wLjAgfCB2Mi4wLjAgb253YXJkIHxcbiAqICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfFxuICogICB8IGBuZXcgRGF0ZSgpYCAgICAgICAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcyMDE2LTAxLTAxJylgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJycpYCAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgxNDg4MzcwODM1MDgxKWAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKE5hTilgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJzIwMTYtMDEtMDEnYCAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnJ2AgICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYDE0ODgzNzA4MzUwODFgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgTmFOYCAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICpcbiAqICAgV2UgaW50cm9kdWNlIHRoaXMgY2hhbmdlIHRvIG1ha2UgKmRhdGUtZm5zKiBjb25zaXN0ZW50IHdpdGggRUNNQVNjcmlwdCBiZWhhdmlvclxuICogICB0aGF0IHRyeSB0byBjb2VyY2UgYXJndW1lbnRzIHRvIHRoZSBleHBlY3RlZCB0eXBlXG4gKiAgICh3aGljaCBpcyBhbHNvIHRoZSBjYXNlIHdpdGggb3RoZXIgKmRhdGUtZm5zKiBmdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uICh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNyZWF0ZUFkZFByb2plY3RCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0Q29udGFpbmVyJyk7XG4gICAgICAgIGFkZFByb2plY3RDb250YWluZXIuaW5uZXJIVE1MPSBcIlwiO1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdEJ1dHRvbicpO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9IFwiKyBBRERcIjtcbiAgICAgICAgYWRkUHJvamVjdENvbnRhaW5lci5hcHBlbmQoYWRkUHJvamVjdEJ1dHRvbik7XG59O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRkUHJvamVjdEJ0biIsImltcG9ydCBhZGRFdmVudEZ1bmN0aW9udHNUb0Zvcm0gZnJvbSAnLi4vZnVuY3Rpb25zL2FkZC1wcm9qZWN0LWZvcm0tYnV0dG9ucy1ldmVudHMuanMnO1xuXG5jb25zdCBzd2FwQ29udGVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0Q29udGFpbmVyJyk7XG4gICAgYWRkUHJvamVjdENvbnRhaW5lci5pbm5lckhUTUw9IFwiXCI7XG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3ROYW1lSW5wdXRUZXh0LnR5cGUgPSBcInRleHRcIjtcbiAgICBwcm9qZWN0TmFtZUlucHV0VGV4dC5pZCA9IFwicHJvamVjdE5hbWVJbnB1dFRleHRcIjtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xhYmVsJyk7XG4gICAgcHJvamVjdE5hbWVJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwicHJvamVjdE5hbWVJbnB1dFRleHRcIik7XG4gICAgcHJvamVjdE5hbWVJbnB1dExhYmVsLmlubmVySFRNTCA9IFwiUHJvamVjdCBuYW1lOlwiO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWVDb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdE5hbWVDb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TmFtZUNvbmZpcm1CdG5cIik7XG4gICAgcHJvamVjdE5hbWVDb25maXJtQnRuLmlubmVyVGV4dD0gXCLinJNcIjtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3ROYW1lQ2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TmFtZUNhbmNlbEJ0blwiKTtcbiAgICBwcm9qZWN0TmFtZUNhbmNlbEJ0bi5pbm5lclRleHQ9IFwi4pyVXCI7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uTWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhbGlkYXRpb25NZXNzYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ3ZhbGlkYXRpb25NZXNzYWdlRGl2Jyk7XG5cblxuICAgIGFkZFByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lSW5wdXRMYWJlbCwgcHJvamVjdE5hbWVJbnB1dFRleHQgLHByb2plY3ROYW1lQ29uZmlybUJ0biwgcHJvamVjdE5hbWVDYW5jZWxCdG4sIHZhbGlkYXRpb25NZXNzYWdlRGl2KTtcblxuICAgIGFkZEV2ZW50RnVuY3Rpb250c1RvRm9ybSgpXG59O1xuZXhwb3J0IGRlZmF1bHQgc3dhcENvbnRlbnRzIiwiY29uc3QgY3JlYXRlQWRkVE9ET3RCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kb09wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb09wdGlvbnNDb250YWluZXInKTtcbiAgICB0b2RvT3B0aW9uc0NvbnRhaW5lci5pbm5lckhUTUw9IFwiXCI7XG4gICAgICAgIGNvbnN0IGFkZFRPRE9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkVE9ET0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRUT0RPQnV0dG9uJyk7XG4gICAgICAgIGFkZFRPRE9CdXR0b24uaW5uZXJUZXh0ID0gXCIrIEFERCBuZXcgVG9Eb1wiO1xuICAgICAgICB0b2RvT3B0aW9uc0NvbnRhaW5lci5hcHBlbmQoYWRkVE9ET0J1dHRvbik7XG59O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRkVE9ET3RCdG4iLCJpbXBvcnQgbmV3VG9kb0J1dHRvbnNFdmVudHMgZnJvbSAnLi4vZnVuY3Rpb25zL2FkZC10b2RvLWZvcm0tZXZlbnRzLmpzJztcblxuY29uc3Qgc3dhcHRvZG9PcHRpb25zQ29udGFpbmVyQ29udGVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kb09wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb09wdGlvbnNDb250YWluZXInKTtcbiAgICB0b2RvT3B0aW9uc0NvbnRhaW5lci5pbm5lckhUTUw9IFwiXCI7XG5cbiAgICBjb25zdCB0b2RvTmFtZUlucHV0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb05hbWVJbnB1dFRleHQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRvZG9OYW1lSW5wdXRUZXh0LmlkID0gXCJ0b2RvTmFtZUlucHV0VGV4dFwiO1xuXG4gICAgY29uc3QgdG9kb05hbWVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvTmFtZUlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJ0b2RvTmFtZUlucHV0VGV4dFwiKTtcbiAgICB0b2RvTmFtZUlucHV0TGFiZWwuaW5uZXJIVE1MID0gXCJUb0RvIG5hbWU6XCI7XG5cbiAgICBjb25zdCB0b2RvRGF0ZVBpY2tlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvRGF0ZVBpY2tlckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb0RhdGVQaWNrZXJJbnB1dFwiKTtcbiAgICB0b2RvRGF0ZVBpY2tlckxhYmVsLmlubmVySFRNTCA9IFwiRGF0ZTpcIjtcblxuICAgIGNvbnN0IHRvZG9EYXRlUGlja2VySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9EYXRlUGlja2VySW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIHRvZG9EYXRlUGlja2VySW5wdXQuaWQgPSBcInRvZG9EYXRlUGlja2VySW5wdXRcIjtcblxuICAgIGNvbnN0IHRvZG9UaW1lUGlja2VyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMYWJlbCcpO1xuICAgIHRvZG9UaW1lUGlja2VyTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJ0b2RvVGltZVBpY2tlcklucHV0XCIpO1xuICAgIHRvZG9UaW1lUGlja2VyTGFiZWwuaW5uZXJIVE1MID0gXCJUaW1lOlwiO1xuXG4gICAgY29uc3QgdG9kb1RpbWVQaWNrZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb1RpbWVQaWNrZXJJbnB1dC50eXBlID0gXCJ0aW1lXCI7XG4gICAgdG9kb1RpbWVQaWNrZXJJbnB1dC5pZCA9IFwidG9kb1RpbWVQaWNrZXJJbnB1dFwiO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5U2VsZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMYWJlbCcpO1xuICAgIHRvZG9Qcmlvcml0eVNlbGVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb1ByaW9yaXR5U2VsZWN0XCIpO1xuICAgIHRvZG9Qcmlvcml0eVNlbGVjdExhYmVsLmlubmVySFRNTCA9IFwiUHJpb3JpdHk6XCI7XG5cbiAgICBjb25zdCB0b2RvUHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICB0b2RvUHJpb3JpdHlTZWxlY3QuaWQgPSBcInRvZG9Qcmlvcml0eVNlbGVjdFwiO1xuXG4gICAgbGV0IHByaW9yaXR5QXJyYXkgPSBbJ0hpZ2gnLCAnTWVkaXVtJywgJ0xvdyddO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmlvcml0eUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHByaW9yaXR5LnZhbHVlID0gcHJpb3JpdHlBcnJheVtpXTtcbiAgICAgICAgcHJpb3JpdHkudGV4dCA9IHByaW9yaXR5QXJyYXlbaV07XG4gICAgICAgIHRvZG9Qcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCB0b2RvTm90ZXNJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvTm90ZXNJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb05vdGVzSW5wdXRMYWJlbFwiKTtcbiAgICB0b2RvTm90ZXNJbnB1dExhYmVsLmlubmVySFRNTCA9IFwiTm90ZXM6XCI7XG5cbiAgICBjb25zdCB0b2RvTm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb05vdGVzSW5wdXQudHlwZSA9IFwidGV4dGFyZWFcIjtcbiAgICB0b2RvTm90ZXNJbnB1dC5pZCA9IFwidG9kb05vdGVzSW5wdXRcIjtcblxuICAgIGNvbnN0IGNvbmZpcm1BbmREcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbmZpcm1BbmREcm9wZG93bi5jbGFzc0xpc3QuYWRkKCdjb25maXJtQW5kRHJvcGRvd24nKTtcblxuXG4gICAgY29uc3QgdG9kb0NyZWF0ZUNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvQ3JlYXRlQ29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKFwidG9kb0NyZWF0ZUNvbmZpcm1CdG5cIik7XG4gICAgdG9kb0NyZWF0ZUNvbmZpcm1CdG4uaW5uZXJUZXh0PSBcIuKck1wiO1xuXG4gICAgY29uc3QgdG9kb0NyZWF0ZUNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZG9DcmVhdGVDYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcInRvZG9DcmVhdGVDYW5jZWxCdG5cIik7XG4gICAgdG9kb0NyZWF0ZUNhbmNlbEJ0bi5pbm5lclRleHQ9IFwi4pyVXCI7XG5cbiAgICBjb25zdCB0b2RvQ3JlYXRlRGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0NyZWF0ZURpdkhlYWRlci5jbGFzc0xpc3QuYWRkKCd0b2RvQ3JlYXRlRGl2SGVhZGVyJyk7XG4gICAgdG9kb0NyZWF0ZURpdkhlYWRlci50ZXh0Q29udGVudCA9ICdBREQgTkVXIFRPRE8nO1xuXG4gICAgY29uZmlybUFuZERyb3Bkb3duLmFwcGVuZCh0b2RvQ3JlYXRlQ29uZmlybUJ0bik7XG5cbiAgICB0b2RvT3B0aW9uc0NvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgIHRvZG9DcmVhdGVEaXZIZWFkZXIsXG4gICAgICAgIHRvZG9OYW1lSW5wdXRMYWJlbCwgXG4gICAgICAgIHRvZG9OYW1lSW5wdXRUZXh0ICxcbiAgICAgICAgdG9kb0RhdGVQaWNrZXJMYWJlbCxcbiAgICAgICAgdG9kb0RhdGVQaWNrZXJJbnB1dCxcbiAgICAgICAgdG9kb1RpbWVQaWNrZXJMYWJlbCxcbiAgICAgICAgdG9kb1RpbWVQaWNrZXJJbnB1dCxcbiAgICAgICAgdG9kb1ByaW9yaXR5U2VsZWN0TGFiZWwsXG4gICAgICAgIHRvZG9Qcmlvcml0eVNlbGVjdCxcbiAgICAgICAgdG9kb05vdGVzSW5wdXRMYWJlbCxcbiAgICAgICAgdG9kb05vdGVzSW5wdXQsXG4gICAgICAgIGNvbmZpcm1BbmREcm9wZG93bixcbiAgICAgICAgdG9kb0NyZWF0ZUNhbmNlbEJ0blxuICAgICk7XG5cbiAgICBuZXdUb2RvQnV0dG9uc0V2ZW50cygpO1xufTtcbmV4cG9ydCBkZWZhdWx0IHN3YXB0b2RvT3B0aW9uc0NvbnRhaW5lckNvbnRlbnRzIiwiaW1wb3J0IHNob3dUb2Rvc0Zyb21Ib21lUHJvamVjdCBmcm9tIFwiLi4vZnVuY3Rpb25zL2hvbWVEaXYtZXZlbnQuanNcIjtcbmltcG9ydCBzd2FwRWRpdE9yQWRkVG9kb0Zvcm1Ub0J1dHRvbiBmcm9tIFwiLi9ET00td2luZG93LWxpc3RlbmVyLXN3YXAtdG9kby1mb3JtLmpzXCI7XG5pbXBvcnQgcmVtb3ZlRHJvcGRvd24gZnJvbSBcIi4vRE9NLXdpbmRvdy1saXN0ZW5lci1yZW1vdmUtZWRpdFByb2plY3QtZHJvcGRvd24uanNcIjtcbmltcG9ydCByZW1vdmVNb3ZlVG9kb0Ryb3Bkb3duIGZyb20gXCIuL0RPTS13aW5kb3ctbGlzdGVuZXItcmVtb3ZlLW1vdmVUb2RvLWRyb3Bkb3duLmpzXCJcbmNvbnN0IGNyZWF0ZUJvZHkgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5JylcblxuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNEaXYnKTtcblxuICAgIGNvbnN0IGhvbWVQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZVByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnaG9tZVByb2plY3REaXYnLCAndGFyZ2V0Jyk7XG4gICBcbiAgICBjb25zdCBob21lUHJvamVjdERpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZVByb2plY3REaXZUaXRsZS5jbGFzc0xpc3QuYWRkKCdob21lUHJvamVjdERpdlRpdGxlJylcbiAgICBob21lUHJvamVjdERpdlRpdGxlLmlubmVyVGV4dCA9IFwiSE9NRVwiO1xuICAgIGhvbWVQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGhvbWVQcm9qZWN0RGl2VGl0bGUpO1xuXG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c0NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZFByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdENvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdEJ1dHRvbicpO1xuICAgIGFkZFByb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gXCIrIEFERFwiO1xuXG4gICAgY29uc3QgcHJvamVjdHNEaXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHByb2plY3RzRGl2SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzRGl2SGVhZGVyJyk7XG4gICAgcHJvamVjdHNEaXZIZWFkZXIuaW5uZXJUZXh0ID0gXCJQUk9KRUNUUzpcIjtcblxuICAgIGFkZFByb2plY3RDb250YWluZXIuYXBwZW5kKGFkZFByb2plY3RCdXR0b24pO1xuXG4gICAgc2hvd1RvZG9zRnJvbUhvbWVQcm9qZWN0KGhvbWVQcm9qZWN0RGl2KVxuXG4gICAgcHJvamVjdHNEaXYuYXBwZW5kKHByb2plY3RzRGl2SGVhZGVyLCBob21lUHJvamVjdERpdiwgcHJvamVjdHNDb250YWluZXIsIGFkZFByb2plY3RDb250YWluZXIpO1xuXG4gICAgY29uc3QgdG9kb3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2Rvc0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2Rvc0RpdicpO1xuXG4gICAgY29uc3QgdG9kb0RpdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9EaXZIZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kb0RpdkhlYWRlcicpO1xuICAgIHRvZG9EaXZIZWFkZXIuaW5uZXJUZXh0ID0gXCJZT1VSIFBMQU5ORUQgVEFTS1NcIjtcblxuXG4gICAgY29uc3QgdG9kb0RhdGFIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGF0YUhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0YUhlYWRlckRpdicpO1xuXG4gICAgY29uc3QgdG9kb05hbWVEYXRhSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb05hbWVEYXRhSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9OYW1lRGF0YUhlYWRlcicpO1xuICAgIHRvZG9OYW1lRGF0YUhlYWRlci5pbm5lclRleHQgPSBcIk5BTUVcIjtcblxuICAgIGNvbnN0IHRvZG9EYXRlRGF0YUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9EYXRlRGF0YUhlYWRlci5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0ZURhdGFIZWFkZXInKTtcbiAgICB0b2RvRGF0ZURhdGFIZWFkZXIuaW5uZXJUZXh0ID0gXCJEQVRFXCI7XG5cbiAgICBjb25zdCB0b2RvVGltZURhdGFIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvVGltZURhdGFIZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kb1RpbWVEYXRhSGVhZGVyJyk7XG4gICAgdG9kb1RpbWVEYXRhSGVhZGVyLmlubmVyVGV4dCA9IFwiVElNRVwiO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5RGF0YUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Qcmlvcml0eURhdGFIZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kb1ByaW9yaXR5RGF0YUhlYWRlcicpO1xuICAgIHRvZG9Qcmlvcml0eURhdGFIZWFkZXIuaW5uZXJUZXh0ID0gXCJQUklPUklUWVwiO1xuXG4gICAgY29uc3QgdG9kb05vdGVEYXRhSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb05vdGVEYXRhSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9Ob3RlRGF0YUhlYWRlcicpO1xuICAgIHRvZG9Ob3RlRGF0YUhlYWRlci5pbm5lclRleHQgPSBcIk5PVEVcIjtcblxuICAgIGNvbnN0IHRvZG9GdW5jdGlvbnNEYXRhSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0Z1bmN0aW9uc0RhdGFIZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kb0Z1bmN0aW9uc0RhdGFIZWFkZXInKTtcbiAgICB0b2RvRnVuY3Rpb25zRGF0YUhlYWRlci5pbm5lclRleHQgPSBcIkZVTkNUSU9OU1wiO1xuXG4gICAgdG9kb0RhdGFIZWFkZXJEaXYuYXBwZW5kKHRvZG9OYW1lRGF0YUhlYWRlciwgdG9kb0RhdGVEYXRhSGVhZGVyLCB0b2RvVGltZURhdGFIZWFkZXIsIHRvZG9Qcmlvcml0eURhdGFIZWFkZXIsIHRvZG9Ob3RlRGF0YUhlYWRlciwgdG9kb0Z1bmN0aW9uc0RhdGFIZWFkZXIpO1xuXG4gICAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2Rvc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2Rvc0NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgdG9kb09wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvT3B0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvT3B0aW9uc0NvbnRhaW5lcicpO1xuXG5cblxuICAgIHRvZG9zRGl2LmFwcGVuZCh0b2RvRGl2SGVhZGVyLCB0b2RvRGF0YUhlYWRlckRpdiwgdG9kb3NDb250YWluZXIsIHRvZG9PcHRpb25zQ29udGFpbmVyKTtcblxuICAgIGJvZHkuYXBwZW5kKHByb2plY3RzRGl2LCB0b2Rvc0Rpdik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgc3dhcEVkaXRPckFkZFRvZG9Gb3JtVG9CdXR0b24oZSk7XG4gICAgICAgIHJlbW92ZURyb3Bkb3duKGUpO1xuICAgICAgICByZW1vdmVNb3ZlVG9kb0Ryb3Bkb3duKGUpO1xuICAgIH0pO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCb2R5IiwiXG5jb25zdCBjcmVhdGVFZGl0UHJvamVjdERyb3Bkb3duQ29udGVudHMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkcm9wZG93bkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25Db250ZW50Jyk7XG5cbiAgICBjb25zdCBlZGl0UHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZWRpdFByb2plY3ROYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGVkaXRQcm9qZWN0TmFtZUlucHV0LmlkID0gXCJlZGl0UHJvamVjdE5hbWVcIjtcblxuICAgIGNvbnN0IGVkaXRQcm9qZWN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICBlZGl0UHJvamVjdE5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcImVkaXRQcm9qZWN0TmFtZVwiKTtcbiAgICBlZGl0UHJvamVjdE5hbWVMYWJlbC5pbm5lckhUTUwgPSBcIk5ldyBwcm9qZWN0IG5hbWU6XCI7XG5cbiAgICBjb25zdCBjb25maXJtTmV3TmFtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbmZpcm1OZXdOYW1lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbmZpcm1OZXdOYW1lQnV0dG9uJyk7XG4gICAgY29uZmlybU5ld05hbWVCdXR0b24udGV4dENvbnRlbnQgPSAn4pyTJztcblxuICAgIGRyb3Bkb3duQ29udGVudC5hcHBlbmQoZWRpdFByb2plY3ROYW1lTGFiZWwsIGVkaXRQcm9qZWN0TmFtZUlucHV0LCBjb25maXJtTmV3TmFtZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gW1xuICAgICAgICBkcm9wZG93bkNvbnRlbnRcbiAgICBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWRpdFByb2plY3REcm9wZG93bkNvbnRlbnRzIiwiaW1wb3J0IGVkaXRUb2RvQnV0dG9uc0V2ZW50cyBmcm9tICcuLi9mdW5jdGlvbnMvZWRpdC10b2RvLWZvcm0tZXZlbnRzLmpzJztcblxuY29uc3QgZWRpdFRvZG9Db250YWluZXJDb250ZW50cyA9IChcbiAgICBwYXNzZWRUYXJnZXRQcm9qZWN0SW5kZXgsXG4gICAgcGFzc2VkVG9kb0luZGV4LFxuICAgIHRvZG9OYW1lRGl2Q29udGVudCxcbiAgICB0b2RvRGF0ZURpdkNvbnRlbnQsXG4gICAgdG9kb1RpbWVEaXZDb250ZW50LFxuICAgIHRvZG9Ob3Rlc0RpdkNvbnRlbnRcbikgPT4ge1xuICAgIGxldCAgdGFyZ2V0UHJvamVjdEluZGV4ID0gcGFzc2VkVGFyZ2V0UHJvamVjdEluZGV4O1xuICAgIGxldCAgdG9kb0luZGV4ID0gcGFzc2VkVG9kb0luZGV4O1xuXG4gICAgY29uc3QgdG9kb09wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb09wdGlvbnNDb250YWluZXInKTtcbiAgICB0b2RvT3B0aW9uc0NvbnRhaW5lci5pbm5lckhUTUw9IFwiXCI7XG5cbiAgICBjb25zdCB0b2RvTmFtZUlucHV0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb05hbWVJbnB1dFRleHQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRvZG9OYW1lSW5wdXRUZXh0LmlkID0gXCJ0b2RvTmFtZUlucHV0VGV4dFwiO1xuICAgIHRvZG9OYW1lSW5wdXRUZXh0LnZhbHVlID0gdG9kb05hbWVEaXZDb250ZW50O1xuXG4gICAgY29uc3QgdG9kb05hbWVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvTmFtZUlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJ0b2RvTmFtZUlucHV0VGV4dFwiKTtcbiAgICB0b2RvTmFtZUlucHV0TGFiZWwuaW5uZXJIVE1MID0gXCJUb0RvIG5hbWU6XCI7XG5cbiAgICBjb25zdCB0b2RvRGF0ZVBpY2tlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvRGF0ZVBpY2tlckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb0RhdGVQaWNrZXJJbnB1dFwiKTtcbiAgICB0b2RvRGF0ZVBpY2tlckxhYmVsLmlubmVySFRNTCA9IFwiRGF0ZTpcIjtcblxuICAgIGNvbnN0IHRvZG9EYXRlUGlja2VySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9EYXRlUGlja2VySW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIHRvZG9EYXRlUGlja2VySW5wdXQuaWQgPSBcInRvZG9EYXRlUGlja2VySW5wdXRcIjtcbiAgICB0b2RvRGF0ZVBpY2tlcklucHV0LnZhbHVlID0gdG9kb0RhdGVEaXZDb250ZW50O1xuXG5cbiAgICBjb25zdCB0b2RvVGltZVBpY2tlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvVGltZVBpY2tlckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb1RpbWVQaWNrZXJJbnB1dFwiKTtcbiAgICB0b2RvVGltZVBpY2tlckxhYmVsLmlubmVySFRNTCA9IFwiVGltZTpcIjtcblxuICAgIGNvbnN0IHRvZG9UaW1lUGlja2VySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9UaW1lUGlja2VySW5wdXQudHlwZSA9IFwidGltZVwiO1xuICAgIHRvZG9UaW1lUGlja2VySW5wdXQuaWQgPSBcInRvZG9UaW1lUGlja2VySW5wdXRcIjtcbiAgICB0b2RvVGltZVBpY2tlcklucHV0LnZhbHVlID0gdG9kb1RpbWVEaXZDb250ZW50O1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5U2VsZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMYWJlbCcpO1xuICAgIHRvZG9Qcmlvcml0eVNlbGVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb1ByaW9yaXR5U2VsZWN0XCIpO1xuICAgIHRvZG9Qcmlvcml0eVNlbGVjdExhYmVsLmlubmVySFRNTCA9IFwiUHJpb3JpdHk6XCI7XG5cbiAgICBjb25zdCB0b2RvUHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICB0b2RvUHJpb3JpdHlTZWxlY3QuaWQgPSBcInRvZG9Qcmlvcml0eVNlbGVjdFwiO1xuXG4gICAgbGV0IHByaW9yaXR5QXJyYXkgPSBbJ0hpZ2gnLCAnTWVkaXVtJywgJ0xvdyddO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmlvcml0eUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHByaW9yaXR5LnZhbHVlID0gcHJpb3JpdHlBcnJheVtpXTtcbiAgICAgICAgcHJpb3JpdHkudGV4dCA9IHByaW9yaXR5QXJyYXlbaV07XG4gICAgICAgIHRvZG9Qcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCB0b2RvTm90ZXNJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvTm90ZXNJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb05vdGVzSW5wdXRMYWJlbFwiKTtcbiAgICB0b2RvTm90ZXNJbnB1dExhYmVsLmlubmVySFRNTCA9IFwiTm90ZXM6XCI7XG5cbiAgICBjb25zdCB0b2RvTm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb05vdGVzSW5wdXQudHlwZSA9IFwidGV4dGFyZWFcIjtcbiAgICB0b2RvTm90ZXNJbnB1dC5pZCA9IFwidG9kb05vdGVzSW5wdXRcIjtcbiAgICB0b2RvTm90ZXNJbnB1dC52YWx1ZSA9IHRvZG9Ob3Rlc0RpdkNvbnRlbnQ7XG5cbiAgICBjb25zdCB0b2RvRWRpdENvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvRWRpdENvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZChcInRvZG9FZGl0Q29uZmlybUJ0blwiKTtcbiAgICB0b2RvRWRpdENvbmZpcm1CdG4uaW5uZXJUZXh0PSBcIlZcIjtcblxuICAgIGNvbnN0IHRvZG9DcmVhdGVDYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvQ3JlYXRlQ2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvQ3JlYXRlQ2FuY2VsQnRuXCIpO1xuICAgIHRvZG9DcmVhdGVDYW5jZWxCdG4uaW5uZXJUZXh0PSBcIlhcIjtcblxuICAgIGNvbnN0IHRvZG9DcmVhdGVEaXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvQ3JlYXRlRGl2SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9FZGl0RGl2SGVhZGVyJyk7XG4gICAgdG9kb0NyZWF0ZURpdkhlYWRlci50ZXh0Q29udGVudCA9ICdFRElUIFRPRE8nO1xuXG4gICAgY29uc3QgY29uZmlybUFuZERyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uZmlybUFuZERyb3Bkb3duLmNsYXNzTGlzdC5hZGQoJ2NvbmZpcm1BbmREcm9wZG93bicpO1xuXG4gICAgY29uZmlybUFuZERyb3Bkb3duLmFwcGVuZCh0b2RvRWRpdENvbmZpcm1CdG4pO1xuXG4gICAgdG9kb09wdGlvbnNDb250YWluZXIuYXBwZW5kKFxuICAgICAgICB0b2RvQ3JlYXRlRGl2SGVhZGVyLFxuICAgICAgICB0b2RvTmFtZUlucHV0TGFiZWwsIFxuICAgICAgICB0b2RvTmFtZUlucHV0VGV4dCAsXG4gICAgICAgIHRvZG9EYXRlUGlja2VyTGFiZWwsXG4gICAgICAgIHRvZG9EYXRlUGlja2VySW5wdXQsXG4gICAgICAgIHRvZG9UaW1lUGlja2VyTGFiZWwsXG4gICAgICAgIHRvZG9UaW1lUGlja2VySW5wdXQsXG4gICAgICAgIHRvZG9Qcmlvcml0eVNlbGVjdExhYmVsLFxuICAgICAgICB0b2RvUHJpb3JpdHlTZWxlY3QsXG4gICAgICAgIHRvZG9Ob3Rlc0lucHV0TGFiZWwsXG4gICAgICAgIHRvZG9Ob3Rlc0lucHV0LFxuICAgICAgICBjb25maXJtQW5kRHJvcGRvd24sXG4gICAgICAgIHRvZG9DcmVhdGVDYW5jZWxCdG5cbiAgICApO1xuXG4gICAgZWRpdFRvZG9CdXR0b25zRXZlbnRzKHRhcmdldFByb2plY3RJbmRleCwgdG9kb0luZGV4KTtcbn07XG5leHBvcnQgZGVmYXVsdCBlZGl0VG9kb0NvbnRhaW5lckNvbnRlbnRzIiwiaW1wb3J0IGdpdExvZ28gZnJvbSAnLi4vaWNvbnMvZ2l0TG9nby5wbmcnO1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpXG4gICAgXG4gICAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVEaXYuY2xhc3NMaXN0LmFkZCgnbmFtZURpdicpO1xuICAgIG5hbWVEaXYuaW5uZXJUZXh0ID0gJ01hY2llaiBEYWJyb3dza2knXG5cbiAgICBjb25zdCBnaXRMb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2l0TG9nb0Rpdi5jbGFzc0xpc3QuYWRkKCdnaXRMb2dvRGl2Jyk7XG4gICAgY29uc3QgZ2l0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGdpdEljb24uY2xhc3NMaXN0LmFkZCgnZ2l0SWNvbicpXG4gICAgZ2l0SWNvbi5zcmMgPSBnaXRMb2dvO1xuXG4gICAgZ2l0TG9nb0Rpdi5hcHBlbmQoZ2l0SWNvbik7XG5cbiAgICBmb290ZXJEaXYuYXBwZW5kKG5hbWVEaXYsIGdpdExvZ29EaXYpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdpdEljb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vZ2l0aHViLmNvbS9NYWNpZWpEYWJyb3dza2lpJywgJ19ibGFuaycpLmZvY3VzKCk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXIiLCJjb25zdCBjcmVhdGVIZWFkID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICBsb2dvLmlubmVyVGV4dCA9IFwiVE9ETyAtIEFwcCB0byBub3QgZm9yZ2V0XCI7XG5cbiAgICBjb25zdCBub3RpZmljYXRpb25EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm90aWZpY2F0aW9uRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdub3RpZmljYXRpb25EYXRlRGl2Jyk7XG5cbiAgICBjb25zdCBub3RpZmljYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3RpZmljYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnbm90aWZpY2F0aW9uRGl2Jyk7XG4gICAgXG4gICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZGF0ZURpdicpO1xuXG4gICAgbm90aWZpY2F0aW9uRGF0ZURpdi5hcHBlbmQobm90aWZpY2F0aW9uRGl2LCBkYXRlRGl2KTtcblxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZCcpO1xuICAgIGhlYWQuYXBwZW5kKGxvZ28sIG5vdGlmaWNhdGlvbkRhdGVEaXYpO1xuXG59O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZCIsImNvbnN0IGhlYWRlckJvZHlGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmJvZHk7XG5cbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZC5jbGFzc0xpc3QuYWRkKCdoZWFkJyk7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5Jyk7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgICBtYWluRGl2LmFwcGVuZChoZWFkLCBib2R5LCBmb290ZXIpO1xuXG59O1xuZXhwb3J0IGRlZmF1bHQgaGVhZGVyQm9keUZvb3RlciIsImltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi4vZnVuY3Rpb25zL3Byb2plY3QtbWVuYWdlci5qc1wiO1xuaW1wb3J0IGRvbVNob3dUb2RvIGZyb20gXCIuL0RPTS1zaG93LVRPRE8uanNcIjtcblxuY29uc3QgcmVmcmVzaFRvZG9zQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc0NvbnRhaW5lcicpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGV0IHRhcmdldFByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldCcpLmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgIGxldCB0YXJnZXRQcm9qZWN0SW5kZXggPSAwO1xuICAgIGlmKHRhcmdldFByb2plY3ROYW1lID09PSBcIkhPTUVcIikge1xuICAgICAgICBwcm9qZWN0TWVuYWdlci5nZXRIb21lVG9kb3NBcnJheSgpLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBkb21TaG93VG9kbyh0b2RvLCBpbmRleCk7XG4gICAgICAgIH0pXG4gICAgfWVsc2Uge1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgPT09IHRhcmdldFByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0UHJvamVjdEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpW3RhcmdldFByb2plY3RJbmRleF0uZ2V0VG9kb3NBcnJheSgpLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBkb21TaG93VG9kbyh0b2RvLCBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCByZWZyZXNoVG9kb3NDb250YWluZXIiLCJpbXBvcnQgdG9kb0RpdnNFdmVudHMgZnJvbSBcIi4uL2Z1bmN0aW9ucy90b2RvRGl2c0V2ZW50c1wiO1xuaW1wb3J0IGNoZWNrVG9kb091dGRhdGUgZnJvbSBcIi4uL2Z1bmN0aW9ucy9jaGVjay10b2RvLW91dGRhdGVkXCI7XG5cbmNvbnN0IGRvbVNob3dUb2RvID0gKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgbGV0IHRvZG9JbmRleCA9IGluZGV4O1xuICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvRGl2JyxgJHt0b2RvLmdldFRvZG9Qcmlvcml0eSgpfWAgKTtcblxuXG4gICAgY29uc3QgdG9kb05hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvTmFtZURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvTmFtZURpdicpO1xuICAgIHRvZG9OYW1lRGl2LnRleHRDb250ZW50ID0gdG9kby5nZXRUb2RvTmFtZSgpO1xuXG4gICAgY29uc3QgdG9kb0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0ZURpdicpO1xuICAgIHRvZG9EYXRlRGl2LnRleHRDb250ZW50ID0gdG9kby5nZXRUb2RvRGF0ZSgpO1xuXG4gICAgY29uc3QgdG9kb1RpbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvVGltZURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvVGltZURpdicpO1xuICAgIHRvZG9UaW1lRGl2LnRleHRDb250ZW50ID0gdG9kby5nZXR0b2RvVGltZSgpO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9UaW1lRGl2Jyk7XG4gICAgdG9kb1ByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gdG9kby5nZXRUb2RvUHJpb3JpdHkoKTtcblxuICAgIGNvbnN0IHRvZG9Ob3Rlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Ob3Rlc0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvVGltZURpdicpO1xuICAgIHRvZG9Ob3Rlc0Rpdi50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VG9kb05vdGVzKCk7XG5cbiAgICBjb25zdCBtb3ZlVG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1vdmVUb2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21vdmVUb2RvQnV0dG9uJyk7XG4gICAgbW92ZVRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIk1vdmVcIjtcblxuICAgIGNvbnN0IGVkaXRUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdFRvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdFRvZG9CdXR0b24nKTtcbiAgICBlZGl0VG9kb0J1dHRvbi50ZXh0Q29udGVudCA9IFwi4pyOXCI7XG5cbiAgICBjb25zdCBtb3ZlVG9kb0Ryb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW92ZVRvZG9Ecm9wZG93bi5jbGFzc0xpc3QuYWRkKCdtb3ZlVG9kb0Ryb3Bkb3duJyk7XG5cbiAgICBtb3ZlVG9kb0Ryb3Bkb3duLmFwcGVuZChtb3ZlVG9kb0J1dHRvbik7XG5cbiAgICBjb25zdCBkZWxldGVUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlVG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVUb2RvQnV0dG9uJyk7XG4gICAgZGVsZXRlVG9kb0J1dHRvbi50ZXh0Q29udGVudCA9IFwi4pyVXCI7XG5cbiAgICBcblxuXG4gICAgdG9kb0Rpdi5hcHBlbmQodG9kb05hbWVEaXYsIHRvZG9EYXRlRGl2LCB0b2RvVGltZURpdiwgdG9kb1ByaW9yaXR5RGl2LCB0b2RvTm90ZXNEaXYsIG1vdmVUb2RvRHJvcGRvd24sIGVkaXRUb2RvQnV0dG9uLCBkZWxldGVUb2RvQnV0dG9uKTtcbiAgICBjaGVja1RvZG9PdXRkYXRlKHRvZG9EYXRlRGl2LCB0b2RvRGl2LCB0b2RvVGltZURpdik7XG4gICAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG4gICAgdG9kb0RpdnNFdmVudHMoKS50b2RvVGFyZ2V0RXZlbnQodG9kb0Rpdik7XG4gICAgdG9kb0RpdnNFdmVudHMoKS50b2RvRGVsZXRlQnV0dG9uRXZlbnQoZGVsZXRlVG9kb0J1dHRvbiwgdG9kb0luZGV4KTtcbiAgICB0b2RvRGl2c0V2ZW50cygpLnRvZG9FZGl0QnV0dG9uRXZlbnQoZWRpdFRvZG9CdXR0b24sIHRvZG9JbmRleCwgdG9kby5nZXRUb2RvTmFtZSgpLCB0b2RvLmdldFRvZG9EYXRlKCksIHRvZG8uZ2V0dG9kb1RpbWUoKSwgdG9kby5nZXRUb2RvTm90ZXMoKSk7XG4gICAgdG9kb0RpdnNFdmVudHMoKS50b2RvTW92ZUJ1dHRvbkV2ZW50KG1vdmVUb2RvQnV0dG9uLCB0b2RvSW5kZXgsIHRvZG9EaXYpO1xuICAgIFxuXG59O1xuZXhwb3J0IGRlZmF1bHQgZG9tU2hvd1RvZG8iLCJpbXBvcnQgcHJvamVjdE1lbmFnZXIgZnJvbSBcIi4uL2Z1bmN0aW9ucy9wcm9qZWN0LW1lbmFnZXIuanNcIjtcbmltcG9ydCByZWZyZXNoVG9kb3NDb250YWluZXIgZnJvbSBcIi4vRE9NLXJlZnJlc2gtVE9ET1MtY29udGFpbmVyXCI7XG5pbXBvcnQgdXBkYXRlTG9jYWxTdG9yYWdlIGZyb20gXCIuLi9mdW5jdGlvbnMvbG9jYWwtc3RvcmFnZS1tZW5hZ2VyLmpzXCI7XG5cbmNvbnN0IG1vdmVUb2RvRHJvcGRvd25Db250ZW50cyA9ICh0YXJnZXRQcm9qZWN0TmFtZSwgdG9kb0luZGV4KSA9PiB7XG4gICAgXG4gICAgY29uc3QgbW92ZVRvZG9Ecm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXRUb2RvJykucXVlcnlTZWxlY3RvcignLm1vdmVUb2RvRHJvcGRvd24nKTtcbiAgICBjb25zdCBtb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW92ZVRvZG9Qcm9qZWN0c0Ryb3Bkb3duQ29udGFpbmVyJyk7XG4gICAgY29uc3QgbW92ZVRvZG9Qcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vdmVUb2RvUHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnbW92ZVRvZG9Qcm9qZWN0cycpO1xuXG4gICAgXG4gICAgaWYgKHRhcmdldFByb2plY3ROYW1lID09PSBcIkhPTUVcIikge1xuICAgICAgICBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KCkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ21vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2Jyk7XG4gICAgICAgICAgICBtb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgbW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCB0b2RvVG9Nb3ZlID0gcHJvamVjdE1lbmFnZXIuZ2V0SG9tZVRvZG9zQXJyYXkoKS5zcGxpY2UodG9kb0luZGV4LCAxKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmFkZFRvVG9kb3NBcnJheSh0b2RvVG9Nb3ZlWzBdKTsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmVmcmVzaFRvZG9zQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBtb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXIuYXBwZW5kKG1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2KTtcblxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIG1vdmVUb2RvUHJvamVjdHMuYXBwZW5kKG1vdmVUb2RvUHJvamVjdHNEcm9wZG93bkNvbnRhaW5lcik7XG4gICAgICAgIG1vdmVUb2RvRHJvcGRvd24uYXBwZW5kKG1vdmVUb2RvUHJvamVjdHMpO1xuICAgIH1cbiAgICBlbHNlIHtcblxuICAgICAgICBsZXQgdHJhZ2V0UHJvamVjdEluZGV4ID0gMDtcbiAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0UHJvamVjdE5hbWUgPT0gcHJvamVjdC5nZXROYW1lKCkpIHtcbiAgICAgICAgICAgICAgICB0cmFnZXRQcm9qZWN0SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb3ZlVG9kb0Ryb3Bkb3duSG9tZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnbW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0Jyk7XG4gICAgICAgIG1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdC50ZXh0Q29udGVudCA9ICdIT01FJztcbiAgICAgICAgbW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdG9kb1RvTW92ZSA9IHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKVt0cmFnZXRQcm9qZWN0SW5kZXhdLmdldFRvZG9zQXJyYXkoKS5zcGxpY2UodG9kb0luZGV4LCAxKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIucHVzaFRvSG9tZVRvZG9zQXJyYXkodG9kb1RvTW92ZVswXSk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmVmcmVzaFRvZG9zQ29udGFpbmVyKCk7XG4gICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBtb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXIuYXBwZW5kKG1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdCk7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KCkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRhcmdldFByb2plY3ROYW1lICE9PSBwcm9qZWN0LmdldE5hbWUoKSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBtb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdtb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdicpO1xuICAgICAgICAgICAgICAgIG1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgICAgICAgICAgICAgbW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Ub01vdmUgPSBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KClbdHJhZ2V0UHJvamVjdEluZGV4XS5nZXRUb2Rvc0FycmF5KCkuc3BsaWNlKHRvZG9JbmRleCwgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5hZGRUb1RvZG9zQXJyYXkodG9kb1RvTW92ZVswXSk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbW92ZVRvZG9Qcm9qZWN0c0Ryb3Bkb3duQ29udGFpbmVyLmFwcGVuZChtb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgbW92ZVRvZG9Qcm9qZWN0cy5hcHBlbmQobW92ZVRvZG9Qcm9qZWN0c0Ryb3Bkb3duQ29udGFpbmVyKTtcbiAgICAgICAgbW92ZVRvZG9Ecm9wZG93bi5hcHBlbmQobW92ZVRvZG9Qcm9qZWN0cyk7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vdmVUb2RvRHJvcGRvd25Db250ZW50cyIsImltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi4vZnVuY3Rpb25zL3Byb2plY3QtbWVuYWdlci5qc1wiO1xuaW1wb3J0IGFkZFByb2plY3REaXZFdmVudCBmcm9tIFwiLi4vZnVuY3Rpb25zL2FkZC1wcm9qZWN0LWRpdnMtZXZlbnRcIjtcbmltcG9ydCByZWZyZXNoVG9kb3NDb250YWluZXIgZnJvbSBcIi4vRE9NLXJlZnJlc2gtVE9ET1MtY29udGFpbmVyXCI7XG5sZXQgc2hvd1Byb2plY3RzID0gKCkgPT4geyAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c0NvbnRhaW5lcicpLmlubmVySFRNTD0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZVByb2plY3REaXYnKS5jbGFzc0xpc3QuYWRkKCd0YXJnZXQnKTtcbiAgICByZWZyZXNoVG9kb3NDb250YWluZXIoKTtcbiAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0RGl2Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmFtZScpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gYCR7cHJvamVjdC5nZXROYW1lKCl9YDtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24nKTtcblxuICAgICAgICAgICAgY29uc3QgZWRpdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRQcm9qZWN0QnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICfinI4nO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkcm9wZG93bi5hcHBlbmQoZWRpdFByb2plY3RCdXR0b24pO1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVByb2plY3RCdXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAn4pyVJztcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIGAke3Byb2plY3QuZ2V0TmFtZSgpfWApXG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RCdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0QnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0QnV0dG9uc0NvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICBwcm9qZWN0QnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoZHJvcGRvd24sIGRlbGV0ZVByb2plY3RCdXR0b24pO1xuXG5cbiAgICAgICAgICAgIHByb2plY3REaXYuYXBwZW5kKHByb2plY3ROYW1lLCBwcm9qZWN0QnV0dG9uc0NvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c0NvbnRhaW5lcicpLmFwcGVuZChwcm9qZWN0RGl2KTtcbiAgICAgICAgICAgIGFkZFByb2plY3REaXZFdmVudCgpLmRlbGV0ZVByb2plY3RCdXR0b24oZGVsZXRlUHJvamVjdEJ1dHRvbiwgaW5kZXgpO1xuICAgICAgICAgICAgYWRkUHJvamVjdERpdkV2ZW50KCkuZWRpdFByb2plY3RCdXR0b24oZWRpdFByb2plY3RCdXR0b24sIGluZGV4LCBkcm9wZG93bik7XG4gICAgICAgICAgICBhZGRQcm9qZWN0RGl2RXZlbnQoKS5wcm9qZWN0RGl2RXZlbnQocHJvamVjdERpdik7XG4gICAgICAgIH0pO1xuXG59OyBcblxuZXhwb3J0IGRlZmF1bHQgc2hvd1Byb2plY3RzIiwiaW1wb3J0IHNob3dQcm9qZWN0cyBmcm9tIFwiLi9ET00tc2hvdy1wcm9qZWN0cy5qc1wiXG5mdW5jdGlvbiByZW1vdmVEcm9wZG93bihldmVudCkge1xuICAgICAgICBcbiAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25Db250ZW50Jykpe1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKGAuZWRpdFByb2plY3RCdXR0b25gKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5kcm9wZG93bkNvbnRlbnQnKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJyNlZGl0UHJvamVjdE5hbWUnKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJ2xhYmVsJykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuY29uZmlybU5ld05hbWVCdXR0b24nKSlcbiAgICAgICAgICAgKSB7ICBcbiAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bkNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgIHNob3dQcm9qZWN0cygpO1xuICAgICAgICAgICAgIH07XG4gICAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCByZW1vdmVEcm9wZG93biIsImZ1bmN0aW9uIHJlbW92ZU1vdmVUb2RvRHJvcGRvd24oZXZlbnQpIHtcbiAgICAgICAgXG4gICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmVUb2RvUHJvamVjdHMnKSl7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoYC5tb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXJgKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5tb3ZlVG9kb0Ryb3Bkb3duSG9tZVByb2plY3QnKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5tb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdicpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLm1vdmVUb2RvQnV0dG9uJykpXG4gICAgICAgICAgICkgeyAgXG4gICAgICAgICAgICAgICBjb25zdCBtb3ZlVG9kb1Byb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmVUb2RvUHJvamVjdHMnKTtcbiAgICAgICAgICAgICAgIG1vdmVUb2RvUHJvamVjdHMucmVtb3ZlKCk7XG4gICAgICAgICAgICAgfTtcbiAgICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IHJlbW92ZU1vdmVUb2RvRHJvcGRvd24iLCJpbXBvcnQgY3JlYXRlQWRkVE9ET3RCdG4gZnJvbSBcIi4vRE9NLWFkZFRvZG8tY3JlYXRlLWFkZEJ0bi5qc1wiO1xuaW1wb3J0IGFkZFRPRE9CdXR0b25FdmVudCBmcm9tIFwiLi4vZnVuY3Rpb25zL2FkZC10b2RvLWJ1dHRvbi1ldmVudC5qc1wiO1xuZnVuY3Rpb24gc3dhcEVkaXRPckFkZFRvZG9Gb3JtVG9CdXR0b24oZXZlbnQpIHtcbiAgICAgICAgXG4gICAgaWYgKCghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5hZGRUT0RPQnV0dG9uJykgJiYgIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuZWRpdFRvZG9CdXR0b24nKSkgJiYgKCghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ3JlYXRlRGl2SGVhZGVyJykpIHx8ICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvRWRpdERpdkhlYWRlcicpKSkpe1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcudG9kb09wdGlvbnNDb250YWluZXInKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy50b2RvQ3JlYXRlRGl2SGVhZGVyJykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCdsYWJlbCcpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnI3RvZG9OYW1lSW5wdXRUZXh0JykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcjdG9kb0RhdGVQaWNrZXJJbnB1dCcpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnI3RvZG9UaW1lUGlja2VySW5wdXQnKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJyN0b2RvUHJpb3JpdHlTZWxlY3QnKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJ29wdGlvbicpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnI3RvZG9Ob3Rlc0lucHV0JykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcudG9kb0NyZWF0ZUNvbmZpcm1CdG4nKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy50b2RvQ3JlYXRlQ2FuY2VsQnRuJykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcudG9kb0VkaXREaXZIZWFkZXInKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy50b2RvRWRpdENvbmZpcm1CdG4nKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy50b2RvRGF0YUVycm9yJykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuYWRkVE9ET0J1dHRvbicpKVxuXG4gICAgICAgICAgICkgeyBcbiAgICAgICAgICAgICAgICBjcmVhdGVBZGRUT0RPdEJ0bigpO1xuICAgICAgICAgICAgICAgIGFkZFRPRE9CdXR0b25FdmVudCgpO1xuICAgICAgICAgICAgIH07IFxuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgc3dhcEVkaXRPckFkZFRvZG9Gb3JtVG9CdXR0b25cbiIsImNvbnN0IHRvZG9UYXNrID0gKG5hbWUsIGRhdGUsIHRpbWUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuICAgIGxldCB0b2RvTmFtZSA9IG5hbWU7XG4gICAgbGV0IHRvZG9EYXRlID0gZGF0ZTtcbiAgICBsZXQgdG9kb1RpbWUgPSB0aW1lO1xuICAgIGxldCB0b2RvUHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBsZXQgdG9kb05vdGVzID0gbm90ZXM7XG4gICAgbGV0IHRvZG9TdGF0dXMgPSBmYWxzZTtcbiAgICBcbiAgICAvLyBHZXQgZnVuY3Rpb25zIHJldHVybmluZyB2YXJpYWJsZSBjb250ZW50c1xuICAgIGNvbnN0IGdldFRvZG9OYW1lID0gKCkgPT4gdG9kb05hbWU7XG4gICAgY29uc3QgZ2V0VG9kb0RhdGUgPSAoKSA9PiB0b2RvRGF0ZTtcbiAgICBjb25zdCBnZXR0b2RvVGltZSA9ICgpID0+IHRvZG9UaW1lO1xuICAgIGNvbnN0IGdldFRvZG9Qcmlvcml0eSA9ICgpID0+IHRvZG9Qcmlvcml0eTtcbiAgICBjb25zdCBnZXRUb2RvTm90ZXMgPSAoKSA9PiB0b2RvTm90ZXM7XG4gICAgY29uc3QgZ2V0VG9kb1N0YXR1cyA9ICgpID0+IHRvZG9TdGF0dXM7XG4gICAgXG4gICAgLy8gU2V0IGZ1bmN0aW9ucyB0byBlZGl0IHZhcmlhYmxlIGNvbnRlbnRzXG4gICAgY29uc3Qgc2V0VG9kb05hbWUgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIHRvZG9OYW1lID0gc3RyaW5nXG4gICAgfTtcbiAgICBjb25zdCBzZXRUb2RvRGF0ZSA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgdG9kb0RhdGUgPSBzdHJpbmdcbiAgICB9O1xuICAgIGNvbnN0IHNldFRvZG9UaW1lID0gKHN0cmluZykgPT4ge1xuICAgICAgICB0b2RvVGltZSA9IHN0cmluZztcbiAgICB9O1xuICAgIGNvbnN0IHNldFRvZG9Qcmlvcml0eSA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgdG9kb1ByaW9yaXR5ID0gc3RyaW5nO1xuICAgIH07XG4gICAgY29uc3Qgc2V0VG9kb05vdGVzID0gKHN0cmluZykgPT4ge1xuICAgICAgICB0b2RvTm90ZXMgPSBzdHJpbmc7XG4gICAgfTtcbiAgICBjb25zdCBzZXRUb2RvU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdG9kb1N0YXR1cyA/IHRvZG9TdGF0dXMgPSBmYWxzZSA6IHRvZG9TdGF0dXMgPSB0cnVlO1xuICAgIH0gIFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0VG9kb05hbWUsXG4gICAgICAgIGdldFRvZG9EYXRlLFxuICAgICAgICBnZXR0b2RvVGltZSxcbiAgICAgICAgZ2V0VG9kb1ByaW9yaXR5LFxuICAgICAgICBnZXRUb2RvTm90ZXMsXG4gICAgICAgIGdldFRvZG9TdGF0dXMsXG4gICAgICAgIHNldFRvZG9OYW1lLFxuICAgICAgICBzZXRUb2RvRGF0ZSxcbiAgICAgICAgc2V0VG9kb1RpbWUsXG4gICAgICAgIHNldFRvZG9Qcmlvcml0eSxcbiAgICAgICAgc2V0VG9kb05vdGVzLFxuICAgICAgICBzZXRUb2RvU3RhdHVzLFxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCB0b2RvVGFzazsiLCJpbXBvcnQgc3dhcENvbnRlbnRzIGZyb20gJy4uL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFByb2plY3Qtc3dhcC1CdG4tdG8tRm9ybS5qcyc7XG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uRXZlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0QnV0dG9uJyk7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3YXBDb250ZW50cyk7XG59O1xuZXhwb3J0IGRlZmF1bHQgYWRkUHJvamVjdEJ1dHRvbkV2ZW50IiwiaW1wb3J0IHByb2plY3RNZW5hZ2VyIGZyb20gXCIuL3Byb2plY3QtbWVuYWdlci5qc1wiO1xuaW1wb3J0IHByb2plY3RDcmVhdG9yIGZyb20gXCIuL3Byb2plY3QtY3JlYXRvci5qc1wiO1xuaW1wb3J0IHRvZG9UYXNrIGZyb20gXCIuL1RPRE8tY3JlYXRvci5qc1wiO1xuaW1wb3J0IGNyZWF0ZUFkZFRPRE90QnRuIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1hZGRUb2RvLWNyZWF0ZS1hZGRCdG4uanNcIjtcbmltcG9ydCBhZGRUT0RPQnV0dG9uRXZlbnQgZnJvbSBcIi4vYWRkLXRvZG8tYnV0dG9uLWV2ZW50LmpzXCI7XG5pbXBvcnQgZG9tU2hvd1RvZG8gZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLXNob3ctVE9ETy5qc1wiO1xuaW1wb3J0IHJlZnJlc2hUb2Rvc0NvbnRhaW5lciBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tcmVmcmVzaC1UT0RPUy1jb250YWluZXJcIjtcbmltcG9ydCBzaG93UHJvamVjdHMgZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLXNob3ctcHJvamVjdHMuanNcIjtcbmltcG9ydCBjcmVhdGVFZGl0UHJvamVjdERyb3Bkb3duQ29udGVudHMgZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLWNyZWF0ZS1lZGl0LXByb2plY3QtZHJvcGRvd24tY29udGVudHMuanNcIjtcbmltcG9ydCB1cGRhdGVMb2NhbFN0b3JhZ2UgZnJvbSBcIi4vbG9jYWwtc3RvcmFnZS1tZW5hZ2VyLmpzXCI7XG5cblxuXG5jb25zdCBhZGRQcm9qZWN0RGl2RXZlbnQgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gKGRlbGV0ZUJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xuXG4gICAgICAgICAgICBwcm9qZWN0TWVuYWdlci5yZW1vdmVQcm9qZWN0KGluZGV4KTtcbiAgICAgICAgICAgIHNob3dQcm9qZWN0cygpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG5cblxuICAgIGNvbnN0IGVkaXRQcm9qZWN0QnV0dG9uID0gKGVkaXRCdXR0b24sIGluZGV4LCBkcm9wZG93bikgPT4ge1xuICAgICAgICBcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duQ29udGVudCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duQ29udGVudCcpO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBkcm9wZG93bi5hcHBlbmQoLi4uY3JlYXRlRWRpdFByb2plY3REcm9wZG93bkNvbnRlbnRzKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRQcm9qZWN0TmFtZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1OZXdOYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm1OZXdOYW1lQnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgY29uZmlybU5ld05hbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lc0FycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZXNBcnJheS5wdXNoKHByb2plY3QuZ2V0TmFtZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZXNBcnJheS5pbmNsdWRlcyhlZGl0UHJvamVjdE5hbWVJbnB1dC52YWx1ZSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByb2plY3RFcnJvckRpdicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duQ29udGVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0RXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0UHJvamVjdEVycm9yRGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXRQcm9qZWN0RXJyb3JEaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0UHJvamVjdEVycm9yRGl2LmlubmVyVGV4dCA9IFwiVGhpcyBuYW1lIGV4aXN0IVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5hcHBlbmQoZWRpdFByb2plY3RFcnJvckRpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKVtpbmRleF0uZWRpdFByb2plY3ROYW1lKGVkaXRQcm9qZWN0TmFtZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1Byb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkcm9wZG93bi5hcHBlbmQoLi4uY3JlYXRlRWRpdFByb2plY3REcm9wZG93bkNvbnRlbnRzKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRQcm9qZWN0TmFtZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1OZXdOYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm1OZXdOYW1lQnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgY29uZmlybU5ld05hbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lc0FycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZXNBcnJheS5wdXNoKHByb2plY3QuZ2V0TmFtZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZXNBcnJheS5pbmNsdWRlcyhlZGl0UHJvamVjdE5hbWVJbnB1dC52YWx1ZSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByb2plY3RFcnJvckRpdicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duQ29udGVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0RXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0UHJvamVjdEVycm9yRGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXRQcm9qZWN0RXJyb3JEaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0UHJvamVjdEVycm9yRGl2LmlubmVyVGV4dCA9IFwiVGhpcyBuYW1lIGV4aXN0IVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5hcHBlbmQoZWRpdFByb2plY3RFcnJvckRpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByb2plY3RFcnJvckRpdicpLmlubmVyVGV4dCA9PT0gXCJOZXcgbmFtZSBtaW4uIDEgY2hhclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRQcm9qZWN0RXJyb3JEaXYnKS5pbm5lclRleHQgPSBcIlRoaXMgbmFtZSBleGlzdCFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGVkaXRQcm9qZWN0TmFtZUlucHV0LnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByb2plY3RFcnJvckRpdicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duQ29udGVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0RXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0UHJvamVjdEVycm9yRGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXRQcm9qZWN0RXJyb3JEaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0UHJvamVjdEVycm9yRGl2LmlubmVyVGV4dCA9IFwiTmV3IG5hbWUgbWluLiAxIGNoYXJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuYXBwZW5kKGVkaXRQcm9qZWN0RXJyb3JEaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRQcm9qZWN0RXJyb3JEaXYnKS5pbm5lclRleHQgPT09IFwiVGhpcyBuYW1lIGV4aXN0IVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRQcm9qZWN0RXJyb3JEaXYnKS5pbm5lclRleHQgPSBcIk5ldyBuYW1lIG1pbi4gMSBjaGFyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKVtpbmRleF0uZWRpdFByb2plY3ROYW1lKGVkaXRQcm9qZWN0TmFtZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1Byb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHByb2plY3REaXZFdmVudCA9IChwcm9qZWN0RGl2LCkgPT4ge1xuICAgICAgICBjb25zdCBob21lUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lUHJvamVjdERpdicpO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0FycmF5ID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0RGl2JyldO1xuICAgICAgICAgICAgcHJvamVjdHNBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd0YXJnZXQnKTsgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGhvbWVQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmdldCcpO1xuICAgICAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCd0YXJnZXQnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVmcmVzaFRvZG9zQ29udGFpbmVyKCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBlZGl0UHJvamVjdEJ1dHRvbixcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbixcbiAgICAgICAgcHJvamVjdERpdkV2ZW50LFxuICAgIH1cblxuXG59O1xuZXhwb3J0IGRlZmF1bHQgYWRkUHJvamVjdERpdkV2ZW50XG5cbiIsImltcG9ydCBhZGRQcm9qZWN0QnV0dG9uRXZlbnQgZnJvbSBcIi4vYWRkLXByb2plY3QtYnV0dG9uLWV2ZW50LmpzXCI7XG5pbXBvcnQgY3JlYXRlQWRkUHJvamVjdEJ0biBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tYWRkUHJvamVjdC1jcmVhdGUtYWRkQnRuLmpzXCI7XG5pbXBvcnQgcHJvamVjdE1lbmFnZXIgZnJvbSBcIi4vcHJvamVjdC1tZW5hZ2VyLmpzXCI7XG5pbXBvcnQgcHJvamVjdENyZWF0b3IgZnJvbSBcIi4vcHJvamVjdC1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgc2hvd1Byb2plY3RzIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1zaG93LXByb2plY3RzLmpzXCI7XG5pbXBvcnQgdXBkYXRlTG9jYWxTdG9yYWdlIGZyb20gXCIuL2xvY2FsLXN0b3JhZ2UtbWVuYWdlci5qc1wiO1xuXG5jb25zdCBhZGRFdmVudEZ1bmN0aW9udHNUb0Zvcm0gPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgZGVjbGluZUJ0bkZ1bmN0aW9uID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdE5hbWVDYW5jZWxCdG4nKTtcbiAgICAgICAgcHJvamVjdE5hbWVDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjcmVhdGVBZGRQcm9qZWN0QnRuKCk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0QnV0dG9uRXZlbnQoKTtcbiAgICAgICAgfSlcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgY29uZmlybUJ0biA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lQ29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TmFtZUNvbmZpcm1CdG4nKTtcbiAgICAgICAgcHJvamVjdE5hbWVDb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1lc3NhZ2VEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmFsaWRhdGlvbk1lc3NhZ2VEaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lSW5wdXRUZXh0JykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdENyZWF0b3IocHJvamVjdE5hbWVJbnB1dFRleHQpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWVzQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWVzQXJyYXkucHVzaChwcm9qZWN0LmdldE5hbWUoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZXNBcnJheS5pbmNsdWRlcyhwcm9qZWN0TmFtZUlucHV0VGV4dCkpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZURpdi5pbm5lclRleHQgPSBcIlRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cyFcIjtcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZURpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmFtZUVycm9yJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYocHJvamVjdE5hbWVJbnB1dFRleHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2VEaXYuaW5uZXJUZXh0ID0gXCJOYW1lIG11c3QgYmUgYXQgbGVhc3QgMSBjaGFyYWN0ZXIgbG9uZ1wiO1xuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3ROYW1lRXJyb3InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIucHVzaFRvUHJvamVjdHNBcnJheShwcm9qZWN0KTsgICAgICBcbiAgICAgICAgICAgIGNyZWF0ZUFkZFByb2plY3RCdG4oKTtcbiAgICAgICAgICAgIGFkZFByb2plY3RCdXR0b25FdmVudCgpO1xuICAgICAgICAgICAgc2hvd1Byb2plY3RzKCk7XG4gICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pKCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgYWRkRXZlbnRGdW5jdGlvbnRzVG9Gb3JtIiwiaW1wb3J0IHN3YXB0b2RvT3B0aW9uc0NvbnRhaW5lckNvbnRlbnRzIGZyb20gJy4uL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFRvZG8tc3dhcC1CdG4tdG8tRm9ybS5qcyc7XG5pbXBvcnQgc3dhcEVkaXRPckFkZFRvZG9Gb3JtVG9CdXR0b24gZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLXdpbmRvdy1saXN0ZW5lci1zd2FwLXRvZG8tZm9ybS5qc1wiXG5jb25zdCBhZGRUT0RPQnV0dG9uRXZlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkVE9ET0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUT0RPQnV0dG9uJyk7XG4gICAgYWRkVE9ET0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3YXB0b2RvT3B0aW9uc0NvbnRhaW5lckNvbnRlbnRzKTtcbn07XG5leHBvcnQgZGVmYXVsdCBhZGRUT0RPQnV0dG9uRXZlbnQiLCJpbXBvcnQgcHJvamVjdE1lbmFnZXIgZnJvbSBcIi4vcHJvamVjdC1tZW5hZ2VyLmpzXCI7XG5pbXBvcnQgcHJvamVjdENyZWF0b3IgZnJvbSBcIi4vcHJvamVjdC1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgdG9kb1Rhc2sgZnJvbSBcIi4vVE9ETy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgY3JlYXRlQWRkVE9ET3RCdG4gZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFRvZG8tY3JlYXRlLWFkZEJ0bi5qc1wiO1xuaW1wb3J0IGFkZFRPRE9CdXR0b25FdmVudCBmcm9tIFwiLi9hZGQtdG9kby1idXR0b24tZXZlbnQuanNcIjtcbmltcG9ydCBuZXdUb2RvIGZyb20gXCIuL2NyZWF0ZS1uZXctdG9kby5qc1wiO1xuaW1wb3J0IHJlZnJlc2hUb2Rvc0NvbnRhaW5lciBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tcmVmcmVzaC1UT0RPUy1jb250YWluZXJcIjtcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZucy9lc21cIjtcbmltcG9ydCB1cGRhdGVMb2NhbFN0b3JhZ2UgZnJvbSBcIi4vbG9jYWwtc3RvcmFnZS1tZW5hZ2VyLmpzXCI7XG5jb25zdCBuZXdUb2RvQnV0dG9uc0V2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBkZWNsaW5lQnRuRnVuY3Rpb24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvQ3JlYXRlQ2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9DcmVhdGVDYW5jZWxCdG4nKTtcbiAgICAgICAgdG9kb0NyZWF0ZUNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZUFkZFRPRE90QnRuKCk7XG4gICAgICAgICAgICBhZGRUT0RPQnV0dG9uRXZlbnQoKTtcbiAgICAgICAgfSlcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgY29uZmlybUJ0biA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9DcmVhdGVDb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9DcmVhdGVDb25maXJtQnRuJyk7XG4gICAgICAgIHRvZG9DcmVhdGVDb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTmFtZUlucHV0VGV4dCcpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGF0ZVBpY2tlcklucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9UaW1lUGlja2VySW5wdXQnKTsgXG4gICAgICAgICAgICBjb25zdCBjb25maXJtQW5kRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybUFuZERyb3Bkb3duJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY2hlY2tEYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXRlID0gZGF0ZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWREYXRlIDwgdG9kYXkpIHJldHVybiB0cnVlOyAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2hlY2tUaW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheUZvcm1hdGVkID0gZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXRlID0gZGF0ZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRpbWUgPSB0aW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVOb3cgPSBgJHt0b2RheS5nZXRIb3VycygpfToke3RvZGF5LmdldE1pbnV0ZXMoKX1gO1xuICAgICAgICAgICAgICAgIGlmICgodG9kYXlGb3JtYXRlZCA9PT0gc2VsZWN0ZWREYXRlKSAmJiAoc2VsZWN0ZWRUaW1lIDwgdGltZU5vdykpIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKG5hbWUudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0RhdGFFcnJvcicpKXtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9EYXRhRXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRhRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0YUVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuaW5uZXJUZXh0ID0gXCJOYW1lIG11c3QgYmUgYXQgbGVhc3QgMSBjaGFyYWN0ZXIgbG9uZ1wiO1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtQW5kRHJvcGRvd24uYXBwZW5kKHRvZG9EYXRhRXJyb3IpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0YUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGFFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmlubmVyVGV4dCA9IFwiTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDEgY2hhcmFjdGVyIGxvbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUFuZERyb3Bkb3duLmFwcGVuZCh0b2RvRGF0YUVycm9yKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGUudmFsdWUubGVuZ3RoID09PSAwIHx8IGNoZWNrRGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9EYXRhRXJyb3InKSl7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvRGF0YUVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0YUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGFFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmlubmVyVGV4dCA9IFwiRGF0ZSByZXF1cmVkIGFuZCBtdXN0IGJlIHNldCBpbiB0aGUgZnV0dXJlXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1BbmREcm9wZG93bi5hcHBlbmQodG9kb0RhdGFFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGFFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmNsYXNzTGlzdC5hZGQoJ3RvZG9EYXRhRXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5pbm5lclRleHQgPSBcIkRhdGUgcmVxdXJlZCBhbmQgbXVzdCBiZSBzZXQgaW4gdGhlIGZ1dHVyZVwiO1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtQW5kRHJvcGRvd24uYXBwZW5kKHRvZG9EYXRhRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRpbWUudmFsdWUubGVuZ3RoID09PSAwIHx8IGNoZWNrVGltZSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9EYXRhRXJyb3InKSl7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvRGF0YUVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0YUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGFFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmlubmVyVGV4dCA9IFwiVGltZSBpcyByZXF1cmllZCBhbmQgbXVzdCBiZSBzZXQgaW4gdGhlIGZ1dHVyZVwiO1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtQW5kRHJvcGRvd24uYXBwZW5kKHRvZG9EYXRhRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRhRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0YUVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuaW5uZXJUZXh0ID0gXCJUaW1lIGlzIHJlcXVyaWVkIGFuZCBtdXN0IGJlIHNldCBpbiB0aGUgZnV0dXJlXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1BbmREcm9wZG93bi5hcHBlbmQodG9kb0RhdGFFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlVG9kbyA9IG5ld1RvZG8oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXQnKS5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdE5hbWUgPT09IFwiSE9NRVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLnB1c2hUb0hvbWVUb2Rvc0FycmF5KGNyZWF0ZVRvZG8pO1xuXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdHNBcnJheSA9IHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3RJbmRleDsgXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKVtpXS5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKSBwcm9qZWN0SW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KClbcHJvamVjdEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5hZGRUb1RvZG9zQXJyYXkoY3JlYXRlVG9kbyk7IFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNyZWF0ZUFkZFRPRE90QnRuKCk7XG4gICAgICAgICAgICAgICAgYWRkVE9ET0J1dHRvbkV2ZW50KCk7XG4gICAgICAgICAgICAgICAgcmVmcmVzaFRvZG9zQ29udGFpbmVyKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgIH0pKCk7XG5cbn07XG5leHBvcnQgZGVmYXVsdCBuZXdUb2RvQnV0dG9uc0V2ZW50cyIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZucy9lc21cIjtcblxuY29uc3QgY2hlY2tUb2RvT3V0ZGF0ZSA9IChkYXRlLCB0b2RvRGl2LCB0aW1lICkgPT4ge1xuXG4gICAgY29uc3QgY2hlY2tEYXRlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RheSA9IGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZERhdGUgPSBkYXRlLnRleHRDb250ZW50O1xuICAgICAgICBpZiAoc2VsZWN0ZWREYXRlIDwgdG9kYXkpIHJldHVybiB0cnVlOyAgIFxuICAgIH07XG5cbiAgICBjb25zdCBjaGVja1RpbWUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHRpbWVOb3cgPSBgJHt0b2RheURhdGUuZ2V0SG91cnMoKX06JHt0b2RheURhdGUuZ2V0TWludXRlcygpfWA7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRGF0ZSA9IGRhdGUudGV4dENvbnRlbnQ7XG4gICAgICAgIGlmIChzZWxlY3RlZERhdGUgPD0gdG9kYXkgJiYgdGltZS50ZXh0Q29udGVudCA8IHRpbWVOb3cpIHJldHVybiB0cnVlXG4gICAgfTtcblxuICAgIGlmIChjaGVja0RhdGUoKSB8fCBjaGVja1RpbWUoKSkge1xuICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ291dGRhdGVkVG9kbycpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBjaGVja1RvZG9PdXRkYXRlIiwiaW1wb3J0IHRvZG9UYXNrIGZyb20gXCIuL1RPRE8tY3JlYXRvci5qc1wiO1xuaW1wb3J0IHByb2plY3RNZW5hZ2VyIGZyb20gXCIuL3Byb2plY3QtbWVuYWdlci5qc1wiO1xuY29uc3QgbmV3VG9kbyA9ICgpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9OYW1lSW5wdXRUZXh0JykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGF0ZVBpY2tlcklucHV0JykudmFsdWU7XG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGltZVBpY2tlcklucHV0JykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1ByaW9yaXR5U2VsZWN0JykudmFsdWU7XG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb05vdGVzSW5wdXQnKS52YWx1ZTtcbiAgICBsZXQgdG9kbyA9IHRvZG9UYXNrKG5hbWUsIGRhdGUsIHRpbWUsIHByaW9yaXR5LCBub3Rlcyk7XG4gICAgcmV0dXJuIHRvZG9cbn1cbmV4cG9ydCBkZWZhdWx0IG5ld1RvZG8iLCJpbXBvcnQgcHJvamVjdE1lbmFnZXIgZnJvbSBcIi4vcHJvamVjdC1tZW5hZ2VyLmpzXCI7XG5pbXBvcnQgY3JlYXRlQWRkVE9ET3RCdG4gZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFRvZG8tY3JlYXRlLWFkZEJ0bi5qc1wiO1xuaW1wb3J0IGFkZFRPRE9CdXR0b25FdmVudCBmcm9tIFwiLi9hZGQtdG9kby1idXR0b24tZXZlbnQuanNcIjtcbmltcG9ydCByZWZyZXNoVG9kb3NDb250YWluZXIgZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLXJlZnJlc2gtVE9ET1MtY29udGFpbmVyXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnMvZXNtXCI7XG5pbXBvcnQgdXBkYXRlTG9jYWxTdG9yYWdlIGZyb20gXCIuL2xvY2FsLXN0b3JhZ2UtbWVuYWdlci5qc1wiO1xuY29uc3QgZWRpdFRvZG9CdXR0b25zRXZlbnRzID0gKHRhcmdldFByb2plY3RJbmRleCwgdG9kb0luZGV4LCkgPT4ge1xuICAgIGNvbnN0IGRlY2xpbmVCdG5GdW5jdGlvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9DcmVhdGVDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0NyZWF0ZUNhbmNlbEJ0bicpO1xuICAgICAgICB0b2RvQ3JlYXRlQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY3JlYXRlQWRkVE9ET3RCdG4oKTtcbiAgICAgICAgICAgIGFkZFRPRE9CdXR0b25FdmVudCgpO1xuICAgICAgICB9KVxuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjb25maXJtQnRuID0gKCgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRvZG9FZGl0Q29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvRWRpdENvbmZpcm1CdG4nKTtcbiAgICAgICAgXG4gICAgICAgIHRvZG9FZGl0Q29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICAgICAgbGV0IHRhcmdldFByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldCcpLmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9OYW1lSW5wdXRUZXh0Jyk7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EYXRlUGlja2VySW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1RpbWVQaWNrZXJJbnB1dCcpOyBcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1BbmREcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtQW5kRHJvcGRvd24nKTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjaGVja0RhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kYXkgPSBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZERhdGUgPSBkYXRlLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZERhdGUgPCB0b2RheSkgcmV0dXJuIHRydWU7ICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKG5hbWUudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0RhdGFFcnJvcicpKXtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9EYXRhRXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRhRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0YUVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuaW5uZXJUZXh0ID0gXCJOYW1lIG11c3QgYmUgYXQgbGVhc3QgMSBjaGFyYWN0ZXIgbG9uZ1wiO1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtQW5kRHJvcGRvd24uYXBwZW5kKHRvZG9EYXRhRXJyb3IpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0YUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGFFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmlubmVyVGV4dCA9IFwiTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDEgY2hhcmFjdGVyIGxvbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUFuZERyb3Bkb3duLmFwcGVuZCh0b2RvRGF0YUVycm9yKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGUudmFsdWUubGVuZ3RoID09PSAwIHx8IGNoZWNrRGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9EYXRhRXJyb3InKSl7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvRGF0YUVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0YUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGFFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmlubmVyVGV4dCA9IFwiRGF0ZSByZXF1cmVkIGFuZCBtdXN0IGJlIHNldCBpbiB0aGUgZnV0dXJlXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1BbmREcm9wZG93bi5hcHBlbmQodG9kb0RhdGFFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGFFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmNsYXNzTGlzdC5hZGQoJ3RvZG9EYXRhRXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5pbm5lclRleHQgPSBcIkRhdGUgcmVxdXJlZCBhbmQgbXVzdCBiZSBzZXQgaW4gdGhlIGZ1dHVyZVwiO1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtQW5kRHJvcGRvd24uYXBwZW5kKHRvZG9EYXRhRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRpbWUudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9EYXRhRXJyb3InKSl7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvRGF0YUVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0YUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGFFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmlubmVyVGV4dCA9IFwiVGltZSBtdXN0IGJlIHNldFwiO1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtQW5kRHJvcGRvd24uYXBwZW5kKHRvZG9EYXRhRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRhRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0YUVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuaW5uZXJUZXh0ID0gXCJUaW1lIG11c3QgYmUgc2V0XCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1BbmREcm9wZG93bi5hcHBlbmQodG9kb0RhdGFFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0UHJvamVjdE5hbWUgPT09IFwiSE9NRVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvbWVUb2RvID0gcHJvamVjdE1lbmFnZXIuZ2V0SG9tZVRvZG9zQXJyYXkoKVt0b2RvSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBob21lVG9kby5zZXRUb2RvTmFtZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb05hbWVJbnB1dFRleHQnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGhvbWVUb2RvLnNldFRvZG9EYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGF0ZVBpY2tlcklucHV0JykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBob21lVG9kby5zZXRUb2RvVGltZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1RpbWVQaWNrZXJJbnB1dCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaG9tZVRvZG8uc2V0VG9kb1ByaW9yaXR5KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUHJpb3JpdHlTZWxlY3QnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGhvbWVUb2RvLnNldFRvZG9Ob3Rlcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb05vdGVzSW5wdXQnKS52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQWRkVE9ET3RCdG4oKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkVE9ET0J1dHRvbkV2ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXsgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvID0gcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpW3RhcmdldFByb2plY3RJbmRleF0uZ2V0VG9kb3NBcnJheSgpW3RvZG9JbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHRvZG8uc2V0VG9kb05hbWUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9OYW1lSW5wdXRUZXh0JykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvLnNldFRvZG9EYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGF0ZVBpY2tlcklucHV0JykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvLnNldFRvZG9UaW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGltZVBpY2tlcklucHV0JykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvLnNldFRvZG9Qcmlvcml0eShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1ByaW9yaXR5U2VsZWN0JykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvLnNldFRvZG9Ob3Rlcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb05vdGVzSW5wdXQnKS52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQWRkVE9ET3RCdG4oKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkVE9ET0J1dHRvbkV2ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSkoKTtcblxufTtcbmV4cG9ydCBkZWZhdWx0IGVkaXRUb2RvQnV0dG9uc0V2ZW50cyIsImltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi9wcm9qZWN0LW1lbmFnZXIuanNcIjtcbmltcG9ydCB0b2RvVGFzayBmcm9tIFwiLi9UT0RPLWNyZWF0b3IuanNcIjtcbmltcG9ydCBwcm9qZWN0Q3JlYXRvciBmcm9tIFwiLi9wcm9qZWN0LWNyZWF0b3IuanNcIjtcblxuY29uc3QgZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJob21lVG9kb3NcIikgIT09IG51bGwpe1xuICAgICAgICBsZXQgaG9tZVRvZG9zQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaG9tZVRvZG9zXCIpKTtcbiAgICAgICAgaG9tZVRvZG9zQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgbGV0IHRvZG8gPSB0b2RvVGFzayh0YXNrLm5hbWUsIHRhc2suZGF0ZSwgdGFzay50aW1lLCB0YXNrLnByaW9yaXR5LCB0YXNrLm5vdGVzKTtcbiAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLnB1c2hUb0hvbWVUb2Rvc0FycmF5KHRvZG8pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdE5hbWVzXCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZXNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0TmFtZXNcIikpO1xuICAgICAgICBwcm9qZWN0TmFtZXNBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0TWVuYWdlci5wdXNoVG9Qcm9qZWN0c0FycmF5KHByb2plY3RDcmVhdG9yKHByb2plY3QpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIFxuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBwcm9qZWN0LmdldE5hbWUoKTtcblxuICAgICAgICBpZihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3Byb2plY3ROYW1lfWApKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHRvZG9zQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3Byb2plY3ROYW1lfWApKTtcbiAgICAgICAgICAgIHRvZG9zQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0b2RvID0gdG9kb1Rhc2sodGFzay5uYW1lLCB0YXNrLmRhdGUsIHRhc2sudGltZSwgdGFzay5wcmlvcml0eSwgdGFzay5ub3Rlcyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5hZGRUb1RvZG9zQXJyYXkodG9kbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSIsImltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi9wcm9qZWN0LW1lbmFnZXIuanNcIjtcbmltcG9ydCBkb21TaG93VG9kbyBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tc2hvdy1UT0RPLmpzXCI7XG5pbXBvcnQgcmVmcmVzaFRvZG9zQ29udGFpbmVyIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1yZWZyZXNoLVRPRE9TLWNvbnRhaW5lci5qc1wiO1xuY29uc3Qgc2hvd1RvZG9zRnJvbUhvbWVQcm9qZWN0ID0gKGhvbWVQcm9qZWN0RGl2KSA9PiB7XG4gICAgaG9tZVByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0RGl2JykuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCd0YXJnZXQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGhvbWVQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3RhcmdldCcpO1xuXG4gICAgICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuICAgICAgICBcbiAgICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBzaG93VG9kb3NGcm9tSG9tZVByb2plY3QiLCJpbXBvcnQgcHJvamVjdE1lbmFnZXIgZnJvbSBcIi4vcHJvamVjdC1tZW5hZ2VyLmpzXCI7XG5cbmNvbnN0IHVwZGF0ZUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuICAgIGxldCBob21lVG9kb3MgPSBbXTtcbiAgICBwcm9qZWN0TWVuYWdlci5nZXRIb21lVG9kb3NBcnJheSgpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgbGV0IHRhc2sgPSBuZXcgT2JqZWN0KCk7XG4gICAgICAgIHRhc2submFtZSA9IHRvZG8uZ2V0VG9kb05hbWUoKTtcbiAgICAgICAgdGFzay5kYXRlID0gdG9kby5nZXRUb2RvRGF0ZSgpO1xuICAgICAgICB0YXNrLnRpbWUgPSB0b2RvLmdldHRvZG9UaW1lKCk7XG4gICAgICAgIHRhc2sucHJpb3JpdHkgPSB0b2RvLmdldFRvZG9Qcmlvcml0eSgpO1xuICAgICAgICB0YXNrLm5vdGVzID0gdG9kby5nZXRUb2RvTm90ZXMoKTtcbiAgICAgICAgaG9tZVRvZG9zLnB1c2godGFzayk7XG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJob21lVG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkoaG9tZVRvZG9zKSk7XG5cbiAgICBsZXQgcHJvamVjdHNBcnJheSA9IFtdXG4gICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgICAgIHByb2plY3RzQXJyYXkucHVzaChwcm9qZWN0TmFtZSk7XG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TmFtZXNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSkpO1xuXG4gICAgXG4gICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgICAgIGxldCB0b2Rvc0FycmF5ID0gW107XG4gICAgICAgXG4gICAgICAgIHByb2plY3QuZ2V0VG9kb3NBcnJheSgpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgIGxldCB0YXNrID0gbmV3IE9iamVjdCgpO1xuICAgICAgICAgICAgdGFzay5uYW1lID0gdG9kby5nZXRUb2RvTmFtZSgpO1xuICAgICAgICAgICAgdGFzay5kYXRlID0gdG9kby5nZXRUb2RvRGF0ZSgpO1xuICAgICAgICAgICAgdGFzay50aW1lID0gdG9kby5nZXR0b2RvVGltZSgpO1xuICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9IHRvZG8uZ2V0VG9kb1ByaW9yaXR5KCk7XG4gICAgICAgICAgICB0YXNrLm5vdGVzID0gdG9kby5nZXRUb2RvTm90ZXMoKTtcbiAgICAgICAgICAgIHRvZG9zQXJyYXkucHVzaCh0YXNrKTsgICAgICAgICAgXG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3Byb2plY3ROYW1lfWAsIEpTT04uc3RyaW5naWZ5KHRvZG9zQXJyYXkpKTtcbiAgICB9KTtcblxuXG59XG5leHBvcnQgZGVmYXVsdCB1cGRhdGVMb2NhbFN0b3JhZ2UiLCJjb25zdCBwcm9qZWN0Q3JlYXRvciA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHByb2plY3ROYW1lID0gbmFtZTtcbiAgICBsZXQgdG9kb3NBcnJheSA9IFtdO1xuICAgIFxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBwcm9qZWN0TmFtZTtcbiAgICBjb25zdCBnZXRUb2Rvc0FycmF5ID0gKCkgPT4gdG9kb3NBcnJheTtcbiAgICBjb25zdCBlZGl0UHJvamVjdE5hbWUgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIHByb2plY3ROYW1lID0gc3RyaW5nO1xuICAgIH1cbiAgICBjb25zdCBhZGRUb1RvZG9zQXJyYXkgPSAoaXRlbSkgPT4ge1xuICAgICAgICB0b2Rvc0FycmF5LnB1c2goaXRlbSk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVUT0RPID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHRvZG9zQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgY29uc3QgZmxhdFRvZG9zQXJyYXkgPSAoKSA9PiB7XG4gICAgICAgIHRvZG9zQXJyYXkgPSB0b2Rvc0FycmF5LmZsYXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TmFtZSxcbiAgICAgICAgZ2V0VG9kb3NBcnJheSxcbiAgICAgICAgZWRpdFByb2plY3ROYW1lLFxuICAgICAgICBhZGRUb1RvZG9zQXJyYXksXG4gICAgICAgIHJlbW92ZVRPRE8sXG4gICAgICAgIGZsYXRUb2Rvc0FycmF5LFxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RDcmVhdG9yOyIsImNvbnN0IHByb2plY3RNZW5hZ2VyID0gKCgpID0+IHtcbiAgICBsZXQgcHJvamVjdHNBcnJheSA9IFtdO1xuICAgIGxldCBob21lVG9kb3NBcnJheSA9IFtdO1xuICAgIFxuICAgIGNvbnN0IGdldFByb2plY3RzQXJyYXkgPSAoKSA9PiBwcm9qZWN0c0FycmF5O1xuICAgIGNvbnN0IGdldEhvbWVUb2Rvc0FycmF5ID0gKCkgPT4gaG9tZVRvZG9zQXJyYXk7XG4gICAgY29uc3QgcHVzaFRvSG9tZVRvZG9zQXJyYXkgPSAodG9kbykgPT4ge1xuICAgICAgICBob21lVG9kb3NBcnJheS5wdXNoKHRvZG8pO1xuICAgIH07XG4gICAgY29uc3QgcHVzaFRvUHJvamVjdHNBcnJheSA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RzQXJyYXkucHVzaChwcm9qZWN0KTtcbiAgICB9O1xuICAgIGNvbnN0IGdldEFsbFRvZG9zRnJvbVByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWxsVG9kb3MgPVtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgYWxsVG9kb3MucHVzaChwcm9qZWN0c0FycmF5W2ldLmdldFRvZG9zQXJyYXkpXG4gICAgICAgIH07XG4gICAgICAgIGFsbFRvZG9zLnB1c2goaG9tZVRvZG9zQXJyYXkpXG4gICAgICAgIHJldHVybiBhbGxUb2Rvcy5mbGF0KClcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgcHJvamVjdHNBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlSG9tZVRPRE8gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgaG9tZVRvZG9zQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICAgIGNvbnN0IG1vdmVUT0RPRnJvbUhvbWVUb1Byb2plY3QgPSAodG9kb0luZGV4LCBwcm9qZWN0SW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHRlbXAgPSBob21lVG9kb3NBcnJheS5zcGxpY2UodG9kb0luZGV4LCAxKTtcbiAgICAgICAgcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLmFkZFRvVG9kb3NBcnJheSh0ZW1wKTtcbiAgICAgICAgcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLmZsYXRUb2Rvc0FycmF5KCk7XG4gICAgfTtcbiAgICBjb25zdCBzZXRQcm9qZWN0c0FycmF5ID0gKGRhdGEpID0+IHtcbiAgICAgICAgcHJvamVjdHNBcnJheSA9IGRhdGE7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQcm9qZWN0c0FycmF5LFxuICAgICAgICBnZXRBbGxUb2Rvc0Zyb21Qcm9qZWN0cyxcbiAgICAgICAgZ2V0SG9tZVRvZG9zQXJyYXksXG4gICAgICAgIHB1c2hUb1Byb2plY3RzQXJyYXksXG4gICAgICAgIHB1c2hUb0hvbWVUb2Rvc0FycmF5LFxuICAgICAgICByZW1vdmVQcm9qZWN0LFxuICAgICAgICByZW1vdmVIb21lVE9ETyxcbiAgICAgICAgbW92ZVRPRE9Gcm9tSG9tZVRvUHJvamVjdCxcbiAgICAgICAgc2V0UHJvamVjdHNBcnJheSxcbiAgICB9XG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgcHJvamVjdE1lbmFnZXIiLCJpbXBvcnQgcHJvamVjdE1lbmFnZXIgZnJvbSBcIi4vcHJvamVjdC1tZW5hZ2VyLmpzXCI7XG5pbXBvcnQgcmVmcmVzaFRvZG9zQ29udGFpbmVyIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1yZWZyZXNoLVRPRE9TLWNvbnRhaW5lclwiOyBcbmltcG9ydCBlZGl0VG9kb0NvbnRhaW5lckNvbnRlbnRzIGZyb20gJy4uL2RvbS1mdW5jdGlvbnMvRE9NLWVkaXRUb2RvLXN3YXAtdG8tRm9ybSc7XG5pbXBvcnQgY3JlYXRlQWRkVE9ET3RCdG4gZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFRvZG8tY3JlYXRlLWFkZEJ0bi5qc1wiO1xuaW1wb3J0IGFkZFRPRE9CdXR0b25FdmVudCBmcm9tIFwiLi9hZGQtdG9kby1idXR0b24tZXZlbnQuanNcIjtcbmltcG9ydCBtb3ZlVG9kb0Ryb3Bkb3duQ29udGVudHMgZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLXNob3ctbW92ZS1UT0RPLWRyb3Bkb3duLmpzXCI7XG5pbXBvcnQgdXBkYXRlTG9jYWxTdG9yYWdlIGZyb20gXCIuL2xvY2FsLXN0b3JhZ2UtbWVuYWdlci5qc1wiO1xuY29uc3QgdG9kb0RpdnNFdmVudHMgPSAoKSA9PiB7XG5cbiAgICBsZXQgdGFyZ2V0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0JykuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgXG4gICAgY29uc3QgdG9kb0RlbGV0ZUJ1dHRvbkV2ZW50ID0gKGRlbGV0ZUJ1dHRvbiwgdG9kb0luZGV4KSA9PiB7XG4gICAgICAgIGxldCB0YXJnZXRQcm9qZWN0SW5kZXggPSAwO1xuICAgICAgICBpZiAodGFyZ2V0UHJvamVjdE5hbWUgPT09IFwiSE9NRVwiKSB7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgY3JlYXRlQWRkVE9ET3RCdG4oKTtcbiAgICAgICAgICAgICAgICBhZGRUT0RPQnV0dG9uRXZlbnQoKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWVuYWdlci5yZW1vdmVIb21lVE9ETyh0b2RvSW5kZXgpO1xuICAgICAgICAgICAgICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7ICAgIFxuICAgICAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgfSk7ICAgIFxuICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSA9PT0gdGFyZ2V0UHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0UHJvamVjdEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xuICAgICAgICAgICAgICAgIGNyZWF0ZUFkZFRPRE90QnRuKCk7XG4gICAgICAgICAgICAgICAgYWRkVE9ET0J1dHRvbkV2ZW50KCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpW3RhcmdldFByb2plY3RJbmRleF0ucmVtb3ZlVE9ETyh0b2RvSW5kZXgpO1xuICAgICAgICAgICAgICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgdG9kb0VkaXRCdXR0b25FdmVudCA9IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEJ1dHRvbiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nVG9kb05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ1RvZG9EYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdUb2RvVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nVG9kb05vdGVzLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgPT4ge1xuICAgICAgICBsZXQgdGFyZ2V0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0JykuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICAgIGxldCB0YXJnZXRQcm9qZWN0SW5kZXggPSAwO1xuICAgICAgICBsZXQgdG9kb05hbWVEaXZDb250ZW50ID0gc3RyaW5nVG9kb05hbWU7XG4gICAgICAgIGxldCB0b2RvRGF0ZURpdkNvbnRlbnQgPSBzdHJpbmdUb2RvRGF0ZTtcbiAgICAgICAgbGV0IHRvZG9UaW1lRGl2Q29udGVudCA9IHN0cmluZ1RvZG9UaW1lO1xuICAgICAgICBsZXQgdG9kb05vdGVzRGl2Q29udGVudCA9IHN0cmluZ1RvZG9Ob3RlcztcbiAgICAgICAgbGV0IHBhc3NlZFRvZG9JbmRleCA9IHRvZG9JbmRleDtcbiAgICAgICAgaWYgKHRhcmdldFByb2plY3ROYW1lID09PSBcIkhPTUVcIikge1xuICAgICAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZWRpdFRvZG9Db250YWluZXJDb250ZW50cyh0YXJnZXRQcm9qZWN0SW5kZXgsIHBhc3NlZFRvZG9JbmRleCwgdG9kb05hbWVEaXZDb250ZW50LCB0b2RvRGF0ZURpdkNvbnRlbnQsIHRvZG9UaW1lRGl2Q29udGVudCwgdG9kb05vdGVzRGl2Q29udGVudCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSA9PT0gdGFyZ2V0UHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0UHJvamVjdEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZWRpdFRvZG9Db250YWluZXJDb250ZW50cyh0YXJnZXRQcm9qZWN0SW5kZXgsIHBhc3NlZFRvZG9JbmRleCwgdG9kb05hbWVEaXZDb250ZW50LCB0b2RvRGF0ZURpdkNvbnRlbnQsIHRvZG9UaW1lRGl2Q29udGVudCwgdG9kb05vdGVzRGl2Q29udGVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTsgICAgXG4gICAgfTtcblxuICAgIGNvbnN0IHRvZG9Nb3ZlQnV0dG9uRXZlbnQgPSAobW92ZUJ1dHRvbiwgdG9kb0luZGV4LCB0b2RvRGl2ICkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhbGxUb2RvcyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2RvRGl2JyldO1xuICAgICAgICAgICAgICAgIGFsbFRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCd0YXJnZXRUb2RvJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXJnZXRUb2RvJyk7XG5cbiAgICAgICAgICAgICAgICBpZighIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZlVG9kb1Byb2plY3RzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvZG9Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZlVG9kb1Byb2plY3RzJyk7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUb2RvUHJvamVjdHMucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUb2RvRHJvcGRvd25Db250ZW50cyh0YXJnZXRQcm9qZWN0TmFtZSwgdG9kb0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbGxUb2RvcyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2RvRGl2JyldO1xuICAgICAgICAgICAgICAgICAgICBhbGxUb2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmdldFRvZG8nKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgndGFyZ2V0VG9kbycpO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG9kb0Ryb3Bkb3duQ29udGVudHModGFyZ2V0UHJvamVjdE5hbWUsIHRvZG9JbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgdG9kb1RhcmdldEV2ZW50ID0gKHRvZG9EaXYpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICB0b2RvRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFsbFRvZG9zID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG9EaXYnKV07XG4gICAgICAgICAgICBhbGxUb2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCd0YXJnZXRUb2RvJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgndGFyZ2V0VG9kbycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b2RvRGVsZXRlQnV0dG9uRXZlbnQsXG4gICAgICAgIHRvZG9FZGl0QnV0dG9uRXZlbnQsXG4gICAgICAgIHRvZG9Nb3ZlQnV0dG9uRXZlbnQsXG4gICAgICAgIHRvZG9UYXJnZXRFdmVudFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9EaXZzRXZlbnRzXG5cblxuXG47IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXyBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgaGVhZGVyQm9keUZvb3RlciBmcm9tICcuL2RvbS1mdW5jdGlvbnMvRE9NLXByaW1lLWRpdnMuanMnO1xuaW1wb3J0IGNyZWF0ZUhlYWQgZnJvbSAnLi9kb20tZnVuY3Rpb25zL0RPTS1oZWFkLmpzJztcbmltcG9ydCBjcmVhdGVCb2R5IGZyb20gJy4vZG9tLWZ1bmN0aW9ucy9ET00tYm9keS5qcyc7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gJy4vZG9tLWZ1bmN0aW9ucy9ET00tZm9vdGVyLmpzJztcbmltcG9ydCBhZGRQcm9qZWN0QnV0dG9uRXZlbnQgZnJvbSAnLi9mdW5jdGlvbnMvYWRkLXByb2plY3QtYnV0dG9uLWV2ZW50LmpzJztcbmltcG9ydCBjcmVhdGVBZGRUT0RPdEJ0biBmcm9tICcuL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFRvZG8tY3JlYXRlLWFkZEJ0bi5qcyc7XG5pbXBvcnQgYWRkVE9ET0J1dHRvbkV2ZW50IGZyb20gJy4vZnVuY3Rpb25zL2FkZC10b2RvLWJ1dHRvbi1ldmVudC5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSBmcm9tIFwiLi9mdW5jdGlvbnMvZ2V0LWRhdGEtZnJvbS1sb2NhbC1zdG9yYWdlLmpzXCI7XG5pbXBvcnQgcmVmcmVzaFRvZG9zQ29udGFpbmVyIGZyb20gXCIuL2RvbS1mdW5jdGlvbnMvRE9NLXJlZnJlc2gtVE9ET1MtY29udGFpbmVyXCI7XG5pbXBvcnQgc2hvd1Byb2plY3RzIGZyb20gXCIuL2RvbS1mdW5jdGlvbnMvRE9NLXNob3ctcHJvamVjdHMuanNcIjtcblxuXG5cbmhlYWRlckJvZHlGb290ZXIoKTtcbmNyZWF0ZUhlYWQoKTtcbmNyZWF0ZUJvZHkoKTtcbmNyZWF0ZUZvb3RlcigpO1xuYWRkUHJvamVjdEJ1dHRvbkV2ZW50KCk7XG5jcmVhdGVBZGRUT0RPdEJ0bigpO1xuYWRkVE9ET0J1dHRvbkV2ZW50KCk7XG5nZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgpO1xuc2hvd1Byb2plY3RzKCk7XG5yZWZyZXNoVG9kb3NDb250YWluZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=