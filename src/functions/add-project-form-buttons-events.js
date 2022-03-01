import addProjectButtonEvent from "./add-project-button-event.js";
import createAddProjectBtn from "../dom-functions/DOM-addProject-create-addBtn.js";
import projectMenager from "./project-menager.js"
import projectCreator from "./project-creator.js"

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
            let showProjects = (() => {
                document.querySelector('.projectsContainer').innerHTML= "";
                projectMenager.getProjectsArray().forEach((project) => {
                    let projectDiv = document.createElement('div');
                    projectDiv.classList.add('projectDiv');
                    projectDiv.innerText = `${project.getName()}`;
                    document.querySelector('.projectsContainer').append(projectDiv);
                })
            })(); 
            
            
            createAddProjectBtn();
            addProjectButtonEvent();
            console.log(projectMenager.getProjectsArray()[0].getName());
        })
    })();

};
export default addEventFunctiontsToForm