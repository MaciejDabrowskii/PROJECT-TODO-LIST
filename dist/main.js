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
___CSS_LOADER_EXPORT___.push([module.id, "\n@font-face {\n    font-family: 'elements';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\n    font-weight: 400;\n    font-style: normal;\n  }\n\n@font-face {\n    font-family: 'text';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n    font-weight: 400;\n    font-style: normal;\n  }\n\n:root {\n    /* colors */\n    --background-color: #bae6fd;\n    --target-color: #3b82f6;\n    --porojects-divs-background: #38bdf8;\n    --low-priority-color: #bbf7d0;\n    --medium-priority-color: #fef08a;\n    --high-priority-color: #fda4af;\n    --outdated-color: #e5e7eb;\n    --separator-red: #e11d48;\n    font-family: 'elements';\n}\nbody {\n    display: grid;\n    grid-template-rows: 1fr 12fr 0.3fr;\n    background-color: var(--background-color);\n}\n.head {\n    width: 100%;\n    height: 11vh;\n    background-color: var(--target-color);\n    font-family: 'elements';\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 1vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.logo {\n    height: 100%;\n    width: 40%;\n    font-size: 5vh;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.body {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n.projectsDiv {\n    grid-column: 1 / 2;\n    height: 100%;\n    /* background-color: rgb(207, 196, 182); */\n    border-right: 1vh solid var(--separator-red);\n    padding-right: 2vh;\n    display: grid;\n    grid-template-rows: 1fr 1fr 10fr 1fr;\n}\n.projectsDivHeader {\n    grid-row: 1 / 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--target-color);\n    font-family: 'elements';\n    font-size: 3vh;\n    letter-spacing: 0.3vh;\n}\n.homeProjectDiv {\n    grid-row: 2 / 3;\n    background-color: var(--low-priority-color);\n    border-radius: 1vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 3vh;\n    color: var(--target-color);\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.projectsContainer {\n    grid-row: 3 / 4;\n    /* background-color: rgb(209, 223, 176); */\n}\n.target {\n    border: 0.6vh solid var(--target-color);\n}\n.projectDiv {\n    display: flex;\n    justify-content: space-between;\n    height: 3vh;\n    background-color: var(--porojects-divs-background);\n    font-family: 'elements';\n    font-size: 2.5vh;\n    letter-spacing: 0.1vh;\n    color: white;\n    padding: 1vh;\n    margin: 1vh 0 1vh 0;\n    border-radius: 1vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.editTodoButton, .deleteTodoButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 3.5vh;\n    height: 3.5vh;\n    border-radius: 1vh;\n    border: none;\n    background-color: white;\n    font-size: 2vh;\n    color: var(--target-color);\n}\n.deleteTodoButton {\n    margin: 0 0.5vh;\n}\n.moveTodoButton {\n    border-radius: 1vh;\n    border: none;\n    background-color: white;\n    font-size: 2vh;\n    font-family: 'elements';\n    color: var(--target-color);\n}\n.projectButtonsContainer {\n    display: flex;\n    gap: 1vh;\n    justify-content: center;\n    align-items: center;\n}\n.editProjectButton {\n    width: 3vh;\n    height: 2.9vh;\n    background-color: white;\n    border: 1px; \n    border-radius: 1vh;\n    font-size: 2vh;\n    color: var(--target-color);\n}\n.deleteProjectButton {\n    width: 3vh;\n    height: 3vh;\n    background-color: white;\n    border: 1px; \n    border-radius: 1vh;\n    font-size: 2vh;\n    color: var(--target-color);\n}\n.dropdown {\n    position: relative;\n    display: inline-block;\n    bottom: 0.2vh;\n\n}\n.dropdownContent {\n    display: block;\n    position: absolute;\n    background-color: #f1f1f1;\n    width: 27vh;\n    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;\n    z-index: 1;\n    border-radius: 1vh;\n    padding: 1vh 1vh 1.5vh 1vh;\n    font-size: 1.9vh;\n    background-color: var(--target-color);\n    margin-top: 0.3vh;\n    text-align: center;\n}\n#editProjectName {\n    border: none;\n    border-radius: 0.5vh;\n    margin-top: 0.6vh;\n    font-family: 'elements';\n    transition: 0.1s;\n    margin-right: 0.4vh;\n}\n#editProjectName:focus {\n    outline: none;\n    border: 0.3vh solid var(--high-priority-color);\n    color: var(--target-color);\n    caret-color: var(--high-priority-color);\n}\n.confirmNewNameButton {\n    background-color: white;\n    border: 1px;\n    border-radius: 0.7vh;\n    font-size: 1.7vh;\n    color: var(--target-color);\n    font-weight: bold;\n}\n.editProjectErrorDiv {\n    font-size: 1.5vh;\n    background-color: var(--medium-priority-color);\n    color: var(--separator-red);\n    padding: 0.4vh 1vh;\n    margin-top: 1vh;\n    border-radius: 1vh;\n    border: 0.4vh solid;\n}\n\n.addProjectContainer {\n    position: relative;\n    grid-row: 4 / 5;\n    background-color: var(--low-priority-color);\n    border: 0.6vh solid var(--target-color);\n    border-radius: 2vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--target-color);\n    gap: 0.5vh;\n    font-size: 2vh;\n}\n\n.addProjectButton {\n    width: 25vh;\n    height: 5vh;\n    border: 0.4vh solid var(--target-color);\n    background-color: var(--medium-priority-color);\n    border-radius: 2vh;\n    font-family: 'elements';\n    color: var(--target-color);\n    font-size: 3vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n\n#projectNameInputText {\n    border: none;\n    border-radius: 1vh;\n    font-family: 'elements';\n    transition: 0.1s;\n    width: 23vh;\n    height: 3vh;\n    color: var(--target-color);\n    transition: 0.3s;\n}\n#projectNameInputText:focus {\n    font-size: 2vh;\n    outline: none;\n    border: 0.5vh solid var(--high-priority-color);\n    color: var(--target-color);\n    caret-color: var(--high-priority-color);\n}\n.projectNameConfirmBtn, .projectNameCancelBtn{\n    height: 3.5vh;\n    width: 3.5vh;\n    background-color: white;\n    border: 0.4vh solid var(--target-color);\n    border-radius: 1vh;\n    color: var(--target-color);\n    font-size: 1.7vh;\n    font-weight: bold;\n}\n.validationMessageDiv {\n    display: none;\n}\n.validationMessageDiv.visible {\n    display: block;\n    position: absolute;\n    font-size: 1.5vh;\n    background-color: var(--medium-priority-color);\n    color: var(--separator-red);\n    padding: 0.4vh 1vh;\n    margin-bottom: 8vh;\n    margin-left: 17vh;\n    border-radius: 1vh;\n    border: 0.4vh solid;\n    white-space: nowrap;\n}\n.todosDiv {\n    grid-column: 2 / 3;\n    height: 100%;\n    display: grid;\n    grid-template-rows: 1fr 0.5fr 10fr 1fr;\n    margin: 0 3vh 0 3vh;\n    color: var(--target-color);\n    border-radius: 1vh;\n}\n.todoDivHeader {\n    grid-row: 1 / 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 3.5vh;\n    color: var(--target-color);\n    font-family: 'elements';\n}\n.todoDataHeaderDiv {\n    grid-row: 2 / 3;\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr 4fr 1fr;\n    padding: 0.25% 0.5%;\n    font-size: 2.5vh;\n    color: var(--target-color);\n    font-family: 'elements';\n    border-bottom: 1vh solid var(--separator-red);\n}\n.todoDataHeaderDiv > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.allTodosButton {\n    background-color: var(--low-priority-color);\n    align-self: center;\n    justify-self: end;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0.3%;\n    margin-right: 2%;\n    \n}\n.todosContainer {\n    grid-row: 3 / 4;\n    margin-top: 1.5vh;\n}\n.todoDiv {\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr 4fr 0.5fr 0.25fr 0.25fr;\n    margin: 1% 0;\n    height: 5vh;\n    align-items: center;\n    border-radius: 1vh;\n    padding-right: 1vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.High {\n    background-color: var(--high-priority-color);\n}\n.Medium {\n    background-color: var(--medium-priority-color);\n}\n.Low {\n    background-color: var(--low-priority-color);\n}\n.moveTodoProjects{\n    position: relative;\n    display: inline-block;\n}\n.moveTodoDropdownHomeProject {\n    padding: 1vh;\n    background-color: var(--porojects-divs-background);\n    border-radius: 2vh;\n    margin-bottom: 1vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.moveTodoDropdownProjectDiv {\n    padding: 1vh;\n    background-color: var(--porojects-divs-background);\n    border-radius: 2vh;\n    margin-bottom: 1.3vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.moveTodoDropdownProjectDiv, .moveTodoDropdownHomeProject {\n    text-align: center;\n}\n.moveTodoDropdownProjectDiv:hover, .moveTodoDropdownHomeProject:hover {\n    border: 0.4vh solid var(--separator-red);\n}\n.moveTodoProjectsDropdownContainer {\n    display: block;\n    position: absolute;\n    background-color: var(--target-color);\n    border-radius: 2vh;\n    min-width: 30vh;\n    margin-right: 5.9vh;\n    color: white;\n    border: 0.5vh solid white;\n    right: 0;\n    top: 100%;\n    padding: 20px;\n    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;\n    z-index: 1;\n}\n.todoDiv > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.targetTodo {\n    border: 0.6vh solid var(--target-color);\n}\n.todoOptionsContainer {\n    display: grid;\n    grid-template-columns: 0.8fr 2fr 0.5fr 1.2fr 0.5fr 0.75fr 0.75fr 0.75fr 0.5fr 3fr 0.25fr 0.25fr;\n    grid-template-rows: 1fr 1.5fr;\n    grid-row: 4 / 5;\n    background-color: var(--low-priority-color);\n    padding: 5px;\n    justify-content: center;\n    align-items: center;\n    border: 0.6vh solid var(--target-color);\n    border-radius: 2vh;\n    gap: 0.5vh;\n}\n.todoOptionsContainer > input[type=text], input[type=textarea], input[type=date], input[type=time], select {\n    border: none;\n    height: 3vh;\n    border-radius: 1vh;\n    font-family: 'elements';\n    color: var(--target-color);\n    background-color: white;\n    padding: 0 1vh;\n    transition: 0.3s;\n}\n.todoOptionsContainer > input[type=text]:focus, input[type=textarea]:focus, input[type=date]:focus, input[type=time]:focus {\n    outline: none;\n    border: 0.5vh solid var(--high-priority-color);\n    color: var(--target-color);\n    caret-color: var(--high-priority-color);\n}\n.todoCreateConfirmBtn, .todoCreateCancelBtn, .todoEditConfirmBtn {\n    width: 3.5vh;\n    height: 3vh;\n    background-color: white;\n    border: 0.4vh solid var(--target-color);\n    border-radius: 1vh;\n    color: var(--target-color);\n    font-size: 1.6vh;\n    font-weight: bold;\n}\n.addTODOButton {\n    grid-column: 1 / 13;\n    grid-row: 1 / 3;\n    width: 30%;\n    height: 80%;\n    align-self: center;\n    justify-self: center;\n    width: 38vh;\n    height: 6vh;\n    border: 0.5vh solid var(--target-color);\n    background-color: var(--medium-priority-color);\n    border-radius: 2vh;\n    font-family: 'elements';\n    color: var(--target-color);\n    font-size: 3vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.confirmAndDropdown {\n    position: relative;\n    display: inline-block;\n}\n\n.todoDataError {\n    position: absolute;\n    display: block;\n    z-index: 1;\n    width: max-content;\n    right: 0.5vh;\n    bottom: 3.3vh;\n    background-color: var(--medium-priority-color);\n    color: var(--separator-red);\n    margin-bottom: 0.3vh;\n    border: solid;\n    padding: 0.5vh 3vh;\n    border-radius: 1vh;\n\n}\n.todoOptionsContainer > label {\n    justify-self: center;\n}\n.todoCreateDivHeader {\n    grid-column: 1 / 13;\n    grid-row: 1 / 2;\n    justify-self: center;\n    border-bottom: 0.5vh solid var(--separator-red);\n}\n.todoEditDivHeader {\n    grid-column: 1 / 13;\n    grid-row: 1 / 2;\n    justify-self: center;\n    border-bottom: 0.5vh solid var(--separator-red);\n}\n.footer {\n    grid-row: 3 / 4;\n    display: flex;\n    align-items: center;\n    height: 4vh;\n    justify-content: center;\n    gap: 1%;\n    background-color: white;\n    margin-top: 0.5vh;\n}\n.gitIcon {\n    height: 3vh;\n}\n.outdatedTodo{\n    text-decoration: line-through;\n    background-color: gray;\n}\n.gitIcon {\n    transition: transform .4s ease-in-out;\n}\n.gitIcon:hover {\n    color: var(--separator-red);\n    transform: rotate(360deg) scale(1.2);\n}\n\n.todoCreateConfirmBtn, .todoCreateCancelBtn, .todoEditConfirmBtn,\n .addProjectButton, .addTODOButton, .moveTodoButton, .editTodoButton,\n .deleteTodoButton, .editProjectButton, .deleteProjectButton, .confirmNewNameButton, \n .projectNameConfirmBtn, .projectNameCancelBtn, .gitIcon {\n    cursor:pointer;\n }\n .todoCreateConfirmBtn, .todoCreateCancelBtn, .todoEditConfirmBtn,\n.moveTodoButton, .editTodoButton, .deleteTodoButton, .editProjectButton, \n.deleteProjectButton, .confirmNewNameButton, .projectNameConfirmBtn, .projectNameCancelBtn {\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\n@font-face {\n    font-family: 'elements';\n    src: url('../fonts/elements.woff') format('woff');\n    font-weight: 400;\n    font-style: normal;\n  }\n\n@font-face {\n    font-family: 'text';\n    src: url('../fonts/text.woff') format('woff');\n    font-weight: 400;\n    font-style: normal;\n  }\n\n:root {\n    /* colors */\n    --background-color: #bae6fd;\n    --target-color: #3b82f6;\n    --porojects-divs-background: #38bdf8;\n    --low-priority-color: #bbf7d0;\n    --medium-priority-color: #fef08a;\n    --high-priority-color: #fda4af;\n    --outdated-color: #e5e7eb;\n    --separator-red: #e11d48;\n    font-family: 'elements';\n}\nbody {\n    display: grid;\n    grid-template-rows: 1fr 12fr 0.3fr;\n    background-color: var(--background-color);\n}\n.head {\n    width: 100%;\n    height: 11vh;\n    background-color: var(--target-color);\n    font-family: 'elements';\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 1vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.logo {\n    height: 100%;\n    width: 40%;\n    font-size: 5vh;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.body {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n.projectsDiv {\n    grid-column: 1 / 2;\n    height: 100%;\n    /* background-color: rgb(207, 196, 182); */\n    border-right: 1vh solid var(--separator-red);\n    padding-right: 2vh;\n    display: grid;\n    grid-template-rows: 1fr 1fr 10fr 1fr;\n}\n.projectsDivHeader {\n    grid-row: 1 / 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--target-color);\n    font-family: 'elements';\n    font-size: 3vh;\n    letter-spacing: 0.3vh;\n}\n.homeProjectDiv {\n    grid-row: 2 / 3;\n    background-color: var(--low-priority-color);\n    border-radius: 1vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 3vh;\n    color: var(--target-color);\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.projectsContainer {\n    grid-row: 3 / 4;\n    /* background-color: rgb(209, 223, 176); */\n}\n.target {\n    border: 0.6vh solid var(--target-color);\n}\n.projectDiv {\n    display: flex;\n    justify-content: space-between;\n    height: 3vh;\n    background-color: var(--porojects-divs-background);\n    font-family: 'elements';\n    font-size: 2.5vh;\n    letter-spacing: 0.1vh;\n    color: white;\n    padding: 1vh;\n    margin: 1vh 0 1vh 0;\n    border-radius: 1vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.editTodoButton, .deleteTodoButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 3.5vh;\n    height: 3.5vh;\n    border-radius: 1vh;\n    border: none;\n    background-color: white;\n    font-size: 2vh;\n    color: var(--target-color);\n}\n.deleteTodoButton {\n    margin: 0 0.5vh;\n}\n.moveTodoButton {\n    border-radius: 1vh;\n    border: none;\n    background-color: white;\n    font-size: 2vh;\n    font-family: 'elements';\n    color: var(--target-color);\n}\n.projectButtonsContainer {\n    display: flex;\n    gap: 1vh;\n    justify-content: center;\n    align-items: center;\n}\n.editProjectButton {\n    width: 3vh;\n    height: 2.9vh;\n    background-color: white;\n    border: 1px; \n    border-radius: 1vh;\n    font-size: 2vh;\n    color: var(--target-color);\n}\n.deleteProjectButton {\n    width: 3vh;\n    height: 3vh;\n    background-color: white;\n    border: 1px; \n    border-radius: 1vh;\n    font-size: 2vh;\n    color: var(--target-color);\n}\n.dropdown {\n    position: relative;\n    display: inline-block;\n    bottom: 0.2vh;\n\n}\n.dropdownContent {\n    display: block;\n    position: absolute;\n    background-color: #f1f1f1;\n    width: 27vh;\n    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;\n    z-index: 1;\n    border-radius: 1vh;\n    padding: 1vh 1vh 1.5vh 1vh;\n    font-size: 1.9vh;\n    background-color: var(--target-color);\n    margin-top: 0.3vh;\n    text-align: center;\n}\n#editProjectName {\n    border: none;\n    border-radius: 0.5vh;\n    margin-top: 0.6vh;\n    font-family: 'elements';\n    transition: 0.1s;\n    margin-right: 0.4vh;\n}\n#editProjectName:focus {\n    outline: none;\n    border: 0.3vh solid var(--high-priority-color);\n    color: var(--target-color);\n    caret-color: var(--high-priority-color);\n}\n.confirmNewNameButton {\n    background-color: white;\n    border: 1px;\n    border-radius: 0.7vh;\n    font-size: 1.7vh;\n    color: var(--target-color);\n    font-weight: bold;\n}\n.editProjectErrorDiv {\n    font-size: 1.5vh;\n    background-color: var(--medium-priority-color);\n    color: var(--separator-red);\n    padding: 0.4vh 1vh;\n    margin-top: 1vh;\n    border-radius: 1vh;\n    border: 0.4vh solid;\n}\n\n.addProjectContainer {\n    position: relative;\n    grid-row: 4 / 5;\n    background-color: var(--low-priority-color);\n    border: 0.6vh solid var(--target-color);\n    border-radius: 2vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--target-color);\n    gap: 0.5vh;\n    font-size: 2vh;\n}\n\n.addProjectButton {\n    width: 25vh;\n    height: 5vh;\n    border: 0.4vh solid var(--target-color);\n    background-color: var(--medium-priority-color);\n    border-radius: 2vh;\n    font-family: 'elements';\n    color: var(--target-color);\n    font-size: 3vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n\n#projectNameInputText {\n    border: none;\n    border-radius: 1vh;\n    font-family: 'elements';\n    transition: 0.1s;\n    width: 23vh;\n    height: 3vh;\n    color: var(--target-color);\n    transition: 0.3s;\n}\n#projectNameInputText:focus {\n    font-size: 2vh;\n    outline: none;\n    border: 0.5vh solid var(--high-priority-color);\n    color: var(--target-color);\n    caret-color: var(--high-priority-color);\n}\n.projectNameConfirmBtn, .projectNameCancelBtn{\n    height: 3.5vh;\n    width: 3.5vh;\n    background-color: white;\n    border: 0.4vh solid var(--target-color);\n    border-radius: 1vh;\n    color: var(--target-color);\n    font-size: 1.7vh;\n    font-weight: bold;\n}\n.validationMessageDiv {\n    display: none;\n}\n.validationMessageDiv.visible {\n    display: block;\n    position: absolute;\n    font-size: 1.5vh;\n    background-color: var(--medium-priority-color);\n    color: var(--separator-red);\n    padding: 0.4vh 1vh;\n    margin-bottom: 8vh;\n    margin-left: 17vh;\n    border-radius: 1vh;\n    border: 0.4vh solid;\n    white-space: nowrap;\n}\n.todosDiv {\n    grid-column: 2 / 3;\n    height: 100%;\n    display: grid;\n    grid-template-rows: 1fr 0.5fr 10fr 1fr;\n    margin: 0 3vh 0 3vh;\n    color: var(--target-color);\n    border-radius: 1vh;\n}\n.todoDivHeader {\n    grid-row: 1 / 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 3.5vh;\n    color: var(--target-color);\n    font-family: 'elements';\n}\n.todoDataHeaderDiv {\n    grid-row: 2 / 3;\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr 4fr 1fr;\n    padding: 0.25% 0.5%;\n    font-size: 2.5vh;\n    color: var(--target-color);\n    font-family: 'elements';\n    border-bottom: 1vh solid var(--separator-red);\n}\n.todoDataHeaderDiv > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.allTodosButton {\n    background-color: var(--low-priority-color);\n    align-self: center;\n    justify-self: end;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0.3%;\n    margin-right: 2%;\n    \n}\n.todosContainer {\n    grid-row: 3 / 4;\n    margin-top: 1.5vh;\n}\n.todoDiv {\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr 4fr 0.5fr 0.25fr 0.25fr;\n    margin: 1% 0;\n    height: 5vh;\n    align-items: center;\n    border-radius: 1vh;\n    padding-right: 1vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.High {\n    background-color: var(--high-priority-color);\n}\n.Medium {\n    background-color: var(--medium-priority-color);\n}\n.Low {\n    background-color: var(--low-priority-color);\n}\n.moveTodoProjects{\n    position: relative;\n    display: inline-block;\n}\n.moveTodoDropdownHomeProject {\n    padding: 1vh;\n    background-color: var(--porojects-divs-background);\n    border-radius: 2vh;\n    margin-bottom: 1vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.moveTodoDropdownProjectDiv {\n    padding: 1vh;\n    background-color: var(--porojects-divs-background);\n    border-radius: 2vh;\n    margin-bottom: 1.3vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.moveTodoDropdownProjectDiv, .moveTodoDropdownHomeProject {\n    text-align: center;\n}\n.moveTodoDropdownProjectDiv:hover, .moveTodoDropdownHomeProject:hover {\n    border: 0.4vh solid var(--separator-red);\n}\n.moveTodoProjectsDropdownContainer {\n    display: block;\n    position: absolute;\n    background-color: var(--target-color);\n    border-radius: 2vh;\n    min-width: 30vh;\n    margin-right: 5.9vh;\n    color: white;\n    border: 0.5vh solid white;\n    right: 0;\n    top: 100%;\n    padding: 20px;\n    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;\n    z-index: 1;\n}\n.todoDiv > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.targetTodo {\n    border: 0.6vh solid var(--target-color);\n}\n.todoOptionsContainer {\n    display: grid;\n    grid-template-columns: 0.8fr 2fr 0.5fr 1.2fr 0.5fr 0.75fr 0.75fr 0.75fr 0.5fr 3fr 0.25fr 0.25fr;\n    grid-template-rows: 1fr 1.5fr;\n    grid-row: 4 / 5;\n    background-color: var(--low-priority-color);\n    padding: 5px;\n    justify-content: center;\n    align-items: center;\n    border: 0.6vh solid var(--target-color);\n    border-radius: 2vh;\n    gap: 0.5vh;\n}\n.todoOptionsContainer > input[type=text], input[type=textarea], input[type=date], input[type=time], select {\n    border: none;\n    height: 3vh;\n    border-radius: 1vh;\n    font-family: 'elements';\n    color: var(--target-color);\n    background-color: white;\n    padding: 0 1vh;\n    transition: 0.3s;\n}\n.todoOptionsContainer > input[type=text]:focus, input[type=textarea]:focus, input[type=date]:focus, input[type=time]:focus {\n    outline: none;\n    border: 0.5vh solid var(--high-priority-color);\n    color: var(--target-color);\n    caret-color: var(--high-priority-color);\n}\n.todoCreateConfirmBtn, .todoCreateCancelBtn, .todoEditConfirmBtn {\n    width: 3.5vh;\n    height: 3vh;\n    background-color: white;\n    border: 0.4vh solid var(--target-color);\n    border-radius: 1vh;\n    color: var(--target-color);\n    font-size: 1.6vh;\n    font-weight: bold;\n}\n.addTODOButton {\n    grid-column: 1 / 13;\n    grid-row: 1 / 3;\n    width: 30%;\n    height: 80%;\n    align-self: center;\n    justify-self: center;\n    width: 38vh;\n    height: 6vh;\n    border: 0.5vh solid var(--target-color);\n    background-color: var(--medium-priority-color);\n    border-radius: 2vh;\n    font-family: 'elements';\n    color: var(--target-color);\n    font-size: 3vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.confirmAndDropdown {\n    position: relative;\n    display: inline-block;\n}\n\n.todoDataError {\n    position: absolute;\n    display: block;\n    z-index: 1;\n    width: max-content;\n    right: 0.5vh;\n    bottom: 3.3vh;\n    background-color: var(--medium-priority-color);\n    color: var(--separator-red);\n    margin-bottom: 0.3vh;\n    border: solid;\n    padding: 0.5vh 3vh;\n    border-radius: 1vh;\n\n}\n.todoOptionsContainer > label {\n    justify-self: center;\n}\n.todoCreateDivHeader {\n    grid-column: 1 / 13;\n    grid-row: 1 / 2;\n    justify-self: center;\n    border-bottom: 0.5vh solid var(--separator-red);\n}\n.todoEditDivHeader {\n    grid-column: 1 / 13;\n    grid-row: 1 / 2;\n    justify-self: center;\n    border-bottom: 0.5vh solid var(--separator-red);\n}\n.footer {\n    grid-row: 3 / 4;\n    display: flex;\n    align-items: center;\n    height: 4vh;\n    justify-content: center;\n    gap: 1%;\n    background-color: white;\n    margin-top: 0.5vh;\n}\n.gitIcon {\n    height: 3vh;\n}\n.outdatedTodo{\n    text-decoration: line-through;\n    background-color: gray;\n}\n.gitIcon {\n    transition: transform .4s ease-in-out;\n}\n.gitIcon:hover {\n    color: var(--separator-red);\n    transform: rotate(360deg) scale(1.2);\n}\n\n.todoCreateConfirmBtn, .todoCreateCancelBtn, .todoEditConfirmBtn,\n .addProjectButton, .addTODOButton, .moveTodoButton, .editTodoButton,\n .deleteTodoButton, .editProjectButton, .deleteProjectButton, .confirmNewNameButton, \n .projectNameConfirmBtn, .projectNameCancelBtn, .gitIcon {\n    cursor:pointer;\n }\n .todoCreateConfirmBtn, .todoCreateCancelBtn, .todoEditConfirmBtn,\n.moveTodoButton, .editTodoButton, .deleteTodoButton, .editProjectButton, \n.deleteProjectButton, .confirmNewNameButton, .projectNameConfirmBtn, .projectNameCancelBtn {\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n }"],"sourceRoot":""}]);
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
 * > ?????? Please note that the `format` tokens differ from Moment.js and other libraries.
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
    projectNameConfirmBtn.innerText= "???";
    const projectNameCancelBtn = document.createElement('button');
    projectNameCancelBtn.classList.add("projectNameCancelBtn");
    projectNameCancelBtn.innerText= "???";

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
    todoCreateConfirmBtn.innerText= "???";

    const todoCreateCancelBtn = document.createElement('button');
    todoCreateCancelBtn.classList.add("todoCreateCancelBtn");
    todoCreateCancelBtn.innerText= "???";

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
    confirmNewNameButton.textContent = '???';

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
    editTodoButton.textContent = "???";

    const moveTodoDropdown = document.createElement('div');
    moveTodoDropdown.classList.add('moveTodoDropdown');

    moveTodoDropdown.append(moveTodoButton);

    const deleteTodoButton = document.createElement('button');
    deleteTodoButton.classList.add('deleteTodoButton');
    deleteTodoButton.textContent = "???";

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
        editProjectButton.textContent = '???';
        
        dropdown.append(editProjectButton);

        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.classList.add('deleteProjectButton');
        deleteProjectButton.textContent = '???';
        deleteProjectButton.setAttribute('data-key', `${project.getName()}`);

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
/* harmony import */ var _dom_functions_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-functions/DOM-refresh-TODOS-container */ "./src/dom-functions/DOM-refresh-TODOS-container.js");
/* harmony import */ var _dom_functions_DOM_show_projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-functions/DOM-show-projects.js */ "./src/dom-functions/DOM-show-projects.js");
/* harmony import */ var _dom_functions_DOM_create_edit_project_dropdown_contents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-functions/DOM-create-edit-project-dropdown-contents.js */ "./src/dom-functions/DOM-create-edit-project-dropdown-contents.js");
/* harmony import */ var _local_storage_menager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage-menager.js */ "./src/functions/local-storage-menager.js");






