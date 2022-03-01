import addProjectButtonEvent from "./add-project-button-event.js";
import createAddProjectBtn from "../dom-functions/DOM-addProject-create-addBtn.js";
import projectMenager from "./project-menager.js";
import projectCreator from "./project-creator.js";
import showProjects from "../dom-functions/DOM-show-projects.js";

const addEventFunctiontsToForm = () => {
    const declineBtnFunction = (() => {
        const projectNameCancelBtn = document.querySelector('.projectNameCancelBtn');
        projectNameCancelBtn.addEventListener('click', () => {
            createAddProjectBtn();
            addProjectButtonEvent();
        })
    })();

    const confirmBtn = (() => {
        const projectNameConfirmBtn = document.querySelector('.projectNameConfirmBtn');
        projectNameConfirmBtn.addEventListener('click', () => {
            const projectNameInputText = document.getElementById('projectNameInputText').value;
            const project = projectCreator(projectNameInputText);
            projectMenager.pushToProjectsArray(project);      
            createAddProjectBtn();
            addProjectButtonEvent();
            showProjects(); 
        })
    })();

};
export default addEventFunctiontsToForm