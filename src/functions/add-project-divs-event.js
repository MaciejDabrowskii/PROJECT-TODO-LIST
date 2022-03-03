import projectMenager from "./project-menager.js";
import projectCreator from "./project-creator.js";
import todoTask from "./TODO-creator.js";
import createAddTODOtBtn from "../dom-functions/DOM-addTodo-create-addBtn.js";
import addTODOButtonEvent from "./add-todo-button-event.js";
import domShowTodo from "../dom-functions/DOM-show-TODO.js";
import showAllProjectTods from "../dom-functions/DOM-show-all-project-TODOS"

const addProjectDivEvent = (project, index) => {

    const homeProject = document.querySelector('.homeProjectDiv');
    homeProject.classList.add('target');

    project.addEventListener('click', () =>{
        let projectsArray = [...document.querySelectorAll('.projectDiv')];
        projectsArray.forEach((item) => {
            item.classList.remove('target'); 
        });
        homeProject.classList.remove('target');
        project.classList.add('target');
        projectsArray

        if (projectMenager.getProjectsArray().length === 0){
            return
        }else {
            
            projectMenager.getProjectsArray()[index].getTodosArray().forEach((todo) => {
                document.querySelector('.todosContainer').innerHTML = "";
                domShowTodo(todo);
            });
        };
    });
    
}
export default addProjectDivEvent