const addProjectDivEvent = () => {

    const deleteProjectButton = (deleteButton, index) => {
        deleteButton.addEventListener('click', (e) =>{

            _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeProject(index);
            (0,_dom_functions_DOM_show_projects_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
            e.stopPropagation();
            (0,_local_storage_menager_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
        });
    };

    const editProjectButton = (editButton, index, dropdown) => {
        
        editButton.addEventListener('click', (e) =>{
                        
            if (!!document.querySelector('.dropdownContent')) {
                const dropdownContent = document.querySelector('.dropdownContent');
                dropdownContent.remove();
                dropdown.append(...(0,_dom_functions_DOM_create_edit_project_dropdown_contents_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
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
                    (0,_dom_functions_DOM_show_projects_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
                    e.stopPropagation();
                    (0,_local_storage_menager_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
                    };
                });
            } else {
                dropdown.append(...(0,_dom_functions_DOM_create_edit_project_dropdown_contents_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
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
                    (0,_dom_functions_DOM_show_projects_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
                    e.stopPropagation();
                    (0,_local_storage_menager_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
                    };
                });
            };
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
            
            (0,_dom_functions_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_1__["default"])();
            e.stopPropagation();
        });

    };

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
                validationMessageDiv.classList.add('visible');
            } else if(projectNameInputText.length === 0) {
                validationMessageDiv.innerText = "Name must be at least 1 character long";
                validationMessageDiv.classList.add('visible');
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
/* harmony import */ var _dom_functions_DOM_addTodo_create_addBtn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-functions/DOM-addTodo-create-addBtn.js */ "./src/dom-functions/DOM-addTodo-create-addBtn.js");
/* harmony import */ var _add_todo_button_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-todo-button-event.js */ "./src/functions/add-todo-button-event.js");
/* harmony import */ var _create_new_todo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-new-todo.js */ "./src/functions/create-new-todo.js");
/* harmony import */ var _dom_functions_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-functions/DOM-refresh-TODOS-container */ "./src/dom-functions/DOM-refresh-TODOS-container.js");
/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/esm */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _local_storage_menager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-storage-menager.js */ "./src/functions/local-storage-menager.js");








