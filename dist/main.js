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
___CSS_LOADER_EXPORT___.push([module.id, "\n@font-face {\n    font-family: 'elements';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\n    font-weight: 400;\n    font-style: normal;\n  }\n\n@font-face {\n    font-family: 'text';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n    font-weight: 400;\n    font-style: normal;\n  }\n\n:root {\n    /* colors */\n    --background-color: #bae6fd;\n    --target-color: #3b82f6;\n    --porojects-divs-background: #38bdf8;\n    --low-priority-color: #bbf7d0;\n    --medium-priority-color: #fef08a;\n    --high-priority-color: #fda4af;\n    --outdated-color: #e5e7eb;\n    --separator-red: #e11d48;\n    font-family: 'elements';\n}\nbody {\n    display: grid;\n    grid-template-rows: 1fr 12fr 0.3fr;\n    background-color: var(--background-color);\n}\n.head {\n    width: 100%;\n    height: 11vh;\n    background-color: var(--target-color);\n    font-family: 'elements';\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 1vh;\n}\n.logo {\n    height: 100%;\n    width: 40%;\n    font-size: 5vh;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.body {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n.projectsDiv {\n    grid-column: 1 / 2;\n    height: 100%;\n    /* background-color: rgb(207, 196, 182); */\n    border-right: 1vh solid var(--separator-red);\n    padding-right: 2vh;\n    display: grid;\n    grid-template-rows: 1fr 1fr 10fr 1fr;\n}\n.projectsDivHeader {\n    grid-row: 1 / 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--target-color);\n    font-family: 'elements';\n    font-size: 3vh;\n    letter-spacing: 0.3vh;\n}\n.homeProjectDiv {\n    grid-row: 2 / 3;\n    background-color: var(--low-priority-color);\n    border-radius: 1vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 3vh;\n    color: var(--target-color);\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.projectsContainer {\n    grid-row: 3 / 4;\n    /* background-color: rgb(209, 223, 176); */\n}\n.target {\n    border: 0.6vh solid var(--target-color);\n}\n.projectDiv {\n    display: flex;\n    justify-content: space-between;\n    height: 3vh;\n    background-color: var(--porojects-divs-background);\n    font-family: 'elements';\n    font-size: 2.5vh;\n    letter-spacing: 0.1vh;\n    color: white;\n    padding: 1vh;\n    margin: 1vh 0 1vh 0;\n    border-radius: 1vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.editTodoButton, .deleteTodoButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 3.5vh;\n    height: 3.5vh;\n    border-radius: 1vh;\n    border: none;\n    background-color: white;\n    font-size: 2vh;\n    color: var(--target-color);\n}\n.moveTodoButton {\n    border-radius: 1vh;\n    border: none;\n    background-color: white;\n    font-size: 2vh;\n    font-family: 'elements';\n    color: var(--target-color);\n}\n.projectButtonsContainer {\n    display: flex;\n    gap: 1vh;\n    justify-content: center;\n    align-items: center;\n}\n.editProjectButton {\n    width: 3vh;\n    height: 2.9vh;\n    background-color: white;\n    border: 1px; \n    border-radius: 1vh;\n    font-size: 2vh;\n    color: var(--target-color);\n}\n.deleteProjectButton {\n    width: 3vh;\n    height: 3vh;\n    background-color: white;\n    border: 1px; \n    border-radius: 1vh;\n    font-size: 2vh;\n    color: var(--target-color);\n}\n.dropdown {\n    position: relative;\n    display: inline-block;\n    bottom: 0.2vh;\n\n}\n.dropdownContent {\n    display: block;\n    position: absolute;\n    background-color: #f1f1f1;\n    width: 27vh;\n    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;\n    z-index: 1;\n    border-radius: 1vh;\n    padding: 1vh 1vh 1.5vh 1vh;\n    font-size: 1.9vh;\n    background-color: var(--target-color);\n    margin-top: 0.3vh;\n    text-align: center;\n}\n#editProjectName {\n    border: none;\n    border-radius: 0.5vh;\n    margin-top: 0.6vh;\n    font-family: 'elements';\n    transition: 0.1s;\n    margin-right: 0.4vh;\n}\n#editProjectName:focus {\n    outline: none;\n    border: 0.3vh solid var(--high-priority-color);\n    color: var(--target-color);\n    caret-color: var(--high-priority-color);\n}\n.confirmNewNameButton {\n    background-color: white;\n    border: 1px;\n    border-radius: 0.7vh;\n    font-size: 1.7vh;\n    color: var(--target-color);\n    font-weight: bold;\n}\n.editProjectErrorDiv {\n    font-size: 1.5vh;\n    background-color: var(--medium-priority-color);\n    color: var(--separator-red);\n    padding: 0.4vh 1vh;\n    margin-top: 1vh;\n    border-radius: 1vh;\n    border: 0.4vh solid;\n}\n\n.addProjectContainer {\n    position: relative;\n    grid-row: 4 / 5;\n    background-color: var(--low-priority-color);\n    border: 0.6vh solid var(--target-color);\n    border-radius: 2vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--target-color);\n    gap: 0.5vh;\n    font-size: 2.5vh;\n}\n\n.addProjectButton {\n    width: 25vh;\n    height: 5vh;\n    border: 0.4vh solid var(--target-color);\n    background-color: var(--medium-priority-color);\n    border-radius: 2vh;\n    font-family: 'elements';\n    color: var(--target-color);\n    font-size: 3vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n\n#projectNameInputText {\n    border: none;\n    border-radius: 1vh;\n    font-family: 'elements';\n    transition: 0.1s;\n    width: 23vh;\n    height: 3vh;\n    color: var(--target-color);\n    transition: 0.3s;\n}\n#projectNameInputText:focus {\n    font-size: 2vh;\n    outline: none;\n    border: 0.5vh solid var(--high-priority-color);\n    color: var(--target-color);\n    caret-color: var(--high-priority-color);\n}\n.projectNameConfirmBtn, .projectNameCancelBtn{\n    height: 3.5vh;\n    width: 3.5vh;\n    background-color: white;\n    border: 0.4vh solid var(--target-color);\n    border-radius: 1vh;\n    color: var(--target-color);\n    font-size: 1.7vh;\n    font-weight: bold;\n}\n.validationMessageDiv {\n    display: none;\n}\n.validationMessageDiv.visible {\n    display: block;\n    position: absolute;\n    font-size: 1.5vh;\n    background-color: var(--medium-priority-color);\n    color: var(--separator-red);\n    padding: 0.4vh 1vh;\n    margin-bottom: 8vh;\n    margin-left: 17vh;\n    border-radius: 1vh;\n    border: 0.4vh solid;\n}\n.todosDiv {\n    grid-column: 2 / 3;\n    height: 100%;\n    display: grid;\n    grid-template-rows: 1fr 0.5fr 10fr 1fr;\n    margin: 0 3vh 0 3vh;\n    color: var(--target-color);\n    border-radius: 1vh;\n}\n.todoDivHeader {\n    grid-row: 1 / 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 3.5vh;\n    color: var(--target-color);\n    font-family: 'elements';\n}\n.todoDataHeaderDiv {\n    grid-row: 2 / 3;\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr 4fr 1fr;\n    padding: 0.25% 0.5%;\n    font-size: 2.5vh;\n    color: var(--target-color);\n    font-family: 'elements';\n    border-bottom: 1vh solid var(--separator-red);\n}\n.todoDataHeaderDiv > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.allTodosButton {\n    background-color: var(--low-priority-color);\n    align-self: center;\n    justify-self: end;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0.3%;\n    margin-right: 2%;\n    \n}\n.todosContainer {\n    grid-row: 3 / 4;\n    margin-top: 1.5vh;\n}\n.todoDiv {\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr 4fr 0.5fr 0.25fr 0.25fr;\n    margin: 1% 0;\n    height: 5vh;\n    align-items: center;\n    border-radius: 1vh;\n    padding-right: 1vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.High {\n    background-color: var(--high-priority-color);\n}\n.Medium {\n    background-color: var(--medium-priority-color);\n}\n.Low {\n    background-color: var(--low-priority-color);\n}\n.moveTodoProjects{\n    position: relative;\n    display: inline-block;\n}\n.moveTodoDropdownHomeProject {\n    padding: 1vh;\n    background-color: var(--porojects-divs-background);\n    border-radius: 2vh;\n    margin-bottom: 1vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.moveTodoDropdownProjectDiv {\n    padding: 1vh;\n    background-color: var(--porojects-divs-background);\n    border-radius: 2vh;\n    margin-bottom: 1.3vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.moveTodoDropdownProjectDiv, .moveTodoDropdownHomeProject {\n    text-align: center;\n}\n.moveTodoDropdownProjectDiv:hover, .moveTodoDropdownHomeProject:hover {\n    border: 0.4vh solid var(--separator-red);\n}\n.moveTodoProjectsDropdownContainer {\n    display: block;\n    position: absolute;\n    background-color: var(--target-color);\n    border-radius: 2vh;\n    min-width: 30vh;\n    margin-right: 5.9vh;\n    color: white;\n    border: 0.5vh solid white;\n    right: 0;\n    top: 100%;\n    padding: 20px;\n    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;\n    z-index: 1;\n}\n.todoDiv > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.targetTodo {\n    border: 0.6vh solid var(--target-color);\n}\n.todoOptionsContainer {\n    display: grid;\n    grid-template-columns: 0.75fr 2fr 0.5fr 1.2fr 0.5fr 0.75fr 0.75fr 0.75fr 0.5fr 3fr 0.25fr 0.25fr;\n    grid-template-rows: 1fr 1.5fr;\n    grid-row: 4 / 5;\n    background-color: var(--low-priority-color);\n    padding: 5px;\n    justify-content: center;\n    align-items: center;\n    border: 1vh solid var(--target-color);\n    border-radius: 2vh;\n    gap: 0.5vh;\n}\n.todoOptionsContainer > input[type=text], input[type=textarea], input[type=date], input[type=time], select {\n    border: none;\n    height: 3vh;\n    border-radius: 1vh;\n    font-family: 'elements';\n    color: var(--target-color);\n    background-color: white;\n    padding: 0 1vh;\n    transition: 0.3s;\n}\n.todoOptionsContainer > input[type=text]:focus, input[type=textarea]:focus, input[type=date]:focus, input[type=time]:focus {\n    outline: none;\n    border: 0.5vh solid var(--high-priority-color);\n    color: var(--target-color);\n    caret-color: var(--high-priority-color);\n}\n.todoCreateConfirmBtn, .todoCreateCancelBtn, .todoEditConfirmBtn {\n    width: 3.5vh;\n    height: 3vh;\n    background-color: white;\n    border: 0.4vh solid var(--target-color);\n    border-radius: 1vh;\n    color: var(--target-color);\n    font-size: 1.6vh;\n    font-weight: bold;\n}\n.addTODOButton {\n    grid-column: 1 / 13;\n    grid-row: 1 / 3;\n    width: 30%;\n    height: 80%;\n    align-self: center;\n    justify-self: center;\n    width: 38vh;\n    height: 7vh;\n    border: 0.7vh solid var(--target-color);\n    background-color: var(--medium-priority-color);\n    border-radius: 2vh;\n    font-family: 'elements';\n    color: var(--target-color);\n    font-size: 3vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.confirmAndDropdown {\n    position: relative;\n    display: inline-block;\n}\n\n.todoDataError {\n    position: absolute;\n    display: block;\n    z-index: 1;\n    width: max-content;\n    right: 0.5vh;\n    bottom: 3.3vh;\n    background-color: var(--medium-priority-color);\n    color: var(--separator-red);\n    margin-bottom: 0.3vh;\n    border: solid;\n    padding: 0.5vh 3vh;\n    border-radius: 1vh;\n\n}\n.todoOptionsContainer > label {\n    justify-self: center;\n}\n.todoCreateDivHeader {\n    grid-column: 1 / 13;\n    grid-row: 1 / 2;\n    justify-self: center;\n    border-bottom: 0.5vh solid var(--separator-red);\n}\n.todoEditDivHeader {\n    grid-column: 1 / 13;\n    grid-row: 1 / 2;\n    justify-self: center;\n    border-bottom: 0.5vh solid var(--separator-red);\n}\n.footer {\n    grid-row: 3 / 4;\n    display: flex;\n    align-items: center;\n    height: 4vh;\n    justify-content: center;\n    gap: 1%;\n    background-color: white;\n    margin-top: 0.5vh;\n}\n.gitIcon {\n    height: 3vh;\n}\n.outdatedTodo{\n    text-decoration: line-through;\n    background-color: gray;\n}\n.gitIcon {\n    transition: transform .4s ease-in-out;\n}\n.gitIcon:hover {\n    color: var(--separator-red);\n    transform: rotate(360deg) scale(1.2);\n}\n\n.todoCreateConfirmBtn, .todoCreateCancelBtn, .todoEditConfirmBtn,\n .addProjectButton, .addTODOButton, .moveTodoButton, .editTodoButton,\n .deleteTodoButton, .editProjectButton, .deleteProjectButton, .confirmNewNameButton, \n .projectNameConfirmBtn, .projectNameCancelBtn, .gitIcon {\n    cursor:pointer;\n }\n .todoCreateConfirmBtn, .todoCreateCancelBtn, .todoEditConfirmBtn,\n.moveTodoButton, .editTodoButton, .deleteTodoButton, .editProjectButton, \n.deleteProjectButton, .confirmNewNameButton, .projectNameConfirmBtn, .projectNameCancelBtn {\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\n@font-face {\n    font-family: 'elements';\n    src: url('../fonts/elements.woff') format('woff');\n    font-weight: 400;\n    font-style: normal;\n  }\n\n@font-face {\n    font-family: 'text';\n    src: url('../fonts/text.woff') format('woff');\n    font-weight: 400;\n    font-style: normal;\n  }\n\n:root {\n    /* colors */\n    --background-color: #bae6fd;\n    --target-color: #3b82f6;\n    --porojects-divs-background: #38bdf8;\n    --low-priority-color: #bbf7d0;\n    --medium-priority-color: #fef08a;\n    --high-priority-color: #fda4af;\n    --outdated-color: #e5e7eb;\n    --separator-red: #e11d48;\n    font-family: 'elements';\n}\nbody {\n    display: grid;\n    grid-template-rows: 1fr 12fr 0.3fr;\n    background-color: var(--background-color);\n}\n.head {\n    width: 100%;\n    height: 11vh;\n    background-color: var(--target-color);\n    font-family: 'elements';\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 1vh;\n}\n.logo {\n    height: 100%;\n    width: 40%;\n    font-size: 5vh;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.body {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n.projectsDiv {\n    grid-column: 1 / 2;\n    height: 100%;\n    /* background-color: rgb(207, 196, 182); */\n    border-right: 1vh solid var(--separator-red);\n    padding-right: 2vh;\n    display: grid;\n    grid-template-rows: 1fr 1fr 10fr 1fr;\n}\n.projectsDivHeader {\n    grid-row: 1 / 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--target-color);\n    font-family: 'elements';\n    font-size: 3vh;\n    letter-spacing: 0.3vh;\n}\n.homeProjectDiv {\n    grid-row: 2 / 3;\n    background-color: var(--low-priority-color);\n    border-radius: 1vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 3vh;\n    color: var(--target-color);\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.projectsContainer {\n    grid-row: 3 / 4;\n    /* background-color: rgb(209, 223, 176); */\n}\n.target {\n    border: 0.6vh solid var(--target-color);\n}\n.projectDiv {\n    display: flex;\n    justify-content: space-between;\n    height: 3vh;\n    background-color: var(--porojects-divs-background);\n    font-family: 'elements';\n    font-size: 2.5vh;\n    letter-spacing: 0.1vh;\n    color: white;\n    padding: 1vh;\n    margin: 1vh 0 1vh 0;\n    border-radius: 1vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.editTodoButton, .deleteTodoButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 3.5vh;\n    height: 3.5vh;\n    border-radius: 1vh;\n    border: none;\n    background-color: white;\n    font-size: 2vh;\n    color: var(--target-color);\n}\n.moveTodoButton {\n    border-radius: 1vh;\n    border: none;\n    background-color: white;\n    font-size: 2vh;\n    font-family: 'elements';\n    color: var(--target-color);\n}\n.projectButtonsContainer {\n    display: flex;\n    gap: 1vh;\n    justify-content: center;\n    align-items: center;\n}\n.editProjectButton {\n    width: 3vh;\n    height: 2.9vh;\n    background-color: white;\n    border: 1px; \n    border-radius: 1vh;\n    font-size: 2vh;\n    color: var(--target-color);\n}\n.deleteProjectButton {\n    width: 3vh;\n    height: 3vh;\n    background-color: white;\n    border: 1px; \n    border-radius: 1vh;\n    font-size: 2vh;\n    color: var(--target-color);\n}\n.dropdown {\n    position: relative;\n    display: inline-block;\n    bottom: 0.2vh;\n\n}\n.dropdownContent {\n    display: block;\n    position: absolute;\n    background-color: #f1f1f1;\n    width: 27vh;\n    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;\n    z-index: 1;\n    border-radius: 1vh;\n    padding: 1vh 1vh 1.5vh 1vh;\n    font-size: 1.9vh;\n    background-color: var(--target-color);\n    margin-top: 0.3vh;\n    text-align: center;\n}\n#editProjectName {\n    border: none;\n    border-radius: 0.5vh;\n    margin-top: 0.6vh;\n    font-family: 'elements';\n    transition: 0.1s;\n    margin-right: 0.4vh;\n}\n#editProjectName:focus {\n    outline: none;\n    border: 0.3vh solid var(--high-priority-color);\n    color: var(--target-color);\n    caret-color: var(--high-priority-color);\n}\n.confirmNewNameButton {\n    background-color: white;\n    border: 1px;\n    border-radius: 0.7vh;\n    font-size: 1.7vh;\n    color: var(--target-color);\n    font-weight: bold;\n}\n.editProjectErrorDiv {\n    font-size: 1.5vh;\n    background-color: var(--medium-priority-color);\n    color: var(--separator-red);\n    padding: 0.4vh 1vh;\n    margin-top: 1vh;\n    border-radius: 1vh;\n    border: 0.4vh solid;\n}\n\n.addProjectContainer {\n    position: relative;\n    grid-row: 4 / 5;\n    background-color: var(--low-priority-color);\n    border: 0.6vh solid var(--target-color);\n    border-radius: 2vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--target-color);\n    gap: 0.5vh;\n    font-size: 2.5vh;\n}\n\n.addProjectButton {\n    width: 25vh;\n    height: 5vh;\n    border: 0.4vh solid var(--target-color);\n    background-color: var(--medium-priority-color);\n    border-radius: 2vh;\n    font-family: 'elements';\n    color: var(--target-color);\n    font-size: 3vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n\n#projectNameInputText {\n    border: none;\n    border-radius: 1vh;\n    font-family: 'elements';\n    transition: 0.1s;\n    width: 23vh;\n    height: 3vh;\n    color: var(--target-color);\n    transition: 0.3s;\n}\n#projectNameInputText:focus {\n    font-size: 2vh;\n    outline: none;\n    border: 0.5vh solid var(--high-priority-color);\n    color: var(--target-color);\n    caret-color: var(--high-priority-color);\n}\n.projectNameConfirmBtn, .projectNameCancelBtn{\n    height: 3.5vh;\n    width: 3.5vh;\n    background-color: white;\n    border: 0.4vh solid var(--target-color);\n    border-radius: 1vh;\n    color: var(--target-color);\n    font-size: 1.7vh;\n    font-weight: bold;\n}\n.validationMessageDiv {\n    display: none;\n}\n.validationMessageDiv.visible {\n    display: block;\n    position: absolute;\n    font-size: 1.5vh;\n    background-color: var(--medium-priority-color);\n    color: var(--separator-red);\n    padding: 0.4vh 1vh;\n    margin-bottom: 8vh;\n    margin-left: 17vh;\n    border-radius: 1vh;\n    border: 0.4vh solid;\n}\n.todosDiv {\n    grid-column: 2 / 3;\n    height: 100%;\n    display: grid;\n    grid-template-rows: 1fr 0.5fr 10fr 1fr;\n    margin: 0 3vh 0 3vh;\n    color: var(--target-color);\n    border-radius: 1vh;\n}\n.todoDivHeader {\n    grid-row: 1 / 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 3.5vh;\n    color: var(--target-color);\n    font-family: 'elements';\n}\n.todoDataHeaderDiv {\n    grid-row: 2 / 3;\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr 4fr 1fr;\n    padding: 0.25% 0.5%;\n    font-size: 2.5vh;\n    color: var(--target-color);\n    font-family: 'elements';\n    border-bottom: 1vh solid var(--separator-red);\n}\n.todoDataHeaderDiv > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.allTodosButton {\n    background-color: var(--low-priority-color);\n    align-self: center;\n    justify-self: end;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0.3%;\n    margin-right: 2%;\n    \n}\n.todosContainer {\n    grid-row: 3 / 4;\n    margin-top: 1.5vh;\n}\n.todoDiv {\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr 4fr 0.5fr 0.25fr 0.25fr;\n    margin: 1% 0;\n    height: 5vh;\n    align-items: center;\n    border-radius: 1vh;\n    padding-right: 1vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.High {\n    background-color: var(--high-priority-color);\n}\n.Medium {\n    background-color: var(--medium-priority-color);\n}\n.Low {\n    background-color: var(--low-priority-color);\n}\n.moveTodoProjects{\n    position: relative;\n    display: inline-block;\n}\n.moveTodoDropdownHomeProject {\n    padding: 1vh;\n    background-color: var(--porojects-divs-background);\n    border-radius: 2vh;\n    margin-bottom: 1vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.moveTodoDropdownProjectDiv {\n    padding: 1vh;\n    background-color: var(--porojects-divs-background);\n    border-radius: 2vh;\n    margin-bottom: 1.3vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.moveTodoDropdownProjectDiv, .moveTodoDropdownHomeProject {\n    text-align: center;\n}\n.moveTodoDropdownProjectDiv:hover, .moveTodoDropdownHomeProject:hover {\n    border: 0.4vh solid var(--separator-red);\n}\n.moveTodoProjectsDropdownContainer {\n    display: block;\n    position: absolute;\n    background-color: var(--target-color);\n    border-radius: 2vh;\n    min-width: 30vh;\n    margin-right: 5.9vh;\n    color: white;\n    border: 0.5vh solid white;\n    right: 0;\n    top: 100%;\n    padding: 20px;\n    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;\n    z-index: 1;\n}\n.todoDiv > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.targetTodo {\n    border: 0.6vh solid var(--target-color);\n}\n.todoOptionsContainer {\n    display: grid;\n    grid-template-columns: 0.75fr 2fr 0.5fr 1.2fr 0.5fr 0.75fr 0.75fr 0.75fr 0.5fr 3fr 0.25fr 0.25fr;\n    grid-template-rows: 1fr 1.5fr;\n    grid-row: 4 / 5;\n    background-color: var(--low-priority-color);\n    padding: 5px;\n    justify-content: center;\n    align-items: center;\n    border: 1vh solid var(--target-color);\n    border-radius: 2vh;\n    gap: 0.5vh;\n}\n.todoOptionsContainer > input[type=text], input[type=textarea], input[type=date], input[type=time], select {\n    border: none;\n    height: 3vh;\n    border-radius: 1vh;\n    font-family: 'elements';\n    color: var(--target-color);\n    background-color: white;\n    padding: 0 1vh;\n    transition: 0.3s;\n}\n.todoOptionsContainer > input[type=text]:focus, input[type=textarea]:focus, input[type=date]:focus, input[type=time]:focus {\n    outline: none;\n    border: 0.5vh solid var(--high-priority-color);\n    color: var(--target-color);\n    caret-color: var(--high-priority-color);\n}\n.todoCreateConfirmBtn, .todoCreateCancelBtn, .todoEditConfirmBtn {\n    width: 3.5vh;\n    height: 3vh;\n    background-color: white;\n    border: 0.4vh solid var(--target-color);\n    border-radius: 1vh;\n    color: var(--target-color);\n    font-size: 1.6vh;\n    font-weight: bold;\n}\n.addTODOButton {\n    grid-column: 1 / 13;\n    grid-row: 1 / 3;\n    width: 30%;\n    height: 80%;\n    align-self: center;\n    justify-self: center;\n    width: 38vh;\n    height: 7vh;\n    border: 0.7vh solid var(--target-color);\n    background-color: var(--medium-priority-color);\n    border-radius: 2vh;\n    font-family: 'elements';\n    color: var(--target-color);\n    font-size: 3vh;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.confirmAndDropdown {\n    position: relative;\n    display: inline-block;\n}\n\n.todoDataError {\n    position: absolute;\n    display: block;\n    z-index: 1;\n    width: max-content;\n    right: 0.5vh;\n    bottom: 3.3vh;\n    background-color: var(--medium-priority-color);\n    color: var(--separator-red);\n    margin-bottom: 0.3vh;\n    border: solid;\n    padding: 0.5vh 3vh;\n    border-radius: 1vh;\n\n}\n.todoOptionsContainer > label {\n    justify-self: center;\n}\n.todoCreateDivHeader {\n    grid-column: 1 / 13;\n    grid-row: 1 / 2;\n    justify-self: center;\n    border-bottom: 0.5vh solid var(--separator-red);\n}\n.todoEditDivHeader {\n    grid-column: 1 / 13;\n    grid-row: 1 / 2;\n    justify-self: center;\n    border-bottom: 0.5vh solid var(--separator-red);\n}\n.footer {\n    grid-row: 3 / 4;\n    display: flex;\n    align-items: center;\n    height: 4vh;\n    justify-content: center;\n    gap: 1%;\n    background-color: white;\n    margin-top: 0.5vh;\n}\n.gitIcon {\n    height: 3vh;\n}\n.outdatedTodo{\n    text-decoration: line-through;\n    background-color: gray;\n}\n.gitIcon {\n    transition: transform .4s ease-in-out;\n}\n.gitIcon:hover {\n    color: var(--separator-red);\n    transform: rotate(360deg) scale(1.2);\n}\n\n.todoCreateConfirmBtn, .todoCreateCancelBtn, .todoEditConfirmBtn,\n .addProjectButton, .addTODOButton, .moveTodoButton, .editTodoButton,\n .deleteTodoButton, .editProjectButton, .deleteProjectButton, .confirmNewNameButton, \n .projectNameConfirmBtn, .projectNameCancelBtn, .gitIcon {\n    cursor:pointer;\n }\n .todoCreateConfirmBtn, .todoCreateCancelBtn, .todoEditConfirmBtn,\n.moveTodoButton, .editTodoButton, .deleteTodoButton, .editProjectButton, \n.deleteProjectButton, .confirmNewNameButton, .projectNameConfirmBtn, .projectNameCancelBtn {\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n }"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FB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QTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRSx3QkFBd0IsNENBQTRDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QWdCO0FBQ2hCLHNFQUFVO0FBQ1Ysc0VBQVU7QUFDVix3RUFBWTtBQUNaLGtGQUFxQjtBQUNyQix1RkFBaUI7QUFDakIsK0VBQWtCO0FBQ2xCLHFGQUF1QjtBQUN2QixnRkFBWTtBQUNaLHNGQUFxQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1hZGRQcm9qZWN0LWNyZWF0ZS1hZGRCdG4uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00tYWRkUHJvamVjdC1zd2FwLUJ0bi10by1Gb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFRvZG8tY3JlYXRlLWFkZEJ0bi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1hZGRUb2RvLXN3YXAtQnRuLXRvLUZvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00tYm9keS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1jcmVhdGUtZWRpdC1wcm9qZWN0LWRyb3Bkb3duLWNvbnRlbnRzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLWVkaXRUb2RvLXN3YXAtdG8tRm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00taGVhZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1wcmltZS1kaXZzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLXJlZnJlc2gtVE9ET1MtY29udGFpbmVyLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLXNob3ctVE9ETy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1zaG93LW1vdmUtVE9ETy1kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS1zaG93LXByb2plY3RzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMvRE9NLXdpbmRvdy1saXN0ZW5lci1yZW1vdmUtZWRpdFByb2plY3QtZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLWZ1bmN0aW9ucy9ET00td2luZG93LWxpc3RlbmVyLXJlbW92ZS1tb3ZlVG9kby1kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zL0RPTS13aW5kb3ctbGlzdGVuZXItc3dhcC10b2RvLWZvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL1RPRE8tY3JlYXRvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvYWRkLXByb2plY3QtYnV0dG9uLWV2ZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9hZGQtcHJvamVjdC1kaXZzLWV2ZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9hZGQtcHJvamVjdC1mb3JtLWJ1dHRvbnMtZXZlbnRzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9hZGQtdG9kby1idXR0b24tZXZlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2FkZC10b2RvLWZvcm0tZXZlbnRzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9jaGVjay10b2RvLW91dGRhdGVkLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9jcmVhdGUtbmV3LXRvZG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2VkaXQtdG9kby1mb3JtLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvZ2V0LWRhdGEtZnJvbS1sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9ob21lRGl2LWV2ZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9sb2NhbC1zdG9yYWdlLW1lbmFnZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL3Byb2plY3QtY3JlYXRvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvcHJvamVjdC1tZW5hZ2VyLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy90b2RvRGl2c0V2ZW50cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2VsZW1lbnRzLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy90ZXh0LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICd0ZXh0JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuOnJvb3Qge1xcbiAgICAvKiBjb2xvcnMgKi9cXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjYmFlNmZkO1xcbiAgICAtLXRhcmdldC1jb2xvcjogIzNiODJmNjtcXG4gICAgLS1wb3JvamVjdHMtZGl2cy1iYWNrZ3JvdW5kOiAjMzhiZGY4O1xcbiAgICAtLWxvdy1wcmlvcml0eS1jb2xvcjogI2JiZjdkMDtcXG4gICAgLS1tZWRpdW0tcHJpb3JpdHktY29sb3I6ICNmZWYwOGE7XFxuICAgIC0taGlnaC1wcmlvcml0eS1jb2xvcjogI2ZkYTRhZjtcXG4gICAgLS1vdXRkYXRlZC1jb2xvcjogI2U1ZTdlYjtcXG4gICAgLS1zZXBhcmF0b3ItcmVkOiAjZTExZDQ4O1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG59XFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEyZnIgMC4zZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG4uaGVhZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDExdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG4ubG9nbyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgZm9udC1zaXplOiA1dmg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuLnByb2plY3RzRGl2IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDE5NiwgMTgyKTsgKi9cXG4gICAgYm9yZGVyLXJpZ2h0OiAxdmggc29saWQgdmFyKC0tc2VwYXJhdG9yLXJlZCk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJ2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDEwZnIgMWZyO1xcbn1cXG4ucHJvamVjdHNEaXZIZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zdmg7XFxufVxcbi5ob21lUHJvamVjdERpdiB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbn1cXG4ucHJvamVjdHNDb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDIyMywgMTc2KTsgKi9cXG59XFxuLnRhcmdldCB7XFxuICAgIGJvcmRlcjogMC42dmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG59XFxuLnByb2plY3REaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3JvamVjdHMtZGl2cy1iYWNrZ3JvdW5kKTtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIGZvbnQtc2l6ZTogMi41dmg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjF2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxdmg7XFxuICAgIG1hcmdpbjogMXZoIDAgMXZoIDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXG59XFxuLmVkaXRUb2RvQnV0dG9uLCAuZGVsZXRlVG9kb0J1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMy41dmg7XFxuICAgIGhlaWdodDogMy41dmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbn1cXG4ubW92ZVRvZG9CdXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxufVxcbi5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmVkaXRQcm9qZWN0QnV0dG9uIHtcXG4gICAgd2lkdGg6IDN2aDtcXG4gICAgaGVpZ2h0OiAyLjl2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4OyBcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxufVxcbi5kZWxldGVQcm9qZWN0QnV0dG9uIHtcXG4gICAgd2lkdGg6IDN2aDtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbn1cXG4uZHJvcGRvd24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYm90dG9tOiAwLjJ2aDtcXG5cXG59XFxuLmRyb3Bkb3duQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIHdpZHRoOiAyN3ZoO1xcbiAgICBib3gtc2hhZG93OiByZ2IoMzgsIDU3LCA3NykgMHB4IDIwcHggMzBweCAtMTBweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBwYWRkaW5nOiAxdmggMXZoIDEuNXZoIDF2aDtcXG4gICAgZm9udC1zaXplOiAxLjl2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgbWFyZ2luLXRvcDogMC4zdmg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2VkaXRQcm9qZWN0TmFtZSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41dmg7XFxuICAgIG1hcmdpbi10b3A6IDAuNnZoO1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjR2aDtcXG59XFxuI2VkaXRQcm9qZWN0TmFtZTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMC4zdmggc29saWQgdmFyKC0taGlnaC1wcmlvcml0eS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBjYXJldC1jb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eS1jb2xvcik7XFxufVxcbi5jb25maXJtTmV3TmFtZUJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43dmg7XFxuICAgIGZvbnQtc2l6ZTogMS43dmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmVkaXRQcm9qZWN0RXJyb3JEaXYge1xcbiAgICBmb250LXNpemU6IDEuNXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tcHJpb3JpdHktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2VwYXJhdG9yLXJlZCk7XFxuICAgIHBhZGRpbmc6IDAuNHZoIDF2aDtcXG4gICAgbWFyZ2luLXRvcDogMXZoO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGJvcmRlcjogMC40dmggc29saWQ7XFxufVxcblxcbi5hZGRQcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eS1jb2xvcik7XFxuICAgIGJvcmRlcjogMC42dmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGdhcDogMC41dmg7XFxuICAgIGZvbnQtc2l6ZTogMi41dmg7XFxufVxcblxcbi5hZGRQcm9qZWN0QnV0dG9uIHtcXG4gICAgd2lkdGg6IDI1dmg7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBib3JkZXI6IDAuNHZoIHNvbGlkIHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJ2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXG59XFxuXFxuI3Byb2plY3ROYW1lSW5wdXRUZXh0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgICB3aWR0aDogMjN2aDtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4jcHJvamVjdE5hbWVJbnB1dFRleHQ6Zm9jdXMge1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAwLjV2aCBzb2xpZCB2YXIoLS1oaWdoLXByaW9yaXR5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGNhcmV0LWNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5LWNvbG9yKTtcXG59XFxuLnByb2plY3ROYW1lQ29uZmlybUJ0biwgLnByb2plY3ROYW1lQ2FuY2VsQnRue1xcbiAgICBoZWlnaHQ6IDMuNXZoO1xcbiAgICB3aWR0aDogMy41dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDAuNHZoIHNvbGlkIHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMS43dmg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4udmFsaWRhdGlvbk1lc3NhZ2VEaXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4udmFsaWRhdGlvbk1lc3NhZ2VEaXYudmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtc2l6ZTogMS41dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZXBhcmF0b3ItcmVkKTtcXG4gICAgcGFkZGluZzogMC40dmggMXZoO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4dmg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxN3ZoO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGJvcmRlcjogMC40dmggc29saWQ7XFxufVxcbi50b2Rvc0RpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjVmciAxMGZyIDFmcjtcXG4gICAgbWFyZ2luOiAwIDN2aCAwIDN2aDtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG59XFxuLnRvZG9EaXZIZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMuNXZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxufVxcbi50b2RvRGF0YUhlYWRlckRpdiB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmciAxZnIgNGZyIDFmcjtcXG4gICAgcGFkZGluZzogMC4yNSUgMC41JTtcXG4gICAgZm9udC1zaXplOiAyLjV2aDtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICBib3JkZXItYm90dG9tOiAxdmggc29saWQgdmFyKC0tc2VwYXJhdG9yLXJlZCk7XFxufVxcbi50b2RvRGF0YUhlYWRlckRpdiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYWxsVG9kb3NCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHktY29sb3IpO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC4zJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcXG4gICAgXFxufVxcbi50b2Rvc0NvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgbWFyZ2luLXRvcDogMS41dmg7XFxufVxcbi50b2RvRGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmciAxZnIgNGZyIDAuNWZyIDAuMjVmciAwLjI1ZnI7XFxuICAgIG1hcmdpbjogMSUgMDtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgcGFkZGluZy1yaWdodDogMXZoO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbn1cXG4uSGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xcbn1cXG4uTWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yKTtcXG59XFxuLkxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eS1jb2xvcik7XFxufVxcbi5tb3ZlVG9kb1Byb2plY3Rze1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLm1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9yb2plY3RzLWRpdnMtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJ2aDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbn1cXG4ubW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYge1xcbiAgICBwYWRkaW5nOiAxdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvcm9qZWN0cy1kaXZzLWJhY2tncm91bmQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAydmg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuM3ZoO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbn1cXG4ubW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYsIC5tb3ZlVG9kb0Ryb3Bkb3duSG9tZVByb2plY3Qge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdjpob3ZlciwgLm1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdDpob3ZlciB7XFxuICAgIGJvcmRlcjogMC40dmggc29saWQgdmFyKC0tc2VwYXJhdG9yLXJlZCk7XFxufVxcbi5tb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAydmg7XFxuICAgIG1pbi13aWR0aDogMzB2aDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1Ljl2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDAuNXZoIHNvbGlkIHdoaXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiByZ2IoMzgsIDU3LCA3NykgMHB4IDIwcHggMzBweCAtMTBweDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuLnRvZG9EaXYgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhcmdldFRvZG8ge1xcbiAgICBib3JkZXI6IDAuNnZoIHNvbGlkIHZhcigtLXRhcmdldC1jb2xvcik7XFxufVxcbi50b2RvT3B0aW9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43NWZyIDJmciAwLjVmciAxLjJmciAwLjVmciAwLjc1ZnIgMC43NWZyIDAuNzVmciAwLjVmciAzZnIgMC4yNWZyIDAuMjVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMS41ZnI7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LWNvbG9yKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxdmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnZoO1xcbiAgICBnYXA6IDAuNXZoO1xcbn1cXG4udG9kb09wdGlvbnNDb250YWluZXIgPiBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXRleHRhcmVhXSwgaW5wdXRbdHlwZT1kYXRlXSwgaW5wdXRbdHlwZT10aW1lXSwgc2VsZWN0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwIDF2aDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLnRvZG9PcHRpb25zQ29udGFpbmVyID4gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT10ZXh0YXJlYV06Zm9jdXMsIGlucHV0W3R5cGU9ZGF0ZV06Zm9jdXMsIGlucHV0W3R5cGU9dGltZV06Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDAuNXZoIHNvbGlkIHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgY2FyZXQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xcbn1cXG4udG9kb0NyZWF0ZUNvbmZpcm1CdG4sIC50b2RvQ3JlYXRlQ2FuY2VsQnRuLCAudG9kb0VkaXRDb25maXJtQnRuIHtcXG4gICAgd2lkdGg6IDMuNXZoO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMC40dmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjZ2aDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5hZGRUT0RPQnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAxMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDM4dmg7XFxuICAgIGhlaWdodDogN3ZoO1xcbiAgICBib3JkZXI6IDAuN3ZoIHNvbGlkIHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJ2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXG59XFxuLmNvbmZpcm1BbmREcm9wZG93biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udG9kb0RhdGFFcnJvciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgcmlnaHQ6IDAuNXZoO1xcbiAgICBib3R0b206IDMuM3ZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tcHJpb3JpdHktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2VwYXJhdG9yLXJlZCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM3ZoO1xcbiAgICBib3JkZXI6IHNvbGlkO1xcbiAgICBwYWRkaW5nOiAwLjV2aCAzdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG5cXG59XFxuLnRvZG9PcHRpb25zQ29udGFpbmVyID4gbGFiZWwge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLnRvZG9DcmVhdGVEaXZIZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDEzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjV2aCBzb2xpZCB2YXIoLS1zZXBhcmF0b3ItcmVkKTtcXG59XFxuLnRvZG9FZGl0RGl2SGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAxMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC41dmggc29saWQgdmFyKC0tc2VwYXJhdG9yLXJlZCk7XFxufVxcbi5mb290ZXIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNHZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDAuNXZoO1xcbn1cXG4uZ2l0SWNvbiB7XFxuICAgIGhlaWdodDogM3ZoO1xcbn1cXG4ub3V0ZGF0ZWRUb2Rve1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuLmdpdEljb24ge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG4uZ2l0SWNvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1zZXBhcmF0b3ItcmVkKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cXG5cXG4udG9kb0NyZWF0ZUNvbmZpcm1CdG4sIC50b2RvQ3JlYXRlQ2FuY2VsQnRuLCAudG9kb0VkaXRDb25maXJtQnRuLFxcbiAuYWRkUHJvamVjdEJ1dHRvbiwgLmFkZFRPRE9CdXR0b24sIC5tb3ZlVG9kb0J1dHRvbiwgLmVkaXRUb2RvQnV0dG9uLFxcbiAuZGVsZXRlVG9kb0J1dHRvbiwgLmVkaXRQcm9qZWN0QnV0dG9uLCAuZGVsZXRlUHJvamVjdEJ1dHRvbiwgLmNvbmZpcm1OZXdOYW1lQnV0dG9uLCBcXG4gLnByb2plY3ROYW1lQ29uZmlybUJ0biwgLnByb2plY3ROYW1lQ2FuY2VsQnRuLCAuZ2l0SWNvbiB7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiB9XFxuIC50b2RvQ3JlYXRlQ29uZmlybUJ0biwgLnRvZG9DcmVhdGVDYW5jZWxCdG4sIC50b2RvRWRpdENvbmZpcm1CdG4sXFxuLm1vdmVUb2RvQnV0dG9uLCAuZWRpdFRvZG9CdXR0b24sIC5kZWxldGVUb2RvQnV0dG9uLCAuZWRpdFByb2plY3RCdXR0b24sIFxcbi5kZWxldGVQcm9qZWN0QnV0dG9uLCAuY29uZmlybU5ld05hbWVCdXR0b24sIC5wcm9qZWN0TmFtZUNvbmZpcm1CdG4sIC5wcm9qZWN0TmFtZUNhbmNlbEJ0biB7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxuIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QiwyREFBaUQ7SUFDakQs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O0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsOENBQThDO0lBQzlDLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLCtDQUErQztBQUNuRDtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsK0NBQStDO0FBQ25EO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLE9BQU87SUFDUCx1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHFDQUFxQztBQUN6QztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLG9DQUFvQztBQUN4Qzs7QUFFQTs7OztJQUlJLGNBQWM7Q0FDakI7Q0FDQTs7O0lBR0csMkNBQTJDO0NBQzlDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL2VsZW1lbnRzLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3RleHQnO1xcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvdGV4dC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG5cXG46cm9vdCB7XFxuICAgIC8qIGNvbG9ycyAqL1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNiYWU2ZmQ7XFxuICAgIC0tdGFyZ2V0LWNvbG9yOiAjM2I4MmY2O1xcbiAgICAtLXBvcm9qZWN0cy1kaXZzLWJhY2tncm91bmQ6ICMzOGJkZjg7XFxuICAgIC0tbG93LXByaW9yaXR5LWNvbG9yOiAjYmJmN2QwO1xcbiAgICAtLW1lZGl1bS1wcmlvcml0eS1jb2xvcjogI2ZlZjA4YTtcXG4gICAgLS1oaWdoLXByaW9yaXR5LWNvbG9yOiAjZmRhNGFmO1xcbiAgICAtLW91dGRhdGVkLWNvbG9yOiAjZTVlN2ViO1xcbiAgICAtLXNlcGFyYXRvci1yZWQ6ICNlMTFkNDg7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbn1cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTJmciAwLjNmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcbi5oZWFkIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTF2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcbi5sb2dvIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBmb250LXNpemU6IDV2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG4ucHJvamVjdHNEaXYge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMTk2LCAxODIpOyAqL1xcbiAgICBib3JkZXItcmlnaHQ6IDF2aCBzb2xpZCB2YXIoLS1zZXBhcmF0b3ItcmVkKTtcXG4gICAgcGFkZGluZy1yaWdodDogMnZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMTBmciAxZnI7XFxufVxcbi5wcm9qZWN0c0RpdkhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG4gICAgZm9udC1zaXplOiAzdmg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjN2aDtcXG59XFxuLmhvbWVQcm9qZWN0RGl2IHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxufVxcbi5wcm9qZWN0c0NvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjIzLCAxNzYpOyAqL1xcbn1cXG4udGFyZ2V0IHtcXG4gICAgYm9yZGVyOiAwLjZ2aCBzb2xpZCB2YXIoLS10YXJnZXQtY29sb3IpO1xcbn1cXG4ucHJvamVjdERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvcm9qZWN0cy1kaXZzLWJhY2tncm91bmQpO1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG4gICAgZm9udC1zaXplOiAyLjV2aDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXZoO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgbWFyZ2luOiAxdmggMCAxdmggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbn1cXG4uZWRpdFRvZG9CdXR0b24sIC5kZWxldGVUb2RvQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzLjV2aDtcXG4gICAgaGVpZ2h0OiAzLjV2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxufVxcbi5tb3ZlVG9kb0J1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG59XFxuLnByb2plY3RCdXR0b25zQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxdmg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZWRpdFByb2plY3RCdXR0b24ge1xcbiAgICB3aWR0aDogM3ZoO1xcbiAgICBoZWlnaHQ6IDIuOXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHg7IFxcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG59XFxuLmRlbGV0ZVByb2plY3RCdXR0b24ge1xcbiAgICB3aWR0aDogM3ZoO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4OyBcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxufVxcbi5kcm9wZG93biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3R0b206IDAuMnZoO1xcblxcbn1cXG4uZHJvcGRvd25Db250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gICAgd2lkdGg6IDI3dmg7XFxuICAgIGJveC1zaGFkb3c6IHJnYigzOCwgNTcsIDc3KSAwcHggMjBweCAzMHB4IC0xMHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIHBhZGRpbmc6IDF2aCAxdmggMS41dmggMXZoO1xcbiAgICBmb250LXNpemU6IDEuOXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBtYXJnaW4tdG9wOiAwLjN2aDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jZWRpdFByb2plY3ROYW1lIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjV2aDtcXG4gICAgbWFyZ2luLXRvcDogMC42dmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNHZoO1xcbn1cXG4jZWRpdFByb2plY3ROYW1lOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAwLjN2aCBzb2xpZCB2YXIoLS1oaWdoLXByaW9yaXR5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGNhcmV0LWNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5LWNvbG9yKTtcXG59XFxuLmNvbmZpcm1OZXdOYW1lQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjd2aDtcXG4gICAgZm9udC1zaXplOiAxLjd2aDtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uZWRpdFByb2plY3RFcnJvckRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMS41dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZXBhcmF0b3ItcmVkKTtcXG4gICAgcGFkZGluZzogMC40dmggMXZoO1xcbiAgICBtYXJnaW4tdG9wOiAxdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgYm9yZGVyOiAwLjR2aCBzb2xpZDtcXG59XFxuXFxuLmFkZFByb2plY3RDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LWNvbG9yKTtcXG4gICAgYm9yZGVyOiAwLjZ2aCBzb2xpZCB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAydmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZ2FwOiAwLjV2aDtcXG4gICAgZm9udC1zaXplOiAyLjV2aDtcXG59XFxuXFxuLmFkZFByb2plY3RCdXR0b24ge1xcbiAgICB3aWR0aDogMjV2aDtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGJvcmRlcjogMC40dmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnZoO1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbn1cXG5cXG4jcHJvamVjdE5hbWVJbnB1dFRleHQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICAgIHdpZHRoOiAyM3ZoO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbiNwcm9qZWN0TmFtZUlucHV0VGV4dDpmb2N1cyB7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDAuNXZoIHNvbGlkIHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgY2FyZXQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xcbn1cXG4ucHJvamVjdE5hbWVDb25maXJtQnRuLCAucHJvamVjdE5hbWVDYW5jZWxCdG57XFxuICAgIGhlaWdodDogMy41dmg7XFxuICAgIHdpZHRoOiAzLjV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMC40dmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjd2aDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi52YWxpZGF0aW9uTWVzc2FnZURpdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi52YWxpZGF0aW9uTWVzc2FnZURpdi52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiAxLjV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNlcGFyYXRvci1yZWQpO1xcbiAgICBwYWRkaW5nOiAwLjR2aCAxdmg7XFxuICAgIG1hcmdpbi1ib3R0b206IDh2aDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE3dmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgYm9yZGVyOiAwLjR2aCBzb2xpZDtcXG59XFxuLnRvZG9zRGl2IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDAuNWZyIDEwZnIgMWZyO1xcbiAgICBtYXJnaW46IDAgM3ZoIDAgM3ZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbn1cXG4udG9kb0RpdkhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMy41dmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG59XFxuLnRvZG9EYXRhSGVhZGVyRGl2IHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyIDFmciA0ZnIgMWZyO1xcbiAgICBwYWRkaW5nOiAwLjI1JSAwLjUlO1xcbiAgICBmb250LXNpemU6IDIuNXZoO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdlbGVtZW50cyc7XFxuICAgIGJvcmRlci1ib3R0b206IDF2aCBzb2xpZCB2YXIoLS1zZXBhcmF0b3ItcmVkKTtcXG59XFxuLnRvZG9EYXRhSGVhZGVyRGl2ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hbGxUb2Rvc0J1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eS1jb2xvcik7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjMlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xcbiAgICBcXG59XFxuLnRvZG9zQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBtYXJnaW4tdG9wOiAxLjV2aDtcXG59XFxuLnRvZG9EaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyIDFmciA0ZnIgMC41ZnIgMC4yNWZyIDAuMjVmcjtcXG4gICAgbWFyZ2luOiAxJSAwO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdmg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxufVxcbi5IaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eS1jb2xvcik7XFxufVxcbi5NZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tcHJpb3JpdHktY29sb3IpO1xcbn1cXG4uTG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LWNvbG9yKTtcXG59XFxuLm1vdmVUb2RvUHJvamVjdHN7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4ubW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0IHtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3JvamVjdHMtZGl2cy1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnZoO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxdmg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxufVxcbi5tb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdiB7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9yb2plY3RzLWRpdnMtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJ2aDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS4zdmg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxufVxcbi5tb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdiwgLm1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2OmhvdmVyLCAubW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAwLjR2aCBzb2xpZCB2YXIoLS1zZXBhcmF0b3ItcmVkKTtcXG59XFxuLm1vdmVUb2RvUHJvamVjdHNEcm9wZG93bkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJ2aDtcXG4gICAgbWluLXdpZHRoOiAzMHZoO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUuOXZoO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMC41dmggc29saWQgd2hpdGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYigzOCwgNTcsIDc3KSAwcHggMjBweCAzMHB4IC0xMHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG4udG9kb0RpdiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFyZ2V0VG9kbyB7XFxuICAgIGJvcmRlcjogMC42dmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG59XFxuLnRvZG9PcHRpb25zQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjc1ZnIgMmZyIDAuNWZyIDEuMmZyIDAuNWZyIDAuNzVmciAwLjc1ZnIgMC43NWZyIDAuNWZyIDNmciAwLjI1ZnIgMC4yNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxLjVmcjtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHktY29sb3IpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDF2aCBzb2xpZCB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAydmg7XFxuICAgIGdhcDogMC41dmg7XFxufVxcbi50b2RvT3B0aW9uc0NvbnRhaW5lciA+IGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9dGV4dGFyZWFdLCBpbnB1dFt0eXBlPWRhdGVdLCBpbnB1dFt0eXBlPXRpbWVdLCBzZWxlY3Qge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnZWxlbWVudHMnO1xcbiAgICBjb2xvcjogdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAgMXZoO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4udG9kb09wdGlvbnNDb250YWluZXIgPiBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXRleHRhcmVhXTpmb2N1cywgaW5wdXRbdHlwZT1kYXRlXTpmb2N1cywgaW5wdXRbdHlwZT10aW1lXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMC41dmggc29saWQgdmFyKC0taGlnaC1wcmlvcml0eS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBjYXJldC1jb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eS1jb2xvcik7XFxufVxcbi50b2RvQ3JlYXRlQ29uZmlybUJ0biwgLnRvZG9DcmVhdGVDYW5jZWxCdG4sIC50b2RvRWRpdENvbmZpcm1CdG4ge1xcbiAgICB3aWR0aDogMy41dmg7XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAwLjR2aCBzb2xpZCB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGNvbG9yOiB2YXIoLS10YXJnZXQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuNnZoO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmFkZFRPRE9CdXR0b24ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDEzO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMzh2aDtcXG4gICAgaGVpZ2h0OiA3dmg7XFxuICAgIGJvcmRlcjogMC43dmggc29saWQgdmFyKC0tdGFyZ2V0LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnZoO1xcbiAgICBmb250LWZhbWlseTogJ2VsZW1lbnRzJztcXG4gICAgY29sb3I6IHZhcigtLXRhcmdldC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbn1cXG4uY29uZmlybUFuZERyb3Bkb3duIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi50b2RvRGF0YUVycm9yIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICByaWdodDogMC41dmg7XFxuICAgIGJvdHRvbTogMy4zdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZXBhcmF0b3ItcmVkKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zdmg7XFxuICAgIGJvcmRlcjogc29saWQ7XFxuICAgIHBhZGRpbmc6IDAuNXZoIDN2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcblxcbn1cXG4udG9kb09wdGlvbnNDb250YWluZXIgPiBsYWJlbCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4udG9kb0NyZWF0ZURpdkhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMTM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNXZoIHNvbGlkIHZhcigtLXNlcGFyYXRvci1yZWQpO1xcbn1cXG4udG9kb0VkaXREaXZIZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDEzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjV2aCBzb2xpZCB2YXIoLS1zZXBhcmF0b3ItcmVkKTtcXG59XFxuLmZvb3RlciB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA0dmg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDElO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMC41dmg7XFxufVxcbi5naXRJY29uIHtcXG4gICAgaGVpZ2h0OiAzdmg7XFxufVxcbi5vdXRkYXRlZFRvZG97XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4uZ2l0SWNvbiB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcbi5naXRJY29uOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXNlcGFyYXRvci1yZWQpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxufVxcblxcbi50b2RvQ3JlYXRlQ29uZmlybUJ0biwgLnRvZG9DcmVhdGVDYW5jZWxCdG4sIC50b2RvRWRpdENvbmZpcm1CdG4sXFxuIC5hZGRQcm9qZWN0QnV0dG9uLCAuYWRkVE9ET0J1dHRvbiwgLm1vdmVUb2RvQnV0dG9uLCAuZWRpdFRvZG9CdXR0b24sXFxuIC5kZWxldGVUb2RvQnV0dG9uLCAuZWRpdFByb2plY3RCdXR0b24sIC5kZWxldGVQcm9qZWN0QnV0dG9uLCAuY29uZmlybU5ld05hbWVCdXR0b24sIFxcbiAucHJvamVjdE5hbWVDb25maXJtQnRuLCAucHJvamVjdE5hbWVDYW5jZWxCdG4sIC5naXRJY29uIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuIH1cXG4gLnRvZG9DcmVhdGVDb25maXJtQnRuLCAudG9kb0NyZWF0ZUNhbmNlbEJ0biwgLnRvZG9FZGl0Q29uZmlybUJ0bixcXG4ubW92ZVRvZG9CdXR0b24sIC5lZGl0VG9kb0J1dHRvbiwgLmRlbGV0ZVRvZG9CdXR0b24sIC5lZGl0UHJvamVjdEJ1dHRvbiwgXFxuLmRlbGV0ZVByb2plY3RCdXR0b24sIC5jb25maXJtTmV3TmFtZUJ1dHRvbiwgLnByb2plY3ROYW1lQ29uZmlybUJ0biwgLnByb2plY3ROYW1lQ2FuY2VsQnRuIHtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcXG4gfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufVxuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIGRpcnR5T3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2VlaywgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIHNlY29uZCBhcmd1bWVudCBpcyBub3cgcmVxdWlyZWQgZm9yIHRoZSBzYWtlIG9mIGV4cGxpY2l0bmVzcy5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSkpXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSwgXCJ5eXl5LU1NLWRkJ1QnSEg6bW06c3MuU1NTeHh4XCIpXG4gKiAgIGBgYFxuICpcbiAqIC0gTmV3IGZvcm1hdCBzdHJpbmcgQVBJIGZvciBgZm9ybWF0YCBmdW5jdGlvblxuICogICB3aGljaCBpcyBiYXNlZCBvbiBbVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1XShodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlKS5cbiAqICAgU2VlIFt0aGlzIHBvc3RdKGh0dHBzOi8vYmxvZy5kYXRlLWZucy5vcmcvcG9zdC91bmljb2RlLXRva2Vucy1pbi1kYXRlLWZucy12Mi1zcmVhdHlraTkxamcpIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogLSBDaGFyYWN0ZXJzIGFyZSBub3cgZXNjYXBlZCB1c2luZyBzaW5nbGUgcXVvdGUgc3ltYm9scyAoYCdgKSBpbnN0ZWFkIG9mIHNxdWFyZSBicmFja2V0cy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCBkZWZhdWx0TG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKVsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gTm93IGBpc1ZhbGlkYCBkb2Vzbid0IHRocm93IGFuIGV4Y2VwdGlvblxuICogICBpZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgbm90IGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKiAgIEluc3RlYWQsIGFyZ3VtZW50IGlzIGNvbnZlcnRlZCBiZWZvcmVoYW5kIHVzaW5nIGB0b0RhdGVgLlxuICpcbiAqICAgRXhhbXBsZXM6XG4gKlxuICogICB8IGBpc1ZhbGlkYCBhcmd1bWVudCAgICAgICAgfCBCZWZvcmUgdjIuMC4wIHwgdjIuMC4wIG9ud2FyZCB8XG4gKiAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXxcbiAqICAgfCBgbmV3IERhdGUoKWAgICAgICAgICAgICAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnMjAxNi0wMS0wMScpYCAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcnKWAgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoMTQ4ODM3MDgzNTA4MSlgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZShOYU4pYCAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcyMDE2LTAxLTAxJ2AgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJydgICAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAxNDg4MzcwODM1MDgxYCAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYE5hTmAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqXG4gKiAgIFdlIGludHJvZHVjZSB0aGlzIGNoYW5nZSB0byBtYWtlICpkYXRlLWZucyogY29uc2lzdGVudCB3aXRoIEVDTUFTY3JpcHQgYmVoYXZpb3JcbiAqICAgdGhhdCB0cnkgdG8gY29lcmNlIGFyZ3VtZW50cyB0byB0aGUgZXhwZWN0ZWQgdHlwZVxuICogICAod2hpY2ggaXMgYWxzbyB0aGUgY2FzZSB3aXRoIG90aGVyICpkYXRlLWZucyogZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcblxuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiAodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIChkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjcmVhdGVBZGRQcm9qZWN0QnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdENvbnRhaW5lcicpO1xuICAgICAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTD0gXCJcIjtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2plY3RCdXR0b24nKTtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSBcIisgQUREXCI7XG4gICAgICAgIGFkZFByb2plY3RDb250YWluZXIuYXBwZW5kKGFkZFByb2plY3RCdXR0b24pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRkUHJvamVjdEJ0biIsImltcG9ydCBhZGRFdmVudEZ1bmN0aW9udHNUb0Zvcm0gZnJvbSAnLi4vZnVuY3Rpb25zL2FkZC1wcm9qZWN0LWZvcm0tYnV0dG9ucy1ldmVudHMuanMnO1xuXG5jb25zdCBzd2FwQ29udGVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0Q29udGFpbmVyJyk7XG4gICAgYWRkUHJvamVjdENvbnRhaW5lci5pbm5lckhUTUw9IFwiXCI7XG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3ROYW1lSW5wdXRUZXh0LnR5cGUgPSBcInRleHRcIjtcbiAgICBwcm9qZWN0TmFtZUlucHV0VGV4dC5pZCA9IFwicHJvamVjdE5hbWVJbnB1dFRleHRcIjtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xhYmVsJyk7XG4gICAgcHJvamVjdE5hbWVJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwicHJvamVjdE5hbWVJbnB1dFRleHRcIik7XG4gICAgcHJvamVjdE5hbWVJbnB1dExhYmVsLmlubmVySFRNTCA9IFwiUHJvamVjdCBuYW1lOlwiO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWVDb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdE5hbWVDb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TmFtZUNvbmZpcm1CdG5cIik7XG4gICAgcHJvamVjdE5hbWVDb25maXJtQnRuLmlubmVyVGV4dD0gXCLinJNcIjtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3ROYW1lQ2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TmFtZUNhbmNlbEJ0blwiKTtcbiAgICBwcm9qZWN0TmFtZUNhbmNlbEJ0bi5pbm5lclRleHQ9IFwi4pyVXCI7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uTWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhbGlkYXRpb25NZXNzYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ3ZhbGlkYXRpb25NZXNzYWdlRGl2Jyk7XG5cblxuICAgIGFkZFByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lSW5wdXRMYWJlbCwgcHJvamVjdE5hbWVJbnB1dFRleHQgLHByb2plY3ROYW1lQ29uZmlybUJ0biwgcHJvamVjdE5hbWVDYW5jZWxCdG4sIHZhbGlkYXRpb25NZXNzYWdlRGl2KTtcblxuICAgIGFkZEV2ZW50RnVuY3Rpb250c1RvRm9ybSgpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzd2FwQ29udGVudHMiLCJjb25zdCBjcmVhdGVBZGRUT0RPdEJ0biA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvT3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvT3B0aW9uc0NvbnRhaW5lcicpO1xuICAgIHRvZG9PcHRpb25zQ29udGFpbmVyLmlubmVySFRNTD0gXCJcIjtcbiAgICAgICAgY29uc3QgYWRkVE9ET0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUT0RPQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFRPRE9CdXR0b24nKTtcbiAgICAgICAgYWRkVE9ET0J1dHRvbi5pbm5lclRleHQgPSBcIisgQUREIG5ldyBUb0RvXCI7XG4gICAgICAgIHRvZG9PcHRpb25zQ29udGFpbmVyLmFwcGVuZChhZGRUT0RPQnV0dG9uKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkZFRPRE90QnRuIiwiaW1wb3J0IG5ld1RvZG9CdXR0b25zRXZlbnRzIGZyb20gJy4uL2Z1bmN0aW9ucy9hZGQtdG9kby1mb3JtLWV2ZW50cy5qcyc7XG5cbmNvbnN0IHN3YXB0b2RvT3B0aW9uc0NvbnRhaW5lckNvbnRlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9PcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9PcHRpb25zQ29udGFpbmVyJyk7XG4gICAgdG9kb09wdGlvbnNDb250YWluZXIuaW5uZXJIVE1MPSBcIlwiO1xuXG4gICAgY29uc3QgdG9kb05hbWVJbnB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9OYW1lSW5wdXRUZXh0LnR5cGUgPSBcInRleHRcIjtcbiAgICB0b2RvTmFtZUlucHV0VGV4dC5pZCA9IFwidG9kb05hbWVJbnB1dFRleHRcIjtcblxuICAgIGNvbnN0IHRvZG9OYW1lSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xhYmVsJyk7XG4gICAgdG9kb05hbWVJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb05hbWVJbnB1dFRleHRcIik7XG4gICAgdG9kb05hbWVJbnB1dExhYmVsLmlubmVySFRNTCA9IFwiVG9EbyBuYW1lOlwiO1xuXG4gICAgY29uc3QgdG9kb0RhdGVQaWNrZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xhYmVsJyk7XG4gICAgdG9kb0RhdGVQaWNrZXJMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInRvZG9EYXRlUGlja2VySW5wdXRcIik7XG4gICAgdG9kb0RhdGVQaWNrZXJMYWJlbC5pbm5lckhUTUwgPSBcIkRhdGU6XCI7XG5cbiAgICBjb25zdCB0b2RvRGF0ZVBpY2tlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvRGF0ZVBpY2tlcklucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICB0b2RvRGF0ZVBpY2tlcklucHV0LmlkID0gXCJ0b2RvRGF0ZVBpY2tlcklucHV0XCI7XG5cbiAgICBjb25zdCB0b2RvVGltZVBpY2tlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvVGltZVBpY2tlckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb1RpbWVQaWNrZXJJbnB1dFwiKTtcbiAgICB0b2RvVGltZVBpY2tlckxhYmVsLmlubmVySFRNTCA9IFwiVGltZTpcIjtcblxuICAgIGNvbnN0IHRvZG9UaW1lUGlja2VySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9UaW1lUGlja2VySW5wdXQudHlwZSA9IFwidGltZVwiO1xuICAgIHRvZG9UaW1lUGlja2VySW5wdXQuaWQgPSBcInRvZG9UaW1lUGlja2VySW5wdXRcIjtcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eVNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvUHJpb3JpdHlTZWxlY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInRvZG9Qcmlvcml0eVNlbGVjdFwiKTtcbiAgICB0b2RvUHJpb3JpdHlTZWxlY3RMYWJlbC5pbm5lckhUTUwgPSBcIlByaW9yaXR5OlwiO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgdG9kb1ByaW9yaXR5U2VsZWN0LmlkID0gXCJ0b2RvUHJpb3JpdHlTZWxlY3RcIjtcblxuICAgIGxldCBwcmlvcml0eUFycmF5ID0gWydIaWdoJywgJ01lZGl1bScsICdMb3cnXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpb3JpdHlBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBwcmlvcml0eS52YWx1ZSA9IHByaW9yaXR5QXJyYXlbaV07XG4gICAgICAgIHByaW9yaXR5LnRleHQgPSBwcmlvcml0eUFycmF5W2ldO1xuICAgICAgICB0b2RvUHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgdG9kb05vdGVzSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xhYmVsJyk7XG4gICAgdG9kb05vdGVzSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInRvZG9Ob3Rlc0lucHV0TGFiZWxcIik7XG4gICAgdG9kb05vdGVzSW5wdXRMYWJlbC5pbm5lckhUTUwgPSBcIk5vdGVzOlwiO1xuXG4gICAgY29uc3QgdG9kb05vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9Ob3Rlc0lucHV0LnR5cGUgPSBcInRleHRhcmVhXCI7XG4gICAgdG9kb05vdGVzSW5wdXQuaWQgPSBcInRvZG9Ob3Rlc0lucHV0XCI7XG5cbiAgICBjb25zdCBjb25maXJtQW5kRHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25maXJtQW5kRHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnY29uZmlybUFuZERyb3Bkb3duJyk7XG5cblxuICAgIGNvbnN0IHRvZG9DcmVhdGVDb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb0NyZWF0ZUNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZChcInRvZG9DcmVhdGVDb25maXJtQnRuXCIpO1xuICAgIHRvZG9DcmVhdGVDb25maXJtQnRuLmlubmVyVGV4dD0gXCLinJNcIjtcblxuICAgIGNvbnN0IHRvZG9DcmVhdGVDYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvQ3JlYXRlQ2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvQ3JlYXRlQ2FuY2VsQnRuXCIpO1xuICAgIHRvZG9DcmVhdGVDYW5jZWxCdG4uaW5uZXJUZXh0PSBcIuKclVwiO1xuXG4gICAgY29uc3QgdG9kb0NyZWF0ZURpdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9DcmVhdGVEaXZIZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kb0NyZWF0ZURpdkhlYWRlcicpO1xuICAgIHRvZG9DcmVhdGVEaXZIZWFkZXIudGV4dENvbnRlbnQgPSAnQUREIE5FVyBUT0RPJztcblxuICAgIGNvbmZpcm1BbmREcm9wZG93bi5hcHBlbmQodG9kb0NyZWF0ZUNvbmZpcm1CdG4pO1xuXG4gICAgdG9kb09wdGlvbnNDb250YWluZXIuYXBwZW5kKFxuICAgICAgICB0b2RvQ3JlYXRlRGl2SGVhZGVyLFxuICAgICAgICB0b2RvTmFtZUlucHV0TGFiZWwsIFxuICAgICAgICB0b2RvTmFtZUlucHV0VGV4dCAsXG4gICAgICAgIHRvZG9EYXRlUGlja2VyTGFiZWwsXG4gICAgICAgIHRvZG9EYXRlUGlja2VySW5wdXQsXG4gICAgICAgIHRvZG9UaW1lUGlja2VyTGFiZWwsXG4gICAgICAgIHRvZG9UaW1lUGlja2VySW5wdXQsXG4gICAgICAgIHRvZG9Qcmlvcml0eVNlbGVjdExhYmVsLFxuICAgICAgICB0b2RvUHJpb3JpdHlTZWxlY3QsXG4gICAgICAgIHRvZG9Ob3Rlc0lucHV0TGFiZWwsXG4gICAgICAgIHRvZG9Ob3Rlc0lucHV0LFxuICAgICAgICBjb25maXJtQW5kRHJvcGRvd24sXG4gICAgICAgIHRvZG9DcmVhdGVDYW5jZWxCdG5cbiAgICApO1xuXG4gICAgbmV3VG9kb0J1dHRvbnNFdmVudHMoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN3YXB0b2RvT3B0aW9uc0NvbnRhaW5lckNvbnRlbnRzIiwiaW1wb3J0IHNob3dUb2Rvc0Zyb21Ib21lUHJvamVjdCBmcm9tIFwiLi4vZnVuY3Rpb25zL2hvbWVEaXYtZXZlbnQuanNcIjtcbmltcG9ydCBzd2FwRWRpdE9yQWRkVG9kb0Zvcm1Ub0J1dHRvbiBmcm9tIFwiLi9ET00td2luZG93LWxpc3RlbmVyLXN3YXAtdG9kby1mb3JtLmpzXCI7XG5pbXBvcnQgcmVtb3ZlRHJvcGRvd24gZnJvbSBcIi4vRE9NLXdpbmRvdy1saXN0ZW5lci1yZW1vdmUtZWRpdFByb2plY3QtZHJvcGRvd24uanNcIjtcbmltcG9ydCByZW1vdmVNb3ZlVG9kb0Ryb3Bkb3duIGZyb20gXCIuL0RPTS13aW5kb3ctbGlzdGVuZXItcmVtb3ZlLW1vdmVUb2RvLWRyb3Bkb3duLmpzXCI7XG5cbmNvbnN0IGNyZWF0ZUJvZHkgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5JylcblxuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNEaXYnKTtcblxuICAgIGNvbnN0IGhvbWVQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZVByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnaG9tZVByb2plY3REaXYnLCAndGFyZ2V0Jyk7XG4gICBcbiAgICBjb25zdCBob21lUHJvamVjdERpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZVByb2plY3REaXZUaXRsZS5jbGFzc0xpc3QuYWRkKCdob21lUHJvamVjdERpdlRpdGxlJylcbiAgICBob21lUHJvamVjdERpdlRpdGxlLmlubmVyVGV4dCA9IFwiSE9NRVwiO1xuICAgIGhvbWVQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGhvbWVQcm9qZWN0RGl2VGl0bGUpO1xuXG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c0NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZFByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdENvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdEJ1dHRvbicpO1xuICAgIGFkZFByb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gXCIrIEFERFwiO1xuXG4gICAgY29uc3QgcHJvamVjdHNEaXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHByb2plY3RzRGl2SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzRGl2SGVhZGVyJyk7XG4gICAgcHJvamVjdHNEaXZIZWFkZXIuaW5uZXJUZXh0ID0gXCJQUk9KRUNUUzpcIjtcblxuICAgIGFkZFByb2plY3RDb250YWluZXIuYXBwZW5kKGFkZFByb2plY3RCdXR0b24pO1xuXG4gICAgc2hvd1RvZG9zRnJvbUhvbWVQcm9qZWN0KGhvbWVQcm9qZWN0RGl2KVxuXG4gICAgcHJvamVjdHNEaXYuYXBwZW5kKHByb2plY3RzRGl2SGVhZGVyLCBob21lUHJvamVjdERpdiwgcHJvamVjdHNDb250YWluZXIsIGFkZFByb2plY3RDb250YWluZXIpO1xuXG4gICAgY29uc3QgdG9kb3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2Rvc0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2Rvc0RpdicpO1xuXG4gICAgY29uc3QgdG9kb0RpdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9EaXZIZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kb0RpdkhlYWRlcicpO1xuICAgIHRvZG9EaXZIZWFkZXIuaW5uZXJUZXh0ID0gXCJZT1VSIFBMQU5ORUQgVEFTS1NcIjtcblxuXG4gICAgY29uc3QgdG9kb0RhdGFIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGF0YUhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0YUhlYWRlckRpdicpO1xuXG4gICAgY29uc3QgdG9kb05hbWVEYXRhSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb05hbWVEYXRhSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9OYW1lRGF0YUhlYWRlcicpO1xuICAgIHRvZG9OYW1lRGF0YUhlYWRlci5pbm5lclRleHQgPSBcIk5BTUVcIjtcblxuICAgIGNvbnN0IHRvZG9EYXRlRGF0YUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9EYXRlRGF0YUhlYWRlci5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0ZURhdGFIZWFkZXInKTtcbiAgICB0b2RvRGF0ZURhdGFIZWFkZXIuaW5uZXJUZXh0ID0gXCJEQVRFXCI7XG5cbiAgICBjb25zdCB0b2RvVGltZURhdGFIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvVGltZURhdGFIZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kb1RpbWVEYXRhSGVhZGVyJyk7XG4gICAgdG9kb1RpbWVEYXRhSGVhZGVyLmlubmVyVGV4dCA9IFwiVElNRVwiO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5RGF0YUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Qcmlvcml0eURhdGFIZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kb1ByaW9yaXR5RGF0YUhlYWRlcicpO1xuICAgIHRvZG9Qcmlvcml0eURhdGFIZWFkZXIuaW5uZXJUZXh0ID0gXCJQUklPUklUWVwiO1xuXG4gICAgY29uc3QgdG9kb05vdGVEYXRhSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb05vdGVEYXRhSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9Ob3RlRGF0YUhlYWRlcicpO1xuICAgIHRvZG9Ob3RlRGF0YUhlYWRlci5pbm5lclRleHQgPSBcIk5PVEVcIjtcblxuICAgIGNvbnN0IHRvZG9GdW5jdGlvbnNEYXRhSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0Z1bmN0aW9uc0RhdGFIZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kb0Z1bmN0aW9uc0RhdGFIZWFkZXInKTtcbiAgICB0b2RvRnVuY3Rpb25zRGF0YUhlYWRlci5pbm5lclRleHQgPSBcIkZVTkNUSU9OU1wiO1xuXG4gICAgdG9kb0RhdGFIZWFkZXJEaXYuYXBwZW5kKHRvZG9OYW1lRGF0YUhlYWRlciwgdG9kb0RhdGVEYXRhSGVhZGVyLCB0b2RvVGltZURhdGFIZWFkZXIsIHRvZG9Qcmlvcml0eURhdGFIZWFkZXIsIHRvZG9Ob3RlRGF0YUhlYWRlciwgdG9kb0Z1bmN0aW9uc0RhdGFIZWFkZXIpO1xuXG4gICAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2Rvc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2Rvc0NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgdG9kb09wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvT3B0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvT3B0aW9uc0NvbnRhaW5lcicpO1xuXG5cblxuICAgIHRvZG9zRGl2LmFwcGVuZCh0b2RvRGl2SGVhZGVyLCB0b2RvRGF0YUhlYWRlckRpdiwgdG9kb3NDb250YWluZXIsIHRvZG9PcHRpb25zQ29udGFpbmVyKTtcblxuICAgIGJvZHkuYXBwZW5kKHByb2plY3RzRGl2LCB0b2Rvc0Rpdik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgc3dhcEVkaXRPckFkZFRvZG9Gb3JtVG9CdXR0b24oZSk7XG4gICAgICAgIHJlbW92ZURyb3Bkb3duKGUpO1xuICAgICAgICByZW1vdmVNb3ZlVG9kb0Ryb3Bkb3duKGUpO1xuICAgIH0pO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCb2R5IiwiXG5jb25zdCBjcmVhdGVFZGl0UHJvamVjdERyb3Bkb3duQ29udGVudHMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkcm9wZG93bkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25Db250ZW50Jyk7XG5cbiAgICBjb25zdCBlZGl0UHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZWRpdFByb2plY3ROYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGVkaXRQcm9qZWN0TmFtZUlucHV0LmlkID0gXCJlZGl0UHJvamVjdE5hbWVcIjtcblxuICAgIGNvbnN0IGVkaXRQcm9qZWN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICBlZGl0UHJvamVjdE5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcImVkaXRQcm9qZWN0TmFtZVwiKTtcbiAgICBlZGl0UHJvamVjdE5hbWVMYWJlbC5pbm5lckhUTUwgPSBcIk5ldyBwcm9qZWN0IG5hbWU6XCI7XG5cbiAgICBjb25zdCBjb25maXJtTmV3TmFtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbmZpcm1OZXdOYW1lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbmZpcm1OZXdOYW1lQnV0dG9uJyk7XG4gICAgY29uZmlybU5ld05hbWVCdXR0b24udGV4dENvbnRlbnQgPSAn4pyTJztcblxuICAgIGRyb3Bkb3duQ29udGVudC5hcHBlbmQoZWRpdFByb2plY3ROYW1lTGFiZWwsIGVkaXRQcm9qZWN0TmFtZUlucHV0LCBjb25maXJtTmV3TmFtZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gW1xuICAgICAgICBkcm9wZG93bkNvbnRlbnRcbiAgICBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWRpdFByb2plY3REcm9wZG93bkNvbnRlbnRzIiwiaW1wb3J0IGVkaXRUb2RvQnV0dG9uc0V2ZW50cyBmcm9tICcuLi9mdW5jdGlvbnMvZWRpdC10b2RvLWZvcm0tZXZlbnRzLmpzJztcblxuY29uc3QgZWRpdFRvZG9Db250YWluZXJDb250ZW50cyA9IChcbiAgICBwYXNzZWRUYXJnZXRQcm9qZWN0SW5kZXgsXG4gICAgcGFzc2VkVG9kb0luZGV4LFxuICAgIHRvZG9OYW1lRGl2Q29udGVudCxcbiAgICB0b2RvRGF0ZURpdkNvbnRlbnQsXG4gICAgdG9kb1RpbWVEaXZDb250ZW50LFxuICAgIHRvZG9Ob3Rlc0RpdkNvbnRlbnRcbikgPT4ge1xuICAgIGxldCAgdGFyZ2V0UHJvamVjdEluZGV4ID0gcGFzc2VkVGFyZ2V0UHJvamVjdEluZGV4O1xuICAgIGxldCAgdG9kb0luZGV4ID0gcGFzc2VkVG9kb0luZGV4O1xuXG4gICAgY29uc3QgdG9kb09wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb09wdGlvbnNDb250YWluZXInKTtcbiAgICB0b2RvT3B0aW9uc0NvbnRhaW5lci5pbm5lckhUTUw9IFwiXCI7XG5cbiAgICBjb25zdCB0b2RvTmFtZUlucHV0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb05hbWVJbnB1dFRleHQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRvZG9OYW1lSW5wdXRUZXh0LmlkID0gXCJ0b2RvTmFtZUlucHV0VGV4dFwiO1xuICAgIHRvZG9OYW1lSW5wdXRUZXh0LnZhbHVlID0gdG9kb05hbWVEaXZDb250ZW50O1xuXG4gICAgY29uc3QgdG9kb05hbWVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvTmFtZUlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJ0b2RvTmFtZUlucHV0VGV4dFwiKTtcbiAgICB0b2RvTmFtZUlucHV0TGFiZWwuaW5uZXJIVE1MID0gXCJUb0RvIG5hbWU6XCI7XG5cbiAgICBjb25zdCB0b2RvRGF0ZVBpY2tlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvRGF0ZVBpY2tlckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb0RhdGVQaWNrZXJJbnB1dFwiKTtcbiAgICB0b2RvRGF0ZVBpY2tlckxhYmVsLmlubmVySFRNTCA9IFwiRGF0ZTpcIjtcblxuICAgIGNvbnN0IHRvZG9EYXRlUGlja2VySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9EYXRlUGlja2VySW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIHRvZG9EYXRlUGlja2VySW5wdXQuaWQgPSBcInRvZG9EYXRlUGlja2VySW5wdXRcIjtcbiAgICB0b2RvRGF0ZVBpY2tlcklucHV0LnZhbHVlID0gdG9kb0RhdGVEaXZDb250ZW50O1xuXG5cbiAgICBjb25zdCB0b2RvVGltZVBpY2tlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvVGltZVBpY2tlckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb1RpbWVQaWNrZXJJbnB1dFwiKTtcbiAgICB0b2RvVGltZVBpY2tlckxhYmVsLmlubmVySFRNTCA9IFwiVGltZTpcIjtcblxuICAgIGNvbnN0IHRvZG9UaW1lUGlja2VySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9UaW1lUGlja2VySW5wdXQudHlwZSA9IFwidGltZVwiO1xuICAgIHRvZG9UaW1lUGlja2VySW5wdXQuaWQgPSBcInRvZG9UaW1lUGlja2VySW5wdXRcIjtcbiAgICB0b2RvVGltZVBpY2tlcklucHV0LnZhbHVlID0gdG9kb1RpbWVEaXZDb250ZW50O1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5U2VsZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMYWJlbCcpO1xuICAgIHRvZG9Qcmlvcml0eVNlbGVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb1ByaW9yaXR5U2VsZWN0XCIpO1xuICAgIHRvZG9Qcmlvcml0eVNlbGVjdExhYmVsLmlubmVySFRNTCA9IFwiUHJpb3JpdHk6XCI7XG5cbiAgICBjb25zdCB0b2RvUHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICB0b2RvUHJpb3JpdHlTZWxlY3QuaWQgPSBcInRvZG9Qcmlvcml0eVNlbGVjdFwiO1xuXG4gICAgbGV0IHByaW9yaXR5QXJyYXkgPSBbJ0hpZ2gnLCAnTWVkaXVtJywgJ0xvdyddO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmlvcml0eUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHByaW9yaXR5LnZhbHVlID0gcHJpb3JpdHlBcnJheVtpXTtcbiAgICAgICAgcHJpb3JpdHkudGV4dCA9IHByaW9yaXR5QXJyYXlbaV07XG4gICAgICAgIHRvZG9Qcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCB0b2RvTm90ZXNJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTGFiZWwnKTtcbiAgICB0b2RvTm90ZXNJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidG9kb05vdGVzSW5wdXRMYWJlbFwiKTtcbiAgICB0b2RvTm90ZXNJbnB1dExhYmVsLmlubmVySFRNTCA9IFwiTm90ZXM6XCI7XG5cbiAgICBjb25zdCB0b2RvTm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb05vdGVzSW5wdXQudHlwZSA9IFwidGV4dGFyZWFcIjtcbiAgICB0b2RvTm90ZXNJbnB1dC5pZCA9IFwidG9kb05vdGVzSW5wdXRcIjtcbiAgICB0b2RvTm90ZXNJbnB1dC52YWx1ZSA9IHRvZG9Ob3Rlc0RpdkNvbnRlbnQ7XG5cbiAgICBjb25zdCB0b2RvRWRpdENvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvRWRpdENvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZChcInRvZG9FZGl0Q29uZmlybUJ0blwiKTtcbiAgICB0b2RvRWRpdENvbmZpcm1CdG4uaW5uZXJUZXh0PSBcIlZcIjtcblxuICAgIGNvbnN0IHRvZG9DcmVhdGVDYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvQ3JlYXRlQ2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvQ3JlYXRlQ2FuY2VsQnRuXCIpO1xuICAgIHRvZG9DcmVhdGVDYW5jZWxCdG4uaW5uZXJUZXh0PSBcIlhcIjtcblxuICAgIGNvbnN0IHRvZG9DcmVhdGVEaXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvQ3JlYXRlRGl2SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9FZGl0RGl2SGVhZGVyJyk7XG4gICAgdG9kb0NyZWF0ZURpdkhlYWRlci50ZXh0Q29udGVudCA9ICdFRElUIFRPRE8nO1xuXG4gICAgY29uc3QgY29uZmlybUFuZERyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uZmlybUFuZERyb3Bkb3duLmNsYXNzTGlzdC5hZGQoJ2NvbmZpcm1BbmREcm9wZG93bicpO1xuXG4gICAgY29uZmlybUFuZERyb3Bkb3duLmFwcGVuZCh0b2RvRWRpdENvbmZpcm1CdG4pO1xuXG4gICAgdG9kb09wdGlvbnNDb250YWluZXIuYXBwZW5kKFxuICAgICAgICB0b2RvQ3JlYXRlRGl2SGVhZGVyLFxuICAgICAgICB0b2RvTmFtZUlucHV0TGFiZWwsIFxuICAgICAgICB0b2RvTmFtZUlucHV0VGV4dCAsXG4gICAgICAgIHRvZG9EYXRlUGlja2VyTGFiZWwsXG4gICAgICAgIHRvZG9EYXRlUGlja2VySW5wdXQsXG4gICAgICAgIHRvZG9UaW1lUGlja2VyTGFiZWwsXG4gICAgICAgIHRvZG9UaW1lUGlja2VySW5wdXQsXG4gICAgICAgIHRvZG9Qcmlvcml0eVNlbGVjdExhYmVsLFxuICAgICAgICB0b2RvUHJpb3JpdHlTZWxlY3QsXG4gICAgICAgIHRvZG9Ob3Rlc0lucHV0TGFiZWwsXG4gICAgICAgIHRvZG9Ob3Rlc0lucHV0LFxuICAgICAgICBjb25maXJtQW5kRHJvcGRvd24sXG4gICAgICAgIHRvZG9DcmVhdGVDYW5jZWxCdG5cbiAgICApO1xuXG4gICAgZWRpdFRvZG9CdXR0b25zRXZlbnRzKHRhcmdldFByb2plY3RJbmRleCwgdG9kb0luZGV4KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVkaXRUb2RvQ29udGFpbmVyQ29udGVudHMiLCJpbXBvcnQgZ2l0TG9nbyBmcm9tICcuLi9pY29ucy9naXRMb2dvLnBuZyc7XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJylcbiAgICBcbiAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKCduYW1lRGl2Jyk7XG4gICAgbmFtZURpdi5pbm5lclRleHQgPSAnTWFjaWVqIERhYnJvd3NraSdcblxuICAgIGNvbnN0IGdpdExvZ29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnaXRMb2dvRGl2LmNsYXNzTGlzdC5hZGQoJ2dpdExvZ29EaXYnKTtcbiAgICBjb25zdCBnaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZ2l0SWNvbi5jbGFzc0xpc3QuYWRkKCdnaXRJY29uJylcbiAgICBnaXRJY29uLnNyYyA9IGdpdExvZ287XG5cbiAgICBnaXRMb2dvRGl2LmFwcGVuZChnaXRJY29uKTtcblxuICAgIGZvb3RlckRpdi5hcHBlbmQobmFtZURpdiwgZ2l0TG9nb0Rpdik7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2l0SWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9naXRodWIuY29tL01hY2llakRhYnJvd3NraWknLCAnX2JsYW5rJykuZm9jdXMoKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlciIsImNvbnN0IGNyZWF0ZUhlYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIGxvZ28uaW5uZXJUZXh0ID0gXCJUT0RPIC0gQXBwIHRvIG5vdCBmb3JnZXRcIjtcblxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbkRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3RpZmljYXRpb25EYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ25vdGlmaWNhdGlvbkRhdGVEaXYnKTtcblxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vdGlmaWNhdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdub3RpZmljYXRpb25EaXYnKTtcbiAgICBcbiAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdkYXRlRGl2Jyk7XG5cbiAgICBub3RpZmljYXRpb25EYXRlRGl2LmFwcGVuZChub3RpZmljYXRpb25EaXYsIGRhdGVEaXYpO1xuXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkJyk7XG4gICAgaGVhZC5hcHBlbmQobG9nbywgbm90aWZpY2F0aW9uRGF0ZURpdik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkIiwiY29uc3QgaGVhZGVyQm9keUZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuYm9keTtcblxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkLmNsYXNzTGlzdC5hZGQoJ2hlYWQnKTtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHknKTtcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICAgIG1haW5EaXYuYXBwZW5kKGhlYWQsIGJvZHksIGZvb3Rlcik7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlckJvZHlGb290ZXIiLCJpbXBvcnQgcHJvamVjdE1lbmFnZXIgZnJvbSBcIi4uL2Z1bmN0aW9ucy9wcm9qZWN0LW1lbmFnZXIuanNcIjtcbmltcG9ydCBkb21TaG93VG9kbyBmcm9tIFwiLi9ET00tc2hvdy1UT0RPLmpzXCI7XG5cbmNvbnN0IHJlZnJlc2hUb2Rvc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3NDb250YWluZXInKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGxldCB0YXJnZXRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXQnKS5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICBsZXQgdGFyZ2V0UHJvamVjdEluZGV4ID0gMDtcbiAgICBpZih0YXJnZXRQcm9qZWN0TmFtZSA9PT0gXCJIT01FXCIpIHtcbiAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0SG9tZVRvZG9zQXJyYXkoKS5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgZG9tU2hvd1RvZG8odG9kbywgaW5kZXgpO1xuICAgICAgICB9KVxuICAgIH1lbHNlIHtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpID09PSB0YXJnZXRQcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFByb2plY3RJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKVt0YXJnZXRQcm9qZWN0SW5kZXhdLmdldFRvZG9zQXJyYXkoKS5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgZG9tU2hvd1RvZG8odG9kbywgaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCByZWZyZXNoVG9kb3NDb250YWluZXIiLCJpbXBvcnQgdG9kb0RpdnNFdmVudHMgZnJvbSBcIi4uL2Z1bmN0aW9ucy90b2RvRGl2c0V2ZW50c1wiO1xuaW1wb3J0IGNoZWNrVG9kb091dGRhdGUgZnJvbSBcIi4uL2Z1bmN0aW9ucy9jaGVjay10b2RvLW91dGRhdGVkXCI7XG5cbmNvbnN0IGRvbVNob3dUb2RvID0gKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgbGV0IHRvZG9JbmRleCA9IGluZGV4O1xuICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvRGl2JyxgJHt0b2RvLmdldFRvZG9Qcmlvcml0eSgpfWAgKTtcblxuXG4gICAgY29uc3QgdG9kb05hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvTmFtZURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvTmFtZURpdicpO1xuICAgIHRvZG9OYW1lRGl2LnRleHRDb250ZW50ID0gdG9kby5nZXRUb2RvTmFtZSgpO1xuXG4gICAgY29uc3QgdG9kb0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0ZURpdicpO1xuICAgIHRvZG9EYXRlRGl2LnRleHRDb250ZW50ID0gdG9kby5nZXRUb2RvRGF0ZSgpO1xuXG4gICAgY29uc3QgdG9kb1RpbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvVGltZURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvVGltZURpdicpO1xuICAgIHRvZG9UaW1lRGl2LnRleHRDb250ZW50ID0gdG9kby5nZXR0b2RvVGltZSgpO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9UaW1lRGl2Jyk7XG4gICAgdG9kb1ByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gdG9kby5nZXRUb2RvUHJpb3JpdHkoKTtcblxuICAgIGNvbnN0IHRvZG9Ob3Rlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Ob3Rlc0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvVGltZURpdicpO1xuICAgIHRvZG9Ob3Rlc0Rpdi50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VG9kb05vdGVzKCk7XG5cbiAgICBjb25zdCBtb3ZlVG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1vdmVUb2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21vdmVUb2RvQnV0dG9uJyk7XG4gICAgbW92ZVRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIk1vdmVcIjtcblxuICAgIGNvbnN0IGVkaXRUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdFRvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdFRvZG9CdXR0b24nKTtcbiAgICBlZGl0VG9kb0J1dHRvbi50ZXh0Q29udGVudCA9IFwi4pyOXCI7XG5cbiAgICBjb25zdCBtb3ZlVG9kb0Ryb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW92ZVRvZG9Ecm9wZG93bi5jbGFzc0xpc3QuYWRkKCdtb3ZlVG9kb0Ryb3Bkb3duJyk7XG5cbiAgICBtb3ZlVG9kb0Ryb3Bkb3duLmFwcGVuZChtb3ZlVG9kb0J1dHRvbik7XG5cbiAgICBjb25zdCBkZWxldGVUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlVG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVUb2RvQnV0dG9uJyk7XG4gICAgZGVsZXRlVG9kb0J1dHRvbi50ZXh0Q29udGVudCA9IFwi4pyVXCI7XG5cbiAgICB0b2RvRGl2LmFwcGVuZCh0b2RvTmFtZURpdiwgdG9kb0RhdGVEaXYsIHRvZG9UaW1lRGl2LCB0b2RvUHJpb3JpdHlEaXYsIHRvZG9Ob3Rlc0RpdiwgbW92ZVRvZG9Ecm9wZG93biwgZWRpdFRvZG9CdXR0b24sIGRlbGV0ZVRvZG9CdXR0b24pO1xuICAgIGNoZWNrVG9kb091dGRhdGUodG9kb0RhdGVEaXYsIHRvZG9EaXYsIHRvZG9UaW1lRGl2KTtcbiAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcbiAgICB0b2RvRGl2c0V2ZW50cygpLnRvZG9UYXJnZXRFdmVudCh0b2RvRGl2KTtcbiAgICB0b2RvRGl2c0V2ZW50cygpLnRvZG9EZWxldGVCdXR0b25FdmVudChkZWxldGVUb2RvQnV0dG9uLCB0b2RvSW5kZXgpO1xuICAgIHRvZG9EaXZzRXZlbnRzKCkudG9kb0VkaXRCdXR0b25FdmVudChlZGl0VG9kb0J1dHRvbiwgdG9kb0luZGV4LCB0b2RvLmdldFRvZG9OYW1lKCksIHRvZG8uZ2V0VG9kb0RhdGUoKSwgdG9kby5nZXR0b2RvVGltZSgpLCB0b2RvLmdldFRvZG9Ob3RlcygpKTtcbiAgICB0b2RvRGl2c0V2ZW50cygpLnRvZG9Nb3ZlQnV0dG9uRXZlbnQobW92ZVRvZG9CdXR0b24sIHRvZG9JbmRleCwgdG9kb0Rpdik7XG4gICAgXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVNob3dUb2RvIiwiaW1wb3J0IHByb2plY3RNZW5hZ2VyIGZyb20gXCIuLi9mdW5jdGlvbnMvcHJvamVjdC1tZW5hZ2VyLmpzXCI7XG5pbXBvcnQgcmVmcmVzaFRvZG9zQ29udGFpbmVyIGZyb20gXCIuL0RPTS1yZWZyZXNoLVRPRE9TLWNvbnRhaW5lclwiO1xuaW1wb3J0IHVwZGF0ZUxvY2FsU3RvcmFnZSBmcm9tIFwiLi4vZnVuY3Rpb25zL2xvY2FsLXN0b3JhZ2UtbWVuYWdlci5qc1wiO1xuXG5jb25zdCBtb3ZlVG9kb0Ryb3Bkb3duQ29udGVudHMgPSAodGFyZ2V0UHJvamVjdE5hbWUsIHRvZG9JbmRleCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IG1vdmVUb2RvRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0VG9kbycpLnF1ZXJ5U2VsZWN0b3IoJy5tb3ZlVG9kb0Ryb3Bkb3duJyk7XG4gICAgY29uc3QgbW92ZVRvZG9Qcm9qZWN0c0Ryb3Bkb3duQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW92ZVRvZG9Qcm9qZWN0c0Ryb3Bkb3duQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vdmVUb2RvUHJvamVjdHNEcm9wZG93bkNvbnRhaW5lcicpO1xuICAgIGNvbnN0IG1vdmVUb2RvUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb3ZlVG9kb1Byb2plY3RzLmNsYXNzTGlzdC5hZGQoJ21vdmVUb2RvUHJvamVjdHMnKTtcblxuICAgIFxuICAgIGlmICh0YXJnZXRQcm9qZWN0TmFtZSA9PT0gXCJIT01FXCIpIHtcbiAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdtb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdicpO1xuICAgICAgICAgICAgbW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgICAgICAgICAgIG1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdG9kb1RvTW92ZSA9IHByb2plY3RNZW5hZ2VyLmdldEhvbWVUb2Rvc0FycmF5KCkuc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5hZGRUb1RvZG9zQXJyYXkodG9kb1RvTW92ZVswXSk7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbW92ZVRvZG9Qcm9qZWN0c0Ryb3Bkb3duQ29udGFpbmVyLmFwcGVuZChtb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdik7XG5cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBtb3ZlVG9kb1Byb2plY3RzLmFwcGVuZChtb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXIpO1xuICAgICAgICBtb3ZlVG9kb0Ryb3Bkb3duLmFwcGVuZChtb3ZlVG9kb1Byb2plY3RzKTtcbiAgICB9XG4gICAgZWxzZSB7XG5cbiAgICAgICAgbGV0IHRyYWdldFByb2plY3RJbmRleCA9IDA7XG4gICAgICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhcmdldFByb2plY3ROYW1lID09IHByb2plY3QuZ2V0TmFtZSgpKSB7XG4gICAgICAgICAgICAgICAgdHJhZ2V0UHJvamVjdEluZGV4ID0gaW5kZXhcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtb3ZlVG9kb0Ryb3Bkb3duSG9tZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW92ZVRvZG9Ecm9wZG93bkhvbWVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ21vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdCcpO1xuICAgICAgICBtb3ZlVG9kb0Ryb3Bkb3duSG9tZVByb2plY3QudGV4dENvbnRlbnQgPSAnSE9NRSc7XG4gICAgICAgIG1vdmVUb2RvRHJvcGRvd25Ib21lUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRvZG9Ub01vdmUgPSBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KClbdHJhZ2V0UHJvamVjdEluZGV4XS5nZXRUb2Rvc0FycmF5KCkuc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLnB1c2hUb0hvbWVUb2Rvc0FycmF5KHRvZG9Ub01vdmVbMF0pO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgbW92ZVRvZG9Qcm9qZWN0c0Ryb3Bkb3duQ29udGFpbmVyLmFwcGVuZChtb3ZlVG9kb0Ryb3Bkb3duSG9tZVByb2plY3QpO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0YXJnZXRQcm9qZWN0TmFtZSAhPT0gcHJvamVjdC5nZXROYW1lKCkpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnbW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYnKTtcbiAgICAgICAgICAgICAgICBtb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgICAgIG1vdmVUb2RvRHJvcGRvd25Qcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVG9Nb3ZlID0gcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpW3RyYWdldFByb2plY3RJbmRleF0uZ2V0VG9kb3NBcnJheSgpLnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuYWRkVG9Ub2Rvc0FycmF5KHRvZG9Ub01vdmVbMF0pO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICByZWZyZXNoVG9kb3NDb250YWluZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIG1vdmVUb2RvUHJvamVjdHNEcm9wZG93bkNvbnRhaW5lci5hcHBlbmQobW92ZVRvZG9Ecm9wZG93blByb2plY3REaXYpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1vdmVUb2RvUHJvamVjdHMuYXBwZW5kKG1vdmVUb2RvUHJvamVjdHNEcm9wZG93bkNvbnRhaW5lcik7XG4gICAgICAgIG1vdmVUb2RvRHJvcGRvd24uYXBwZW5kKG1vdmVUb2RvUHJvamVjdHMpO1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb3ZlVG9kb0Ryb3Bkb3duQ29udGVudHMiLCJpbXBvcnQgcHJvamVjdE1lbmFnZXIgZnJvbSBcIi4uL2Z1bmN0aW9ucy9wcm9qZWN0LW1lbmFnZXIuanNcIjtcbmltcG9ydCBhZGRQcm9qZWN0RGl2RXZlbnQgZnJvbSBcIi4uL2Z1bmN0aW9ucy9hZGQtcHJvamVjdC1kaXZzLWV2ZW50XCI7XG5pbXBvcnQgcmVmcmVzaFRvZG9zQ29udGFpbmVyIGZyb20gXCIuL0RPTS1yZWZyZXNoLVRPRE9TLWNvbnRhaW5lclwiO1xuXG5sZXQgc2hvd1Byb2plY3RzID0gKCkgPT4geyAgIFxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzQ29udGFpbmVyJykuaW5uZXJIVE1MPSBcIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lUHJvamVjdERpdicpLmNsYXNzTGlzdC5hZGQoJ3RhcmdldCcpO1xuICAgIHJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpO1xuICAgIFxuICAgIHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0RGl2Jyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmFtZScpO1xuICAgICAgICBwcm9qZWN0TmFtZS5pbm5lclRleHQgPSBgJHtwcm9qZWN0LmdldE5hbWUoKX1gO1xuICAgIFxuICAgICAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZWRpdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZWRpdFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdFByb2plY3RCdXR0b24nKTtcbiAgICAgICAgZWRpdFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAn4pyOJztcbiAgICAgICAgXG4gICAgICAgIGRyb3Bkb3duLmFwcGVuZChlZGl0UHJvamVjdEJ1dHRvbik7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVByb2plY3RCdXR0b24nKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICfinJUnO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBgJHtwcm9qZWN0LmdldE5hbWUoKX1gKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0QnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0QnV0dG9uc0NvbnRhaW5lcicpO1xuXG4gICAgICAgIHByb2plY3RCdXR0b25zQ29udGFpbmVyLmFwcGVuZChkcm9wZG93biwgZGVsZXRlUHJvamVjdEJ1dHRvbik7XG5cbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmQocHJvamVjdE5hbWUsIHByb2plY3RCdXR0b25zQ29udGFpbmVyKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNDb250YWluZXInKS5hcHBlbmQocHJvamVjdERpdik7XG4gICAgICAgIFxuICAgICAgICBhZGRQcm9qZWN0RGl2RXZlbnQoKS5kZWxldGVQcm9qZWN0QnV0dG9uKGRlbGV0ZVByb2plY3RCdXR0b24sIGluZGV4KTtcbiAgICAgICAgYWRkUHJvamVjdERpdkV2ZW50KCkuZWRpdFByb2plY3RCdXR0b24oZWRpdFByb2plY3RCdXR0b24sIGluZGV4LCBkcm9wZG93bik7XG4gICAgICAgIGFkZFByb2plY3REaXZFdmVudCgpLnByb2plY3REaXZFdmVudChwcm9qZWN0RGl2KTtcbiAgICB9KTtcblxufTsgXG5cbmV4cG9ydCBkZWZhdWx0IHNob3dQcm9qZWN0cyIsImltcG9ydCBzaG93UHJvamVjdHMgZnJvbSBcIi4vRE9NLXNob3ctcHJvamVjdHMuanNcIjtcblxuZnVuY3Rpb24gcmVtb3ZlRHJvcGRvd24oZXZlbnQpIHtcbiAgICAgICAgXG4gICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duQ29udGVudCcpKXtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcyhgLmVkaXRQcm9qZWN0QnV0dG9uYCkpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuZHJvcGRvd25Db250ZW50JykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcjZWRpdFByb2plY3ROYW1lJykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCdsYWJlbCcpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmNvbmZpcm1OZXdOYW1lQnV0dG9uJykpXG4gICAgICAgICAgICkgeyAgXG4gICAgICAgICAgICAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25Db250ZW50Jyk7XG4gICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICBzaG93UHJvamVjdHMoKTtcbiAgICAgICAgICAgICB9O1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVEcm9wZG93biIsImZ1bmN0aW9uIHJlbW92ZU1vdmVUb2RvRHJvcGRvd24oZXZlbnQpIHtcbiAgICAgICAgXG4gICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmVUb2RvUHJvamVjdHMnKSl7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoYC5tb3ZlVG9kb1Byb2plY3RzRHJvcGRvd25Db250YWluZXJgKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5tb3ZlVG9kb0Ryb3Bkb3duSG9tZVByb2plY3QnKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5tb3ZlVG9kb0Ryb3Bkb3duUHJvamVjdERpdicpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLm1vdmVUb2RvQnV0dG9uJykpXG4gICAgICAgICAgICkgeyAgXG4gICAgICAgICAgICAgICBjb25zdCBtb3ZlVG9kb1Byb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmVUb2RvUHJvamVjdHMnKTtcbiAgICAgICAgICAgICAgIG1vdmVUb2RvUHJvamVjdHMucmVtb3ZlKCk7XG4gICAgICAgICAgICAgfTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlTW92ZVRvZG9Ecm9wZG93biIsImltcG9ydCBjcmVhdGVBZGRUT0RPdEJ0biBmcm9tIFwiLi9ET00tYWRkVG9kby1jcmVhdGUtYWRkQnRuLmpzXCI7XG5pbXBvcnQgYWRkVE9ET0J1dHRvbkV2ZW50IGZyb20gXCIuLi9mdW5jdGlvbnMvYWRkLXRvZG8tYnV0dG9uLWV2ZW50LmpzXCI7XG5cbmZ1bmN0aW9uIHN3YXBFZGl0T3JBZGRUb2RvRm9ybVRvQnV0dG9uKGV2ZW50KSB7XG4gICAgICAgIFxuICAgIGlmICgoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuYWRkVE9ET0J1dHRvbicpICYmICFldmVudC50YXJnZXQubWF0Y2hlcygnLmVkaXRUb2RvQnV0dG9uJykpICYmICgoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0NyZWF0ZURpdkhlYWRlcicpKSB8fCAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0VkaXREaXZIZWFkZXInKSkpKXtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLnRvZG9PcHRpb25zQ29udGFpbmVyJykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcudG9kb0NyZWF0ZURpdkhlYWRlcicpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnbGFiZWwnKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJyN0b2RvTmFtZUlucHV0VGV4dCcpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnI3RvZG9EYXRlUGlja2VySW5wdXQnKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJyN0b2RvVGltZVBpY2tlcklucHV0JykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcjdG9kb1ByaW9yaXR5U2VsZWN0JykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCdvcHRpb24nKSkgJiZcbiAgICAgICAgICAgICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJyN0b2RvTm90ZXNJbnB1dCcpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLnRvZG9DcmVhdGVDb25maXJtQnRuJykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcudG9kb0NyZWF0ZUNhbmNlbEJ0bicpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLnRvZG9FZGl0RGl2SGVhZGVyJykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcudG9kb0VkaXRDb25maXJtQnRuJykpICYmXG4gICAgICAgICAgICAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcudG9kb0RhdGFFcnJvcicpKSAmJlxuICAgICAgICAgICAgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmFkZFRPRE9CdXR0b24nKSlcblxuICAgICAgICAgICApIHsgXG4gICAgICAgICAgICAgICAgY3JlYXRlQWRkVE9ET3RCdG4oKTtcbiAgICAgICAgICAgICAgICBhZGRUT0RPQnV0dG9uRXZlbnQoKTtcbiAgICAgICAgICAgICB9OyBcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3dhcEVkaXRPckFkZFRvZG9Gb3JtVG9CdXR0b25cbiIsImNvbnN0IHRvZG9UYXNrID0gKG5hbWUsIGRhdGUsIHRpbWUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuICAgIGxldCB0b2RvTmFtZSA9IG5hbWU7XG4gICAgbGV0IHRvZG9EYXRlID0gZGF0ZTtcbiAgICBsZXQgdG9kb1RpbWUgPSB0aW1lO1xuICAgIGxldCB0b2RvUHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBsZXQgdG9kb05vdGVzID0gbm90ZXM7XG4gICAgbGV0IHRvZG9TdGF0dXMgPSBmYWxzZTtcbiAgICBcbiAgICAvLyBHZXQgZnVuY3Rpb25zIHJldHVybmluZyB2YXJpYWJsZSBjb250ZW50c1xuICAgIGNvbnN0IGdldFRvZG9OYW1lID0gKCkgPT4gdG9kb05hbWU7XG4gICAgY29uc3QgZ2V0VG9kb0RhdGUgPSAoKSA9PiB0b2RvRGF0ZTtcbiAgICBjb25zdCBnZXR0b2RvVGltZSA9ICgpID0+IHRvZG9UaW1lO1xuICAgIGNvbnN0IGdldFRvZG9Qcmlvcml0eSA9ICgpID0+IHRvZG9Qcmlvcml0eTtcbiAgICBjb25zdCBnZXRUb2RvTm90ZXMgPSAoKSA9PiB0b2RvTm90ZXM7XG4gICAgY29uc3QgZ2V0VG9kb1N0YXR1cyA9ICgpID0+IHRvZG9TdGF0dXM7XG4gICAgXG4gICAgLy8gU2V0IGZ1bmN0aW9ucyB0byBlZGl0IHZhcmlhYmxlIGNvbnRlbnRzXG4gICAgY29uc3Qgc2V0VG9kb05hbWUgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIHRvZG9OYW1lID0gc3RyaW5nXG4gICAgfTtcbiAgICBjb25zdCBzZXRUb2RvRGF0ZSA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgdG9kb0RhdGUgPSBzdHJpbmdcbiAgICB9O1xuICAgIGNvbnN0IHNldFRvZG9UaW1lID0gKHN0cmluZykgPT4ge1xuICAgICAgICB0b2RvVGltZSA9IHN0cmluZztcbiAgICB9O1xuICAgIGNvbnN0IHNldFRvZG9Qcmlvcml0eSA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgdG9kb1ByaW9yaXR5ID0gc3RyaW5nO1xuICAgIH07XG4gICAgY29uc3Qgc2V0VG9kb05vdGVzID0gKHN0cmluZykgPT4ge1xuICAgICAgICB0b2RvTm90ZXMgPSBzdHJpbmc7XG4gICAgfTtcbiAgICBjb25zdCBzZXRUb2RvU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdG9kb1N0YXR1cyA/IHRvZG9TdGF0dXMgPSBmYWxzZSA6IHRvZG9TdGF0dXMgPSB0cnVlO1xuICAgIH0gIFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0VG9kb05hbWUsXG4gICAgICAgIGdldFRvZG9EYXRlLFxuICAgICAgICBnZXR0b2RvVGltZSxcbiAgICAgICAgZ2V0VG9kb1ByaW9yaXR5LFxuICAgICAgICBnZXRUb2RvTm90ZXMsXG4gICAgICAgIGdldFRvZG9TdGF0dXMsXG4gICAgICAgIHNldFRvZG9OYW1lLFxuICAgICAgICBzZXRUb2RvRGF0ZSxcbiAgICAgICAgc2V0VG9kb1RpbWUsXG4gICAgICAgIHNldFRvZG9Qcmlvcml0eSxcbiAgICAgICAgc2V0VG9kb05vdGVzLFxuICAgICAgICBzZXRUb2RvU3RhdHVzLFxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCB0b2RvVGFzazsiLCJpbXBvcnQgc3dhcENvbnRlbnRzIGZyb20gJy4uL2RvbS1mdW5jdGlvbnMvRE9NLWFkZFByb2plY3Qtc3dhcC1CdG4tdG8tRm9ybS5qcyc7XG5cbmNvbnN0IGFkZFByb2plY3RCdXR0b25FdmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RCdXR0b24nKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dhcENvbnRlbnRzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZFByb2plY3RCdXR0b25FdmVudCIsImltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi9wcm9qZWN0LW1lbmFnZXIuanNcIjtcbmltcG9ydCByZWZyZXNoVG9kb3NDb250YWluZXIgZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLXJlZnJlc2gtVE9ET1MtY29udGFpbmVyXCI7XG5pbXBvcnQgc2hvd1Byb2plY3RzIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1zaG93LXByb2plY3RzLmpzXCI7XG5pbXBvcnQgY3JlYXRlRWRpdFByb2plY3REcm9wZG93bkNvbnRlbnRzIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1jcmVhdGUtZWRpdC1wcm9qZWN0LWRyb3Bkb3duLWNvbnRlbnRzLmpzXCI7XG5pbXBvcnQgdXBkYXRlTG9jYWxTdG9yYWdlIGZyb20gXCIuL2xvY2FsLXN0b3JhZ2UtbWVuYWdlci5qc1wiO1xuXG5jb25zdCBhZGRQcm9qZWN0RGl2RXZlbnQgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gKGRlbGV0ZUJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xuXG4gICAgICAgICAgICBwcm9qZWN0TWVuYWdlci5yZW1vdmVQcm9qZWN0KGluZGV4KTtcbiAgICAgICAgICAgIHNob3dQcm9qZWN0cygpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZWRpdFByb2plY3RCdXR0b24gPSAoZWRpdEJ1dHRvbiwgaW5kZXgsIGRyb3Bkb3duKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25Db250ZW50JykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25Db250ZW50Jyk7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duLmFwcGVuZCguLi5jcmVhdGVFZGl0UHJvamVjdERyb3Bkb3duQ29udGVudHMoKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdFByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFByb2plY3ROYW1lJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlybU5ld05hbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybU5ld05hbWVCdXR0b24nKTtcbiAgICAgICAgICAgICAgICBjb25maXJtTmV3TmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWVzQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lc0FycmF5LnB1c2gocHJvamVjdC5nZXROYW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3ROYW1lc0FycmF5LmluY2x1ZGVzKGVkaXRQcm9qZWN0TmFtZUlucHV0LnZhbHVlKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0UHJvamVjdEVycm9yRGl2JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25Db250ZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdFByb2plY3RFcnJvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qZWN0RXJyb3JEaXYuY2xhc3NMaXN0LmFkZCgnZWRpdFByb2plY3RFcnJvckRpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qZWN0RXJyb3JEaXYuaW5uZXJUZXh0ID0gXCJUaGlzIG5hbWUgZXhpc3QhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LmFwcGVuZChlZGl0UHJvamVjdEVycm9yRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpW2luZGV4XS5lZGl0UHJvamVjdE5hbWUoZWRpdFByb2plY3ROYW1lSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzaG93UHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duLmFwcGVuZCguLi5jcmVhdGVFZGl0UHJvamVjdERyb3Bkb3duQ29udGVudHMoKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdFByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFByb2plY3ROYW1lJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlybU5ld05hbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybU5ld05hbWVCdXR0b24nKTtcbiAgICAgICAgICAgICAgICBjb25maXJtTmV3TmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWVzQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lc0FycmF5LnB1c2gocHJvamVjdC5nZXROYW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3ROYW1lc0FycmF5LmluY2x1ZGVzKGVkaXRQcm9qZWN0TmFtZUlucHV0LnZhbHVlKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0UHJvamVjdEVycm9yRGl2JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25Db250ZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdFByb2plY3RFcnJvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qZWN0RXJyb3JEaXYuY2xhc3NMaXN0LmFkZCgnZWRpdFByb2plY3RFcnJvckRpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qZWN0RXJyb3JEaXYuaW5uZXJUZXh0ID0gXCJUaGlzIG5hbWUgZXhpc3QhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LmFwcGVuZChlZGl0UHJvamVjdEVycm9yRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0UHJvamVjdEVycm9yRGl2JykuaW5uZXJUZXh0ID09PSBcIk5ldyBuYW1lIG1pbi4gMSBjaGFyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByb2plY3RFcnJvckRpdicpLmlubmVyVGV4dCA9IFwiVGhpcyBuYW1lIGV4aXN0IVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoZWRpdFByb2plY3ROYW1lSW5wdXQudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0UHJvamVjdEVycm9yRGl2JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25Db250ZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdFByb2plY3RFcnJvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qZWN0RXJyb3JEaXYuY2xhc3NMaXN0LmFkZCgnZWRpdFByb2plY3RFcnJvckRpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qZWN0RXJyb3JEaXYuaW5uZXJUZXh0ID0gXCJOZXcgbmFtZSBtaW4uIDEgY2hhclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5hcHBlbmQoZWRpdFByb2plY3RFcnJvckRpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByb2plY3RFcnJvckRpdicpLmlubmVyVGV4dCA9PT0gXCJUaGlzIG5hbWUgZXhpc3QhXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByb2plY3RFcnJvckRpdicpLmlubmVyVGV4dCA9IFwiTmV3IG5hbWUgbWluLiAxIGNoYXJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpW2luZGV4XS5lZGl0UHJvamVjdE5hbWUoZWRpdFByb2plY3ROYW1lSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzaG93UHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHByb2plY3REaXZFdmVudCA9IChwcm9qZWN0RGl2LCkgPT4ge1xuICAgICAgICBjb25zdCBob21lUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lUHJvamVjdERpdicpO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0FycmF5ID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0RGl2JyldO1xuICAgICAgICAgICAgcHJvamVjdHNBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd0YXJnZXQnKTsgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGhvbWVQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmdldCcpO1xuICAgICAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCd0YXJnZXQnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVmcmVzaFRvZG9zQ29udGFpbmVyKCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBlZGl0UHJvamVjdEJ1dHRvbixcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbixcbiAgICAgICAgcHJvamVjdERpdkV2ZW50LFxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBhZGRQcm9qZWN0RGl2RXZlbnRcblxuIiwiaW1wb3J0IGFkZFByb2plY3RCdXR0b25FdmVudCBmcm9tIFwiLi9hZGQtcHJvamVjdC1idXR0b24tZXZlbnQuanNcIjtcbmltcG9ydCBjcmVhdGVBZGRQcm9qZWN0QnRuIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1hZGRQcm9qZWN0LWNyZWF0ZS1hZGRCdG4uanNcIjtcbmltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi9wcm9qZWN0LW1lbmFnZXIuanNcIjtcbmltcG9ydCBwcm9qZWN0Q3JlYXRvciBmcm9tIFwiLi9wcm9qZWN0LWNyZWF0b3IuanNcIjtcbmltcG9ydCBzaG93UHJvamVjdHMgZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLXNob3ctcHJvamVjdHMuanNcIjtcbmltcG9ydCB1cGRhdGVMb2NhbFN0b3JhZ2UgZnJvbSBcIi4vbG9jYWwtc3RvcmFnZS1tZW5hZ2VyLmpzXCI7XG5cbmNvbnN0IGFkZEV2ZW50RnVuY3Rpb250c1RvRm9ybSA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBkZWNsaW5lQnRuRnVuY3Rpb24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZUNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TmFtZUNhbmNlbEJ0bicpO1xuICAgICAgICBwcm9qZWN0TmFtZUNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZUFkZFByb2plY3RCdG4oKTtcbiAgICAgICAgICAgIGFkZFByb2plY3RCdXR0b25FdmVudCgpO1xuICAgICAgICB9KVxuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjb25maXJtQnRuID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVDb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3ROYW1lQ29uZmlybUJ0bicpO1xuICAgICAgICBwcm9qZWN0TmFtZUNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uTWVzc2FnZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52YWxpZGF0aW9uTWVzc2FnZURpdicpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWVJbnB1dFRleHQnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0Q3JlYXRvcihwcm9qZWN0TmFtZUlucHV0VGV4dCk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZXNBcnJheSA9IFtdO1xuICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZXNBcnJheS5wdXNoKHByb2plY3QuZ2V0TmFtZSgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHByb2plY3ROYW1lc0FycmF5LmluY2x1ZGVzKHByb2plY3ROYW1lSW5wdXRUZXh0KSkge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlRGl2LmlubmVyVGV4dCA9IFwiVGhpcyBuYW1lIGFscmVhZHkgZXhpc3RzIVwiO1xuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihwcm9qZWN0TmFtZUlucHV0VGV4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZURpdi5pbm5lclRleHQgPSBcIk5hbWUgbXVzdCBiZSBhdCBsZWFzdCAxIGNoYXJhY3RlciBsb25nXCI7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2VEaXYuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0TWVuYWdlci5wdXNoVG9Qcm9qZWN0c0FycmF5KHByb2plY3QpOyAgICAgIFxuICAgICAgICAgICAgY3JlYXRlQWRkUHJvamVjdEJ0bigpO1xuICAgICAgICAgICAgYWRkUHJvamVjdEJ1dHRvbkV2ZW50KCk7XG4gICAgICAgICAgICBzaG93UHJvamVjdHMoKTtcbiAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSkoKTtcbn07XG5leHBvcnQgZGVmYXVsdCBhZGRFdmVudEZ1bmN0aW9udHNUb0Zvcm0iLCJpbXBvcnQgc3dhcHRvZG9PcHRpb25zQ29udGFpbmVyQ29udGVudHMgZnJvbSAnLi4vZG9tLWZ1bmN0aW9ucy9ET00tYWRkVG9kby1zd2FwLUJ0bi10by1Gb3JtLmpzJztcblxuY29uc3QgYWRkVE9ET0J1dHRvbkV2ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRPRE9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVE9ET0J1dHRvbicpO1xuICAgIGFkZFRPRE9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2FwdG9kb09wdGlvbnNDb250YWluZXJDb250ZW50cyk7XG59O1xuZXhwb3J0IGRlZmF1bHQgYWRkVE9ET0J1dHRvbkV2ZW50IiwiaW1wb3J0IHByb2plY3RNZW5hZ2VyIGZyb20gXCIuL3Byb2plY3QtbWVuYWdlci5qc1wiO1xuaW1wb3J0IGNyZWF0ZUFkZFRPRE90QnRuIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1hZGRUb2RvLWNyZWF0ZS1hZGRCdG4uanNcIjtcbmltcG9ydCBhZGRUT0RPQnV0dG9uRXZlbnQgZnJvbSBcIi4vYWRkLXRvZG8tYnV0dG9uLWV2ZW50LmpzXCI7XG5pbXBvcnQgbmV3VG9kbyBmcm9tIFwiLi9jcmVhdGUtbmV3LXRvZG8uanNcIjtcbmltcG9ydCByZWZyZXNoVG9kb3NDb250YWluZXIgZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLXJlZnJlc2gtVE9ET1MtY29udGFpbmVyXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnMvZXNtXCI7XG5pbXBvcnQgdXBkYXRlTG9jYWxTdG9yYWdlIGZyb20gXCIuL2xvY2FsLXN0b3JhZ2UtbWVuYWdlci5qc1wiO1xuXG5jb25zdCBuZXdUb2RvQnV0dG9uc0V2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBkZWNsaW5lQnRuRnVuY3Rpb24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvQ3JlYXRlQ2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9DcmVhdGVDYW5jZWxCdG4nKTtcbiAgICAgICAgdG9kb0NyZWF0ZUNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZUFkZFRPRE90QnRuKCk7XG4gICAgICAgICAgICBhZGRUT0RPQnV0dG9uRXZlbnQoKTtcbiAgICAgICAgfSlcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgY29uZmlybUJ0biA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9DcmVhdGVDb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9DcmVhdGVDb25maXJtQnRuJyk7XG4gICAgICAgIHRvZG9DcmVhdGVDb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTmFtZUlucHV0VGV4dCcpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGF0ZVBpY2tlcklucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9UaW1lUGlja2VySW5wdXQnKTsgXG4gICAgICAgICAgICBjb25zdCBjb25maXJtQW5kRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybUFuZERyb3Bkb3duJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY2hlY2tEYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXRlID0gZGF0ZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWREYXRlIDwgdG9kYXkpIHJldHVybiB0cnVlOyAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2hlY2tUaW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheUZvcm1hdGVkID0gZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXRlID0gZGF0ZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRpbWUgPSB0aW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVOb3cgPSBgJHt0b2RheS5nZXRIb3VycygpfToke3RvZGF5LmdldE1pbnV0ZXMoKX1gO1xuICAgICAgICAgICAgICAgIGlmICgodG9kYXlGb3JtYXRlZCA9PT0gc2VsZWN0ZWREYXRlKSAmJiAoc2VsZWN0ZWRUaW1lIDwgdGltZU5vdykpIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKG5hbWUudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0RhdGFFcnJvcicpKXtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9EYXRhRXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRhRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0YUVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuaW5uZXJUZXh0ID0gXCJOYW1lIG11c3QgYmUgYXQgbGVhc3QgMSBjaGFyYWN0ZXIgbG9uZ1wiO1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtQW5kRHJvcGRvd24uYXBwZW5kKHRvZG9EYXRhRXJyb3IpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0YUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGFFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmlubmVyVGV4dCA9IFwiTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDEgY2hhcmFjdGVyIGxvbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUFuZERyb3Bkb3duLmFwcGVuZCh0b2RvRGF0YUVycm9yKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGUudmFsdWUubGVuZ3RoID09PSAwIHx8IGNoZWNrRGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9EYXRhRXJyb3InKSl7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvRGF0YUVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0YUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGFFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmlubmVyVGV4dCA9IFwiRGF0ZSByZXF1cmVkIGFuZCBtdXN0IGJlIHNldCBpbiB0aGUgZnV0dXJlXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1BbmREcm9wZG93bi5hcHBlbmQodG9kb0RhdGFFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGFFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmNsYXNzTGlzdC5hZGQoJ3RvZG9EYXRhRXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5pbm5lclRleHQgPSBcIkRhdGUgcmVxdXJlZCBhbmQgbXVzdCBiZSBzZXQgaW4gdGhlIGZ1dHVyZVwiO1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtQW5kRHJvcGRvd24uYXBwZW5kKHRvZG9EYXRhRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRpbWUudmFsdWUubGVuZ3RoID09PSAwIHx8IGNoZWNrVGltZSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9EYXRhRXJyb3InKSl7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvRGF0YUVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0YUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGFFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmlubmVyVGV4dCA9IFwiVGltZSBpcyByZXF1cmllZCBhbmQgbXVzdCBiZSBzZXQgaW4gdGhlIGZ1dHVyZVwiO1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtQW5kRHJvcGRvd24uYXBwZW5kKHRvZG9EYXRhRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRhRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0YUVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuaW5uZXJUZXh0ID0gXCJUaW1lIGlzIHJlcXVyaWVkIGFuZCBtdXN0IGJlIHNldCBpbiB0aGUgZnV0dXJlXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1BbmREcm9wZG93bi5hcHBlbmQodG9kb0RhdGFFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlVG9kbyA9IG5ld1RvZG8oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXQnKS5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdE5hbWUgPT09IFwiSE9NRVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLnB1c2hUb0hvbWVUb2Rvc0FycmF5KGNyZWF0ZVRvZG8pO1xuXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdHNBcnJheSA9IHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3RJbmRleDsgXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKVtpXS5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKSBwcm9qZWN0SW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KClbcHJvamVjdEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5hZGRUb1RvZG9zQXJyYXkoY3JlYXRlVG9kbyk7IFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNyZWF0ZUFkZFRPRE90QnRuKCk7XG4gICAgICAgICAgICAgICAgYWRkVE9ET0J1dHRvbkV2ZW50KCk7XG4gICAgICAgICAgICAgICAgcmVmcmVzaFRvZG9zQ29udGFpbmVyKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgIH0pKCk7XG5cbn07XG5leHBvcnQgZGVmYXVsdCBuZXdUb2RvQnV0dG9uc0V2ZW50cyIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZucy9lc21cIjtcblxuY29uc3QgY2hlY2tUb2RvT3V0ZGF0ZSA9IChkYXRlLCB0b2RvRGl2LCB0aW1lICkgPT4ge1xuXG4gICAgY29uc3QgY2hlY2tEYXRlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RheSA9IGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZERhdGUgPSBkYXRlLnRleHRDb250ZW50O1xuICAgICAgICBpZiAoc2VsZWN0ZWREYXRlIDwgdG9kYXkpIHJldHVybiB0cnVlOyAgIFxuICAgIH07XG5cbiAgICBjb25zdCBjaGVja1RpbWUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHRpbWVOb3cgPSBgJHt0b2RheURhdGUuZ2V0SG91cnMoKX06JHt0b2RheURhdGUuZ2V0TWludXRlcygpfWA7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRGF0ZSA9IGRhdGUudGV4dENvbnRlbnQ7XG4gICAgICAgIGlmIChzZWxlY3RlZERhdGUgPD0gdG9kYXkgJiYgdGltZS50ZXh0Q29udGVudCA8IHRpbWVOb3cpIHJldHVybiB0cnVlXG4gICAgfTtcblxuICAgIGlmIChjaGVja0RhdGUoKSB8fCBjaGVja1RpbWUoKSkge1xuICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ291dGRhdGVkVG9kbycpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBjaGVja1RvZG9PdXRkYXRlIiwiaW1wb3J0IHRvZG9UYXNrIGZyb20gXCIuL1RPRE8tY3JlYXRvci5qc1wiO1xuXG5jb25zdCBuZXdUb2RvID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb05hbWVJbnB1dFRleHQnKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EYXRlUGlja2VySW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9UaW1lUGlja2VySW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUHJpb3JpdHlTZWxlY3QnKS52YWx1ZTtcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTm90ZXNJbnB1dCcpLnZhbHVlO1xuICAgIGxldCB0b2RvID0gdG9kb1Rhc2sobmFtZSwgZGF0ZSwgdGltZSwgcHJpb3JpdHksIG5vdGVzKTtcbiAgICByZXR1cm4gdG9kb1xufVxuZXhwb3J0IGRlZmF1bHQgbmV3VG9kbyIsImltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi9wcm9qZWN0LW1lbmFnZXIuanNcIjtcbmltcG9ydCBjcmVhdGVBZGRUT0RPdEJ0biBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tYWRkVG9kby1jcmVhdGUtYWRkQnRuLmpzXCI7XG5pbXBvcnQgYWRkVE9ET0J1dHRvbkV2ZW50IGZyb20gXCIuL2FkZC10b2RvLWJ1dHRvbi1ldmVudC5qc1wiO1xuaW1wb3J0IHJlZnJlc2hUb2Rvc0NvbnRhaW5lciBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tcmVmcmVzaC1UT0RPUy1jb250YWluZXJcIjtcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZucy9lc21cIjtcbmltcG9ydCB1cGRhdGVMb2NhbFN0b3JhZ2UgZnJvbSBcIi4vbG9jYWwtc3RvcmFnZS1tZW5hZ2VyLmpzXCI7XG5cbmNvbnN0IGVkaXRUb2RvQnV0dG9uc0V2ZW50cyA9ICh0YXJnZXRQcm9qZWN0SW5kZXgsIHRvZG9JbmRleCwpID0+IHtcbiAgICBjb25zdCBkZWNsaW5lQnRuRnVuY3Rpb24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvQ3JlYXRlQ2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9DcmVhdGVDYW5jZWxCdG4nKTtcbiAgICAgICAgdG9kb0NyZWF0ZUNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZUFkZFRPRE90QnRuKCk7XG4gICAgICAgICAgICBhZGRUT0RPQnV0dG9uRXZlbnQoKTtcbiAgICAgICAgfSlcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgY29uZmlybUJ0biA9ICgoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0b2RvRWRpdENvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0VkaXRDb25maXJtQnRuJyk7XG4gICAgICAgIFxuICAgICAgICB0b2RvRWRpdENvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCB0YXJnZXRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXQnKS5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTmFtZUlucHV0VGV4dCcpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGF0ZVBpY2tlcklucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9UaW1lUGlja2VySW5wdXQnKTsgXG4gICAgICAgICAgICBjb25zdCBjb25maXJtQW5kRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybUFuZERyb3Bkb3duJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY2hlY2tEYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXRlID0gZGF0ZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWREYXRlIDwgdG9kYXkpIHJldHVybiB0cnVlOyAgIFxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmIChuYW1lLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9EYXRhRXJyb3InKSl7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvRGF0YUVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0YUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGFFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmlubmVyVGV4dCA9IFwiTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDEgY2hhcmFjdGVyIGxvbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUFuZERyb3Bkb3duLmFwcGVuZCh0b2RvRGF0YUVycm9yKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGFFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmNsYXNzTGlzdC5hZGQoJ3RvZG9EYXRhRXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5pbm5lclRleHQgPSBcIk5hbWUgbXVzdCBiZSBhdCBsZWFzdCAxIGNoYXJhY3RlciBsb25nXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1BbmREcm9wZG93bi5hcHBlbmQodG9kb0RhdGFFcnJvcik7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkYXRlLnZhbHVlLmxlbmd0aCA9PT0gMCB8fCBjaGVja0RhdGUoKSkge1xuICAgICAgICAgICAgICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvRGF0YUVycm9yJykpe1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0RhdGFFcnJvcicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGFFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmNsYXNzTGlzdC5hZGQoJ3RvZG9EYXRhRXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5pbm5lclRleHQgPSBcIkRhdGUgcmVxdXJlZCBhbmQgbXVzdCBiZSBzZXQgaW4gdGhlIGZ1dHVyZVwiO1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtQW5kRHJvcGRvd24uYXBwZW5kKHRvZG9EYXRhRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRhRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0YUVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuaW5uZXJUZXh0ID0gXCJEYXRlIHJlcXVyZWQgYW5kIG11c3QgYmUgc2V0IGluIHRoZSBmdXR1cmVcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUFuZERyb3Bkb3duLmFwcGVuZCh0b2RvRGF0YUVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aW1lLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvRGF0YUVycm9yJykpe1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0RhdGFFcnJvcicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGFFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmNsYXNzTGlzdC5hZGQoJ3RvZG9EYXRhRXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGFFcnJvci5pbm5lclRleHQgPSBcIlRpbWUgbXVzdCBiZSBzZXRcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUFuZERyb3Bkb3duLmFwcGVuZCh0b2RvRGF0YUVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0YUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhRXJyb3IuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGFFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0YUVycm9yLmlubmVyVGV4dCA9IFwiVGltZSBtdXN0IGJlIHNldFwiO1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtQW5kRHJvcGRvd24uYXBwZW5kKHRvZG9EYXRhRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFByb2plY3ROYW1lID09PSBcIkhPTUVcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBob21lVG9kbyA9IHByb2plY3RNZW5hZ2VyLmdldEhvbWVUb2Rvc0FycmF5KClbdG9kb0luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgaG9tZVRvZG8uc2V0VG9kb05hbWUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9OYW1lSW5wdXRUZXh0JykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBob21lVG9kby5zZXRUb2RvRGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0RhdGVQaWNrZXJJbnB1dCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaG9tZVRvZG8uc2V0VG9kb1RpbWUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9UaW1lUGlja2VySW5wdXQnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGhvbWVUb2RvLnNldFRvZG9Qcmlvcml0eShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1ByaW9yaXR5U2VsZWN0JykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBob21lVG9kby5zZXRUb2RvTm90ZXMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Ob3Rlc0lucHV0JykudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUFkZFRPRE90QnRuKCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZFRPRE9CdXR0b25FdmVudCgpO1xuICAgICAgICAgICAgICAgICAgICByZWZyZXNoVG9kb3NDb250YWluZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kbyA9IHByb2plY3RNZW5hZ2VyLmdldFByb2plY3RzQXJyYXkoKVt0YXJnZXRQcm9qZWN0SW5kZXhdLmdldFRvZG9zQXJyYXkoKVt0b2RvSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB0b2RvLnNldFRvZG9OYW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTmFtZUlucHV0VGV4dCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kby5zZXRUb2RvRGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0RhdGVQaWNrZXJJbnB1dCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kby5zZXRUb2RvVGltZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1RpbWVQaWNrZXJJbnB1dCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kby5zZXRUb2RvUHJpb3JpdHkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Qcmlvcml0eVNlbGVjdCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kby5zZXRUb2RvTm90ZXMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Ob3Rlc0lucHV0JykudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUFkZFRPRE90QnRuKCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZFRPRE9CdXR0b25FdmVudCgpO1xuICAgICAgICAgICAgICAgICAgICByZWZyZXNoVG9kb3NDb250YWluZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pKCk7XG5cbn07XG5leHBvcnQgZGVmYXVsdCBlZGl0VG9kb0J1dHRvbnNFdmVudHMiLCJpbXBvcnQgcHJvamVjdE1lbmFnZXIgZnJvbSBcIi4vcHJvamVjdC1tZW5hZ2VyLmpzXCI7XG5pbXBvcnQgdG9kb1Rhc2sgZnJvbSBcIi4vVE9ETy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgcHJvamVjdENyZWF0b3IgZnJvbSBcIi4vcHJvamVjdC1jcmVhdG9yLmpzXCI7XG5cbmNvbnN0IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIFxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaG9tZVRvZG9zXCIpICE9PSBudWxsKXtcbiAgICAgICAgbGV0IGhvbWVUb2Rvc0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhvbWVUb2Rvc1wiKSk7XG4gICAgICAgIGhvbWVUb2Rvc0FycmF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGxldCB0b2RvID0gdG9kb1Rhc2sodGFzay5uYW1lLCB0YXNrLmRhdGUsIHRhc2sudGltZSwgdGFzay5wcmlvcml0eSwgdGFzay5ub3Rlcyk7XG4gICAgICAgICAgICBwcm9qZWN0TWVuYWdlci5wdXNoVG9Ib21lVG9kb3NBcnJheSh0b2RvKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3ROYW1lc1wiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgcHJvamVjdE5hbWVzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdE5hbWVzXCIpKTtcbiAgICAgICAgcHJvamVjdE5hbWVzQXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIucHVzaFRvUHJvamVjdHNBcnJheShwcm9qZWN0Q3JlYXRvcihwcm9qZWN0KSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gcHJvamVjdC5nZXROYW1lKCk7XG5cbiAgICAgICAgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtwcm9qZWN0TmFtZX1gKSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCB0b2Rvc0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtwcm9qZWN0TmFtZX1gKSk7XG4gICAgICAgICAgICB0b2Rvc0FycmF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdG9kbyA9IHRvZG9UYXNrKHRhc2submFtZSwgdGFzay5kYXRlLCB0YXNrLnRpbWUsIHRhc2sucHJpb3JpdHksIHRhc2subm90ZXMpO1xuICAgICAgICAgICAgICAgIHByb2plY3QuYWRkVG9Ub2Rvc0FycmF5KHRvZG8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UiLCJpbXBvcnQgcmVmcmVzaFRvZG9zQ29udGFpbmVyIGZyb20gXCIuLi9kb20tZnVuY3Rpb25zL0RPTS1yZWZyZXNoLVRPRE9TLWNvbnRhaW5lci5qc1wiO1xuXG5jb25zdCBzaG93VG9kb3NGcm9tSG9tZVByb2plY3QgPSAoaG9tZVByb2plY3REaXYpID0+IHtcbiAgICBob21lUHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3REaXYnKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmdldCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgaG9tZVByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgndGFyZ2V0Jyk7XG5cbiAgICAgICAgcmVmcmVzaFRvZG9zQ29udGFpbmVyKCk7XG4gICAgICAgIFxuICAgIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHNob3dUb2Rvc0Zyb21Ib21lUHJvamVjdCIsImltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi9wcm9qZWN0LW1lbmFnZXIuanNcIjtcblxuY29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIFxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG4gICAgbGV0IGhvbWVUb2RvcyA9IFtdO1xuICAgIHByb2plY3RNZW5hZ2VyLmdldEhvbWVUb2Rvc0FycmF5KCkuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICBsZXQgdGFzayA9IG5ldyBPYmplY3QoKTtcbiAgICAgICAgdGFzay5uYW1lID0gdG9kby5nZXRUb2RvTmFtZSgpO1xuICAgICAgICB0YXNrLmRhdGUgPSB0b2RvLmdldFRvZG9EYXRlKCk7XG4gICAgICAgIHRhc2sudGltZSA9IHRvZG8uZ2V0dG9kb1RpbWUoKTtcbiAgICAgICAgdGFzay5wcmlvcml0eSA9IHRvZG8uZ2V0VG9kb1ByaW9yaXR5KCk7XG4gICAgICAgIHRhc2subm90ZXMgPSB0b2RvLmdldFRvZG9Ob3RlcygpO1xuICAgICAgICBob21lVG9kb3MucHVzaCh0YXNrKTtcbiAgICB9KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhvbWVUb2Rvc1wiLCBKU09OLnN0cmluZ2lmeShob21lVG9kb3MpKTtcblxuICAgIGxldCBwcm9qZWN0c0FycmF5ID0gW11cbiAgICBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgICAgICAgcHJvamVjdHNBcnJheS5wdXNoKHByb2plY3ROYW1lKTtcbiAgICB9KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3ROYW1lc1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycmF5KSk7XG5cbiAgICBcbiAgICBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgICAgICAgbGV0IHRvZG9zQXJyYXkgPSBbXTtcbiAgICAgICBcbiAgICAgICAgcHJvamVjdC5nZXRUb2Rvc0FycmF5KCkuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgbGV0IHRhc2sgPSBuZXcgT2JqZWN0KCk7XG4gICAgICAgICAgICB0YXNrLm5hbWUgPSB0b2RvLmdldFRvZG9OYW1lKCk7XG4gICAgICAgICAgICB0YXNrLmRhdGUgPSB0b2RvLmdldFRvZG9EYXRlKCk7XG4gICAgICAgICAgICB0YXNrLnRpbWUgPSB0b2RvLmdldHRvZG9UaW1lKCk7XG4gICAgICAgICAgICB0YXNrLnByaW9yaXR5ID0gdG9kby5nZXRUb2RvUHJpb3JpdHkoKTtcbiAgICAgICAgICAgIHRhc2subm90ZXMgPSB0b2RvLmdldFRvZG9Ob3RlcygpO1xuICAgICAgICAgICAgdG9kb3NBcnJheS5wdXNoKHRhc2spOyAgICAgICAgICBcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7cHJvamVjdE5hbWV9YCwgSlNPTi5zdHJpbmdpZnkodG9kb3NBcnJheSkpO1xuICAgIH0pO1xuXG5cbn1cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUxvY2FsU3RvcmFnZSIsImNvbnN0IHByb2plY3RDcmVhdG9yID0gKG5hbWUpID0+IHtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBuYW1lO1xuICAgIGxldCB0b2Rvc0FycmF5ID0gW107XG4gICAgXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHByb2plY3ROYW1lO1xuICAgIGNvbnN0IGdldFRvZG9zQXJyYXkgPSAoKSA9PiB0b2Rvc0FycmF5O1xuICAgIGNvbnN0IGVkaXRQcm9qZWN0TmFtZSA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgcHJvamVjdE5hbWUgPSBzdHJpbmc7XG4gICAgfVxuICAgIGNvbnN0IGFkZFRvVG9kb3NBcnJheSA9IChpdGVtKSA9PiB7XG4gICAgICAgIHRvZG9zQXJyYXkucHVzaChpdGVtKTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVRPRE8gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgdG9kb3NBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBjb25zdCBmbGF0VG9kb3NBcnJheSA9ICgpID0+IHtcbiAgICAgICAgdG9kb3NBcnJheSA9IHRvZG9zQXJyYXkuZmxhdCgpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXROYW1lLFxuICAgICAgICBnZXRUb2Rvc0FycmF5LFxuICAgICAgICBlZGl0UHJvamVjdE5hbWUsXG4gICAgICAgIGFkZFRvVG9kb3NBcnJheSxcbiAgICAgICAgcmVtb3ZlVE9ETyxcbiAgICAgICAgZmxhdFRvZG9zQXJyYXksXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdENyZWF0b3I7IiwiY29uc3QgcHJvamVjdE1lbmFnZXIgPSAoKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0c0FycmF5ID0gW107XG4gICAgbGV0IGhvbWVUb2Rvc0FycmF5ID0gW107XG4gICAgXG4gICAgY29uc3QgZ2V0UHJvamVjdHNBcnJheSA9ICgpID0+IHByb2plY3RzQXJyYXk7XG4gICAgY29uc3QgZ2V0SG9tZVRvZG9zQXJyYXkgPSAoKSA9PiBob21lVG9kb3NBcnJheTtcbiAgICBjb25zdCBwdXNoVG9Ib21lVG9kb3NBcnJheSA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGhvbWVUb2Rvc0FycmF5LnB1c2godG9kbyk7XG4gICAgfTtcbiAgICBjb25zdCBwdXNoVG9Qcm9qZWN0c0FycmF5ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdHNBcnJheS5wdXNoKHByb2plY3QpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0QWxsVG9kb3NGcm9tUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBhbGxUb2RvcyA9W107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICBhbGxUb2Rvcy5wdXNoKHByb2plY3RzQXJyYXlbaV0uZ2V0VG9kb3NBcnJheSlcbiAgICAgICAgfTtcbiAgICAgICAgYWxsVG9kb3MucHVzaChob21lVG9kb3NBcnJheSlcbiAgICAgICAgcmV0dXJuIGFsbFRvZG9zLmZsYXQoKVxuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgICAgICBwcm9qZWN0c0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVIb21lVE9ETyA9IChpbmRleCkgPT4ge1xuICAgICAgICBob21lVG9kb3NBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gICAgY29uc3QgbW92ZVRPRE9Gcm9tSG9tZVRvUHJvamVjdCA9ICh0b2RvSW5kZXgsIHByb2plY3RJbmRleCkgPT4ge1xuICAgICAgICBsZXQgdGVtcCA9IGhvbWVUb2Rvc0FycmF5LnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuICAgICAgICBwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0uYWRkVG9Ub2Rvc0FycmF5KHRlbXApO1xuICAgICAgICBwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0uZmxhdFRvZG9zQXJyYXkoKTtcbiAgICB9O1xuICAgIGNvbnN0IHNldFByb2plY3RzQXJyYXkgPSAoZGF0YSkgPT4ge1xuICAgICAgICBwcm9qZWN0c0FycmF5ID0gZGF0YTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldFByb2plY3RzQXJyYXksXG4gICAgICAgIGdldEFsbFRvZG9zRnJvbVByb2plY3RzLFxuICAgICAgICBnZXRIb21lVG9kb3NBcnJheSxcbiAgICAgICAgcHVzaFRvUHJvamVjdHNBcnJheSxcbiAgICAgICAgcHVzaFRvSG9tZVRvZG9zQXJyYXksXG4gICAgICAgIHJlbW92ZVByb2plY3QsXG4gICAgICAgIHJlbW92ZUhvbWVUT0RPLFxuICAgICAgICBtb3ZlVE9ET0Zyb21Ib21lVG9Qcm9qZWN0LFxuICAgICAgICBzZXRQcm9qZWN0c0FycmF5LFxuICAgIH1cbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TWVuYWdlciIsImltcG9ydCBwcm9qZWN0TWVuYWdlciBmcm9tIFwiLi9wcm9qZWN0LW1lbmFnZXIuanNcIjtcbmltcG9ydCByZWZyZXNoVG9kb3NDb250YWluZXIgZnJvbSBcIi4uL2RvbS1mdW5jdGlvbnMvRE9NLXJlZnJlc2gtVE9ET1MtY29udGFpbmVyXCI7IFxuaW1wb3J0IGVkaXRUb2RvQ29udGFpbmVyQ29udGVudHMgZnJvbSAnLi4vZG9tLWZ1bmN0aW9ucy9ET00tZWRpdFRvZG8tc3dhcC10by1Gb3JtJztcbmltcG9ydCBjcmVhdGVBZGRUT0RPdEJ0biBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tYWRkVG9kby1jcmVhdGUtYWRkQnRuLmpzXCI7XG5pbXBvcnQgYWRkVE9ET0J1dHRvbkV2ZW50IGZyb20gXCIuL2FkZC10b2RvLWJ1dHRvbi1ldmVudC5qc1wiO1xuaW1wb3J0IG1vdmVUb2RvRHJvcGRvd25Db250ZW50cyBmcm9tIFwiLi4vZG9tLWZ1bmN0aW9ucy9ET00tc2hvdy1tb3ZlLVRPRE8tZHJvcGRvd24uanNcIjtcbmltcG9ydCB1cGRhdGVMb2NhbFN0b3JhZ2UgZnJvbSBcIi4vbG9jYWwtc3RvcmFnZS1tZW5hZ2VyLmpzXCI7XG5jb25zdCB0b2RvRGl2c0V2ZW50cyA9ICgpID0+IHtcblxuICAgIGxldCB0YXJnZXRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXQnKS5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICBcbiAgICBjb25zdCB0b2RvRGVsZXRlQnV0dG9uRXZlbnQgPSAoZGVsZXRlQnV0dG9uLCB0b2RvSW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHRhcmdldFByb2plY3RJbmRleCA9IDA7XG4gICAgICAgIGlmICh0YXJnZXRQcm9qZWN0TmFtZSA9PT0gXCJIT01FXCIpIHtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcbiAgICAgICAgICAgICAgICBjcmVhdGVBZGRUT0RPdEJ0bigpO1xuICAgICAgICAgICAgICAgIGFkZFRPRE9CdXR0b25FdmVudCgpO1xuICAgICAgICAgICAgICAgIHByb2plY3RNZW5hZ2VyLnJlbW92ZUhvbWVUT0RPKHRvZG9JbmRleCk7XG4gICAgICAgICAgICAgICAgcmVmcmVzaFRvZG9zQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgICAgXG4gICAgICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICB9KTsgICAgXG4gICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpID09PSB0YXJnZXRQcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRQcm9qZWN0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgY3JlYXRlQWRkVE9ET3RCdG4oKTtcbiAgICAgICAgICAgICAgICBhZGRUT0RPQnV0dG9uRXZlbnQoKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KClbdGFyZ2V0UHJvamVjdEluZGV4XS5yZW1vdmVUT0RPKHRvZG9JbmRleCk7XG4gICAgICAgICAgICAgICAgcmVmcmVzaFRvZG9zQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCB0b2RvRWRpdEJ1dHRvbkV2ZW50ID0gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0QnV0dG9uLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdUb2RvTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nVG9kb0RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ1RvZG9UaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdUb2RvTm90ZXMsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgIGxldCB0YXJnZXRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXQnKS5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgICAgbGV0IHRhcmdldFByb2plY3RJbmRleCA9IDA7XG4gICAgICAgIGxldCB0b2RvTmFtZURpdkNvbnRlbnQgPSBzdHJpbmdUb2RvTmFtZTtcbiAgICAgICAgbGV0IHRvZG9EYXRlRGl2Q29udGVudCA9IHN0cmluZ1RvZG9EYXRlO1xuICAgICAgICBsZXQgdG9kb1RpbWVEaXZDb250ZW50ID0gc3RyaW5nVG9kb1RpbWU7XG4gICAgICAgIGxldCB0b2RvTm90ZXNEaXZDb250ZW50ID0gc3RyaW5nVG9kb05vdGVzO1xuICAgICAgICBsZXQgcGFzc2VkVG9kb0luZGV4ID0gdG9kb0luZGV4O1xuICAgICAgICBpZiAodGFyZ2V0UHJvamVjdE5hbWUgPT09IFwiSE9NRVwiKSB7XG4gICAgICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlZGl0VG9kb0NvbnRhaW5lckNvbnRlbnRzKHRhcmdldFByb2plY3RJbmRleCwgcGFzc2VkVG9kb0luZGV4LCB0b2RvTmFtZURpdkNvbnRlbnQsIHRvZG9EYXRlRGl2Q29udGVudCwgdG9kb1RpbWVEaXZDb250ZW50LCB0b2RvTm90ZXNEaXZDb250ZW50KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdE1lbmFnZXIuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpID09PSB0YXJnZXRQcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRQcm9qZWN0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlZGl0VG9kb0NvbnRhaW5lckNvbnRlbnRzKHRhcmdldFByb2plY3RJbmRleCwgcGFzc2VkVG9kb0luZGV4LCB0b2RvTmFtZURpdkNvbnRlbnQsIHRvZG9EYXRlRGl2Q29udGVudCwgdG9kb1RpbWVEaXZDb250ZW50LCB0b2RvTm90ZXNEaXZDb250ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9OyAgICBcbiAgICB9O1xuXG4gICAgY29uc3QgdG9kb01vdmVCdXR0b25FdmVudCA9IChtb3ZlQnV0dG9uLCB0b2RvSW5kZXgsIHRvZG9EaXYgKSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0TWVuYWdlci5nZXRQcm9qZWN0c0FycmF5KCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFsbFRvZG9zID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG9EaXYnKV07XG4gICAgICAgICAgICAgICAgYWxsVG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmdldFRvZG8nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RhcmdldFRvZG8nKTtcblxuICAgICAgICAgICAgICAgIGlmKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmVUb2RvUHJvamVjdHMnKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG9kb1Byb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmVUb2RvUHJvamVjdHMnKTtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvZG9Qcm9qZWN0cy5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvZG9Ecm9wZG93bkNvbnRlbnRzKHRhcmdldFByb2plY3ROYW1lLCB0b2RvSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsbFRvZG9zID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG9EaXYnKV07XG4gICAgICAgICAgICAgICAgICAgIGFsbFRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgndGFyZ2V0VG9kbycpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXJnZXRUb2RvJyk7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUb2RvRHJvcGRvd25Db250ZW50cyh0YXJnZXRQcm9qZWN0TmFtZSwgdG9kb0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCB0b2RvVGFyZ2V0RXZlbnQgPSAodG9kb0RpdikgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgIHRvZG9EaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWxsVG9kb3MgPSBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9kb0RpdicpXTtcbiAgICAgICAgICAgIGFsbFRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmdldFRvZG8nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXJnZXRUb2RvJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvZG9EZWxldGVCdXR0b25FdmVudCxcbiAgICAgICAgdG9kb0VkaXRCdXR0b25FdmVudCxcbiAgICAgICAgdG9kb01vdmVCdXR0b25FdmVudCxcbiAgICAgICAgdG9kb1RhcmdldEV2ZW50XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kb0RpdnNFdmVudHNcblxuXG5cbjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBfIGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBoZWFkZXJCb2R5Rm9vdGVyIGZyb20gJy4vZG9tLWZ1bmN0aW9ucy9ET00tcHJpbWUtZGl2cy5qcyc7XG5pbXBvcnQgY3JlYXRlSGVhZCBmcm9tICcuL2RvbS1mdW5jdGlvbnMvRE9NLWhlYWQuanMnO1xuaW1wb3J0IGNyZWF0ZUJvZHkgZnJvbSAnLi9kb20tZnVuY3Rpb25zL0RPTS1ib2R5LmpzJztcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSAnLi9kb20tZnVuY3Rpb25zL0RPTS1mb290ZXIuanMnO1xuaW1wb3J0IGFkZFByb2plY3RCdXR0b25FdmVudCBmcm9tICcuL2Z1bmN0aW9ucy9hZGQtcHJvamVjdC1idXR0b24tZXZlbnQuanMnO1xuaW1wb3J0IGNyZWF0ZUFkZFRPRE90QnRuIGZyb20gJy4vZG9tLWZ1bmN0aW9ucy9ET00tYWRkVG9kby1jcmVhdGUtYWRkQnRuLmpzJztcbmltcG9ydCBhZGRUT0RPQnV0dG9uRXZlbnQgZnJvbSAnLi9mdW5jdGlvbnMvYWRkLXRvZG8tYnV0dG9uLWV2ZW50LmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlIGZyb20gXCIuL2Z1bmN0aW9ucy9nZXQtZGF0YS1mcm9tLWxvY2FsLXN0b3JhZ2UuanNcIjtcbmltcG9ydCByZWZyZXNoVG9kb3NDb250YWluZXIgZnJvbSBcIi4vZG9tLWZ1bmN0aW9ucy9ET00tcmVmcmVzaC1UT0RPUy1jb250YWluZXJcIjtcbmltcG9ydCBzaG93UHJvamVjdHMgZnJvbSBcIi4vZG9tLWZ1bmN0aW9ucy9ET00tc2hvdy1wcm9qZWN0cy5qc1wiO1xuXG5cblxuaGVhZGVyQm9keUZvb3RlcigpO1xuY3JlYXRlSGVhZCgpO1xuY3JlYXRlQm9keSgpO1xuY3JlYXRlRm9vdGVyKCk7XG5hZGRQcm9qZWN0QnV0dG9uRXZlbnQoKTtcbmNyZWF0ZUFkZFRPRE90QnRuKCk7XG5hZGRUT0RPQnV0dG9uRXZlbnQoKTtcbmdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCk7XG5zaG93UHJvamVjdHMoKTtcbnJlZnJlc2hUb2Rvc0NvbnRhaW5lcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==