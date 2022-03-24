import addProjectButtonEvent from "./add-project-button-event.js";
import createAddProjectBtn from "../dom-functions/DOM-addProject-create-addBtn.js";
import projectMenager from "./project-menager.js";
import projectCreator from "./project-creator.js";
import showProjects from "../dom-functions/DOM-show-projects.js";
import updateLocalStorage from "./local-storage-menager.js";

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
            const validationMessageDiv = document.querySelector('.validationMessageDiv');
            const projectNameInputText = document.getElementById('projectNameInputText').value;
            const project = projectCreator(projectNameInputText);
            const projectNamesArray = [];
            projectMenager.getProjectsArray().forEach((project) => {
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
            projectMenager.pushToProjectsArray(project);      
            createAddProjectBtn();
            addProjectButtonEvent();
            showProjects();
            updateLocalStorage()
            }
        })
    })();
};
export default addEventFunctiontsToForm