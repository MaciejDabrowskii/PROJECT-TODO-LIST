import projectMenager from "./project-menager.js";
import projectCreator from "./project-creator.js";
import todoTask from "./TODO-creator.js";
import createAddTODOtBtn from "../dom-functions/DOM-addTodo-create-addBtn.js";
import addTODOButtonEvent from "./add-todo-button-event.js";
import newTodo from "./create-new-todo.js";

const newTodoButtonsEvents = () => {
    const declineBtnFunction = (() => {
        const todoCreateCancelBtn = document.querySelector('.todoCreateCancelBtn');
        todoCreateCancelBtn.addEventListener('click', () => {
            createAddTODOtBtn();
            addTODOButtonEvent();
        })
    })();

    const confirmBtn = (() => {
        const todoCreateConfirmBtn = document.querySelector('.todoCreateConfirmBtn');
        todoCreateConfirmBtn.addEventListener('click', () => {
            const createTodo = newTodo();
            const projectName = document.querySelector('.target').firstChild.innerHTML;
            let projectsArray = projectMenager.getProjectsArray();
            let projectIndex; 
            for(let i = 0; i < projectsArray.length; i++ ) {
                if (projectMenager.getProjectsArray()[i].getName() === projectName) projectIndex = i;
            }
            const project = projectMenager.getProjectsArray()[projectIndex];
            project.addToTodosArray(createTodo); 
            createAddTODOtBtn();
            addTODOButtonEvent();
            // showProjects(); 
        })
    })();

};
export default newTodoButtonsEvents