const newTodoButtonsEvents = () => {
    const declineBtnFunction = (() => {
        const todoCreateCancelBtn = document.querySelector('.todoCreateCancelBtn');
        todoCreateCancelBtn.addEventListener('click', () => {
            (0,_dom_functions_DOM_addTodo_create_addBtn_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
            (0,_add_todo_button_event_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
                const today = (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(), 'yyyy-MM-dd');
                const selectedDate = date.value;
                if (selectedDate < today) return true;   
            }
            const checkTime = () => {
                const today = new Date();
                const todayFormated = (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(), 'yyyy-MM-dd');
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
                const createTodo = (0,_create_new_todo_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
                const projectName = document.querySelector('.target').firstChild.innerText;
                if (projectName === "HOME") {
                    _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].pushToHomeTodosArray(createTodo);

                    (0,_local_storage_menager_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
                    
                } else {
                    let projectsArray = _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray();
                    let projectIndex; 
                    for(let i = 0; i < projectsArray.length; i++ ) {
                        if (_project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray()[i].getName() === projectName) projectIndex = i;
                    }
                    const project = _project_menager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray()[projectIndex];
                    project.addToTodosArray(createTodo); 
                    (0,_local_storage_menager_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
                };
                (0,_dom_functions_DOM_addTodo_create_addBtn_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
                (0,_add_todo_button_event_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
                (0,_dom_functions_DOM_refresh_TODOS_container__WEBPACK_IMPORTED_MODULE_4__["default"])();
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
/* harmony import */ var _dom_functions_DOM_refresh_TODOS_container_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-functions/DOM-refresh-TODOS-container.js */ "./src/dom-functions/DOM-refresh-TODOS-container.js");


const showTodosFromHomeProject = (homeProjectDiv) => {
    homeProjectDiv.addEventListener('click', () => {
        document.querySelectorAll('.projectDiv').forEach((project) => {
            project.classList.remove('target');
        });
        homeProjectDiv.classList.add('target');

        (0,_dom_functions_DOM_refresh_TODOS_container_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
        
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUs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QUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Ozs7Ozs7Ozs7Ozs7QUNyQnlCO0FBQ3dDO0FBQ1o7QUFDQTtBQUNJO0FBQ21CO0FBQ0M7QUFDUDtBQUNqRDtBQUM0RDtBQUNEO0FBQ2hCOzs7O0FBSWhFLDRFQUFnQjtBQUNoQixzRUFBVTtBQUNWLHNFQUFVO0FBQ1Ysd0VBQVk7QUFDWixrRkFBcUI7QUFDckIsdUZBQWlCO0FBQ2pCLCtFQUFrQjtBQUNsQixxRkFBdUI7QUFDdkIsZ0ZBQVk7QUFDWixzRkFBcUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00tYWRkUHJvamVjdC1jcmVhdGUtYWRkQnRuLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFByb2plY3Qtc3dhcC1CdG4tdG8tRm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1hZGRUb2RvLWNyZWF0ZS1hZGRCdG4uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00tYWRkVG9kby1zd2FwLUJ0bi10by1Gb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLWJvZHkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00tY3JlYXRlLWVkaXQtcHJvamVjdC1kcm9wZG93bi1jb250ZW50cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1lZGl0VG9kby1zd2FwLXRvLUZvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00tZm9vdGVyLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLWhlYWQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00tcHJpbWUtZGl2cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1yZWZyZXNoLVRPRE9TLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1zaG93LVRPRE8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00tc2hvdy1tb3ZlLVRPRE8tZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00tc2hvdy1wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS13aW5kb3ctbGlzdGVuZXItcmVtb3ZlLWVkaXRQcm9qZWN0LWRyb3Bkb3duLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLXdpbmRvdy1saXN0ZW5lci1yZW1vdmUtbW92ZVRvZG8tZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00td2luZG93LWxpc3RlbmVyLXN3YXAtdG9kby1mb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9UT0RPLWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2FkZC1wcm9qZWN0LWJ1dHRvbi1ldmVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvYWRkLXByb2plY3QtZGl2cy1ldmVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvYWRkLXByb2plY3QtZm9ybS1idXR0b25zLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvYWRkLXRvZG8tYnV0dG9uLWV2ZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9hZGQtdG9kby1mb3JtLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvY2hlY2stdG9kby1vdXRkYXRlZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvY3JlYXRlLW5ldy10b2RvLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9lZGl0LXRvZG8tZm9ybS1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2dldC1kYXRhLWZyb20tbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvaG9tZURpdi1ldmVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvbG9jYWwtc3RvcmFnZS1tZW5hZ2VyLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9wcm9qZWN0LWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL3Byb2plY3QtbWVuYWdlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvdG9kb0RpdnNFdmVudHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9lbGVtZW50cy53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvdGV4dC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAndGV4dCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcblxcbjpyb290IHtcXG4gICAgLyogY29sb3JzICovXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2JhZTZmZDtcXG4gICAgLS10YXJnZXQtY29sb3I6ICMzYjgyZjY7XFxuICAgIC0tcG9yb2plY3RzLWRpdnMtYmFja2dyb3VuZDogIzM4YmRmODtcXG4gICAgLS1sb3ctcHJpb3JpdHktY29sb3I6ICNiYmY3ZDA7XFxuICAgIC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yOiAjZmVmMDhhO1xcbiAgICAtLWhpZ2gtcHJpb3JpdHktY29sb3I6ICNmZGE0YWY7XFxuICAgIC0tb3V0ZGF0ZWQtY29sb3I6ICNlNWU3ZWI7XFxuICAgIC0tc2VwYXJhdG9yLXJlZDogI2UxMWQ0ODtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxufVxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMmZyIDAuM2ZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuLmhlYWQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXG59XFxuLmxvZ28ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGZvbnQtc2l6ZTogNXZoO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcbi5wcm9qZWN0c0RpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAxOTYsIDE4Mik7ICovXFxuICAgIGJvcmRlci1yaWdodDogMXZoIHNvbGlkIHZhcigtLXNlcGFyYXRvci1yZWQpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAydmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxMGZyIDFmcjtcXG59XFxuLnByb2plY3RzRGl2SGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3ZoO1xcbn1cXG4uaG9tZVByb2plY3REaXYge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXG59XFxuLnByb2plY3RzQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAyMjMsIDE3Nik7ICovXFxufVxcbi50YXJnZXQge1xcbiAgICBib3JkZXI6IDAuNnZoIHNvbGlkIHZhcigtLXRhcmdldC1jb2xvcik7XFxufVxcbi5wcm9qZWN0RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9yb2plY3RzLWRpdnMtYmFja2dyb3VuZCk7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICBmb250LXNpemU6IDIuNXZoO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xdmg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICBtYXJnaW46IDF2aCAwIDF2aCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxufVxcbi5lZGl0VG9kb0J1dHRvbiwgLmRlbGV0ZVRvZG9CdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDMuNXZoO1xcbiAgICBoZWlnaHQ6IDMuNXZoO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG59XFxuLmRlbGV0ZVRvZG9CdXR0b24ge1xcbiAgICBtYXJnaW46IDAgMC41dmg7XFxufVxcbi5tb3ZlVG9kb0J1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG59XFxuLnByb2plY3RCdXR0b25zQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxdmg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZWRpdFByb2plY3RCdXR0b24ge1xcbiAgICB3aWR0aDogM3ZoO1xcbiAgICBoZWlnaHQ6IDIuOXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHg7IFxcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG59XFxuLmRlbGV0ZVByb2plY3RCdXR0b24ge1xcbiAgICB3aWR0aDogM3ZoO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4OyBcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxufVxcbi5kcm9wZG93biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3R0b206IDAuMnZoO1xcblxcbn1cXG4uZHJvcGRvd25Db250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gICAgd2lkdGg6IDI3dmg7XFxuICAgIGJveC1zaGFkb3c6IHJnYigzOCwgNTcsIDc3KSAwcHggMjBweCAzMHB4IC0xMHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIHBhZGRpbmc6IDF2aCAxdmggMS41dmggMXZoO1xcbiAgICBmb250LXNpemU6IDEuOXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBtYXJnaW4tdG9wOiAwLjN2aDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jZWRpdFByb2plY3ROYW1lIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjV2aDtcXG4gICAgbWFyZ2luLXRvcDogMC42dmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNHZoO1xcbn1cXG4jZWRpdFByb2plY3ROYW1lOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAwLjN2aCBzb2xpZCB2YXIoLS1oaWdoLXByaW9yaXR5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGNhcmV0LWNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5LWNvbG9yKTtcXG59XFxuLmNvbmZpcm1OZXdOYW1lQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjd2aDtcXG4gICAgZm9udC1zaXplOiAxLjd2aDtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uZWRpdFByb2plY3RFcnJvckRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMS41dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZXBhcmF0b3ItcmVkKTtcXG4gICAgcGFkZGluZzogMC40dmggMXZoO1xcbiAgICBtYXJnaW4tdG9wOiAxdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgYm9yZGVyOiAwLjR2aCBzb2xpZDtcXG59XFxuXFxuLmFkZFByb2plY3RDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LWNvbG9yKTtcXG4gICAgYm9yZGVyOiAwLjZ2aCBzb2xpZCB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAydmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZ2FwOiAwLjV2aDtcXG4gICAgZm9udC1zaXplOiAydmg7XFxufVxcblxcbi5hZGRQcm9qZWN0QnV0dG9uIHtcXG4gICAgd2lkdGg6IDI1dmg7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBib3JkZXI6IDAuNHZoIHNvbGlkIHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJ2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXG59XFxuXFxuI3Byb2plY3ROYW1lSW5wdXRUZXh0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgICB3aWR0aDogMjN2aDtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4jcHJvamVjdE5hbWVJbnB1dFRleHQ6Zm9jdXMge1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAwLjV2aCBzb2xpZCB2YXIoLS1oaWdoLXByaW9yaXR5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGNhcmV0LWNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5LWNvbG9yKTtcXG59XFxuLnByb2plY3ROYW1lQ29uZmlybUJ0biwgLnByb2plY3ROYW1lQ2FuY2VsQnRue1xcbiAgICBoZWlnaHQ6IDMuNXZoO1xcbiAgICB3aWR0aDogMy41dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDAuNHZoIHNvbGlkIHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMS43dmg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4udmFsaWRhdGlvbk1lc3NhZ2VEaXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4udmFsaWRhdGlvbk1lc3NhZ2VEaXYudmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtc2l6ZTogMS41dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZXBhcmF0b3ItcmVkKTtcXG4gICAgcGFkZGluZzogMC40dmggMXZoO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4dmg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxN3ZoO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGJvcmRlcjogMC40dmggc29saWQ7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi50b2Rvc0RpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjVmciAxMGZyIDFmcjtcXG4gICAgbWFyZ2luOiAwIDN2aCAwIDN2aDtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG59XFxuLnRvZG9EaXZIZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMuNXZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxufVxcbi50b2RvRGF0YUhlYWRlckRpdiB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmciAxZnIgNGZyIDFmcjtcXG4gICAgcGFkZGluZzogMC4yNSUgMC41JTtcXG4gICAgZm9udC1zaXplOiAyLjV2aDtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICBib3JkZXItYm90dG9tOiAxdmggc29saWQgdmFyKC0tc2VwYXJhdG9yLXJlZCk7XFxufVxcbi50b2RvRGF0YUhlYWRlckRpdiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYWxsVG9kb3NCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHktY29sb3IpO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC4zJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcXG4gICAgXFxufVxcbi50b2Rvc0NvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgbWFyZ2luLXRvcDogMS41dmg7XFxufVxcbi50b2RvRGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmciAxZnIgNGZyIDAuNWZyIDAuMjVmciAwLjI1ZnI7XFxuICAgIG1hcmdpbjogMSUgMDtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgcGFkZGluZy1yaWdodDogMXZoO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbn1cXG4uSGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xcbn1cXG4uTWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yKTtcXG59XFxuLkxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eS1jb2xvcik7XFxufVxcbi5tb3ZlVG9kb1Byb2plY3Rze1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLm1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9yb2plY3RzLWRpdnMtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJ2aDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbn1cXG4ubW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYge1xcbiAgICBwYWRkaW5nOiAxdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvcm9qZWN0cy1kaXZzLWJhY2tncm91bmQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAydmg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuM3ZoO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbn1cXG4ubW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYsIC5tb3ZlVG9kb0Ryb3Bkb3duSG9tZVByb2plY3Qge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdjpob3ZlciwgLm1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdDpob3ZlciB7XFxuICAgIGJvcmRlcjogMC40dmggc29saWQgdmFyKC0tc2VwYXJhdG9yLXJlZCk7XFxufVxcbi5tb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAydmg7XFxuICAgIG1pbi13aWR0aDogMzB2aDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1Ljl2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDAuNXZoIHNvbGlkIHdoaXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiByZ2IoMzgsIDU3LCA3NykgMHB4IDIwcHggMzBweCAtMTBweDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuLnRvZG9EaXYgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhcmdldFRvZG8ge1xcbiAgICBib3JkZXI6IDAuNnZoIHNvbGlkIHZhcigtLXRhcmdldC1jb2xvcik7XFxufVxcbi50b2RvT3B0aW9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC44ZnIgMmZyIDAuNWZyIDEuMmZyIDAuNWZyIDAuNzVmciAwLjc1ZnIgMC43NWZyIDAuNWZyIDNmciAwLjI1ZnIgMC4yNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxLjVmcjtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHktY29sb3IpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDAuNnZoIHNvbGlkIHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJ2aDtcXG4gICAgZ2FwOiAwLjV2aDtcXG59XFxuLnRvZG9PcHRpb25zQ29udGFpbmVyID4gaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT10ZXh0YXJlYV0sIGlucHV0W3R5cGU9ZGF0ZV0sIGlucHV0W3R5cGU9dGltZV0sIHNlbGVjdCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMCAxdmg7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi50b2RvT3B0aW9uc0NvbnRhaW5lciA+IGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9dGV4dGFyZWFdOmZvY3VzLCBpbnB1dFt0eXBlPWRhdGVdOmZvY3VzLCBpbnB1dFt0eXBlPXRpbWVdOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAwLjV2aCBzb2xpZCB2YXIoLS1oaWdoLXByaW9yaXR5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGNhcmV0LWNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5LWNvbG9yKTtcXG59XFxuLnRvZG9DcmVhdGVDb25maXJtQnRuLCAudG9kb0NyZWF0ZUNhbmNlbEJ0biwgLnRvZG9FZGl0Q29uZmlybUJ0biB7XFxuICAgIHdpZHRoOiAzLjV2aDtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDAuNHZoIHNvbGlkIHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMS42dmg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYWRkVE9ET0J1dHRvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMTM7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzOHZoO1xcbiAgICBoZWlnaHQ6IDZ2aDtcXG4gICAgYm9yZGVyOiAwLjV2aCBzb2xpZCB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tcHJpb3JpdHktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAydmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxufVxcbi5jb25maXJtQW5kRHJvcGRvd24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnRvZG9EYXRhRXJyb3Ige1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHJpZ2h0OiAwLjV2aDtcXG4gICAgYm90dG9tOiAzLjN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNlcGFyYXRvci1yZWQpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjN2aDtcXG4gICAgYm9yZGVyOiBzb2xpZDtcXG4gICAgcGFkZGluZzogMC41dmggM3ZoO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuXFxufVxcbi50b2RvT3B0aW9uc0NvbnRhaW5lciA+IGxhYmVsIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi50b2RvQ3JlYXRlRGl2SGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAxMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC41dmggc29saWQgdmFyKC0tc2VwYXJhdG9yLXJlZCk7XFxufVxcbi50b2RvRWRpdERpdkhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMTM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNXZoIHNvbGlkIHZhcigtLXNlcGFyYXRvci1yZWQpO1xcbn1cXG4uZm9vdGVyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDR2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiAwLjV2aDtcXG59XFxuLmdpdEljb24ge1xcbiAgICBoZWlnaHQ6IDN2aDtcXG59XFxuLm91dGRhdGVkVG9kb3tcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcbi5naXRJY29uIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cyBlYXNlLWluLW91dDtcXG59XFxuLmdpdEljb246aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tc2VwYXJhdG9yLXJlZCk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXFxuLnRvZG9DcmVhdGVDb25maXJtQnRuLCAudG9kb0NyZWF0ZUNhbmNlbEJ0biwgLnRvZG9FZGl0Q29uZmlybUJ0bixcXG4gLmFkZFByb2plY3RCdXR0b24sIC5hZGRUT0RPQnV0dG9uLCAubW92ZVRvZG9CdXR0b24sIC5lZGl0VG9kb0J1dHRvbixcXG4gLmRlbGV0ZVRvZG9CdXR0b24sIC5lZGl0UHJvamVjdEJ1dHRvbiwgLmRlbGV0ZVByb2plY3RCdXR0b24sIC5jb25maXJtTmV3TmFtZUJ1dHRvbiwgXFxuIC5wcm9qZWN0TmFtZUNvbmZpcm1CdG4sIC5wcm9qZWN0TmFtZUNhbmNlbEJ0biwgLmdpdEljb24ge1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gfVxcbiAudG9kb0NyZWF0ZUNvbmZpcm1CdG4sIC50b2RvQ3JlYXRlQ2FuY2VsQnRuLCAudG9kb0VkaXRDb25maXJtQnRuLFxcbi5tb3ZlVG9kb0J1dHRvbiwgLmVkaXRUb2RvQnV0dG9uLCAuZGVsZXRlVG9kb0J1dHRvbiwgLmVkaXRQcm9qZWN0QnV0dG9uLCBcXG4uZGVsZXRlUHJvamVjdEJ1dHRvbiwgLmNvbmZpcm1OZXdOYW1lQnV0dG9uLCAucHJvamVjdE5hbWVDb25maXJtQnRuLCAucHJvamVjdE5hbWVDYW5jZWxCdG4ge1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcbiB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsMkRBQWlEO0lBQ2pELGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxtQkFBbUI7SUFDbkIsMkRBQTZDO0lBQzdDLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixvQ0FBb0M7SUFDcEMsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDRFQUE0RTtBQUNoRjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1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QjtJQUMxQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsV0FBVztJQUNYLHVDQUF1QztJQUN2Qyw4Q0FBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLDRFQUE0RTtBQUNoRjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLDhDQUE4QztJQUM5QywyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQiwrQ0FBK0M7QUFDbkQ7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLCtDQUErQztBQUNuRDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixPQUFPO0lBQ1AsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixvQ0FBb0M7QUFDeEM7O0FBRUE7Ozs7SUFJSSxjQUFjO0NBQ2pCO0NBQ0E7OztJQUdHLDJDQUEyQztDQUM5Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9lbGVtZW50cy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICd0ZXh0JztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL3RleHQud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuOnJvb3Qge1xcbiAgICAvKiBjb2xvcnMgKi9cXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjYmFlNmZkO1xcbiAgICAtLXRhcmdldC1jb2xvcjogIzNiODJmNjtcXG4gICAgLS1wb3JvamVjdHMtZGl2cy1iYWNrZ3JvdW5kOiAjMzhiZGY4O1xcbiAgICAtLWxvdy1wcmlvcml0eS1jb2xvcjogI2JiZjdkMDtcXG4gICAgLS1tZWRpdW0tcHJpb3JpdHktY29sb3I6ICNmZWYwOGE7XFxuICAgIC0taGlnaC1wcmlvcml0eS1jb2xvcjogI2ZkYTRhZjtcXG4gICAgLS1vdXRkYXRlZC1jb2xvcjogI2U1ZTdlYjtcXG4gICAgLS1zZXBhcmF0b3ItcmVkOiAjZTExZDQ4O1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG59XFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEyZnIgMC4zZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG4uaGVhZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDExdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbn1cXG4ubG9nbyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgZm9udC1zaXplOiA1dmg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuLnByb2plY3RzRGl2IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDE5NiwgMTgyKTsgKi9cXG4gICAgYm9yZGVyLXJpZ2h0OiAxdmggc29saWQgdmFyKC0tc2VwYXJhdG9yLXJlZCk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJ2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDEwZnIgMWZyO1xcbn1cXG4ucHJvamVjdHNEaXZIZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zdmg7XFxufVxcbi5ob21lUHJvamVjdERpdiB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbn1cXG4ucHJvamVjdHNDb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDIyMywgMTc2KTsgKi9cXG59XFxuLnRhcmdldCB7XFxuICAgIGJvcmRlcjogMC42dmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG59XFxuLnByb2plY3REaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3JvamVjdHMtZGl2cy1iYWNrZ3JvdW5kKTtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIGZvbnQtc2l6ZTogMi41dmg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjF2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxdmg7XFxuICAgIG1hcmdpbjogMXZoIDAgMXZoIDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXG59XFxuLmVkaXRUb2RvQnV0dG9uLCAuZGVsZXRlVG9kb0J1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMy41dmg7XFxuICAgIGhlaWdodDogMy41dmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbn1cXG4uZGVsZXRlVG9kb0J1dHRvbiB7XFxuICAgIG1hcmdpbjogMCAwLjV2aDtcXG59XFxuLm1vdmVUb2RvQnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbn1cXG4ucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDF2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5lZGl0UHJvamVjdEJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzdmg7XFxuICAgIGhlaWdodDogMi45dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbn1cXG4uZGVsZXRlUHJvamVjdEJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzdmg7XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHg7IFxcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG59XFxuLmRyb3Bkb3duIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJvdHRvbTogMC4ydmg7XFxuXFxufVxcbi5kcm9wZG93bkNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgICB3aWR0aDogMjd2aDtcXG4gICAgYm94LXNoYWRvdzogcmdiKDM4LCA1NywgNzcpIDBweCAyMHB4IDMwcHggLTEwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgcGFkZGluZzogMXZoIDF2aCAxLjV2aCAxdmg7XFxuICAgIGZvbnQtc2l6ZTogMS45dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIG1hcmdpbi10b3A6IDAuM3ZoO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNlZGl0UHJvamVjdE5hbWUge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXZoO1xcbiAgICBtYXJnaW4tdG9wOiAwLjZ2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICAgIG1hcmdpbi1yaWdodDogMC40dmg7XFxufVxcbiNlZGl0UHJvamVjdE5hbWU6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDAuM3ZoIHNvbGlkIHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgY2FyZXQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xcbn1cXG4uY29uZmlybU5ld05hbWVCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3ZoO1xcbiAgICBmb250LXNpemU6IDEuN3ZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5lZGl0UHJvamVjdEVycm9yRGl2IHtcXG4gICAgZm9udC1zaXplOiAxLjV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNlcGFyYXRvci1yZWQpO1xcbiAgICBwYWRkaW5nOiAwLjR2aCAxdmg7XFxuICAgIG1hcmdpbi10b3A6IDF2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBib3JkZXI6IDAuNHZoIHNvbGlkO1xcbn1cXG5cXG4uYWRkUHJvamVjdENvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHktY29sb3IpO1xcbiAgICBib3JkZXI6IDAuNnZoIHNvbGlkIHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJ2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBnYXA6IDAuNXZoO1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG59XFxuXFxuLmFkZFByb2plY3RCdXR0b24ge1xcbiAgICB3aWR0aDogMjV2aDtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGJvcmRlcjogMC40dmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnZoO1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbn1cXG5cXG4jcHJvamVjdE5hbWVJbnB1dFRleHQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICAgIHdpZHRoOiAyM3ZoO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbiNwcm9qZWN0TmFtZUlucHV0VGV4dDpmb2N1cyB7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDAuNXZoIHNvbGlkIHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgY2FyZXQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xcbn1cXG4ucHJvamVjdE5hbWVDb25maXJtQnRuLCAucHJvamVjdE5hbWVDYW5jZWxCdG57XFxuICAgIGhlaWdodDogMy41dmg7XFxuICAgIHdpZHRoOiAzLjV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMC40dmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjd2aDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi52YWxpZGF0aW9uTWVzc2FnZURpdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi52YWxpZGF0aW9uTWVzc2FnZURpdi52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiAxLjV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNlcGFyYXRvci1yZWQpO1xcbiAgICBwYWRkaW5nOiAwLjR2aCAxdmg7XFxuICAgIG1hcmdpbi1ib3R0b206IDh2aDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE3dmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgYm9yZGVyOiAwLjR2aCBzb2xpZDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLnRvZG9zRGl2IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDAuNWZyIDEwZnIgMWZyO1xcbiAgICBtYXJnaW46IDAgM3ZoIDAgM3ZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbn1cXG4udG9kb0RpdkhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMy41dmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG59XFxuLnRvZG9EYXRhSGVhZGVyRGl2IHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyIDFmciA0ZnIgMWZyO1xcbiAgICBwYWRkaW5nOiAwLjI1JSAwLjUlO1xcbiAgICBmb250LXNpemU6IDIuNXZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIGJvcmRlci1ib3R0b206IDF2aCBzb2xpZCB2YXIoLS1zZXBhcmF0b3ItcmVkKTtcXG59XFxuLnRvZG9EYXRhSGVhZGVyRGl2ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hbGxUb2Rvc0J1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eS1jb2xvcik7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjMlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xcbiAgICBcXG59XFxuLnRvZG9zQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBtYXJnaW4tdG9wOiAxLjV2aDtcXG59XFxuLnRvZG9EaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyIDFmciA0ZnIgMC41ZnIgMC4yNWZyIDAuMjVmcjtcXG4gICAgbWFyZ2luOiAxJSAwO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdmg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxufVxcbi5IaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eS1jb2xvcik7XFxufVxcbi5NZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tcHJpb3JpdHktY29sb3IpO1xcbn1cXG4uTG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LWNvbG9yKTtcXG59XFxuLm1vdmVUb2RvUHJvamVjdHN7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4ubW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0IHtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3JvamVjdHMtZGl2cy1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnZoO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxdmg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxufVxcbi5tb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdiB7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9yb2plY3RzLWRpdnMtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJ2aDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS4zdmg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxufVxcbi5tb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdiwgLm1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2OmhvdmVyLCAubW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAwLjR2aCBzb2xpZCB2YXIoLS1zZXBhcmF0b3ItcmVkKTtcXG59XFxuLm1vdmVUb2RvUHJvamVjdHNEcm9wZG93bkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJ2aDtcXG4gICAgbWluLXdpZHRoOiAzMHZoO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUuOXZoO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMC41dmggc29saWQgd2hpdGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYigzOCwgNTcsIDc3KSAwcHggMjBweCAzMHB4IC0xMHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG4udG9kb0RpdiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFyZ2V0VG9kbyB7XFxuICAgIGJvcmRlcjogMC42dmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG59XFxuLnRvZG9PcHRpb25zQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjhmciAyZnIgMC41ZnIgMS4yZnIgMC41ZnIgMC43NWZyIDAuNzVmciAwLjc1ZnIgMC41ZnIgM2ZyIDAuMjVmciAwLjI1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEuNWZyO1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eS1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMC42dmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnZoO1xcbiAgICBnYXA6IDAuNXZoO1xcbn1cXG4udG9kb09wdGlvbnNDb250YWluZXIgPiBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXRleHRhcmVhXSwgaW5wdXRbdHlwZT1kYXRlXSwgaW5wdXRbdHlwZT10aW1lXSwgc2VsZWN0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwIDF2aDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLnRvZG9PcHRpb25zQ29udGFpbmVyID4gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT10ZXh0YXJlYV06Zm9jdXMsIGlucHV0W3R5cGU9ZGF0ZV06Zm9jdXMsIGlucHV0W3R5cGU9dGltZV06Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDAuNXZoIHNvbGlkIHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgY2FyZXQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xcbn1cXG4udG9kb0NyZWF0ZUNvbmZpcm1CdG4sIC50b2RvQ3JlYXRlQ2FuY2VsQnRuLCAudG9kb0VkaXRDb25maXJtQnRuIHtcXG4gICAgd2lkdGg6IDMuNXZoO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMC40dmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjZ2aDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5hZGRUT0RPQnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAxMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDM4dmg7XFxuICAgIGhlaWdodDogNnZoO1xcbiAgICBib3JkZXI6IDAuNXZoIHNvbGlkIHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJ2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXG59XFxuLmNvbmZpcm1BbmREcm9wZG93biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udG9kb0RhdGFFcnJvciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgcmlnaHQ6IDAuNXZoO1xcbiAgICBib3R0b206IDMuM3ZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tcHJpb3JpdHktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2VwYXJhdG9yLXJlZCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM3ZoO1xcbiAgICBib3JkZXI6IHNvbGlkO1xcbiAgICBwYWRkaW5nOiAwLjV2aCAzdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG5cXG59XFxuLnRvZG9PcHRpb25zQ29udGFpbmVyID4gbGFiZWwge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLnRvZG9DcmVhdGVEaXZIZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDEzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjV2aCBzb2xpZCB2YXIoLS1zZXBhcmF0b3ItcmVkKTtcXG59XFxuLnRvZG9FZGl0RGl2SGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAxMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC41dmggc29saWQgdmFyKC0tc2VwYXJhdG9yLXJlZCk7XFxufVxcbi5mb290ZXIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNHZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDAuNXZoO1xcbn1cXG4uZ2l0SWNvbiB7XFxuICAgIGhlaWdodDogM3ZoO1xcbn1cXG4ub3V0ZGF0ZWRUb2Rve1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuLmdpdEljb24ge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG4uZ2l0SWNvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1zZXBhcmF0b3ItcmVkKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cXG5cXG4udG9kb0NyZWF0ZUNvbmZpcm1CdG4sIC50b2RvQ3JlYXRlQ2FuY2VsQnRuLCAudG9kb0VkaXRDb25maXJtQnRuLFxcbiAuYWRkUHJvamVjdEJ1dHRvbiwgLmFkZFRPRE9CdXR0b24sIC5tb3ZlVG9kb0J1dHRvbiwgLmVkaXRUb2RvQnV0dG9uLFxcbiAuZGVsZXRlVG9kb0J1dHRvbiwgLmVkaXRQcm9qZWN0QnV0dG9uLCAuZGVsZXRlUHJvamVjdEJ1dHRvbiwgLmNvbmZpcm1OZXdOYW1lQnV0dG9uLCBcXG4gLnByb2plY3ROYW1lQ29uZmlybUJ0biwgLnByb2plY3ROYW1lQ2FuY2VsQnRuLCAuZ2l0SWNvbiB7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiB9XFxuIC50b2RvQ3JlYXRlQ29uZmlybUJ0biwgLnRvZG9DcmVhdGVDYW5jZWxCdG4sIC50b2RvRWRpdENvbmZpcm1CdG4sXFxuLm1vdmVUb2RvQnV0dG9uLCAuZWRpdFRvZG9CdXR0b24sIC5kZWxldGVUb2RvQnV0dG9uLCAuZWRpdFByb2plY3RCdXR0b24sIFxcbi5kZWxldGVQcm9qZWN0QnV0dG9uLCAuY29uZmlybU5ld05hbWVCdXR0b24sIC5wcm9qZWN0TmFtZUNvbmZpcm1CdG4sIC5wcm9qZWN0TmFtZUNhbmNlbEJ0biB7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxuIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcblxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcblxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcblxuXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH0gLy8gUGFkZGluZ1xuXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcblxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG5cbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcblxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcblxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG5cbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcblxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuXG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn1cblxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBzZWNvbmQgYXJndW1lbnQgaXMgbm93IHJlcXVpcmVkIGZvciB0aGUgc2FrZSBvZiBleHBsaWNpdG5lc3MuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSksIFwieXl5eS1NTS1kZCdUJ0hIOm1tOnNzLlNTU3h4eFwiKVxuICogICBgYGBcbiAqXG4gKiAtIE5ldyBmb3JtYXQgc3RyaW5nIEFQSSBmb3IgYGZvcm1hdGAgZnVuY3Rpb25cbiAqICAgd2hpY2ggaXMgYmFzZWQgb24gW1VuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNV0oaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZSkuXG4gKiAgIFNlZSBbdGhpcyBwb3N0XShodHRwczovL2Jsb2cuZGF0ZS1mbnMub3JnL3Bvc3QvdW5pY29kZS10b2tlbnMtaW4tZGF0ZS1mbnMtdjItc3JlYXR5a2k5MWpnKSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIC0gQ2hhcmFjdGVycyBhcmUgbm93IGVzY2FwZWQgdXNpbmcgc2luZ2xlIHF1b3RlIHN5bWJvbHMgKGAnYCkgaW5zdGVhZCBvZiBzcXVhcmUgYnJhY2tldHMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5cbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICByZXR1cm4gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cClbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIE5vdyBgaXNWYWxpZGAgZG9lc24ndCB0aHJvdyBhbiBleGNlcHRpb25cbiAqICAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICogICBJbnN0ZWFkLCBhcmd1bWVudCBpcyBjb252ZXJ0ZWQgYmVmb3JlaGFuZCB1c2luZyBgdG9EYXRlYC5cbiAqXG4gKiAgIEV4YW1wbGVzOlxuICpcbiAqICAgfCBgaXNWYWxpZGAgYXJndW1lbnQgICAgICAgIHwgQmVmb3JlIHYyLjAuMCB8IHYyLjAuMCBvbndhcmQgfFxuICogICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18XG4gKiAgIHwgYG5ldyBEYXRlKClgICAgICAgICAgICAgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJzIwMTYtMDEtMDEnKWAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnJylgICAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKDE0ODgzNzA4MzUwODEpYCB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoTmFOKWAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnMjAxNi0wMS0wMSdgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcnYCAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgMTQ4ODM3MDgzNTA4MWAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBOYU5gICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKlxuICogICBXZSBpbnRyb2R1Y2UgdGhpcyBjaGFuZ2UgdG8gbWFrZSAqZGF0ZS1mbnMqIGNvbnNpc3RlbnQgd2l0aCBFQ01BU2NyaXB0IGJlaGF2aW9yXG4gKiAgIHRoYXQgdHJ5IHRvIGNvZXJjZSBhcmd1bWVudHMgdG8gdGhlIGV4cGVjdGVkIHR5cGVcbiAqICAgKHdoaWNoIGlzIGFsc28gdGhlIGNhc2Ugd2l0aCBvdGhlciAqZGF0ZS1mbnMqIGZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiAocXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY3JlYXRlQWRkUHJvamVjdEJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RDb250YWluZXInKTtcbiAgICAgICAgYWRkUHJvamVjdENvbnRhaW5lci5pbm5lckhUTUw9IFwiXCI7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRQcm9qZWN0QnV0dG9uJyk7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gXCIrIEFERFwiO1xuICAgICAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZChhZGRQcm9qZWN0QnV0dG9uKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkZFByb2plY3RCdG4iLCJpbXBvcnQgYWRkRXZlbnRGdW5jdGlvbnRzVG9Gb3JtIGZyb20gJy4uL2Z1bmN0aW9ucy9hZGQtcHJvamVjdC1mb3JtLWJ1dHRvbnMtZXZlbnRzLmpzJztcblxuY29uc3Qgc3dhcENvbnRlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdENvbnRhaW5lcicpO1xuICAgIGFkZFByb2plY3RDb250YWluZXIuaW5uZXJIVE1MPSBcIlwiO1xuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0TmFtZUlucHV0VGV4dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgcHJvamVjdE5hbWVJbnB1dFRleHQuaWQgPSBcInByb2plY3ROYW1lSW5wdXRUZXh0XCI7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMYWJlbCcpO1xuICAgIHByb2plY3ROYW1lSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInByb2plY3ROYW1lSW5wdXRUZXh0XCIpO1xuICAgIHByb2plY3ROYW1lSW5wdXRMYWJlbC5pbm5lckhUTUwgPSBcIlByb2plY3QgbmFtZTpcIjtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lQ29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3ROYW1lQ29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdE5hbWVDb25maXJtQnRuXCIpO1xuICAgIHByb2plY3ROYW1lQ29uZmlybUJ0bi5pbm5lclRleHQ9IFwi4pyTXCI7XG4gICAgY29uc3QgcHJvamVjdE5hbWVDYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0TmFtZUNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdE5hbWVDYW5jZWxCdG5cIik7XG4gICAgcHJvamVjdE5hbWVDYW5jZWxCdG4uaW5uZXJUZXh0PSBcIuKclVwiO1xuXG4gICAgY29uc3QgdmFsaWRhdGlvbk1lc3NhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YWxpZGF0aW9uTWVzc2FnZURpdi5jbGFzc0xpc3QuYWRkKCd2YWxpZGF0aW9uTWVzc2FnZURpdicpO1xuXG5cbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZUlucHV0TGFiZWwsIHByb2plY3ROYW1lSW5wdXRUZXh0ICxwcm9qZWN0TmFtZUNvbmZpcm1CdG4sIHByb2plY3ROYW1lQ2FuY2VsQnRuLCB2YWxpZGF0aW9uTWVzc2FnZURpdik7XG5cbiAgICBhZGRFdmVudEZ1bmN0aW9udHNUb0Zvcm0oKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3dhcENvbnRlbnRzIiwiY29uc3QgY3JlYXRlQWRkVE9ET3RCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kb09wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb09wdGlvbnNDb250YWluZXInKTtcbiAgICB0b2RvT3B0aW9uc0NvbnRhaW5lci5pbm5lckhUTUw9IFwiXCI7XG4gICAgICAgIGNvbnN0IGFkZFRPRE9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkVE9ET0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRUT0RPQnV0dG9uJyk7XG4gICAgICAgIGFkZFRPRE9CdXR0b24uaW5uZXJUZXh0ID0gXCIrIEFERCBuZXcgVG9Eb1wiO1xuICAgICAgICB0b2RvT3B0aW9uc0NvbnRhaW5lci5hcHBlbmQoYWRkVE9ET0J1dHRvbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGRUT0RPdEJ0biIsImltcG9ydCBuZXdUb2RvQnV0dG9uc0V2ZW50cyBmcm9tICcuLi9mdW5jdGlvbnMvYWRkLXRvZG8tZm9ybS1ldmVudHMuanMnO1xuXG5jb25zdCBzd2FwdG9kb09wdGlvbnNDb250YWluZXJDb250ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvT3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvT3B0aW9uc0NvbnRhaW5lcicpO1xuICAgIHRvZG9PcHRpb25zQ29udGFpbmVyLmlubmVySFRNTD0gXCJcIjtcblxuICAgIGNvbnN0IHRvZG9OYW1lSW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvTmFtZUlucHV0VGV4dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdG9kb05hbWVJbnB1dFRleHQuaWQgPSBcInRvZG9OYW1lSW5wdXRUZXh0XCI7XG5cbiAgICBjb25zdCB0b2RvTmFtZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMYWJlbCcpO1xuICAgIHRvZG9OYW1lSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInRvZG9OYW1lSW5wdXRUZXh0XCIpO1xuICAgIHRvZG9OYW1lSW5wdXRMYWJlbC5pbm5lckhUTUwgPSBcIlRvRG8gbmFtZTpcIjtcblxuICAgIGNvbnN0IHRvZG9EYXRlUGlja2VyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMYWJlbCcpO1xuICAgIHRvZG9EYXRlUGlja2VyTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJ0b2RvRGF0ZVBpY2tlcklucHV0XCIpO1xuICAgIHRvZG9EYXRlUGlja2VyTGFiZWwuaW5uZXJIVE1MID0gXCJEYXRlOlwiO1xuXG4gICAgY29uc3QgdG9kb0RhdGVQaWNrZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0RhdGVQaWNrZXJJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgdG9kb0RhdGVQaWNrZXJJbnB1dC5pZCA9IFwidG9kb0RhdGVQaWNrZXJJbnB1dFwiO1xuXG4gICAgY29uc3QgdG9kb1RpbWVQaWNrZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xhYmVsJyk7XG4gICAgdG9kb1RpbWVQaWNrZXJMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInRvZG9UaW1lUGlja2VySW5wdXRcIik7XG4gICAgdG9kb1RpbWVQaWNrZXJMYWJlbC5pbm5lckhUTUwgPSBcIlRpbWU6XCI7XG5cbiAgICBjb25zdCB0b2RvVGltZVBpY2tlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvVGltZVBpY2tlcklucHV0LnR5cGUgPSBcInRpbWVcIjtcbiAgICB0b2RvVGltZVBpY2tlcklucHV0LmlkID0gXCJ0b2RvVGltZVBpY2tlcklucHV0XCI7XG5cbiAgICBjb25zdCB0b2RvUHJpb3JpdHlTZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xhYmVsJyk7XG4gICAgdG9kb1ByaW9yaXR5U2VsZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJ0b2RvUHJpb3JpdHlTZWxlY3RcIik7XG4gICAgdG9kb1ByaW9yaXR5U2VsZWN0TGFiZWwuaW5uZXJIVE1MID0gXCJQcmlvcml0eTpcIjtcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHRvZG9Qcmlvcml0eVNlbGVjdC5pZCA9IFwidG9kb1ByaW9yaXR5U2VsZWN0XCI7XG5cbiAgICBsZXQgcHJpb3JpdHlBcnJheSA9IFsnSGlnaCcsICdNZWRpdW0nLCAnTG93J107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW9yaXR5QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgcHJpb3JpdHkudmFsdWUgPSBwcmlvcml0eUFycmF5W2ldO1xuICAgICAgICBwcmlvcml0eS50ZXh0ID0gcHJpb3JpdHlBcnJheVtpXTtcbiAgICAgICAgdG9kb1ByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHRvZG9Ob3Rlc0lucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMYWJlbCcpO1xuICAgIHRvZG9Ob3Rlc0lucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJ0b2RvTm90ZXNJbnB1dExhYmVsXCIpO1xuICAgIHRvZG9Ob3Rlc0lucHV0TGFiZWwuaW5uZXJIVE1MID0gXCJOb3RlczpcIjtcblxuICAgIGNvbnN0IHRvZG9Ob3Rlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvTm90ZXNJbnB1dC50eXBlID0gXCJ0ZXh0YXJlYVwiO1xuICAgIHRvZG9Ob3Rlc0lucHV0LmlkID0gXCJ0b2RvTm90ZXNJbnB1dFwiO1xuXG4gICAgY29uc3QgY29uZmlybUFuZERyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uZmlybUFuZERyb3Bkb3duLmNsYXNzTGlzdC5hZGQoJ2NvbmZpcm1BbmREcm9wZG93bicpO1xuXG5cbiAgICBjb25zdCB0b2RvQ3JlYXRlQ29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZG9DcmVhdGVDb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvQ3JlYXRlQ29uZmlybUJ0blwiKTtcbiAgICB0b2RvQ3JlYXRlQ29uZmlybUJ0bi5pbm5lclRleHQ9IFwi4pyTXCI7XG5cbiAgICBjb25zdCB0b2RvQ3JlYXRlQ2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb0NyZWF0ZUNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwidG9kb0NyZWF0ZUNhbmNlbEJ0blwiKTtcbiAgICB0b2RvQ3JlYXRlQ2FuY2VsQnRuLmlubmVyVGV4dD0gXCLinJVcIjtcblxuICAgIGNvbnN0IHRvZG9DcmVhdGVEaXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvQ3JlYXRlRGl2SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9DcmVhdGVEaXZIZWFkZXInKTtcbiAgICB0b2RvQ3JlYXRlRGl2SGVhZGVyLnRleHRDb250ZW50ID0gJ0FERCBORVcgVE9ETyc7XG5cbiAgICBjb25maXJtQW5kRHJvcGRvd24uYXBwZW5kKHRvZG9DcmVhdGVDb25maXJtQnRuKTtcblxuICAgIHRvZG9PcHRpb25zQ29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgdG9kb0NyZWF0ZURpdkhlYWRlcixcbiAgICAgICAgdG9kb05hbWVJbnB1dExhYmVsLCBcbiAgICAgICAgdG9kb05hbWVJbnB1dFRleHQgLFxuICAgICAgICB0b2RvRGF0ZVBpY2tlckxhYmVsLFxuICAgICAgICB0b2RvRGF0ZVBpY2tlcklucHV0LFxuICAgICAgICB0b2RvVGltZVBpY2tlckxhYmVsLFxuICAgICAgICB0b2RvVGltZVBpY2tlcklucHV0LFxuICAgICAgICB0b2RvUHJpb3JpdHlTZWxlY3RMYWJlbCxcbiAgICAgICAgdG9kb1ByaW9yaXR5U2VsZWN0LFxuICAgICAgICB0b2RvTm90ZXNJbnB1dExhYmVsLFxuICAgICAgICB0b2RvTm90ZXNJbnB1dCxcbiAgICAgICAgY29uZmlybUFuZERyb3Bkb3duLFxuICAgICAgICB0b2RvQ3JlYXRlQ2FuY2VsQnRuXG4gICAgKTtcblxuICAgIG5ld1RvZG9CdXR0b25zRXZlbnRzKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzd2FwdG9kb09wdGlvbnNDb250YWluZXJDb250ZW50cyIsImltcG9ydCBzaG93VG9kb3NGcm9tSG9tZVByb2plY3QgZnJvbSBcIi4uL2Z1bmN0aW9ucy9ob21lRGl2LWV2ZW50LmpzXCI7XG5pbXBvcnQgc3dhcEVkaXRPckFkZFRvZG9Gb3JtVG9CdXR0b24gZnJvbSBcIi4vRE9NLXdpbmRvdy1saXN0ZW5lci1zd2FwLXRvZG8tZm9ybS5qc1wiO1xuaW1wb3J0IHJlbW92ZURyb3Bkb3duIGZyb20gXCIuL0RPTS13aW5kb3ctbGlzdGVuZXItcmVtb3ZlLWVkaXRQcm9qZWN0LWRyb3Bkb3duLmpzXCI7XG5pbXBvcnQgcmVtb3ZlTW92ZVRvZG9Ecm9wZG93biBmcm9tIFwiLi9ET00td2luZG93LWxpc3RlbmVyLXJlbW92ZS1tb3ZlVG9kby1kcm9wZG93bi5qc1wiO1xuXG5jb25zdCBjcmVhdGVCb2R5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keScpXG5cbiAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzRGl2Jyk7XG5cbiAgICBjb25zdCBob21lUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2hvbWVQcm9qZWN0RGl2JywgJ3RhcmdldCcpO1xuICAgXG4gICAgY29uc3QgaG9tZVByb2plY3REaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVQcm9qZWN0RGl2VGl0bGUuY2xhc3NMaXN0LmFkZCgnaG9tZVByb2plY3REaXZUaXRsZScpXG4gICAgaG9tZVByb2plY3REaXZUaXRsZS5pbm5lclRleHQgPSBcIkhPTUVcIjtcbiAgICBob21lUHJvamVjdERpdi5hcHBlbmRDaGlsZChob21lUHJvamVjdERpdlRpdGxlKTtcblxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNDb250YWluZXInKTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2plY3RDb250YWluZXInKTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2plY3RCdXR0b24nKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9IFwiKyBBRERcIjtcblxuICAgIGNvbnN0IHByb2plY3RzRGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwcm9qZWN0c0RpdkhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c0RpdkhlYWRlcicpO1xuICAgIHByb2plY3RzRGl2SGVhZGVyLmlubmVyVGV4dCA9IFwiUFJPSkVDVFM6XCI7XG5cbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZChhZGRQcm9qZWN0QnV0dG9uKTtcblxuICAgIHNob3dUb2Rvc0Zyb21Ib21lUHJvamVjdChob21lUHJvamVjdERpdilcblxuICAgIHByb2plY3RzRGl2LmFwcGVuZChwcm9qZWN0c0RpdkhlYWRlciwgaG9tZVByb2plY3REaXYsIHByb2plY3RzQ29udGFpbmVyLCBhZGRQcm9qZWN0Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRvZG9zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb3NEaXYuY2xhc3NMaXN0LmFkZCgndG9kb3NEaXYnKTtcblxuICAgIGNvbnN0IHRvZG9EaXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGl2SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9EaXZIZWFkZXInKTtcbiAgICB0b2RvRGl2SGVhZGVyLmlubmVyVGV4dCA9IFwiWU9VUiBQTEFOTkVEIFRBU0tTXCI7XG5cblxuICAgIGNvbnN0IHRvZG9EYXRhSGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0RhdGFIZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGFIZWFkZXJEaXYnKTtcblxuICAgIGNvbnN0IHRvZG9OYW1lRGF0YUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9OYW1lRGF0YUhlYWRlci5jbGFzc0xpc3QuYWRkKCd0b2RvTmFtZURhdGFIZWFkZXInKTtcbiAgICB0b2RvTmFtZURhdGFIZWFkZXIuaW5uZXJUZXh0ID0gXCJOQU1FXCI7XG5cbiAgICBjb25zdCB0b2RvRGF0ZURhdGFIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGF0ZURhdGFIZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGVEYXRhSGVhZGVyJyk7XG4gICAgdG9kb0RhdGVEYXRhSGVhZGVyLmlubmVyVGV4dCA9IFwiREFURVwiO1xuXG4gICAgY29uc3QgdG9kb1RpbWVEYXRhSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb1RpbWVEYXRhSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9UaW1lRGF0YUhlYWRlcicpO1xuICAgIHRvZG9UaW1lRGF0YUhlYWRlci5pbm5lclRleHQgPSBcIlRJTUVcIjtcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eURhdGFIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvUHJpb3JpdHlEYXRhSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9Qcmlvcml0eURhdGFIZWFkZXInKTtcbiAgICB0b2RvUHJpb3JpdHlEYXRhSGVhZGVyLmlubmVyVGV4dCA9IFwiUFJJT1JJVFlcIjtcblxuICAgIGNvbnN0IHRvZG9Ob3RlRGF0YUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Ob3RlRGF0YUhlYWRlci5jbGFzc0xpc3QuYWRkKCd0b2RvTm90ZURhdGFIZWFkZXInKTtcbiAgICB0b2RvTm90ZURhdGFIZWFkZXIuaW5uZXJUZXh0ID0gXCJOT1RFXCI7XG5cbiAgICBjb25zdCB0b2RvRnVuY3Rpb25zRGF0YUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9GdW5jdGlvbnNEYXRhSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9GdW5jdGlvbnNEYXRhSGVhZGVyJyk7XG4gICAgdG9kb0Z1bmN0aW9uc0RhdGFIZWFkZXIuaW5uZXJUZXh0ID0gXCJGVU5DVElPTlNcIjtcblxuICAgIHRvZG9EYXRhSGVhZGVyRGl2LmFwcGVuZCh0b2RvTmFtZURhdGFIZWFkZXIsIHRvZG9EYXRlRGF0YUhlYWRlciwgdG9kb1RpbWVEYXRhSGVhZGVyLCB0b2RvUHJpb3JpdHlEYXRhSGVhZGVyLCB0b2RvTm90ZURhdGFIZWFkZXIsIHRvZG9GdW5jdGlvbnNEYXRhSGVhZGVyKTtcblxuICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb3NDb250YWluZXInKTtcblxuICAgIGNvbnN0IHRvZG9PcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb09wdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb09wdGlvbnNDb250YWluZXInKTtcblxuXG5cbiAgICB0b2Rvc0Rpdi5hcHBlbmQodG9kb0RpdkhlYWRlciwgdG9kb0RhdGFIZWFkZXJEaXYsIHRvZG9zQ29udGFpbmVyLCB0b2RvT3B0aW9uc0NvbnRhaW5lcik7XG5cbiAgICBib2R5LmFwcGVuZChwcm9qZWN0c0RpdiwgdG9kb3NEaXYpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHN3YXBFZGl0T3JBZGRUb2RvRm9ybVRvQnV0dG9uKGUpO1xuICAgICAgICByZW1vdmVEcm9wZG93bihlKTtcbiAgICAgICAgcmVtb3ZlTW92ZVRvZG9Ecm9wZG93bihlKTtcbiAgICB9KTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQm9keSIsIlxuY29uc3QgY3JlYXRlRWRpdFByb2plY3REcm9wZG93bkNvbnRlbnRzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJvcGRvd25Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duQ29udGVudCcpO1xuXG4gICAgY29uc3QgZWRpdFByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVkaXRQcm9qZWN0TmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBlZGl0UHJvamVjdE5hbWVJbnB1dC5pZCA9IFwiZWRpdFByb2plY3ROYW1lXCI7XG5cbiAgICBjb25zdCBlZGl0UHJvamVjdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xhYmVsJyk7XG4gICAgZWRpdFByb2plY3ROYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJlZGl0UHJvamVjdE5hbWVcIik7XG4gICAgZWRpdFByb2plY3ROYW1lTGFiZWwuaW5uZXJIVE1MID0gXCJOZXcgcHJvamVjdCBuYW1lOlwiO1xuXG4gICAgY29uc3QgY29uZmlybU5ld05hbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25maXJtTmV3TmFtZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb25maXJtTmV3TmFtZUJ1dHRvbicpO1xuICAgIGNvbmZpcm1OZXdOYW1lQnV0dG9uLnRleHRDb250ZW50ID0gJ+Kckyc7XG5cbiAgICBkcm9wZG93bkNvbnRlbnQuYXBwZW5kKGVkaXRQcm9qZWN0TmFtZUxhYmVsLCBlZGl0UHJvamVjdE5hbWVJbnB1dCwgY29uZmlybU5ld05hbWVCdXR0b24pO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgICAgZHJvcGRvd25Db250ZW50XG4gICAgXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVkaXRQcm9qZWN0RHJvcGRvd25Db250ZW50cyIsImltcG9ydCBlZGl0VG9kb0J1dHRvbnNFdmVudHMgZnJvbSAnLi4vZnVuY3Rpb25zL2VkaXQtdG9kby1mb3JtLWV2ZW50cy5qcyc7XG5cbmNvbnN0IGVkaXRUb2RvQ29udGFpbmVyQ29udGVudHMgPSAoXG4gICAgcGFzc2VkVGFyZ2V0UHJvamVjdEluZGV4LFxuICAgIHBhc3NlZFRvZG9JbmRleCxcbiAgICB0b2RvTmFtZURpdkNvbnRlbnQsXG4gICAgdG9kb0RhdGVEaXZDb250ZW50LFxuICAgIHRvZG9UaW1lRGl2Q29udGVudCxcbiAgICB0b2RvTm90ZXNEaXZDb250ZW50XG4pID0+IHtcbiAgICBsZXQgIHRhcmdldFByb2plY3RJbmRleCA9IHBhc3NlZFRhcmdldFByb2plY3RJbmRleDtcbiAgICBsZXQgIHRvZG9JbmRleCA9IHBhc3NlZFRvZG9JbmRleDtcblxuICAgIGNvbnN0IHRvZG9PcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9PcHRpb25zQ29udGFpbmVyJyk7XG4gICAgdG9kb09wdGlvbnNDb250YWluZXIuaW5uZXJIVE1MPSBcIlwiO1xuXG4gICAgY29uc3QgdG9kb05hbWVJbnB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9OYW1lSW5wdXRUZXh0LnR5cGUgPSBcInRleHRcIjtcbiAgICB0b2RvTmFtZUlucHV0VGV4dC5pZCA9IFwidG9kb05hbWVJbnB1dFRleHRcIjtcbiAgICB0b2RvTmFtZUlucHV0VGV4dC52YWx1ZSA9IHRvZG9OYW1lRGl2Q29udGVudDtcblxuICAgIGNvbnN0IHRvZG9OYW1lSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xhYmVsJyk7XG4gICAgdG9kb05hbWVJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb05hbWVJbnB1dFRleHRcIik7XG4gICAgdG9kb05hbWVJbnB1dExhYmVsLmlubmVySFRNTCA9IFwiVG9EbyBuYW1lOlwiO1xuXG4gICAgY29uc3QgdG9kb0RhdGVQaWNrZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xhYmVsJyk7XG4gICAgdG9kb0RhdGVQaWNrZXJMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInRvZG9EYXRlUGlja2VySW5wdXRcIik7XG4gICAgdG9kb0RhdGVQaWNrZXJMYWJlbC5pbm5lckhUTUwgPSBcIkRhdGU6XCI7XG5cbiAgICBjb25zdCB0b2RvRGF0ZVBpY2tlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvRGF0ZVBpY2tlcklucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICB0b2RvRGF0ZVBpY2tlcklucHV0LmlkID0gXCJ0b2RvRGF0ZVBpY2tlcklucHV0XCI7XG4gICAgdG9kb0RhdGVQaWNrZXJJbnB1dC52YWx1ZSA9IHRvZG9EYXRlRGl2Q29udGVudDtcblxuXG4gICAgY29uc3QgdG9kb1RpbWVQaWNrZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xhYmVsJyk7XG4gICAgdG9kb1RpbWVQaWNrZXJMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInRvZG9UaW1lUGlja2VySW5wdXRcIik7XG4gICAgdG9kb1RpbWVQaWNrZXJMYWJlbC5pbm5lckhUTUwgPSBcIlRpbWU6XCI7XG5cbiAgICBjb25zdCB0b2RvVGltZVBpY2tlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvVGltZVBpY2tlcklucHV0LnR5cGUgPSBcInRpbWVcIjtcbiAgICB0b2RvVGltZVBpY2tlcklucHV0LmlkID0gXCJ0b2RvVGltZVBpY2tlcklucHV0XCI7XG4gICAgdG9kb1RpbWVQaWNrZXJJbnB1dC52YWx1ZSA9IHRvZG9UaW1lRGl2Q29udGVudDtcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eVNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvUHJpb3JpdHlTZWxlY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInRvZG9Qcmlvcml0eVNlbGVjdFwiKTtcbiAgICB0b2RvUHJpb3JpdHlTZWxlY3RMYWJlbC5pbm5lckhUTUwgPSBcIlByaW9yaXR5OlwiO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgdG9kb1ByaW9yaXR5U2VsZWN0LmlkID0gXCJ0b2RvUHJpb3JpdHlTZWxlY3RcIjtcblxuICAgIGxldCBwcmlvcml0eUFycmF5ID0gWydIaWdoJywgJ01lZGl1bScsICdMb3cnXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpb3JpdHlBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBwcmlvcml0eS52YWx1ZSA9IHByaW9yaXR5QXJyYXlbaV07XG4gICAgICAgIHByaW9yaXR5LnRleHQgPSBwcmlvcml0eUFycmF5W2ldO1xuICAgICAgICB0b2RvUHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgdG9kb05vdGVzSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xhYmVsJyk7XG4gICAgdG9kb05vdGVzSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInRvZG9Ob3Rlc0lucHV0TGFiZWxcIik7XG4gICAgdG9kb05vdGVzSW5wdXRMYWJlbC5pbm5lckhUTUwgPSBcIk5vdGVzOlwiO1xuXG4gICAgY29uc3QgdG9kb05vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9Ob3Rlc0lucHV0LnR5cGUgPSBcInRleHRhcmVhXCI7XG4gICAgdG9kb05vdGVzSW5wdXQuaWQgPSBcInRvZG9Ob3Rlc0lucHV0XCI7XG4gICAgdG9kb05vdGVzSW5wdXQudmFsdWUgPSB0b2RvTm90ZXNEaXZDb250ZW50O1xuXG4gICAgY29uc3QgdG9kb0VkaXRDb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb0VkaXRDb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvRWRpdENvbmZpcm1CdG5cIik7XG4gICAgdG9kb0VkaXRDb25maXJtQnRuLmlubmVyVGV4dD0gXCJWXCI7XG5cbiAgICBjb25zdCB0b2RvQ3JlYXRlQ2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb0NyZWF0ZUNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwidG9kb0NyZWF0ZUNhbmNlbEJ0blwiKTtcbiAgICB0b2RvQ3JlYXRlQ2FuY2VsQnRuLmlubmVyVGV4dD0gXCJYXCI7XG5cbiAgICBjb25zdCB0b2RvQ3JlYXRlRGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0NyZWF0ZURpdkhlYWRlci5jbGFzc0xpc3QuYWRkKCd0b2RvRWRpdERpdkhlYWRlcicpO1xuICAgIHRvZG9DcmVhdGVEaXZIZWFkZXIudGV4dENvbnRlbnQgPSAnRURJVCBUT0RPJztcblxuICAgIGNvbnN0IGNvbmZpcm1BbmREcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbmZpcm1BbmREcm9wZG93bi5jbGFzc0xpc3QuYWRkKCdjb25maXJtQW5kRHJvcGRvd24nKTtcblxuICAgIGNvbmZpcm1BbmREcm9wZG93bi5hcHBlbmQodG9kb0VkaXRDb25maXJtQnRuKTtcblxuICAgIHRvZG9PcHRpb25zQ29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgdG9kb0NyZWF0ZURpdkhlYWRlcixcbiAgICAgICAgdG9kb05hbWVJbnB1dExhYmVsLCBcbiAgICAgICAgdG9kb05hbWVJbnB1dFRleHQgLFxuICAgICAgICB0b2RvRGF0ZVBpY2tlckxhYmVsLFxuICAgICAgICB0b2RvRGF0ZVBpY2tlcklucHV0LFxuICAgICAgICB0b2RvVGltZVBpY2tlckxhYmVsLFxuICAgICAgICB0b2RvVGltZVBpY2tlcklucHV0LFxuICAgICAgICB0b2RvUHJpb3JpdHlTZWxlY3RMYWJlbCxcbiAgICAgICAgdG9kb1ByaW9yaXR5U2VsZWN0LFxuICAgICAgICB0b2RvTm90ZXNJbnB1dExhYmVsLFxuICAgICAgICB0b2RvTm90ZXNJbnB1dCxcbiAgICAgICAgY29uZmlybUFuZERyb3Bkb3duLFxuICAgICAgICB0b2RvQ3JlYXRlQ2FuY2VsQnRuXG4gICAgKTtcblxuICAgIGVkaXRUb2RvQnV0dG9uc0V2ZW50cyh0YXJnZXRQcm9qZWN0SW5kZXgsIHRvZG9JbmRleCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlZGl0VG9kb0NvbnRhaW5lckNvbnRlbnRzIiwiaW1wb3J0IGdpdExvZ28gZnJvbSAnLi4vaWNvbnMvZ2l0TG9nby5wbmcnO1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpXG4gICAgXG4gICAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVEaXYuY2xhc3NMaXN0LmFkZCgnbmFtZURpdicpO1xuICAgIG5hbWVEaXYuaW5uZXJUZXh0ID0gJ01hY2llaiBEYWJyb3dza2knXG5cbiAgICBjb25zdCBnaXRMb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2l0TG9nb0Rpdi5jbGFzc0xpc3QuYWRkKCdnaXRMb2dvRGl2Jyk7XG4gICAgY29uc3QgZ2l0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGdpdEljb24uY2xhc3NMaXN0LmFkZCgnZ2l0SWNvbicpXG4gICAgZ2l0SWNvbi5zcmMgPSBnaXRMb2dvO1xuXG4gICAgZ2l0TG9nb0Rpdi5hcHBlbmQoZ2l0SWNvbik7XG5cbiAgICBmb290ZXJEaXYuYXBwZW5kKG5hbWVEaXYsIGdpdExvZ29EaXYpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdpdEljb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vZ2l0aHViLmNvbS9NYWNpZWpEYWJyb3dza2lpJywgJ19ibGFuaycpLmZvY3VzKCk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXIiLCJjb25zdCBjcmVhdGVIZWFkID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICBsb2dvLmlubmVyVGV4dCA9IFwiVE9ETyAtIEFwcCB0byBub3QgZm9yZ2V0XCI7XG5cbiAgICBjb25zdCBub3RpZmljYXRpb25EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm90aWZpY2F0aW9uRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdub3RpZmljYXRpb25EYXRlRGl2Jyk7XG5cbiAgICBjb25zdCBub3RpZmljYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3RpZmljYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnbm90aWZpY2F0aW9uRGl2Jyk7XG4gICAgXG4gICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZGF0ZURpdicpO1xuXG4gICAgbm90aWZpY2F0aW9uRGF0ZURpdi5hcHBlbmQobm90aWZpY2F0aW9uRGl2LCBkYXRlRGl2KTtcblxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZCcpO1xuICAgIGhlYWQuYXBwZW5kKGxvZ28sIG5vdGlmaWNhdGlvbkRhdGVEaXYpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZCIsImNvbnN0IGhlYWRlckJvZHlGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmJvZHk7XG5cbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZC5jbGFzc0xpc3QuYWRkKCdoZWFkJyk7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5Jyk7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgICBtYWluRGl2LmFwcGVuZChoZWFkLCBib2R5LCBmb290ZXIpO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJCb2R5Rm9vdGVyIiwiaW1wb3J0IHByb2plY3RNZW5hZ2VyIGZyb20gXCIuLi9mdW5jdGlvbnMvcHJvamVjdC1tZW5hZ2VyLmpzXCI7XG5pbXBvcnQgZG9tU2hvd1RvZG8gZnJvbSBcIi4vRE9NLXNob3ctVE9ETy5qc1wiO1xuXG5jb25zdCByZWZyZXNoVG9kb3NDb250YWluZXIgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zQ29udGFpbmVyJykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBsZXQgdGFyZ2V0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0JykuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgbGV0IHRhcmdldFByb2plY3RJbmRleCA9IDA7XG4gICAgaWYodGFyZ2V0UHJvamVjdE5hbWUgPT09IFwiSE9NRVwiKSB7XG4gICAgICAgIHByb2plY3RNZW5hZ2VyLmdldEhvbWVUb2Rvc0FycmF5KCkuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGRvbVNob3dUb2RvKHRvZG8sIGluZGV4KTtcbiAgICAgICAgfSlcbiAgICB9ZWxzZSB7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KCkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSA9PT0gdGFyZ2V0UHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRQcm9qZWN0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KClbdGFyZ2V0UHJvamVjdEluZGV4XS5nZXRUb2Rvc0FycmF5KCkuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGRvbVNob3dUb2RvKHRvZG8sIGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVmcmVzaFRvZG9zQ29udGFpbmVyIiwiaW1wb3J0IHRvZG9EaXZzRXZlbnRzIGZyb20gXCIuLi9mdW5jdGlvbnMvdG9kb0RpdnNFdmVudHNcIjtcbmltcG9ydCBjaGVja1RvZG9PdXRkYXRlIGZyb20gXCIuLi9mdW5jdGlvbnMvY2hlY2stdG9kby1vdXRkYXRlZFwiO1xuXG5jb25zdCBkb21TaG93VG9kbyA9ICh0b2RvLCBpbmRleCkgPT4ge1xuICAgIGxldCB0b2RvSW5kZXggPSBpbmRleDtcbiAgICBjb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc0NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgndG9kb0RpdicsYCR7dG9kby5nZXRUb2RvUHJpb3JpdHkoKX1gICk7XG5cblxuICAgIGNvbnN0IHRvZG9OYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb05hbWVEaXYuY2xhc3NMaXN0LmFkZCgndG9kb05hbWVEaXYnKTtcbiAgICB0b2RvTmFtZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VG9kb05hbWUoKTtcblxuICAgIGNvbnN0IHRvZG9EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0RhdGVEaXYuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGVEaXYnKTtcbiAgICB0b2RvRGF0ZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VG9kb0RhdGUoKTtcblxuICAgIGNvbnN0IHRvZG9UaW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb1RpbWVEaXYuY2xhc3NMaXN0LmFkZCgndG9kb1RpbWVEaXYnKTtcbiAgICB0b2RvVGltZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZ2V0dG9kb1RpbWUoKTtcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Qcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvVGltZURpdicpO1xuICAgIHRvZG9Qcmlvcml0eURpdi50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VG9kb1ByaW9yaXR5KCk7XG5cbiAgICBjb25zdCB0b2RvTm90ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvTm90ZXNEaXYuY2xhc3NMaXN0LmFkZCgndG9kb1RpbWVEaXYnKTtcbiAgICB0b2RvTm90ZXNEaXYudGV4dENvbnRlbnQgPSB0b2RvLmdldFRvZG9Ob3RlcygpO1xuXG4gICAgY29uc3QgbW92ZVRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtb3ZlVG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdtb3ZlVG9kb0J1dHRvbicpO1xuICAgIG1vdmVUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gXCJNb3ZlXCI7XG5cbiAgICBjb25zdCBlZGl0VG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRUb2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRUb2RvQnV0dG9uJyk7XG4gICAgZWRpdFRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIuKcjlwiO1xuXG4gICAgY29uc3QgbW92ZVRvZG9Ecm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vdmVUb2RvRHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnbW92ZVRvZG9Ecm9wZG93bicpO1xuXG4gICAgbW92ZVRvZG9Ecm9wZG93bi5hcHBlbmQobW92ZVRvZG9CdXR0b24pO1xuXG4gICAgY29uc3QgZGVsZXRlVG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVRvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlVG9kb0J1dHRvbicpO1xuICAgIGRlbGV0ZVRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIuKclVwiO1xuXG4gICAgdG9kb0Rpdi5hcHBlbmQodG9kb05hbWVEaXYsIHRvZG9EYXRlRGl2LCB0b2RvVGltZURpdiwgdG9kb1ByaW9yaXR5RGl2LCB0b2RvTm90ZXNEaXYsIG1vdmVUb2RvRHJvcGRvd24sIGVkaXRUb2RvQnV0dG9uLCBkZWxldGVUb2RvQnV0dG9uKTtcbiAgICBjaGVja1RvZG9PdXRkYXRlKHRvZG9EYXRlRGl2LCB0b2RvRGl2LCB0b2RvVGltZURpdik7XG4gICAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG4gICAgdG9kb0RpdnNFdmVudHMoKS50b2RvVGFyZ2V0RXZlbnQodG9kb0Rpdik7XG4gICAgdG9kb0RpdnNFdmVudHMoKS50b2RvRGVsZXRlQnV0dG9uRXZlbnQoZGVsZXRlVG9kb0J1dHRvbiwgdG9kb0luZGV4KTtcbiAgICB0b2RvRGl2c0V2ZW50cygpLnRvZG9FZGl0QnV0dG9uRXZlbnQoZWRpdFRvZG9CdXR0b24sIHRvZG9JbmRleCwgdG9kby5nZXRUb2RvTmFtZSgpLCB0b2RvLmdldFRvZG9EYXRlKCksIHRvZG8uZ2V0dG9kb1RpbWUoKSwgdG9kby5nZXRUb2RvTm90ZXMoKSk7XG4gICAgdG9kb0RpdnNFdmVudHMoKS50b2RvTW92ZUJ1dHRvbkV2ZW50KG1vdmVUb2RvQnV0dG9uLCB0b2RvSW5kZXgsIHRvZG9EaXYpO1xuICAgIFxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb21TaG93VG9kbyIsImltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi4vZnVuY3Rpb25zL3Byb2plY3QtbWVuYWdlci5qc1wiO1xuaW1wb3J0IHJlZnJlc2hUb2Rvc0NvbnRhaW5lciBmcm9tIFwiLi9ET00tcmVmcmVzaC1UT0RPUy1jb250YWluZXJcIjtcbmltcG9ydCB1cGRhdGVMb2NhbFN0b3JhZ2UgZnJvbSBcIi4uL2Z1bmN0aW9ucy9sb2NhbC1zdG9yYWdlLW1lbmFnZXIuanNcIjtcblxuY29uc3QgbW92ZVRvZG9Ecm9wZG93bkNvbnRlbnRzID0gKHRhcmdldFByb2plY3ROYW1lLCB0b2RvSW5kZXgpID0+IHtcbiAgICBcbiAgICBjb25zdCBtb3ZlVG9kb0Ryb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldFRvZG8nKS5xdWVyeVNlbGVjdG9yKCcubW92ZVRvZG9Ecm9wZG93bicpO1xuICAgIGNvbnN0IG1vdmVUb2RvUHJvamVjdHNEcm9wZG93bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vdmVUb2RvUHJvamVjdHNEcm9wZG93bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXInKTtcbiAgICBjb25zdCBtb3ZlVG9kb1Byb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW92ZVRvZG9Qcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdtb3ZlVG9kb1Byb2plY3RzJyk7XG5cbiAgICBcbiAgICBpZiAodGFyZ2V0UHJvamVjdE5hbWUgPT09IFwiSE9NRVwiKSB7XG4gICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBtb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnbW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYnKTtcbiAgICAgICAgICAgIG1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgICAgICAgICBtb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHRvZG9Ub01vdmUgPSBwcm9qZWN0TWVuYWdlci5nZXRIb21lVG9kb3NBcnJheSgpLnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHByb2plY3QuYWRkVG9Ub2Rvc0FycmF5KHRvZG9Ub01vdmVbMF0pOyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICByZWZyZXNoVG9kb3NDb250YWluZXIoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1vdmVUb2RvUHJvamVjdHNEcm9wZG93bkNvbnRhaW5lci5hcHBlbmQobW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgbW92ZVRvZG9Qcm9qZWN0cy5hcHBlbmQobW92ZVRvZG9Qcm9qZWN0c0Ryb3Bkb3duQ29udGFpbmVyKTtcbiAgICAgICAgbW92ZVRvZG9Ecm9wZG93bi5hcHBlbmQobW92ZVRvZG9Qcm9qZWN0cyk7XG4gICAgfVxuICAgIGVsc2Uge1xuXG4gICAgICAgIGxldCB0cmFnZXRQcm9qZWN0SW5kZXggPSAwO1xuICAgICAgICBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KCkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRQcm9qZWN0TmFtZSA9PSBwcm9qZWN0LmdldE5hbWUoKSkge1xuICAgICAgICAgICAgICAgIHRyYWdldFByb2plY3RJbmRleCA9IGluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdtb3ZlVG9kb0Ryb3Bkb3duSG9tZVByb2plY3QnKTtcbiAgICAgICAgbW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0LnRleHRDb250ZW50ID0gJ0hPTUUnO1xuICAgICAgICBtb3ZlVG9kb0Ryb3Bkb3duSG9tZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0b2RvVG9Nb3ZlID0gcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpW3RyYWdldFByb2plY3RJbmRleF0uZ2V0VG9kb3NBcnJheSgpLnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwcm9qZWN0TWVuYWdlci5wdXNoVG9Ib21lVG9kb3NBcnJheSh0b2RvVG9Nb3ZlWzBdKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICByZWZyZXNoVG9kb3NDb250YWluZXIoKTtcbiAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIG1vdmVUb2RvUHJvamVjdHNEcm9wZG93bkNvbnRhaW5lci5hcHBlbmQobW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0KTtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGFyZ2V0UHJvamVjdE5hbWUgIT09IHByb2plY3QuZ2V0TmFtZSgpKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIG1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ21vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2Jyk7XG4gICAgICAgICAgICAgICAgbW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgICAgICAgICAgICAgICBtb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1RvTW92ZSA9IHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKVt0cmFnZXRQcm9qZWN0SW5kZXhdLmdldFRvZG9zQXJyYXkoKS5zcGxpY2UodG9kb0luZGV4LCAxKTtcblxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmFkZFRvVG9kb3NBcnJheSh0b2RvVG9Nb3ZlWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaFRvZG9zQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBtb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXIuYXBwZW5kKG1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBtb3ZlVG9kb1Byb2plY3RzLmFwcGVuZChtb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXIpO1xuICAgICAgICBtb3ZlVG9kb0Ryb3Bkb3duLmFwcGVuZChtb3ZlVG9kb1Byb2plY3RzKTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbW92ZVRvZG9Ecm9wZG93bkNvbnRlbnRzIiwiaW1wb3J0IHByb2plY3RNZW5hZ2VyIGZyb20gXCIuLi9mdW5jdGlvbnMvcHJvamVjdC1tZW5hZ2VyLmpzXCI7XG5pbXBvcnQgYWRkUHJvamVjdERpdkV2ZW50IGZyb20gXCIuLi9mdW5jdGlvbnMvYWRkLXByb2plY3QtZGl2cy1ldmVudFwiO1xuaW1wb3J0IHJlZnJlc2hUb2Rvc0NvbnRhaW5lciBmcm9tIFwiLi9ET00tcmVmcmVzaC1UT0RPUy1jb250YWluZXJcIjtcblxubGV0IHNob3dQcm9qZWN0cyA9ICgpID0+IHsgICBcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c0NvbnRhaW5lcicpLmlubmVySFRNTD0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZVByb2plY3REaXYnKS5jbGFzc0xpc3QuYWRkKCd0YXJnZXQnKTtcbiAgICByZWZyZXNoVG9kb3NDb250YWluZXIoKTtcbiAgICBcbiAgICBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KCkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdERpdicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWUnKTtcbiAgICAgICAgcHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gYCR7cHJvamVjdC5nZXROYW1lKCl9YDtcbiAgICBcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24nKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRQcm9qZWN0QnV0dG9uJyk7XG4gICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ+Kcjic7XG4gICAgICAgIFxuICAgICAgICBkcm9wZG93bi5hcHBlbmQoZWRpdFByb2plY3RCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVQcm9qZWN0QnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAn4pyVJztcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgYCR7cHJvamVjdC5nZXROYW1lKCl9YCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdEJ1dHRvbnNDb250YWluZXInKTtcblxuICAgICAgICBwcm9qZWN0QnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoZHJvcGRvd24sIGRlbGV0ZVByb2plY3RCdXR0b24pO1xuXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kKHByb2plY3ROYW1lLCBwcm9qZWN0QnV0dG9uc0NvbnRhaW5lcik7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzQ29udGFpbmVyJykuYXBwZW5kKHByb2plY3REaXYpO1xuICAgICAgICBcbiAgICAgICAgYWRkUHJvamVjdERpdkV2ZW50KCkuZGVsZXRlUHJvamVjdEJ1dHRvbihkZWxldGVQcm9qZWN0QnV0dG9uLCBpbmRleCk7XG4gICAgICAgIGFkZFByb2plY3REaXZFdmVudCgpLmVkaXRQcm9qZWN0QnV0dG9uKGVkaXRQcm9qZWN0QnV0dG9uLCBpbmRleCwgZHJvcGRvd24pO1xuICAgICAgICBhZGRQcm9qZWN0RGl2RXZlbnQoKS5wcm9qZWN0RGl2RXZlbnQocHJvamVjdERpdik7XG4gICAgfSk7XG5cbn07IFxuXG5leHBvcnQgZGVmYXVsdCBzaG93UHJvamVjdHMiLCJpbXBvcnQgc2hvd1Byb2plY3RzIGZyb20gXCIuL0RPTS1zaG93LXByb2plY3RzLmpzXCI7XG5cbmZ1bmN0aW9uIHJlbW92ZURyb3Bkb3duKGV2ZW50KSB7XG4gICAgICAgIFxuICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bkNvbnRlbnQnKSl7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoYC5lZGl0UHJvamVjdEJ1dHRvbmApKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmRyb3Bkb3duQ29udGVudCcpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnI2VkaXRQcm9qZWN0TmFtZScpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnbGFiZWwnKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5jb25maXJtTmV3TmFtZUJ1dHRvbicpKVxuICAgICAgICAgICApIHsgIFxuICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duQ29udGVudCcpO1xuICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgc2hvd1Byb2plY3RzKCk7XG4gICAgICAgICAgICAgfTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlRHJvcGRvd24iLCJmdW5jdGlvbiByZW1vdmVNb3ZlVG9kb0Ryb3Bkb3duKGV2ZW50KSB7XG4gICAgICAgIFxuICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZlVG9kb1Byb2plY3RzJykpe1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKGAubW92ZVRvZG9Qcm9qZWN0c0Ryb3Bkb3duQ29udGFpbmVyYCkpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcubW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0JykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcubW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYnKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5tb3ZlVG9kb0J1dHRvbicpKVxuICAgICAgICAgICApIHsgIFxuICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvZG9Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZlVG9kb1Byb2plY3RzJyk7XG4gICAgICAgICAgICAgICBtb3ZlVG9kb1Byb2plY3RzLnJlbW92ZSgpO1xuICAgICAgICAgICAgIH07XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZU1vdmVUb2RvRHJvcGRvd24iLCJpbXBvcnQgY3JlYXRlQWRkVE9ET3RCdG4gZnJvbSBcIi4vRE9NLWFkZFRvZG8tY3JlYXRlLWFkZEJ0bi5qc1wiO1xuaW1wb3J0IGFkZFRPRE9CdXR0b25FdmVudCBmcm9tIFwiLi4vZnVuY3Rpb25zL2FkZC10b2RvLWJ1dHRvbi1ldmVudC5qc1wiO1xuXG5mdW5jdGlvbiBzd2FwRWRpdE9yQWRkVG9kb0Zvcm1Ub0J1dHRvbihldmVudCkge1xuICAgICAgICBcbiAgICBpZiAoKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmFkZFRPRE9CdXR0b24nKSAmJiAhZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5lZGl0VG9kb0J1dHRvbicpKSAmJiAoKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9DcmVhdGVEaXZIZWFkZXInKSkgfHwgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9FZGl0RGl2SGVhZGVyJykpKSl7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy50b2RvT3B0aW9uc0NvbnRhaW5lcicpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLnRvZG9DcmVhdGVEaXZIZWFkZXInKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJ2xhYmVsJykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcjdG9kb05hbWVJbnB1dFRleHQnKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJyN0b2RvRGF0ZVBpY2tlcklucHV0JykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcjdG9kb1RpbWVQaWNrZXJJbnB1dCcpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnI3RvZG9Qcmlvcml0eVNlbGVjdCcpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnb3B0aW9uJykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcjdG9kb05vdGVzSW5wdXQnKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy50b2RvQ3JlYXRlQ29uZmlybUJ0bicpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLnRvZG9DcmVhdGVDYW5jZWxCdG4nKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy50b2RvRWRpdERpdkhlYWRlcicpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLnRvZG9FZGl0Q29uZmlybUJ0bicpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLnRvZG9EYXRhRXJyb3InKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5hZGRUT0RPQnV0dG9uJykpXG5cbiAgICAgICAgICAgKSB7IFxuICAgICAgICAgICAgICAgIGNyZWF0ZUFkZFRPRE90QnRuKCk7XG4gICAgICAgICAgICAgICAgYWRkVE9ET0J1dHRvbkV2ZW50KCk7XG4gICAgICAgICAgICAgfTsgXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN3YXBFZGl0T3JBZGRUb2RvRm9ybVRvQnV0dG9uXG4iLCJjb25zdCB0b2RvVGFzayA9IChuYW1lLCBkYXRlLCB0aW1lLCBwcmlvcml0eSwgbm90ZXMpID0+IHtcbiAgICBsZXQgdG9kb05hbWUgPSBuYW1lO1xuICAgIGxldCB0b2RvRGF0ZSA9IGRhdGU7XG4gICAgbGV0IHRvZG9UaW1lID0gdGltZTtcbiAgICBsZXQgdG9kb1ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgbGV0IHRvZG9Ob3RlcyA9IG5vdGVzO1xuICAgIGxldCB0b2RvU3RhdHVzID0gZmFsc2U7XG4gICAgXG4gICAgLy8gR2V0IGZ1bmN0aW9ucyByZXR1cm5pbmcgdmFyaWFibGUgY29udGVudHNcbiAgICBjb25zdCBnZXRUb2RvTmFtZSA9ICgpID0+IHRvZG9OYW1lO1xuICAgIGNvbnN0IGdldFRvZG9EYXRlID0gKCkgPT4gdG9kb0RhdGU7XG4gICAgY29uc3QgZ2V0dG9kb1RpbWUgPSAoKSA9PiB0b2RvVGltZTtcbiAgICBjb25zdCBnZXRUb2RvUHJpb3JpdHkgPSAoKSA9PiB0b2RvUHJpb3JpdHk7XG4gICAgY29uc3QgZ2V0VG9kb05vdGVzID0gKCkgPT4gdG9kb05vdGVzO1xuICAgIGNvbnN0IGdldFRvZG9TdGF0dXMgPSAoKSA9PiB0b2RvU3RhdHVzO1xuICAgIFxuICAgIC8vIFNldCBmdW5jdGlvbnMgdG8gZWRpdCB2YXJpYWJsZSBjb250ZW50c1xuICAgIGNvbnN0IHNldFRvZG9OYW1lID0gKHN0cmluZykgPT4ge1xuICAgICAgICB0b2RvTmFtZSA9IHN0cmluZ1xuICAgIH07XG4gICAgY29uc3Qgc2V0VG9kb0RhdGUgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIHRvZG9EYXRlID0gc3RyaW5nXG4gICAgfTtcbiAgICBjb25zdCBzZXRUb2RvVGltZSA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgdG9kb1RpbWUgPSBzdHJpbmc7XG4gICAgfTtcbiAgICBjb25zdCBzZXRUb2RvUHJpb3JpdHkgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIHRvZG9Qcmlvcml0eSA9IHN0cmluZztcbiAgICB9O1xuICAgIGNvbnN0IHNldFRvZG9Ob3RlcyA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgdG9kb05vdGVzID0gc3RyaW5nO1xuICAgIH07XG4gICAgY29uc3Qgc2V0VG9kb1N0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRvZG9TdGF0dXMgPyB0b2RvU3RhdHVzID0gZmFsc2UgOiB0b2RvU3RhdHVzID0gdHJ1ZTtcbiAgICB9ICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFRvZG9OYW1lLFxuICAgICAgICBnZXRUb2RvRGF0ZSxcbiAgICAgICAgZ2V0dG9kb1RpbWUsXG4gICAgICAgIGdldFRvZG9Qcmlvcml0eSxcbiAgICAgICAgZ2V0VG9kb05vdGVzLFxuICAgICAgICBnZXRUb2RvU3RhdHVzLFxuICAgICAgICBzZXRUb2RvTmFtZSxcbiAgICAgICAgc2V0VG9kb0RhdGUsXG4gICAgICAgIHNldFRvZG9UaW1lLFxuICAgICAgICBzZXRUb2RvUHJpb3JpdHksXG4gICAgICAgIHNldFRvZG9Ob3RlcyxcbiAgICAgICAgc2V0VG9kb1N0YXR1cyxcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgdG9kb1Rhc2s7IiwiaW1wb3J0IHN3YXBDb250ZW50cyBmcm9tICcuLi9kb20tZnVuY3Rpb25zL0RPTS1hZGRQcm9qZWN0LXN3YXAtQnRuLXRvLUZvcm0uanMnO1xuXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uRXZlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0QnV0dG9uJyk7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3YXBDb250ZW50cyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRQcm9qZWN0QnV0dG9uRXZlbnQiLCJpbXBvcnQgcHJvamVjdE1lbmFnZXIgZnJvbSBcIi4vcHJvamVjdC1tZW5hZ2VyLmpzXCI7XG5pbXBvcnQgcmVmcmVzaFRvZG9zQ29udGFpbmVyIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1yZWZyZXNoLVRPRE9TLWNvbnRhaW5lclwiO1xuaW1wb3J0IHNob3dQcm9qZWN0cyBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tc2hvdy1wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IGNyZWF0ZUVkaXRQcm9qZWN0RHJvcGRvd25Db250ZW50cyBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tY3JlYXRlLWVkaXQtcHJvamVjdC1kcm9wZG93bi1jb250ZW50cy5qc1wiO1xuaW1wb3J0IHVwZGF0ZUxvY2FsU3RvcmFnZSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlLW1lbmFnZXIuanNcIjtcblxuY29uc3QgYWRkUHJvamVjdERpdkV2ZW50ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IChkZWxldGVCdXR0b24sIGluZGV4KSA9PiB7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcblxuICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIucmVtb3ZlUHJvamVjdChpbmRleCk7XG4gICAgICAgICAgICBzaG93UHJvamVjdHMoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVkaXRQcm9qZWN0QnV0dG9uID0gKGVkaXRCdXR0b24sIGluZGV4LCBkcm9wZG93bikgPT4ge1xuICAgICAgICBcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duQ29udGVudCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duQ29udGVudCcpO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBkcm9wZG93bi5hcHBlbmQoLi4uY3JlYXRlRWRpdFByb2plY3REcm9wZG93bkNvbnRlbnRzKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRQcm9qZWN0TmFtZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1OZXdOYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm1OZXdOYW1lQnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgY29uZmlybU5ld05hbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lc0FycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZXNBcnJheS5wdXNoKHByb2plY3QuZ2V0TmFtZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZXNBcnJheS5pbmNsdWRlcyhlZGl0UHJvamVjdE5hbWVJbnB1dC52YWx1ZSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByb2plY3RFcnJvckRpdicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duQ29udGVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0RXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0UHJvamVjdEVycm9yRGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXRQcm9qZWN0RXJyb3JEaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0UHJvamVjdEVycm9yRGl2LmlubmVyVGV4dCA9IFwiVGhpcyBuYW1lIGV4aXN0IVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5hcHBlbmQoZWRpdFByb2plY3RFcnJvckRpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKVtpbmRleF0uZWRpdFByb2plY3ROYW1lKGVkaXRQcm9qZWN0TmFtZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1Byb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkcm9wZG93bi5hcHBlbmQoLi4uY3JlYXRlRWRpdFByb2plY3REcm9wZG93bkNvbnRlbnRzKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRQcm9qZWN0TmFtZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1OZXdOYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm1OZXdOYW1lQnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgY29uZmlybU5ld05hbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lc0FycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZXNBcnJheS5wdXNoKHByb2plY3QuZ2V0TmFtZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZXNBcnJheS5pbmNsdWRlcyhlZGl0UHJvamVjdE5hbWVJbnB1dC52YWx1ZSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByb2plY3RFcnJvckRpdicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duQ29udGVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0RXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0UHJvamVjdEVycm9yRGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXRQcm9qZWN0RXJyb3JEaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0UHJvamVjdEVycm9yRGl2LmlubmVyVGV4dCA9IFwiVGhpcyBuYW1lIGV4aXN0IVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5hcHBlbmQoZWRpdFByb2plY3RFcnJvckRpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByb2plY3RFcnJvckRpdicpLmlubmVyVGV4dCA9PT0gXCJOZXcgbmFtZSBtaW4uIDEgY2hhclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRQcm9qZWN0RXJyb3JEaXYnKS5pbm5lclRleHQgPSBcIlRoaXMgbmFtZSBleGlzdCFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGVkaXRQcm9qZWN0TmFtZUlucHV0LnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByb2plY3RFcnJvckRpdicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duQ29udGVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0RXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0UHJvamVjdEVycm9yRGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXRQcm9qZWN0RXJyb3JEaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0UHJvamVjdEVycm9yRGl2LmlubmVyVGV4dCA9IFwiTmV3IG5hbWUgbWluLiAxIGNoYXJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuYXBwZW5kKGVkaXRQcm9qZWN0RXJyb3JEaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRQcm9qZWN0RXJyb3JEaXYnKS5pbm5lclRleHQgPT09IFwiVGhpcyBuYW1lIGV4aXN0IVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRQcm9qZWN0RXJyb3JEaXYnKS5pbm5lclRleHQgPSBcIk5ldyBuYW1lIG1pbi4gMSBjaGFyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKVtpbmRleF0uZWRpdFByb2plY3ROYW1lKGVkaXRQcm9qZWN0TmFtZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1Byb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0RGl2RXZlbnQgPSAocHJvamVjdERpdiwpID0+IHtcbiAgICAgICAgY29uc3QgaG9tZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZVByb2plY3REaXYnKTtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNBcnJheSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdERpdicpXTtcbiAgICAgICAgICAgIHByb2plY3RzQXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgndGFyZ2V0Jyk7IFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBob21lUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCd0YXJnZXQnKTtcbiAgICAgICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgndGFyZ2V0Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWRpdFByb2plY3RCdXR0b24sXG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24sXG4gICAgICAgIHByb2plY3REaXZFdmVudCxcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgYWRkUHJvamVjdERpdkV2ZW50XG5cbiIsImltcG9ydCBhZGRQcm9qZWN0QnV0dG9uRXZlbnQgZnJvbSBcIi4vYWRkLXByb2plY3QtYnV0dG9uLWV2ZW50LmpzXCI7XG5pbXBvcnQgY3JlYXRlQWRkUHJvamVjdEJ0biBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tYWRkUHJvamVjdC1jcmVhdGUtYWRkQnRuLmpzXCI7XG5pbXBvcnQgcHJvamVjdE1lbmFnZXIgZnJvbSBcIi4vcHJvamVjdC1tZW5hZ2VyLmpzXCI7XG5pbXBvcnQgcHJvamVjdENyZWF0b3IgZnJvbSBcIi4vcHJvamVjdC1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgc2hvd1Byb2plY3RzIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1zaG93LXByb2plY3RzLmpzXCI7XG5pbXBvcnQgdXBkYXRlTG9jYWxTdG9yYWdlIGZyb20gXCIuL2xvY2FsLXN0b3JhZ2UtbWVuYWdlci5qc1wiO1xuXG5jb25zdCBhZGRFdmVudEZ1bmN0aW9udHNUb0Zvcm0gPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgZGVjbGluZUJ0bkZ1bmN0aW9uID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdE5hbWVDYW5jZWxCdG4nKTtcbiAgICAgICAgcHJvamVjdE5hbWVDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjcmVhdGVBZGRQcm9qZWN0QnRuKCk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0QnV0dG9uRXZlbnQoKTtcbiAgICAgICAgfSlcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgY29uZmlybUJ0biA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lQ29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TmFtZUNvbmZpcm1CdG4nKTtcbiAgICAgICAgcHJvamVjdE5hbWVDb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1lc3NhZ2VEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmFsaWRhdGlvbk1lc3NhZ2VEaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lSW5wdXRUZXh0JykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdENyZWF0b3IocHJvamVjdE5hbWVJbnB1dFRleHQpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWVzQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWVzQXJyYXkucHVzaChwcm9qZWN0LmdldE5hbWUoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZXNBcnJheS5pbmNsdWRlcyhwcm9qZWN0TmFtZUlucHV0VGV4dCkpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZURpdi5pbm5lclRleHQgPSBcIlRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cyFcIjtcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZURpdi5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYocHJvamVjdE5hbWVJbnB1dFRleHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2VEaXYuaW5uZXJUZXh0ID0gXCJOYW1lIG11c3QgYmUgYXQgbGVhc3QgMSBjaGFyYWN0ZXIgbG9uZ1wiO1xuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIucHVzaFRvUHJvamVjdHNBcnJheShwcm9qZWN0KTsgICAgICBcbiAgICAgICAgICAgIGNyZWF0ZUFkZFByb2plY3RCdG4oKTtcbiAgICAgICAgICAgIGFkZFByb2plY3RCdXR0b25FdmVudCgpO1xuICAgICAgICAgICAgc2hvd1Byb2plY3RzKCk7XG4gICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pKCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgYWRkRXZlbnRGdW5jdGlvbnRzVG9Gb3JtIiwiaW1wb3J0IHN3YXB0b2RvT3B0aW9uc0NvbnRhaW5lckNvbnRlbnRzIGZyb20gJy4uL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFRvZG8tc3dhcC1CdG4tdG8tRm9ybS5qcyc7XG5cbmNvbnN0IGFkZFRPRE9CdXR0b25FdmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRUT0RPQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRPRE9CdXR0b24nKTtcbiAgICBhZGRUT0RPQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dhcHRvZG9PcHRpb25zQ29udGFpbmVyQ29udGVudHMpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGFkZFRPRE9CdXR0b25FdmVudCIsImltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi9wcm9qZWN0LW1lbmFnZXIuanNcIjtcbmltcG9ydCBjcmVhdGVBZGRUT0RPdEJ0biBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tYWRkVG9kby1jcmVhdGUtYWRkQnRuLmpzXCI7XG5pbXBvcnQgYWRkVE9ET0J1dHRvbkV2ZW50IGZyb20gXCIuL2FkZC10b2RvLWJ1dHRvbi1ldmVudC5qc1wiO1xuaW1wb3J0IG5ld1RvZG8gZnJvbSBcIi4vY3JlYXRlLW5ldy10b2RvLmpzXCI7XG5pbXBvcnQgcmVmcmVzaFRvZG9zQ29udGFpbmVyIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1yZWZyZXNoLVRPRE9TLWNvbnRhaW5lclwiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zL2VzbVwiO1xuaW1wb3J0IHVwZGF0ZUxvY2FsU3RvcmFnZSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlLW1lbmFnZXIuanNcIjtcblxuY29uc3QgbmV3VG9kb0J1dHRvbnNFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGVjbGluZUJ0bkZ1bmN0aW9uID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0NyZWF0ZUNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ3JlYXRlQ2FuY2VsQnRuJyk7XG4gICAgICAgIHRvZG9DcmVhdGVDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjcmVhdGVBZGRUT0RPdEJ0bigpO1xuICAgICAgICAgICAgYWRkVE9ET0J1dHRvbkV2ZW50KCk7XG4gICAgICAgIH0pXG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvQ3JlYXRlQ29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ3JlYXRlQ29uZmlybUJ0bicpO1xuICAgICAgICB0b2RvQ3JlYXRlQ29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb05hbWVJbnB1dFRleHQnKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0RhdGVQaWNrZXJJbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGltZVBpY2tlcklucHV0Jyk7IFxuICAgICAgICAgICAgY29uc3QgY29uZmlybUFuZERyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm1BbmREcm9wZG93bicpO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrRGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheSA9IGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGF0ZSA9IGRhdGUudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRGF0ZSA8IHRvZGF5KSByZXR1cm4gdHJ1ZTsgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNoZWNrVGltZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kYXlGb3JtYXRlZCA9IGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGF0ZSA9IGRhdGUudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRUaW1lID0gdGltZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lTm93ID0gYCR7dG9kYXkuZ2V0SG91cnMoKX06JHt0b2RheS5nZXRNaW51dGVzKCl9YDtcbiAgICAgICAgICAgICAgICBpZiAoKHRvZGF5Rm9ybWF0ZWQgPT09IHNlbGVjdGVkRGF0ZSkgJiYgKHNlbGVjdGVkVGltZSA8IHRpbWVOb3cpKSByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmIChuYW1lLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9EYXRhRXJyb3InKSl7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvRGF0YUVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0YUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGFFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmlubmVyVGV4dCA9IFwiTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDEgY2hhcmFjdGVyIGxvbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUFuZERyb3Bkb3duLmFwcGVuZCh0b2RvRGF0YUVycm9yKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGFFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmNsYXNzTGlzdC5hZGQoJ3RvZG9EYXRhRXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5pbm5lclRleHQgPSBcIk5hbWUgbXVzdCBiZSBhdCBsZWFzdCAxIGNoYXJhY3RlciBsb25nXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1BbmREcm9wZG93bi5hcHBlbmQodG9kb0RhdGFFcnJvcik7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkYXRlLnZhbHVlLmxlbmd0aCA9PT0gMCB8fCBjaGVja0RhdGUoKSkge1xuICAgICAgICAgICAgICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvRGF0YUVycm9yJykpe1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0RhdGFFcnJvcicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGFFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmNsYXNzTGlzdC5hZGQoJ3RvZG9EYXRhRXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5pbm5lclRleHQgPSBcIkRhdGUgcmVxdXJlZCBhbmQgbXVzdCBiZSBzZXQgaW4gdGhlIGZ1dHVyZVwiO1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtQW5kRHJvcGRvd24uYXBwZW5kKHRvZG9EYXRhRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRhRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0YUVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuaW5uZXJUZXh0ID0gXCJEYXRlIHJlcXVyZWQgYW5kIG11c3QgYmUgc2V0IGluIHRoZSBmdXR1cmVcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUFuZERyb3Bkb3duLmFwcGVuZCh0b2RvRGF0YUVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aW1lLnZhbHVlLmxlbmd0aCA9PT0gMCB8fCBjaGVja1RpbWUoKSkge1xuICAgICAgICAgICAgICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvRGF0YUVycm9yJykpe1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0RhdGFFcnJvcicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGFFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmNsYXNzTGlzdC5hZGQoJ3RvZG9EYXRhRXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5pbm5lclRleHQgPSBcIlRpbWUgaXMgcmVxdXJpZWQgYW5kIG11c3QgYmUgc2V0IGluIHRoZSBmdXR1cmVcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUFuZERyb3Bkb3duLmFwcGVuZCh0b2RvRGF0YUVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0YUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGFFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmlubmVyVGV4dCA9IFwiVGltZSBpcyByZXF1cmllZCBhbmQgbXVzdCBiZSBzZXQgaW4gdGhlIGZ1dHVyZVwiO1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtQW5kRHJvcGRvd24uYXBwZW5kKHRvZG9EYXRhRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVRvZG8gPSBuZXdUb2RvKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0JykuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3ROYW1lID09PSBcIkhPTUVcIikge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TWVuYWdlci5wdXNoVG9Ib21lVG9kb3NBcnJheShjcmVhdGVUb2RvKTtcblxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3RzQXJyYXkgPSBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0SW5kZXg7IFxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KClbaV0uZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSkgcHJvamVjdEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpW3Byb2plY3RJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuYWRkVG9Ub2Rvc0FycmF5KGNyZWF0ZVRvZG8pOyBcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjcmVhdGVBZGRUT0RPdEJ0bigpO1xuICAgICAgICAgICAgICAgIGFkZFRPRE9CdXR0b25FdmVudCgpO1xuICAgICAgICAgICAgICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICB9KSgpO1xuXG59O1xuZXhwb3J0IGRlZmF1bHQgbmV3VG9kb0J1dHRvbnNFdmVudHMiLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnMvZXNtXCI7XG5cbmNvbnN0IGNoZWNrVG9kb091dGRhdGUgPSAoZGF0ZSwgdG9kb0RpdiwgdGltZSApID0+IHtcblxuICAgIGNvbnN0IGNoZWNrRGF0ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXRlID0gZGF0ZS50ZXh0Q29udGVudDtcbiAgICAgICAgaWYgKHNlbGVjdGVkRGF0ZSA8IHRvZGF5KSByZXR1cm4gdHJ1ZTsgICBcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tUaW1lID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB0aW1lTm93ID0gYCR7dG9kYXlEYXRlLmdldEhvdXJzKCl9OiR7dG9kYXlEYXRlLmdldE1pbnV0ZXMoKX1gO1xuICAgICAgICBjb25zdCB0b2RheSA9IGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZERhdGUgPSBkYXRlLnRleHRDb250ZW50O1xuICAgICAgICBpZiAoc2VsZWN0ZWREYXRlIDw9IHRvZGF5ICYmIHRpbWUudGV4dENvbnRlbnQgPCB0aW1lTm93KSByZXR1cm4gdHJ1ZVxuICAgIH07XG5cbiAgICBpZiAoY2hlY2tEYXRlKCkgfHwgY2hlY2tUaW1lKCkpIHtcbiAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCdvdXRkYXRlZFRvZG8nKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgY2hlY2tUb2RvT3V0ZGF0ZSIsImltcG9ydCB0b2RvVGFzayBmcm9tIFwiLi9UT0RPLWNyZWF0b3IuanNcIjtcblxuY29uc3QgbmV3VG9kbyA9ICgpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9OYW1lSW5wdXRUZXh0JykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGF0ZVBpY2tlcklucHV0JykudmFsdWU7XG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGltZVBpY2tlcklucHV0JykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1ByaW9yaXR5U2VsZWN0JykudmFsdWU7XG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb05vdGVzSW5wdXQnKS52YWx1ZTtcbiAgICBsZXQgdG9kbyA9IHRvZG9UYXNrKG5hbWUsIGRhdGUsIHRpbWUsIHByaW9yaXR5LCBub3Rlcyk7XG4gICAgcmV0dXJuIHRvZG9cbn1cbmV4cG9ydCBkZWZhdWx0IG5ld1RvZG8iLCJpbXBvcnQgcHJvamVjdE1lbmFnZXIgZnJvbSBcIi4vcHJvamVjdC1tZW5hZ2VyLmpzXCI7XG5pbXBvcnQgY3JlYXRlQWRkVE9ET3RCdG4gZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFRvZG8tY3JlYXRlLWFkZEJ0bi5qc1wiO1xuaW1wb3J0IGFkZFRPRE9CdXR0b25FdmVudCBmcm9tIFwiLi9hZGQtdG9kby1idXR0b24tZXZlbnQuanNcIjtcbmltcG9ydCByZWZyZXNoVG9kb3NDb250YWluZXIgZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLXJlZnJlc2gtVE9ET1MtY29udGFpbmVyXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnMvZXNtXCI7XG5pbXBvcnQgdXBkYXRlTG9jYWxTdG9yYWdlIGZyb20gXCIuL2xvY2FsLXN0b3JhZ2UtbWVuYWdlci5qc1wiO1xuXG5jb25zdCBlZGl0VG9kb0J1dHRvbnNFdmVudHMgPSAodGFyZ2V0UHJvamVjdEluZGV4LCB0b2RvSW5kZXgsKSA9PiB7XG4gICAgY29uc3QgZGVjbGluZUJ0bkZ1bmN0aW9uID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0NyZWF0ZUNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ3JlYXRlQ2FuY2VsQnRuJyk7XG4gICAgICAgIHRvZG9DcmVhdGVDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjcmVhdGVBZGRUT0RPdEJ0bigpO1xuICAgICAgICAgICAgYWRkVE9ET0J1dHRvbkV2ZW50KCk7XG4gICAgICAgIH0pXG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSAoKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdG9kb0VkaXRDb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9FZGl0Q29uZmlybUJ0bicpO1xuICAgICAgICBcbiAgICAgICAgdG9kb0VkaXRDb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgdGFyZ2V0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0JykuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb05hbWVJbnB1dFRleHQnKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0RhdGVQaWNrZXJJbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGltZVBpY2tlcklucHV0Jyk7IFxuICAgICAgICAgICAgY29uc3QgY29uZmlybUFuZERyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm1BbmREcm9wZG93bicpO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrRGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheSA9IGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGF0ZSA9IGRhdGUudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRGF0ZSA8IHRvZGF5KSByZXR1cm4gdHJ1ZTsgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAobmFtZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvRGF0YUVycm9yJykpe1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0RhdGFFcnJvcicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGFFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmNsYXNzTGlzdC5hZGQoJ3RvZG9EYXRhRXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5pbm5lclRleHQgPSBcIk5hbWUgbXVzdCBiZSBhdCBsZWFzdCAxIGNoYXJhY3RlciBsb25nXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1BbmREcm9wZG93bi5hcHBlbmQodG9kb0RhdGFFcnJvcik7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRhRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0YUVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuaW5uZXJUZXh0ID0gXCJOYW1lIG11c3QgYmUgYXQgbGVhc3QgMSBjaGFyYWN0ZXIgbG9uZ1wiO1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtQW5kRHJvcGRvd24uYXBwZW5kKHRvZG9EYXRhRXJyb3IpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0ZS52YWx1ZS5sZW5ndGggPT09IDAgfHwgY2hlY2tEYXRlKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0RhdGFFcnJvcicpKXtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9EYXRhRXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRhRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0YUVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuaW5uZXJUZXh0ID0gXCJEYXRlIHJlcXVyZWQgYW5kIG11c3QgYmUgc2V0IGluIHRoZSBmdXR1cmVcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUFuZERyb3Bkb3duLmFwcGVuZCh0b2RvRGF0YUVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0YUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGFFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmlubmVyVGV4dCA9IFwiRGF0ZSByZXF1cmVkIGFuZCBtdXN0IGJlIHNldCBpbiB0aGUgZnV0dXJlXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1BbmREcm9wZG93bi5hcHBlbmQodG9kb0RhdGFFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGltZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0RhdGFFcnJvcicpKXtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9EYXRhRXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRhRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0YUVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuaW5uZXJUZXh0ID0gXCJUaW1lIG11c3QgYmUgc2V0XCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1BbmREcm9wZG93bi5hcHBlbmQodG9kb0RhdGFFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGFFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmNsYXNzTGlzdC5hZGQoJ3RvZG9EYXRhRXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5pbm5lclRleHQgPSBcIlRpbWUgbXVzdCBiZSBzZXRcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUFuZERyb3Bkb3duLmFwcGVuZCh0b2RvRGF0YUVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRQcm9qZWN0TmFtZSA9PT0gXCJIT01FXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaG9tZVRvZG8gPSBwcm9qZWN0TWVuYWdlci5nZXRIb21lVG9kb3NBcnJheSgpW3RvZG9JbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGhvbWVUb2RvLnNldFRvZG9OYW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTmFtZUlucHV0VGV4dCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaG9tZVRvZG8uc2V0VG9kb0RhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EYXRlUGlja2VySW5wdXQnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGhvbWVUb2RvLnNldFRvZG9UaW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGltZVBpY2tlcklucHV0JykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBob21lVG9kby5zZXRUb2RvUHJpb3JpdHkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Qcmlvcml0eVNlbGVjdCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaG9tZVRvZG8uc2V0VG9kb05vdGVzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTm90ZXNJbnB1dCcpLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVBZGRUT0RPdEJ0bigpO1xuICAgICAgICAgICAgICAgICAgICBhZGRUT0RPQnV0dG9uRXZlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaFRvZG9zQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNleyAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KClbdGFyZ2V0UHJvamVjdEluZGV4XS5nZXRUb2Rvc0FycmF5KClbdG9kb0luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgdG9kby5zZXRUb2RvTmFtZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb05hbWVJbnB1dFRleHQnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG8uc2V0VG9kb0RhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EYXRlUGlja2VySW5wdXQnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG8uc2V0VG9kb1RpbWUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9UaW1lUGlja2VySW5wdXQnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG8uc2V0VG9kb1ByaW9yaXR5KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUHJpb3JpdHlTZWxlY3QnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG8uc2V0VG9kb05vdGVzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTm90ZXNJbnB1dCcpLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVBZGRUT0RPdEJ0bigpO1xuICAgICAgICAgICAgICAgICAgICBhZGRUT0RPQnV0dG9uRXZlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaFRvZG9zQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KSgpO1xuXG59O1xuZXhwb3J0IGRlZmF1bHQgZWRpdFRvZG9CdXR0b25zRXZlbnRzIiwiaW1wb3J0IHByb2plY3RNZW5hZ2VyIGZyb20gXCIuL3Byb2plY3QtbWVuYWdlci5qc1wiO1xuaW1wb3J0IHRvZG9UYXNrIGZyb20gXCIuL1RPRE8tY3JlYXRvci5qc1wiO1xuaW1wb3J0IHByb2plY3RDcmVhdG9yIGZyb20gXCIuL3Byb2plY3QtY3JlYXRvci5qc1wiO1xuXG5jb25zdCBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhvbWVUb2Rvc1wiKSAhPT0gbnVsbCl7XG4gICAgICAgIGxldCBob21lVG9kb3NBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJob21lVG9kb3NcIikpO1xuICAgICAgICBob21lVG9kb3NBcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBsZXQgdG9kbyA9IHRvZG9UYXNrKHRhc2submFtZSwgdGFzay5kYXRlLCB0YXNrLnRpbWUsIHRhc2sucHJpb3JpdHksIHRhc2subm90ZXMpO1xuICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIucHVzaFRvSG9tZVRvZG9zQXJyYXkodG9kbyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0TmFtZXNcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lc0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3ROYW1lc1wiKSk7XG4gICAgICAgIHByb2plY3ROYW1lc0FycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLnB1c2hUb1Byb2plY3RzQXJyYXkocHJvamVjdENyZWF0b3IocHJvamVjdCkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IHByb2plY3QuZ2V0TmFtZSgpO1xuXG4gICAgICAgIGlmKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7cHJvamVjdE5hbWV9YCkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgdG9kb3NBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7cHJvamVjdE5hbWV9YCkpO1xuICAgICAgICAgICAgdG9kb3NBcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRvZG8gPSB0b2RvVGFzayh0YXNrLm5hbWUsIHRhc2suZGF0ZSwgdGFzay50aW1lLCB0YXNrLnByaW9yaXR5LCB0YXNrLm5vdGVzKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmFkZFRvVG9kb3NBcnJheSh0b2RvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlIiwiaW1wb3J0IHJlZnJlc2hUb2Rvc0NvbnRhaW5lciBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tcmVmcmVzaC1UT0RPUy1jb250YWluZXIuanNcIjtcblxuY29uc3Qgc2hvd1RvZG9zRnJvbUhvbWVQcm9qZWN0ID0gKGhvbWVQcm9qZWN0RGl2KSA9PiB7XG4gICAgaG9tZVByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0RGl2JykuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCd0YXJnZXQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGhvbWVQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3RhcmdldCcpO1xuXG4gICAgICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuICAgICAgICBcbiAgICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBzaG93VG9kb3NGcm9tSG9tZVByb2plY3QiLCJpbXBvcnQgcHJvamVjdE1lbmFnZXIgZnJvbSBcIi4vcHJvamVjdC1tZW5hZ2VyLmpzXCI7XG5cbmNvbnN0IHVwZGF0ZUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuICAgIGxldCBob21lVG9kb3MgPSBbXTtcbiAgICBwcm9qZWN0TWVuYWdlci5nZXRIb21lVG9kb3NBcnJheSgpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgbGV0IHRhc2sgPSBuZXcgT2JqZWN0KCk7XG4gICAgICAgIHRhc2submFtZSA9IHRvZG8uZ2V0VG9kb05hbWUoKTtcbiAgICAgICAgdGFzay5kYXRlID0gdG9kby5nZXRUb2RvRGF0ZSgpO1xuICAgICAgICB0YXNrLnRpbWUgPSB0b2RvLmdldHRvZG9UaW1lKCk7XG4gICAgICAgIHRhc2sucHJpb3JpdHkgPSB0b2RvLmdldFRvZG9Qcmlvcml0eSgpO1xuICAgICAgICB0YXNrLm5vdGVzID0gdG9kby5nZXRUb2RvTm90ZXMoKTtcbiAgICAgICAgaG9tZVRvZG9zLnB1c2godGFzayk7XG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJob21lVG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkoaG9tZVRvZG9zKSk7XG5cbiAgICBsZXQgcHJvamVjdHNBcnJheSA9IFtdXG4gICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgICAgIHByb2plY3RzQXJyYXkucHVzaChwcm9qZWN0TmFtZSk7XG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TmFtZXNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSkpO1xuXG4gICAgXG4gICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgICAgIGxldCB0b2Rvc0FycmF5ID0gW107XG4gICAgICAgXG4gICAgICAgIHByb2plY3QuZ2V0VG9kb3NBcnJheSgpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgIGxldCB0YXNrID0gbmV3IE9iamVjdCgpO1xuICAgICAgICAgICAgdGFzay5uYW1lID0gdG9kby5nZXRUb2RvTmFtZSgpO1xuICAgICAgICAgICAgdGFzay5kYXRlID0gdG9kby5nZXRUb2RvRGF0ZSgpO1xuICAgICAgICAgICAgdGFzay50aW1lID0gdG9kby5nZXR0b2RvVGltZSgpO1xuICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9IHRvZG8uZ2V0VG9kb1ByaW9yaXR5KCk7XG4gICAgICAgICAgICB0YXNrLm5vdGVzID0gdG9kby5nZXRUb2RvTm90ZXMoKTtcbiAgICAgICAgICAgIHRvZG9zQXJyYXkucHVzaCh0YXNrKTsgICAgICAgICAgXG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3Byb2plY3ROYW1lfWAsIEpTT04uc3RyaW5naWZ5KHRvZG9zQXJyYXkpKTtcbiAgICB9KTtcblxuXG59XG5leHBvcnQgZGVmYXVsdCB1cGRhdGVMb2NhbFN0b3JhZ2UiLCJjb25zdCBwcm9qZWN0Q3JlYXRvciA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHByb2plY3ROYW1lID0gbmFtZTtcbiAgICBsZXQgdG9kb3NBcnJheSA9IFtdO1xuICAgIFxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBwcm9qZWN0TmFtZTtcbiAgICBjb25zdCBnZXRUb2Rvc0FycmF5ID0gKCkgPT4gdG9kb3NBcnJheTtcbiAgICBjb25zdCBlZGl0UHJvamVjdE5hbWUgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIHByb2plY3ROYW1lID0gc3RyaW5nO1xuICAgIH1cbiAgICBjb25zdCBhZGRUb1RvZG9zQXJyYXkgPSAoaXRlbSkgPT4ge1xuICAgICAgICB0b2Rvc0FycmF5LnB1c2goaXRlbSk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVUT0RPID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHRvZG9zQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgY29uc3QgZmxhdFRvZG9zQXJyYXkgPSAoKSA9PiB7XG4gICAgICAgIHRvZG9zQXJyYXkgPSB0b2Rvc0FycmF5LmZsYXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TmFtZSxcbiAgICAgICAgZ2V0VG9kb3NBcnJheSxcbiAgICAgICAgZWRpdFByb2plY3ROYW1lLFxuICAgICAgICBhZGRUb1RvZG9zQXJyYXksXG4gICAgICAgIHJlbW92ZVRPRE8sXG4gICAgICAgIGZsYXRUb2Rvc0FycmF5LFxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RDcmVhdG9yOyIsImNvbnN0IHByb2plY3RNZW5hZ2VyID0gKCgpID0+IHtcbiAgICBsZXQgcHJvamVjdHNBcnJheSA9IFtdO1xuICAgIGxldCBob21lVG9kb3NBcnJheSA9IFtdO1xuICAgIFxuICAgIGNvbnN0IGdldFByb2plY3RzQXJyYXkgPSAoKSA9PiBwcm9qZWN0c0FycmF5O1xuICAgIGNvbnN0IGdldEhvbWVUb2Rvc0FycmF5ID0gKCkgPT4gaG9tZVRvZG9zQXJyYXk7XG4gICAgY29uc3QgcHVzaFRvSG9tZVRvZG9zQXJyYXkgPSAodG9kbykgPT4ge1xuICAgICAgICBob21lVG9kb3NBcnJheS5wdXNoKHRvZG8pO1xuICAgIH07XG4gICAgY29uc3QgcHVzaFRvUHJvamVjdHNBcnJheSA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RzQXJyYXkucHVzaChwcm9qZWN0KTtcbiAgICB9O1xuICAgIGNvbnN0IGdldEFsbFRvZG9zRnJvbVByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWxsVG9kb3MgPVtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgYWxsVG9kb3MucHVzaChwcm9qZWN0c0FycmF5W2ldLmdldFRvZG9zQXJyYXkpXG4gICAgICAgIH07XG4gICAgICAgIGFsbFRvZG9zLnB1c2goaG9tZVRvZG9zQXJyYXkpXG4gICAgICAgIHJldHVybiBhbGxUb2Rvcy5mbGF0KClcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgcHJvamVjdHNBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlSG9tZVRPRE8gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgaG9tZVRvZG9zQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICAgIGNvbnN0IG1vdmVUT0RPRnJvbUhvbWVUb1Byb2plY3QgPSAodG9kb0luZGV4LCBwcm9qZWN0SW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHRlbXAgPSBob21lVG9kb3NBcnJheS5zcGxpY2UodG9kb0luZGV4LCAxKTtcbiAgICAgICAgcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLmFkZFRvVG9kb3NBcnJheSh0ZW1wKTtcbiAgICAgICAgcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLmZsYXRUb2Rvc0FycmF5KCk7XG4gICAgfTtcbiAgICBjb25zdCBzZXRQcm9qZWN0c0FycmF5ID0gKGRhdGEpID0+IHtcbiAgICAgICAgcHJvamVjdHNBcnJheSA9IGRhdGE7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQcm9qZWN0c0FycmF5LFxuICAgICAgICBnZXRBbGxUb2Rvc0Zyb21Qcm9qZWN0cyxcbiAgICAgICAgZ2V0SG9tZVRvZG9zQXJyYXksXG4gICAgICAgIHB1c2hUb1Byb2plY3RzQXJyYXksXG4gICAgICAgIHB1c2hUb0hvbWVUb2Rvc0FycmF5LFxuICAgICAgICByZW1vdmVQcm9qZWN0LFxuICAgICAgICByZW1vdmVIb21lVE9ETyxcbiAgICAgICAgbW92ZVRPRE9Gcm9tSG9tZVRvUHJvamVjdCxcbiAgICAgICAgc2V0UHJvamVjdHNBcnJheSxcbiAgICB9XG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgcHJvamVjdE1lbmFnZXIiLCJpbXBvcnQgcHJvamVjdE1lbmFnZXIgZnJvbSBcIi4vcHJvamVjdC1tZW5hZ2VyLmpzXCI7XG5pbXBvcnQgcmVmcmVzaFRvZG9zQ29udGFpbmVyIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1yZWZyZXNoLVRPRE9TLWNvbnRhaW5lclwiOyBcbmltcG9ydCBlZGl0VG9kb0NvbnRhaW5lckNvbnRlbnRzIGZyb20gJy4uL2RvbS1mdW5jdGlvbnMvRE9NLWVkaXRUb2RvLXN3YXAtdG8tRm9ybSc7XG5pbXBvcnQgY3JlYXRlQWRkVE9ET3RCdG4gZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFRvZG8tY3JlYXRlLWFkZEJ0bi5qc1wiO1xuaW1wb3J0IGFkZFRPRE9CdXR0b25FdmVudCBmcm9tIFwiLi9hZGQtdG9kby1idXR0b24tZXZlbnQuanNcIjtcbmltcG9ydCBtb3ZlVG9kb0Ryb3Bkb3duQ29udGVudHMgZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLXNob3ctbW92ZS1UT0RPLWRyb3Bkb3duLmpzXCI7XG5pbXBvcnQgdXBkYXRlTG9jYWxTdG9yYWdlIGZyb20gXCIuL2xvY2FsLXN0b3JhZ2UtbWVuYWdlci5qc1wiO1xuY29uc3QgdG9kb0RpdnNFdmVudHMgPSAoKSA9PiB7XG5cbiAgICBsZXQgdGFyZ2V0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0JykuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgXG4gICAgY29uc3QgdG9kb0RlbGV0ZUJ1dHRvbkV2ZW50ID0gKGRlbGV0ZUJ1dHRvbiwgdG9kb0luZGV4KSA9PiB7XG4gICAgICAgIGxldCB0YXJnZXRQcm9qZWN0SW5kZXggPSAwO1xuICAgICAgICBpZiAodGFyZ2V0UHJvamVjdE5hbWUgPT09IFwiSE9NRVwiKSB7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgY3JlYXRlQWRkVE9ET3RCdG4oKTtcbiAgICAgICAgICAgICAgICBhZGRUT0RPQnV0dG9uRXZlbnQoKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWVuYWdlci5yZW1vdmVIb21lVE9ETyh0b2RvSW5kZXgpO1xuICAgICAgICAgICAgICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7ICAgIFxuICAgICAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgfSk7ICAgIFxuICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSA9PT0gdGFyZ2V0UHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0UHJvamVjdEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xuICAgICAgICAgICAgICAgIGNyZWF0ZUFkZFRPRE90QnRuKCk7XG4gICAgICAgICAgICAgICAgYWRkVE9ET0J1dHRvbkV2ZW50KCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpW3RhcmdldFByb2plY3RJbmRleF0ucmVtb3ZlVE9ETyh0b2RvSW5kZXgpO1xuICAgICAgICAgICAgICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgdG9kb0VkaXRCdXR0b25FdmVudCA9IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEJ1dHRvbiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nVG9kb05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ1RvZG9EYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdUb2RvVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nVG9kb05vdGVzLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgPT4ge1xuICAgICAgICBsZXQgdGFyZ2V0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0JykuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICAgIGxldCB0YXJnZXRQcm9qZWN0SW5kZXggPSAwO1xuICAgICAgICBsZXQgdG9kb05hbWVEaXZDb250ZW50ID0gc3RyaW5nVG9kb05hbWU7XG4gICAgICAgIGxldCB0b2RvRGF0ZURpdkNvbnRlbnQgPSBzdHJpbmdUb2RvRGF0ZTtcbiAgICAgICAgbGV0IHRvZG9UaW1lRGl2Q29udGVudCA9IHN0cmluZ1RvZG9UaW1lO1xuICAgICAgICBsZXQgdG9kb05vdGVzRGl2Q29udGVudCA9IHN0cmluZ1RvZG9Ob3RlcztcbiAgICAgICAgbGV0IHBhc3NlZFRvZG9JbmRleCA9IHRvZG9JbmRleDtcbiAgICAgICAgaWYgKHRhcmdldFByb2plY3ROYW1lID09PSBcIkhPTUVcIikge1xuICAgICAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZWRpdFRvZG9Db250YWluZXJDb250ZW50cyh0YXJnZXRQcm9qZWN0SW5kZXgsIHBhc3NlZFRvZG9JbmRleCwgdG9kb05hbWVEaXZDb250ZW50LCB0b2RvRGF0ZURpdkNvbnRlbnQsIHRvZG9UaW1lRGl2Q29udGVudCwgdG9kb05vdGVzRGl2Q29udGVudCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSA9PT0gdGFyZ2V0UHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0UHJvamVjdEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZWRpdFRvZG9Db250YWluZXJDb250ZW50cyh0YXJnZXRQcm9qZWN0SW5kZXgsIHBhc3NlZFRvZG9JbmRleCwgdG9kb05hbWVEaXZDb250ZW50LCB0b2RvRGF0ZURpdkNvbnRlbnQsIHRvZG9UaW1lRGl2Q29udGVudCwgdG9kb05vdGVzRGl2Q29udGVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTsgICAgXG4gICAgfTtcblxuICAgIGNvbnN0IHRvZG9Nb3ZlQnV0dG9uRXZlbnQgPSAobW92ZUJ1dHRvbiwgdG9kb0luZGV4LCB0b2RvRGl2ICkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhbGxUb2RvcyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2RvRGl2JyldO1xuICAgICAgICAgICAgICAgIGFsbFRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCd0YXJnZXRUb2RvJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXJnZXRUb2RvJyk7XG5cbiAgICAgICAgICAgICAgICBpZighIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZlVG9kb1Byb2plY3RzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvZG9Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZlVG9kb1Byb2plY3RzJyk7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUb2RvUHJvamVjdHMucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUb2RvRHJvcGRvd25Db250ZW50cyh0YXJnZXRQcm9qZWN0TmFtZSwgdG9kb0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbGxUb2RvcyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2RvRGl2JyldO1xuICAgICAgICAgICAgICAgICAgICBhbGxUb2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmdldFRvZG8nKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgndGFyZ2V0VG9kbycpO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG9kb0Ryb3Bkb3duQ29udGVudHModGFyZ2V0UHJvamVjdE5hbWUsIHRvZG9JbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgdG9kb1RhcmdldEV2ZW50ID0gKHRvZG9EaXYpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICB0b2RvRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFsbFRvZG9zID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG9EaXYnKV07XG4gICAgICAgICAgICBhbGxUb2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCd0YXJnZXRUb2RvJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgndGFyZ2V0VG9kbycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b2RvRGVsZXRlQnV0dG9uRXZlbnQsXG4gICAgICAgIHRvZG9FZGl0QnV0dG9uRXZlbnQsXG4gICAgICAgIHRvZG9Nb3ZlQnV0dG9uRXZlbnQsXG4gICAgICAgIHRvZG9UYXJnZXRFdmVudFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9EaXZzRXZlbnRzXG5cblxuXG47IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXyBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgaGVhZGVyQm9keUZvb3RlciBmcm9tICcuL2RvbS1mdW5jdGlvbnMvRE9NLXByaW1lLWRpdnMuanMnO1xuaW1wb3J0IGNyZWF0ZUhlYWQgZnJvbSAnLi9kb20tZnVuY3Rpb25zL0RPTS1oZWFkLmpzJztcbmltcG9ydCBjcmVhdGVCb2R5IGZyb20gJy4vZG9tLWZ1bmN0aW9ucy9ET00tYm9keS5qcyc7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gJy4vZG9tLWZ1bmN0aW9ucy9ET00tZm9vdGVyLmpzJztcbmltcG9ydCBhZGRQcm9qZWN0QnV0dG9uRXZlbnQgZnJvbSAnLi9mdW5jdGlvbnMvYWRkLXByb2plY3QtYnV0dG9uLWV2ZW50LmpzJztcbmltcG9ydCBjcmVhdGVBZGRUT0RPdEJ0biBmcm9tICcuL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFRvZG8tY3JlYXRlLWFkZEJ0bi5qcyc7XG5pbXBvcnQgYWRkVE9ET0J1dHRvbkV2ZW50IGZyb20gJy4vZnVuY3Rpb25zL2FkZC10b2RvLWJ1dHRvbi1ldmVudC5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSBmcm9tIFwiLi9mdW5jdGlvbnMvZ2V0LWRhdGEtZnJvbS1sb2NhbC1zdG9yYWdlLmpzXCI7XG5pbXBvcnQgcmVmcmVzaFRvZG9zQ29udGFpbmVyIGZyb20gXCIuL2RvbS1mdW5jdGlvbnMvRE9NLXJlZnJlc2gtVE9ET1MtY29udGFpbmVyXCI7XG5pbXBvcnQgc2hvd1Byb2plY3RzIGZyb20gXCIuL2RvbS1mdW5jdGlvbnMvRE9NLXNob3ctcHJvamVjdHMuanNcIjtcblxuXG5cbmhlYWRlckJvZHlGb290ZXIoKTtcbmNyZWF0ZUhlYWQoKTtcbmNyZWF0ZUJvZHkoKTtcbmNyZWF0ZUZvb3RlcigpO1xuYWRkUHJvamVjdEJ1dHRvbkV2ZW50KCk7XG5jcmVhdGVBZGRUT0RPdEJ0bigpO1xuYWRkVE9ET0J1dHRvbkV2ZW50KCk7XG5nZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgpO1xuc2hvd1Byb2plY3RzKCk7XG5yZWZyZXNoVG9kb3NDb250YWluZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=