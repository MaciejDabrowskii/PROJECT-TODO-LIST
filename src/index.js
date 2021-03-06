import _ from 'date-fns';
import headerBodyFooter from './dom-functions/DOM-prime-divs.js';
import createHead from './dom-functions/DOM-head.js';
import createBody from './dom-functions/DOM-body.js';
import createFooter from './dom-functions/DOM-footer.js';
import addProjectButtonEvent from './functions/add-project-button-event.js';
import createAddTODOtBtn from './dom-functions/DOM-addTodo-create-addBtn.js';
import addTODOButtonEvent from './functions/add-todo-button-event.js';
import './style.css';
import getDataFromLocalStorage from "./functions/get-data-from-local-storage.js";
import refreshTodosContainer from "./dom-functions/DOM-refresh-TODOS-container";
import showProjects from "./dom-functions/DOM-show-projects.js";



headerBodyFooter();
createHead();
createBody();
createFooter();
addProjectButtonEvent();
createAddTODOtBtn();
addTODOButtonEvent();
getDataFromLocalStorage();
showProjects();
refreshTodosContainer();